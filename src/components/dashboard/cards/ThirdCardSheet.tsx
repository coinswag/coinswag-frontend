import { Card, CardContent } from "@/src/components/ui/card";

import { Separator } from "@/src/components/ui/separator";
import { Button } from "../../ui/button";
import { CartSheet } from "./CartSheet";

export default function ThirdCardSheet(props: CartSheet) {
	return (
		<Card className="overflow-hidden border-none shadow-none p-0 ">
			<CardContent className=" text-sm p-0">
				<div className="grid gap-3">
					<div className="font-semibold">Order Details</div>
					<ul className="grid gap-3">
						<li className="flex items-center justify-between">
							<span className="text-muted-foreground">
								Glimmer Lamps x <span>2</span>
							</span>
							<span>$250.00</span>
						</li>
						<li className="flex items-center justify-between">
							<span className="text-muted-foreground">
								Aqua Filters x <span>1</span>
							</span>
							<span>$49.00</span>
						</li>
					</ul>
					<Separator className="my-2" />
					<ul className="grid gap-3">
						<li className="flex items-center justify-between">
							<span className="text-muted-foreground">Subtotal</span>
							<span>$299.00</span>
						</li>
						<li className="flex items-center justify-between">
							<span className="text-muted-foreground">Shipping</span>
							<span>$5.00</span>
						</li>
						<li className="flex items-center justify-between">
							<span className="text-muted-foreground">Tax</span>
							<span>$25.00</span>
						</li>
						<li className="flex items-center justify-between font-semibold">
							<span className="text-muted-foreground">Total</span>
							<span>$329.00</span>
						</li>
					</ul>
				</div>
				<Separator className="my-4" />
				<div className="grid grid-cols-2 gap-4">
					<div className="grid gap-3">
						<div className="font-semibold">Shipping Information</div>
						<address className="grid gap-0.5 not-italic text-muted-foreground">
							<span>Liam Johnson</span>
							
						</address>
					</div>
				</div>
				<Separator className="my-4" />
				<div className="grid gap-3">
					<div className="font-semibold">Customer Information</div>
					<dl className="grid gap-3">
						<div className="flex items-center justify-between">
							<dt className="text-muted-foreground">Customer</dt>
							<dd>Liam Johnson</dd>
						</div>
						<div className="flex items-center justify-between">
							<dt className="text-muted-foreground">Email</dt>
							<dd>
								<a href="mailto:">liam@acme.com</a>
							</dd>
						</div>
						<div className="flex items-center justify-between">
							<dt className="text-muted-foreground">Phone</dt>
							<dd>
								<a href="tel:">+1 234 567 890</a>
							</dd>
						</div>
					</dl>
				</div>
				<Button
				className="bg-primary w-full block py-4 h-auto hover:bg-[#7375f0] mt-6"
				onClick={() => props.handleCurrentPage(2)}
				type="submit"
			>
				Checkout
			</Button>
			<Button
				variant="outline"
				className=" w-full block py-4 h-auto mt-3 text-gray-700 border-dashed "
				type="submit"
				onClick={()=> props.handleCurrentPage(1)}
			>Back</Button>
			</CardContent>
		</Card>
	);
}
