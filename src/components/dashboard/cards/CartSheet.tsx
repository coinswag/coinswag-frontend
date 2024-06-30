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
import { useState, Fragment } from "react";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import { SelectScrollable } from "../../ui/country-code-select";
import { Textarea } from "../../ui/textarea";
import ThirdCardSheet from "./ThirdCardSheet";

export type CartSheet = {
	handleCurrentPage: (pageNumber: number) => void;
};

const FirstCardSheet = (props: CartSheet) => {
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
			<CartList />
			<div className="flex justify-between items-center my-4 ">
				<p className="font-bold text-xl">Total</p>
				<div className="flex justify-center items-center gap-1">
					<img className="w-7" src="/icons/usdt.svg" alt="" />
					<p className="font-bold text-xl">28</p>
				</div>
			</div>
			<Button
				className="bg-primary w-full block py-3 h-auto"
				onClick={() => props.handleCurrentPage(1)}
				type="submit"
			>
				Checkout
			</Button>
			<Button
				variant="outline"
				className=" w-full block py-3 h-auto mt-3 text-gray-700"
				type="submit"
			>
				Continue Shopping
			</Button>
		</Fragment>
	);
};

const SecondCardSheet = (props: CartSheet) => {
	return (
		<Fragment>
			<p className="py-6 border-b border-dashed border-b-gray-300 text-xl text-gray-700 font-bold">
				Sweatr
			</p>
			<div className="grid w-full  items-center gap-1.5 mt-6">
				<Label className="mb-2 required" htmlFor="name">
					Your name
				</Label>
				<Input required type="email" id="name" className="w-full h-10" />
				
			</div>
			<div className="grid w-full  items-center gap-1.5 mt-6">
				<Label className="mb-2 required" htmlFor="name">
					Your email
				</Label>
				<Input required type="email" id="name" className="w-full h-10" />
				
			</div>
			<div className="grid w-full  items-center gap-1.5 mt-6">
				<Label className="mb-2 required" htmlFor="name">
					Your phone number
				</Label>
				<div className="flex justify-center items-center gap-3">
					<SelectScrollable />
					<Input required type="email" id="name" className="w-full h-10" />
				</div>
				
			</div>
			<div className="grid w-full gap-1.5 mt-6">
				<Label className="mb-2 required" htmlFor="message">Your shipping address</Label>
				<Textarea className="h-24 w-full resize-none" placeholder="Type your message here." id="message" />
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
			>
				Continue Shopping
			</Button>
		</Fragment>
	);
};



function CartSheet() {
	const [currentPage, setCurrentPage] = useState(0);

	const handlePageChange = (page: number) => {
		setCurrentPage(page);
	};

	const renderCurrentPage = () => {
		if (currentPage == 0) {
			return <FirstCardSheet handleCurrentPage={handlePageChange} />;
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
						45
					</span>
					<img className="invert-[.5] w-8" src="/icons/cart.svg" alt="" />
				</div>
			</SheetTrigger>
			<SheetContent className="w-[40%] overflow-y-auto">
				{renderCurrentPage()}
			</SheetContent>
		</Sheet>
	);
}

export default CartSheet;
