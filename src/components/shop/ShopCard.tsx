function ShopCard() {
  return (
    <article className=" bg-white shadow-md rounded-lg overflow-hidden">
      <div className="relative ">
        <img className="block mx-auto" src="/images/merch/sweater.webp" alt="" />
       
      </div>
      <div>
        <div>
        <p className="font-semibold text-gray-700 px-4 py-3 text-center">Sweater D34</p>
        <div className="flex justify-between items-center px-3 py-2 border-t border-t-gray-200">
        <div className="flex justify-center gap-1 items-center  top-3 right-3 px-4 py-2">
          <img className="w-5 invert-[.4]" src="/icons/cloth.svg" alt="" />
          <p className="font-semibold text-gray-800 ">23</p>
        </div>
        <div className="flex justify-center gap-1 items-center  top-3 right-3 px-4 py-2">
          <img className="w-6" src="/icons/usdt.svg" alt="" />
          <p className="font-semibold text-gray-800 ">23</p>
        </div>

        </div>

        </div>
        <button className="bg-primary w-full py-4 text-center text-white text-sm font-semibold">View Merch</button>
      </div>
    </article>
  )
}
export default ShopCard;