import { Phone, PhoneOff, Wifi, WifiOff } from "lucide-react";

export const getStatusIcon = (status: string) => {
  switch (status) {
    case "available":
      return <Wifi className="w-5 h-5 text-green-600 dark:text-green-400" />;
    case "disabled":
      return <WifiOff className="w-5 h-5 text-gray-600 dark:text-gray-400" />;
    case "busy":
      return <Phone className="w-5 h-5 text-red-600 dark:text-red-400" />;
    case "ringing":
      return <Phone className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />;
    case "in_call":
      return <Phone className="w-5 h-5 text-blue-600 dark:text-blue-400" />; // New in_call status
    default:
      return <PhoneOff className="w-5 h-5 text-gray-600 dark:text-gray-400" />;
  }
};

export const getStatusColor = (status: string): string => {
  const colors: Record<string, string> = {
    available: "bg-green-500",
    disabled: "bg-gray-500",
    busy: "bg-red-500",
    ringing: "bg-yellow-500",
  };
  return colors[status] || "bg-gray-500";
};
