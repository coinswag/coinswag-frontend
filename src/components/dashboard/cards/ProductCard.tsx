

import { Badge } from "@/src/components/ui/badge";
import { Button } from "@/src/components/ui/button";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuTrigger,
} from "@/src/components/ui/dropdown-menu";
import {
	TableCell,
	TableRow,
} from "@/src/components/ui/table";

type ProductCardProps = {
   image: string;
   name: string; 
   price: number;
   date: string;
   size: "S" | "M" | "L" | "XL";
   totalSales: number;
}

export default function ProductCard(props: ProductCardProps) {
	return (
		<TableRow>
			<TableCell className="hidden sm:table-cell">
				<img
					alt="Product image"
					className="aspect-square rounded-md object-cover"
					height="64"
					src={props.image}
					width="64"
				/>
			</TableCell>
			<TableCell className="font-medium">{props.name}</TableCell>
			<TableCell>
				<Badge variant="outline">{props.size}</Badge>
			</TableCell>
			<TableCell>{props.price} USDC</TableCell>
			<TableCell className="hidden md:table-cell">{props.totalSales}</TableCell>
			<TableCell className="hidden md:table-cell">
				{props.date}
			</TableCell>
			<TableCell>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button aria-haspopup="true" size="icon" variant="ghost">
							<img src="/icons/more.svg" className="h-4 w-4" />
							<span className="sr-only">Toggle menu</span>
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end">
						<DropdownMenuLabel>Actions</DropdownMenuLabel>
						<DropdownMenuItem>Edit</DropdownMenuItem>
						<DropdownMenuItem>Delete</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</TableCell>
		</TableRow>
	);
}
