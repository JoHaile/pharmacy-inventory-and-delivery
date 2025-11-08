import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import prisma from "@/lib/prisma";
import { MoreVertical } from "lucide-react";
import Link from "next/link";
import { ActvieToggleDropdownItem } from "./_componets/ProductAction";

const page = () => {
  return (
    <div className="w-[90%] m-auto mt-10 space-y-5">
      <div className="flex justify-between">
        <div className="text-4xl mb-4">Product List</div>
        <Button asChild>
          <Link href="/admin/products/new">Add Products</Link>
        </Button>
      </div>
      <ProductsTable />
    </div>
  );
};

export default page;

export async function ProductsTable() {
  const products = await prisma.product.findMany({
    select: {
      id: true,
      name: true,
      priceInCents: true,
      quantity: true,
      description: true,
      isAvailableForPurchase: true,
      createdAt: true,
    },
    take: 10,
    orderBy: {
      createdAt: "desc",
    },
  });

  if (products.length === 0) return <p>No Products Found</p>;

  return (
    <div>
      {products[0].isAvailableForPurchase}
      <Table>
        <TableCaption>A list of your Recent Products.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Price</TableHead>
            <TableHead className="">Quantity</TableHead>
            <TableHead>Description</TableHead>
            <TableHead className="">Available For Purchase</TableHead>
            <TableHead className="">Created at</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell className="font-medium">{product.id}</TableCell>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.priceInCents}</TableCell>
              <TableCell className="">{product.quantity}</TableCell>
              <TableCell className="">{product.description}</TableCell>
              <TableCell className="">
                {product.isAvailableForPurchase ? (
                  <div className="text-green-500 font-semibold">YES</div>
                ) : (
                  <div className="text-destructive font-semibold">NO</div>
                )}
              </TableCell>
              <TableCell className="">
                {product.createdAt.toLocaleDateString()}
              </TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <MoreVertical></MoreVertical>
                    <span className="sr-only">Actions</span>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent>
                    <DropdownMenuItem>
                      <a href="/">Download</a>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href={`/admin/products/${product.id}/edit`}>
                        Edit
                      </Link>
                    </DropdownMenuItem>
                    <ActvieToggleDropdownItem
                      id={product.id}
                      isAvailableForPurchase={product.isAvailableForPurchase}
                    />
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      variant="destructive"
                      className="text-destructive"
                    >
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
