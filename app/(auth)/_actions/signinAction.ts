"use server";

import { auth } from "@/lib/auth/auth";
import { APIError } from "better-auth";
import { headers } from "next/headers";

export async function signinAction(prevState: unknown, FormData: FormData) {
  const password = FormData.get("password") as string;
  const phone = FormData.get("phone") as string;

  try {
    await auth.api.signInEmail({
      body: {
        email: `${phone}@gmail.com`,
        password,
      },
      headers: await headers(),
    });

    return {
      successMessage: "signin successful",
    };
  } catch (error) {
    console.log(error);

    if (error instanceof APIError) {
      return {
        phone,
        errorMessage: error.message,
      };
    }
  }
}

export default signinAction;
