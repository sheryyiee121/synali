import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";


export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-lg">
      <div className="container mx-auto sm:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex text-start items-center pl-3 ">
            <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Synli AI
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#about"
              className="text-muted-foreground hover:text-indigo-500 transition-colors font-medium"
            >
              About
            </a>
            <a
              href="#features"
              className="text-muted-foreground hover:text-purple-500 transition-colors font-medium"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="text-muted-foreground hover:text-pink-500 transition-colors font-medium"
            >
              Pricing
            </a>
            {/* <a
              href="#testimonials"
              className="text-muted-foreground hover:text-blue-500 transition-colors font-medium"
            >
              Testimonials
            </a> */}
            {/* <ThemeToggle /> */}
            <Link href={"/auth/login"}>
              <Button
                variant="outline"
                size="sm"
                className="border-indigo-500/30 hover:bg-indigo-500/10"
              >
                Sign In
              </Button>
            </Link>
            <Link href={"/dashboard"}>
              <Button
                size="sm"
                className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600"
              >
                Get Started
              </Button>
            </Link>
          </div>

          <div className="md:hidden flex items-center space-x-2">
            {/* <ThemeToggle /> */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t bg-background/95 backdrop-blur">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#about"
                className="block px-3 py-2 text-muted-foreground hover:text-indigo-500"
              >
                About
              </a>
              <a
                href="#features"
                className="block px-3 py-2 text-muted-foreground hover:text-purple-500"
              >
                Features
              </a>
              <a
                href="#pricing"
                className="block px-3 py-2 text-muted-foreground hover:text-pink-500"
              >
                Pricing
              </a>
              <a
                href="#testimonials"
                className="block px-3 py-2 text-muted-foreground hover:text-blue-500"
              >
                Testimonials
              </a>
              <div className="pt-4 space-y-2">
                <Button
                  variant="outline"
                  className="w-full border-indigo-500/30"
                  size="sm"
                >
                  Sign In
                </Button>
                <Button
                  className="w-full bg-gradient-to-r from-indigo-500 to-purple-500"
                  size="sm"
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
