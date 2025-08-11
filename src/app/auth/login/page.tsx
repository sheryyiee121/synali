"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { useRouter } from "next/navigation";
import { useLogin } from "../hooks/useAuth";

const formSchema = z.object({
  email: z
    .string()
    .email("Invalid email address")
    .min(1, "Work email is required"),
  password: z.string().nonempty("Password is required"),
});

interface ILogin {
  email: string;
  password: string;
}

export default function CompanyLogin() {
  const { mutateAsync: login } = useLogin();

  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: ILogin) => {
    try {
      const response = await login(data);
      localStorage.setItem("token", JSON.stringify(response.access_token));
      toast.success("Login Successfully");
      router.push("/dashboard");
      //TODO
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error.data.message);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row h-dvh ">
      <div className="flex flex-3 flex-col items-center  p-6 bg-sidebar">
        <Link href="/">
          <Image
            src="/wisechirp.png"
            alt="Logo"
            objectFit="contain"
            height={80}
            width={80}
            quality={100}
            className="dark:invert mb-4  "
          />
        </Link>

        <div className="flex flex-1 items-center justify-center ">
          <div className="max-w-2xl md:w-2xl ">
            <h1 className="text-2xl font-bold">Welcome! Login to WiseChirp</h1>
            <p className="text-muted-foreground mb-4">
              To create your free account, we just need a few details.
            </p>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email *</FormLabel>
                      <FormControl>
                        <Input placeholder="name@company.com" {...field} />
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
                <Link href={"/auth/forgot-password/company"}>
                  <div className="flex justify-end cursor-pointer mb-6">
                    <p className=" text-blue-600 hover:text-blue-700 underline  ">
                      Forgot password?
                    </p>
                  </div>
                </Link>
                <Button
                  type="submit"
                  className="w-full bg-blue-600 text-white hover:bg-blue-700"
                >
                  Login
                </Button>
                <Separator className=" my-4" />
                <Link href="/auth/signup">
                  <div className="flex flex-row items-center justify-center gap-10 cursor-pointer  select-none">
                    <p className="text-muted-foreground ">
                      Don&apos;t have an account?{" "}
                      <span className=" text-blue-600 hover:text-blue-700 underline">
                        Register
                      </span>
                    </p>
                  </div>
                </Link>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
