import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import { TableCell, TableRow } from "@/src/components/ui/table";

import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/src/components/ui/select";

export type StockCardProps = {
	stocks: number;
	size: "S" | "M" | "L" | "XL";
	index: number;
};

export function SelectDemo({ size }: { size: StockCardProps["size"] }) {
	return (
		<Select value={size}>
			<SelectTrigger className="w-[180px]">
				<SelectValue placeholder="Select a size" />
			</SelectTrigger>
			<SelectContent>
				<SelectGroup>
					<SelectItem defaultChecked value="S">
						S
					</SelectItem>
					<SelectItem value="M">M</SelectItem>
					<SelectItem value="L">L</SelectItem>
					<SelectItem value="XL">XL</SelectItem>
				</SelectGroup>
			</SelectContent>
		</Select>
	);
}

export default function StockCard(props: StockCardProps) {
	return (
		<TableRow>
			<TableCell>
				<Label htmlFor={`stock-${props.index}`} className="sr-only">
					Stock
				</Label>
				<Input
					id={`stock-${props.index}`}
					type="number"
					value={props.stocks}
					placeholder="Stocks"
				/>
			</TableCell>
			<TableCell>
				<SelectDemo size={props.size} />
			</TableCell>
		</TableRow>
	);
}
