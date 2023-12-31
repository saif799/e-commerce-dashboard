"use client";
import { useParams, useRouter } from "next/navigation";
import { Plus } from "lucide-react";

import Heading from "@/components/Heading";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { BillboardColumns, columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";
import APiList from "@/components/ui/api-list";

interface BillboardClientProps {
  data: BillboardColumns[];
}

const BillboardClient: React.FC<BillboardClientProps> = ({ data }) => {
  const router = useRouter();
  const params = useParams();

  return (
    <>
      <div className="flex items-center justify-between  ">
        <Heading
          title={`Billboards ${data.length}`}
          description="Manage billboards for your store"
        />

        <Button
          onClick={() => router.push(`/${params.storeId}/billboards/new`)}
        >
          <Plus className=" mr-2 h-4 w-4" />
          Add new
        </Button>
      </div>

      <Separator />

      <DataTable searchKey="label" columns={columns} data={data} />

      <Heading title="APi" description="Api calls for Billboards" />
      <Separator />
      <APiList entityIdName="BIllboardId" entityName="billboards" />
    </>
  );
};

export default BillboardClient;
