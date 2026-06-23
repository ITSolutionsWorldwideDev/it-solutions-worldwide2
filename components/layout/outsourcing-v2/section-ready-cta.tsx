import React from "react";

interface SectionReadyCTAProps {
  heading?: string;
  subheading?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  trustPoints?: string[];
  role?: string;
}

export default function SectionReadyCTA({ 
  heading, 
  subheading, 
  primaryButtonText, 
  secondaryButtonText, 
  trustPoints,
  role = "Professional"
}: SectionReadyCTAProps) {
  const displayHeading = heading || `Ready to Hire a ${role} in Netherlands?`;
  const displaySubheading = subheading || `Scale your operations with dedicated ${role.toLowerCase()}s from IT Solutions Worldwide. Get pre-vetted, experienced professionals — GDPR-compliant, Dutch-market-aware, and ready to deliver from day one.`;
  const displayPrimary = primaryButtonText || "Book Free Consultation →";
  const displaySecondary = secondaryButtonText || `Get Matched With a ${role}`;
  const displayTrustPoints = trustPoints || [
    "No commitment",
    "Free consultation", 
    "Start in 48 hours"
  ];

  return (
    <section 
      style={{ background: 'linear-gradient(to right, #0C545A, #126870)' }}
      className="relative w-full py-20 px-6 font-sans text-white text-center clear-both block"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center relative z-10">
        
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-5 max-w-4xl leading-tight block">
          {displayHeading}
        </h2>

        <p className="text-[#E2F5F7] text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed mb-10 font-medium opacity-95 block">
          {displaySubheading}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-10">
          
          {/* Primary Action Button: White BG with Green Text */}
          <button 
            type="button" 
            style={{ color: '#0C545A' }}
            className="w-full sm:w-auto bg-white hover:bg-gray-100 font-bold px-7 py-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-md text-sm sm:text-base cursor-pointer"
          >
            {displayPrimary}
          </button>

          {/* Secondary Outline Button */}
          <button type="button" className="w-full sm:w-auto bg-transparent text-white border-2 border-white/80 hover:bg-white/10 font-bold px-7 py-4 rounded-xl transition-all duration-200 text-sm sm:text-base cursor-pointer">
            {displaySecondary}
          </button>

        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs sm:text-sm text-[#CCF2F6] font-medium opacity-90">
          {displayTrustPoints.map((point, index) => (
            <div key={index} className="flex items-center gap-1.5 whitespace-nowrap">
              <svg className="w-4 h-4 text-[#5CE1E6] shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              {point.replace('✓', '').trim()}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}