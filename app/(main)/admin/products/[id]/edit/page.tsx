import prisma from "@/lib/prisma";
import ProductForm from "../../_componets/ProductForm";

export default async function EditProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await prisma.product.findUnique({
    where: {
      id,
    },
  });

  return (
    <>
      <div className="w-[90%] max-w-[700px] m-auto text-3xl mt-3 mb-10">
        Edit Product
      </div>

      <ProductForm product={product} />
    </>
  );
}
