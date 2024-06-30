import { addZero } from "@/src/utils/utils"

function Orders() {
  return (
    <main className="p-8">
      <h1 className="font-bold text-2xl">Your Orders</h1>
      <div className="flex justify-between items-center px-4 mt-4 bg-white rounded-lg border border-gray-200 [&>div]:w-full [&>div]:pl-7 [&>div]:py-8 [&>div>h2]:text-2xl [&>div>p]:text-md [&>div>p]:mt-2 [&>div>p]:text-gray-700">
         <div>
            <h2>{addZero(2)}</h2>
            <p>Total Orders</p>
         </div>
         <div className="border-l border-r border-l-gray-200 border-r-gray-200">
            <h2>{addZero(3)}</h2>
            <p>Total Customers</p>
         </div>
         <div>
            <h2 className="flex items-center gap-2"><img className="w-7" src="/icons/usdt.svg" alt="" /> 23</h2>
            <p>Total Revenue</p>
         </div>
      </div>
    </main>
  )
}
export default Orders