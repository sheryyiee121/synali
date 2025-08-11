import React from "react";
import Blog from "../components/blog";
import Navbar from "@/src/app/components/layout/header";
import Footer from "@/src/app/components/layout/footer";
export default function Blogs() {
  return (
    <>
      <Navbar />
      <Blog />
      <Footer />
    </>
  );
}
