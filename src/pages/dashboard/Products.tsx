import { NewProductCard } from "@/src/components/dashboard/cards/NewProductCard";
import ProductList from "@/src/components/dashboard/lists/ProductList";
import useCurrentShop from "@/src/hooks/useCurrentShop";
import { addZero } from "@/src/utils/utils";

function Products() {
	const { currentShop } = useCurrentShop();
	console.log("currentShop", currentShop)
	return (
		<main className="p-8">
			<h1 className="font-bold text-2xl">Your Merch</h1>
			<div className="flex justify-between items-center mt-5  bg-white px-4 py-4 rounded-lg border border-gray-200">
				<div className="flex items-center w-[70%] gap-3">
					<img
						className="w-5 invert-[.4]"
						src="/icons/search.svg"
						alt=""
					/>
					<input
						placeholder="Search products by name..."
						className="w-full focus:outline-none"
						type="text"
					/>
				</div>
				<NewProductCard />
			</div>
			<div className="flex justify-between items-center px-4 mt-4 bg-white rounded-lg border border-gray-200 [&>div]:w-full [&>div]:pl-7 [&>div]:py-8 [&>div>h2]:text-2xl [&>div>p]:text-md [&>div>p]:mt-2 [&>div>p]:text-gray-700">
				<div>
					<h2>{addZero(currentShop!.products!.length)}</h2>

					<p>Total Products</p>
				</div>
				<div className="border-l border-r border-l-gray-200 border-r-gray-200">
					<h2>{addZero(3)}</h2>

					<p>Total Sales</p>
				</div>
				<div>
					<h2 className="flex items-center gap-2">
						<img className="w-7" src="/icons/usdt.svg" alt="" /> 23
					</h2>

					<p>Total Revenue</p>
				</div>
			</div>
			<ProductList />
		</main>
	);
}
export default Products;
