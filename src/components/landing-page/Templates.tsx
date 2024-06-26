function Templates() {
	return (
		<section className="p-8">
			<h1 className="text-3xl font-bold text-center mb-4">
				Explore our Templates
			</h1>
			<p className="text-center text-xl mb-5">
				Use our expert designed templates,fully customized to <br /> suite
				your needs
			</p>
			<div className="bg-[#4629FA] py-12 px-12 rounded-2xl">
				<div className="border border-gray-400 py-8 px-8 rounded-2xl">
					<div className="flex justify-between">
						<div className="p-10 bg-white w-full clip__path">
							<span>
								<img className="w-16" src="/icons/alpha-blocks.png" alt="" />
							</span>
							<h1 className="font-bold text-4xl mt-10 mb-6">AlphaBlocks Merch</h1>
							<p className="text-xl w-[70%]">
								Browse our collection and discover <br /> the perfect merch to
								match your style.
							</p>

              <div className="flex mt-16">
                <span className="bg-primary flex justify-center items-center p-1 rounded-full w-6 h-6"><img className="block w-full"  src="/icons/facebook.svg" alt="" /></span>
                <span className="bg-primary flex justify-center items-center p-1 rounded-full w-6 h-6"><img className="block w-full"  src="/icons/facebook.svg" alt="" /></span>
                <span className="bg-primary flex justify-center items-center p-1 rounded-full w-6 h-6"><img className="block w-full"  src="/icons/facebook.svg" alt="" /></span>
              </div>
						</div>
						<div className="w-full flex justify-center items-center relative"><img className="h-full block" src="/images/template-sweater.png" alt="" /><span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
								<img className="w-24" src="/icons/alpha-blocks.png" alt="" />
							</span></div>
					</div>
				</div>
			</div>
		</section>
	);
}
export default Templates;
