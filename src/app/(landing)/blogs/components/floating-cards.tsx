import { Card, CardContent } from "@/components/ui/card";
import { Bot, Zap, TrendingUp, Shield } from "lucide-react";

const floatingElements = [
  {
    icon: Bot,
    text: "AI Processing...",
    color: "text-primary",
    position: "top-20 left-10",
    delay: "0s",
  },
  {
    icon: Zap,
    text: "Real-time Analytics",
    color: "text-chart-1",
    position: "top-40 right-16",
    delay: "1s",
  },
  {
    icon: TrendingUp,
    text: "Efficiency +300%",
    color: "text-green-500",
    position: "bottom-32 left-20",
    delay: "2s",
  },
  {
    icon: Shield,
    text: "99.9% Uptime",
    color: "text-blue-500",
    position: "bottom-20 right-10",
    delay: "0.5s",
  },
];

export const FloatingCards = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {floatingElements.map((element, index) => (
        <Card
          key={index}
          className={`absolute ${element.position} opacity-20 hover:opacity-40 transition-all duration-1000 animate-bounce pointer-events-auto`}
          style={{
            animationDelay: element.delay,
            animationDuration: "3s",
          }}
        >
          <CardContent className="p-3 flex items-center space-x-2">
            <element.icon className={`w-4 h-4 ${element.color}`} />
            <span className="text-xs font-medium">{element.text}</span>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
