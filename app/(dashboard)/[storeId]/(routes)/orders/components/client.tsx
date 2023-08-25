"use client";

import Heading from "@/components/Heading";
import { Separator } from "@/components/ui/separator";
import { OrdersColumns, columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";

interface OrderClientProps {
  data: OrdersColumns[];
}

const OrderboardClient: React.FC<OrderClientProps> = ({ data }) => {
  return (
    <>
      <Heading
        title={`Orders ${data.length}`}
        description="Manage orders for your store"
      />

      <Separator />

      <DataTable searchKey="products" columns={columns} data={data} />
    </>
  );
};

export default OrderboardClient;
