"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useActionState, useState } from "react";
import { addProduct, updateProduct } from "../../_actions/products";
import { useFormStatus } from "react-dom";
import { Product } from "@/lib/generated/prisma";
import Image from "next/image";

const ProductForm = ({ product }: { product?: Product | null }) => {
  const [error, action] = useActionState(
    product == null ? addProduct : updateProduct.bind(null, product.id),
    {}
  );

  const [priceInCents, setPriceInCents] = useState<number | undefined>(
    product?.priceInCents
  );
  return (
    <>
      <form
        action={action}
        className="space-y-6 w-[90%] max-w-[700px] m-auto mb-2"
      >
        <Input name="pharmacyId" defaultValue={"12345"} />
        <div className="space-y-4">
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            name="name"
            required
            defaultValue={product?.name || ""}
          />
          {error?.name && <div className="text-destructive">{error.name}</div>}
        </div>
        <div className="space-y-4">
          <Label>Price In Cents</Label>
          <Input
            value={priceInCents ?? ""}
            onChange={(e) =>
              setPriceInCents(
                e.target.value === "" ? undefined : Number(e.target.value)
              )
            }
            type="number"
            name="priceInCents"
            required
          />
          {error?.priceInCents && (
            <div className="text-destructive">{error.priceInCents}</div>
          )}
        </div>
        <div className="space-y-4">
          <Label>Quantity</Label>
          <Input
            type="number"
            name="quantity"
            defaultValue={product?.quantity}
            required
          />
          {error?.quantity && (
            <div className="text-destructive">{error.quantity}</div>
          )}
        </div>
        <div className="space-y-4">
          <Label>Description</Label>
          <Textarea
            name="description"
            placeholder="add here the product description"
            defaultValue={product?.description || ""}
          />
          {error?.description && (
            <div className="text-destructive">{error.description}</div>
          )}
        </div>
        <div className="space-y-4">
          <Label>Image</Label>
          <Input type="file" name="image" required={product == null} />
          {product != null && (
            <Image
              src={product.imagePath}
              width="400"
              height="400"
              alt="product Image"
            />
          )}
          {error?.image && (
            <div className="text-destructive">{error.image}</div>
          )}
        </div>
        <SubmitButton />
      </form>
    </>
  );
};

export default ProductForm;

export function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="px-5">
      {pending ? "Saving" : "Save"}
    </Button>
  );
}

//for adding dummy pharmacy but the id and name
//exists in the database
function getPharmacy() {
  return { name: "Abel Pharma", id: "12345" };
}
