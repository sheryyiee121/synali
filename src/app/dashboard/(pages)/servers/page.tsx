"use client";
import { ModeToggle } from "@/components/theme-switch";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { IconPlus } from "@tabler/icons-react";
import { Trash2 } from "lucide-react";
import { useState } from "react";
import { Header } from "../../components/layout/header";
import { ProfileDropdown } from "../../components/layout/profile-dropdown";
import { Main } from "../../components/layout/main";
import DynamicBreadcrumb from "../../components/layout/dynamic-breadcrumb";
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
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import Link from "next/link";
import {
  useCreateServer,
  useDeleteServer,
  useGetServer,
  useUpdateServer,
} from "../../hooks/server-hooks";
import { IServer } from "@/src/models/servers-model";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  server_ip: z.string().min(1, "Server name must be at least 2 characters"),
  api_username: z.string().min(1, "User name is required"),
  api_password: z.string().min(1, "Password must be at least 6 characters"),
  vicidial_url: z.string().url("Invalid URL format"),
  campaign: z.string().min(1, "Please select a campaign"),
  no_of_bots: z
    .number()
    .min(1, "Number of bots must be at least 1")
    .max(100, "Number of bots cannot exceed 100"),
});

type FormData = z.infer<typeof formSchema>;

const campaigns = [
  {
    id: "1",
    campaign: "final_expense",
    title: "Final Expense",
  },
  {
    id: "2",
    campaign: "medicare",
    title: "Medicare",
  },
  {
    id: "1",
    campaign: "auto_warranty",
    title: "Auto Warranty",
  },
  {
    id: "1",
    campaign: "home_service",
    title: "Home Service",
  },
  {
    id: "1",
    campaign: "auto_insurance",
    title: "Auto Insurance",
  },
];

const breadcrumbItems = [
  { id: "1", label: "Dashboard", href: "/dashboard" },
  { id: "2", label: "Servers", href: "/dashboard/servers" },
];

