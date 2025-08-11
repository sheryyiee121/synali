"use client";
import React from "react";
import Image from "next/image";
import { CircleCheckBig, Brain, Radar, UserSearch } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Features: React.FC = () => {
  const isMobile = useIsMobile;

  return (
    <div
      data-aos="fade-up"
      className=" w-full max-w-[1600px] m-auto   flex flex-col lg:flex-row  gap-10 items-center justify-center py-30 px-4"
    >
      {/* Left Section - Text Content */}
      <div className="lg:pl-20">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold m-6  ">
          Talent at your fingertips
        </h1>
        <div className="space-y-6">
          {/* Feature 1 */}
          <div className="flex items-start space-x-4">
            <div className="w-8 h-8  rounded-full flex items-center justify-center">
              <Brain size={20} color="gray" />
            </div>
            <div>
              <h3 className="text-lg font-semibold ">Talent Hunt</h3>
              <p className="text-sm sm:text-base ">
                lets you connect with top talent instantly through a simple,
                accessible platform.
              </p>
            </div>
          </div>
          {/* Feature 2 */}
          <div className="flex items-start space-x-4">
            <div className="w-8 h-8  rounded-full flex items-center justify-center">
              <Radar size={20} color="red" />
            </div>
            <div>
              <h3 className="text-lg font-semibold ">Perfect Hire</h3>
              <p className="text-sm sm:text-base ">
                Discover the Perfect Hire effortlessly with a platform that
                connects you to the right talent in no time..
              </p>
            </div>
          </div>
          {/* Feature 3 */}
          <div className="flex items-start space-x-4">
            <div className="w-8 h-8  rounded-full flex items-center justify-center">
              <UserSearch size={20} color="blue" />
            </div>
            <div>
              <h3 className="text-lg font-semibold ">
                Thousand interviews in Minutes
              </h3>
              <p className="text-sm sm:text-base ">
                Enables you to screen and assess top candidates quickly, saving
                time while finding the best fit.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section - Image with Overlay Card */}
      <div className="relative   flex flex-col md:flex-row gap-10  items-center md:justify-start ">
        <div className="relative w-130 h-160 ">
          <Image
            layout="fill"
            src="/images/Feature1.jpg"
            alt="Freelancer working"
            className="rounded-lg lg:pr-14 "
          />
        </div>

        {/* Overlay Card */}
        <div className="absolute  -top-4 left-14 z-10 md:top-0  md:-left-[90px]  bg-gray-900 text-white md:py-6 py-4 px-6 rounded-lg shadow-lg max-w-sm">
          <ul className="md:space-y-4 space-y-3 text-xs md:text-xl">
            <li className="flex items-center gap-4">
              <CircleCheckBig
                size={isMobile() ? "1rem" : "1.5rem"}
                color="white"
              />
              AI-Powered Screening
            </li>
            <li className="flex items-center gap-4">
              <CircleCheckBig
                size={isMobile() ? "1rem" : "1.5rem"}
                color="white"
              />
              Faster Hiring Decisions
            </li>
            <li className="flex items-center gap-4">
              <CircleCheckBig
                size={isMobile() ? "1rem" : "1.5rem"}
                color="white"
              />
              Customizable Interview Flows
            </li>
            <li className="flex items-center gap-4">
              <CircleCheckBig
                size={isMobile() ? "1rem" : "1.5rem"}
                color="white"
              />
              24/7 support
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Features;
