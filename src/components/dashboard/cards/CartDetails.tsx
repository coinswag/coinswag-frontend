import {
	Dialog,
	DialogContent,
	DialogTrigger,
} from "@/src/components/ui/dialog";
import { Button } from "../../ui/button";
import { ToggleGroup, ToggleGroupItem } from "../../ui/toggle-group";

export function CartDetails() {
	const handleDecreaseBtn = () => {};
	const handleIncreaseBtn = () => {};
	return (
		<Dialog>
			<DialogTrigger asChild>
				<button className="bg-primary w-full py-4 text-center text-white text-sm font-semibold">
					View Merch
				</button>
			</DialogTrigger>
			<DialogContent className="w-[65rem] flex justify-between ">
				<div className="w-1/2 p-3 items-center flex justify-center">
					<img
						className="w-full"
						src="/images/merch/sweater.webp"
						alt=""
					/>
				</div>
				<div className="w-1/2 pt-8 bg-[#f2f0fa91] p-3">
					<div>
						<h1 className="font-semibold text-gray-500 text-2xl">
							Classic Blue T-Shirt
						</h1>
						<div className="flex mt-5 gap-12">
							<div>
								<span className="text-[.7rem] font-bold text-gray-500 mb-2 block font-raleway">
									PRICE
								</span>
								<div className="flex gap-1 items-center   py-1 rounded-xl">
									<img className="w-6" src="/icons/usdt.svg" alt="" />
									<p className="font-semibold text-2xl text-gray-600 ">
										23
									</p>
								</div>
							</div>
							<div>
								<span className="text-[.7rem] font-bold text-gray-500 mb-2 block font-raleway">
									QUANTITY
								</span>
								<div className="hidden md:flex gap-3 h-fit w-fit px-2 rounded-3xl items-center py-1 ">
									<img
										onClick={handleDecreaseBtn}
										className="w-7 invert-[.6] block cursor-pointer py-1 h-7 rounded-full border border-gray-500"
										src="/icons/minus.svg"
										alt="minus-icon"
									/>

									<p className="  text-sm text-gray-400">{2}</p>

									<img
										onClick={handleIncreaseBtn}
										className="w-7 invert-[.6] block cursor-pointer py-1 h-7  rounded-full border border-gray-500"
										src="/icons/add.svg"
										alt="plus-icon"
									/>
								</div>
							</div>
						</div>
						<span className="text-[.7rem] font-bold text-gray-500 mb-3 block mt-3 font-raleway">
							SIZE
						</span>
						<ToggleGroup className="" type="single" defaultValue="m" variant="outline">
							<ToggleGroupItem className="px-5 active:bg-red-300"  value="s">S</ToggleGroupItem>
							<ToggleGroupItem className="px-5"  value="m">M</ToggleGroupItem>
							<ToggleGroupItem className="px-5"  value="l">L</ToggleGroupItem>
							<ToggleGroupItem className="px-5"  value="xl">XL</ToggleGroupItem>
						</ToggleGroup>
						<span className="text-[.7rem] font-bold text-gray-700 mt-4 mb-2 block font-raleway">
							DESCRIPTION
						</span>
						<p className="text-[.78rem] text-gray-600 font-raleway">
							A versatile and comfortable blue t-shirt, perfect for
							casual wear. Made from soft cotton, it features a timeless
							crew neck design and a relaxed fit suitable for any
							occasion.
						</p>
						<div className="flex gap-8 mb-5 mt-3 items-center">
							<div>
								<span className="text-[.7rem] font-bold text-gray-500 font-raleway">
									TOTAL PRICE
								</span>
								<h2 className="text-gray-700">23USDC</h2>
							</div>

							<Button className="bg-primary h-[105%] px-8">Add to Cart</Button>
						</div>
					</div>
				</div>
			</DialogContent>
		</Dialog>
	);
}
