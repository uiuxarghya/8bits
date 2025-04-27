"use client";

import * as React from "react";

import { NavMain } from "@/components/app/nav-main";
import { NavSecondary } from "@/components/app/nav-secondary";
import Logo from "@/components/shared/logo";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";
import {
  CircleHelpIcon,
  LayoutDashboardIcon,
  LinkIcon,
  SettingsIcon,
} from "lucide-react";
import Link from "next/link";

const navLinks = {
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboardIcon,
    },
    {
      title: "Links",
      url: "/links",
      icon: LinkIcon,
    },
    {
      title: "Settings",
      url: "/settings",
      icon: SettingsIcon,
    },
  ],
  navSecondary: [
    {
      title: "Get Help",
      url: "/help",
      icon: CircleHelpIcon,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <Link href="#">
          <Logo className="h-6" />
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navLinks.navMain} />
        <NavSecondary items={navLinks.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>GitHub</SidebarFooter>
    </Sidebar>
  );
}
