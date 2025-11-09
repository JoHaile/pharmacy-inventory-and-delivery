"use server";

import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";

export const createDriver = async (prevState: unknown, formData: FormData) => {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const number = formData.get("phone") as string;

  try {
    const user = await prisma.user.create({
      data: {
        name,
        email,
        phoneNumber: parseInt(number),
        role: "DRIVER",
      },
    });
    console.log(user);
    redirect("/admin/driver");
  } catch (error) {
    console.log(error);
  }
};
