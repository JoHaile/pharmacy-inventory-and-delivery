"use client";

import * as React from "react";
import {
  AudioWaveform,
  BookOpen,
  Bot,
  CirclePlus,
  ClipboardList,
  Command,
  Frame,
  GalleryVerticalEnd,
  icons,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";

import Link from "next/link";

// This is sample data.
const data = {
  user: {
    name: "Abebe",
    email: "abebe@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Abebe",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Abebe@exmaple.com.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "abebe Pharamcy",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: PieChart,
      isActive: true,
      items: [
        {
          title: "Anlatics",
          url: "/admin",
        },
        {
          title: "Order managment",
          url: "admin/products",
        },
        {
          title: "Customers",
          url: "/admin",
        },
        {
          title: "Transaction",
          url: "/admin",
        },
        {
          title: "Supplier",
          url: "/admin",
        },
        {
          title: "Categories",
          url: "/admin",
        },
        {
          title: "Driver",
          url: "#",
        },
      ],
    },
    // {
    //   title: "Product",
    //   url: "#",
    //   icon: Bot,
    //   items: [
    //     {
    //       title: "Add Products",
    //       url: "#",
    //     },
    //     {
    //       title: "Product List",
    //       url: "#",
    //     },
    //   ],
    // },
    // {
    //   title: "Other Menu",
    //   url: "#",
    //   icon: Settings2,
    //   items: [
    //     {
    //       title: "Settings",
    //       url: "#",
    //     },
    //     {
    //       title: "Support",
    //       url: "#",
    //     },
    //     {
    //       title: "Logout",
    //       url: "#",
    //     },
    //   ],
    // },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />

        <SidebarGroupLabel className="px-4">Product</SidebarGroupLabel>

        {items.map((item) => (
          <SidebarMenuItem key={item.title} className="px-2">
            <SidebarMenuButton asChild>
              <a href={item.url}>
                <item.icon />
                {item.title}
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}

const items = [
  {
    title: "Add Product",
    url: "/admin/products/new",
    icon: CirclePlus,
  },
  {
    title: "Product List",
    url: "/admin/products",
    icon: ClipboardList,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];
