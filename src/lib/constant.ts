import { cleanDomain } from "./utils";

export const SHORT_LINK_DOMAIN = cleanDomain(
  process.env.NEXT_PUBLIC_SHORT_LINK_DOMAIN || "",
);
