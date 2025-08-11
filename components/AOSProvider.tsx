"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function AOSProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      duration: 3000, // Animation duration in milliseconds
      once: false, // Whether animation should happen only once
    });
  }, []);

  return <>{children}</>;
}
