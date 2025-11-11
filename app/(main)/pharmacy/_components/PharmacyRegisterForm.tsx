"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useActionState, useEffect, useState } from "react";
import { createPharmacy } from "../_actions/pharmacy";
import getServerSession from "@/utils/getServerSession";
import { redirect } from "next/navigation";
import { authClient } from "@/lib/auth/auth-client";

function PharmacyCreationForm() {
  const [userID, setUserID] = useState<string | null>(null);
  const [state, formAction, isPending] = useActionState(
    createPharmacy,
    undefined
  );

  useEffect(() => {
    async function fetchSession() {
      const { data, error } = await authClient.getSession();

      if (data) {
        setUserID(data.user.id);
      } else {
        redirect("/login");
      }
    }

    fetchSession();
  }, []);

  return (
    <div className="min-h-screen grid place-content-center">
      Create Pharmacy
      <form action={formAction} className="flex flex-col w-sm sm:w-xl lg:w-4xl">
        <Input type="hidden" hidden name="userID" value={userID || ""} />
        <Label className="mb-4 mt-7" htmlFor="name">
          Pharmacy Name
        </Label>
        <Input required type="text" name="name" placeholder="Pharmacy Name" />
        <Label className="mb-4 mt-7" htmlFor="city">
          City
        </Label>
        <Input required type="text" name="city" placeholder="City" />
        <Label className="mb-4 mt-7" htmlFor="address">
          Address
        </Label>
        <Input required type="text" name="address" placeholder="Address" />
        <Label className="mb-4 mt-7" htmlFor="contact">
          Contact Number
        </Label>
        <Input
          required
          type="text"
          name="contact"
          placeholder="Contact Number"
        />
        <Label className="mb-4 mt-7" htmlFor="license">
          License Number
        </Label>
        <Input
          required
          type="text"
          name="license"
          placeholder="License Number"
        />
        <Button className="my-5" type="submit">
          Create Pharmacy
        </Button>
      </form>
    </div>
  );
}

export default PharmacyCreationForm;
