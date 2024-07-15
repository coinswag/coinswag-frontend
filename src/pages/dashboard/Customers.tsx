import { textColorMap } from "@/src/utils/utils";
import CustomerCard from "@/src/components/dashboard/cards/CustomerCard";
import { Fragment } from "react/jsx-runtime";

export const customerData = [
	{
	  name: "Alice Johnson",
	  walletAddress: "0x1234567890123456789012345678901234567890",
	  date: "2024-07-15",
	  orders: 5,
	  price: 250.50,
	  backgroundColor: "#F0F4F8",
	  color: "#1A365D",
	  email: "alice.johnson@example.com"
	},
	{
	  name: "Bob Smith",
	  walletAddress: "0xABCDEF0123456789ABCDEF0123456789ABCDEF01",
	  date: "2024-07-14",
	  orders: 3,
	  price: 150.75,
	  backgroundColor: "#FEFCBF",
	  color: "#744210",
	  email: "bob.smith@example.com"
	},
	{
	  name: "Charlie Brown",
	  walletAddress: "0x9876543210987654321098765432109876543210",
	  date: "2024-07-13",
	  orders: 7,
	  price: 350.25,
	  backgroundColor: "#E6FFFA",
	  color: "#234E52",
	  email: "charlie.brown@example.com"
	},
	{
	  name: "Diana Prince",
	  walletAddress: "0xFEDCBA9876543210FEDCBA9876543210FEDCBA98",
	  date: "2024-07-12",
	  orders: 2,
	  price: 100.00,
	  backgroundColor: "#FFF5F5",
	  color: "#63171B",
	  email: "diana.prince@example.com"
	},
	{
	  name: "Ethan Hunt",
	  walletAddress: "0x0123456789ABCDEF0123456789ABCDEF01234567",
	  date: "2024-07-11",
	  orders: 4,
	  price: 200.30,
	  backgroundColor: "#EBF8FF",
	  color: "#2A4365",
	  email: "ethan.hunt@example.com"
	},
	{
	  name: "Fiona Gallagher",
	  walletAddress: "0x89ABCDEF0123456789ABCDEF0123456789ABCDEF",
	  date: "2024-07-10",
	  orders: 6,
	  price: 300.60,
	  backgroundColor: "#F0FFF4",
	  color: "#22543D",
	  email: "fiona.gallagher@example.com"
	},
	{
	  name: "George Costanza",
	  walletAddress: "0x3210987654321098765432109876543210987654",
	  date: "2024-07-09",
	  orders: 1,
	  price: 50.25,
	  backgroundColor: "#FAF5FF",
	  color: "#44337A",
	  email: "george.costanza@example.com"
	}
 ];

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
			<div className="mt-8 bg-white rounded-xl pt-0 py-6 px-4">
				<div className="customer__table  mt-4">
					<div className="customer__card pt-7 pb-3 border-b border-b-gray-100  px-4 [&>p]:text-sm [&>p]:font-bold [&>p]:text-gray-600  mb-2">
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
									email={customerData[index].email}
									name={customerData[index].name}
									backgroundColor={key}
									color={textColorMap[key as keyof typeof textColorMap]}
									date={customerData[index].date}
									walletAddress={customerData[index].walletAddress}
									price={customerData[index].price}
									orders={customerData[index].orders}
								/>
							))}
						</Fragment>
				</div>
			</div>
		</main>
	);
}
export default Customer;
