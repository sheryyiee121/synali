import React from "react";
import Navbar from "../../components/layout/header";
import Footer from "../../components/layout/footer";
import Image from "next/image";
import Link from "next/link";

export default function Blogs() {
  const blogs = [
    {
      img: "/images/Dashboard.png",
      title: "Dashboard",
      icon: "⭐",
      Rating: "3.5++",
      para: "Dahboar View",
    },
    {
      img: "/images/DashboardInterface.png",
      title: "Dashboard1",
      icon: "⭐",
      Rating: "3.5++",
      para: "Dahboar View",
    },
    {
      img: "/images/wh-img.png",
      title: "Dashboard",
      icon: "⭐",
      Rating: "3.5++",
      para: "Dahboar View",
    },
    {
      img: "/images/Dashboard.png",
      title: "Dashboard3",
      icon: "⭐",
      Rating: "3.5++",
      para: "Dahboar View",
    },
    {
      img: "/images/DashboardInterface.png",
      title: "Dashboard",
      icon: "⭐",
      Rating: "3.5++",
      para: "Dahboar View",
    },
    {
      img: "/images/wh-img.png",
      title: "Dashboard",
      icon: "⭐",
      Rating: "3.5++",
      para: "Dahboar View",
    },
    {
      img: "/images/DashboardInterface.png",
      title: "Dashboard",
      icon: "⭐",
      Rating: "3.5++",
      para: "Dahboar View",
    },
    {
      img: "/images/wh-img.png",
      title: "Dashboard",
      icon: "⭐",
      Rating: "3.5++",
      para: "Dahboar View",
    },
  ];
  return (
    <>
      <div className="overflow-x-hidden">
        <Navbar />
        <div className="grid  justify-items-center  max-w-[1600px] m-auto mt-40 sm:grid-cols-1  lg:grid-cols-4 gap-x-6  gap-y-20 lg:px-40">
          {blogs.map((item, index) => (
            <Link key={index} href={`/blogs/${item.title}`}>
              <div
                key={index}
                className="grid grid-cols-1   w-60   rounded-2xl  cursor-pointer px-4 gap-1 "
              >
                <div className=" relative w-60 h-60">
                  <Image
                    src={item.img}
                    alt="image.jpg"
                    layout="fill"
                    className="rounded-xl"
                  />
                </div>
                <div className="flex justify-between p-2">
                  <h3>{item.title}</h3>
                  <div className="flex gap-1">
                    <h3>{item.icon}</h3>
                    <h3>{item.Rating}</h3>
                  </div>
                </div>
                <p className="p-2">Scuotin Dashboard</p>
              </div>
            </Link>
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
}
