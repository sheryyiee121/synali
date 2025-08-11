import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Cpu, Database, Shield, Zap, Globe } from "lucide-react";

const technologies = [
  {
    icon: Brain,
    title: "Advanced AI Models",
    description:
      "GPT-4 powered conversational AI with natural language understanding",
    color: "from-purple-500 to-indigo-500",
    features: [
      "Natural Language Processing",
      "Context Awareness",
      "Multi-language Support",
    ],
  },
  {
    icon: Cpu,
    title: "Real-time Processing",
    description:
      "Lightning-fast response times with edge computing infrastructure",
    color: "from-blue-500 to-cyan-500",
    features: ["Sub-second Response", "Edge Computing", "Auto-scaling"],
  },
  {
    icon: Database,
    title: "Smart Analytics",
    description:
      "Deep insights and predictive analytics for better decision making",
    color: "from-green-500 to-emerald-500",
    features: [
      "Predictive Analytics",
      "Real-time Dashboards",
      "Custom Reports",
    ],
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "Enterprise security with end-to-end encryption and compliance",
    color: "from-red-500 to-orange-500",
    features: ["End-to-end Encryption", "SOC 2 Compliant", "GDPR Ready"],
  },
  {
    icon: Zap,
    title: "API Integration",
    description: "Seamless integration with your existing tools and workflows",
    color: "from-yellow-500 to-orange-500",
    features: ["REST APIs", "Webhooks", "SDK Libraries"],
  },
  {
    icon: Globe,
    title: "Global Infrastructure",
    description: "Worldwide deployment with 99.9% uptime guarantee",
    color: "from-pink-500 to-rose-500",
    features: ["Global CDN", "Multi-region", "99.9% Uptime"],
  },
];

export const TechnologySection = () => {
  return (
    <section
      id="technology"
      className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 dark:from-slate-950 dark:via-blue-950/20 dark:to-indigo-950/30"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge
            variant="secondary"
            className="mb-6 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border-blue-500/20"
          >
            <Cpu className="w-4 h-4 mr-2 text-blue-500" />
            Cutting-edge Technology
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Built with
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Next-Gen{" "}
            </span>
            Technology
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our platform leverages the latest advances in AI, cloud computing,
            and data analytics to deliver unparalleled performance and
            reliability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <Card
              key={index}
              className="border-none shadow-lg hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 bg-white/70 dark:bg-gray-900/70 backdrop-blur relative overflow-hidden"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-5 group-hover:opacity-10 transition-opacity`}
              />
              <CardHeader className="relative">
                <div
                  className={`w-14 h-14 bg-gradient-to-r ${tech.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}
                >
                  <tech.icon className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-xl font-bold">
                  {tech.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="relative">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {tech.description}
                </p>
                <div className="space-y-2">
                  {tech.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center text-sm"
                    >
                      <div
                        className={`w-2 h-2 bg-gradient-to-r ${tech.color} rounded-full mr-3`}
                      />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technology Stack Showcase */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-8">
            Powered by Industry Leaders
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {["OpenAI", "AWS", "Nvidia", "Kubernetes", "Docker"].map(
              (tech, index) => (
                <div
                  key={index}
                  className="px-6 py-3 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-lg font-semibold text-lg hover:scale-105 transition-transform"
                >
                  {tech}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
