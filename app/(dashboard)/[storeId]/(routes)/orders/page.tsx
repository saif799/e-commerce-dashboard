import { format } from "date-fns";
import prismadb from "@/lib/prismadb";
import BillboardClient from "./components/client";
import { OrdersColumns } from "./components/columns";
import { formatter } from "@/lib/utils";

const Orders = async ({ params }: { params: { storeId: string } }) => {
  const orders = await prismadb.order.findMany({
    where: {
      storeId: params.storeId,
    },
    include: {
      orderItems: {
        include: { product: true },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const formatedOrders: OrdersColumns[] = orders.map((item) => ({
    id: item.id,
    phone: item.phone,
    adress: item.adress,
    products: item.orderItems
      .map((orderItem) => orderItem.product.name)
      .join(", "),
    isPaid: item.isPaid,
    totalPrice: formatter.format(
      item.orderItems.reduce((total, item) => {
        return total + Number(item.product.price);
      }, 0)
    ),

    createdAt: format(item.createdAt, "MMMM do, yyyy"),
  }));
  return (
    <div className="flex-col ">
      <div className="flex-1 space-y-4 p-8 pt-6 ">
        <BillboardClient data={formatedOrders} />
      </div>
    </div>
  );
};

export default Orders;
