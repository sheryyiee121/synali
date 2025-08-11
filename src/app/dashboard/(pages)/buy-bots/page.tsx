"use client";
import { ModeToggle } from "@/components/theme-switch";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { CreditCard, DollarSign, Mic, Settings } from "lucide-react";
import { useState } from "react";
import { topNav } from "../../components/layout/data/topnav-data";
import { Header } from "../../components/layout/header";
import { Main } from "../../components/layout/main";
import { TopNav } from "../../components/layout/top-nav";
import { BotAddWidget } from "./components/bot-add-widget";
import { CheckoutSection } from "../servers/components/checkout-section";
import { PricingSummary } from "./components/pricing-summary";
import { useOrderBot } from "../../hooks/purchase-bot-hooks";
import { toast } from "sonner";

interface IConfiguration {
  quantity: number;
  reciept_image: File | null;
  totalPrice: number;
}

const Index = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const { mutateAsync: order_bots } = useOrderBot();
  const [botConfiguration, setBotConfiguration] = useState<IConfiguration>({
    quantity: 1,
    reciept_image: null,
    totalPrice: 40,
  });

  const handlePurchase = async () => {
    setIsProcessing(true);

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 3000));

    setIsProcessing(false);
    setCurrentStep(3);

    const formData = new FormData();
    formData.append("number_of_bots", String(botConfiguration.quantity));
    if (botConfiguration.reciept_image) {
      formData.append("reciept_image", botConfiguration.reciept_image);
    }

    console.log("FormData : ", formData);

    try {
      const response = await order_bots(formData);

      console.log("response : ", response);
      toast.success("Bot purchased successfully");

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error?.data?.message || "Something went wrong");
    }
  };

  const steps = [
    {
      id: 1,
      title: "Configure Bot",
      icon: Settings,
      description: "Set up your bot script and requirements",
    },
    {
      id: 2,
      title: "Upload Audio",
      icon: Mic,
      description: "Add custom audio files for your bot",
    },
    {
      id: 3,
      title: "Review & Purchase",
      icon: DollarSign,
      description: "Review configuration and complete purchase",
    },
  ];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleConfigurationChange = (config: any) => {
    setBotConfiguration((prev) => ({
      ...prev,
      ...config,
      totalPrice: config.quantity * 40,
    }));
  };

  return (
    <>
      <Header>
        <TopNav links={topNav} />
        <div className="ml-auto flex items-center space-x-4">
          <Button variant="ghost" size="sm">
            Docs
          </Button>
          <Button variant="ghost" size="sm">
            Referrals
          </Button>
          <ModeToggle />
        </div>
      </Header>

      <Main>
        <div className="mb-6">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Bot Studio
          </h1>
          <p className="text-muted-foreground mt-2">AI Call Center Solutions</p>
        </div>

        <div className="mx-auto py-8 px-4">
          <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-8 ">
            <div className="lg:col-span-2">
              <Card className="animate-slide-up shadow-xl border-1 border-border  backdrop-blur-sm">
                <CardHeader className="bot-studio-gradient-soft">
                  <CardTitle className="text-2xl font-bold flex items-center space-x-2">
                    <span>Bot Configuration</span>
                  </CardTitle>
                  <CardDescription>
                    {steps[currentStep - 1]?.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <Tabs value={currentStep.toString()} className="w-full">
                    <TabsContent value="1" className="mt-6 space-y-6">
                      <BotAddWidget
                        configuration={botConfiguration}
                        onChange={handleConfigurationChange}
                      />
                      <Card className="border-border bg-accent">
                        <CardContent className="p-6">
                          <Button
                            onClick={handlePurchase}
                            disabled={isProcessing}
                            className="w-full h-12 text-lg font-semibold  hover:opacity-90 transition-opacity"
                          >
                            {isProcessing ? (
                              <div className="flex items-center space-x-2">
                                <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
                                <span>Processing Payment...</span>
                              </div>
                            ) : (
                              <div className="flex items-center space-x-2">
                                <CreditCard className="h-5 w-5" />
                                <span>
                                  Complete Purchase - $
                                  {botConfiguration.totalPrice}
                                </span>
                              </div>
                            )}
                          </Button>
                        </CardContent>
                      </Card>
                    </TabsContent>

                    <TabsContent value="3" className="mt-6 space-y-6">
                      <CheckoutSection configuration={botConfiguration} />
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>

            {/* Pricing Summary Sidebar */}
            <div className=" sticky top-10  lg:col-span-1">
              <div className=" top-24">
                <PricingSummary
                  configuration={botConfiguration}
                  className="animate-scale-in"
                />
              </div>
            </div>
          </div>
        </div>
      </Main>
    </>
  );
};

export default Index;
