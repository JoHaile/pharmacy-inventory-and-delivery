"use server";

import { auth } from "@/lib/auth/auth";
import { APIError } from "better-auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export async function signinAction(prevState: unknown, data: FormData) {
  const phone = data.get("phone") as string;
  const password = data.get("password") as string;
  const email = phone + "@gmail.com";

  try {
    // await auth.api.signInEmail({
    //   body: {
    //     email,
    //     password,
    //   },
    //   headers: await headers(),
    // });
    await auth.api.signInPhoneNumber({
      body: {
        phoneNumber: phone,
        password,
      },
    });

    return {
      successMessage: "successful",
    };
  } catch (error) {
    if (error instanceof APIError) {
      return {
        phone,
        password,
        errorMessage: error.message,
      };
    }
    console.log(error);
  }

  redirect("/dashboard");
}

export default signinAction;
