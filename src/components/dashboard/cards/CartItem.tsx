import { Badge } from "@/src/components/ui/badge";
import { Button } from "@/src/components/ui/button";

import { TableCell, TableRow } from "@/src/components/ui/table";
import { IMerch } from "@/src/hooks/useCart";
import { useState } from "react";
import useCart from "@/src/hooks/useCart";

export default function CartItem(props: IMerch) {
	const [quantity, setQuantity] = useState(props.quantity);
	const { removeFromCart } = useCart();
	const handleDecreaseBtn = () => {
		if (quantity == 1) return;
		setQuantity(quantity - 1);
	};
	const handleIncreaseBtn = () => {
		setQuantity(quantity + 1);
	};
	const handleDelete = (id: string) => {
		removeFromCart(id);
	};
	return (
		<TableRow>
			<TableCell className="hidden sm:table-cell relative">
				{/* <p className="text-white rounded-lg font-bold absolute h-full w-full flex justify-center items-center bg-[#52525275]">{props.size}</p> */}
				<img
					alt="Product image"
					className="aspect-square rounded-md object-cover"
					height="64"
					src={props.images[0]}
					width="64"
				/>
			</TableCell>
			<TableCell className="font-medium">
				<p className=" text-nowrap text-gray-700 text-sm">{props.name}</p>
				<span className="text-gray-500 text-sm">
					{props.price * quantity} USDC
				</span>
			</TableCell>
			<TableCell>
				<Badge variant="outline">{props.size}</Badge>
			</TableCell>

			<TableCell>
				<div className="hidden md:flex gap-3 h-fit border border-gray-100 w-fit px-3 rounded-2xl items-center py-1">
					<img
						onClick={handleDecreaseBtn}
						className="w-4 invert-[.6] block cursor-pointer py-1"
						src="/icons/minus.svg"
						alt="minus-icon"
					/>
					<p className="  text-sm text-gray-400">{quantity}</p>
					<img
						onClick={handleIncreaseBtn}
						className="w-4 invert-[.6] block cursor-pointer py-1"
						src="/icons/add.svg"
						alt="plus-icon"
					/>
				</div>
			</TableCell>
			<TableCell className="hidden md:table-cell">
				<Button onClick={()=>handleDelete(props._id)} variant="outline">
					<img
						className="w-6 invert-[.5]"
						src="/icons/delete.svg"
						alt=""
					/>
				</Button>
			</TableCell>
		</TableRow>
	);
}
