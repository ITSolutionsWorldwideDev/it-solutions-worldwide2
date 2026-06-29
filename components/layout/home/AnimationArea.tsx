import dynamic from "next/dynamic";

// ======================
// Dynamic Imports
// ======================

const ExpandingCards = dynamic(() => import("./ExpandingCards"), {
  loading: () => <div className="min-h-[450px]" />,
});

const LogosSlider = dynamic(() => import("./LogosSlider"), {
  loading: () => <div className="min-h-[220px]" />,
});

const HowWeWorkCards = dynamic(
  () => import("@/components/layout/home/HowWeWorkCards"),
  {
    loading: () => <div className="min-h-[400px]" />,
  }
);

const StatsCards = dynamic(
  () => import("@/components/layout/home/StatsCards"),
  {
    loading: () => <div className="min-h-[220px]" />,
  }
);

const IndustriesCards = dynamic(
  () => import("@/components/layout/home/IndustriesCards"),
  {
    loading: () => <div className="min-h-[500px]" />,
  }
);

export default function AnimationArea() {
  return (
    <section className="relative z-10 w-full">

      {/* ================= OUR SERVICES ================= */}

      <div className="container xl:max-w-[1200px] mx-auto text-center pt-12 md:pt-20 px-4">

        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-5">
          <span className="bg-[#175864] text-white px-4 py-1 rounded-md inline-block">
            OUR SERVICES
          </span>
        </h2>

        <ExpandingCards />

      </div>

      {/* ================= OUR CLIENTS ================= */}

      <section className="w-full pt-12 md:pt-20">

        <div className="container xl:max-w-[1200px] mx-auto px-4">

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-5">
            <span className="bg-[#175864] text-white px-4 py-1 rounded-md inline-block">
              Our Clients
            </span>
          </h2>

          <p className="text-center text-lg md:text-2xl lg:text-3xl font-medium text-[#175864] max-w-4xl mx-auto mb-10">
            Empowering Customers, Automating Success. Smart Solutions for
            Smarter Businesses.
          </p>

          <LogosSlider />

        </div>

      </section>

      {/* ================= HOW WE WORK ================= */}

      <section className="container xl:max-w-[1200px] mx-auto text-center py-12 md:py-20 px-4">

        <HowWeWorkCards />

      </section>

      {/* ================= STATS ================= */}

      <section
        className="w-full bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/assets/images/backgrounds/clients-section-radial-bg.webp')",
        }}
      >
        <div className="container xl:max-w-[1200px] mx-auto px-4 py-10 md:py-16">

          <StatsCards />

        </div>
      </section>

      {/* ================= INDUSTRIES ================= */}

      <section className="py-12 md:py-20">

        <IndustriesCards />

      </section>

    </section>
  );
}