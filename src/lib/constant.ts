import { cleanDomain } from "./utils";

export const SHORT_LINK_DOMAIN = cleanDomain(
  process.env.NEXT_PUBLIC_SHORT_LINK_DOMAIN || "",
);

export const GOOGLE_ANALYTICS_ID =
  process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || "";

export const GOOGLE_SITE_VERIFICATION =
  process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "";

export const METADATA_BASE_URL =
  process.env.NODE_ENV === "production"
    ? new URL("https://" + process.env.VERCEL_URL || "http://localhost:3000")
    : new URL("http://localhost:3000");
