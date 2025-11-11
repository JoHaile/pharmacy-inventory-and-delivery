"use client";

import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import {
  deleteProduct,
  toggleProductAvailablity,
} from "../../_actions/products";

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
      className="outline-0 cursor-pointer px-2 text-[14px] py-1 dark:hover:text-black hover:bg-gray-100 rounded-[5px] "
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

export function DeleteDropdownItem({
  id,
  disabled,
}: {
  id: string;
  disabled: boolean;
}) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  return (
    <DropdownMenuItem
      disabled={disabled || isPending}
      onClick={() => {
        startTransition(async () => {
          await deleteProduct(id);
          router.refresh();
        });
      }}
      className="px-2 text-destructive outline-none hover:bg-destructive hover:text-white rounded-b-sm py-1 cursor-pointer"
    >
      Delete
    </DropdownMenuItem>
  );
}
