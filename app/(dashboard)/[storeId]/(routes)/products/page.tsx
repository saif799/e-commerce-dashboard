import { format } from "date-fns";
import prismadb from "@/lib/prismadb";
import BillboardClient from "./components/client";
import { ProductColumns } from "./components/columns";
import { formatter } from "@/lib/utils";

const Products = async ({ params }: { params: { storeId: string } }) => {
  const products = await prismadb.product.findMany({
    where: {
      storeId: params.storeId,
    },
    include: {
      category: true,
      size: true,
      color: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const formatedProducts: ProductColumns[] = products.map((item) => ({
    id: item.id, 
    name: item.name,
    isFeatured: item.isFeatured,
    isArchived: item.isArchived,
    price: formatter.format(item.price.toNumber()),
    category: item.category.name,
    sizeId: item.size.name,
    colorId: item.color.value,

    createdAt: format(item.createdAt, "MMMM do, yyyy"),
  }));
  return (
    <div className="flex-col ">
      <div className="flex-1 space-y-4 p-8 pt-6 ">
        <BillboardClient data={formatedProducts} />
      </div>
    </div>
  );
};

export default Products;
