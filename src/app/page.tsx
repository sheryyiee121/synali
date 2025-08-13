"use client";


import { AboutSection } from "./(landing)/blogs/components/about-section";
import { AnimatedBackground } from "./(landing)/blogs/components/animated-background";
import { CreativeStats } from "./(landing)/blogs/components/creative-stats";
import { CTASection } from "./(landing)/blogs/components/cta-section";
import { FeaturesSection } from "./(landing)/blogs/components/features-section";
import { Footer } from "./(landing)/blogs/components/footer";
import { HeroSection } from "./(landing)/blogs/components/hero-section";
import { IntegrationsSection } from "./(landing)/blogs/components/integrations-section";
import { Navigation } from "./(landing)/blogs/components/navigation";

import { TechnologySection } from "./(landing)/blogs/components/technology-section";
import { FloatingChatButton } from "./components/floating-chat-button";

export default function Landing() {

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
        {/* <PricingSection /> */}
        <CTASection />
      </main>
      <Footer />
      <FloatingChatButton />
    </div>
  );
}
