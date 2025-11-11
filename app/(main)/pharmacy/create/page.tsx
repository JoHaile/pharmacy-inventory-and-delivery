import React from "react";
import PharmacyCreationForm from "../_components/PharmacyRegisterForm";
import getServerSession from "@/utils/getServerSession";
import Forbidden from "@/app/(auth)/forbidden";
import { Button } from "@/components/ui/button";
import Link from "next/link";

async function page() {
  const session = await getServerSession();

  if (!session) {
    return <Forbidden />;
  }

  if (session.user.role.includes("PHARMACY")) {
    return (
      <div className="min-h-screen grid place-content-center text-2xl text-emerald-500 px-5 gap-4">
        Already Have a Pharmacy Profile. Please complete your profile.
        <div className="flex gap-4 items-center justify-center">
          <Link href="/" className="cursor-pointer">
            <Button variant={"destructive"}>Go To Home</Button>
          </Link>
          <Link href="/pharmacy" className="cursor-pointer">
            <Button variant={"destructive"}>Go To Profile Page</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      Pharmacy Creation Page
      <PharmacyCreationForm />
    </div>
  );
}

export default page;
