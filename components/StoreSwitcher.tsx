"use client";

import { Store } from "@prisma/client";
import { PopoverTrigger } from "./ui/popover";
import { useStoreModal } from "@/hooks/use-store-modal";
import { useParams, useRouter } from "next/navigation";

type PopoverTriggerProps = React.ComponentPropsWithRef<typeof PopoverTrigger>;

interface StoreSwitcherPropse extends PopoverTriggerProps {
  items: Store[];
}

function StoreSwitcher({ className, items = [] }: StoreSwitcherPropse) {
  const storeModal = useStoreModal();
  const params = useParams();
  const router = useRouter();

  const formatedItems = items.map((item) => ({
    label: item.name,
    value: item.id,
  }));

  return <div>StoreSwitcher</div>;
}

export default StoreSwitcher;
