import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const [theme, setTheme] = useState<"dark" | "light">("light");

  useEffect(() => {
    const savedTheme =
      (localStorage.getItem("theme") as "dark" | "light") || "light";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="relative overflow-hidden bg-gradient-to-r from-purple-500/10 to-pink-500/10 hover:from-purple-500/20 hover:to-pink-500/20 border border-purple-500/20"
    >
      <Sun
        className={`h-4 w-4 absolute transition-all duration-300 ${
          theme === "light" ? "rotate-0 scale-100" : "rotate-90 scale-0"
        } text-yellow-500`}
      />
      <Moon
        className={`h-4 w-4 absolute transition-all duration-300 ${
          theme === "dark" ? "rotate-0 scale-100" : "-rotate-90 scale-0"
        } text-blue-400`}
      />
    </Button>
  );
};
