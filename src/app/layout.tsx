import { Toaster } from "@/components/ui/sonner";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Silkscreen } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const silkscreen = Silkscreen({
  variable: "--font-silkscreen",
  display: "swap",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "8bits - Open Source URL Shortener and Link Management Platform",
  description:
    "Manage, organize, and track your links with 8bits, the open source URL shortener and link management software built for individuals and teams.",
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${silkscreen.variable} scroll-smooth font-sans antialiased`}
      >
        {children}
        <Toaster richColors />
      </body>
    </html>
  );
}
