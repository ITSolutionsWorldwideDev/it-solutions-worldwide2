import { getHowWeWorkData } from "@/lib/commonData";
import { DottedLine } from "@/components/layout/home/animation-helpers";
import Image from "next/image";
import initServerI18n from "@/utils/serverTranslation";

export default async function HowWeWorkCards({ locale }: { locale: string }) {
  const i18nInstance = await initServerI18n(locale);
  const t = i18nInstance.getFixedT(locale, "common");
  const howWeWork = getHowWeWorkData(t);

  return (
    <div className="flex flex-col items-center space-y-8 md:space-y-0 md:flex-row md:items-start">
      <section className="relative flex flex-col items-center md:flex-row md:justify-center lg:-space-x-16 md:-space-x-28 px-4 pt-4">
        <div
          className="w-[280px] lg:w-[345px] aspect-square flex items-center justify-center font-bold text-white rounded-full shadow-lg"
          style={{ background: "#194A59" }}
        >
          <h2 className="w-[58%] text-center text-[clamp(1rem,4vw,2.5rem)]">
            {t("howWeWork.heading")}
          </h2>
        </div>
        <div className="w-[320px] md:w-[470px] lg:w-[569px] aspect-square flex items-center justify-center font-normal rounded-full bg-[#29A1B626]">
          <p className="w-[45%] text-center text-[clamp(0.75rem,1.5vw,1.2rem)] leading-tight">
            {t("howWeWork.paragraph1")}
            <br />
            <br />
            {t("howWeWork.paragraph2")}
          </p>
        </div>
        <div className="flex flex-col items-center md:items-start w-full md:w-auto">
          {howWeWork.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row process-list-item text-2xl font-bold items-center ${item.styles.largeScreens}`}
            >
              <Image
                src={item.image.src}
                alt={item.image.alt}
                className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain"
                loading="lazy"
                quality={20}
                fetchPriority="low"
                width={80}
                height={80}
              />
              <DottedLine />
              <span className="ml-2 text-[clamp(1rem,2vw,1.5rem)] text-center md:text-left leading-tight">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}