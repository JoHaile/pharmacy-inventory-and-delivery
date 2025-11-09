import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

function page() {
  return (
    <div className="min-h-screen px-4">
      <Link href="/admin/driver/create">
        <Button>ADD Driver</Button>
      </Link>
      this is the driver page.
    </div>
  );
}

export default page;
