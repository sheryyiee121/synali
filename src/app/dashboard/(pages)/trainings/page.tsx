"use client";
import { ModeToggle } from "@/components/theme-switch";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
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
import { Separator } from "@/components/ui/separator";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import DynamicBreadcrumb from "../../components/layout/dynamic-breadcrumb";
import { Header } from "../../components/layout/header";
import { Main } from "../../components/layout/main";
import { ProfileDropdown } from "../../components/layout/profile-dropdown";

const bots = [
  {
    id: 1,
    no_of_bots: 25,
    title: "Final Expense Bot",
  },
  {
    id: 2,
    no_of_bots: 25,
    title: "Auto Warranty Bot",
  },
  {
    id: 3,
    no_of_bots: 25,
    title: "Home Improvement Bot",
  },
  {
    id: 4,
    no_of_bots: 25,
    title: "Medicare Bot",
  },
  {
    id: 5,
    no_of_bots: 25,
    title: "Auto Insurance Bot",
  },
  {
    id: 6,
    no_of_bots: 25,
    title: "Solar Bot",
  },
];

const formSchema = z.object({
  serverName: z.string().min(2, "Server name must be at least 2 characters"),
  serverEmail: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  serverUrl: z.string().url("Invalid URL format"),
});

type FormData = z.infer<typeof formSchema>;

const breadcrumbItems = [
  { id: "1", label: "Dashboard", href: "/dashboard" },
  { id: "2", label: "Trainings", href: "/dashboard/trainings" },
];

export default function Trainings() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      serverName: "",
      serverEmail: "",
      password: "",
      serverUrl: "",
    },
  });

  const filteredBots = bots.filter((bot) =>
    bot.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const onSubmit = (data: FormData) => {
    console.log(data);
    toast.success("Server added successfully!");
    setIsModalOpen(false);
    form.reset();
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
      <Main fixed>
        <div className="mb-2 flex flex-wrap items-center justify-between gap-x-4 space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Training</h2>
            <p className="text-muted-foreground">
              Here&apos;s a list of all your bots!
            </p>
          </div>
          {/* <Button className="space-x-1" onClick={() => setIsModalOpen(true)}>
            <span>Add Server</span> <IconPlus size={18} />
          </Button> */}
        </div>

        <div className="my-4 flex items-start sm:my-0 sm:items-center">
          <div className="flex flex-col gap-4 sm:my-4 sm:flex-row">
            <Input
              placeholder="Filter bots..."
              className="h-9 w-40 lg:w-[250px]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <Separator className="shadow" />
        <div className="faded-bottom no-scrollbar grid gap-4 overflow-auto pb-16 pt-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredBots?.map((bot) => (
            <Link
              key={bot.id}
              href={`/dashboard/trainings/${bot.title}/${bot.id}`}
            >
              <Card
                key={bot.id}
                className="rounded-lg border hover:shadow-md hover:shadow-primary/10  transition-all duration-300 ease-in-out hover:bg-muted/50"
              >
                <CardContent className="p-4">
                  <div className="flex justify-between items-center mb-4">
                    <Badge variant="secondary">{`${bot.no_of_bots} bots`}</Badge>
                  </div>
                  <h2 className="text-xl font-bold mb-2">{bot.title}</h2>
                  <p className="text-gray-500">{bot.title}</p>
                </CardContent>
                {/* <CardFooter className="flex justify-between items-center">
                  <Button variant="outline" className="w-3/4 cursor-pointer ">
                    Edit server
                  </Button>
                  <Button
                    variant="ghost"
                    className="text-gray-500 cursor-pointer"
                  >
                    <Trash2 className="w-5 h-5" />
                  </Button>
                </CardFooter> */}
              </Card>
            </Link>
          ))}
        </div>
      </Main>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-xl">Add New Server</DialogTitle>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="serverName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Server Name *</FormLabel>
                    <FormControl>
                      <Input placeholder="Server Name" {...field} />
                    </FormControl>
                    <FormMessage className="text-red-500 text-sm mt-1" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="serverEmail"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Server Email *</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Server Email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-red-500 text-sm mt-1" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password *</FormLabel>
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
                name="serverUrl"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Server URL *</FormLabel>
                    <FormControl>
                      <Input placeholder="Server URL" {...field} />
                    </FormControl>
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
                <Button type="submit">Add Server</Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </>
  );
}
