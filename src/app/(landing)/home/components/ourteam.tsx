"use client";
import { useState, useEffect, KeyboardEvent } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

interface OurTeam {
  id: number;
  comment: string;
  avatar: string;
  role: string;
}

const ourteam: OurTeam[] = [
  {
    id: 1,
    comment:
      "Our Lead Front-End Developer has 4 years of vibrant experience crafting responsive, high-performance user interfaces.With a passion for modern design and clean code, they bring creativity and precision to every project.",
    avatar: "/sarmad.jpeg",
    role: "Sarmad Khalid ~ Director Wisetech",
  },
  {
    id: 2,
    comment:
      "Our Junior Front-End Developer has created many amazing, visually engaging designs with a fresh and creative perspective.Eager to innovate and grow, they consistently bring energy and modern aesthetics to the team.",
    avatar: "/fahad.jpeg",
    role: "Fahad Azhar ~ FrontEnd Developer",
  },
  {
    id: 3,
    comment:
      "Our Python AI Developer specializes in building intelligent, data-driven solutions using cutting-edge AI technologies.With a deep understanding of machine learning and automation, they turn complex challenges into smart applications.",
    avatar: "/danish.png",
    role: "Danish Ali ~ Python Developer",
  },
  {
    id: 4,
    comment:
      "Our Laravel Backend Developer crafts robust, scalable server-side solutions tailored for performance and security.With expertise in APIs, databases, and clean architecture, they power seamless functionality behind the scenes.",
    avatar: "/faran.jpg",
    role: "Faran Naeem ~ BackEnd Developer",
  },
  {
    id: 5,
    comment:
      "Our Python ML Developer brings smart intelligence to Scoutin through cutting-edge machine learning models.sAlongside development, they also lead our marketing and design efforts, making Scoutin both powerful and visually striking.",
    avatar: "sarah.jpg",
    role: "Sarah Zohain ~ Python Developer + Marketing Head",
  },
];

export default function OurTeam() {
  const [activeIndex, setActiveIndex] = useState(2);
  const [startIndex, setStartIndex] = useState(0);
  const cardsPerView = 5;

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => {
        const newIndex = (prev + 1) % ourteam.length;
        setActiveIndex(newIndex);
        return newIndex;
      });
    }, 5000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      setStartIndex((prev) => {
        const newIndex = prev - 1 < 0 ? ourteam.length - 1 : prev - 1;
        setActiveIndex(newIndex);
        return newIndex;
      });
    } else if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      setStartIndex((prev) => {
        const newIndex = (prev + 1) % ourteam.length;
        setActiveIndex(newIndex);
        return newIndex;
      });
    }
  };

  useEffect(() => {
    const handleKeyPress = (e: globalThis.KeyboardEvent) => {
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        setStartIndex((prev) => {
          const newIndex = prev - 1 < 0 ? ourteam.length - 1 : prev - 1;
          setActiveIndex(newIndex);
          return newIndex;
        });
      } else if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        setStartIndex((prev) => {
          const newIndex = (prev + 1) % ourteam.length;
          setActiveIndex(newIndex);
          return newIndex;
        });
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  const activeTeam = ourteam[activeIndex];

  // Calculate visible cards with wrapping
  const visibleCards = Array.from(
    { length: cardsPerView },
    (_, i) => ourteam[(startIndex + i) % ourteam.length]
  );

  return (
    <section
      data-aos="fade-up"
      className="w-full max-w-[1600px] m-auto  px-4 sm:px-6 lg:px-8 flex flex-col items-center"
    >
      <div className="text-center">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">Our Team</h2>
        <p className="text-sm sm:text-base mt-3">
          Meet the vibrant and experienced team of Scoutin.
        </p>
      </div>
      <Card className="w-full max-w-2xl mx-auto rounded-lg mt-7">
        <CardContent className="text-center flex flex-col gap-4">
          <blockquote className="text-sm sm:text-base lg:text-lg italic">
            {activeTeam.comment}
          </blockquote>
          <h3 className="text-[19px] font-semibold">{activeTeam.role}</h3>
        </CardContent>
      </Card>
      <div
        className="flex flex-row flex-wrap justify-center mt-8 sm:mt-10 max-w-[960px] overflow-x-auto scrollbar-hide"
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="region"
        aria-label="OurTeam carousel"
      >
        {visibleCards.map((team, index) => (
          <Card
            key={team.id}
            className={`w-20 h-20 flex items-center justify-center p-4 sm:p-4 rounded-full gap-4 cursor-pointer transition-all duration-300 min-w-[80px] mx-2 ${
              (startIndex + index) % ourteam.length === activeIndex
                ? "border-1 border-black scale-100 z-10"
                : "opacity-100"
            }`}
            onClick={() =>
              setActiveIndex((startIndex + index) % ourteam.length)
            }
          >
            <Avatar className="w-18 h-18">
              <AvatarImage src={team.avatar} className="object-cover" />
            </Avatar>
          </Card>
        ))}
      </div>
    </section>
  );
}
