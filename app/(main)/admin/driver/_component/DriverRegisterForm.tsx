"use client";

import React, { useActionState, useEffect, useState } from "react";
import { createDriver } from "../_action/driverAction";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth/auth-client";
import { redirect } from "next/navigation";

function DriverRegisterForm() {
  const [pharmacyId, setPharmacyId] = useState("");
  const [state, formAction, isPending] = useActionState(
    createDriver,
    undefined
  );

  useEffect(() => {
    async function fetchSession() {
      const { data, error } = await authClient.getSession();

      if (data) {
        setPharmacyId(data.user.pharmacyId);
      } else {
        redirect("/login");
      }
    }

    fetchSession();
  }, []);

  return (
    <div>
      <p className="text-center mb-[60px] font-bold text-3xl">
        Driver Register Form
      </p>
      <form action={formAction} className="w-sm sm:w-xl lg:w-4xl">
        <Input type="hidden" hidden name="pharmacyId" value={pharmacyId} />
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
        <Button disabled={isPending}>
          {isPending ? "loading..." : "Create Driver"}
        </Button>
      </form>
    </div>
  );
}

export default DriverRegisterForm;
