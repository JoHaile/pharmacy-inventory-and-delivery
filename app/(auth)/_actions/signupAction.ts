"use server";

import { auth } from "@/lib/auth/auth";
import { APIError } from "better-auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export async function signupAction(prevState: unknown, data: FormData) {
  const name = data.get("name") as string;
  const phone = data.get("phone") as string;
  const password = data.get("password") as string;

  // Perform signup logic here

  try {
    await auth.api.signUpEmail({
      body: {
        name,
        email: `${phone}@example.com`,
        phoneNumber: parseInt(phone),
        password,
      },
      headers: await headers(),
    });

    return {
      successMessage: "successful",
    };
  } catch (error) {
    if (error instanceof APIError) {
      return {
        name,
        phoneNumber: parseInt(phone),
        password,
        errorMessage: error.message,
      };
    }
    console.log(error);
  }

  redirect("/");
}

export default signupAction;
