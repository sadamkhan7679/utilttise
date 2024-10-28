"use client";

import * as React from "react";
import {
  BadgeCheck,
  Bell,
  Cloud,
  CreditCard,
  Database,
  HardDrive,
  Key,
  LifeBuoy,
  LogOut,
  MessageSquare,
  Monitor,
  MoreHorizontal,
  Network,
  Send,
  Settings,
  Shield,
  Sparkles,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

const data = {
  user: {
    name: "John Doe",
    email: "john@example.com",
    avatar: "/avatars/john-doe.jpg",
  },
  navMain: [
    {
      title: "Workstations",
      url: "#",
      icon: Monitor,
      items: [
        { title: "Device Setup", url: "#" },
        { title: "Monitoring", url: "#" },
        { title: "Software Deployment", url: "#" },
        { title: "Helpdesk Support", url: "#" },
      ],
    },
    {
      title: "IT Infrastructure",
      url: "#",
      icon: HardDrive,
      items: [
        { title: "Servers", url: "#" },
        { title: "Storage", url: "#" },
        { title: "Datacenter Management", url: "#" },
        { title: "Virtualization", url: "#" },
      ],
    },
    {
      title: "Network & Wireless",
      url: "#",
      icon: Network,
      items: [
        { title: "Routers", url: "#" },
        { title: "Switches", url: "#" },
        { title: "Wireless Access Points", url: "#" },
        { title: "SD-WAN", url: "#" },
      ],
    },
    {
      title: "Communications & Messaging",
      url: "#",
      icon: MessageSquare,
      items: [
        { title: "Calling", url: "#" },
        { title: "Conferencing", url: "#" },
        { title: "Messaging", url: "#" },
        { title: "Collaboration", url: "#" },
      ],
    },
    {
      title: "Backup & Recovery",
      url: "#",
      icon: Database,
      items: [
        { title: "Data Backup", url: "#" },
        { title: "Disaster Recovery", url: "#" },
        { title: "Data Replication", url: "#" },
        { title: "Restoration", url: "#" },
      ],
    },
    {
      title: "Identity & Access Management",
      url: "#",
      icon: Key,
      items: [
        { title: "User Provisioning", url: "#" },
        { title: "SSO", url: "#" },
        { title: "MFA", url: "#" },
        { title: "RBAC", url: "#" },
      ],
    },
    {
      title: "Cybersecurity",
      url: "#",
      icon: Shield,
      items: [
        { title: "Threat Detection", url: "#" },
        { title: "Endpoint Protection", url: "#" },
        { title: "Firewalls", url: "#" },
      ],
    },
    {
      title: "Cloud Operations",
      url: "#",
      icon: Cloud,
      items: [
        { title: "Cloud Hosting", url: "#" },
        { title: "Resource Scaling", url: "#" },
        { title: "Monitoring", url: "#" },
        { title: "Management", url: "#" },
      ],
    },
  ],
  navSecondary: [
    { title: "Support", url: "#", icon: LifeBuoy },
    { title: "Feedback", url: "#", icon: Send },
  ],
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isCollapsed, setIsCollapsed] = React.useState(false);

  return (
    <SidebarProvider>
      <Sidebar
        collapsible="icon"
        collapsed={isCollapsed}
        onCollapsedChange={setIsCollapsed}
      >
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size="lg" asChild>
                <a href="#">
                  <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                    <Settings className="size-4" />
                  </div>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-semibold">utilltise</span>
                    <span className="truncate text-xs">Simplified Tech</span>
                  </div>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>IT Services</SidebarGroupLabel>
            <SidebarMenu>
              {data.navMain.map((item) => (
                <Collapsible key={item.title} asChild>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild tooltip={item.title}>
                      <a href={item.url}>
                        <item.icon className="size-4" />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                    {!isCollapsed && item.items?.length && (
                      <>
                        <CollapsibleTrigger asChild>
                          <SidebarMenuAction className="data-[state=open]:rotate-90">
                            <MoreHorizontal className="size-4" />
                            <span className="sr-only">Toggle</span>
                          </SidebarMenuAction>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <SidebarMenuSub>
                            {item.items?.map((subItem) => (
                              <SidebarMenuSubItem key={subItem.title}>
                                <SidebarMenuSubButton asChild>
                                  <a href={subItem.url}>
                                    <span>{subItem.title}</span>
                                  </a>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                            ))}
                          </SidebarMenuSub>
                        </CollapsibleContent>
                      </>
                    )}
                  </SidebarMenuItem>
                </Collapsible>
              ))}
            </SidebarMenu>
          </SidebarGroup>
          {!isCollapsed && (
            <SidebarGroup className="mt-auto">
              <SidebarGroupContent>
                <SidebarMenu>
                  {data.navSecondary.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild size="sm">
                        <a href={item.url}>
                          <item.icon className="size-4" />
                          <span>{item.title}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          )}
        </SidebarContent>
        {!isCollapsed && (
          <SidebarFooter>
            <SidebarMenu>
              {/*<SidebarMenuItem>*/}
              {/*  <DropdownMenu>*/}
              {/*    <DropdownMenuTrigger asChild>*/}
              {/*      <SidebarMenuButton*/}
              {/*        size="lg"*/}
              {/*        className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"*/}
              {/*      >*/}
              {/*        <Avatar className="h-8 w-8 rounded-lg">*/}
              {/*          <AvatarImage*/}
              {/*            src={data.user.avatar}*/}
              {/*            alt={data.user.name}*/}
              {/*          />*/}
              {/*          <AvatarFallback className="rounded-lg">*/}
              {/*            JD*/}
              {/*          </AvatarFallback>*/}
              {/*        </Avatar>*/}
              {/*        <div className="grid flex-1 text-left text-sm leading-tight">*/}
              {/*          <span className="truncate font-semibold">*/}
              {/*            {data.user.name}*/}
              {/*          </span>*/}
              {/*          <span className="truncate text-xs">*/}
              {/*            {data.user.email}*/}
              {/*          </span>*/}
              {/*        </div>*/}
              {/*        <MoreHorizontal className="ml-auto size-4" />*/}
              {/*      </SidebarMenuButton>*/}
              {/*    </DropdownMenuTrigger>*/}
              {/*    <DropdownMenuContent*/}
              {/*      className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"*/}
              {/*      side="bottom"*/}
              {/*      align="end"*/}
              {/*      sideOffset={4}*/}
              {/*    >*/}
              {/*      <DropdownMenuLabel className="p-0 font-normal">*/}
              {/*        <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">*/}
              {/*          <Avatar className="h-8 w-8 rounded-lg">*/}
              {/*            <AvatarImage*/}
              {/*              src={data.user.avatar}*/}
              {/*              alt={data.user.name}*/}
              {/*            />*/}
              {/*            <AvatarFallback className="rounded-lg">*/}
              {/*              JD*/}
              {/*            </AvatarFallback>*/}
              {/*          </Avatar>*/}
              {/*          <div className="grid flex-1 text-left text-sm leading-tight">*/}
              {/*            <span className="truncate font-semibold">*/}
              {/*              {data.user.name}*/}
              {/*            </span>*/}
              {/*            <span className="truncate text-xs">*/}
              {/*              {data.user.email}*/}
              {/*            </span>*/}
              {/*          </div>*/}
              {/*        </div>*/}
              {/*      </DropdownMenuLabel>*/}
              {/*      <DropdownMenuSeparator />*/}
              {/*      <DropdownMenuGroup>*/}
              {/*        <DropdownMenuItem>*/}
              {/*          <Sparkles className="mr-2 size-4" />*/}
              {/*          Upgrade Plan*/}
              {/*        </DropdownMenuItem>*/}
              {/*      </DropdownMenuGroup>*/}
              {/*      <DropdownMenuSeparator />*/}
              {/*      <DropdownMenuGroup>*/}
              {/*        <DropdownMenuItem>*/}
              {/*          <BadgeCheck className="mr-2 size-4" />*/}
              {/*          Account*/}
              {/*        </DropdownMenuItem>*/}
              {/*        <DropdownMenuItem>*/}
              {/*          <CreditCard className="mr-2 size-4" />*/}
              {/*          Billing*/}
              {/*        </DropdownMenuItem>*/}
              {/*        <DropdownMenuItem>*/}
              {/*          <Bell className="mr-2 size-4" />*/}
              {/*          Notifications*/}
              {/*        </DropdownMenuItem>*/}
              {/*      </DropdownMenuGroup>*/}
              {/*      <DropdownMenuSeparator />*/}
              {/*      <DropdownMenuItem>*/}
              {/*        <LogOut className="mr-2 size-4" />*/}
              {/*        Log out*/}
              {/*      </DropdownMenuItem>*/}
              {/*    </DropdownMenuContent>*/}
              {/*  </DropdownMenu>*/}
              {/*</SidebarMenuItem>*/}
            </SidebarMenu>
          </SidebarFooter>
        )}
      </Sidebar>
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger
              className="-ml-1"
              onClick={() => setIsCollapsed(!isCollapsed)}
            />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">IT Services</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Workstations</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          {children}
          {/*<div className="grid auto-rows-min gap-4 md:grid-cols-3">*/}
          {/*  <div className="aspect-video rounded-xl bg-muted/50" />*/}
          {/*  <div className="aspect-video rounded-xl bg-muted/50" />*/}
          {/*  <div className="aspect-video rounded-xl bg-muted/50" />*/}
          {/*</div>*/}
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
