import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { NavGroup } from "./nav-group";
import { NavUser } from "./nav-user";
import { SidebarData } from "./types";

// Ensure sidebarData conforms to SidebarData type

interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
  sideNavData: SidebarData;
}

export function AppSidebar({ sideNavData, ...props }: AppSidebarProps) {
  return (
    <Sidebar collapsible="icon" variant="floating" {...props}>
      <SidebarHeader>
        {/* <TeamSwitcher teams={sideNavData.teams} /> */}
      </SidebarHeader>
      <SidebarContent>
        {sideNavData.navGroups.map((group) => (
          <NavGroup key={group.title} {...group} />
        ))}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={sideNavData.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
