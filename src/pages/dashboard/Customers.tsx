import { textColorMap } from "@/src/utils/utils";
import CustomerCard from "@/src/components/dashboard/cards/CustomerCard";
import { Fragment } from "react/jsx-runtime";

function Customer() {
	return (
		<main className="p-8">
			<h1 className="font-bold text-2xl">Your Customers</h1>
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
			</div>
			<div className="mt-4 bg-white py-4 rounded-lg px-3">
				{Object.keys(textColorMap).map((key, index) => (
					<CustomerCard
						key={index}
						email="aniokechukwudi7@gmail.com"
						name="Anioke Sebastian"
						backgroundColor={key}
						color={textColorMap[key as keyof typeof textColorMap]}
						date="23-04-2024"
						walletAddress="0x7A3b6E44F8C8E58c485b71E1e7BF7f25E4d3C8E9"
						price={23}
						orders={7}
					/>
				))}
			</div>
		</main>
	);
}
export default Customer;
