"use client";
import { IDashboardLayoutProp } from "../../layout.props";

const Layout: React.FC<IDashboardLayoutProp> = ({ children }) => {
  return (
    <div>
      <div className="flex-grow md:overflow-y-auto">{children}</div>
    </div>
  );
};

export default Layout;
