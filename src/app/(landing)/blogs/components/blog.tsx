"use client";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { blogSections } from "./blogcontent";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Linkedin, Twitter, Instagram, Mails } from "lucide-react";

export default function Blog() {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="mt-30 flex flex-col lg:flex-row w-full max-w-[1600px] m-auto  gap-2 justify-center    lg:px-40  ">
      <div className="flex-col flex-1 gap-2 border-r sticky  px-4  overflow-y-auto h-110 hide-scrollbar ">
        <h2 className="text-lg font-semibold mb-4">Table of Contents</h2>
        <nav className="">
          <ul className="space-y-2">
            {blogSections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className={cn(
                    "block p-2 rounded-md text-sm",
                    activeSection === section.id
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-gray-100"
                  )}
                >
                  {section.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="flex-4 justify-items-start px-2 overflow-y-scroll   h-screen hide-scrollbar">
        <Card className="mb-8 border-none shadow-none">
          <CardHeader>
            <CardTitle className="text-3xl font-bold">How It Works</CardTitle>
          </CardHeader>
          <CardContent>
            {blogSections.map((section) => (
              <section id={section.id} key={section.id} className="mb-8 ">
                <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
                <p className="mb-4">{section.content}</p>
              </section>
            ))}
          </CardContent>
        </Card>
      </div>
      <div className="flex-col flex-1 items-start    border-l sticky  px-4 ">
        <div className=" flex justify-start ">
          <Avatar className="w-10 h-10  ">
            <AvatarImage
              src="sarmad.jpeg"
              className="object-cover rounded-full"
              alt="Avatar"
            />
          </Avatar>

          <Avatar className="w-10 h-10 right-4 z-10">
            <AvatarImage
              src="/faran.jpg"
              className="object-cover rounded-full "
              alt="Avatar"
            />
          </Avatar>
          <Avatar className="w-10 h-10 right-8 z-20">
            <AvatarImage
              src="/danish.png"
              className="object-cover rounded-full "
              alt="Avatar"
            />
          </Avatar>
        </div>
        <div className=" flex-col gap-2 pt-4 ">
          <h1>Community</h1>
          <p>Join thouthands of remoters!</p>
          <Link href="">
            {" "}
            <p className="pt-4 text-black dark:text-white underline">
              Join the community
            </p>
          </Link>
          <Image
            src="/imagee.webp"
            alt="img"
            width={100}
            height={100}
            className="pt-6 rounded-xl"
          />
          <div className="flex-col items-start gap-2 pt-4">
            <p className="">Share with friends</p>
            <div className="flex gap-3 justify-self-start   pt-4 ">
              <Linkedin />
              <Twitter />
              <Facebook />
              <Instagram />
              <Mails />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
