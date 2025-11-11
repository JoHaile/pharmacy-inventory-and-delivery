"use server";

import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";

export async function createPharmacy(prevState: unknown, data: FormData) {
  const name = data.get("name") as string;
  const city = data.get("city") as string;
  const address = data.get("address") as string;
  const contact = data.get("contact") as string;
  const license = data.get("license") as string;
  const userID = data.get("userID") as string;

  console.log(name, city, address, contact, license);

  try {
    const pharmacy = await prisma.pharmacy.create({
      data: {
        name,
        city,
        address,
        phoneNumber: parseInt(contact),
        licenseNo: license,

        users: {
          connect: {
            id: userID,
          },
        },
      },
    });

    // for the user table, update the role to 'PHARMACY' and set the pharmacyId
    await prisma.user.update({
      where: { id: userID },
      data: {
        role: "PHARMACY",
        pharmacyId: pharmacy.id,
      },
    });

    console.log("Pharmacy created successfully");
    redirect("/pharmacy");
  } catch (error) {
    console.error("Error creating pharmacy:", error);
  }
}
