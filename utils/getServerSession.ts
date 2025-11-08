import { auth } from "@/lib/auth/auth";
import { headers } from "next/headers";

async function getServerSession() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return session;
}

export default getServerSession;
