"use client";

import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { toggleProductAvailablity } from "../../_actions/products";

export function ActvieToggleDropdownItem({
  id,
  isAvailableForPurchase,
}: {
  id: string;
  isAvailableForPurchase: boolean;
}) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  return (
    <DropdownMenuItem
      className="outline-0 cursor-pointer px-2 text-[14px] py-1 hover:bg-amber-50"
      disabled={isPending}
      onClick={() => {
        startTransition(async () => {
          await toggleProductAvailablity(id, !isAvailableForPurchase);
          router.refresh();
        });
      }}
    >
      {isAvailableForPurchase ? "Deactivate" : "Activate"}
    </DropdownMenuItem>
  );
}
