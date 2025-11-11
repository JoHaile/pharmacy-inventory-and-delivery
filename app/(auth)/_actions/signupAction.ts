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
        email: `${phone}@gmail.com`,
        phoneNumber: phone,
        password,
      },
      headers: await headers(),
    });

    return {
      successMessage: "signup successful!",
    };
  } catch (error) {
    console.log(error);

    if (error instanceof APIError) {
      return {
        name,
        phoneNumber: parseInt(phone),
        password,
        errorMessage: error.message,
      };
    }
  }
}

export default signupAction;
