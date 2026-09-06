import React from "react";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesGrid from "@/components/sections/FeaturesGrid";
import ServicesPreview from "@/components/sections/ServicesPreview";
import StatsSection from "@/components/sections/StatsSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <div className="space-y-4">
      <HeroSection />
      <FeaturesGrid />
      <ServicesPreview />
      <StatsSection />
      <FAQSection />
      <CTASection />
    </div>
  );
}
