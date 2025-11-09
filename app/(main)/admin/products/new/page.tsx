import React from "react";
import ProductForm from "../_componets/ProductForm";

export default function page() {
  return (
    <>
      <div className="w-[90%] max-w-[700px] m-auto text-3xl mt-3 mb-10">
        Add Product
      </div>
      <ProductForm />
    </>
  );
}
