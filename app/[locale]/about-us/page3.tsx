import type { NextPage } from "next";
import Image from "next/image";
import initServerI18n from "@/utils/serverTranslation";
import BannerSection from "@/components/layout/banner-section";

export default async function AboutUsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const i18nInstance = await initServerI18n(locale);
  const t = await i18nInstance.getFixedT(locale, "common");

  const slides = [
    {
      backgroundImage: "/assets/images/aboutus.png",
      heading: t("aboutus.heading_1"),
      text: t("aboutus.text_1"),
    },
  ];

  return (
    <>
      <BannerSection slides={slides} />
      <div className="w-full h-[8415px] relative bg-whitesmoke-100 overflow-hidden text-left text-num-18 text-white font-lexend">
        <div className="absolute top-[160px] left-[60px] w-num-1318 h-num-693 font-plus-jakarta-sans">
          <div className="relative rounded-[50px] w-num-1318 h-num-693 bg-cover bg-no-repeat bg-[top]">
            <Image
              className="absolute top-[160px] left-[60px] rounded-[32px] w-num-1318 h-num-693 object-cover"
              width={1318}
              height={693}
              sizes="100vw"
              alt=""
              src="/assets/images/aboutus/"
            />
            <div className="absolute top-[639px] left-[860px] bg-gainsboro-400 w-[415px] h-[284px]" />
          </div>
          <div className="relative rounded-[50px] [background:linear-gradient(-90deg,rgba(0,0,0,0),rgba(0,0,0,0.7))] w-num-1318 h-num-693">
            <Image
              className="absolute top-[160px] left-[60px] rounded-[32px] w-num-1318 h-num-693 object-cover"
              width={1318}
              height={693}
              sizes="100vw"
              alt=""
              src="/assets/images/aboutus/"
            />
            <div className="absolute top-[639px] left-[860px] bg-gainsboro-400 w-[415px] h-[284px]" />
          </div>
          <div className="absolute top-[461px] left-[68px] w-[336px] h-[55px]">
            <div className="absolute top-[15px] left-[212px] w-[124px] h-[26px] opacity-[0.8]">
              <div className="absolute top-[0px] left-[0px] leading-[26px]">
                Learn more
              </div>
              <Image
                className="absolute top-[6px] left-[112px] w-3 h-3 object-contain"
                width={12}
                height={12}
                sizes="100vw"
                alt=""
                src="/assets/images/aboutus/"
              />
            </div>
            <div className="absolute top-[0px] left-[0px] shadow-[4px4px30pxrgba(0,0,0,0.03)] rounded-[50px] bg-cadetblue-200 flex items-center justify-center py-num-16 px-10">
              <b className="relative">Get in Touch</b>
            </div>
          </div>
        </div>
        <div className="absolute top-[0px] left-[0px] w-num-1440 h-[119px] flex flex-col items-center justify-center py-num-16 px-[50px] box-border gap-2.5 text-[14px]">
          <div className="w-num-1440 h-[100px] absolute !!m-[0 important] top-[0px] left-[0px] z-[0]">
            <div className="absolute top-[0px] left-[0px] bg-gray-600 w-num-1440 h-[100px]" />
          </div>
          <div className="w-num-1318 flex items-center justify-between gap-5 z-[1]">
            <Image
              className="h-[60px] w-[140px] relative object-cover"
              width={140}
              height={60}
              sizes="100vw"
              alt=""
              src="/assets/images/aboutus/"
            />
            <div className="flex items-center justify-center gap-7">
              <div className="flex items-center gap-[11px] text-num-16 text-teal-100">
                <div className="flex flex-col items-center py-num-4 px-num-0">
                  <div className="flex items-start">
                    <div className="flex items-center justify-center gap-2">
                      <div className="relative leading-num-24 font-medium">
                        SCM Services
                      </div>
                      <Image
                        className="h-5 w-5 relative"
                        width={20}
                        height={20}
                        sizes="100vw"
                        alt=""
                        src="/assets/images/aboutus/"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center py-num-4 px-num-0">
                  <div className="flex items-start">
                    <div className="flex items-center justify-center gap-2">
                      <div className="relative leading-num-24 font-medium">
                        IT Support
                      </div>
                      <Image
                        className="h-5 w-5 relative"
                        width={20}
                        height={20}
                        sizes="100vw"
                        alt=""
                        src="/assets/images/aboutus/"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center py-num-4 px-num-0">
                  <div className="flex items-start">
                    <div className="flex items-center justify-center gap-2">
                      <div className="relative leading-num-24 font-medium">
                        Oracle Cloud
                      </div>
                      <Image
                        className="h-5 w-5 relative"
                        width={20}
                        height={20}
                        sizes="100vw"
                        alt=""
                        src="/assets/images/aboutus/"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center py-num-4 px-num-0">
                  <div className="flex items-start">
                    <div className="flex items-center justify-center gap-2">
                      <div className="relative leading-num-24 font-medium">
                        Digital Services
                      </div>
                      <Image
                        className="h-5 w-5 relative"
                        width={20}
                        height={20}
                        sizes="100vw"
                        alt=""
                        src="/assets/images/aboutus/"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center py-num-4 px-num-0">
                  <div className="flex items-start">
                    <div className="flex items-center justify-center gap-2">
                      <div className="relative leading-num-24 font-medium">
                        Staffing Support
                      </div>
                      <Image
                        className="h-5 w-5 relative"
                        width={20}
                        height={20}
                        sizes="100vw"
                        alt=""
                        src="/assets/images/aboutus/"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-11 w-[161px] relative">
                <div className="absolute top-[0px] left-[0px] rounded-xl bg-teal-100 w-[161px] h-11 flex items-center justify-center py-[9px] px-[15px] box-border">
                  <b className="relative leading-[26px]">Free SCM Check</b>
                </div>
              </div>
              <div className="h-11 w-[130px] relative">
                <div className="absolute top-[0px] left-[0px] rounded-xl bg-teal-100 w-[130px] h-11 flex items-center justify-center py-[9px] px-[18px] box-border">
                  <b className="relative leading-[26px]">Contact Us</b>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[-131px] left-[calc(50%-660px)] [filter:drop-shadow(0px4px4pxrgba(0,0,0,0.25))] border-black border-solid border-[1px] box-border w-[1320px] h-[8760px] hidden" />
        <div className="absolute top-[340px] left-[128px] w-[477px] h-[197px] text-center text-[86.4px]">
          <b className="absolute top-[0px] left-[2px] uppercase">ABOUT US</b>
          <div className="absolute top-[107px] left-[0px] text-[24px] text-gainsboro-200 text-left flex items-center w-[477px]">
            We combines expertise in management consulting and implementation{" "}
            <br />
            of business applications
          </div>
        </div>
        <div className="absolute top-[655px] left-[875px] w-[384.7px] h-[239px] text-[22.63px] text-gray-500">
          <div className="absolute top-[0px] left-[0px] shadow-[0px4px34pxrgba(0,0,0,0.13)] rounded-[33.94px] bg-white w-[384.7px] h-[239px]" />
          <div className="absolute top-[35.35px] left-[43.84px] leading-[42.43px] font-medium">
            Trusted by many clients
          </div>
          <div className="absolute top-[126.01px] left-[44px] text-[39.37px] leading-[73.82px] font-medium text-cadetblue-100">
            300+
          </div>
          <div className="absolute top-[135.76px] left-[155.56px] w-[186.7px] h-num-594">
            <Image
              className="absolute top-[0px] left-[0px] rounded-num-50 w-[59.4px] h-num-594 object-cover"
              width={59.4}
              height={59.4}
              sizes="100vw"
              alt=""
              src="/assets/images/aboutus/"
            />
            <Image
              className="absolute top-[0px] left-[42.43px] rounded-num-50 w-[59.4px] h-num-594 object-cover"
              width={59.4}
              height={59.4}
              sizes="100vw"
              alt=""
              src="/assets/images/aboutus/"
            />
            <Image
              className="absolute top-[0px] left-[84.85px] rounded-num-50 w-[59.4px] h-num-594 object-cover"
              width={59.4}
              height={59.4}
              sizes="100vw"
              alt=""
              src="/assets/images/aboutus/"
            />
            <Image
              className="absolute top-[0px] left-[127.28px] rounded-num-50 w-[59.4px] h-num-594 object-cover"
              width={59.4}
              height={59.4}
              sizes="100vw"
              alt=""
              src="/assets/images/aboutus/"
            />
          </div>
        </div>
        <div className="absolute top-[1317px] left-[61px] w-num-1318 h-[603px] text-num-22 text-black">
          <div className="absolute top-[51px] left-[642px] w-[676px] h-[552px]">
            <Image
              className="absolute top-[0px] left-[125px] rounded-[36px] w-[551px] h-[552px] object-cover"
              width={551}
              height={552}
              sizes="100vw"
              alt=""
              src="/assets/images/aboutus/"
            />
            <div className="absolute top-[294px] left-[0px] rounded-[28.97px] w-[280px] h-[199.5px] overflow-hidden flex items-center justify-center">
              <Image
                className="w-full h-full object-cover absolute left-[0px] top-[0px] [transform:scale(1.079)]"
                width={280}
                height={199.5}
                sizes="100vw"
                alt=""
                src="/assets/images/aboutus/"
              />
            </div>
          </div>
          <div className="absolute top-[0px] left-[0px] w-[549px] h-[603px]">
            <div className="absolute top-[45.57px] left-[0px] text-num-45 font-semibold">
              What Define Us
            </div>
            <div className="absolute top-[0px] left-[0px] w-[229px] h-num-25 text-num-15 text-teal-100">
              <div className="absolute top-[0px] left-[0px] w-[229px] h-num-25">
                <div className="absolute top-[0px] left-[0px] rounded-[21.5px] border-silver-200 border-solid border-[1px] box-border w-[229px] h-num-25" />
                <div className="absolute top-[7px] left-[12px] w-num-200 h-[11px]">
                  <div className="absolute top-[0px] left-[25px]">
                    About Our Company
                  </div>
                  <Image
                    className="absolute top-[3px] left-[185px] w-[15px] h-2"
                    width={15}
                    height={8}
                    sizes="100vw"
                    alt=""
                    src="/assets/images/aboutus/"
                  />
                  <Image
                    className="absolute top-[3px] left-[0px] w-[15px] h-2 object-contain"
                    width={15}
                    height={8}
                    sizes="100vw"
                    alt=""
                    src="/assets/images/aboutus/"
                  />
                </div>
              </div>
            </div>
            <div className="absolute top-[110px] left-[0px] text-num-18 text-gray-100 flex items-center w-[549px]">
              IT Solutions Worldwide is a leading company that provides the
              best-updated solutions to a comprehensive range of industries
            </div>
            <div className="absolute top-[192px] left-[0px] w-[541px] h-num-82">
              <div className="absolute top-[1px] left-[107px] w-num-434 h-num-81">
                <div className="absolute top-[0px] left-[0px] font-semibold">
                  Industry-Wide Impact
                </div>
                <div className="absolute top-[43px] left-[0px] text-num-15 text-gray-100 text-justify flex items-center w-num-434">
                  IT Solutions Worldwide delivers cutting-edge tech solutions
                  across diverse industries, driving success and efficiency
                </div>
              </div>
              <Image
                className="absolute top-[0px] left-[0px] w-[82px] h-num-82"
                width={82}
                height={82}
                sizes="100vw"
                alt=""
                src="/assets/images/aboutus/"
              />
            </div>
            <div className="absolute top-[303px] left-[0px] w-[541px] h-num-91">
              <div className="absolute top-[0px] left-[107px] w-num-434 h-num-91">
                <div className="absolute top-[0px] left-[0px] font-semibold">
                  Proven Expertise
                </div>
                <div className="absolute top-[34px] left-[0px] text-num-15 text-gray-100 text-justify flex items-center w-num-434">
                  With X years of experience and a strong track record, we
                  specialize in supply chain optimization, IT support, digital
                  marketing, and operational excellence.
                </div>
              </div>
              <Image
                className="absolute top-[4px] left-[0px] w-[82px] h-num-82"
                width={82}
                height={82}
                sizes="100vw"
                alt=""
                src="/assets/images/aboutus/"
              />
            </div>
            <div className="absolute top-[423px] left-[0px] w-[541px] h-[86px]">
              <div className="absolute top-[0px] left-[107px] w-num-434 h-num-81">
                <div className="absolute top-[0px] left-[0px] font-semibold">
                  Modernization Through Talent
                </div>
                <div className="absolute top-[43px] left-[0px] text-num-15 text-gray-100 text-justify flex items-center w-num-434">
                  Our top-tier technical professionals help businesses evolve
                  with simple, innovative, and future-ready strategies.
                </div>
              </div>
              <Image
                className="absolute top-[4px] left-[0px] w-[82px] h-num-82"
                width={82}
                height={82}
                sizes="100vw"
                alt=""
                src="/assets/images/aboutus/"
              />
            </div>
            <div className="absolute top-[548px] left-[0px] w-[242px] h-[55px] text-num-18 text-white font-plus-jakarta-sans">
              <div className="absolute top-[0px] left-[0px] rounded-[10px] bg-cadetblue-200 w-[242px] h-[55px]" />
              <div className="absolute top-[14px] left-[25px] w-48 h-num-25">
                <div className="absolute top-[1px] left-[168px] w-6 h-6">
                  <Image
                    className="absolute top-[0px] left-[0px] w-full h-6 object-contain"
                    width={24}
                    height={24}
                    sizes="100vw"
                    alt=""
                    src="/assets/images/aboutus/"
                  />
                </div>
                <b className="absolute top-[0px] left-[0px]">
                  Take Our Services
                </b>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[2070px] left-[0px] w-num-1440 h-[798px] text-num-20 text-black">
          <div className="absolute top-[0px] left-[0px] w-num-1440 h-[798px]">
            <div className="absolute h-[149.77%] w-[73.98%] top-[-9.65%] right-[-18.15%] bottom-[-40.13%] left-[44.17%]">
              <Image
                className="absolute h-[12.94%] w-[23.51%] top-[15.26%] right-[16.02%] bottom-[71.8%] left-[60.47%] max-w-full overflow-hidden max-h-full"
                width={250.4}
                height={154.6}
                sizes="100vw"
                alt=""
                src="/assets/images/aboutus/"
              />
              <div className="absolute h-[12.94%] w-[23.51%] top-[15.26%] right-[16.02%] bottom-[71.8%] left-[60.47%]">
                <Image
                  className="absolute h-[99.81%] w-[99.88%] top-[0.13%] right-[-0.16%] bottom-[0.06%] left-[0.27%] max-w-full overflow-hidden max-h-full"
                  width={250.1}
                  height={154.3}
                  sizes="100vw"
                  alt=""
                  src="/assets/images/aboutus/"
                />
              </div>
              <Image
                className="absolute h-[27.18%] w-[12.95%] top-[25.68%] right-[14.86%] bottom-[47.14%] left-[72.19%] max-w-full overflow-hidden max-h-full"
                width={138}
                height={324.9}
                sizes="100vw"
                alt=""
                src="/assets/images/aboutus/"
              />
              <div className="absolute h-[27.18%] w-[12.95%] top-[25.68%] right-[14.86%] bottom-[47.14%] left-[72.18%]">
                <div className="absolute h-[100.09%] w-full top-[0%] right-[0.04%] bottom-[-0.09%] left-[-0.04%]">
                  <Image
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                    width={138}
                    height={325.2}
                    sizes="100vw"
                    alt=""
                    src="/assets/images/aboutus/"
                  />
                </div>
              </div>
              <Image
                className="absolute h-[12.84%] w-[14.28%] top-[9.78%] right-[8.72%] bottom-[77.38%] left-[77%] max-w-full overflow-hidden max-h-full"
                width={152.1}
                height={153.5}
                sizes="100vw"
                alt=""
                src="/assets/images/aboutus/"
              />
              <div className="absolute h-[12.84%] w-[14.28%] top-[9.78%] right-[8.72%] bottom-[77.38%] left-[77%]">
                <Image
                  className="absolute h-[100.07%] w-[100.46%] top-[0.14%] right-[-0.27%] bottom-[-0.21%] left-[-0.19%] max-w-full overflow-hidden max-h-full"
                  width={152.8}
                  height={153.6}
                  sizes="100vw"
                  alt=""
                  src="/assets/images/aboutus/"
                />
              </div>
              <Image
                className="absolute h-[10.56%] w-[27.38%] top-[11.66%] right-[52.62%] bottom-[77.78%] left-[20%] max-w-full overflow-hidden max-h-full"
                width={291.7}
                height={126.2}
                sizes="100vw"
                alt=""
                src="/assets/images/aboutus/"
              />
              <div className="absolute h-[10.56%] w-[27.38%] top-[11.66%] right-[52.62%] bottom-[77.78%] left-[20%]">
                <Image
                  className="absolute h-[100.16%] w-[100.03%] top-[0%] right-[0.06%] bottom-[-0.16%] left-[-0.1%] max-w-full overflow-hidden max-h-full"
                  width={291.8}
                  height={126.4}
                  sizes="100vw"
                  alt=""
                  src="/assets/images/aboutus/"
                />
              </div>
              <Image
                className="absolute h-[25.75%] w-[23.21%] top-[18.86%] right-[66.16%] bottom-[55.39%] left-[10.62%] max-w-full overflow-hidden max-h-full"
                width={247.3}
                height={307.8}
                sizes="100vw"
                alt=""
                src="/assets/images/aboutus/"
              />
              <div className="absolute h-[25.75%] w-[23.21%] top-[18.86%] right-[66.16%] bottom-[55.39%] left-[10.62%]">
                <Image
                  className="absolute h-[99.94%] w-[99.88%] top-[0%] right-[-0.03%] bottom-[0.06%] left-[0.15%] max-w-full overflow-hidden max-h-full"
                  width={247}
                  height={307.6}
                  sizes="100vw"
                  alt=""
                  src="/assets/images/aboutus/"
                />
              </div>
              <Image
                className="absolute h-[7.36%] w-[16.12%] top-[5.81%] right-[32.89%] bottom-[86.83%] left-[50.99%] max-w-full overflow-hidden max-h-full"
                width={171.7}
                height={88}
                sizes="100vw"
                alt=""
                src="/assets/images/aboutus/"
              />
              <div className="absolute h-[7.36%] w-[16.12%] top-[5.81%] right-[32.89%] bottom-[86.83%] left-[50.99%]">
                <Image
                  className="absolute h-[100.34%] w-[99.42%] top-[-0.39%] right-[-0.01%] bottom-[0.05%] left-[0.59%] max-w-full overflow-hidden max-h-full"
                  width={170.7}
                  height={88.3}
                  sizes="100vw"
                  alt=""
                  src="/assets/images/aboutus/"
                />
              </div>
              <Image
                className="absolute h-[12.93%] w-[23.34%] top-[15.28%] right-[60.75%] bottom-[71.79%] left-[15.92%] max-w-full overflow-hidden max-h-full"
                width={248.6}
                height={154.5}
                sizes="100vw"
                alt=""
                src="/assets/images/aboutus/"
              />
              <div className="absolute h-[12.93%] w-[23.34%] top-[15.28%] right-[60.75%] bottom-[71.79%] left-[15.92%]">
                <Image
                  className="absolute h-[99.87%] w-[100.32%] top-[0%] right-[-0.01%] bottom-[0.13%] left-[-0.31%] max-w-full overflow-hidden max-h-full"
                  width={249.4}
                  height={154.3}
                  sizes="100vw"
                  alt=""
                  src="/assets/images/aboutus/"
                />
              </div>
              <Image
                className="absolute h-[10.38%] w-[27.26%] top-[11.66%] right-[20.23%] bottom-[77.96%] left-[52.51%] max-w-full overflow-hidden max-h-full"
                width={290.4}
                height={124.1}
                sizes="100vw"
                alt=""
                src="/assets/images/aboutus/"
              />
              <div className="absolute h-[10.38%] w-[27.26%] top-[11.66%] right-[20.23%] bottom-[77.96%] left-[52.51%]">
                <Image
                  className="absolute h-[99.68%] w-[100.48%] top-[0%] right-[-0.36%] bottom-[0.32%] left-[-0.12%] max-w-full overflow-hidden max-h-full"
                  width={291.8}
                  height={123.7}
                  sizes="100vw"
                  alt=""
                  src="/assets/images/aboutus/"
                />
              </div>
              <Image
                className="absolute h-[27.23%] w-[12.96%] top-[25.68%] right-[72.32%] bottom-[47.1%] left-[14.72%] max-w-full overflow-hidden max-h-full"
                width={138.1}
                height={325.4}
                sizes="100vw"
                alt=""
                src="/assets/images/aboutus/"
              />
              <div className="absolute h-[27.23%] w-[12.96%] top-[25.68%] right-[72.32%] bottom-[47.1%] left-[14.72%]">
                <Image
                  className="absolute h-[99.94%] w-full top-[0%] right-[-0.03%] bottom-[0.06%] left-[0.03%] max-w-full overflow-hidden max-h-full"
                  width={138.1}
                  height={325.2}
                  sizes="100vw"
                  alt=""
                  src="/assets/images/aboutus/"
                />
              </div>
              <Image
                className="absolute h-[25.7%] w-[23.19%] top-[18.86%] right-[10.8%] bottom-[55.44%] left-[66.02%] max-w-full overflow-hidden max-h-full"
                width={247}
                height={307.2}
                sizes="100vw"
                alt=""
                src="/assets/images/aboutus/"
              />
              <div className="absolute h-[25.7%] w-[23.19%] top-[18.86%] right-[10.8%] bottom-[55.44%] left-[66.02%]">
                <Image
                  className="absolute h-[100.13%] w-[100.28%] top-[0%] right-[-0.13%] bottom-[-0.13%] left-[-0.15%] max-w-full overflow-hidden max-h-full"
                  width={247.7}
                  height={307.6}
                  sizes="100vw"
                  alt=""
                  src="/assets/images/aboutus/"
                />
              </div>
              <Image
                className="absolute h-[11.63%] w-[5.55%] top-[48.03%] right-[77.34%] bottom-[40.34%] left-[17.11%] max-w-full overflow-hidden max-h-full"
                width={59.1}
                height={139}
                sizes="100vw"
                alt=""
                src="/assets/images/aboutus/"
              />
              <div className="absolute h-[11.63%] w-[5.55%] top-[48.03%] right-[77.34%] bottom-[40.34%] left-[17.11%]">
                <div className="absolute h-[100.07%] w-full top-[0%] right-[0.12%] bottom-[-0.07%] left-[-0.12%]">
                  <Image
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                    width={59.1}
                    height={139.1}
                    sizes="100vw"
                    alt=""
                    src="/assets/images/aboutus/"
                  />
                </div>
              </div>
              <Image
                className="absolute h-[13.37%] w-[12.01%] top-[19.43%] right-[7.06%] bottom-[67.2%] left-[80.94%] max-w-full overflow-hidden max-h-full"
                width={127.9}
                height={159.8}
                sizes="100vw"
                alt=""
                src="/assets/images/aboutus/"
              />
              <div className="absolute h-[13.37%] w-[12.01%] top-[19.43%] right-[7.06%] bottom-[67.2%] left-[80.94%]">
                <Image
                  className="absolute h-[100.25%] w-[99.92%] top-[0.05%] right-[0.25%] bottom-[-0.3%] left-[-0.17%] max-w-full overflow-hidden max-h-full"
                  width={127.8}
                  height={160.2}
                  sizes="100vw"
                  alt=""
                  src="/assets/images/aboutus/"
                />
              </div>
              <Image
                className="absolute h-[12.47%] w-[5.04%] top-[67.74%] right-[30.89%] bottom-[19.79%] left-[64.07%] max-w-full overflow-hidden max-h-full"
                width={53.7}
                height={149.1}
                sizes="100vw"
                alt=""
                src="/assets/images/aboutus/"
              />
              <div className="absolute h-[12.47%] w-[5.04%] top-[67.74%] right-[30.89%] bottom-[19.79%] left-[64.07%]">
                <Image
                  className="absolute h-[100.2%] w-[99.81%] top-[0%] right-[-0.06%] bottom-[-0.2%] left-[0.25%] max-w-full overflow-hidden max-h-full"
                  width={53.6}
                  height={149.4}
                  sizes="100vw"
                  alt=""
                  src="/assets/images/aboutus/"
                />
              </div>
              <Image
                className="absolute h-[11.6%] w-[5.55%] top-[48.06%] right-[17.25%] bottom-[40.33%] left-[77.21%] max-w-full overflow-hidden max-h-full"
                width={59.1}
                height={138.7}
                sizes="100vw"
                alt=""
                src="/assets/images/aboutus/"
              />
              <div className="absolute h-[11.6%] w-[5.55%] top-[48.06%] right-[17.24%] bottom-[40.33%] left-[77.21%]">
                <div className="absolute h-[100.29%] w-full top-[-0.25%] right-[0%] bottom-[-0.03%] left-[0%]">
                  <Image
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                    width={59.1}
                    height={139.1}
                    sizes="100vw"
                    alt=""
                    src="/assets/images/aboutus/"
                  />
                </div>
              </div>
              <Image
                className="absolute h-[4.02%] w-[9.13%] top-[35.13%] right-[33.98%] bottom-[60.85%] left-[56.89%] max-w-full overflow-hidden max-h-full"
                width={97.3}
                height={48}
                sizes="100vw"
                alt=""
                src="/assets/images/aboutus/"
              />
              <div className="absolute h-[4.02%] w-[9.13%] top-[35.13%] right-[33.98%] bottom-[60.85%] left-[56.89%]">
                <div className="absolute h-[101.88%] w-full top-[-0.16%] right-[0.29%] bottom-[-1.72%] left-[-0.29%]">
                  <Image
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                    width={97.3}
                    height={48.9}
                    sizes="100vw"
                    alt=""
                    src="/assets/images/aboutus/"
                  />
                </div>
              </div>
              <Image
                className="absolute h-[4.02%] w-[9.13%] top-[35.09%] right-[56.96%] bottom-[60.89%] left-[33.91%] max-w-full overflow-hidden max-h-full"
                width={97.3}
                height={48}
                sizes="100vw"
                alt=""
                src="/assets/images/aboutus/"
              />
              <div className="absolute h-[4.02%] w-[9.13%] top-[35.09%] right-[56.96%] bottom-[60.89%] left-[33.91%]">
                <div className="absolute h-[101.88%] w-full top-[0.72%] right-[0.78%] bottom-[-2.6%] left-[-0.78%]">
                  <Image
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                    width={97.3}
                    height={48.9}
                    sizes="100vw"
                    alt=""
                    src="/assets/images/aboutus/"
                  />
                </div>
              </div>
              <Image
                className="absolute h-[48.41%] w-[57.95%] top-[20.22%] right-[21.08%] bottom-[31.37%] left-[20.97%] max-w-full overflow-hidden max-h-full"
                width={617.3}
                height={578.6}
                sizes="100vw"
                alt=""
                src="/assets/images/aboutus/"
              />
              <div className="absolute h-[48.41%] w-[57.95%] top-[20.22%] right-[21.08%] bottom-[31.37%] left-[20.97%]">
                <Image
                  className="absolute h-[99.91%] w-[100.16%] top-[0.06%] right-[-0.11%] bottom-[0.03%] left-[-0.06%] max-w-full overflow-hidden max-h-full"
                  width={618.3}
                  height={578.1}
                  sizes="100vw"
                  alt=""
                  src="/assets/images/aboutus/"
                />
              </div>
              <Image
                className="absolute h-[12.48%] w-[5.04%] top-[67.74%] right-[64.22%] bottom-[19.78%] left-[30.74%] max-w-full overflow-hidden max-h-full"
                width={53.7}
                height={149.2}
                sizes="100vw"
                alt=""
                src="/assets/images/aboutus/"
              />
              <div className="absolute h-[12.48%] w-[5.04%] top-[67.74%] right-[64.22%] bottom-[19.78%] left-[30.74%]">
                <Image
                  className="absolute h-[100.13%] w-[99.44%] top-[0%] right-[0.56%] bottom-[-0.13%] left-[0%] max-w-full overflow-hidden max-h-full"
                  width={53.4}
                  height={149.4}
                  sizes="100vw"
                  alt=""
                  src="/assets/images/aboutus/"
                />
              </div>
              <Image
                className="absolute h-[18.14%] w-[27.06%] top-[62.27%] right-[36.53%] bottom-[19.59%] left-[36.41%] max-w-full overflow-hidden max-h-full"
                width={288.3}
                height={216.8}
                sizes="100vw"
                alt=""
                src="/assets/images/aboutus/"
              />
              <div className="absolute h-[18.14%] w-[27.06%] top-[62.27%] right-[36.53%] bottom-[19.59%] left-[36.41%]">
                <Image
                  className="absolute h-[100.14%] w-full top-[-0.16%] right-[0%] bottom-[0.02%] left-[0%] max-w-full overflow-hidden max-h-full"
                  width={288.3}
                  height={217.1}
                  sizes="100vw"
                  alt=""
                  src="/assets/images/aboutus/"
                />
              </div>
              <Image
                className="absolute h-[11.56%] w-[25.89%] top-[0%] right-[12.93%] bottom-[88.44%] left-[61.18%] max-w-full overflow-hidden max-h-full"
                width={275.8}
                height={138.2}
                sizes="100vw"
                alt=""
                src="/assets/images/aboutus/"
              />
              <div className="absolute h-[11.56%] w-[25.89%] top-[0%] right-[12.93%] bottom-[88.44%] left-[61.18%]">
                <Image
                  className="absolute h-[100.14%] w-full top-[0.05%] right-[-0.04%] bottom-[-0.2%] left-[0.04%] max-w-full overflow-hidden max-h-full"
                  width={275.8}
                  height={138.4}
                  sizes="100vw"
                  alt=""
                  src="/assets/images/aboutus/"
                />
              </div>
              <Image
                className="absolute h-[23.14%] w-[10.64%] top-[76.85%] right-[35.6%] bottom-[0%] left-[53.76%] max-w-full overflow-hidden max-h-full"
                width={113.4}
                height={276.6}
                sizes="100vw"
                alt=""
                src="/assets/images/aboutus/"
              />
              <div className="absolute h-[23.14%] w-[10.64%] top-[76.85%] right-[35.6%] bottom-[0%] left-[53.75%]">
                <Image
                  className="absolute h-[99.86%] w-[100.35%] top-[-0.12%] right-[-0.48%] bottom-[0.26%] left-[0.13%] max-w-full overflow-hidden max-h-full"
                  width={113.8}
                  height={276.2}
                  sizes="100vw"
                  alt=""
                  src="/assets/images/aboutus/"
                />
              </div>
              <Image
                className="absolute h-[7.4%] w-[16.03%] top-[5.78%] right-[51.24%] bottom-[86.83%] left-[32.73%] max-w-full overflow-hidden max-h-full"
                width={170.8}
                height={88.4}
                sizes="100vw"
                alt=""
                src="/assets/images/aboutus/"
              />
              <div className="absolute h-[7.4%] w-[16.03%] top-[5.78%] right-[51.23%] bottom-[86.83%] left-[32.73%]">
                <Image
                  className="absolute h-[99.89%] w-[99.94%] top-[0.08%] right-[0.18%] bottom-[0.03%] left-[-0.12%] max-w-full overflow-hidden max-h-full"
                  width={170.7}
                  height={88.3}
                  sizes="100vw"
                  alt=""
                  src="/assets/images/aboutus/"
                />
              </div>
              <Image
                className="absolute h-[12.38%] w-[10.17%] top-[80.98%] right-[28.44%] bottom-[6.64%] left-[61.4%] max-w-full overflow-hidden max-h-full"
                width={108.3}
                height={148}
                sizes="100vw"
                alt=""
                src="/assets/images/aboutus/"
              />
              <div className="absolute h-[12.38%] w-[10.17%] top-[80.98%] right-[28.44%] bottom-[6.64%] left-[61.4%]">
                <Image
                  className="absolute h-[100.07%] w-[100.28%] top-[0.05%] right-[0.29%] bottom-[-0.12%] left-[-0.57%] max-w-full overflow-hidden max-h-full"
                  width={108.6}
                  height={148.1}
                  sizes="100vw"
                  alt=""
                  src="/assets/images/aboutus/"
                />
              </div>
              <Image
                className="absolute h-[9.71%] w-[8.19%] top-[86.98%] right-[41.08%] bottom-[3.3%] left-[50.73%] max-w-full overflow-hidden max-h-full"
                width={87.3}
                height={116.1}
                sizes="100vw"
                alt=""
                src="/assets/images/aboutus/"
              />
              <div className="absolute h-[9.71%] w-[8.19%] top-[86.98%] right-[41.07%] bottom-[3.3%] left-[50.73%]">
                <Image
                  className="absolute h-[100.17%] w-[100.8%] top-[-0.19%] right-[-0.45%] bottom-[0.01%] left-[-0.35%] max-w-full overflow-hidden max-h-full"
                  width={88}
                  height={116.3}
                  sizes="100vw"
                  alt=""
                  src="/assets/images/aboutus/"
                />
              </div>
              <Image
                className="absolute h-[23.16%] w-[10.7%] top-[76.84%] right-[53.87%] bottom-[0%] left-[35.43%] max-w-full overflow-hidden max-h-full"
                width={114}
                height={276.8}
                sizes="100vw"
                alt=""
                src="/assets/images/aboutus/"
              />
              <div className="absolute h-[23.16%] w-[10.7%] top-[76.84%] right-[53.87%] bottom-[0%] left-[35.43%]">
                <Image
                  className="absolute h-[99.78%] w-[100.09%] top-[-0.05%] right-[-0.03%] bottom-[0.27%] left-[-0.05%] max-w-full overflow-hidden max-h-full"
                  width={114.1}
                  height={276.2}
                  sizes="100vw"
                  alt=""
                  src="/assets/images/aboutus/"
                />
              </div>
              <Image
                className="absolute h-[9.69%] w-[8.19%] top-[86.97%] right-[50.88%] bottom-[3.35%] left-[40.93%] max-w-full overflow-hidden max-h-full"
                width={87.3}
                height={115.8}
                sizes="100vw"
                alt=""
                src="/assets/images/aboutus/"
              />
              <div className="absolute h-[9.69%] w-[8.19%] top-[86.96%] right-[50.88%] bottom-[3.35%] left-[40.93%]">
                <Image
                  className="absolute h-[100.43%] w-[100.8%] top-[0%] right-[-0.46%] bottom-[-0.43%] left-[-0.34%] max-w-full overflow-hidden max-h-full"
                  width={88}
                  height={116.3}
                  sizes="100vw"
                  alt=""
                  src="/assets/images/aboutus/"
                />
              </div>
              <Image
                className="absolute h-[8.22%] w-[9.17%] top-[46.45%] right-[5.86%] bottom-[45.33%] left-[84.97%] max-w-full overflow-hidden max-h-full"
                width={97.7}
                height={98.3}
                sizes="100vw"
                alt=""
                src="/assets/images/aboutus/"
              />
              <div className="absolute h-[8.22%] w-[9.17%] top-[46.45%] right-[5.86%] bottom-[45.33%] left-[84.97%]">
                <Image
                  className="absolute h-[101.53%] w-[99.9%] top-[-0.07%] right-[0.04%] bottom-[-1.45%] left-[0.06%] max-w-full overflow-hidden max-h-full"
                  width={97.6}
                  height={99.8}
                  sizes="100vw"
                  alt=""
                  src="/assets/images/aboutus/"
                />
              </div>
              <Image
                className="absolute h-[14.42%] w-[9.74%] top-[53.14%] right-[7.46%] bottom-[32.45%] left-[82.8%] max-w-full overflow-hidden max-h-full"
                width={103.8}
                height={172.3}
                sizes="100vw"
                alt=""
                src="/assets/images/aboutus/"
              />
              <div className="absolute h-[14.42%] w-[9.74%] top-[53.14%] right-[7.46%] bottom-[32.45%] left-[82.79%]">
                <div className="absolute h-[100.17%] w-[100.39%] top-[-0.04%] right-[-0.25%] bottom-[-0.13%] left-[-0.13%]">
                  <Image
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                    width={104.2}
                    height={172.6}
                    sizes="100vw"
                    alt=""
                    src="/assets/images/aboutus/"
                  />
                </div>
              </div>
              <Image
                className="absolute h-[22.57%] w-[10.64%] top-[51.27%] right-[15.59%] bottom-[26.16%] left-[73.77%] max-w-full overflow-hidden max-h-full"
                width={113.3}
                height={269.8}
                sizes="100vw"
                alt=""
                src="/assets/images/aboutus/"
              />
              <div className="absolute h-[22.57%] w-[10.64%] top-[51.27%] right-[15.59%] bottom-[26.16%] left-[73.77%]">
                <div className="absolute h-[99.93%] w-full top-[0%] right-[-0.18%] bottom-[0.07%] left-[0.18%]">
                  <Image
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                    width={113.3}
                    height={269.6}
                    sizes="100vw"
                    alt=""
                    src="/assets/images/aboutus/"
                  />
                </div>
              </div>
              <Image
                className="absolute h-[15.38%] w-[7.44%] top-[63.81%] right-[16.96%] bottom-[20.81%] left-[75.59%] max-w-full overflow-hidden max-h-full"
                width={79.3}
                height={183.8}
                sizes="100vw"
                alt=""
                src="/assets/images/aboutus/"
              />
              <div className="absolute h-[15.38%] w-[7.44%] top-[63.81%] right-[16.96%] bottom-[20.81%] left-[75.59%]">
                <Image
                  className="absolute h-[100.87%] w-[100.5%] top-[-0.08%] right-[0.29%] bottom-[-0.79%] left-[-0.79%] max-w-full overflow-hidden max-h-full"
                  width={79.7}
                  height={185.4}
                  sizes="100vw"
                  alt=""
                  src="/assets/images/aboutus/"
                />
              </div>
              <Image
                className="absolute h-[22.72%] w-[6.13%] top-[63.83%] right-[21.59%] bottom-[13.46%] left-[72.28%] max-w-full overflow-hidden max-h-full"
                width={65.3}
                height={271.5}
                sizes="100vw"
                alt=""
                src="/assets/images/aboutus/"
              />
              <div className="absolute h-[22.72%] w-[6.13%] top-[63.83%] right-[21.59%] bottom-[13.46%] left-[72.28%]">
                <Image
                  className="absolute h-[100.44%] w-full top-[0%] right-[0%] bottom-[-0.44%] left-[0%] max-w-full overflow-hidden max-h-full"
                  width={65.3}
                  height={272.7}
                  sizes="100vw"
                  alt=""
                  src="/assets/images/aboutus/"
                />
              </div>
              <Image
                className="absolute h-[13.38%] w-[12.01%] top-[19.46%] right-[81.07%] bottom-[67.16%] left-[6.92%] max-w-full overflow-hidden max-h-full"
                width={127.9}
                height={159.9}
                sizes="100vw"
                alt=""
                src="/assets/images/aboutus/"
              />
              <div className="absolute h-[13.38%] w-[12.01%] top-[19.46%] right-[81.07%] bottom-[67.16%] left-[6.92%]">
                <div className="absolute h-[100.19%] w-[99.92%] top-[-0.18%] right-[-0.2%] bottom-[-0.01%] left-[0.28%]">
                  <Image
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                    width={127.8}
                    height={160.2}
                    sizes="100vw"
                    alt=""
                    src="/assets/images/aboutus/"
                  />
                </div>
              </div>
              <Image
                className="absolute h-[12.83%] w-[14.43%] top-[9.79%] right-[77.15%] bottom-[77.37%] left-[8.43%] max-w-full overflow-hidden max-h-full"
                width={153.7}
                height={153.4}
                sizes="100vw"
                alt=""
                src="/assets/images/aboutus/"
              />
              <div className="absolute h-[12.83%] w-[14.43%] top-[9.79%] right-[77.15%] bottom-[77.37%] left-[8.42%]">
                <Image
                  className="absolute h-[100.13%] w-[99.41%] top-[0.05%] right-[-0.15%] bottom-[-0.18%] left-[0.74%] max-w-full overflow-hidden max-h-full"
                  width={152.8}
                  height={153.6}
                  sizes="100vw"
                  alt=""
                  src="/assets/images/aboutus/"
                />
              </div>
              <Image
                className="absolute h-[8.3%] w-[9.17%] top-[46.47%] right-[85.11%] bottom-[45.23%] left-[5.72%] max-w-full overflow-hidden max-h-full"
                width={97.7}
                height={99.2}
                sizes="100vw"
                alt=""
                src="/assets/images/aboutus/"
              />
              <div className="absolute h-[8.3%] w-[9.17%] top-[46.47%] right-[85.11%] bottom-[45.23%] left-[5.72%]">
                <div className="absolute h-[100.2%] w-[99.59%] top-[-0.28%] right-[-0.01%] bottom-[0.08%] left-[0.42%]">
                  <Image
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                    width={97.3}
                    height={99.4}
                    sizes="100vw"
                    alt=""
                    src="/assets/images/aboutus/"
                  />
                </div>
              </div>
              <Image
                className="absolute h-[8.32%] w-[9.16%] top-[35.12%] right-[0%] bottom-[56.57%] left-[90.83%] max-w-full overflow-hidden max-h-full"
                width={97.6}
                height={99.4}
                sizes="100vw"
                alt=""
                src="/assets/images/aboutus/"
              />
              <div className="absolute h-[8.32%] w-[9.16%] top-[35.12%] right-[0%] bottom-[56.57%] left-[90.83%]">
                <div className="absolute h-full w-[99.69%] top-[0.07%] right-[0.23%] bottom-[-0.07%] left-[0.07%]">
                  <Image
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                    width={97.3}
                    height={99.4}
                    sizes="100vw"
                    alt=""
                    src="/assets/images/aboutus/"
                  />
                </div>
              </div>
              <Image
                className="absolute h-[8.29%] w-[9.02%] top-[35.12%] right-[90.98%] bottom-[56.59%] left-[0%] max-w-full overflow-hidden max-h-full"
                width={96.1}
                height={99.1}
                sizes="100vw"
                alt=""
                src="/assets/images/aboutus/"
              />
              <div className="absolute h-[8.29%] w-[9.02%] top-[35.12%] right-[90.98%] bottom-[56.59%] left-[0%]">
                <div className="absolute h-[100.3%] w-[101.25%] top-[-0.28%] right-[-0.04%] bottom-[-0.03%] left-[-1.21%]">
                  <Image
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                    width={97.3}
                    height={99.4}
                    sizes="100vw"
                    alt=""
                    src="/assets/images/aboutus/"
                  />
                </div>
              </div>
              <Image
                className="absolute h-[11.55%] w-[25.85%] top-[0.03%] right-[61.35%] bottom-[88.41%] left-[12.8%] max-w-full overflow-hidden max-h-full"
                width={275.4}
                height={138.1}
                sizes="100vw"
                alt=""
                src="/assets/images/aboutus/"
              />
              <div className="absolute h-[11.55%] w-[25.85%] top-[0.03%] right-[61.35%] bottom-[88.41%] left-[12.79%]">
                <Image
                  className="absolute h-[100.22%] w-[100.15%] top-[-0.25%] right-[-0.12%] bottom-[0.04%] left-[-0.02%] max-w-full overflow-hidden max-h-full"
                  width={275.8}
                  height={138.4}
                  sizes="100vw"
                  alt=""
                  src="/assets/images/aboutus/"
                />
              </div>
              <Image
                className="absolute h-[22.52%] w-[10.62%] top-[51.27%] right-[73.94%] bottom-[26.21%] left-[15.45%] max-w-full overflow-hidden max-h-full"
                width={113.1}
                height={269.2}
                sizes="100vw"
                alt=""
                src="/assets/images/aboutus/"
              />
              <div className="absolute h-[22.52%] w-[10.62%] top-[51.27%] right-[73.94%] bottom-[26.21%] left-[15.45%]">
                <div className="absolute h-[100.15%] w-[100.27%] top-[0%] right-[-0.1%] bottom-[-0.15%] left-[-0.16%]">
                  <Image
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                    width={113.4}
                    height={269.6}
                    sizes="100vw"
                    alt=""
                    src="/assets/images/aboutus/"
                  />
                </div>
              </div>
              <Image
                className="absolute h-[15.48%] w-[7.43%] top-[63.8%] right-[75.67%] bottom-[20.72%] left-[16.9%] max-w-full overflow-hidden max-h-full"
                width={79.1}
                height={185}
                sizes="100vw"
                alt=""
                src="/assets/images/aboutus/"
              />
              <div className="absolute h-[15.48%] w-[7.43%] top-[63.8%] right-[75.67%] bottom-[20.72%] left-[16.9%]">
                <Image
                  className="absolute h-[100.22%] w-[100.88%] top-[-0.01%] right-[-0.11%] bottom-[-0.21%] left-[-0.78%] max-w-full overflow-hidden max-h-full"
                  width={79.8}
                  height={185.4}
                  sizes="100vw"
                  alt=""
                  src="/assets/images/aboutus/"
                />
              </div>
              <Image
                className="absolute h-[14.32%] w-[9.77%] top-[53.24%] right-[82.93%] bottom-[32.43%] left-[7.3%] max-w-full overflow-hidden max-h-full"
                width={104.1}
                height={171.2}
                sizes="100vw"
                alt=""
                src="/assets/images/aboutus/"
              />
              <div className="absolute h-[14.32%] w-[9.77%] top-[53.24%] right-[82.93%] bottom-[32.43%] left-[7.3%]">
                <div className="absolute h-[100.82%] w-[100.1%] top-[-0.77%] right-[-0.13%] bottom-[-0.05%] left-[0.04%]">
                  <Image
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                    width={104.2}
                    height={172.6}
                    sizes="100vw"
                    alt=""
                    src="/assets/images/aboutus/"
                  />
                </div>
              </div>
              <Image
                className="absolute h-[22.82%] w-[6.14%] top-[63.83%] right-[72.44%] bottom-[13.35%] left-[21.42%] max-w-full overflow-hidden max-h-full"
                width={65.4}
                height={272.8}
                sizes="100vw"
                alt=""
                src="/assets/images/aboutus/"
              />
              <div className="absolute h-[22.82%] w-[6.14%] top-[63.83%] right-[72.44%] bottom-[13.35%] left-[21.42%]">
                <Image
                  className="absolute h-[99.96%] w-[99.69%] top-[-0.13%] right-[0.4%] bottom-[0.17%] left-[-0.1%] max-w-full overflow-hidden max-h-full"
                  width={65.2}
                  height={272.7}
                  sizes="100vw"
                  alt=""
                  src="/assets/images/aboutus/"
                />
              </div>
              <Image
                className="absolute h-[12.37%] w-[10.16%] top-[80.96%] right-[61.51%] bottom-[6.67%] left-[28.33%] max-w-full overflow-hidden max-h-full"
                width={108.2}
                height={147.8}
                sizes="100vw"
                alt=""
                src="/assets/images/aboutus/"
              />
              <div className="absolute h-[12.37%] w-[10.16%] top-[80.96%] right-[61.51%] bottom-[6.67%] left-[28.33%]">
                <Image
                  className="absolute h-[100.2%] w-[100.28%] top-[0.2%] right-[0.04%] bottom-[-0.4%] left-[-0.32%] max-w-full overflow-hidden max-h-full"
                  width={108.5}
                  height={148.1}
                  sizes="100vw"
                  alt=""
                  src="/assets/images/aboutus/"
                />
              </div>
            </div>
            <div className="absolute top-[0px] left-[0px] bg-teal-300 w-num-1440 h-[798px]" />
          </div>
          <div className="absolute top-[59px] left-[calc(50%-538px)] w-[1076.7px] h-[647px]">
            <div className="absolute top-[0px] left-[calc(50%-118.35px)] text-teal-100">
              It Time For A Revolution
            </div>
            <div className="absolute top-[33px] left-[calc(50%-206.35px)] text-[70px] font-semibold">
              Our Mission
            </div>
            <div className="absolute top-[173px] left-[0px] w-[1076.7px] h-[474px] text-num-22">
              <div className="absolute top-[0px] left-[0px] w-num-493 h-[474px]">
                <div className="absolute top-[0px] left-[0px] w-num-493 h-num-140">
                  <div className="absolute top-[0px] left-[0px] rounded-[19px] bg-white w-num-493 h-num-140" />
                  <div className="absolute top-[24px] left-[30px] w-[433px] h-num-91">
                    <div className="absolute top-[0px] left-[74px] w-num-359 h-num-91">
                      <div className="absolute top-[0px] left-[0px] font-semibold">
                        Empowering Growth
                      </div>
                      <div className="absolute top-[34px] left-[0px] text-num-15 text-gray-100 text-justify flex items-center w-num-359">
                        IT Solutions Worldwide delivers cutting-edge tech
                        solutions across diverse industries, driving success and
                        efficiency
                      </div>
                    </div>
                    <Image
                      className="absolute top-[4px] left-[0px] w-[58px] h-[58px]"
                      width={58}
                      height={58}
                      sizes="100vw"
                      alt=""
                      src="/assets/images/aboutus/"
                    />
                  </div>
                </div>
                <div className="absolute top-[167px] left-[0px] w-num-493 h-num-140">
                  <div className="absolute top-[0px] left-[0px] rounded-[19px] bg-white w-num-493 h-num-140" />
                  <div className="absolute top-[24px] left-[30px] w-[433px] h-num-91">
                    <div className="absolute top-[0px] left-[74px] w-num-359 h-num-91">
                      <div className="absolute top-[0px] left-[0px] font-semibold">
                        Tech-Driven Excellence
                      </div>
                      <div className="absolute top-[34px] left-[0px] text-num-15 text-gray-100 text-justify flex items-center w-num-359">
                        Our team delivers advanced technologies and hands-on
                        support to overcome operational challenges with
                        precision and agility.
                      </div>
                    </div>
                    <Image
                      className="absolute top-[4px] left-[0px] w-[58px] h-[58px]"
                      width={58}
                      height={58}
                      sizes="100vw"
                      alt=""
                      src="/assets/images/aboutus/"
                    />
                  </div>
                </div>
                <div className="absolute top-[334px] left-[0px] w-num-493 h-num-140">
                  <div className="absolute top-[0px] left-[0px] rounded-[19px] bg-white w-num-493 h-num-140" />
                  <div className="absolute top-[25px] left-[30px] w-[433px] h-num-91">
                    <div className="absolute top-[0px] left-[74px] w-num-359 h-num-91">
                      <div className="absolute top-[0px] left-[0px] font-semibold">
                        Accelerating Digital Success
                      </div>
                      <div className="absolute top-[34px] left-[0px] text-num-15 text-gray-100 text-justify flex items-center w-num-359">
                        We help businesses thrive in the digital landscape by
                        enabling faster, more efficient growth through
                        future-ready strategies.
                      </div>
                    </div>
                    <Image
                      className="absolute top-[4px] left-[0px] w-[58px] h-[58px]"
                      width={58}
                      height={58}
                      sizes="100vw"
                      alt=""
                      src="/assets/images/aboutus/"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute top-[0px] left-[602px] w-[474.7px] h-[473.6px] text-[18.17px] text-gray-100">
                <div className="absolute top-[179px] left-[0px] text-justify flex items-center w-[474.7px]">
                  At IT Solutions Worldwide, our mission is to simplify
                  complexity and accelerate growth for businesses across
                  industries. We believe that technology should be intuitive,
                  scalable, and deeply aligned with business goals. That’s why
                  we deliver tailored IT solutions that not only solve immediate
                  challenges but also lay the groundwork for long-term success.
                </div>
                <div className="absolute top-[407px] left-[0px] w-[474.7px] h-[66.6px] text-[21.8px] text-white font-plus-jakarta-sans">
                  <div className="absolute top-[0px] left-[0px] rounded-[12.11px] bg-cadetblue-200 w-[474.7px] h-[66.6px]" />
                  <div className="absolute top-[16.95px] left-[121.11px] w-[232.5px] h-[30.3px]">
                    <div className="absolute top-[1.21px] left-[203.46px] w-[29.1px] h-[29.1px]">
                      <Image
                        className="absolute top-[0px] left-[0px] w-full h-[29.1px] object-contain"
                        width={29.1}
                        height={29.1}
                        sizes="100vw"
                        alt=""
                        src="/assets/images/aboutus/"
                      />
                    </div>
                    <b className="absolute top-[0px] left-[0px]">
                      Take Our Services
                    </b>
                  </div>
                </div>
                <div className="absolute top-[0px] left-[4.5px] w-[466px] h-[167px] text-[34.61px] text-black">
                  <div className="absolute top-[0px] left-[0px] w-[466px] h-[167px]">
                    <div className="absolute top-[0px] left-[0px] font-semibold">
                      Where Digital Excellence <br />
                      Meets Seamless Execution <br />
                      and Scalable Growth 
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[3018px] left-[61px] w-[1379.1px] h-[510.3px] text-[70px]">
          <div className="absolute top-[456px] left-[1319px] rounded-[27px] [background:linear-gradient(90deg,#000,#278083)] w-[1319px] h-[428px] [transform:rotate(180deg)] [transform-origin:0.0]" />
          <div className="absolute top-[71px] left-[calc(50%-625.55px)] w-[659px] h-[342px]">
            <div className="absolute top-[0px] left-[calc(50%-329.5px)] font-semibold">
              Our Vision
            </div>
            <div className="absolute top-[102px] left-[0px] text-num-18 leading-[30px] capitalize text-justify inline-block w-[659px] h-60">
              Our vision is to emerge as one of the leading IT companies known
              and recognized for our IT solution services, innovation, and
              integrity. We look forward to building a strong committed bond
              with our clients to optimise their business operations and be
              recognized for their work and services. We believe in automating
              your business with the help of cutting-edge technology services,
              and we aim to build a platform where businesses can integrate
              advanced technology and grow to their full potential.
              <br />
            </div>
          </div>
          {/* <Image
          className="absolute top-[0px] left-[795px] w-[584.1px] h-[510.3px] object-contain"
          width={584.1}
          height={510.3}
          sizes="100vw"
          alt="" src="/assets/images/aboutus/"
        /> */}
        </div>
        <div className="absolute top-[3678.35px] left-[calc(50%-659px)] w-num-1318 h-[453px] text-justify text-gray-100">
          <div className="absolute top-[116px] left-[calc(50%-498px)] text-num-20 text-black text-center opacity-[0.6]">
            At IT Solutions Worldwide, our values guide every decision, every
            solution, and every relationship. <br />
            They reflect our commitment to excellence, innovation, and integrity
            in a rapidly evolving digital world.
          </div>
          <div className="absolute top-[0px] left-[562px] w-[195px] h-num-25 text-left text-num-15 text-teal-100">
            <div className="absolute top-[0px] left-[0px] w-[195px] h-num-25">
              <div className="absolute top-[0px] left-[0px] rounded-[21.5px] border-silver-200 border-solid border-[1px] box-border w-[195px] h-num-25" />
              <div className="absolute top-[7px] left-[12px] w-[168px] h-[11px]">
                <div className="absolute top-[0px] left-[25px]">
                  Our Core Values
                </div>
                <Image
                  className="absolute top-[3px] left-[153px] w-[15px] h-2"
                  width={15}
                  height={8}
                  sizes="100vw"
                  alt=""
                  src="/assets/images/aboutus/"
                />
                <Image
                  className="absolute top-[3px] left-[0px] w-[15px] h-2 object-contain"
                  width={15}
                  height={8}
                  sizes="100vw"
                  alt=""
                  src="/assets/images/aboutus/"
                />
              </div>
            </div>
          </div>
          <div className="absolute top-[37px] left-[236px] text-num-45 font-semibold text-left text-black">
            <span>{`The `}</span>
            <span className="text-teal-100">Foundation</span>
            <span> of Everything We Do</span>
          </div>
          <div className="absolute top-[230px] left-[0px] shadow-[0px4px13pxrgba(0,0,0,0.07)] w-num-430 h-num-223">
            <div className="absolute top-[0px] left-[0px] rounded-[26.76px] bg-white w-num-430 h-num-223" />
            <div className="absolute top-[36px] left-[20px] w-num-390 h-[152px]">
              <div className="absolute top-[70px] left-[0px] inline-block w-num-390">
                We prioritize delivering top-tier IT solutions that enhance
                business operations, boost efficiency, and build lasting
                partnerships with clients, stakeholders, and collaborators.
              </div>
              <div className="absolute top-[0px] left-[0px] text-num-20 font-semibold text-black text-left inline-block w-[235px] h-[42px]">{`Client Commitment & <br/>Operational Excellence `}</div>
            </div>
            <div className="absolute top-[90px] left-[20px] border-teal-100 border-solid border-t-[3px] box-border w-[230px] h-[3px]" />
          </div>
          <div className="absolute top-[230px] left-[444px] shadow-[0px4px13pxrgba(0,0,0,0.07)] w-num-430 h-num-223">
            <div className="absolute top-[0px] left-[0px] rounded-[26.76px] bg-white w-num-430 h-num-223" />
            <div className="absolute top-[36px] left-[20px] w-num-390 h-[152px]">
              <div className="absolute top-[70px] left-[0px] inline-block w-num-390">
                We embrace modern technologies and agile thinking to craft
                efficient, forward-looking solutions that drive real results in
                dynamic markets.
              </div>
              <div className="absolute top-[0px] left-[0px] text-num-20 font-semibold text-black text-left inline-block w-[139px] h-[42px]">{`Innovation & Adaptability<br/>`}</div>
            </div>
            <div className="absolute top-[90px] left-[20px] border-teal-100 border-solid border-t-[3px] box-border w-[230px] h-[3px]" />
          </div>
          <div className="absolute top-[230px] left-[888px] shadow-[0px4px13pxrgba(0,0,0,0.07)] w-num-430 h-num-223">
            <div className="absolute top-[0px] left-[0px] rounded-[26.76px] bg-white w-num-430 h-num-223" />
            <div className="absolute top-[36px] left-[20px] w-num-390 h-[152px]">
              <div className="absolute top-[70px] left-[0px] inline-block w-num-390">
                We foster strong, transparent relationships—internally and
                externally—grounded in trust, teamwork, and a shared pursuit of
                excellence.
              </div>
              <div className="absolute top-[0px] left-[0px] text-num-20 font-semibold text-black text-left">{`Collaboration & <br/>Integrity`}</div>
            </div>
            <div className="absolute top-[90px] left-[20px] border-teal-100 border-solid border-t-[3px] box-border w-[230px] h-[3px]" />
          </div>
        </div>
        <div className="absolute top-[6588.12px] left-[63px] w-[1316px] flex items-start gap-[89.2px] text-num-1679 text-teal-200">
          <div className="flex flex-col items-start gap-[50.4px]">
            <div className="shadow-[0px0px1.05pxrgba(44,58,114,0.05),0px2.098883628845215px6.3pxrgba(44,58,114,0.05),0px10.494418144226074px18.89pxrgba(58,76,146,0.1)] rounded-[20.99px] bg-white border-lightsteelblue border-solid border-[1px] flex items-center py-[8.4px] px-[12.6px] gap-[8.4px] text-center">
              <Image
                className="h-[21px] w-[21px] relative object-cover"
                width={21}
                height={21}
                sizes="100vw"
                alt=""
                src="/assets/images/aboutus/"
              />
              <div className="relative leading-[160%] font-medium">FAQ</div>
            </div>
            <div className="w-[492.2px] flex flex-col items-start gap-[33.6px] text-[50.37px] text-gray-300">
              <b className="w-[562.5px] relative tracking-[-0.02em] leading-[62.97px] inline-block">
                Frequently Asked Questions
              </b>
              <div className="self-stretch relative text-num-1679 leading-num-2729 text-darkslategray">
                Feel free to make a call to our customer support helpline.
              </div>
            </div>
            <div className="flex items-start gap-[16.8px] text-white">
              <div className="rounded-[7.35px] bg-cadetblue-100 flex items-center justify-center py-num-0 px-[33.6px] gap-[12.6px]">
                <Image
                  className="h-252 w-252 relative"
                  width={25}
                  height={25}
                  sizes="100vw"
                  alt=""
                  src="/assets/images/aboutus/"
                />
                <b className="relative leading-[50.37px] capitalize">
                  Help Center
                </b>
              </div>
              <div className="rounded-[7.35px] border-cadetblue-100 border-solid border-[1px] flex items-center justify-center py-num-0 px-[33.6px] text-cadetblue-100">
                <b className="relative leading-[50.37px] capitalize">
                  privacy Policy
                </b>
              </div>
            </div>
          </div>
          <div className="w-[728.3px] shadow-[0px12.593301773071289px58.77pxrgba(6,28,61,0.08)] rounded-[20.99px] bg-white flex flex-col items-center justify-center py-[21px] px-num-0 box-border text-black">
            <div className="rounded-num-1259 bg-white flex items-center justify-center p-num-252 gap-[25.2px] text-gray-300">
              <div className="w-num-5793 relative leading-num-2729 font-medium inline-block shrink-0">
                What does your company do?
              </div>
              <Image
                className="h-num-252 w-num-252 relative"
                width={25.2}
                height={25.2}
                sizes="100vw"
                alt=""
                src="/assets/images/aboutus/"
              />
            </div>
            <div className="w-[728.3px] rounded-num-1259 bg-cadetblue-300 flex flex-col items-center justify-center pt-num-0 px-num-0 pb-num-252 box-border gap-[21px] text-white">
              <div className="self-stretch rounded-t-num-1259 rounded-b-none bg-teal-200 flex items-center justify-center p-[21px] gap-[25.2px]">
                <div className="w-num-5793 relative leading-num-2729 font-medium inline-block shrink-0">{`What industries do you serve? `}</div>
                <Image
                  className="h-num-252 w-num-252 relative"
                  width={25.2}
                  height={25.2}
                  sizes="100vw"
                  alt=""
                  src="/assets/images/aboutus/"
                />
              </div>
              <div className="w-[629.7px] relative leading-num-2729 text-darkslategray inline-block opacity-[0.8]">
                We work with different businesses across various industries
                including healthcare, manufacturing, supply chain, technology,
                logistics, finance, etc. 
              </div>
            </div>
            <div className="rounded-num-1259 bg-white flex items-center justify-center p-num-252 gap-[25.2px]">
              <div className="w-num-5793 relative leading-num-2729 font-medium inline-block shrink-0">
                How can I get in touch with you?
              </div>
              <Image
                className="h-num-252 w-num-252 relative"
                width={25.2}
                height={25.2}
                sizes="100vw"
                alt=""
                src="/assets/images/aboutus/"
              />
            </div>
            <div className="w-[723.1px] h-px relative border-whitesmoke-200 border-solid border-t-[1px] box-border" />
            <div className="rounded-num-1259 bg-white flex items-center justify-center p-num-252 gap-[25.2px]">
              <div className="w-num-5793 relative leading-num-2729 font-medium inline-block shrink-0">
                Do you offer ongoing support after service delivery?
              </div>
              <Image
                className="h-num-252 w-num-252 relative"
                width={25.2}
                height={25.2}
                sizes="100vw"
                alt=""
                src="/assets/images/aboutus/"
              />
            </div>
            <div className="w-[723.1px] h-px relative border-whitesmoke-200 border-solid border-t-[1px] box-border" />
            <div className="rounded-num-1259 bg-white flex items-center justify-center p-num-252 gap-[25.2px]">
              <div className="w-num-5793 relative leading-num-2729 font-medium inline-block shrink-0">
                Do you provide consultations before starting a project?
              </div>
              <Image
                className="h-num-252 w-num-252 relative"
                width={25.2}
                height={25.2}
                sizes="100vw"
                alt=""
                src="/assets/images/aboutus/"
              />
            </div>
            <div className="w-[723.1px] h-px relative border-whitesmoke-200 border-solid border-t-[1px] box-border" />
            <div className="rounded-num-1259 bg-white flex items-center justify-center p-num-252 gap-[25.2px]">
              <div className="w-num-5793 relative leading-num-2729 font-medium inline-block shrink-0">
                How can I learn more about your services?
              </div>
              <Image
                className="h-num-252 w-num-252 relative"
                width={25.2}
                height={25.2}
                sizes="100vw"
                alt=""
                src="/assets/images/aboutus/"
              />
            </div>
          </div>
        </div>
        <div className="absolute top-[5774.12px] left-[62px] w-num-1318 h-[664px] text-num-20 text-black">
          <div className="absolute top-[0px] left-[0px] rounded-[23px] [background:linear-gradient(-90deg,#000,#278083)] w-num-1318 h-[664px]" />
          <Image
            className="absolute top-[-214.02px] left-[300px] w-[1105px] h-[1096px] object-cover mix-blend-luminosity"
            width={1105}
            height={1096}
            sizes="100vw"
            alt=""
            src="/assets/images/aboutus/"
          />
          <div className="absolute top-[155px] left-[calc(50%-623px)] w-[1245px] h-[446px]">
            <div className="absolute top-[0px] left-[calc(50%-622.5px)] w-[1245px] overflow-x-auto flex items-center justify-center gap-6">
              <div className="w-96 shadow-[0px9px53.7pxrgba(0,0,0,0.12)] rounded-num-20 bg-white overflow-hidden shrink-0 flex flex-col items-start justify-center">
                <div className="self-stretch flex flex-col items-start p-num-32 gap-4">
                  <div className="self-stretch relative leading-[160%]">
                    Amet morbi enim sodales quis dui, in habitant pharetra.
                    Risus id fringilla sed adipiscing volutpat sit varius
                    turpis. Sed pretium semper rhoncus, tellus semper.
                  </div>
                  <div className="self-stretch flex items-center pt-num-16 px-num-0 pb-num-0 gap-4 text-num-18 text-teal-200">
                    <Image
                      className="h-16 w-16 rounded-num-100 object-cover"
                      width={64}
                      height={64}
                      sizes="100vw"
                      alt=""
                      src="/assets/images/aboutus/"
                    />
                    <div className="flex-1 flex flex-col items-start">
                      <b className="self-stretch relative leading-[160%]">
                        Ralph Edwards
                      </b>
                      <div className="self-stretch relative text-num-16 leading-[140%] text-lightslategray-100">
                        Product Designer
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-96 shadow-[0px9px53.7pxrgba(0,0,0,0.12)] rounded-num-20 bg-white overflow-hidden shrink-0 flex flex-col items-start justify-center">
                <div className="self-stretch flex flex-col items-start p-num-32 gap-4">
                  <div className="self-stretch relative leading-[160%]">
                    Aliquet ridiculus mi porta habitant vulputate rhoncus,
                    mattis amet enim. Sit purus venenatis velit semper lectus
                    sed ornare quam nulla. Lacus, ut congue sagittis vel nisi
                    integer imperdiet a vitae.
                  </div>
                  <div className="self-stretch flex items-center pt-num-16 px-num-0 pb-num-0 gap-4 text-num-18 text-teal-200">
                    <Image
                      className="h-16 w-16 rounded-num-100 object-cover"
                      width={64}
                      height={64}
                      sizes="100vw"
                      alt=""
                      src="/assets/images/aboutus/"
                    />
                    <div className="flex-1 flex flex-col items-start">
                      <b className="self-stretch relative leading-[160%]">
                        Hellena John
                      </b>
                      <div className="self-stretch relative text-num-16 leading-[140%] text-lightslategray-100">
                        Co-founder
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-96 shadow-[0px9px53.7pxrgba(0,0,0,0.12)] rounded-num-20 bg-white overflow-hidden shrink-0 flex flex-col items-start justify-center">
                <div className="self-stretch flex flex-col items-start p-num-32 gap-4">
                  <div className="self-stretch relative leading-[160%]">
                    A eget sed posuere dui risus habitasse mauris. Venenatis
                    aliquet id ultrices a lacus. Pretium vehicula pretium
                    posuere justo sed lorem cursus.
                  </div>
                  <div className="self-stretch flex items-center pt-num-16 px-num-0 pb-num-0 gap-4 text-num-18 text-teal-200">
                    <Image
                      className="h-16 w-16 rounded-num-100 object-cover"
                      width={64}
                      height={64}
                      sizes="100vw"
                      alt=""
                      src="/assets/images/aboutus/"
                    />
                    <div className="flex-1 flex flex-col items-start">
                      <b className="self-stretch relative leading-[160%]">
                        David Oshodi
                      </b>
                      <div className="self-stretch relative text-num-16 leading-[140%] text-lightslategray-100">
                        Manager
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-96 shadow-[0px9px53.7pxrgba(0,0,0,0.12)] rounded-num-20 bg-mediumturquoise overflow-hidden shrink-0 flex flex-col items-start justify-center">
                <div className="self-stretch flex flex-col items-start p-num-32 gap-4">
                  <div className="self-stretch relative leading-[160%]">
                    Aliquet ridiculus mi porta habitant vulputate rhoncus,
                    mattis amet enim. Sit purus venenatis velit semper lectus
                    sed ornare quam nulla. Lacus, ut congue sagittis vel nisi
                    integer imperdiet a vitae.
                  </div>
                  <div className="self-stretch flex items-center pt-num-16 px-num-0 pb-num-0 gap-4 text-num-18">
                    <Image
                      className="h-16 w-16 rounded-num-100 object-cover"
                      width={64}
                      height={64}
                      sizes="100vw"
                      alt=""
                      src="/assets/images/aboutus/"
                    />
                    <div className="flex-1 flex flex-col items-start">
                      <b className="self-stretch relative leading-[160%]">
                        Hellena John
                      </b>
                      <div className="self-stretch relative text-num-16 leading-[140%] text-white">
                        Co-founder
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-96 shadow-[0px9px53.7pxrgba(0,0,0,0.12)] rounded-num-20 bg-white overflow-hidden shrink-0 flex flex-col items-start justify-center">
                <div className="self-stretch flex flex-col items-start p-num-32 gap-4">
                  <div className="self-stretch relative leading-[160%]">
                    A eget sed posuere dui risus habitasse mauris. Venenatis
                    aliquet id ultrices a lacus. Pretium vehicula pretium
                    posuere justo sed lorem cursus.
                  </div>
                  <div className="self-stretch flex items-center pt-num-16 px-num-0 pb-num-0 gap-4 text-num-18 text-teal-200">
                    <Image
                      className="h-16 w-16 rounded-num-100 object-cover"
                      width={64}
                      height={64}
                      sizes="100vw"
                      alt=""
                      src="/assets/images/aboutus/"
                    />
                    <div className="flex-1 flex flex-col items-start">
                      <b className="self-stretch relative leading-[160%]">
                        David Oshodi
                      </b>
                      <div className="self-stretch relative text-num-16 leading-[140%] text-lightslategray-100">
                        Manager
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-96 shadow-[0px9px53.7pxrgba(0,0,0,0.12)] rounded-num-20 bg-white overflow-hidden shrink-0 flex flex-col items-start justify-center">
                <div className="self-stretch flex flex-col items-start p-num-32 gap-4">
                  <div className="self-stretch relative leading-[160%]">
                    A eget sed posuere dui risus habitasse mauris. Venenatis
                    aliquet id ultrices a lacus. Pretium vehicula pretium
                    posuere justo sed lorem cursus.
                  </div>
                  <div className="self-stretch flex items-center pt-num-16 px-num-0 pb-num-0 gap-4 text-num-18 text-teal-200">
                    <Image
                      className="h-16 w-16 rounded-num-100 object-cover"
                      width={64}
                      height={64}
                      sizes="100vw"
                      alt=""
                      src="/assets/images/aboutus/"
                    />
                    <div className="flex-1 flex flex-col items-start">
                      <b className="self-stretch relative leading-[160%]">
                        David Oshodi
                      </b>
                      <div className="self-stretch relative text-num-16 leading-[140%] text-lightslategray-100">
                        Manager
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-96 shadow-[0px9px53.7pxrgba(0,0,0,0.12)] rounded-num-20 bg-white overflow-hidden shrink-0 flex flex-col items-start justify-center">
                <div className="self-stretch flex flex-col items-start p-num-32 gap-4">
                  <div className="self-stretch relative leading-[160%]">
                    Magna egestas aliquet ut integer non. Sed diam enim nibh
                    sit. Aliquam laoreet aenean metus nibh eu scelerisque.
                  </div>
                  <div className="self-stretch flex items-center pt-num-16 px-num-0 pb-num-0 gap-4 text-num-18 text-teal-200">
                    <Image
                      className="h-16 w-16 rounded-num-100 object-cover"
                      width={64}
                      height={64}
                      sizes="100vw"
                      alt=""
                      src="/assets/images/aboutus/"
                    />
                    <div className="flex-1 flex flex-col items-start">
                      <b className="self-stretch relative leading-[160%]">
                        Charolette Hanlin
                      </b>
                      <div className="self-stretch relative text-num-16 leading-[140%] text-lightslategray-100">
                        CEO
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Image
              className="absolute top-[432px] left-[571px] w-[102px] h-3.5"
              width={102}
              height={14}
              sizes="100vw"
              alt=""
              src="/assets/images/aboutus/"
            />
          </div>
          <b className="absolute top-[52px] left-[calc(50%-365px)] text-[36px] leading-[110%] inline-block text-white text-center w-[728px]">
            Success Stories from Around the World
          </b>
        </div>
        <div className="absolute top-[8004px] left-[89px] w-[1257px] flex flex-col items-start gap-[66px] text-num-16 text-gray-300">
          <div className="self-stretch flex items-start justify-center gap-4">
            <div className="w-[804px] flex items-start gap-5">
              <div className="w-[275px] flex flex-col items-start gap-6 text-teal-200">
                <Image
                  className="w-[133px] h-[157px] relative object-cover"
                  width={133}
                  height={157}
                  sizes="100vw"
                  alt=""
                  src="/assets/images/aboutus/"
                />
                <div className="w-64 relative leading-num-24 font-medium inline-block">{`OFFICE TIMINGS: MONDAY TO FRIDAY (09:00) - 18:00) `}</div>
              </div>
              <div className="w-36 flex flex-col items-start gap-6">
                <div className="w-num-200 relative tracking-[0.01em] leading-[100%] uppercase font-medium inline-block">
                  Quick Links
                </div>
                <div className="flex flex-col items-start text-lightslategray-200">
                  <div className="w-num-200 h-9 relative">
                    <div className="absolute top-[calc(50%-12px)] left-[0px] leading-num-24 font-medium">
                      About
                    </div>
                  </div>
                  <div className="w-num-200 h-9 relative">
                    <div className="absolute top-[calc(50%-12px)] left-[0px] leading-num-24 font-medium">
                      Services
                    </div>
                  </div>
                  <div className="w-num-200 h-9 relative">
                    <div className="absolute top-[calc(50%-12px)] left-[0px] leading-num-24 font-medium">
                      SCM Tool
                    </div>
                  </div>
                  <div className="w-num-200 h-9 relative">
                    <div className="absolute top-[calc(50%-12px)] left-[0px] leading-num-24 font-medium">
                      Contact
                    </div>
                  </div>
                  <div className="w-num-200 h-9 relative">
                    <div className="absolute top-[calc(50%-12px)] left-[0px] leading-num-24 font-medium">
                      Blog
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[145px] flex flex-col items-start gap-6">
                <div className="w-num-200 h-6 relative leading-num-24 uppercase font-medium inline-block shrink-0">
                  Services
                </div>
                <div className="flex flex-col items-start text-lightslategray-200">
                  <div className="w-num-200 h-9 relative">
                    <div className="absolute top-[calc(50%-12px)] left-[0px] leading-num-24 font-medium">
                      SCM Services
                    </div>
                  </div>
                  <div className="w-num-200 h-9 relative">
                    <div className="absolute top-[calc(50%-12px)] left-[0px] leading-num-24 font-medium">
                      IT Support
                    </div>
                  </div>
                  <div className="w-num-200 h-9 relative">
                    <div className="absolute top-[calc(50%-12px)] left-[0px] leading-num-24 font-medium">
                      Oracle Cloud
                    </div>
                  </div>
                  <div className="w-num-200 h-9 relative">
                    <div className="absolute top-[calc(50%-12px)] left-[0px] leading-num-24 font-medium">
                      Digital Services
                    </div>
                  </div>
                  <div className="w-num-200 h-9 relative">
                    <div className="absolute top-[calc(50%-12px)] left-[0px] leading-num-24 font-medium">
                      Staffing Support
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[228px] w-[164px] flex flex-col items-start gap-6">
                <div className="w-num-200 h-6 relative leading-num-24 uppercase font-medium inline-block shrink-0">
                  Company
                </div>
                <div className="w-[167px] flex flex-col items-start text-lightslategray-200">
                  <div className="w-num-200 h-9 relative">
                    <div className="absolute top-[calc(50%-12px)] left-[0px] leading-num-24 font-medium">
                      Help Centre
                    </div>
                  </div>
                  <div className="w-num-200 h-9 relative">
                    <div className="absolute top-[calc(50%-12px)] left-[0px] leading-num-24 font-medium">
                      FAQ
                    </div>
                  </div>
                  <div className="w-num-200 h-9 relative">
                    <div className="absolute top-[calc(50%-12px)] left-[0px] leading-num-24 font-medium">
                      Career
                    </div>
                  </div>
                  <div className="w-num-200 h-9 relative">
                    <div className="absolute top-[calc(50%-12px)] left-[0px] leading-num-24 font-medium">{`Terms & Conditions`}</div>
                  </div>
                  <div className="w-num-200 h-9 relative">
                    <div className="absolute top-[calc(50%-12px)] left-[0px] leading-num-24 font-medium">{`Privacy & Policy`}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[437px] flex flex-col items-start gap-7 text-[24px]">
              <div className="self-stretch h-[201px] flex flex-col items-start gap-6">
                <div className="w-num-434 flex flex-col items-start gap-3">
                  <div className="w-[576px] relative leading-8 inline-block">
                    Subscribe to our newsletter
                  </div>
                  <div className="w-num-434 relative text-num-18 leading-[26px] text-darkslategray inline-block">
                    Stay Updated with the Latest Industry Trends
                  </div>
                </div>
                <div className="w-[437px] flex flex-col items-start gap-3 text-num-16 text-lightslategray-200">
                  <div className="self-stretch h-12 relative rounded-[5px] bg-white border-gainsboro-100 border-solid border-[1px] box-border">
                    <Image
                      className="absolute top-[calc(50%-12px)] left-[18px] w-6 h-6"
                      width={24}
                      height={24}
                      sizes="100vw"
                      alt=""
                      src="/assets/images/aboutus/"
                    />
                    <div className="absolute top-[calc(50%-12px)] left-[54px] leading-num-24 font-light">
                      Email address
                    </div>
                  </div>
                  <div className="self-stretch rounded-[5px] bg-teal-200 flex items-center justify-center py-num-0 px-5 text-[14px] text-white">
                    <div className="relative leading-[44px] capitalize font-medium">
                      Subscribe
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex items-center gap-4">
                <Image
                  className="h-6 w-6 relative"
                  width={24}
                  height={24}
                  sizes="100vw"
                  alt=""
                  src="/assets/images/aboutus/"
                />
                <Image
                  className="h-6 w-6 relative"
                  width={24}
                  height={24}
                  sizes="100vw"
                  alt=""
                  src="/assets/images/aboutus/"
                />
                <Image
                  className="h-6 w-6 relative"
                  width={24}
                  height={24}
                  sizes="100vw"
                  alt=""
                  src="/assets/images/aboutus/"
                />
                <Image
                  className="h-6 w-6 relative"
                  width={24}
                  height={24}
                  sizes="100vw"
                  alt=""
                  src="/assets/images/aboutus/"
                />
                <Image
                  className="h-6 w-6 relative"
                  width={24}
                  height={24}
                  sizes="100vw"
                  alt=""
                  src="/assets/images/aboutus/"
                />
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start relative gap-8 text-center">
            <div className="w-[1258px] h-px relative border-gainsboro-100 border-solid border-t-[1px] box-border z-[0]" />
            <div className="w-[339px] relative leading-num-24 inline-block z-[1]">
              {" "}
              © ITSolutionsWorldwide. All right reserved
            </div>
            <div className="w-[304px] h-[22px] absolute !!m-[0 important] top-[34px] left-[953px] tracking-[0.26px] leading-4 inline-block z-[2]">
              Chamber of Commerce No. 72768916
            </div>
          </div>
        </div>
        <div className="absolute top-[5077.12px] left-[calc(50%-633px)] w-[1266px] h-[547px] text-num-45 text-black">
          <div className="absolute top-[0px] left-[calc(50%-155px)] font-semibold">
            Our Expertise
          </div>
          <div className="absolute top-[122px] left-[0px] w-[1266px] h-[425px] text-center text-num-20 text-teal-100">
            <Image
              className="absolute top-[65.28px] left-[27.5px] w-[1170.5px] h-[132.2px]"
              width={1170.5}
              height={132.2}
              sizes="100vw"
              alt=""
              src="/assets/images/aboutus/"
            />
            <div className="absolute top-[0px] left-[0px] w-num-228 h-[353px]">
              <div className="absolute top-[0px] left-[16px] w-[196.7px] h-[196.7px]">
                <div className="absolute top-[0px] left-[0px] w-[196.7px] h-[196.7px] opacity-num-0">
                  <div className="absolute top-[0px] left-[0px] rounded-num-50 bg-teal-100 w-[196.7px] h-[196.7px]" />
                  <div className="absolute top-[1.74px] left-[134.74px] shadow-[6.352941989898682px7.623530387878418px13.98pxrgba(0,0,0,0.04)] rounded-num-50 bg-white w-num-513 h-num-513" />
                  <div className="absolute top-[55.74px] left-[55.74px] w-num-87 h-num-87">
                    <div className="absolute top-[-29.71px] left-[-40.32px] bg-white w-[159.1px] h-[148.5px]" />
                  </div>
                  <b className="absolute top-[14.74px] left-[146.74px] leading-[120%]">
                    01
                  </b>
                </div>
                <div className="absolute top-[0px] left-[0px] w-num-196 h-num-196 text-white">
                  <div className="absolute top-[0px] left-[0px] shadow-[23.05882453918457px27.670589447021484px50.73pxrgba(0,0,0,0.04)] rounded-num-50 bg-white w-num-196 h-num-196" />
                  <div className="absolute top-[0.27px] left-[133.74px] rounded-num-50 bg-teal-100 w-num-513 h-num-513" />
                  <div className="absolute top-[55px] left-[55px] w-num-87 h-num-87">
                    <div className="absolute top-[-29.71px] left-[-40.32px] bg-teal-100 w-[159.1px] h-[148.5px]" />
                  </div>
                  <b className="absolute top-[14px] left-[146px] leading-[120%]">
                    01
                  </b>
                </div>
              </div>
              <b className="absolute top-[220px] left-[43px] leading-[120%] text-gray-200">
                Supply Chain <br />
                Services
              </b>
              <div className="absolute top-[294px] left-[0px] text-num-18 text-gray-100 inline-block w-num-228">
                Streamlining logistics and operations for faster, smarter
                delivery.
              </div>
            </div>
            <div className="absolute top-[0px] left-[692px] w-num-228 h-[353px]">
              <div className="absolute top-[0px] left-[16px] w-num-196 h-num-196">
                <div className="absolute top-[0px] left-[0px] w-num-196 h-num-196">
                  <div className="absolute top-[0px] left-[0px] w-num-196 h-num-196 opacity-num-0">
                    <div className="absolute top-[0px] left-[0px] shadow-[23.05882453918457px27.670589447021484px50.73pxrgba(0,0,0,0.04)] rounded-num-50 bg-teal-100 w-num-196 h-num-196" />
                    <div className="absolute top-[0.27px] left-[133.74px] rounded-num-50 bg-white w-num-513 h-num-513" />
                    <b className="absolute top-[12px] left-[145px] leading-[120%]">
                      03
                    </b>
                    <div className="absolute top-[55px] left-[54.5px] w-num-87 h-num-87">
                      <div className="absolute top-[-17.4px] left-[-16.31px] bg-white w-[121.8px] h-[119.6px]" />
                    </div>
                  </div>
                  <div className="absolute top-[0px] left-[0px] w-num-196 h-num-196 text-white">
                    <div className="absolute top-[0px] left-[0px] shadow-[23.05882453918457px27.670589447021484px50.73pxrgba(0,0,0,0.04)] rounded-num-50 bg-white w-num-196 h-num-196" />
                    <div className="absolute top-[0.27px] left-[133.74px] rounded-num-50 bg-teal-100 w-num-513 h-num-513" />
                    <b className="absolute top-[12px] left-[145px] leading-[120%]">
                      03
                    </b>
                    <div className="absolute top-[55px] left-[54.5px] w-num-87 h-num-87">
                      <div className="absolute top-[-17.4px] left-[-16.31px] bg-teal-100 w-[121.8px] h-[119.6px]" />
                    </div>
                  </div>
                </div>
              </div>
              <b className="absolute top-[220px] left-[21px] leading-[120%] text-gray-200">{`Digital Marketing <br/>& E-commerce`}</b>
              <div className="absolute top-[294px] left-[0px] text-num-18 text-gray-100 inline-block w-num-228">
                Driving online growth through strategy, content, and conversion.
              </div>
            </div>
            <div className="absolute top-[74px] left-[346px] w-num-228 h-[351px]">
              <div className="absolute top-[0px] left-[16px] w-num-196 h-num-196">
                <div className="absolute top-[0px] left-[0px] w-num-196 h-num-196">
                  <div className="absolute top-[0px] left-[0px] w-num-196 h-num-196 opacity-num-0">
                    <div className="absolute top-[0px] left-[0px] shadow-[23.05882453918457px27.670589447021484px50.73pxrgba(0,0,0,0.04)] rounded-num-50 bg-teal-100 w-num-196 h-num-196" />
                    <div className="absolute top-[0.27px] left-[133.74px] rounded-num-50 bg-white w-num-513 h-num-513" />
                    <b className="absolute top-[14px] left-[146px] leading-[120%]">
                      02
                    </b>
                    <div className="absolute top-[55px] left-[54.5px] w-num-87 h-num-87">
                      <div className="absolute top-[-14.85px] left-[-13.79px] bg-white w-[118.8px] h-[116.7px]" />
                    </div>
                  </div>
                  <div className="absolute top-[0px] left-[0px] w-num-196 h-num-196 text-white">
                    <div className="absolute top-[0px] left-[0px] shadow-[23.05882453918457px27.670589447021484px50.73pxrgba(0,0,0,0.04)] rounded-num-50 bg-white w-num-196 h-num-196" />
                    <div className="absolute top-[0.27px] left-[133.74px] rounded-num-50 bg-teal-100 w-num-513 h-num-513" />
                    <b className="absolute top-[14px] left-[146px] leading-[120%]">
                      02
                    </b>
                    <div className="absolute top-[55px] left-[54.5px] w-num-87 h-num-87">
                      <div className="absolute top-[-14.85px] left-[-13.79px] bg-teal-100 w-[118.8px] h-[116.7px]" />
                    </div>
                  </div>
                </div>
              </div>
              <b className="absolute top-[220px] left-[44px] leading-[120%] text-gray-200">
                IT and Cloud <br />
                Solutions
              </b>
              <div className="absolute top-[292px] left-[0px] text-num-18 text-gray-100 inline-block w-num-228">
                Secure, scalable systems built for modern business needs.
              </div>
            </div>
            <div className="absolute top-[74px] left-[1038px] w-num-228 h-[351px]">
              <div className="absolute top-[0px] left-[16px] w-num-196 h-num-196">
                <div className="absolute top-[0px] left-[0px] w-num-196 h-num-196">
                  <div className="absolute top-[0px] left-[0px] w-num-196 h-num-196 opacity-num-0">
                    <div className="absolute top-[0px] left-[0px] shadow-[23.05882453918457px27.670589447021484px50.73pxrgba(0,0,0,0.04)] rounded-num-50 bg-teal-100 w-num-196 h-num-196" />
                    <div className="absolute top-[0px] left-[134px] rounded-num-50 bg-white w-num-513 h-num-513" />
                    <b className="absolute top-[12px] left-[145px] leading-[120%]">
                      04
                    </b>
                    <div className="absolute top-[55px] left-[55px] w-num-87 h-num-87">
                      <div className="absolute top-[-13.84px] left-[-11.86px] bg-white w-[110.7px] h-[108.8px]" />
                    </div>
                  </div>
                  <div className="absolute top-[0px] left-[0px] w-num-196 h-num-196 text-white">
                    <div className="absolute top-[0px] left-[0px] shadow-[23.05882453918457px27.670589447021484px50.73pxrgba(0,0,0,0.04)] rounded-num-50 bg-white w-num-196 h-num-196" />
                    <div className="absolute top-[0px] left-[134px] rounded-num-50 bg-teal-100 w-num-513 h-num-513" />
                    <b className="absolute top-[12px] left-[145px] leading-[120%]">
                      04
                    </b>
                    <div className="absolute top-[55px] left-[55px] w-num-87 h-num-87">
                      <div className="absolute top-[-13.84px] left-[-11.86px] bg-teal-100 w-[110.7px] h-[108.8px]" />
                    </div>
                  </div>
                </div>
              </div>
              <b className="absolute top-[220px] left-[47px] leading-[120%] text-gray-200">
                Staffing and <br />
                Support
              </b>
              <div className="absolute top-[292px] left-[0px] text-num-18 text-gray-100 inline-block w-num-228">
                Flexible talent and technical support to keep you running
                strong.
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[4281.35px] left-[60px] w-[1319.4px] h-[645.8px] text-[84px] text-black">
          <div className="absolute top-[0px] left-[0px] w-[854px] h-[217px]">
            <div className="absolute top-[45px] left-[0px] leading-[86px] font-semibold inline-block w-[795px]">
              <span>{`The Creative team behind `}</span>
              <span className="text-teal-100">the door</span>
            </div>
            <div className="absolute top-[0px] left-[0px] text-num-20 opacity-[0.6]">
              Ask not what your teammates can do for you. Ask what you can do
              for your teammates.
            </div>
          </div>
          <div className="absolute top-[296px] left-[678.72px] w-num-3014 h-num-3498 text-[5.26px]">
            <div className="absolute top-[-0.23px] left-[0px] w-num-3014 h-[350px]">
              <Image
                className="absolute top-[0.23px] left-[0px] rounded-num-1089 w-num-3014 h-num-3498 object-cover"
                width={301.4}
                height={349.8}
                sizes="100vw"
                alt=""
                src="/assets/images/aboutus/"
              />
              <div className="absolute top-[0px] left-[0px] [backdrop-filter:blur(24px)] rounded-num-1089 bg-gainsboro-500 w-num-3014 h-num-3498 opacity-num-0" />
              <div className="absolute top-[215.22px] left-[122px] w-[57px] h-[41px] opacity-num-0">
                <div className="absolute top-[0px] left-[0px] rounded-[2.31px] bg-white w-[57px] h-[41px]" />
                <div className="absolute top-[4.63px] left-[3.37px] w-[50.3px] h-[31.6px]">
                  <div className="absolute top-[0px] left-[8.41px] w-[34px] h-3">
                    <div className="absolute top-[0px] left-[0px] font-semibold">
                      Daniel Smith
                    </div>
                    <div className="absolute top-[7.99px] left-[3.58px] text-[3.37px] text-teal-100">
                      Digital Marketer
                    </div>
                  </div>
                  <div className="absolute top-[18.3px] left-[0px] border-gainsboro-300 border-solid border-t-[0.2px] box-border w-[50.5px] h-[0.2px]" />
                  <div className="absolute top-[24.4px] left-[7.78px] w-[35px] h-num-72">
                    <div className="absolute top-[0px] left-[0px] w-[7.2px] h-num-72">
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
                        <Image
                          className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                          width={7.2}
                          height={7.2}
                          sizes="100vw"
                          alt=""
                          src="/assets/images/aboutus/"
                        />
                        <Image
                          className="absolute h-[76.39%] w-[40.28%] top-[22.63%] right-[30.31%] bottom-[0.98%] left-[29.41%] max-w-full overflow-hidden max-h-full"
                          width={2.9}
                          height={5.5}
                          sizes="100vw"
                          alt=""
                          src="/assets/images/aboutus/"
                        />
                      </div>
                    </div>
                    <div className="absolute top-[0px] left-[9.27px] w-[7.2px] h-num-72">
                      <Image
                        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                        width={7.2}
                        height={7.2}
                        sizes="100vw"
                        alt=""
                        src="/assets/images/aboutus/"
                      />
                    </div>
                    <div className="absolute top-[0px] left-[18.53px] w-[7.2px] h-num-72">
                      <Image
                        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                        width={7.2}
                        height={7.2}
                        sizes="100vw"
                        alt=""
                        src="/assets/images/aboutus/"
                      />
                    </div>
                    <div className="absolute top-[0px] left-[27.8px] w-[7.2px] h-num-72">
                      <Image
                        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                        width={7.2}
                        height={7.2}
                        sizes="100vw"
                        alt=""
                        src="/assets/images/aboutus/"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-[296px] left-[0px] w-num-3014 h-num-3498 text-[8.95px]">
            <div className="absolute top-[-0.23px] left-[0px] w-num-3014 h-[350px]">
              <Image
                className="absolute top-[0.23px] left-[0px] rounded-num-1089 w-num-3014 h-num-3498 object-cover"
                width={301.4}
                height={349.8}
                sizes="100vw"
                alt=""
                src="/assets/images/aboutus/"
              />
              <div className="absolute top-[0px] left-[0px] [backdrop-filter:blur(24px)] rounded-num-1089 bg-gainsboro-500 w-num-3014 h-num-3498 opacity-num-0" />
              <div className="absolute top-[200.83px] left-[102px] w-[97px] h-[69.8px] opacity-num-0">
                <div className="absolute top-[0px] left-[0px] rounded-[3.94px] bg-white w-[97px] h-[69.8px]" />
                <div className="absolute top-[7.87px] left-[calc(50%-42.77px)] w-[85.5px] h-[53.7px]">
                  <div className="absolute top-[0px] left-[calc(50%-32.37px)] w-[65px] h-[20.6px]">
                    <div className="absolute top-[0px] left-[calc(50%-32.5px)] font-semibold">
                      Ambert Daniel
                    </div>
                    <div className="absolute top-[13.6px] left-[10.02px] text-[5.73px] text-teal-100">{`CEO & Founder`}</div>
                  </div>
                  <div className="absolute top-[31.14px] left-[0px] border-gainsboro-300 border-solid border-t-[0.4px] box-border w-[85.9px] h-[0.4px]" />
                  <div className="absolute top-[41.52px] left-[13.24px] w-[59.5px] h-num-122">
                    <div className="absolute top-[0px] left-[0px] w-[12.2px] h-num-122">
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
                        <Image
                          className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                          width={12.2}
                          height={12.2}
                          sizes="100vw"
                          alt=""
                          src="/assets/images/aboutus/"
                        />
                        <Image
                          className="absolute h-[77.05%] w-[40.98%] top-[22.73%] right-[29.48%] bottom-[0.22%] left-[29.54%] max-w-full overflow-hidden max-h-full"
                          width={5}
                          height={9.4}
                          sizes="100vw"
                          alt=""
                          src="/assets/images/aboutus/"
                        />
                      </div>
                    </div>
                    <div className="absolute top-[0px] left-[15.77px] w-[12.2px] h-num-122">
                      <Image
                        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                        width={12.2}
                        height={12.2}
                        sizes="100vw"
                        alt=""
                        src="/assets/images/aboutus/"
                      />
                    </div>
                    <div className="absolute top-[0px] left-[31.54px] w-[12.2px] h-num-122">
                      <Image
                        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                        width={12.2}
                        height={12.2}
                        sizes="100vw"
                        alt=""
                        src="/assets/images/aboutus/"
                      />
                    </div>
                    <div className="absolute top-[0px] left-[47.31px] w-[12.2px] h-num-122">
                      <Image
                        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                        width={12.2}
                        height={12.2}
                        sizes="100vw"
                        alt=""
                        src="/assets/images/aboutus/"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-[296px] left-[339.36px] w-num-3014 h-num-3498 text-[6.92px]">
            <div className="absolute top-[-0.23px] left-[0px] w-num-3014 h-[350px]">
              <Image
                className="absolute top-[0.23px] left-[0px] rounded-num-1089 w-num-3014 h-num-3498 object-cover"
                width={301.4}
                height={349.8}
                sizes="100vw"
                alt=""
                src="/assets/images/aboutus/"
              />
              <div className="absolute top-[0px] left-[0px] [backdrop-filter:blur(24px)] rounded-num-1089 bg-gainsboro-500 w-num-3014 h-num-3498 opacity-num-0" />
              <div className="absolute top-[208.74px] left-[113px] w-[75px] h-[54px] opacity-num-0">
                <div className="absolute top-[0px] left-[0px] rounded-[3.04px] bg-white w-[75px] h-[54px]" />
                <div className="absolute top-[6.09px] left-[calc(50%-33.07px)] w-[66.1px] h-[41.5px]">
                  <div className="absolute top-[0px] left-[calc(50%-22.81px)] w-[46px] h-[16.5px]">
                    <div className="absolute top-[0px] left-[calc(50%-23px)] font-semibold">
                      Milano Digits
                    </div>
                    <div className="absolute top-[10.52px] left-[9.69px] text-[4.43px] text-teal-100">
                      CO-Founder
                    </div>
                  </div>
                  <div className="absolute top-[24.08px] left-[0px] border-gainsboro-300 border-solid border-t-[0.3px] box-border w-[66.4px] h-[0.3px]" />
                  <div className="absolute top-[32.1px] left-[10.24px] w-[46px] h-num-94">
                    <div className="absolute top-[0px] left-[0px] w-[9.4px] h-num-94">
                      <Image
                        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                        width={9.4}
                        height={9.4}
                        sizes="100vw"
                        alt=""
                        src="/assets/images/aboutus/"
                      />
                    </div>
                    <div className="absolute top-[0px] left-[12.19px] w-[9.4px] h-num-94">
                      <Image
                        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                        width={9.4}
                        height={9.4}
                        sizes="100vw"
                        alt=""
                        src="/assets/images/aboutus/"
                      />
                    </div>
                    <div className="absolute top-[0px] left-[24.38px] w-[9.4px] h-num-94">
                      <Image
                        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                        width={9.4}
                        height={9.4}
                        sizes="100vw"
                        alt=""
                        src="/assets/images/aboutus/"
                      />
                    </div>
                    <div className="absolute top-[0px] left-[36.58px] w-[9.4px] h-num-94">
                      <Image
                        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                        width={9.4}
                        height={9.4}
                        sizes="100vw"
                        alt=""
                        src="/assets/images/aboutus/"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-[296px] left-[1018.08px] w-num-3014 h-num-3498 text-[6.73px]">
            <div className="absolute top-[0px] left-[0px] w-num-3014 h-num-3498">
              <Image
                className="absolute top-[0px] left-[0px] rounded-num-1089 w-num-3014 h-num-3498 object-cover"
                width={301.4}
                height={349.8}
                sizes="100vw"
                alt=""
                src="/assets/images/aboutus/"
              />
              <div className="absolute top-[0px] left-[0px] [backdrop-filter:blur(24px)] rounded-num-1089 bg-gainsboro-500 w-num-3014 h-num-3498 opacity-num-0" />
              <div className="absolute top-[209.24px] left-[114px] w-[73px] h-[52.5px] opacity-num-0">
                <div className="absolute top-[0px] left-[0px] rounded-[2.96px] bg-white w-[73px] h-[52.5px]" />
                <div className="absolute top-[5.93px] left-[calc(50%-32.19px)] w-[64.4px] h-[40.4px]">
                  <div className="absolute top-[0px] left-[calc(50%-22.23px)] w-11 h-[15.2px]">
                    <div className="absolute top-[0px] left-[calc(50%-22px)] font-semibold">
                      Latina Lucas
                    </div>
                    <div className="absolute top-[10.24px] left-[3.5px] text-[4.31px] text-teal-100">
                      Network Engineer
                    </div>
                  </div>
                  <div className="absolute top-[23.44px] left-[0px] border-gainsboro-300 border-solid border-t-[0.3px] box-border w-[64.6px] h-[0.3px]" />
                  <div className="absolute top-[31.25px] left-[9.97px] w-[44.8px] h-num-92">
                    <div className="absolute top-[0px] left-[0px] w-[9.2px] h-num-92">
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
                        <Image
                          className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                          width={9.2}
                          height={9.2}
                          sizes="100vw"
                          alt=""
                          src="/assets/images/aboutus/"
                        />
                        <Image
                          className="absolute h-[77.17%] w-[40.22%] top-[22.68%] right-[30.31%] bottom-[0.14%] left-[29.48%] max-w-full overflow-hidden max-h-full"
                          width={3.7}
                          height={7.1}
                          sizes="100vw"
                          alt=""
                          src="/assets/images/aboutus/"
                        />
                      </div>
                    </div>
                    <div className="absolute top-[0px] left-[11.87px] w-[9.2px] h-num-92">
                      <Image
                        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                        width={9.2}
                        height={9.2}
                        sizes="100vw"
                        alt=""
                        src="/assets/images/aboutus/"
                      />
                    </div>
                    <div className="absolute top-[0px] left-[23.73px] w-[9.2px] h-num-92">
                      <Image
                        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                        width={9.2}
                        height={9.2}
                        sizes="100vw"
                        alt=""
                        src="/assets/images/aboutus/"
                      />
                    </div>
                    <div className="absolute top-[0px] left-[35.6px] w-[9.2px] h-num-92">
                      <Image
                        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                        width={9.2}
                        height={9.2}
                        sizes="100vw"
                        alt=""
                        src="/assets/images/aboutus/"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[993px] left-[61px] w-num-1318 h-[174px] text-num-45">
          <Image
            className="absolute top-[0px] left-[0px] rounded-[21px] w-num-1318 h-[174px] object-cover"
            width={1318}
            height={174}
            sizes="100vw"
            alt=""
            src="/assets/images/aboutus/"
          />
          <div className="absolute top-[0px] left-[0px] [backdrop-filter:blur(34px)] rounded-[21px] bg-gray-400 w-num-1318 h-[174px]" />
          <div className="absolute top-[0px] left-[0px] rounded-[21px] bg-teal-100 w-num-1318 h-[174px] mix-blend-color" />
          <div className="absolute top-[46px] left-[86px] w-[1147px] h-num-82">
            <div className="absolute top-[0px] left-[0px] w-[1147px] h-num-73">
              <div className="absolute top-[0px] left-[0px] w-[193px] h-num-73">
                <div className="absolute top-[0px] left-[0px] font-semibold">
                  400+
                </div>
                <div className="absolute top-[48px] left-[0px] text-num-20 font-semibold">
                  Year Of Experience
                </div>
              </div>
              <div className="absolute top-[0px] left-[340px] w-[187px] h-num-73">
                <div className="absolute top-[0px] left-[0px] font-semibold">
                  200+
                </div>
                <div className="absolute top-[48px] left-[0px] text-num-20 font-semibold">
                  Project’s Complete
                </div>
              </div>
              <div className="absolute top-[0px] left-[674px] w-[152px] h-num-73">
                <div className="absolute top-[0px] left-[0px] font-semibold">
                  68+
                </div>
                <div className="absolute top-[48px] left-[0px] text-num-20 font-semibold">
                  Team Members
                </div>
              </div>
              <div className="absolute top-[0px] left-[973px] w-[174px] h-num-73">
                <div className="absolute top-[0px] left-[0px] font-semibold">
                  99+
                </div>
                <div className="absolute top-[48px] left-[0px] text-num-20 font-semibold">
                  Total Award Wins
                </div>
              </div>
            </div>
            <div className="absolute top-[2px] left-[264px] border-white border-solid border-r-[1px] box-border w-px h-num-81" />
            <div className="absolute top-[2px] left-[606px] border-white border-solid border-r-[1px] box-border w-px h-num-81" />
            <div className="absolute top-[2px] left-[905px] border-white border-solid border-r-[1px] box-border w-px h-num-81" />
          </div>
        </div>
        <div className="absolute top-[7343px] left-[61px] w-[1340px] h-[511px] text-[25px]">
          <div className="absolute top-[83px] left-[0px] w-[1319px] h-[428px]">
            <div className="absolute top-[428px] left-[1319px] rounded-[27px] [background:linear-gradient(90deg,#000,#278083)] w-[1319px] h-[428px] [transform:rotate(180deg)] [transform-origin:00]" />
            <Image
              className="absolute top-[0px] left-[0px] rounded-[27px] w-[1319px] h-[428px] object-contain opacity-[0.5] mix-blend-multiply"
              width={1319}
              height={428}
              sizes="100vw"
              alt=""
              src="/assets/images/aboutus/"
            />
            <div className="absolute top-[73px] left-[calc(50%-586.5px)] w-[679px] h-[283px]">
              <div className="absolute top-[6px] left-[calc(50%-339.5px)] w-[278px] h-[270px]">
                <div className="absolute top-[0px] left-[calc(50%-139px)] w-[278px] h-[270px]">
                  <div className="absolute top-[0px] left-[calc(50%-139px)] font-semibold">
                    Make an Appointment
                  </div>
                  <div className="absolute top-[93px] left-[0px] w-[278px] h-num-627">
                    <Image
                      className="absolute top-[0px] left-[0px] rounded-num-50 w-num-627 h-num-627 object-cover"
                      width={62.7}
                      height={62.7}
                      sizes="100vw"
                      alt=""
                      src="/assets/images/aboutus/"
                    />
                    <Image
                      className="absolute top-[0px] left-[44.78px] rounded-num-50 w-num-627 h-num-627 object-cover"
                      width={62.7}
                      height={62.7}
                      sizes="100vw"
                      alt=""
                      src="/assets/images/aboutus/"
                    />
                    <Image
                      className="absolute top-[0px] left-[89.56px] rounded-num-50 w-num-627 h-num-627 object-cover"
                      width={62.7}
                      height={62.7}
                      sizes="100vw"
                      alt=""
                      src="/assets/images/aboutus/"
                    />
                    <Image
                      className="absolute top-[0px] left-[134.33px] rounded-num-50 w-num-627 h-num-627 object-cover"
                      width={62.7}
                      height={62.7}
                      sizes="100vw"
                      alt=""
                      src="/assets/images/aboutus/"
                    />
                    <Image
                      className="absolute top-[0px] left-[174.15px] rounded-num-50 w-num-627 h-num-627 object-cover"
                      width={62.7}
                      height={62.7}
                      sizes="100vw"
                      alt=""
                      src="/assets/images/aboutus/"
                    />
                    <Image
                      className="absolute top-[0px] left-[215.31px] rounded-num-50 w-num-627 h-num-627 object-cover"
                      width={62.7}
                      height={62.7}
                      sizes="100vw"
                      alt=""
                      src="/assets/images/aboutus/"
                    />
                  </div>
                  <div className="absolute top-[205px] left-[calc(50%-139px)] w-[267px] h-[65px]">
                    <div className="absolute top-[47px] left-[calc(50%-133.5px)] font-semibold">
                      3000+ Client Reviews
                    </div>
                    <div className="absolute top-[0px] left-[0px] flex items-center gap-[3.1px]">
                      <div className="h-num-296 w-num-309 relative">
                        <Image
                          className="absolute h-full w-[50.16%] top-[0%] right-[49.84%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                          width={15.5}
                          height={29.6}
                          sizes="100vw"
                          alt=""
                          src="/assets/images/aboutus/"
                        />
                        <Image
                          className="absolute h-full w-[50.16%] top-[0%] right-[0.03%] bottom-[0%] left-[49.81%] max-w-full overflow-hidden max-h-full object-contain"
                          width={15.5}
                          height={29.6}
                          sizes="100vw"
                          alt=""
                          src="/assets/images/aboutus/"
                        />
                      </div>
                      <div className="h-num-296 w-num-309 relative">
                        <Image
                          className="absolute h-full w-[50.16%] top-[0%] right-[49.84%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                          width={15.5}
                          height={29.6}
                          sizes="100vw"
                          alt=""
                          src="/assets/images/aboutus/"
                        />
                        <Image
                          className="absolute h-full w-[50.16%] top-[0%] right-[0.03%] bottom-[0%] left-[49.81%] max-w-full overflow-hidden max-h-full object-contain"
                          width={15.5}
                          height={29.6}
                          sizes="100vw"
                          alt=""
                          src="/assets/images/aboutus/"
                        />
                      </div>
                      <div className="h-num-296 w-num-309 relative">
                        <Image
                          className="absolute h-full w-[50.16%] top-[0%] right-[49.84%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                          width={15.5}
                          height={29.6}
                          sizes="100vw"
                          alt=""
                          src="/assets/images/aboutus/"
                        />
                        <Image
                          className="absolute h-full w-[50.16%] top-[0%] right-[0.03%] bottom-[0%] left-[49.81%] max-w-full overflow-hidden max-h-full object-contain"
                          width={15.5}
                          height={29.6}
                          sizes="100vw"
                          alt=""
                          src="/assets/images/aboutus/"
                        />
                      </div>
                      <div className="h-num-296 w-num-309 relative">
                        <Image
                          className="absolute h-full w-[50.16%] top-[0%] right-[49.84%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                          width={15.5}
                          height={29.6}
                          sizes="100vw"
                          alt=""
                          src="/assets/images/aboutus/"
                        />
                        <Image
                          className="absolute h-full w-[50.16%] top-[0%] right-[0.03%] bottom-[0%] left-[49.81%] max-w-full overflow-hidden max-h-full object-contain"
                          width={15.5}
                          height={29.6}
                          sizes="100vw"
                          alt=""
                          src="/assets/images/aboutus/"
                        />
                      </div>
                      <div className="h-num-296 w-num-309 relative">
                        <Image
                          className="absolute h-full w-[50.16%] top-[0%] right-[49.84%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                          width={15.5}
                          height={29.6}
                          sizes="100vw"
                          alt=""
                          src="/assets/images/aboutus/"
                        />
                        <Image
                          className="absolute h-full w-[50.16%] top-[0%] right-[0.03%] bottom-[0%] left-[49.81%] max-w-full overflow-hidden max-h-full object-contain"
                          width={15.5}
                          height={29.6}
                          sizes="100vw"
                          alt=""
                          src="/assets/images/aboutus/"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-[0px] left-[calc(50%+47.5px)] w-[292px] h-[283px] text-num-18">
                <div className="absolute top-[0px] left-[calc(50%-146px)] text-num-45 font-semibold">
                  Get In Touch
                </div>
                <div className="absolute top-[95.93px] left-[0px] w-[281px] h-9 text-justify">
                  <div className="absolute top-[0px] left-[46px] w-[235px] h-9">
                    <div className="absolute top-[0px] left-[0px] leading-[30px] capitalize">
                      Email us
                    </div>
                    <div className="absolute top-[21px] left-[0px] text-num-15 tracking-[0.01em] leading-[100%] lowercase font-medium text-silver-100">
                      info@itsolutionsworldwide.com
                    </div>
                  </div>
                  <Image
                    className="absolute top-[0px] left-[0px] w-9 h-9"
                    width={36}
                    height={36}
                    sizes="100vw"
                    alt=""
                    src="/assets/images/aboutus/"
                  />
                </div>
                <div className="absolute top-[155.93px] left-[0px] w-[201px] h-9 text-justify">
                  <div className="absolute top-[0px] left-[46px] w-[155px] h-9">
                    <div className="absolute top-[0px] left-[0px] leading-[30px] capitalize">
                      Phone Number
                    </div>
                    <div className="absolute top-[21px] left-[0px] text-num-15 tracking-[0.01em] leading-[100%] lowercase font-medium text-silver-100">
                      265-45489-4884-452
                    </div>
                  </div>
                  <Image
                    className="absolute top-[0px] left-[0px] w-9 h-9"
                    width={36}
                    height={36}
                    sizes="100vw"
                    alt=""
                    src="/assets/images/aboutus/"
                  />
                </div>
                <div className="absolute top-[232px] left-[0px] w-[167px] h-[51px] text-num-1679 text-teal-100">
                  <div className="absolute top-[0px] left-[0px] rounded-[5px] bg-white w-[167px] h-[51px]" />
                  <div className="absolute top-[14px] left-[22px] w-[124px] h-6">
                    <b className="absolute top-[5px] left-[0px] leading-[50.37px] capitalize">
                      Contact Us
                    </b>
                    <Image
                      className="absolute top-[0px] left-[100px] w-6 h-6"
                      width={24}
                      height={24}
                      sizes="100vw"
                      alt=""
                      src="/assets/images/aboutus/"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Image
            className="absolute top-[0px] left-[805px] w-[535px] h-[508px] object-cover"
            width={535}
            height={508}
            sizes="100vw"
            alt=""
            src="/assets/images/aboutus/"
          />
        </div>
      </div>
    </>
  );
}
