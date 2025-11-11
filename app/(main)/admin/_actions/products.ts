"use server";

import prisma from "@/lib/prisma";
import z from "zod";
import fs from "fs/promises";
import { notFound, redirect } from "next/navigation";

const fileSchema = z.instanceof(File, { message: "Required" });
const imageSchema = fileSchema.refine(
  (file) => file.size === 0 || file.type.startsWith("image/")
);

const addSchema = z.object({
  name: z.string().min(1),
  description: z.string().min(1).optional(),
  priceInCents: z.coerce.number().int().min(1),
  image: imageSchema.refine((file) => file.size > 0, "Required"),
  quantity: z.coerce.number().int().min(1),
  pharmacyId: z.string().min(1),
});

export async function addProduct(prevState: unknown, formData: FormData) {
  const result = addSchema.safeParse(Object.fromEntries(formData.entries()));
  if (result.success === false) {
    console.log(result.error.flatten().fieldErrors);
    return result.error.flatten().fieldErrors;
  }

  const data = result.data;

  console.log("result data: ", data);
  await fs.mkdir("public/products", { recursive: true });
  const imagePath = `/products/${crypto.randomUUID()}-${data.image.name}`;
  await fs.writeFile(
    `public${imagePath}`,
    Buffer.from(await data.image.arrayBuffer())
  );
  await prisma.product.create({
    data: {
      isAvailableForPurchase: false,
      name: data.name,
      description: data.description,
      priceInCents: data.priceInCents,
      imagePath: imagePath,
      quantity: data.quantity,
      pharmacyId: data.pharmacyId as string,
    },
  });

  redirect("/admin/products");
}

export async function toggleProductAvailablity(
  id: string,
  isAvailableForPurchase: boolean
) {
  await prisma.product.update({
    where: {
      id,
    },
    data: {
      isAvailableForPurchase,
    },
  });
}

const editSchema = addSchema.extend({
  image: imageSchema.optional(),
});

export async function updateProduct(
  id: string,
  prevState: unknown,
  formData: FormData
) {
  const result = editSchema.safeParse(Object.fromEntries(formData.entries()));

  if (result.success === false) {
    return result.error.flatten().fieldErrors;
  }

  const data = result.data;

  const product = await prisma.product.findUnique({
    where: {
      id,
    },
  });

  if (!product) notFound();

  let imagePath = product.imagePath;

  if (data.image != null && data.image?.size > 0) {
    await fs.unlink(`public${product.imagePath}`);
    imagePath = `/products/${crypto.randomUUID()}-${data.image.name}`;
    await fs.writeFile(
      `public${imagePath}`,
      Buffer.from(await data.image.arrayBuffer())
    );
  }

  await prisma.product.update({
    where: {
      id,
    },
    data: {
      name: data.name,
      description: data.description,
      priceInCents: data.priceInCents,
      imagePath: imagePath,
      quantity: data.quantity,
    },
  });
}

export async function deleteProduct(id: string) {
  const product = await prisma.product.delete({ where: { id } });
  if (product == null) return notFound();

  await fs.unlink(`public${product.imagePath}`);
}
