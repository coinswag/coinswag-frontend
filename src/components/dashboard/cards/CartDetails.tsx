import {
	Dialog,
	DialogContent,
	DialogTrigger,
} from "@/src/components/ui/dialog";

import { Button } from "../../ui/button";
import { ToggleGroup, ToggleGroupItem } from "../../ui/toggle-group";
import { Merch } from "@/src/pages/my-shop/MyShop";
import { useState, useRef } from "react";
import useCart from "@/src/hooks/useCart";
import showToast from "@/src/utils/showToast";
import usePost from "@/src/hooks/usePost";
import useCurrentShop from "@/src/hooks/useCurrentShop";

export function CartDetails(props: Merch) {
	const { addToCart } = useCart();
	const [quantity, setQuantity] = useState(1);
	const elementRef = useRef<HTMLDivElement>(null);
	const { currentShop } = useCurrentShop();
	const { postData, loading } = usePost();
	const handleDecreaseBtn = () => {
		if (quantity == 1) return;
		setQuantity(quantity - 1);
	};
	const handleIncreaseBtn = () => {
		setQuantity(quantity + 1);
	};
	const [activeSize, setActiveSize] =
		useState<(typeof props.sizes)[number]>("M");

	const handleToggle = (value: (typeof props.sizes)[number]) => {
		setActiveSize(value);
	};

	const handleClick = async () => {
		console.log(currentShop)
		await postData("/cart", {
			name: currentShop?.name,
			url: currentShop?.url,
			tokenId: currentShop?.tokenId,
			items : [
				{
					productId: props._id,
					quantity: quantity,
					size: activeSize
				}
			]
		});
		const newCartItem = { ...props, quantity, size: activeSize };
		const button = document.getElementById("close-cart") as HTMLButtonElement;
		button.click();
		addToCart(newCartItem);
		showToast.success("Added to Cart");
	};

	return (
		<Dialog>
			<DialogTrigger asChild>
				<button className="bg-primary w-full py-4 text-center text-white text-sm font-semibold hover:opacity-80">
					View Merch
				</button>
			</DialogTrigger>
			<DialogContent
				ref={elementRef}
				className="w-[65rem] flex justify-between "
			>
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
							{props.name}
						</h1>
						<div className="flex mt-5 gap-12">
							<div>
								<span className="text-[.7rem] font-bold text-gray-500 mb-2 block font-raleway">
									PRICE
								</span>
								<div className="flex gap-1 items-center   py-1 rounded-xl">
									<img className="w-6" src="/icons/usdt.svg" alt="" />
									<p className="font-semibold text-2xl text-gray-600 ">
										{props.price}
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

									<p className="  text-sm text-gray-400">{quantity}</p>

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
						<ToggleGroup
							type="single"
							value={activeSize}
							onValueChange={handleToggle}
							variant="outline"
						>
							{props.sizes.map((size) => (
								<ToggleGroupItem
									key={size}
									className={`px-3  ${
										activeSize == size ? "bg-pink-600" : ""
									}`}
									value={size}
								>
									{size}
								</ToggleGroupItem>
							))}
						</ToggleGroup>
						<span className="text-[.7rem] font-bold text-gray-700 mt-4 mb-2 block font-raleway">
							DESCRIPTION
						</span>
						<p className="text-[.78rem] text-gray-600 font-raleway">
							{props.description}
						</p>
						<div className="flex gap-8 mb-5 mt-3 items-center">
							<div>
								<span className="text-[.7rem] font-bold text-gray-500 font-raleway">
									TOTAL PRICE
								</span>
								<h2 className="text-gray-700">
									{quantity * props.price}USDC
								</h2>
							</div>

							<Button
								onClick={handleClick}
								disabled={loading}
								className="bg-primary h-[105%] px-8 disabled:opacity-50 active:80"
							>
								Add to Cart
							</Button>
						</div>
					</div>
				</div>
			</DialogContent>
		</Dialog>
	);
}
