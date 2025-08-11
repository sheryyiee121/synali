"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const DesktopNavbar = () => {
  const location = usePathname();

  const navItems = [
    { name: "Home", id: "home", type: "scroll", path: "/" },
    { name: "About Us", path: "/aboutus", type: "link" },
    { name: "Features", id: "features", type: "scroll", path: "/" },
    { name: "Pricing", path: "/pricing", type: "link" },
  ];

  return (
    <nav
      className="hidden sm:block bg-white text-black min-h-[128px]"
      id="home"
    >
      <div className="flex justify-between items-center p-8 max-w-7xl mx-auto">
        {/* Logo Section */}
        <div className="flex items-center space-x-6">
          <Image
            className="w-16 h-16"
            height={64}
            width={64}
            src={"/logo.png"} // Update to Synli AI logo
            alt="Synli AI Logo"
          />
          <div className="text-2xl font-bold">Synli AI</div>
        </div>

        {/* Navigation Items */}
        <div className="flex items-center gap-8">
          {navItems.map((item, index) => {
            const isOnHomepage = location === "/";
            if (item.type === "link" || !isOnHomepage) {
              return (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`relative text-black hover:text-purple-600 transition-colors duration-300 animate-slideIn group delay-${index * 100
                    } text-lg font-medium`}
                >
                  {item.name}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full group-hover:opacity-100 opacity-0"></span>
                </Link>
              );
            } else {
              return (
                <button
                  key={item.name}
                  onClick={() => {
                    // scrollToSection(item.id);
                  }}
                  className={`relative text-black hover:text-purple-600 transition-colors duration-300 animate-slideIn group delay-${index * 100
                    } text-lg font-medium`}
                >
                  {item.name}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full group-hover:opacity-100 opacity-0"></span>
                </button>
              );
            }
          })}
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-4">
          <Link
            href="/auth/login"
            className="px-6 py-2 text-black hover:text-purple-600 transition-colors duration-300 text-lg font-medium"
          >
            Sign in
          </Link>
          <Link
            href="/dashboard"
            className="px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors duration-300 text-lg font-medium shadow-md hover:shadow-lg"
          >
            Get started
          </Link>
        </div>
      </div>
    </nav>
  );
};

// Mobile Navbar Component
const MobileNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = usePathname();

  const navItems = [
    { name: "Home", id: "home", type: "scroll", path: "/" },
    { name: "About Us", path: "/aboutus", type: "link" },
    { name: "Features", id: "features", type: "scroll", path: "/" },
    { name: "Pricing", path: "/pricing", type: "link" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sm:hidden bg-white text-black relative" id="home">
      <div className="flex justify-between items-center p-4 border-b border-gray-100">
        <div className="flex items-center space-x-3">
          <Image
            className="w-10 h-10"
            height={40}
            width={40}
            src={"/wisechirp.png"}
            alt="WiseChirp Logo"
          />
          <div className="text-xl font-bold">WiseChirp</div>
        </div>

        {/* Hamburger Menu Button */}
        <button
          className="text-black focus:outline-none p-2"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-100 z-50">
          <div className="flex flex-col py-4">
            {navItems.map((item) => {
              const isOnHomepage = location === "/";
              if (item.type === "link" || !isOnHomepage) {
                return (
                  <Link
                    key={item.name}
                    href={item.path}
                    className="px-6 py-3 text-black hover:text-purple-600 hover:bg-gray-50 transition-colors duration-200 text-base font-medium border-b border-gray-50 last:border-b-0"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                );
              } else {
                return (
                  <button
                    key={item.name}
                    onClick={() => {
                      setIsMenuOpen(false);
                    }}
                    className="px-6 py-3 text-left text-black hover:text-purple-600 hover:bg-gray-50 transition-colors duration-200 text-base font-medium border-b border-gray-50 last:border-b-0"
                  >
                    {item.name}
                  </button>
                );
              }
            })}

            {/* Auth Buttons */}
            <div className="flex flex-col gap-3 px-6 py-4 border-t border-gray-100 mt-2">
              <Link
                href="/auth/login"
                className="px-4 py-2 text-center text-black hover:text-purple-600 transition-colors duration-200 text-base font-medium border border-gray-300 rounded-md hover:border-purple-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign in
              </Link>
              <Link
                href="/dashboard"
                className="px-4 py-2 text-center bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors duration-200 text-base font-medium shadow-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Get started
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

// Main Navbar Component that renders both
const Navbar = () => {
  return (
    <>
      <DesktopNavbar />
      <MobileNavbar />
    </>
  );
};

export default Navbar;
