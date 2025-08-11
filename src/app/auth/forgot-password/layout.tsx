"use client";

import { IDashboardLayoutProp } from "@/src/app/dashboard/layout.props";

const Layout: React.FC<IDashboardLayoutProp> = ({ children }) => {
  return (
    <div>
      <div className="flex-grow md:overflow-y-auto">{children}</div>
    </div>
  );
};

export default Layout;
