"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { useRouter } from "next/navigation";
import { useSignup } from "../hooks/useAuth";

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z
    .string()
    .email("Invalid email address")
    .min(1, "Work email is required"),
  company: z.string().min(1, "Company location is required"),
  phone: z
    .string()
    .min(10, "Phone number is required")
    .max(15, "Phone number is too long"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  terms_and_conditions: z
    .boolean()
    .refine(
      (val) => val === true,
      "You must agree to the terms and conditions"
    ),
});

interface SignupForm {
  name: string;
  email: string;
  company: string;
  phone: string;
  password: string;
  terms_and_conditions: boolean;
}

export default function CompanySignup() {
  const { mutateAsync: signup } = useSignup();

  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      phone: "",
      password: "",
      terms_and_conditions: false,
    },
  });

  const onSubmit = async (data: SignupForm) => {
    try {
      const response = await signup(data);
      toast.success(response.message);
      router.push("/auth/login");
      //TODO
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error.data.message);
    }
  };

  return (
    <div className="flex flex-col  lg:flex-row h-dvh ">
      <div className="flex flex-1 flex-col p-6 bg-sidebar">
        <Link href="/">
          <Image
            src="/wisechirp.png"
            alt="Logo"
            objectFit="contain"
            height={80}
            width={80}
            quality={100}
            className="dark:invert"
          />
        </Link>

        <div className="flex flex-1 items-center justify-center ">
          <div className="max-w-2xl ">
            <h1 className="text-2xl font-bold">
              Welcome! Let&apos;s get started
            </h1>
            <p className="text-gray-600 mb-4">
              To create your free account, we just need a few details.
            </p>
            <Separator className=" my-4" />
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name *</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your name" {...field} />
                      </FormControl>
                      <FormMessage />
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
                        <Input placeholder="Enter your email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company *</FormLabel>
                      <FormControl>
                        <Input placeholder="name@company.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone number *</FormLabel>
                      <FormControl>
                        <Input placeholder="+92 1234567890" {...field} />
                      </FormControl>
                      <FormMessage />
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
                        <Input type="password" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="terms_and_conditions"
                  render={({ field }) => (
                    <FormItem className="flex items-center space-x-2">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <FormLabel className="text-sm">
                        I agree to the WiseChirp Terms & Conditions and the Data
                        Processing Agreement and have read the Data Privacy
                        Policy
                      </FormLabel>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="w-full bg-blue-600 text-white hover:bg-blue-700"
                >
                  Continue
                </Button>
              </form>
              <Separator className=" my-4" />
              <Link href="/auth/login/company">
                <div className="flex flex-row items-center justify-center gap-10 cursor-pointer  select-none">
                  <p className="text-muted-foreground ">
                    Already have a company account?{" "}
                    <span className=" text-blue-600 hover:text-blue-700 underline">
                      Login
                    </span>
                  </p>
                </div>
              </Link>
            </Form>
          </div>
        </div>
      </div>

      <div className="flex flex-1 items-center justify-center bg-background">
        <div className=" p-6 space-y-6">
          <h1 className="text-4xl mb-24 font-bold ">
            Join over <span className="text-blue-500">80 companies</span>{" "}
            nationwide who dail using WiseChirp
          </h1>
          <Card className="p-4 shadow-sm">
            <CardContent className="flex items-start space-x-4">
              <Image
                src={"/logo.png"}
                alt="Adidas"
                width={40}
                height={40}
                className="h-16 w-16 dark:invert "
              />
              <div>
                <p className="text-gray-600">
                  WiseChirp has completely transformed our outbound calling
                  operations. As a BPO handling high-volume cold calling
                  campaigns, we&apos;ve seen a dramatic increase in call
                  efficiency and connection rates. The AI handles thousands of
                  calls with human-like clarity, consistent tone, and zero
                  fatigue — freeing up our agents to focus on closing and
                  complex queries. It&apos;s a game-changer for scaling outreach
                  without scaling costs.
                </p>
                <p className="text-sm italic text-gray-500 mt-2">
                  Aisha Rahman, Operations Manager, Delta Connect BPO
                </p>
              </div>
            </CardContent>
          </Card>
          <p className="text-center text-gray-600">
            Trusted by over 80 companies
          </p>
        </div>
      </div>
    </div>
  );
}
