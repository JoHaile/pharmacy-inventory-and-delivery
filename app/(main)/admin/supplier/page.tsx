import { main } from "@/seed/supplier";
import React from "react";

async function page() {
  if (process.env.NODE_ENV === "development") {
    await main();
  }

  return <div>This is the page for supplier like a table.</div>;
}

export default page;
