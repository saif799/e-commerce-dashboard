"use client";

import { useEffect, useState } from "react";
import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";

interface AlertModalprops {
  isOpen: boolean;
  onclose: () => void;
  onConfirm: () => void;
  loading: boolean;
}
export const AlertModal: React.FC<AlertModalprops> = ({
  isOpen,
  onclose,
  onConfirm,
  loading,
}) => {
  const [ismounted, setIsmounted] = useState(false);

  useEffect(() => {
    setIsmounted(true);
  }, [ismounted]);

  if (!ismounted) return null;

  return (
    <Modal
      title="Are you sure"
      description="This action cannot be undone"
      isOpen={isOpen}
      onClose={onclose}
    >
      <div className="pt-6 space-x-2 flex items-center justify-end w-full">
        <Button disabled={loading} variant={"outline"} onClick={onclose}>
          Cancel
        </Button>
        <Button disabled={loading} variant={"destructive"} onClick={onConfirm}>
          Continue
        </Button>
      </div>
    </Modal>
  );
};
