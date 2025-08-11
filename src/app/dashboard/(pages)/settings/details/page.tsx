"use client";
import { Button } from "@/components/ui/button";
import { topNav } from "../../../components/layout/data/topnav-data";
import { Header } from "../../../components/layout/header";
import { TopNav } from "../../../components/layout/top-nav";
import { ModeToggle } from "@/components/theme-switch";
import { Main } from "../../../components/layout/main";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Monitor, Moon, Settings, Sun, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useTheme } from "next-themes";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  addressLine1: z
    .string()
    .min(5, "Address line 1 must be at least 5 characters"),
  addressLine2: z.string().optional(),
  country: z.string().min(1, "Country is required"),
  companyName: z.string().min(2, "Company name must be at least 2 characters"),
  companyId: z.string().min(1, "Company ID is required"),
  taxId: z.string().min(1, "Tax ID is required"),
});

type FormData = z.infer<typeof formSchema>;

const ThemeSettings = () => {
  const { setTheme, theme } = useTheme();

  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-foreground flex items-center gap-2">
          <Settings className="h-5 w-5" />
          Theme
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex gap-4">
          <Button
            variant={theme === "system" ? "default" : "outline"}
            onClick={() => setTheme("system")}
            className="flex items-center gap-2 w-40 cursor-pointer"
          >
            <Monitor className="h-4 w-4" />
            System
          </Button>
          <Button
            variant={theme === "light" ? "default" : "outline"}
            onClick={() => setTheme("light")}
            className="flex items-center gap-2 w-40 cursor-pointer"
          >
            <Sun className="h-4 w-4" />
            Light
          </Button>
          <Button
            variant={theme === "dark" ? "default" : "outline"}
            onClick={() => setTheme("dark")}
            className="flex items-center gap-2 w-40 cursor-pointer"
          >
            <Moon className="h-4 w-4" />
            Dark
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

const AccountInfo = () => {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      addressLine1: "",
      addressLine2: "",
      country: "",
      companyName: "",
      companyId: "",
      taxId: "",
    },
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    toast.success("Settings saved successfully!");
  };

  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-foreground flex items-center gap-2">
          <User className="h-5 w-5" />
          Account Info
        </CardTitle>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-foreground">
                      First Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="First name"
                        className="bg-background"
                      />
                    </FormControl>
                    <FormMessage className="text-red-500 text-sm mt-1" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-foreground">
                      Last Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Last name"
                        className="bg-background"
                      />
                    </FormControl>
                    <FormMessage className="text-red-500 text-sm mt-1" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="addressLine1"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-foreground">
                      Address Line 1
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Address line 1"
                        className="bg-background"
                      />
                    </FormControl>
                    <FormMessage className="text-red-500 text-sm mt-1" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="addressLine2"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-foreground">
                      Address Line 2
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Address line 2"
                        className="bg-background"
                      />
                    </FormControl>
                    <FormMessage className="text-red-500 text-sm mt-1" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-foreground">
                      Country
                    </FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="bg-background w-full">
                          <SelectValue placeholder="Select country" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="pk">Pakistan</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage className="text-red-500 text-sm mt-1" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="companyName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-foreground">
                      Company Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Company name"
                        className="bg-background"
                      />
                    </FormControl>
                    <FormMessage className="text-red-500 text-sm mt-1" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="companyId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-foreground">
                      Company ID
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Company id"
                        className="bg-background"
                      />
                    </FormControl>
                    <FormMessage className="text-red-500 text-sm mt-1" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="taxId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-foreground">
                      Tax ID
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Tax id"
                        className="bg-background"
                      />
                    </FormControl>
                    <FormMessage className="text-red-500 text-sm mt-1" />
                  </FormItem>
                )}
              />
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 text-white mt-10"
            >
              Save Changes
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
};

export default function CompanySettings() {
  return (
    <>
      <Header>
        <TopNav links={topNav} />
        <div className="ml-auto flex items-center space-x-4">
          <Button variant="ghost" size="sm">
            Docs
          </Button>
          <Button variant="ghost" size="sm">
            Referrals
          </Button>
          <ModeToggle />
        </div>
      </Header>

      <Main>
        <div className="bg-background ">
          <div>
            <div className="mb-8">
              <h1 className="text-3xl font-bold tracking-tight text-foreground">
                Settings
              </h1>
              <p className="text-muted-foreground mt-2">
                Manage your account settings, billing information, and
                preferences.
              </p>
            </div>

            <Separator className="mb-8" />

            <div className="space-y-8">
              {/* Theme Settings */}
              <ThemeSettings />

              {/* Account Information */}
              <AccountInfo />
            </div>
          </div>
        </div>
      </Main>
    </>
  );
}
