"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Separator } from "@/components/ui/separator";

const formSchema = z.object({
  email: z
    .string()
    .email("Invalid email address")
    .min(1, "Work email is required"),
});

interface SignupForm {
  email: string;
}

export default function CandidateForgotPassword() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data: SignupForm) => {
    toast.success("form submitted successfully");
    console.log(data);
  };

  return (
    <div className="flex flex-col h-dvh bg-sidebar ">
      <div>
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Logo"
            objectFit="contain"
            height={80}
            width={80}
            quality={100}
            className="dark:invert mb-4 ml-6  "
          />
        </Link>
      </div>
      <div className="flex flex-1 flex-col items-center justify-center p-6 pb-24 ">
        <div className="w-full md:w-1/2 items-center justify-center  ">
          <h1 className="text-4xl font-bold text-center mb-10">
            Forgot your password?
          </h1>
          <p className=" text-xl text-center text-muted-foreground mb-4">
            To create your free account, we just need a few details.
          </p>
          <Separator className="my-4" />
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email *</FormLabel>
                    <FormControl>
                      <Input placeholder="example@gmail.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full bg-blue-700 text-white self-center hover:bg-blue-500 cursor-pointer"
              >
                Send link
              </Button>
              <Link href="/auth/login/candidate">
                <div className="flex flex-row items-center justify-center gap-10 cursor-pointer  select-none">
                  <Button variant={"outline"}>Back to login</Button>
                </div>
              </Link>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