export default function Servers() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedServerId, setSelectedServerId] = useState<number | null>(null);
  const { mutateAsync: create_server } = useCreateServer();
  const { data: servers } = useGetServer();
  const { mutateAsync: delete_server } = useDeleteServer();
  const { mutateAsync: update_server } = useUpdateServer();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      server_ip: "",
      api_username: "",
      api_password: "",
      vicidial_url: "",
      campaign: "",
      no_of_bots: 1,
    },
  });

  const filteredOffices = servers?.filter((serve) =>
    serve.vicidial_url.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const onSubmit = async (data: FormData) => {
    try {
      if (isEditMode && selectedServerId) {
        const response = await update_server({
          id: selectedServerId,
          payload: { ...data },
        });
        toast.success(`Server updated successfully ${response.id}`);
      } else {
        const response = await create_server(data);
        toast.error(`Server created successfully ${response.id}`);
      }
      setIsModalOpen(false);
      setIsEditMode(false);
      setSelectedServerId(null);
      form.reset();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error.data.message);
    }
  };

  const handleDeleteServer = async (e: React.MouseEvent, id: number) => {
    e.stopPropagation();
    e.preventDefault();
    try {
      const response = await delete_server(id);
      toast.success(response.message);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error?.data?.message || "Something went wrong");
    }
  };

  const handleEditServer = (server: IServer) => {
    setIsEditMode(true);
    setSelectedServerId(server.id);
    form.reset({
      server_ip: server.server_ip || undefined,
      api_username: server.api_username,
      api_password: server.api_password,
      vicidial_url: server.vicidial_url,
    });
    setIsModalOpen(true);
  };

  return (
    <>
      <Header>
        <DynamicBreadcrumb items={breadcrumbItems} maxItems={4} />
        <div className="ml-auto flex items-center gap-4">
          <ModeToggle />
          <ProfileDropdown />
        </div>
      </Header>

      <Main>
        <div className="mb-2 flex flex-wrap items-center justify-between gap-x-4 space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Servers</h2>
            <p className="text-muted-foreground">
              Here&apos;s a list of all servers!
            </p>
          </div>
          <Button
            className="space-x-1"
            onClick={() => {
              setIsEditMode(false);
              setSelectedServerId(null);
              form.reset();
              setIsModalOpen(true);
            }}
          >
            <span>Add Server</span> <IconPlus size={18} />
          </Button>
        </div>

        <div className="my-4 flex items-start sm:my-0 sm:items-center">
          <div className="flex flex-col gap-4 sm:my-4 sm:flex-row">
            <Input
              placeholder="Filter offices..."
              className="h-9 w-40 lg:w-[250px]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <Separator className="shadow" />
        <div className="faded-bottom no-scrollbar grid gap-4 overflow-auto pb-16 pt-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredOffices?.map((server) => (
            <Link
              key={server.id}
              href={`/dashboard/servers/${server.api_password}/${server.id}`}
            >
              <Card className="rounded-lg border hover:shadow-md hover:shadow-primary/10 transition-all duration-300 ease-in-out hover:bg-muted/50">
                <CardContent className="p-4">
                  <div className="flex justify-between items-center mb-4">
                    <Badge variant="secondary">{`${server.vicidial_url} agents`}</Badge>
                  </div>
                  <h2 className="text-xl font-bold mb-2">
                    {server.api_username}
                  </h2>
                  <p className="text-gray-500">{server.api_password}</p>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <Button
                    variant="outline"
                    className="w-3/4 cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                      handleEditServer(server);
                    }}
                  >
                    Edit server
                  </Button>
                  <Button
                    onClick={(e) => handleDeleteServer(e, server.id)}
                    variant="ghost"
                    className="text-gray-500 cursor-pointer"
                  >
                    <Trash2 className="w-5 h-5" />
                  </Button>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </Main>

      <Dialog
        open={isModalOpen}
        onOpenChange={(open) => {
          setIsModalOpen(open);
          if (!open) {
            setIsEditMode(false);
            setSelectedServerId(null);
            form.reset();
          }
        }}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-xl">
              {isEditMode ? "Edit Server" : "Add New Server"}
            </DialogTitle>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="server_ip"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Server IP *</FormLabel>
                    <FormControl>
                      <Input placeholder="Server Name" {...field} />
                    </FormControl>
                    <FormMessage className="text-red-500 text-sm mt-1" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="api_username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Api Username *</FormLabel>
                    <FormControl>
                      <Input placeholder="Server username" {...field} />
                    </FormControl>
                    <FormMessage className="text-red-500 text-sm mt-1" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="api_password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Api Password *</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-red-500 text-sm mt-1" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="vicidial_url"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Vicidial URL *</FormLabel>
                    <FormControl>
                      <Input placeholder="Server URL" {...field} />
                    </FormControl>
                    <FormMessage className="text-red-500 text-sm mt-1" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="campaign"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Campaign *</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select a server" />
                        </SelectTrigger>
                        <SelectContent>
                          {campaigns?.map((item) => (
                            <SelectItem key={item.id} value={item.campaign}>
                              {item.title}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage className="text-red-500 text-sm mt-1" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="no_of_bots"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Number of Bots *</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Enter number of bots"
                        {...field}
                        onChange={(e) =>
                          field.onChange(parseInt(e.target.value) || 1)
                        }
                      />
                    </FormControl>
                    <p className="text-sm text-muted-foreground mt-1">
                      Total bots available:{" "}
                      {servers?.reduce((sum) => sum + 20, 0) || 0}
                    </p>
                    <FormMessage className="text-red-500 text-sm mt-1" />
                  </FormItem>
                )}
              />

              <Separator className="my-4" />
              <DialogFooter>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </Button>
                <Button type="submit">
                  {isEditMode ? "Update Server" : "Add Server"}
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </>
  );
}
