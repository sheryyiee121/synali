import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Users, TrendingUp, BarChart3, Target, Search, Shield } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Influencer Discovery",
    description:
      "AI-powered platform to find the perfect influencers for your brand with advanced filtering and matching algorithms.",
  },
  {
    icon: TrendingUp,
    title: "ROI Prediction",
    description:
      "Predict campaign performance and ROI using machine learning models trained on Norwegian market data.",
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    description:
      "Comprehensive dashboards with real-time campaign insights and influencer performance metrics.",
  },
  {
    icon: Target,
    title: "Campaign Automation",
    description:
      "Automate influencer outreach, content scheduling, and performance tracking for maximum efficiency.",
  },
  {
    icon: Search,
    title: "Fraud Detection",
    description:
      "Advanced AI algorithms to detect fake followers and engagement fraud, ensuring authentic partnerships.",
  },
  {
    icon: Shield,
    title: "Localized for Norway",
    description:
      "AI models trained specifically for Norwegian market trends, language, and cultural nuances.",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Powerful Features for
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Influencer Marketing
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to revolutionize your influencer marketing with
            AI-powered automation and insights
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-none shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-indigo-500/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-indigo-600" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
