"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { blogSections } from "./blogcontent";

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
    <>
      <div className="mt-30 flex flex-col lg:flex-row w-full max-w-[1600px]  gap-2 justify-center  px-20 ">
        <div className="lg:w-1/4 border-r p-2 sticky top-16  ">
          <h2 className="text-lg font-semibold mb-4">Table of Contents</h2>
          <nav className="overflow-y-auto h-96 hide-scrollbar ">
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

        {/* Main Content - Scrollable in the middle */}
        <div className="lg:w-2/4 p-2 overflow-y-scroll   h-screen hide-scrollbar  ">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-3xl font-bold">How It Works</CardTitle>
            </CardHeader>
            <CardContent>
              {blogSections.map((section) => (
                <section id={section.id} key={section.id} className="mb-8 ">
                  <h2 className="text-2xl font-semibold mb-4">
                    {section.title}
                  </h2>
                  <p className="mb-4">{section.content}</p>
                </section>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Additional Links - Sticky on the right */}
        <div className="lg:w-1/4 border-l p-2 sticky top-16">
          <div className="flex relative bg-amber-200 justify-center">
            <div className="w-10 h-10 rounded-full bg-red-500"></div>
            <div className="w-10 h-10 rounded-full bg-green-500 relative right-4 z-10"></div>
            <div className="w-10 h-10 rounded-full bg-blue-500 relative   right-8 z-20"></div>
          </div>
        </div>
      </div>
    </>
  );
}
