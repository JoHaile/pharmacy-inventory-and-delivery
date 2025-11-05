import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

import AdminSidebar from "./_component/AdminSidebar";
import { AppSidebar } from "@/components/app-sidebar";
import AdminHeader from "./_component/AdminHeader";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      {/* <AdminSidebar /> */}
      <AppSidebar />
      <main className="w-full">
        <AdminHeader />
        {children}
      </main>
    </SidebarProvider>
  );
}
