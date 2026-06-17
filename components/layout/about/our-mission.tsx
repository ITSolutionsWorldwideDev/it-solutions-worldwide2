// components/layout/about/our-mission.tsx
import Image from "next/image";
import initServerI18n from "@/utils/serverTranslation";

export default async function OurMission({ locale }: { locale: string }) {
  const i18nInstance = await initServerI18n(locale);
  const t = await i18nInstance.getFixedT(locale, "common");
  return (
    <div
      className="
    w-full 
    sm:bg-[rgb(230_237_237)]
    relative text-justify 
    md:bg-[url(/assets/images/aboutus/Group_9296.webp)] 
    md:bg-cover 
    md:bg-no-repeat 
    text-lg text-gray 
    mx-auto my-12 
    py-3 md:py-4 lg:py-12 
    px-4 md:px-4 lg:px-10"
    >
      <div className="w-full">
        <div className=" text-[#467a7e]-100 text-center">{t("aboutus.our_mission_main_heading")}</div>
        <div className="text-[70px] font-semibold text-center">{t("aboutus.our_mission_main_heading")}</div>
        <div className="w-full md:max-w-6xl m-auto">
          <div className=" flex flex-col md:flex-row md:gap-12 text-[22px]">
            <div className="w-full md:w-1/2">
              <div className="rounded-[19px] bg-white py-5 px-10 mb-5">
                <div className="flex sm:flex-col md:flex-row gap-4">
                  <Image
                    className=" w-[58px] h-[58px]"
                    width={58}
                    height={58}
                    sizes="100vw"
                    alt="Growth icon"
                    src="/assets/images/aboutus/fluent-arrow-growth-20-filled.svg"
                  />
                  <div className="">
                    <div className="font-semibold">{t("aboutus.our_mission_widget_heading1")}</div>
                    <div className="text-[15px] text-gray text-justify flex items-center">{t("aboutus.our_mission_widget_text1")}</div>
                  </div>
                </div>
              </div>

              <div className="rounded-[19px] bg-white py-5 px-10 mb-5">
                <div className="flex sm:flex-col md:flex-row gap-4">
                  <Image
                    className="w-[58px] h-[58px]"
                    width={58}
                    height={58}
                    sizes="100vw"
                    alt="Code icon"
                    src="/assets/images/aboutus/fluent-code-24-filled.svg"
                  />
                  <div className="">
                    <div className="font-semibold">{t("aboutus.our_mission_widget_heading2")}</div>
                    <div className=" left-0 text-[15px] text-gray text-justify flex items-center   md:w-[359px]">{t("aboutus.our_mission_widget_text2")}</div>
                  </div>
                </div>
              </div>

              <div className="rounded-[19px] bg-white py-5 px-10  mb-5">
                <div className="flex sm:flex-col md:flex-row gap-4">
                  <Image
                    className=" w-[58px] h-[58px]"
                    width={58}
                    height={58}
                    sizes="100vw"
                    alt="Performance icon"
                    src="/assets/images/aboutus/material-symbols-avg-pace.svg"
                  />
                  <div className="">
                    <div className="font-semibold">{t("aboutus.our_mission_widget_heading3")}</div>
                    <div className="text-[15px] text-gray text-justify flex items-center   md:w-[359px]">{t("aboutus.our_mission_widget_text3")}</div>
                  </div>
                </div>
              </div>

              <div className="rounded-[19px] bg-white py-5 px-10 mb-5">
                <div className="flex sm:flex-col md:flex-row gap-4">
                  <Image
                    className=" w-[58px] h-[58px]"
                    width={58}
                    height={58}
                    sizes="100vw"
                    alt="Growth icon"
                    src="/assets/images/aboutus/fluent-arrow-growth-20-filled.svg"
                  />
                  <div className="">
                    <div className="font-semibold">{t("aboutus.our_mission_widget_heading4")}</div>
                    <div className="text-[15px] text-gray text-justify flex items-center">{t("aboutus.our_mission_widget_text4")}</div>
                  </div>
                </div>
              </div>

              <div className="rounded-[19px] bg-white py-5 px-10 mb-5">
                <div className="flex sm:flex-col md:flex-row gap-4">
                  <Image
                    className="w-[58px] h-[58px]"
                    width={58}
                    height={58}
                    sizes="100vw"
                    alt="Code icon"
                    src="/assets/images/aboutus/fluent-code-24-filled.svg"
                  />
                  <div className="">
                    <div className="font-semibold">{t("aboutus.our_mission_widget_heading5")}</div>
                    <div className=" left-0 text-[15px] text-gray text-justify flex items-center   md:w-[359px]">{t("aboutus.our_mission_widget_text5")}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 text-[18.17px] text-gray">
              <div className=" text-[34.61px] text-black">
                <div className=" md:w-[466px]  md:h-[167px]">
                  <div className="font-semibold">{t("aboutus.our_mission_heading")}</div>
                </div>
              </div>

              <div className="text-justify flex items-center   mb-5">
                {t("aboutus.our_mission_text")}
              </div>

              <div className="rounded-[19px] bg-white py-5 px-10">
                <div className="flex sm:flex-col md:flex-row gap-4">
                  <Image
                    className=" w-[58px] h-[58px]"
                    width={58}
                    height={58}
                    sizes="100vw"
                    alt="Performance icon"
                    src="/assets/images/aboutus/material-symbols-avg-pace.svg"
                  />
                  <div className="">
                    <div className="font-semibold">{t("aboutus.our_mission_widget_heading6")}</div>
                    <div className="text-[15px] text-gray text-justify flex items-center   md:w-[359px]">{t("aboutus.our_mission_widget_text6")}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
