import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Freemium",
    price: "Free",
    period: "",
    description: "Basic access to get started",
    features: [
      "Basic influencer discovery",
      "Limited analytics",
      "Email support",
    ],
  },
  {
    name: "Pay-Per-Use",
    price: "From 1,500 NOK",
    period: "/campaign",
    description: "Flexible for occasional users",
    popular: true,
    features: [
      "Micro Campaigns: 1,500-3,500 NOK",
      "Standard: 4,000-8,000 NOK",
      "Premium: 10,000+ NOK",
      "Influencer discovery",
      "Performance tracking",
    ],
  },
  {
    name: "Basic Subscription",
    price: "999 NOK",
    period: "/month",
    description: "For regular users",
    features: [
      "Limited influencer searches",
      "Campaign tracking",
      "Basic AI analytics",
    ],
  },
  {
    name: "Pro Subscription",
    price: "2,499 NOK",
    period: "/month",
    description: "Advanced features",
    features: [
      "Advanced AI analytics",
      "ROI predictions",
      "Influencer vetting",
      "Priority support",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large agencies",
    features: [
      "Custom pricing",
      "Full AI suite",
      "Dedicated support",
      "Consulting services",
    ],
  },
];
export const PricingSection = () => {
  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Flexible Pricing for Every Business
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the plan that fits your influencer marketing needs. Start free and scale up.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative border-2 transition-all duration-300 hover:shadow-xl ${plan.popular
                ? "border-primary shadow-lg scale-105"
                : "border-border hover:border-primary/50"
                }`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary">
                  <Sparkles className="w-3 h-3 mr-1" />
                  Most Popular
                </Badge>
              )}
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <CardDescription className="text-base">
                  {plan.description}
                </CardDescription>
                <div className="mt-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className="w-full"
                  variant={plan.popular ? "default" : "outline"}
                  size="lg"
                >
                  {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
