import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Award, Globe, Zap } from "lucide-react";

const stats = [
  // {
  //   icon: Users,
  //   value: "50K+",
  //   label: "Happy Customers",
  //   color: "from-blue-500 to-cyan-500",
  // },
  {
    icon: Award,
    value: "99.9%",
    label: "Uptime",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Globe,
    value: "40+",
    label: "Countries",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Zap,
    value: "1M+",
    label: "Calls Processed",
    color: "from-orange-500 to-red-500",
  },
];

// const team = [
//   {
//     name: "Alex Chen",
//     role: "AI Engineer",
//     avatar: "AC",
//     color: "from-purple-500 to-pink-500",
//   },
//   {
//     name: "Sarah Kim",
//     role: "Product Lead",
//     avatar: "SK",
//     color: "from-blue-500 to-cyan-500",
//   },
//   {
//     name: "Mike Rodriguez",
//     role: "CTO",
//     avatar: "MR",
//     color: "from-green-500 to-emerald-500",
//   },
//   {
//     name: "Emma Wilson",
//     role: "UX Designer",
//     avatar: "EW",
//     color: "from-orange-500 to-red-500",
//   },
// ];

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-purple-50/50 via-pink-50/30 to-blue-50/50 dark:from-purple-950/20 dark:via-pink-950/10 dark:to-blue-950/20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge
            variant="secondary"
            className="mb-6 px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-purple-500/20"
          >
            <Users className="w-4 h-4 mr-2 text-purple-500" />
            About Our Journey
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Powered by
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              {" "}
              Innovation{" "}
            </span>
            & Passion
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We&apos;re a team of AI enthusiasts, engineers, and visionaries
            dedicated to transforming the future of customer communications
            through cutting-edge technology.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="border-none shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 bg-white/50 dark:bg-gray-900/50 backdrop-blur"
            >
              <CardContent className="p-6 text-center">
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                >
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div
                  className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}
                >
                  {stat.value}
                </div>
                <p className="text-muted-foreground font-medium">
                  {stat.label}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Team Grid */}
        {/* <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Meet Our Team
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <Card
                key={index}
                className="border-none shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 bg-white/50 dark:bg-gray-900/50 backdrop-blur"
              >
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${member.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform text-white font-bold text-lg`}
                  >
                    {member.avatar}
                  </div>
                  <h4 className="font-semibold text-lg mb-1">{member.name}</h4>
                  <p
                    className={`text-sm bg-gradient-to-r ${member.color} bg-clip-text text-transparent font-medium`}
                  >
                    {member.role}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};
