import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";

interface DashboardPageProps {
  params: { storeId: string };
}

const DashboardPage: React.FC<DashboardPageProps> = async ({ params }) => {


  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeId,
    },
  });

  return <div>Active Store : {store?.name}</div>;
};

export default DashboardPage;
