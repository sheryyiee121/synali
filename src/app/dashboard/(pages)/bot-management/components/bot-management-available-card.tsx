import { IPhone } from "@/src/models/phone-model";
import { Server } from "lucide-react";
import React from "react";
import { getStatusColor, getStatusIcon } from "../utils/bot-utils";

interface BotManagementDisabledCardProps {
  phone: IPhone;
}

export const BotManagementAvailableCard: React.FC<
  BotManagementDisabledCardProps
> = ({ phone }) => {
  return (
    <div
      key={phone.server_id}
      className="bg-card border border-border rounded-xl p-6 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-xl"></div>
      <div className="absolute inset-[1px] bg-card rounded-xl"></div>
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-green-100 dark:bg-green-900/20 rounded-lg">
              {getStatusIcon(phone.status)}
            </div>
          </div>
          <div className="flex items-center gap-1">
            <div
              className={`w-2 h-2 rounded-full ${getStatusColor(
                phone.status
              )} animate-pulse`}
            ></div>
            <span className="text-xs font-medium text-green-600 dark:text-green-400 uppercase">
              {phone.status}
            </span>
          </div>
        </div>
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Server className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-card-foreground">
              {phone.server_url}
            </span>
          </div>
        </div>
        <div className="mt-4 pt-3 border-t border-border"></div>
      </div>
    </div>
  );
};
