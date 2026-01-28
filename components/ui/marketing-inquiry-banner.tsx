// components/ui/marketing-inquiry-banner.tsx

type MarketingInquiryBannerProps = {
  title: string;
  description: string;
  text?: string;
  textColor?: string;
  bgColor?: string;
};

export default function MarketingInquiryBanner({
  title,
  description,
  text,
  textColor,
  bgColor,
}: MarketingInquiryBannerProps) {
  return (
    <section className="max-w-6xl mx-auto text-center flex flex-col md:flex-row items-center rounded-xl overflow-hidden shadow-lg my-8 bg-linear-to-t from-[#1f6f69] to-[#278083] py-20"
    >{/* style={{ backgroundColor: bgColor }} */}
      <div className="w-full md:w-full p-6" style={{ color: textColor }}>
        <h2 className="text-5xl md:text-3xl font-bold">{title}</h2>
        <p className="mt-2 text-sm md:text-base mx-auto max-w-2xl">{description}</p>

        {text && <h3 className="text-lg md:text-lg font-bold mt-3">{text}</h3>}
      </div>
    </section>
  );
}
