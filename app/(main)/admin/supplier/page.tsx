import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import prisma from "@/lib/prisma";
import { main } from "@/seed/supplier";
import Link from "next/link";
import React from "react";

async function page() {
  // if (process.env.NODE_ENV === "development") {
  //   await main();
  // }

  const suppliers = await prisma.supplier.findMany();

  return (
    <div className="min-h-screen px-4">
      <p className="mb-[100px]">This is the page for supplier like a table</p>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Address</TableHead>
            <TableHead>City</TableHead>
            <TableHead>Days to Deliver</TableHead>
            <TableHead>Phone Number</TableHead>
            <TableHead>License No</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {suppliers.map((supplier) => (
            <TableRow key={supplier.id}>
              <TableCell>
                <Link
                  key={supplier.id}
                  href={`/admin/supplier/${supplier.id}`}
                  className="hover:underline"
                >
                  {supplier.name}
                </Link>
              </TableCell>
              <TableCell>{supplier.address}</TableCell>
              <TableCell>{supplier.city}</TableCell>
              <TableCell>{supplier.daysToDeliver} Days</TableCell>
              <TableCell>+251{supplier.phoneNumber}</TableCell>
              <TableCell>{supplier.licenseNo}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default page;
