import CustomerCard from "@/src/components/dashboard/cards/CustomerCard";
import BestProduct from "@/src/components/dashboard/chart/BestProduct";
import RevenueChart from "@/src/components/dashboard/chart/RevenueChart";
import WelcomeBoard from "@/src/components/dashboard/WelcomeBoard";
import { textColorMap } from "@/src/utils/utils";
import { Fragment } from "react/jsx-runtime";

function Home() {
	return (
		<main className="p-8">
			<h1 className="font-bold text-2xl">Your Progress</h1>
			<WelcomeBoard />
			<div className="grid grid-cols-chart_container gap-4 mt-8">
				<RevenueChart />
				<BestProduct />
			</div>
			<div className="mt-8 bg-white rounded-xl py-6 px-5">
				<h1 className="font-bold text-2xl">Recent Orders</h1>
				<div className="customer__table  mt-4">
					<div className="customer__card py-4 bg-violet-100 px-4 [&>p]:text-sm [&>p]:font-bold rounded-lg mb-2">
						<p>Customer</p>
						<p>Wallet</p>
                  <p>Email</p>
						<p>Date</p>
						<p>Orders</p>
						<p>Price</p>
					</div>
						<Fragment>
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
						</Fragment>
				</div>
			</div>
		</main>
	);
}
export default Home;
