import { WifiOff } from "lucide-react";
import React from "react";
import { getStatusColor, getStatusIcon } from "../utils/bot-utils";
import { IPhone } from "@/src/models/phone-model";

interface BotManagementDisabledCardProps {
  phone: IPhone;
}

export const BotManagementDisabledCard: React.FC<
  BotManagementDisabledCardProps
> = ({ phone }) => {
  return (
    <div className="bg-card border border-border rounded-xl p-5 hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gray-100 dark:bg-gray-900/20 rounded-lg">
            {getStatusIcon(phone.status)}
          </div>
        </div>
        <div className="flex items-center gap-1">
          <div
            className={`w-2 h-2 rounded-full ${getStatusColor(phone.status)}`}
          ></div>
          <span className="text-xs font-medium text-gray-500 uppercase">
            {phone.status}
          </span>
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Protocol</span>
        </div>
      </div>
      <div className="mt-4 pt-3 border-t border-border">
        <div className="flex items-center justify-center gap-2 text-muted-foreground">
          <WifiOff className="w-4 h-4" />
          <span className="text-xs">Extension offline</span>
        </div>
      </div>
    </div>
  );
};
