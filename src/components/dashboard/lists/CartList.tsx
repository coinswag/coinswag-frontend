import CartItem from "../cards/CartItem";
import { Table, TableHeader, TableRow, TableHead  } from "../../ui/table";

const cartItems = [
	{
		image: "/images/merch/sweater.webp",
		name: "Classic Blue T-Shirt",
		price: 19.99,
		quantity: 2,
		size: "M",
	},
	{
		image: "/images/merch/sweater.webp",
		name: "Slim Fit Black Jeans",
		price: 49.99,
		quantity: 1,
		size: "L",
	},
	{
		image: "/images/merch/sweater.webp",
		name: "Comfortable Gray Hoodie",
		price: 39.99,
		quantity: 1,
		size: "XL",
	},
	{
		image: "/images/merch/sweater.webp",
		name: "Colorful Striped Socks",
		price: 9.99,
		quantity: 3,
		size: "S",
	},
	{
		image: "/images/merch/sweater.webp",
		name: "Vintage Leather Jacket",
		price: 199.99,
		quantity: 1,
		size: "L",
	},
] as const;

function CartList() {
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
					image={item.image}
					name={item.name}
					price={item.price}
					size={item.size}
				/>
			))}
		</Table>
	);
}
export default CartList;
