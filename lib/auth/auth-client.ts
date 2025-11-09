import { createAuthClient } from "better-auth/react";
import {
  inferAdditionalFields,
  phoneNumberClient,
} from "better-auth/client/plugins";
import { auth } from "./auth";
import { nextCookies } from "better-auth/next-js";

export const authClient = createAuthClient({
  plugins: [
    inferAdditionalFields<typeof auth>(),
    phoneNumberClient(),
    nextCookies(),
  ],
});
