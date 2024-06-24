type FeatureCardProps = { icon: string; title: string };

function FeatureCard({ icon, title }: FeatureCardProps) {
	return (
		<article className="shadow-2xl bg-white rounded-2xl  px-4 w-[16rem] h-[16.5rem]">
			<span className="flex justify-center items-center rounded-full w-28 h-28 bg-[#d8d2ff] p-9 mx-auto mt-8">
				<img className="w-full" src={icon} alt="" />
			</span>
			<h1 className="uppercase text-center mt-10 ">{title}</h1>
		</article>
	);
}
export default FeatureCard;
