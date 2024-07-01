import { Card, CardContent } from "@/src/components/ui/card";

import { Separator } from "@/src/components/ui/separator";
import { Button } from "../../ui/button";
import { CartSheet } from "./CartSheet";
import useCart from "@/src/hooks/useCart";
import { IMerch } from "@/src/hooks/useCart";
import useCustomer from "@/src/hooks/useCustomers";
import showToast from "@/src/utils/showToast";
import { useConnectWallet } from "@web3-onboard/react";

export default function ThirdCardSheet(props: CartSheet) {
	const { cartItems } = useCart();
	const { newCustomer } = useCustomer();
	const getTotalPrice = (cartItems: IMerch[]) => {
		const totalPrice = cartItems.reduce((total, item) => {
			return total + item.price * item.quantity;
		}, 0);
		return totalPrice;
	};
	const [{ wallet, connecting }, connect, disconnect] = useConnectWallet();

	const payWithPayStack =()=> {
		showToast.loading("Making Payment")
		setTimeout(()=>showToast.loading("Validating Payment"), 5000)
		setTimeout(()=>showToast.success("Payment Succeedd"), 100000)
	}

	const payWithCypto = ()=> {
		connect();
		setTimeout(()=> disconnect({ label: wallet!.label }), 6000)
	}
	

	return (
		<Card className="overflow-hidden border-none shadow-none p-0 ">
			<CardContent className=" text-sm p-0">
				<div className="grid gap-3">
					<div className="font-semibold">Order Details</div>
					<ul className="grid gap-3">
						{cartItems.map((item, index) => (
							<li
								key={index}
								className="flex items-center justify-between"
							>
								<span className="text-muted-foreground">
									{item.name} x <span>{item.quantity}</span>
								</span>
								<span>{item.price}USDT</span>
							</li>
						))}
					</ul>
					<Separator className="my-2" />
					<ul className="grid gap-3">
						<li className="flex items-center justify-between">
							<span className="text-muted-foreground">Subtotal</span>
							<span>{getTotalPrice(cartItems)} USDT</span>
						</li>
						<li className="flex items-center justify-between">
							<span className="text-muted-foreground">Shipping</span>
							<span>0.00</span>
						</li>
						<li className="flex items-center justify-between">
							<span className="text-muted-foreground">Tax</span>
							<span>{getTotalPrice(cartItems)} USDT</span>
						</li>
						<li className="flex items-center justify-between font-semibold">
							<span className="text-muted-foreground">Total</span>
							<span>{getTotalPrice(cartItems)} USDT</span>
						</li>
					</ul>
				</div>
				<Separator className="my-4" />
				<div className="grid grid-cols-2 gap-4">
					<div className="grid gap-3">
						<div className="font-semibold">Shipping Information</div>
						<address className="grid gap-0.5 not-italic text-muted-foreground">
							<span>{newCustomer?.address}</span>
						</address>
					</div>
				</div>
				<Separator className="my-4" />
				<div className="grid gap-3">
					<div className="font-semibold">Customer Information</div>
					<dl className="grid gap-3">
						<div className="flex items-center justify-between">
							<dt className="text-muted-foreground">Customer</dt>
							<dd>{newCustomer?.name}</dd>
						</div>
						<div className="flex items-center justify-between">
							<dt className="text-muted-foreground">Email</dt>
							<dd>
								<a href="mailto:">{newCustomer?.email}</a>
							</dd>
						</div>
						<div className="flex items-center justify-between">
							<dt className="text-muted-foreground">Phone</dt>
							<dd>
								<a href="tel:">{newCustomer?.phoneNumber}</a>
							</dd>
						</div>
					</dl>
				</div>
				<Button
					className="bg-[#4ea738] w-full block py-4 h-auto hover:opacity-85 mt-6"
					onClick={payWithPayStack}
					type="submit"
				>
					Pay with PayStack
				</Button>
				<Button
					className="bg-primary w-full block py-4 h-auto hover:bg-[#7375f0] mt-6"
					onClick={payWithCypto}
					type="submit"
				>
					Pay with Cypto
				</Button>
				<Button
					variant="outline"
					className=" w-full block py-4 h-auto mt-3 text-gray-700 border-dashed "
					type="submit"
					onClick={() => props.handleCurrentPage(1)}
				>
					Back
				</Button>
			</CardContent>
		</Card>
	);
}
