import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import prisma from "@/lib/prisma";
import Link from "next/link";
import React from "react";

async function page() {
  const drivers = await prisma.user.findMany({
    where: {
      role: "DRIVER",
    },
  });

  return (
    <div className="min-h-screen px-4">
      <Link href="/admin/driver/create">
        <Button>ADD Driver</Button>
      </Link>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone Number</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {drivers.map((driver) => (
            <TableRow key={driver.id}>
              <TableCell>{driver.name}</TableCell>
              <TableCell>{driver.email}</TableCell>
              <TableCell>{driver.phoneNumber}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default page;
