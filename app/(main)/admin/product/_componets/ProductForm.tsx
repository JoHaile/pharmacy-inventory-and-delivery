"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useActionState, useState } from "react";
import { addProduct } from "../../_actions/products";
import { useFormStatus } from "react-dom";

const ProductForm = () => {
  const [error, action] = useActionState(addProduct, undefined);

  const [priceInCents, setPriceInCents] = useState<number | undefined>();
  return (
    <form action={action} className="space-y-10 w-[90%] max-w-[700px] m-auto">
      <Input name="pharmacyId" value={"12345"} />
      <div className="space-y-4">
        <Label htmlFor="name">Name</Label>
        <Input type="text" name="name" required />
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
        <Input type="number" name="quantity" required />
        {error?.quantity && (
          <div className="text-destructive">{error.quantity}</div>
        )}
      </div>
      <div className="space-y-4">
        <Label>Description</Label>
        <Textarea
          name="description"
          placeholder="add here the product description"
        />
        {error?.description && (
          <div className="text-destructive">{error.description}</div>
        )}
      </div>
      <div className="space-y-4">
        <Label>Image</Label>
        <Input type="file" name="image" required />
        {error?.image && <div className="text-destructive">{error.image}</div>}
      </div>
      <SubmitButton />
    </form>
  );
};

export default ProductForm;

export function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? "Saving" : "Save"}
    </Button>
  );
}

//for adding dummy pharmacy but the id and name
//exists in the database
function getPharmacy() {
  return { name: "Abel Pharma", id: "12345" };
}
