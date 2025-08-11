"use client";
import { SidebarProvider } from "@/components/ui/sidebar";
import { IDashboardLayoutProp } from "./layout.props";
import { AppSidebar } from "./components/layout/app-sidebar";
import { sidebarData } from "./components/layout/data/sidebar-data";

const Layout: React.FC<IDashboardLayoutProp> = ({ children }) => {
  return (
    <div>
      <SidebarProvider>
        <AppSidebar sideNavData={sidebarData} />
        <div className="flex-grow md:overflow-y-auto">{children}</div>
      </SidebarProvider>
    </div>
  );
};

export default Layout;
