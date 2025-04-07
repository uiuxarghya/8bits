import prisma from "@/lib/db";
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { nextCookies } from "better-auth/next-js";
import { openAPI, organization } from "better-auth/plugins";

export const auth = betterAuth({
  appName: "8bits",
  database: prismaAdapter(prisma, {
    provider: "mongodb",
  }),
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },
  plugins: [
    openAPI({
      disableDefaultReference:
        process.env.NODE_ENV === "production" ? true : false,
    }),
    nextCookies(),
    organization(),
  ],
  user: {
    additionalFields: {
      role: {
        type: "string",
        default: "user",
      },
      defaultOrganizationId: {
        type: "string",
        default: "",
      },
    },
  },
});
