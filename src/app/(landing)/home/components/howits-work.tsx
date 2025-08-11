import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Facebook,
  Linkedin,
  Twitter,
  Youtube,
  Instagram,
  Github,
  Mails,
  Slack,
  MessageCircleCode,
  Figma,
  Dribbble,
  Component,
  TargetIcon,
} from "lucide-react";

const ProfileCard = () => {
  return (
    <div
      data-aos="fade-up"
      className="relative w-full max-w-[1600px] m-auto  flex flex-col lg:flex-row justify-center  py-8 px-4  overflow-hidden gap-4"
      style={{
        background:
          "linear-gradient(150deg, rgb(255,203,112) 30%, rgb(199,81,192) 70%",
      }}
    >
      <div
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        className="flex gap-4  justify-center lg:justify-start  basis-1/3 p-6  "
      >
        <div className="relative top-24 lg:top-34 flex flex-col gap-4 items-center ">
          <div className="bg-[#4267B2] p-4 lg:p-6 rounded-3xl">
            <Facebook className="text-white" />
          </div>
          <div className="bg-[#4267B2] p-4 lg:p-6 rounded-3xl">
            <Linkedin className="text-white" />
          </div>
          <div className="bg-[#1DA1F2] p-4 lg:p-6 rounded-3xl">
            <Twitter className="text-white" />
          </div>
        </div>
        <div className="relative top-20 lg:top-28 flex flex-col gap-4 items-center ">
          <div className="bg-[#FF0000] p-4 lg:p-6 rounded-3xl">
            <Youtube className="text-white" />
          </div>
          <div className="bg-[#2b3137] p-4 lg:p-6  rounded-3xl">
            <Github className="text-white" />
          </div>
          <div className="bg-[#d93025] p-4 lg:p-6 rounded-3xl">
            <Mails className="text-white" />
          </div>
        </div>
        <div className="relative top-16 lg:top-24 flex flex-col gap-4 items-center ">
          <div className="bg-[#E1306C] p-4 lg:p-6 rounded-3xl">
            <Instagram className="text-white" />
          </div>
          <div className="bg-[#007ACC] p-4 lg:p-6 rounded-3xl">
            <MessageCircleCode className="text-white" />
          </div>
          <div className="bg-[#611f69] p-4 lg:p-6 rounded-3xl">
            <Slack className="text-white" />
          </div>
        </div>
        <div className="relative top-6 lg:top-16 flex flex-col gap-4 items-center ">
          <div className="bg-[#F24E1E] p-4 lg:p-6 rounded-3xl">
            <Figma className="text-white" />
          </div>
          <div className="bg-[#FF7262] p-4 lg:p-6 rounded-3xl">
            <Component className="text-white" />
          </div>
          <div className="bg-[#EA4C89] p-4 lg:p-6 rounded-3xl">
            <Dribbble className="text-white" />
          </div>
          <div className="bg-[#CC0000] p-4 lg:p-6 rounded-3xl">
            <TargetIcon className="text-white" />
          </div>
        </div>
      </div>

      {/* Profile Card */}
      <Card className="relative z-10   shadow-lg basis-2/3">
        <CardHeader>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-pink-200 rounded-full" />
            <CardTitle className="text-lg font-bold">Acme Inc.</CardTitle>
          </div>
          <p className="text-sm text-gray-600">
            Senior Project Manager (m/f/d)
          </p>
          <p className="text-sm text-gray-600">Berlin, Germany</p>
        </CardHeader>
        <CardContent>
          <div className="space-y-0"></div>
        </CardContent>
        <CardFooter>
          <Button className="w-full bg-blue-600 text-white hover:bg-blue-700">
            Apply
          </Button>
        </CardFooter>
      </Card>

      <div
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        className="flex gap-4  justify-center lg:justify-start  basis-1/3  flex-row-reverse p-6  "
      >
        <div className="relative top-24 lg:top-34 flex flex-col gap-4 items-center ">
          <div className="bg-[#4267B2] p-4 lg:p-6 rounded-3xl">
            <Facebook className="text-white" />
          </div>
          <div className="bg-[#4267B2] p-4 lg:p-6 rounded-3xl">
            <Linkedin className="text-white" />
          </div>
          <div className="bg-[#1DA1F2] p-4 lg:p-6 rounded-3xl">
            <Twitter className="text-white" />
          </div>
        </div>
        <div className="relative top-20 lg:top-28 flex flex-col gap-4 items-center ">
          <div className="bg-[#FF0000] p-4 lg:p-6 rounded-3xl">
            <Youtube className="text-white" />
          </div>
          <div className="bg-[#2b3137] p-4 lg:p-6  rounded-3xl">
            <Github className="text-white" />
          </div>
          <div className="bg-[#d93025] p-4 lg:p-6 rounded-3xl">
            <Mails className="text-white" />
          </div>
        </div>
        <div className="relative top-16 lg:top-24 flex flex-col gap-4 items-center ">
          <div className="bg-[#E1306C] p-4 lg:p-6 rounded-3xl">
            <Instagram className="text-white" />
          </div>
          <div className="bg-[#007ACC] p-4 lg:p-6 rounded-3xl">
            <MessageCircleCode className="text-white" />
          </div>
          <div className="bg-[#611f69] p-4 lg:p-6 rounded-3xl">
            <Slack className="text-white" />
          </div>
        </div>
        <div className="relative top-6 lg:top-16 flex flex-col gap-4 items-center ">
          <div className="bg-[#F24E1E] p-4 lg:p-6 rounded-3xl">
            <Figma className="text-white" />
          </div>
          <div className="bg-[#FF7262] p-4 lg:p-6 rounded-3xl">
            <Component className="text-white" />
          </div>
          <div className="bg-[#EA4C89] p-4 lg:p-6 rounded-3xl">
            <Dribbble className="text-white" />
          </div>
          <div className="bg-[#CC0000] p-4 lg:p-6 rounded-3xl">
            <TargetIcon className="text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
