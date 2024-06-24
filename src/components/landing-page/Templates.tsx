function Templates() {
	return (
		<section className="p-8">
			<h1 className="text-3xl font-bold text-center mb-4">
				Explore our Templates
			</h1>
			<p className="text-center text-xl">
				Use our expert designed templates,fully customized to <br /> suite
				your needs
			</p>
			<div className="bg-[#4629FA] py-12 px-12">
				<div className="border border-gray-400 py-8 px-8 rounded-2xl">
					<div className="flex justify-between">
						<div className="p-6 bg-white w-full clip__path">
							<span>
								<img className="w-24" src="/icons/alpha-blocks.png" alt="" />
							</span>
							<h1 className=" text-4xl mt-6 mb-6">AlphaBlocks Merch</h1>
							<p>
								Browse our collection and discover <br /> the perfect merch to
								match your style.
							</p>

              <div>
                <span><img  src="/icons/facebook.svg" alt="" /></span>
              </div>
						</div>
						<div className="w-full "><img src="/images/template-sweater.png" alt="" /></div>
					</div>
				</div>
			</div>
		</section>
	);
}
export default Templates;
