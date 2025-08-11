"use client";
import { ModeToggle } from "@/components/theme-switch";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChartAreaInteractive } from "@/src/app/dashboard/components/dashboardComponents/dashboard-area-chart";
import { Overview } from "@/src/app/dashboard/components/dashboardComponents/dashbord-overview";
import { RecentJobs } from "@/src/app/dashboard/components/dashboardComponents/recent-Jobs";
import DynamicBreadcrumb from "@/src/app/dashboard/components/layout/dynamic-breadcrumb";
import { Header } from "@/src/app/dashboard/components/layout/header";
import { Main } from "@/src/app/dashboard/components/layout/main";
import { BotIcon, DollarSign, PhoneCall } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useState } from "react";
import { useAllocateBots } from "@/src/app/dashboard/hooks/server-hooks";

const formSchema = z.object({
  no_of_bots: z
    .number()
    .min(1, "Number of bots must be at least 1")
    .max(100, "Number of bots cannot exceed 100"),
});

type FormData = z.infer<typeof formSchema>;

const ServerInfo: React.FC = () => {
  const { slug, id } = useParams();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { mutateAsync: allocateBots } = useAllocateBots();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      no_of_bots: 1,
    },
  });

  const breadcrumbItems = [
    { id: "1", label: "Dashboard", href: "/dashboard" },
    { id: "2", label: "Servers", href: "/dashboard/servers" },
    {
      id: "3",
      label: decodeURIComponent(slug as string),
      href: `/dashboard/servers/${slug}/${id}`,
    },
  ];

  const onSubmit = async (data: FormData) => {
    try {
      const payload = {
        vicidial_server_id: parseInt(id as string),
        number_of_phones: data.no_of_bots,
      };
      const response = await allocateBots(payload);

      toast.success(
        `Successfully allocated ${data.no_of_bots} bots to server ${id}`
      );
      console.log("Allocation response:", response);
      setIsDialogOpen(false);
      form.reset();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error.data.message);
    }
  };

  return (
    <div>
      <Header>
        <DynamicBreadcrumb items={breadcrumbItems} maxItems={4} />
        <div className="ml-auto flex items-center space-x-4">
          <ModeToggle />
        </div>
      </Header>
      <Main>
        <div className="flex items-center justify-between">
          <div className="mb-2 flex items-center justify-between space-y-2">
            <h1 className="text-2xl font-bold tracking-tight">
              {decodeURIComponent(slug as string)}
            </h1>
          </div>
          <div className="flex gap-4">
            <Button onClick={() => setIsDialogOpen(true)}>Allocate Bots</Button>
            <Link href={`/dashboard/servers/${slug}/${1}/train`}>
              <Button>Custom Train</Button>
            </Link>
          </div>
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
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Total Active Bots
                  </CardTitle>
                  <BotIcon size={16} />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">25</div>
                  <p className="text-xs text-muted-foreground">
                    +5 from last month
                  </p>
                  <Link href={`/dashboard/servers/${slug}/${id}/view-bots`}>
                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-4 items-center cursor-pointer"
                    >
                      View
                    </Button>
                  </Link>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Total calls taken
                  </CardTitle>
                  <PhoneCall size={10} />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+2350</div>
                  <p className="text-xs text-muted-foreground">
                    +180.1% from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Total balance
                  </CardTitle>
                  <DollarSign size={10} />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12,234</div>
                  <p className="text-xs text-muted-foreground">
                    +19% from last month
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-7">
              <Card className="col-span-1 lg:col-span-8">
                <CardHeader>
                  <CardTitle>Overview</CardTitle>
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
                  <CardTitle>Recent Jobs</CardTitle>
                  <CardDescription>
                    You posted 20 jobs this month.
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
                  <CardTitle>Overview</CardTitle>
                </CardHeader>
                <CardContent className="pl-2">
                  <iframe
                    src="https://vicidial.feedshield.net/"
                    className="w-full min-h-screen border-0"
                    title="Vicidial Dashboard"
                  />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </Main>

      <Dialog
        open={isDialogOpen}
        onOpenChange={(open) => {
          setIsDialogOpen(open);
          if (!open) {
            form.reset();
          }
        }}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Allocate Bots to Server</DialogTitle>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="no_of_bots"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Number of Bots to Allocate *</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        min="1"
                        max="100"
                        placeholder="Enter number of bots"
                        value={field.value}
                        onChange={(e) =>
                          field.onChange(parseInt(e.target.value) || 1)
                        }
                      />
                    </FormControl>
                    <FormMessage className="text-red-500 text-sm mt-1" />
                  </FormItem>
                )}
              />
              <DialogFooter>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsDialogOpen(false)}
                >
                  Cancel
                </Button>
                <Button type="submit">Allocate Bots</Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ServerInfo;
