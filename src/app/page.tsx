"use client";

import { useEffect } from "react";
import { AboutSection } from "./(landing)/blogs/components/about-section";
import { AnimatedBackground } from "./(landing)/blogs/components/animated-background";
import { CreativeStats } from "./(landing)/blogs/components/creative-stats";
import { CTASection } from "./(landing)/blogs/components/cta-section";
import { FeaturesSection } from "./(landing)/blogs/components/features-section";
import { Footer } from "./(landing)/blogs/components/footer";
import { HeroSection } from "./(landing)/blogs/components/hero-section";
import { IntegrationsSection } from "./(landing)/blogs/components/integrations-section";
import { Navigation } from "./(landing)/blogs/components/navigation";
import { PricingSection } from "./(landing)/blogs/components/pricing-section";
import { TechnologySection } from "./(landing)/blogs/components/technology-section";

export default function Landing() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const s1 = document.createElement("script");
      const s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = "https://embed.tawk.to/6501df21b1aaa13b7a76aaab/1ha7kv77c";
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");
      s0?.parentNode?.insertBefore(s1, s0);

      // Cleanup the script when component unmounts
      return () => {
        s1?.parentNode?.removeChild(s1);
      };
    }
  }, []);

  return (
    <div className="min-h-screen bg-background relative">
      <AnimatedBackground />
      <Navigation />
      <main className="relative">
        <div className="relative">
          <HeroSection />
          {/* <FloatingCards /> */}
        </div>
        <CreativeStats />
        <AboutSection />
        <FeaturesSection />
        <TechnologySection />

        <IntegrationsSection />
        {/* <TestimonialsSection /> */}
        <PricingSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
