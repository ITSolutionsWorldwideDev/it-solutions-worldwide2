import Link from "next/link";

export type PortfolioBreadcrumb = {
  label: string;
  href?: string;
};

export interface PortfolioHeroProps {
  locale?: string;
  eyebrow?: string;
  headingPrefix?: string;
  headingHighlight?: string;
  headingSuffix?: string;
  subtext?: string;
  breadcrumbs?: PortfolioBreadcrumb[];
  backgroundImage?: string;
}

export default function PortfolioHero({
  locale = "en",
  eyebrow = "OUR WORK · PORTFOLIO",
  headingPrefix = "Snippets From Projects",
  headingHighlight = "We Delivered",
  headingSuffix = "to Prominent Clients.",
  subtext = "From startups to established enterprises across Europe, we've delivered digital products, AI solutions, outsourcing services, and business automation that help companies scale with confidence.",
  breadcrumbs,
  backgroundImage = "/assets/images/career/c_bg.webp",
}: PortfolioHeroProps) {
  const resolvedBreadcrumbs: PortfolioBreadcrumb[] = breadcrumbs ?? [
    { label: "HOME", href: `/${locale}` },
    { label: "PORTFOLIO" },
  ];

  return (
    <section
      className="relative isolate overflow-hidden bg-[#050b0d] text-white"
      style={
        backgroundImage
          ? {
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }
          : undefined
      }
    >
      {/* Background overlay gradient for optimal contrast & text sharpness */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050b0d]/75 via-[#050b0d]/55 to-[#050b0d]/90 -z-10" />

      {/* Main Hero Content */}
      <div className="relative mx-auto flex max-w-5xl flex-col items-center px-4 pt-20 pb-16 text-center sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24">
        {/* Eyebrow / Tag */}
        {eyebrow && (
          <div className="mb-6 flex items-center justify-center gap-3 text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-[#00A896]">
            <span className="h-px w-8 sm:w-10 bg-[#00A896]" />
            <span>{eyebrow}</span>
            <span className="h-px w-8 sm:w-10 bg-[#00A896]" />
          </div>
        )}

        {/* Main Heading */}
        <h1 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-[54px] lg:leading-[1.18] max-w-4xl">
          {headingPrefix}{" "}
          <span className="text-[#00A896]">{headingHighlight}</span>{" "}
          {headingSuffix}
        </h1>

        {/* Subtext */}
        {subtext && (
          <p className="mt-6 max-w-3xl text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed font-normal">
            {subtext}
          </p>
        )}
      </div>

      {/* Bottom Breadcrumbs Bar */}
      {resolvedBreadcrumbs.length > 0 && (
        <div className="relative border-t border-white/10 bg-black/40 py-3.5 backdrop-blur-xs">
          <div className="mx-auto flex max-w-5xl items-center justify-center gap-2.5 px-4 text-xs font-semibold uppercase tracking-wider text-gray-300">
            {resolvedBreadcrumbs.map((crumb, index) => (
              <span key={index} className="flex items-center gap-2.5">
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    className="transition-colors hover:text-[#00A896]"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-[#00A896]">{crumb.label}</span>
                )}
                {index < resolvedBreadcrumbs.length - 1 && (
                  <span className="text-white/30">|</span>
                )}
              </span>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
