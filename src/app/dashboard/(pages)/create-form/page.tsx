import { ModeToggle } from "@/components/theme-switch";
import { Header } from "../../components/layout/header";
import { TopNav } from "../../components/layout/top-nav";
import { topNav } from "../../components/layout/data/topnav-data";

const FormCreation: React.FC = () => {
  return (
    <div>
      <Header>
        <TopNav links={topNav} />
        <div className="ml-auto flex items-center space-x-4">
          <ModeToggle />
        </div>
      </Header>
    </div>
  );
};

export default FormCreation;
