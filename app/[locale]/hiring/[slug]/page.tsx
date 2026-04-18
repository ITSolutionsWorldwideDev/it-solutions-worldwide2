import HiringCTA from "@/components/layout/hiring/HiringCTA";
import HiringHeader from "@/components/layout/hiring/HiringHeader";
import HiringHeroSection from "@/components/layout/hiring/HiringHeroSection";
import HiringPricing from "@/components/layout/hiring/HiringPricing";
import React from "react";

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;

  console.log(slug);
  return (
    <div>
      <HiringHeader slug={slug} />
      <HiringHeroSection slug={slug} />
      <HiringPricing slug={slug} />
      <HiringCTA slug={slug} />
    </div>
  );
};

export default page;
