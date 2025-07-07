import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getDomain(url: string): string {
  return (url.match(/^https?:\/\/([^\/?#]+)/)?.[1] || "").replace(/^www\./, "");
}
