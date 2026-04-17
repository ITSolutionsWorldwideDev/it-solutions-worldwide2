import HiringCTA from "@/components/layout/hiring/HiringCTA";
import HiringHeader from "@/components/layout/hiring/HiringHeader";
import HiringHeroSection from "@/components/layout/hiring/HiringHeroSection";
import HiringPricing from "@/components/layout/hiring/HiringPricing";
import React from "react";

const page = () => {
  return (
    <div>
      <HiringHeader />
      <HiringHeroSection />
      <HiringPricing />
      <HiringCTA />
    </div>
  );
};

export default page;
