"use client";
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";

import { ModeToggle } from "@/components/theme-switch";
import { Header } from "../../../components/layout/header";
import { TopNav } from "../../../components/layout/top-nav";
import { topNav } from "../../../components/layout/data/topnav-data";
import { Main } from "../../../components/layout/main";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  role: z.string().min(1, "Role is required"),
});

type FormData = z.infer<typeof formSchema>;

export default function Team() {
  const teamData = [
    {
      name: "Sarmad Khalid",
      email: "sarmad@faremit.com",
      lastActive: "about 1 hour ago",
      companyRole: "System Admin",
      jobs: "Assign jobs",
    },
    {
      name: "Aisha Khan",
      email: "aisha@faremit.com",
      lastActive: "about 2 hours ago",
      companyRole: "Project Manager",
      jobs: "Assign jobs",
    },
    {
      name: "Omar Farooq",
      email: "omar@faremit.com",
      lastActive: "about 30 minutes ago",
      companyRole: "Developer",
      jobs: "Assign jobs",
    },
    {
      name: "Fatima Ahmed",
      email: "fatima@faremit.com",
      lastActive: "about 3 hours ago",
      companyRole: "Designer",
      jobs: "Assign jobs",
    },
    {
      name: "Hassan Malik",
      email: "hassan@faremit.com",
      lastActive: "about 15 minutes ago",
      companyRole: "QA Engineer",
      jobs: "Assign jobs",
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", password: "", role: "" },
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    toast.success("User added successfully!");
    setIsModalOpen(false);
    form.reset();
  };

  return (
    <>
      <Header>
        <TopNav links={topNav} />
        <div className="ml-auto flex items-center space-x-4">
          <ModeToggle />
        </div>
      </Header>
      <Main>
        <div className="mb-2 flex flex-wrap items-center justify-between gap-x-4 space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Team</h2>
            <p className="text-muted-foreground">
              Here&apos;s a list of all Team!
            </p>
          </div>
          <Button onClick={() => setIsModalOpen(true)}>+ Add User</Button>
        </div>
        <div className="container mx-auto py-10">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Last active</TableHead>
                <TableHead>Company role</TableHead>
                <TableHead>Jobs</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {teamData.map((member, index) => (
                <TableRow key={index} className="">
                  <TableCell>
                    <div className="flex items-center space-x-2 my-4 ">
                      <div className="h-8 w-8 rounded-full bg-purple-600 flex items-center justify-center text-white text-sm">
                        {member.name
                          .split(" ")
                          .map((part) => part[0])
                          .slice(0, 2)
                          .join("")
                          .toUpperCase()}
                      </div>
                      <div>
                        {member.name}
                        <div className="text-muted-foreground text-sm">
                          {member.email}
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{member.lastActive}</TableCell>
                  <TableCell>
                    <select className="border rounded p-1 text-sm">
                      <option>{member.companyRole}</option>
                    </select>
                  </TableCell>
                  <TableCell>
                    <button className="border rounded p-1 text-sm text-gray-500">
                      {member.jobs}
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Main>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-xl">Add New User</DialogTitle>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name *</FormLabel>
                    <FormControl>
                      <Input placeholder="Name" {...field} />
                    </FormControl>
                    <FormMessage className="text-red-500 text-sm mt-1" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email *</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="Email" {...field} />
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
                name="role"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Role *</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select Role" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="System Admin">
                          System Admin
                        </SelectItem>
                        <SelectItem value="Project Manager">
                          Project Manager
                        </SelectItem>
                        <SelectItem value="Developer">Developer</SelectItem>
                        <SelectItem value="Designer">Designer</SelectItem>
                        <SelectItem value="QA Engineer">QA Engineer</SelectItem>
                      </SelectContent>
                    </Select>
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
                <Button type="submit">Add User</Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </>
  );
}
