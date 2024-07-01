import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/src/components/ui/table";
import { Badge } from "@/src/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/src/components/ui/tabs";
import { Button } from "@/src/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/src/components/ui/dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/src/components/ui/accordion";
import { ScrollArea } from "@/src/components/ui/scroll-area";
import { Separator } from "@/src/components/ui/separator";

interface OrderItem {
  productId: string;
  name: string;
  quantity: number;
  unitPrice: number;
  subtotal: number;
}

export interface Order {
  orderId: string;
  orderDate: number;
  status: "pending" | "fulfilled";
  totalAmount: number;
  paymentMethod: string;
  paymentStatus: string;
  customer: {
    address: string;
    customerId: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  };
  shippingInfo: {
    address: {
      street: string;
      city: string;
      state: string;
      postalCode: string;
      country: string;
    };
    method: string;
    trackingNumber: string;
  };
  items: OrderItem[];
  priceBreakdown: {
    subtotal: number;
    tax: number;
    shippingCost: number;
    discount: number;
    total: number;
  };
  notes: string;
  timestamps: {
    placed: string;
    updated: string;
  };
}

interface OrderListProps {
  orders: Order[];
}

const OrderList: React.FC<OrderListProps> = ({ orders }) => {
  const [activeTab, setActiveTab] = useState<"all" | "pending" | "fulfilled">(
    "all"
  );
  //   const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  const filteredOrders = orders.filter((order) => {
    if (activeTab === "all") return true;
    if (activeTab === "pending") return order.status === "pending";
    if (activeTab === "fulfilled") return order.status === "fulfilled";
    return false;
  });

  const renderOrderDetails = (order: Order) => (
    <ScrollArea className="h-[600px] w-full rounded-md border p-4">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="customer-info">
          <AccordionTrigger>Customer Information</AccordionTrigger>
          <AccordionContent>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <p className="font-semibold">Name:</p>
                <p>
                  {order.customer.firstName} {order.customer.lastName}
                </p>
              </div>
              <div>
                <p className="font-semibold">Customer ID:</p>
                <p>{order.customer.customerId}</p>
              </div>
              <div>
                <p className="font-semibold">Email:</p>
                <p>{order.customer.email}</p>
              </div>
              <div>
                <p className="font-semibold">Phone:</p>
                <p>{order.customer.phone}</p>
              </div>
              <div className="col-span-2">
                <p className="font-semibold">Blockchain Address:</p>
                <p className="break-all">{order.customer.address}</p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="shipping-info">
          <AccordionTrigger>Shipping Information</AccordionTrigger>
          <AccordionContent>
            <div className="grid grid-cols-2 gap-2">
              <div className="col-span-2">
                <p className="font-semibold">Address:</p>
                <p>{order.shippingInfo.address.street}</p>
                <p>
                  {order.shippingInfo.address.city},{" "}
                  {order.shippingInfo.address.state}{" "}
                  {order.shippingInfo.address.postalCode}
                </p>
                <p>{order.shippingInfo.address.country}</p>
              </div>
              <div>
                <p className="font-semibold">Method:</p>
                <p>{order.shippingInfo.method}</p>
              </div>
              <div>
                <p className="font-semibold">Tracking Number:</p>
                <p>{order.shippingInfo.trackingNumber}</p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="order-items">
          <AccordionTrigger>Order Items</AccordionTrigger>
          <AccordionContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Product</TableHead>
                  <TableHead>Quantity</TableHead>
                  <TableHead>Unit Price</TableHead>
                  <TableHead>Subtotal</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {order.items.map((item) => (
                  <TableRow key={item.productId}>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.quantity}</TableCell>
                    <TableCell>${item.unitPrice.toFixed(2)}</TableCell>
                    <TableCell>${item.subtotal.toFixed(2)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="price-breakdown">
          <AccordionTrigger>Price Breakdown</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>${order.priceBreakdown.subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Tax:</span>
                <span>${order.priceBreakdown.tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping:</span>
                <span>${order.priceBreakdown.shippingCost.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Discount:</span>
                <span>${order.priceBreakdown.discount.toFixed(2)}</span>
              </div>
              <Separator />
              <div className="flex justify-between font-bold">
                <span>Total:</span>
                <span>${order.priceBreakdown.total.toFixed(2)}</span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="additional-info">
          <AccordionTrigger>Additional Information</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              <div>
                <p className="font-semibold">Payment Method:</p>
                <p>{order.paymentMethod}</p>
              </div>
              <div>
                <p className="font-semibold">Payment Status:</p>
                <Badge
                  variant={
                    order.paymentStatus === "paid" ? "default" : "destructive"
                  }
                >
                  {order.paymentStatus}
                </Badge>
              </div>
              <div>
                <p className="font-semibold">Notes:</p>
                <p>{order.notes}</p>
              </div>
              <div>
                <p className="font-semibold">Order Placed:</p>
                <p>{new Date(order.timestamps.placed).toLocaleString()}</p>
              </div>
              <div>
                <p className="font-semibold">Last Updated:</p>
                <p>{new Date(order.timestamps.updated).toLocaleString()}</p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </ScrollArea>
  );

  const renderOrderTable = (orders: Order[]) => (
    <Table>
      <TableCaption>A list of {activeTab} orders</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Order ID</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Customer</TableHead>
          <TableHead>Total Amount</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Payment Status</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map((order) => (
          <TableRow key={order.orderId}>
            <TableCell className="font-medium">{order.orderId}</TableCell>
            <TableCell>
              {new Date(order.orderDate * 1000).toLocaleDateString()}
            </TableCell>
            <TableCell>{`${order.customer.firstName} ${order.customer.lastName}`}</TableCell>
            <TableCell>${order.totalAmount.toFixed(2)}</TableCell>
            <TableCell>
              <Badge
                variant={order.status === "fulfilled" ? "default" : "secondary"}
              >
                {order.status}
              </Badge>
            </TableCell>
            <TableCell>
              <Badge
                variant={
                  order.paymentStatus === "paid" ? "default" : "destructive"
                }
              >
                {order.paymentStatus}
              </Badge>
            </TableCell>
            <TableCell>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline">View Details</Button>
                </DialogTrigger>
                <DialogContent className="max-w-[800px]">
                  <DialogHeader>
                    <DialogTitle>Order Details - {order.orderId}</DialogTitle>
                  </DialogHeader>
                  {renderOrderDetails(order)}
                </DialogContent>
              </Dialog>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );

  return (
    <Card className="w-full shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-gray-800">
          Order List
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs
          defaultValue="all"
          onValueChange={(value) =>
            setActiveTab(value as "all" | "pending" | "fulfilled")
          }
        >
          <TabsList className="grid w-full grid-cols-3 mb-4">
            <TabsTrigger value="all">All Orders</TabsTrigger>
            <TabsTrigger value="pending">Pending</TabsTrigger>
            <TabsTrigger value="fulfilled">fulfilled</TabsTrigger>
          </TabsList>
          <TabsContent value="all">
            {renderOrderTable(filteredOrders)}
          </TabsContent>
          <TabsContent value="pending">
            {renderOrderTable(filteredOrders)}
          </TabsContent>
          <TabsContent value="fulfilled">
            {renderOrderTable(filteredOrders)}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default OrderList;
