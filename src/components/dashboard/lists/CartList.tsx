import CartItem from "../cards/CartItem";
import { Table, TableHeader, TableRow, TableHead } from "../../ui/table";
import { IMerch } from "@/src/hooks/useCart";


function CartList({cartItems}: {cartItems: IMerch[]}) {
	console.log(cartItems)
	return (
		<Table>
			<TableHeader>
				<TableRow>
					{/* <TableHead className="hidden w-[100px] sm:table-cell">
								<span className="sr-only">Image</span>
							</TableHead> */}
					<TableHead className="font-bold">Merch</TableHead>
					<TableHead className="font-bold"></TableHead>
					<TableHead className="font-bold">Size</TableHead>
					<TableHead className="font-bold">quantity</TableHead>
					<TableHead>
						<span className="sr-only">Actions</span>
					</TableHead>
				</TableRow>
			</TableHeader>

			{cartItems.map((item, index) => (
				<CartItem
					key={index}
					{...item}
				/>
			))}
			
		</Table>
	);
}
export default CartList;
