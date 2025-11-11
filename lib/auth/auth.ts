import { APIError, betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import prisma from "../prisma";
import { nextCookies } from "better-auth/next-js";
import { createAuthMiddleware, phoneNumber } from "better-auth/plugins";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),

  emailAndPassword: {
    enabled: true,
    requireEmailVerification: false,
    autoSignIn: true,
  },

  user: {
    additionalFields: {
      phoneNumber: { type: "string", unique: true, input: true },
      role: {
        type: "string[]",
        enumValues: ["CUSTOMER", "SUPPLIER", "DRIVER", "MANAGER", "PHARMACY"],
        default: "CUSTOMER",
        input: false,
      },
      pharmacyId: { type: "string", input: false },
    },
    fields: {
      // phoneNumber:{}
    },
  },
  plugins: [
    phoneNumber({
      sendOTP(data, request) {},
      signUpOnVerification: {
        getTempEmail: (phoneNumber) => {
          return `temp-${phoneNumber}@example.com`;
        },
        getTempName: (phoneNumber) => {
          return `User-${phoneNumber}`;
        },
      },
      requireVerification: false,
    }),
    nextCookies(),
  ],
});

export type Session = typeof auth.$Infer.Session.session;
export type User = typeof auth.$Infer.Session.user;
