import Link from "next/link";
import React from "react";
import ProductCard from "./ProductCard";
import { ArrowRight } from "lucide-react";
import prisma from "@/lib/prisma";
import { Product } from "@/lib/generated/prisma";

export const getMostPopularProduct = async () => {
  const products = await prisma.product.findMany({
    where: {
      isAvailableForPurchase: true,
    },
    orderBy: {
      orders: {
        _count: "desc",
      },
    },
    take: 4,
  });

  return products;
};

const getNewestProduct = async () => {
  const products = await prisma.product.findMany({
    where: {
      isAvailableForPurchase: true,
    },
    orderBy: {
      createdAt: "desc",
    },
    take: 6,
  });

  return products;
};

function ProductSection() {
  return (
    <div className="space-y-10">
      <ProductGridSection
        title={"Most Popular"}
        productFetcher={getMostPopularProduct}
      />
      <ProductGridSection
        title={"Newest Product"}
        productFetcher={getNewestProduct}
      />
    </div>
  );
}

export default ProductSection;

export async function ProductGridSection({
  title,
  productFetcher,
}: {
  title: string;
  productFetcher: () => Promise<Product[]>;
}) {
  if (productFetcher) {
    console.log("Product that been fetched: ", await productFetcher());
    console.log("Product Type: ", typeof productFetcher);
  }
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
