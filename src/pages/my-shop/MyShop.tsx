import "./style.scss";
import { Button } from "@/src/components/ui/button";
import ShopList from "@/src/components/dashboard/lists/ShopList";
import CartSheet from "@/src/components/dashboard/cards/CartSheet";

function MyShop() {
  return (
    <section className="my__shop bg-gray-50">
      <div className=" relative h-[14rem] bg shop__bg">
         <div className="absolute -translate-x-1/2 -translate-y-12 left-1/2 top-full flex flex-col justify-center ">
            <img className="bg-white p-2 shadow-lg w-[6rem] h-[6rem] rounded-full block mx-auto" src="/icons/dummy-logo.svg" alt="" />
            
         </div>
      </div>
      <div className="flex justify-between items-center px-8 h-[8vh] fixed w-full top-0 left-0 bg-white z-20 shadow-lg gap-3">
         <div>
            <p className="flex justify-center items-center text-primary font-black uppercase text-xl font-raleway">Sweatr</p>
         </div>
         <Button variant="outline" className="ml-auto text-semeibold block border border-gray-300 px-4 h-[70%] text-gray-500 rounded-lg text-sm bg-white">Connect Wallet</Button>
        <CartSheet />

      </div>
      <div className="relative mt-[5rem] w-[45%] h-12  mx-auto">
         <input  className=" rounded-3xl   block border h-full w-full border-gray-500 outline- indent-12 focus:outline-none -z-10 text-gray-700" placeholder="Search Products here  "/>
         <img className="h-[50%] absolute top-1/2 -translate-y-1/2 left-4 invert-[.5]" src="/icons/search.svg" alt="" />

      </div>

      <ShopList />


       
    </section>
  )
}
export default MyShop;