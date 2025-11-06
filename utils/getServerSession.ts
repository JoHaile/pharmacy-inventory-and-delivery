import { auth } from "@/lib/auth/auth";
import { headers } from "next/headers";
import React from "react";

async function getServerSession() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return session;
}

export default getServerSession;
