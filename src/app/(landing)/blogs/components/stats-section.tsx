import { TrendingUp, Users, Zap, Shield } from "lucide-react";

const stats = [
  {
    icon: TrendingUp,
    value: "300%",
    label: "Efficiency Increase",
    description: "Average improvement in call handling",
  },
  {
    icon: Users,
    value: "10k+",
    label: "Happy Customers",
    description: "Businesses trust our AI solutions",
  },
  {
    icon: Zap,
    value: "80%",
    label: "Cost Reduction",
    description: "Save on operational expenses",
  },
  {
    icon: Shield,
    value: "99.9%",
    label: "Uptime",
    description: "Reliable 24/7 service",
  },
];

export const StatsSection = () => {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4 group-hover:bg-primary/20 transition-colors">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-3xl md:text-4xl font-bold mb-2">
                {stat.value}
              </div>
              <div className="font-semibold text-foreground mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
