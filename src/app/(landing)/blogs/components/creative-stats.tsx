import { ArrowUp, DollarSign, Shield, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";

const stats = [
  {
    icon: TrendingUp,
    value: 300,
    suffix: "%",
    label: "Efficiency Boost",
    description: "Average improvement",
    color: "text-green-500",
  },
  // {
  //   icon: Users,
  //   value: 10000,
  //   suffix: "+",
  //   label: "Happy Customers",
  //   description: "Trust our AI",
  //   color: "text-blue-500",
  // },
  {
    icon: DollarSign,
    value: 80,
    suffix: "%",
    label: "Cost Reduction",
    description: "Operational savings",
    color: "text-primary",
  },
  {
    icon: Shield,
    value: 99.9,
    suffix: "%",
    label: "Uptime",
    description: "Reliable service",
    color: "text-chart-1",
  },
];

const AnimatedCounter = ({
  target,
  suffix,
  duration = 2000,
}: {
  target: number;
  suffix: string;
  duration?: number;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      setCount(Math.floor(progress * target));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [target, duration]);

  return (
    <span>
      {target === 99.9 ? count.toFixed(1) : count.toLocaleString()}
      {suffix}
    </span>
  );
};

export const CreativeStats = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-muted/30 via-background to-primary/5 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            The Numbers
            <span className="bg-gradient-to-r from-primary to-chart-1 bg-clip-text text-transparent">
              {" "}
              Speak for Themselves
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Real results from real businesses transforming their operations
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group cursor-pointer transform transition-all duration-500 hover:scale-110"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative">
                {/* Animated ring */}
                {/* <div className="absolute inset-0 rounded-full border-4 border-transparent group-hover:border-primary/20 transition-all duration-500 transform group-hover:rotate-180" /> */}

                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-background to-muted border-2 border-primary/20 mb-4 group-hover:shadow-lg transition-all duration-300 ${stat.color}`}
                >
                  <stat.icon className="w-8 h-8" />
                </div>
              </div>

              <div className="space-y-2">
                <div
                  className={`text-4xl md:text-5xl font-bold ${stat.color} group-hover:scale-110 transition-transform duration-300`}
                >
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {stat.label}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.description}
                </div>
              </div>

              {/* Hover effect indicator */}
              <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowUp className="w-4 h-4 mx-auto text-primary animate-bounce" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
