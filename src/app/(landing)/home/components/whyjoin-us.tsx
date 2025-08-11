"use client";
import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  CircleCheckBig,
  ShieldCheck,
  UserRoundX,
  ShieldUser,
  UserRoundPlus,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const WhyJoinSection: FC = () => {
  const isMobile = useIsMobile;
  return (
    <div
      data-aos="fade-up"
      className="   p-4 md:p-8 lg:px-40 lg:py-20 w-full max-w-[1600px] m-auto flex flex-col items-center lg:flex-row lg:justify-center gap-10"
    >
      {/* Left Content Column */}
      <div className="flex flex-col  p-4">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-medium mb-4">
            Why Should You Join <strong>Scoutin</strong>
          </h2>
          <p className="">
            Scoutin transforms the hiring journey with AI-driven interviews that
            are fast, fair, and tailored to your job needs. Whether you are a
            recruiter or a candidate, our smart platform simplifies hiring and
            helps you make better decisions—faster.
          </p>
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1" className="border-none">
            <AccordionTrigger className="  flex  px-2">
              <div className="flex gap-4">
                <CircleCheckBig size={isMobile() ? "1rem" : "1.5rem"} />
                Smarter Screening
              </div>
            </AccordionTrigger>
            <AccordionContent className="">
              Let AI handle the first round. Scoutin evaluates candidates based
              on your criteria, saving time while ensuring quality fits.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="border-none">
            <AccordionTrigger className="  flex  px-2">
              {" "}
              <div className="flex gap-4">
                <CircleCheckBig size={isMobile() ? "1rem" : "1.5rem"} />
                Personalized Experience
              </div>
            </AccordionTrigger>
            <AccordionContent className="">
              Custom interview flows for every role. From tech-heavy to
              communication-focused jobs, Scoutin adapts to your hiring goals.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="border-none">
            <AccordionTrigger className="  flex  px-2">
              <div className="flex gap-4">
                <CircleCheckBig size={isMobile() ? "1rem" : "1.5rem"} />
                Always Available
              </div>
            </AccordionTrigger>
            <AccordionContent className="">
              Access interviews, insights, and reports anytime. Our cloud-based
              platform is ready whenever you are.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* Join Button */}
        <Link href="">
          <Button
            className="mt-8  hover:bg-blue-700 px-6 py-3 rounded-md"
            variant="default"
          >
            Join Now
          </Button>
        </Link>
      </div>

      {/* Right Image Column */}
      <div className=" p-4">
        <div className="relative">
          <div className="relative w-80 h-80 md:w-120 md:h-120 ">
            <Image
              src="/images/wh-img.png"
              objectFit="contain "
              quality="100"
              layout="fill"
              alt="Image.png"
            />
          </div>
          <div className="absolute top-20 md:top-30 md:left-15 lg:top-30 lg:left-10  animate-bounce flex px-2 py-6 rounded-lg bg-[#8ae600] gap-2 items-center w-36 h-10 lg:w-[160px] lg:h-[50px]">
            <div className="bg-white rounded-full p-2 ">
              <ShieldCheck className="text-[#0ad121] " />
            </div>
            <h3 className="text-[12px]">Safe & Secure</h3>
          </div>
          <div className="absolute top-64 left-20 md:top-95 md:left-25 lg:top-95 lg:left-30  animate-bounce flex px-2 py-6 rounded-lg bg-[#8ae600] gap-2 items-center w-56 h-10 lg:w-[220px] lg:h-[60px]">
            <div className="flex ">
              <div className="bg-[#0ad121] rounded-full p-2 ">
                <UserRoundPlus className="text-stone-900" />
              </div>
              <div className="bg-blue-700 rounded-full p-2 ">
                <ShieldUser className="text-stone-900" />
              </div>
              <div className="bg-white rounded-full p-2 ">
                <UserRoundX className="text-stone-900" />
              </div>
            </div>
            <h4>
              1M+ <br />
              Candidates
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyJoinSection;
