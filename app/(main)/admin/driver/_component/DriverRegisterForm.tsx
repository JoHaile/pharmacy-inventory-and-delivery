"use client";

import React, { useActionState } from "react";
import { createDriver } from "../_action/driverAction";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function DriverRegisterForm() {
  const [state, formAction, isPending] = useActionState(
    createDriver,
    undefined
  );
  return (
    <div>
      <p className="text-center mb-[60px] font-bold text-3xl">
        Driver Register Form
      </p>
      <form action={formAction} className="w-sm sm:w-xl lg:w-4xl">
        <Label htmlFor="name">Full Name</Label>
        <Input
          placeholder="Fullname"
          name="name"
          id="name"
          className="mb-8 mt-5"
        />
        <Label htmlFor="email">Email</Label>
        <Input
          placeholder="Email"
          name="email"
          id="email"
          className="mb-8 mt-5"
        />
        <Label htmlFor="phone">Phone Number</Label>
        <Input
          placeholder="Phone Number"
          name="phone"
          id="phone"
          type="number"
          className="mb-8 mt-5"
        />
        <Button>Create Driver</Button>
      </form>
    </div>
  );
}

export default DriverRegisterForm;
