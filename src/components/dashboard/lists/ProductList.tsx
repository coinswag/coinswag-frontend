import { Card, CardContent } from "@/src/components/ui/card";

import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/src/components/ui/table";
import ProductCard from "../cards/ProductCard";

import useCurrentStore from "@/src/hooks/useCurrentStore";
import ProductSkeleton from "../../loader/ProductSkeleton";
import useCurrentShop from "@/src/hooks/useCurrentShop";

const products = [
  {
    name: "Laser Lemonade Machine",
    status: "Draft",
    price: 499.99,
    totalSales: 25,
    createdAt: "2023-07-12 10:42 AM",
    actions: "Toggle menu",
  },
  {
    name: "Hypernova Headphones",
    status: "Active",
    price: 129.99,
    totalSales: 100,
    createdAt: "2023-10-18 03:21 PM",
    actions: "Toggle menu",
  },
  {
    name: "AeroGlow Desk Lamp",
    status: "Active",
    price: 39.99,
    totalSales: 50,
    createdAt: "2023-11-29 08:15 AM",
    actions: "Toggle menu",
  },
  {
    name: "TechTonic Energy Drink",
    status: "Draft",
    price: 2.99,
    totalSales: 0,
    createdAt: "2023-12-25 11:59 PM",
    actions: "Toggle menu",
  },
  {
    name: "Gamer Gear Pro Controller",
    status: "Active",
    price: 59.99,
    totalSales: 75,
    createdAt: "2024-01-01 12:00 AM",
    actions: "Toggle menu",
  },
  {
    name: "Luminous VR Headset",
    status: "Active",
    price: 199.99,
    totalSales: 30,
    createdAt: "2024-02-14 02:14 PM",
    actions: "Toggle menu",
  },
];


export default function ProductList() {
  const { currentShop } = useCurrentShop();

  console.log("store: ", currentShop);

  return (
    <Card className="mt-4 shadow-none">
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              {/* <TableHead className="hidden w-[100px] sm:table-cell">
								<span className="sr-only">Image</span>
							</TableHead> */}
              <TableHead className="font-bold">Name</TableHead>
              <TableHead className="font-bold"></TableHead>
              <TableHead className="font-bold">Size</TableHead>
              <TableHead className="font-bold">Price</TableHead>
              <TableHead className="hidden md:table-cell font-bold">
                Total Sales
              </TableHead>
              <TableHead className="hidden md:table-cell font-bold">
                Created at
              </TableHead>
              <TableHead>
                <span className="sr-only">Actions</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentShop?.products?.map((item, index) => (
              <ProductCard
                key={index}
                name={item.name}
                totalSales={0}
                size={item.sizes.join(",")}
                image={item.images[0]}
                price={item.price}
                date="2023-07-12 10:42 AM"
              />
            ))}
          </TableBody>
        </Table>
      </CardContent>
      {currentShop!.products!.length <= 0 && <div className="flex flex-col items-center py-5">
        <img className="w-9 invert-[.3]" src="/icons/empty-tray.svg" alt="" />
        <p className="text-sm mt-2">No available product</p>
      </div>}
    </Card>
  );
}
