import FeatureCard from "./FeatureCard";

function Features() {
	return (
		<section className="px-8 py-10">
			<h1 className="text-3xl font-bold text-center">
				Sell and Profit <br /> With seamless experience
			</h1>

			<div className="flex justify-center items-center gap-10 mt-12">
				<FeatureCard
					icon="/icons/wallet.svg"
					title="Connect wallet and create Store"
				/>
				<FeatureCard
					icon="/icons/check.svg"
					title="CHOOSE  PRODUCTS TO OFFER"
				/>
				<FeatureCard
					icon="/icons/rocket.svg"
					title="STOCK & PROMOTE To COMPANY"
				/>
			</div>
		</section>
	);
}
export default Features;
