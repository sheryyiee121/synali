import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Bot, Clock, DollarSign, Shield } from "lucide-react";
import React from "react";

interface PricingSummaryProps {
  configuration: {
    quantity: number;
    totalPrice: number;
  };
  className?: string;
}

export const PricingSummary: React.FC<PricingSummaryProps> = ({
  configuration,
  className = "",
}) => {
  const basePrice = 40;

  const features = [
    { icon: Bot, text: "AI-powered calling bot", included: true },

    { icon: Shield, text: "24/7 monitoring", included: true },
    { icon: Clock, text: "Unlimited call duration", included: true },
  ];

  return (
    <div className={` space-y-6 ${className}`}>
      {/* Pricing Card */}
      <Card className=" border-border shadow-lg">
        <CardHeader className="bot-studio-gradient">
          <CardTitle className="flex items-center space-x-2 ">
            <DollarSign className="h-5 w-5" />
            <span>Order Summary</span>
          </CardTitle>
          <CardDescription>
            Review your bot configuration and pricing
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6 space-y-4">
          {/* Quantity and Base Price */}
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium ">Calling Bot</p>
              <p className="text-sm ">Quantity: {configuration.quantity}</p>
            </div>
            <div className="text-right">
              <p className="font-medium ">
                ${basePrice} × {configuration.quantity}
              </p>
              <p className="text-sm ">per bot</p>
            </div>
          </div>

          <Separator />

          {/* Features Included */}
          <div>
            <p className="font-medium  mb-3">What&apos;s Included:</p>
            <div className="space-y-2">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="flex items-center space-x-4 ">
                    <div
                      className={`p-1 rounded ${
                        feature.included && "bg-green-100"
                      }`}
                    >
                      <IconComponent
                        className={`h-4 w-4 
                            ${feature.included && "text-green-800"}`}
                      />
                    </div>
                    <span className={`text-sm `}>{feature.text}</span>
                    {feature.included && (
                      <Badge
                        variant="outline"
                        className="text-sm bg-green-50 text-green-700 border-green-200"
                      >
                        ✓
                      </Badge>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <Separator />

          {/* Configuration Summary */}
          <div className="space-y-3">
            <p className="font-medium ">Configuration:</p>
            <div className="bg-accent rounded-lg p-3 space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>Bot Quantity:</span>
                <span className="font-medium">
                  {configuration.quantity} bot
                  {configuration.quantity > 1 ? "s" : ""}
                </span>
              </div>
            </div>
          </div>

          <Separator />

          {/* Total */}
          <div className="bg-accent rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold ">Total Amount</p>
                <p className="text-sm ">One-time purchase</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-purple-600">
                  ${configuration.totalPrice}
                </p>
                <p className="text-sm ">USD</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
