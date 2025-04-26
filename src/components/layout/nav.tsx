"use client";

import Link from "next/link";

import Logo from "@/components/shared/logo";
import { Button } from "@/components/ui/button";

export default function Nav() {
  return (
    <div className="sticky inset-x-0 top-0 z-30 w-full transition-all">
      <div className="relative mx-auto w-full max-w-screen-lg px-3 lg:px-4 xl:px-0">
        <div className="flex h-14 items-center justify-between">
          <div className="grow basis-0">
            <Link className="block w-fit py-2 pr-2" href="/home">
              <div className="max-w-fit">
                <Logo className="h-6 w-auto text-black dark:text-white" />
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
