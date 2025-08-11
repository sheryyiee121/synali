import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import Link from "next/link";
import React from "react";

interface CheckoutSectionProps {
  configuration: {
    quantity: number;
    totalPrice: number;
  };
}

export const CheckoutSection: React.FC<CheckoutSectionProps> = ({
  configuration,
}) => {
  return (
    <Card className="border-border bg-accent">
      <CardContent className="p-8 text-center space-y-4">
        <div className="bg-green-100 p-4 rounded-full w-fit mx-auto">
          <CheckCircle className="h-8 w-8 text-green-600" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-green-900 dark:text-green-500 ">
            Order Successful!
          </h2>
          <p className="text-green-700 dark:text-green-400 mt-2">
            Navigate to activation section to create servers and allocate Bots{" "}
          </p>
        </div>
        <div className="bg-sidebar rounded-lg p-4 text-left">
          <h3 className="font-semibold mb-2">Order Details:</h3>
          <div className="space-y-1 text-sm ">
            <p>Order ID: #CB-{Date.now().toString().slice(-6)}</p>
            <p>
              Quantity: {configuration.quantity} bot
              {configuration.quantity > 1 ? "s" : ""}
            </p>
            <p>Total: ${configuration.totalPrice}</p>
            <p>Deployment: In Progress</p>
          </div>
        </div>
        <Link href={"/dashboard/servers"}>
          <Button className="bot-studio-gradient w-full">
            Access activation section
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};
