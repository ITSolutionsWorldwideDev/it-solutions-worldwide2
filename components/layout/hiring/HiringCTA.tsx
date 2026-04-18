import { CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

type Props = {
  slug: string;
};
export default function HiringCTA({service}:any) {

  // const service='virtual assistant'
  return (
    <section className="relative w-full min-h-[420px] flex items-center justify-center overflow-hidden bg-linear-to-br from-[#156F76F2] to-[#194B5AF2]">
      {/* Background grid overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px) 
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Subtle radial glow in center */}
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 py-16 max-w-3xl mx-auto gap-6">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
          Ready to hire your {service}?
        </h2>

        {/* Subtext */}
        <p className="text-white/80 text-lg max-w-xl">
          Let us help you find the perfect {service} for your business
          or personal needs.
        </p>

        <p className="text-white/70 text-base">
          Book a free consultation today and get started within 48 hours.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-2">
          <Link href={"https://wa.me/31107660786"}>
            <button className="flex items-center gap-2 bg-white text-teal-800 font-semibold px-7 py-3.5 rounded-md hover:bg-gray-100 transition-colors duration-200 cursor-pointer">
              Book Free Consultation
              <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </div>

        {/* Trust badges */}
        <div className="flex flex-col sm:flex-row items-center gap-5 mt-2 text-white/80 text-sm">
          <span className="flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4 text-white/70" />
            No commitment
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4 text-white/70" />
            Free consultation
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4 text-white/70" />
            Start in 48 hours
          </span>
        </div>
      </div>
    </section>
  );
}
