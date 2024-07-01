import { Button } from "@/src/components/ui/button";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/src/components/ui/sheet";
import CartList from "../lists/CartList";
import React, { useState, Fragment, useRef } from "react";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import { SelectScrollable } from "../../ui/country-code-select";
import { Textarea } from "../../ui/textarea";
import ThirdCardSheet from "./ThirdCardSheet";
import useCart from "@/src/hooks/useCart";
import { IMerch } from "@/src/hooks/useCart";
import useCustomer, { ICustomer } from "@/src/hooks/useCustomers";

export type CartSheet = {
	handleCurrentPage: (pageNumber: number) => void;
	handleClose?: () => void;
};

const FirstCardSheet = (props: CartSheet) => {
	const { cartItems } = useCart();
	const getTotalPrice = (cartItems: IMerch[]) => {
		const totalPrice = cartItems.reduce((total, item) => {
			return total + item.price * item.quantity;
		}, 0);
		return totalPrice;
	};
	return (
		<Fragment>
			<SheetHeader>
				<SheetTitle>Your Cart</SheetTitle>
				<SheetDescription className="border-b border-dashed pb-4">
					Your selected items are listed below. Update quantities, remove
					items, or continue to checkout when you're ready to complete your
					purchase.
				</SheetDescription>
			</SheetHeader>
			<CartList cartItems={cartItems} />
			{cartItems.length === 0 && (
				<img
					className="w-[70%] mx-auto block"
					src="/icons/no-cart.svg"
					alt=""
				/>
			)}
			<div className="flex justify-between items-center my-4 ">
				<p className="font-bold text-xl text-gray-700">Total</p>
				<div className="flex justify-center items-center gap-1">
					<img className="w-7" src="/icons/usdt.svg" alt="" />
					<p className="font-bold text-xl text-gray-700 ">
						{getTotalPrice(cartItems)}
					</p>
				</div>
			</div>
			{cartItems.length > 0 && (
				<Button
					className="bg-primary w-full block py-3 h-auto"
					onClick={() => props.handleCurrentPage(1)}
					type="submit"
				>
					Checkout
				</Button>
			)}
			<Button
				variant="outline"
				className=" w-full block py-3 h-auto mt-3 text-gray-700"
				type="submit"
				onClick={props.handleClose}
			>
				Continue Shopping
			</Button>
		</Fragment>
	);
};

const SecondCardSheet = (props: CartSheet) => {
	const [newCustomer, setNewCustomer] = useState<ICustomer |null>(null);

	const [code, setCode] = useState("");

	const {setNewCustomer: setNewStoreCustomer} = useCustomer();

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.currentTarget;

		console.log("name", name)

		if(name == "phoneNumber") {
			console.log(newCustomer)
			return setNewCustomer((prev) => ({
				...prev!,
				[name]: value,
			}));
		}

		setNewCustomer((prev) => ({
			...prev!,
			[name]: value,
		}));
		console.log(newCustomer)
	};

	const handleClick =()=> {
		setNewStoreCustomer({...newCustomer!, phoneNumber: `${code}${newCustomer?.phoneNumber}` }!)
		props.handleCurrentPage(2)
	}
	return (
		<Fragment>
			<p className="py-6 border-b border-dashed border-b-gray-300 text-xl text-gray-700 font-bold">
				Sweatr
			</p>
			<div className="grid w-full  items-center gap-1.5 mt-6">
				<Label className="mb-2 required" htmlFor="name">
					Your name
				</Label>
				<Input
					value={newCustomer?.name}
					onChange={handleChange}
					required
					type="name"
					id="name"
					name="name"
					className="w-full h-10"
				/>
			</div>
			<div className="grid w-full  items-center gap-1.5 mt-6">
				<Label className="mb-2 required" htmlFor="name">
					Your email
				</Label>
				<Input
					value={newCustomer?.email}
					onChange={handleChange}
					required
					type="email"
					id="email"
					name="email"
					className="w-full h-10"
				/>
			</div>
			<div className="grid w-full  items-center gap-1.5 mt-6">
				<Label className="mb-2 required" htmlFor="name">
					Your phone number
				</Label>
				<div className="flex justify-center items-center gap-3">
					<SelectScrollable
						handleValueChange={(value) => setCode(value)}
					/>
					<Input
						onChange={handleChange}
						value={newCustomer?.phoneNumber}
						required
						type="telephone"
						id="phoneNumber"
						name="phoneNumber"
						className="w-full h-10"
					/>
				</div>
			</div>
			<div className="grid w-full gap-1.5 mt-6">
				<Label className="mb-2 required" htmlFor="address">
					Your shipping address
				</Label>
				<Textarea
					className="h-24 w-full resize-none"
					name="address"
					id="address"
					placeholder="Type your message here."
					value={newCustomer?.address}
					onChange={handleChange}
				/>
			</div>
			<Button
				className="bg-primary w-full block py-4 h-auto hover:bg-[#7375f0] mt-6"
				onClick={handleClick}
				type="submit"
			>
				Checkout
			</Button>
			<Button
				variant="outline"
				className=" w-full block py-4 h-auto mt-3 text-gray-700 border-dashed "
				type="submit"
				onClick={() => props.handleCurrentPage(1)}
			>
				Continue Shopping
			</Button>
		</Fragment>
	);
};

function CartSheet() {
	const [currentPage, setCurrentPage] = useState(0);
	const elementRef = useRef<HTMLDivElement>(null);
	const { cartItems } = useCart();

	const handlePageChange = (page: number) => {
		setCurrentPage(page);
	};

	const handleClose = () => {
		const element = document.getElementById(
			"cart-close"
		) as HTMLButtonElement;
		element.click();
	};

	const renderCurrentPage = () => {
		if (currentPage == 0) {
			return (
				<FirstCardSheet
					handleCurrentPage={handlePageChange}
					handleClose={handleClose}
				/>
			);
		}
		if (currentPage == 1) {
			return <SecondCardSheet handleCurrentPage={handlePageChange} />;
		}
		if (currentPage == 2) {
			return <ThirdCardSheet handleCurrentPage={handlePageChange} />;
		}
	};

	return (
		<Sheet>
			<SheetTrigger asChild>
				<div className="relative cursor-pointer">
					<span className="w-6 h-6 rounded-full flex justify-center items-center bg-primary font-bold text-white p-1 text-sm absolute -right-2 top-0 z-10">
						{cartItems?.length || 0}
					</span>
					<img className="invert-[.5] w-8" src="/icons/cart.svg" alt="" />
				</div>
			</SheetTrigger>
			<SheetContent ref={elementRef} className="w-[40%] overflow-y-auto">
				{renderCurrentPage()}
			</SheetContent>
		</Sheet>
	);
}

export default CartSheet;
