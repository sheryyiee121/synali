import React from "react";
import { Button } from "@/components/ui/button";

import Image from "next/image";

const About: React.FC = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="3000"
      className="flex flex-col lg:flex-row w-full max-w-[1600px] m-auto items-center justify-center gap-20 relative py-10 px-4"
    >
      <div data-aos="fade-up" className=" flex flex-col md:flex-row mx-20 ">
        <div className="absolute flex w-full h-full  rounded-full bg-gradient-to-b from-blue-100/100 to-blue-400/0 right-0 md:right-0  " />
        <div className="hidden md:block  absolute  w-6 h-6 bg-blue-500 rounded-full   lg:top-110  lg:right-30" />
        <div className="hidden md:block    absolute w-6 h-6 bg-pink-500 rounded-full md:top-110 md:left-40 lg:top-0 lg:left-10" />
        <div className="hidden md:block   absolute  w-4 h-4 bg-green-500 rounded-full md:top-30 md:left-110" />
        <div className=" hidden md:block  absolute  w-4 h-4 bg-orange-500 rounded-full md:top-90 md:right-90" />

        <div className="transform rotate-360 ">
          <div className=" relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] md:right-20 lg:right-10  rounded-lg ">
            <Image
              layout="fill"
              quality={100}
              objectFit="contain"
              src="/images/Dashboard.png"
              alt="Phone 1"
              className="rounded "
            />
            <div className=" absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] md:left-36  top-30 md:top-25  ">
              <Image
                layout="fill"
                quality={100}
                objectFit="contain"
                src="/images/DashboardInterface.png"
                alt="Phone 1"
                className="rounded"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Right Section - Text and Buttons */}
      <div
        data-aos="fade-up"
        data-aos-duration="3000"
        className=" flex flex-col items-start  lg:max-w-md"
      >
        <div className="flex items-center justify-center  text-xl mb-2">
          <span>About Scoutin</span>
        </div>
        <h1 className="text-xl  md:text-2xl font-bold  mb-4">
          HIRE FASTER AND EFFECTIVE USING AI
        </h1>
        <p className="mb-6">
          At Scoutin, we simplify hiring through smart AI-powered interviews.
          Our platform helps recruiters quickly screen candidates by uploading
          job-specific questionnaires and setting key filters — whether it is
          fluency, technical expertise, or both. Scoutin&apos;s intelligent
          engine handles the initial round of interviews, providing accurate
          shortlists that save time and improve hiring outcomes. With dedicated
          panels for recruiters and candidates, the process stays seamless and
          efficient. We&apos;re here to make AI hiring and recruitment faster,
          smarter, and more effective.
        </p>
        <Button className=" flex  text-center " variant="default" size="lg">
          About Us
        </Button>
      </div>
    </div>
  );
};

export default About;
