import ShopCard from "../../shop/ShopCard";
import { Merch } from "@/src/pages/my-shop/MyShop";

type ShopListPros = {
	products: Merch[];
};

function ShopList(props: ShopListPros) {
	return (
		<div className="shop__list">
			{props.products?.map((product, index) => (
				<ShopCard key={index} {...product} />
			))}
		</div>
	);
}
export default ShopList;
