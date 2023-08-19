import Navbar from "@/components/NavBar";
import prismadb from "@/lib/prismadb";
import {  auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

async function dashboardLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { storeId: string };
}) {
  const { userId } = auth();

  if (!userId) redirect("/sign-in");

  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeId,
      userId,
    },
  });

  if (!store) {
    redirect("/");
  }
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

export default dashboardLayout;
