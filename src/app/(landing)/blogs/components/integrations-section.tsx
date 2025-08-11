import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Plug } from "lucide-react";

const integrations = [
  {
    name: "Instagram",
    category: "Social Media",
    color: "from-pink-500 to-purple-500",
    logo: "IG",
  },
  {
    name: "TikTok",
    category: "Video Platform",
    color: "from-black to-gray-700",
    logo: "TT",
  },
  {
    name: "YouTube",
    category: "Video Content",
    color: "from-red-500 to-red-600",
    logo: "YT",
  },
  {
    name: "Facebook",
    category: "Social Network",
    color: "from-blue-600 to-blue-700",
    logo: "FB",
  },
  {
    name: "LinkedIn",
    category: "Professional",
    color: "from-blue-500 to-blue-600",
    logo: "LI",
  },
  {
    name: "Twitter",
    category: "Micro-blogging",
    color: "from-blue-400 to-blue-500",
    logo: "TW",
  },
  {
    name: "Shopify",
    category: "E-commerce",
    color: "from-green-600 to-teal-600",
    logo: "SP",
  },
  {
    name: "Google Analytics",
    category: "Analytics",
    color: "from-blue-500 to-green-500",
    logo: "GA",
  },
];

export const IntegrationsSection = () => {
  return (
    <section
      id="integrations"
      className="py-20 bg-gradient-to-br from-indigo-50/50 via-purple-50/30 to-pink-50/50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge
            variant="secondary"
            className="mb-6 px-4 py-2 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border-indigo-500/20"
          >
            <Plug className="w-4 h-4 mr-2 text-indigo-500" />
            Seamless Integrations
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Connect with
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              {" "}
              Everything{" "}
            </span>
            You Use
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Integrate Synli AI with your favorite social media platforms and marketing tools. Our
            extensive library of integrations ensures seamless influencer campaign management.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {integrations.map((integration, index) => (
            <Card
              key={index}
              className="border-none shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 cursor-pointer bg-white/70 backdrop-blur"
            >
              <CardContent className="p-6 text-center">
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${integration.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg`}
                >
                  <span className="text-white font-bold text-lg">
                    {integration.logo}
                  </span>
                </div>
                <h3 className="font-semibold text-lg mb-1">
                  {integration.name}
                </h3>
                <p
                  className={`text-sm bg-gradient-to-r ${integration.color} bg-clip-text text-transparent font-medium`}
                >
                  {integration.category}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Integration Benefits */}
        <div className="bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl p-8 md:p-12 text-center border border-indigo-500/20">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Why Choose Our Integrations?
          </h3>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div>
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">5m</span>
              </div>
              <h4 className="font-semibold text-lg mb-2">5-Minute Setup</h4>
              <p className="text-muted-foreground">
                Quick and easy integration with pre-built social media connectors
              </p>
            </div>
            <div>
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">∞</span>
              </div>
              <h4 className="font-semibold text-lg mb-2">Unlimited Sync</h4>
              <p className="text-muted-foreground">
                Real-time data synchronization across all social platforms
              </p>
            </div>
            <div>
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">🛡️</span>
              </div>
              <h4 className="font-semibold text-lg mb-2">Secure & Reliable</h4>
              <p className="text-muted-foreground">
                Enterprise-grade security for all social media integrations
              </p>
            </div>
          </div>
          {/* <Button
            size="lg"
            className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600"
          >
            View All Integrations
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button> */}
        </div>
      </div>
    </section>
  );
};
