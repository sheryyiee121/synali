import { useEffect, useState } from "react";

export const AnimatedBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Animated gradient orbs */}
      <div
        className="absolute w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"
        style={{
          transform: `translate(${mousePosition.x * 0.02}px, ${
            mousePosition.y * 0.02
          }px)`,
          top: "10%",
          left: "10%",
        }}
      />
      <div
        className="absolute w-80 h-80 bg-chart-1/10 rounded-full blur-3xl animate-pulse delay-1000"
        style={{
          transform: `translate(${mousePosition.x * -0.01}px, ${
            mousePosition.y * -0.01
          }px)`,
          top: "60%",
          right: "10%",
        }}
      />
      <div
        className="absolute w-64 h-64 bg-accent/20 rounded-full blur-2xl animate-pulse delay-500"
        style={{
          transform: `translate(${mousePosition.x * 0.015}px, ${
            mousePosition.y * 0.015
          }px)`,
          bottom: "20%",
          left: "50%",
        }}
      />

      {/* Floating particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-primary/30 rounded-full animate-pulse"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 2}s`,
          }}
        />
      ))}
    </div>
  );
};
