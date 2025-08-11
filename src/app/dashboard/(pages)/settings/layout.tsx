"use client";
import { IDashboardLayoutProp } from "../../layout.props";
import SettingsProvider from "@/src/context/settings-context";

const Layout: React.FC<IDashboardLayoutProp> = ({ children }) => {
  return (
    <div>
      <SettingsProvider>
        <div className="flex-grow md:overflow-y-auto">{children}</div>
      </SettingsProvider>
    </div>
  );
};

export default Layout;
