import { AlertTriangle } from "lucide-react";
// Remove import
// import { InteractiveCallDemo } from "./interactive-demo";

export const HeroSection = () => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Enhanced background gradient with vibrant colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/70 via-indigo-50/50 to-purple-50/70" />
      <div
        className="absolute inset-0 bg-gradient-to-tr from-emerald-50/40 via-transparent to-orange-50/40 animate-pulse"
        style={{ animationDuration: "4s" }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 animate-fade-in">
            Transform Your Business with
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
              {" "}
              AI Magic
            </span>
          </h1>

          <p
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            Easy, affordable and effective marketing solution designed for small business owners. Influencer.AI by Cogni Norway AS.
          </p>

          {/* Remove alert and demo */}
          {/* <div className="flex items-center justify-center gap-2 text-base text-red-700 dark:text-red-500 mt-4 px-4 py-2">
            <AlertTriangle className="w-4 h-4 flex-shrink-0" />
            <p>
              For optimal results, please use a headset and ensure you're
              in a quiet environment.
            </p>
          </div>

          <InteractiveCallDemo /> */}

          {/* Add new CTA */}
          <a
            href="/signup"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full text-lg"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};
