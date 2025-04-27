"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { authClient } from "@/lib/auth-client";
import { User } from "better-auth";
import { usePathname } from "next/navigation";
import React from "react";
import { NavUser } from "./nav-user";

export function AppHeader() {
  const pathname = usePathname();
  const [userData, setUserData] = React.useState<User | null>(null);

  React.useEffect(() => {
    async function fetchSession() {
      try {
        const sessionData = await authClient.getSession();
        if (sessionData && "data" in sessionData && sessionData.data?.user) {
          setUserData(sessionData.data.user);
        }
      } catch (error) {
        console.error("Failed to fetch session data:", error);
      }
    }
    fetchSession();
  }, []);

  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        <h1 className="text-base font-medium">
          {pathname.replace("/", "").replace(/^\w/, (c) => c.toUpperCase())}
        </h1>
        <div className="ml-auto flex items-center gap-2">
          <Button variant="ghost" asChild size="sm" className="hidden sm:flex">
            <a
              href="https://github.com/uiuxarghya/8bits"
              rel="noopener noreferrer"
              target="_blank"
              className="dark:text-foreground"
            >
              GitHub
            </a>
          </Button>
          <div>{userData && <NavUser user={userData} />}</div>
        </div>
      </div>
    </header>
  );
}
