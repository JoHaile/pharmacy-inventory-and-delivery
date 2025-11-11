"use server";

import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";

export const createDriver = async (prevState: unknown, formData: FormData) => {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const number = formData.get("phone") as string;
  const pharmacyId = formData.get("pharmacyId") as string;

  try {
    const user = await prisma.user.create({
      data: {
        name,
        email,
        phoneNumber: number,
        role: "DRIVER",
        pharmacyId,
      },
      include: { pharmacy: true },
    });

    console.log(user);
  } catch (error) {
    console.log(error);
    return;
  }

  redirect("/admin/driver");
};
