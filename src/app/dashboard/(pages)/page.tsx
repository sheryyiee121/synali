import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, DollarSign, TrendingUp, Target } from "lucide-react";
import { ChartAreaInteractive } from "../components/dashboardComponents/dashboard-area-chart";
import { Overview } from "../components/dashboardComponents/dashbord-overview";
import { RecentJobs } from "../components/dashboardComponents/recent-Jobs";
import { topNav } from "../components/layout/data/topnav-data";
import { Header } from "../components/layout/header";
import { Main } from "../components/layout/main";
import { TopNav } from "../components/layout/top-nav";

const Dashboard: React.FC = () => {
  return (
    <div>
      <Header>
        <TopNav links={topNav} />
        <div className="ml-auto flex items-center space-x-4">
          {/* Remove ModeToggle since theme switching is disabled */}
          {/* <ModeToggle /> */}
        </div>
      </Header>
      <Main>
        <div className="mb-2 flex items-center justify-between space-y-2">
          <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        </div>
        <Tabs
          orientation="vertical"
          defaultValue="overview"
          className="space-y-4"
        >
          <div className="w-full overflow-x-auto pb-2">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="analytics" disabled>
                Analytics
              </TabsTrigger>
              <TabsTrigger value="reports" disabled>
                Reports
              </TabsTrigger>
              <TabsTrigger value="notifications" disabled>
                Notifications
              </TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Active Campaigns
                  </CardTitle>

                  <Users size={10} />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">24</div>
                  <p className="text-xs text-muted-foreground">
                    +3 from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Total Reach
                  </CardTitle>
                  <TrendingUp size={10} />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+2.3M</div>
                  <p className="text-xs text-muted-foreground">
                    +180.1% from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Campaign Spend
                  </CardTitle>
                  <DollarSign size={10} />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+45,234</div>
                  <p className="text-xs text-muted-foreground">
                    +19% from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Influencers Found
                  </CardTitle>
                  <Target size={10} />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+573</div>
                  <p className="text-xs text-muted-foreground">
                    +201 since last hour
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-7">
              <Card className="col-span-1 lg:col-span-8">
                <CardHeader>
                  <CardTitle>Campaign Performance</CardTitle>
                </CardHeader>
                <CardContent className="pl-2">
                  <ChartAreaInteractive />
                </CardContent>
              </Card>
            </div>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-7">
              <Card className="col-span-1 lg:col-span-4">
                <CardHeader>
                  <CardTitle>Overview</CardTitle>
                </CardHeader>
                <CardContent className="pl-2">
                  <Overview />
                </CardContent>
              </Card>
              <Card className="col-span-1 lg:col-span-3">
                <CardHeader>
                  <CardTitle>Recent Campaigns</CardTitle>
                  <CardDescription>
                    You launched 20 campaigns this month.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <RecentJobs />
                </CardContent>
              </Card>
            </div>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-7">
              <Card className="col-span-1 lg:col-span-8">
                <CardHeader>
                  <CardTitle>ROI Analysis</CardTitle>
                </CardHeader>
                <CardContent className="pl-2">
                  <ChartAreaInteractive />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </Main>
    </div>
  );
};

export default Dashboard;
