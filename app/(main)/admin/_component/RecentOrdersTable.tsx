import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { shortenText } from "@/lib/formatter";
import Link from "next/link";

const invoices = [
  {
    id: "INV001",
    paymentStatus: "Paid",
    location: "Gondar Azezo",
    delieveryStatus: "Delivered",
  },
  {
    id: "INV002",
    paymentStatus: "Pending",
    location: "Gondar Azezo",
    delieveryStatus: "Canceled",
  },
  {
    id: "INV003",
    paymentStatus: "Unpaid",
    location: "Gondar Azezo",
    delieveryStatus: "On Delivery",
  },
  {
    id: "INV004",
    paymentStatus: "Paid",
    location: "Gondar Azezo",
    delieveryStatus: "Delivered",
  },
];

export function RecentOrdersTable() {
  return (
    <div className="px-2 shadow-2xs py-10 border rounded-2xl">
      <div className="flex justify-between items-center pt-2 pb-5">
        <div className="text-[18px]">LastOrders</div>
        <Link
          href="admin/orders"
          className="hover:underline font-light text-[13px]"
        >
          View All
        </Link>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">OrderId</TableHead>
            <TableHead>Payment Status</TableHead>
            <TableHead>Location</TableHead>
            <TableHead className="text-right">Delievery Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.id} className="space-y-7">
              <TableCell className="font-medium">
                {shortenText(invoice.id, 13)}
              </TableCell>
              <TableCell>{invoice.paymentStatus}</TableCell>
              <TableCell> {shortenText(invoice.location, 13)}</TableCell>
              <TableCell className="text-right">
                {invoice.delieveryStatus}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
