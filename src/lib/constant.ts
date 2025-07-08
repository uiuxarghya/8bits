import { cleanDomain } from "./utils";

export const SHORT_LINK_DOMAIN = cleanDomain(
  process.env.NEXT_PUBLIC_SHORT_LINK_DOMAIN || "",
);

export const GOOGLE_ANALYTICS_ID =
  process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || "";
