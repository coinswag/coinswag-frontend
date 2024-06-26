import BestProduct from "@/src/components/dashboard/chart/BestProduct"
import RevenueChart from "@/src/components/dashboard/chart/RevenueChart"
import WelcomeBoard from "@/src/components/dashboard/WelcomeBoard"

function Home() {
  return (
    <main className="p-8">
      <h1 className="font-bold text-2xl">Your Progress</h1>
      <WelcomeBoard />
      <div className="grid grid-cols-chart_container gap-4">
      <RevenueChart />
      <BestProduct />

      </div>
      <div className="mt-">
         <h1 className="font-bold text-2xl">Recent Customers</h1>
      </div>
    </main>
  )
}
export default Home