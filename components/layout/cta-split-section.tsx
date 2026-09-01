import Image from "next/image";
import Link from "next/link";

type CtaSplitSectionProps = {
  eyebrow: string;
  heading: string;
  highlightWord?: string;
  subtext?: string;
  imageUrl: string;
  imageAlt: string;
  overlayText?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export default function CtaSplitSection({
  eyebrow,
  heading,
  highlightWord,
  subtext,
  imageUrl,
  imageAlt,
  overlayText,
  ctaLabel,
  ctaHref,
}: CtaSplitSectionProps) {
  const renderHeading = () => {
    if (!highlightWord || !heading.includes(highlightWord)) {
      return heading;
    }

    const parts = heading.split(highlightWord);

    return (
      <>
        {parts[0]}
        <span className="text-[#2B8A99]">{highlightWord}</span>
        {parts.slice(1).join(highlightWord)}
      </>
    );
  };

  return (
    <section className="w-full bg-white">
      <div className="mx-auto grid w-full max-w-[1180px] grid-cols-1 items-center gap-8 px-6 py-12 sm:px-8 sm:py-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:px-0 lg:py-16">
        <div className="flex flex-col justify-center">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-[#00A896] sm:text-[12px]">
            {eyebrow}
          </p>

          <h2 className="max-w-[580px] text-[30px] font-extrabold leading-[1.12] tracking-[-0.02em] text-black sm:text-[36px] lg:text-[38px]">
            {renderHeading()}
          </h2>

          {subtext && (
            <p className="mt-4 max-w-[540px] text-[13px] leading-[1.6] text-gray-600 sm:text-[14px]">
              {subtext}
            </p>
          )}

          {ctaLabel && ctaHref && (
            <Link
              href={ctaHref}
              className="mt-6 inline-flex w-fit items-center justify-center rounded-xl bg-[#00A896] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              {ctaLabel}
            </Link>
          )}
        </div>

        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[24px] shadow-sm">
          <Image
            src={imageUrl}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 480px, (min-width: 640px) 600px, 100vw"
          />

          {overlayText && (
            <div className="absolute inset-0 bg-black/35">
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-center text-[28px] font-extrabold leading-none tracking-[-0.02em] text-white sm:text-[32px] lg:text-[34px]">
                  {overlayText}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}