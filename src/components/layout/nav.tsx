"use client";

import Link from "next/link";

import Logo from "@/components/shared/logo";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 10);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="sticky inset-x-0 top-0 z-30 w-full transition-all">
      <div
        className={`absolute inset-0 block transition-all ${
          isScrolled
            ? "border-b border-slate-100 bg-white/75 backdrop-blur-lg dark:border-white/10 dark:bg-black/75"
            : "border-b border-transparent bg-transparent"
        }`}
      ></div>
      <div className="relative mx-auto w-full max-w-screen-lg px-3 lg:px-4 xl:px-0">
        <div className="flex h-14 items-center justify-between">
          <div className="grow basis-0">
            <Link className="block w-fit py-2 pr-2" href="/home">
              <div className="flex max-w-fit items-center gap-2">
                <Logo className="h-6 w-auto text-black dark:text-white" />
                <Badge
                  variant="secondary"
                  className="font-silkscreen rounded leading-3 tracking-tight"
                >
                  beta
                </Badge>
              </div>
            </Link>
          </div>
          <div className="hidden grow basis-0 justify-end gap-2 lg:flex">
            <div className="flex items-center space-x-4">
              <Link href="/login">
                <Button
                  variant="secondary"
                  size="sm"
                  className="font-silkscreen hidden tracking-tight lg:inline-flex"
                >
                  Log in
                </Button>
              </Link>
              <Link href="/register">
                <Button
                  variant="default"
                  size="sm"
                  className="font-silkscreen hidden tracking-tight lg:inline-flex"
                >
                  Sign up
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
