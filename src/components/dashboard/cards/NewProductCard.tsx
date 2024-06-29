import { Button } from "@/src/components/ui/button";
import { Input } from "../../ui/input";

import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/src/components/ui/sheet";
import { Label } from "../../ui/label";
import { Textarea } from "../../ui/textarea";
import StockCard from "./StockCard";
import StockList from "../lists/StockList";
import Loader from "../../loader/circle-loader/Loader";

export function 	NewProductCard() {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<button className="flex items-center justify-between bg-primary text-sm text-white gap-1 px-4 py-2 font-bold rounded-md">
					<img className="w-5 invert" src="/icons/add.svg" alt="" />
					Create Product
				</button>
			</SheetTrigger>
			<SheetContent className="w-[35%] overflow-y-auto new__product__card">
				<SheetHeader>
					<SheetTitle className="text-2xl">
						Create Merch
					</SheetTitle>
					<SheetDescription>
						Provide the details below to create a new merch in your shop.
					</SheetDescription>
				</SheetHeader>

				<div className="grid w-full  items-center gap-1.5 mt-6">
					<Label  className="mb-2 required" htmlFor="name">Name</Label>
					<Input required type="email" id="name" className="w-full h-10" />
               <span className="text-gray-500 text-sm">Give your product a short and clear name.</span>
				</div>
				<div className="grid w-full  items-center gap-1.5 mt-6">
					<Label  className="mb-2 required" htmlFor="description">Description</Label>
					<Textarea required  id="description" className="w-full h-18 resize-none" />
               <span className="text-gray-500 text-sm">Give your product a short and clear description.</span>
				</div>
				<div className="grid w-full  items-center gap-1.5 mt-6">
					<Label  className="mb-2 required" htmlFor="price">Product Image</Label>
					<div className="border border-spacing-4 border-dashed border-gray-400 rounded-xl flex flex-col  items-center py-9 hover:border-solid hover:border-primary cursor-pointer">
						<img className="w-8 invert-[.5] mb-2" src="/icons/upload.svg" alt="" />
						<p className=" font-semibold text-[1rem]">Click here to add a product image</p>
						<span className="text-[.7rem] text-gray-400 ">Supports only JPG, JPEG and PNG</span>
					</div>
					<div className="flex justify-between items-center gap-3 border border-gray-300 px-4 py-3 rounded-lg border-dashed">
						<img className="w-16" src="/images/merch/sweater.webp" alt="" />
						<div className="mr-auto">
							<p className="font-semibold text-gray-800" >myisoieo-28qe.jpg</p>
							<span className="text-gray-500">414.12kB</span>
						</div>
						<span className="w-8 h-8 rounded-full flex justify-center items-center bg-gray-400 p-1">
							<img className="invert" src="/icons/cancel.svg" alt="" />
						</span>
					</div>
				</div>
				<StockList />


				<SheetFooter className="mt-4">
					<SheetClose asChild>
						<Button className="w-full py-6" type="submit">Save changes</Button>
					</SheetClose>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	);
}
