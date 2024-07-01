import OrderList, { Order } from "@/src/components/dashboard/lists/order-list";
import { addZero } from "@/src/utils/utils";

function Orders() {
  //   const generateRandomAddress = () => {
  //     return (
  //       "0x" +
  //       Array(40)
  //         .fill(0)
  //         .map(() => Math.floor(Math.random() * 16).toString(16))
  //         .join("")
  //     );
  //   };
  const orders: Order[] = [
    {
      orderId: "ORD12345",
      orderDate: 1684159800, // May 15, 2023
      status: "pending",
      totalAmount: 89.99,
      paymentMethod: "credit_card",
      paymentStatus: "paid",
      customer: {
        address: "0x1234567890123456789012345678901234567890",
        customerId: "CUST789",
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@example.com",
        phone: "+1234567890",
      },
      shippingInfo: {
        address: {
          street: "123 Main St",
          city: "Anytown",
          state: "CA",
          postalCode: "12345",
          country: "USA",
        },
        method: "standard",
        trackingNumber: "1Z999AA1234567890",
      },
      items: [
        {
          productId: "PROD001",
          name: "Widget X",
          quantity: 2,
          unitPrice: 29.99,
          subtotal: 59.98,
        },
        {
          productId: "PROD002",
          name: "Gadget Y",
          quantity: 1,
          unitPrice: 19.99,
          subtotal: 19.99,
        },
      ],
      priceBreakdown: {
        subtotal: 79.97,
        tax: 6.4,
        shippingCost: 5.99,
        discount: -2.37,
        total: 89.99,
      },
      notes: "Please leave package at the door",
      timestamps: {
        placed: "2023-05-15T14:30:00Z",
        updated: "2023-05-15T15:45:00Z",
      },
    },
    {
      orderId: "ORD67890",
      orderDate: 1684246200, // May 16, 2023
      status: "fulfilled",
      totalAmount: 149.95,
      paymentMethod: "paypal",
      paymentStatus: "paid",
      customer: {
        address: "0x9876543210987654321098765432109876543210",
        customerId: "CUST456",
        firstName: "Jane",
        lastName: "Smith",
        email: "jane.smith@example.com",
        phone: "+1987654321",
      },
      shippingInfo: {
        address: {
          street: "456 Elm Street",
          city: "Somewhere",
          state: "NY",
          postalCode: "67890",
          country: "USA",
        },
        method: "express",
        trackingNumber: "1Z888BB9876543210",
      },
      items: [
        {
          productId: "PROD003",
          name: "Super Gadget",
          quantity: 1,
          unitPrice: 129.99,
          subtotal: 129.99,
        },
        {
          productId: "PROD004",
          name: "Accessory Pack",
          quantity: 1,
          unitPrice: 19.99,
          subtotal: 19.99,
        },
      ],
      priceBreakdown: {
        subtotal: 149.98,
        tax: 12.0,
        shippingCost: 9.99,
        discount: -22.02,
        total: 149.95,
      },
      notes: "Gift wrap requested",
      timestamps: {
        placed: "2023-05-16T10:15:00Z",
        updated: "2023-05-16T14:30:00Z",
      },
    },
    {
      orderId: "ORD24680",
      orderDate: 1684332600, // May 17, 2023
      status: "pending",
      totalAmount: 59.97,
      paymentMethod: "crypto",
      paymentStatus: "pending",
      customer: {
        address: "0x5555666677778888999900001111222233334444",
        customerId: "CUST135",
        firstName: "Bob",
        lastName: "Johnson",
        email: "bob.johnson@example.com",
        phone: "+1122334455",
      },
      shippingInfo: {
        address: {
          street: "789 Oak Road",
          city: "Elsewhere",
          state: "TX",
          postalCode: "54321",
          country: "USA",
        },
        method: "standard",
        trackingNumber: "Pending",
      },
      items: [
        {
          productId: "PROD005",
          name: "Cool T-Shirt",
          quantity: 3,
          unitPrice: 19.99,
          subtotal: 59.97,
        },
      ],
      priceBreakdown: {
        subtotal: 59.97,
        tax: 4.8,
        shippingCost: 0, // Free shipping
        discount: -4.8, // Tax discount for crypto payment
        total: 59.97,
      },
      notes: "Contact before delivery",
      timestamps: {
        placed: "2023-05-17T08:45:00Z",
        updated: "2023-05-17T08:45:00Z",
      },
    },
    {
      orderId: "ORD13579",
      orderDate: 1684419000, // May 18, 2023
      status: "fulfilled",
      totalAmount: 299.99,
      paymentMethod: "bank_transfer",
      paymentStatus: "paid",
      customer: {
        address: "0x1111222233334444555566667777888899990000",
        customerId: "CUST246",
        firstName: "Alice",
        lastName: "Brown",
        email: "alice.brown@example.com",
        phone: "+1567891234",
      },
      shippingInfo: {
        address: {
          street: "101 Pine Lane",
          city: "Nowhere",
          state: "FL",
          postalCode: "11223",
          country: "USA",
        },
        method: "overnight",
        trackingNumber: "1Z777CC5678901234",
      },
      items: [
        {
          productId: "PROD006",
          name: "Premium Headphones",
          quantity: 1,
          unitPrice: 299.99,
          subtotal: 299.99,
        },
      ],
      priceBreakdown: {
        subtotal: 299.99,
        tax: 24.0,
        shippingCost: 19.99,
        discount: -43.99, // Promotion applied
        total: 299.99,
      },
      notes: "Signature required for delivery",
      timestamps: {
        placed: "2023-05-18T16:20:00Z",
        updated: "2023-05-18T18:45:00Z",
      },
    },
    {
      orderId: "ORD02468",
      orderDate: 1684505400, // May 19, 2023
      status: "pending",
      totalAmount: 175.95,
      paymentMethod: "gift_card",
      paymentStatus: "paid",
      customer: {
        address: "0x2222333344445555666677778888999900001111",
        customerId: "CUST357",
        firstName: "Charlie",
        lastName: "Davis",
        email: "charlie.davis@example.com",
        phone: "+1234567890",
      },
      shippingInfo: {
        address: {
          street: "202 Maple Avenue",
          city: "Smallville",
          state: "OH",
          postalCode: "44556",
          country: "USA",
        },
        method: "standard",
        trackingNumber: "1Z666DD4321098765",
      },
      items: [
        {
          productId: "PROD007",
          name: "Smart Watch",
          quantity: 1,
          unitPrice: 149.99,
          subtotal: 149.99,
        },
        {
          productId: "PROD008",
          name: "Watch Band",
          quantity: 2,
          unitPrice: 12.99,
          subtotal: 25.98,
        },
      ],
      priceBreakdown: {
        subtotal: 175.97,
        tax: 14.08,
        shippingCost: 7.9,
        discount: -22.0, // Gift card discount
        total: 175.95,
      },
      notes: "This is a gift, please do not include receipt in the package",
      timestamps: {
        placed: "2023-05-19T11:10:00Z",
        updated: "2023-05-19T11:10:00Z",
      },
    },
  ];
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
          <h2 className="flex items-center gap-2">
            <img className="w-7" src="/icons/usdt.svg" alt="" /> 23
          </h2>
          <p>Total Revenue</p>
        </div>
      </div>
      <div className="mx-auto p-4">
        <OrderList orders={orders} />
      </div>
    </main>
  );
}
export default Orders;
