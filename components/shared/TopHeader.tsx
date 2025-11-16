import { title } from "process";
import React from "react";

export default function TopHeader() {
  return (
    <div className="flex w-full gap-2 md:gap-6 m-auto py-3 px-5 ">
      {items.map(({ name, icon }) => (
        <div
          key={`${name}+${crypto.randomUUID()}`}
          className="flex text-center text-[11px] text-gray-700 gap-2 flex-wrap"
        >
          <p className="flex text-nowrap">{name}</p>
        </div>
      ))}
    </div>
  );
}

const items = [
  {
    name: "+251901964187",
    icon: "Phone",
  },
  {
    name: "Betena",
    icon: "med",
  },
  {
    name: "About us",
    icon: "Phone",
  },
  {
    name: "Contact",
    icon: "Phone",
  },
  {
    name: "SafePayment",
    icon: "Phone",
  },
  {
    name: "Free Shipping",
    icon: "Phone",
  },
];
