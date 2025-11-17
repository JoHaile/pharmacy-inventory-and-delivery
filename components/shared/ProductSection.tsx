import Link from "next/link";
import React from "react";
import ProductCard from "./ProductCard";
import { ArrowRight } from "lucide-react";

function ProductSection() {
  return (
    <div className="space-y-10">
      <ProductGridSection title={"Most Popular"} />
      <ProductGridSection title={"Newest Product"} />
    </div>
  );
}

export default ProductSection;

export async function ProductGridSection({ title }: { title: string }) {
  return (
    <div className="space-y-10">
      <div className="flex gap-5 items-center text-center">
        <h3 className="text-2xl">{title}</h3>
        <Link
          href="/product"
          className="underline mt-1 flex gap-2 hover:underline"
        >
          View All <ArrowRight />
        </Link>
      </div>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
      </div>
    </div>
  );
}
