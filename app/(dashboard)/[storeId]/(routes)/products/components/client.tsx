"use client";
import { useParams, useRouter } from "next/navigation";
import { Plus } from "lucide-react";

import Heading from "@/components/Heading";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { ProductColumns, columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";
import APiList from "@/components/ui/api-list";

interface ProductClientProps {
  data: ProductColumns[];
}

const ProductClient: React.FC<ProductClientProps> = ({ data }) => {
  const router = useRouter();
  const params = useParams();

  return (
    <>
      <div className="flex items-center justify-between  ">
        <Heading
          title={`Products ${data.length}`}
          description="Manage Products for your store"
        />

        <Button
          onClick={() => router.push(`/${params.storeId}/products/new`)}
        >
          <Plus className=" mr-2 h-4 w-4" />
          Add new
        </Button>
      </div>

      <Separator />

      <DataTable searchKey="name" columns={columns} data={data} />

      <Heading title="APi" description="Api calls for Products" />
      <Separator />
      <APiList entityIdName="productID" entityName="products" />
    </>
  );
};

export default ProductClient;
