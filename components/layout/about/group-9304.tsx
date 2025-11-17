import type { NextPage } from "next";
import TeamMember from "./TeamMember";

const Group9304: NextPage = () => {
  const team = [
    {
      name: "Daniel Smith",
      role: "Digital Marketer",
      image: "/assets/images/aboutus/creative_team-1.png",
      bio: "Ambert is the driving force behind IT Solutions Worldwide, blending strategic insight with hands-on creativity to lead the company’s global digital transformation efforts. With a deep understanding of both technical infrastructure and artistic direction, he guides everything from branding and workflow optimization to music and visual identity",
      bio2: "Known for his emotionally intelligent leadership and ultra-concise communication style, Mutahar empowers teams to deliver impactful, scalable solutions across industries.",
    },
    {
      name: "Ambert Daniel",
      role: "CEO & Founder",
      image: "/assets/images/aboutus/creative_team-2.png",
      bio: "Ambert is the driving force behind IT Solutions Worldwide, blending strategic insight with hands-on creativity to lead the company’s global digital transformation efforts. With a deep understanding of both technical infrastructure and artistic direction, he guides everything from branding and workflow optimization to music and visual identity",
      bio2: "Known for his emotionally intelligent leadership and ultra-concise communication style, Mutahar empowers teams to deliver impactful, scalable solutions across industries.",
    },
    {
      name: "Milano Digits",
      role: "CO-Founder",
      image: "/assets/images/aboutus/creative_team-3.png",
      bio: "Ambert is the driving force behind IT Solutions Worldwide, blending strategic insight with hands-on creativity to lead the company’s global digital transformation efforts. With a deep understanding of both technical infrastructure and artistic direction, he guides everything from branding and workflow optimization to music and visual identity",
      bio2: "Known for his emotionally intelligent leadership and ultra-concise communication style, Mutahar empowers teams to deliver impactful, scalable solutions across industries.",
    },
    {
      name: "Latina Lucas",
      role: "Network Engineer",
      image: "/assets/images/aboutus/creative_team-4.png",
      bio: "Ambert is the driving force behind IT Solutions Worldwide, blending strategic insight with hands-on creativity to lead the company’s global digital transformation efforts. With a deep understanding of both technical infrastructure and artistic direction, he guides everything from branding and workflow optimization to music and visual identity",
      bio2: "Known for his emotionally intelligent leadership and ultra-concise communication style, Mutahar empowers teams to deliver impactful, scalable solutions across industries.",
    },
  ];

  return (
    <div className="w-full relative text-left text-[84px] text-black font-lexend">
      <div className="">
        <div className="text-xl opacity-[0.6] pb-4">
          Ask not what your teammates can do for you. Ask what you can do for
          your teammates.
        </div>
        <div className="leading-[86px] font-semibold inline-block">
          <span>The Creative team <br />behind </span>
          <span className="text-[#467a7e]">the door</span>
        </div>
      </div>

      <section className="flex flex-wrap gap-6 justify-center py-12">
        {team.map((member) => (
          <TeamMember key={member.name} {...member} />
        ))}
      </section>
    </div>
  );
};

export default Group9304;

{
  /* <div className="absolute top-[296px] left-[678.72px] w-[301.4px] h-[349.8px] text-[5.26px]">
        <div className="absolute top-[-0.23px] left-[0px] w-[301.4px] h-[350px]">
          <Image
            className="absolute top-[0.23px] left-[0px] rounded-[10.89px] w-[301.4px] h-[349.8px] object-cover"
            width={301.4}
            height={349.8}

            alt="" src="/assets/images/aboutus/creative_team-1.png"
          />
          <div className="absolute top-[0px] left-[0px] [backdrop-filter:blur(24px)] rounded-[10.89px] bg-gainsboro-200 w-[301.4px] h-[349.8px] opacity-0" />
          <div className="absolute top-[215.22px] left-[122px] w-[57px] h-[41px] opacity-0">
            <div className="absolute top-[0px] left-[0px] rounded-[2.31px] bg-white w-[57px] h-[41px]" />
            <div className="absolute top-[4.63px] left-[3.37px] w-[50.3px] h-[31.6px]">
              <div className="absolute top-[0px] left-[8.41px] w-[34px] h-3">
                <div className="absolute top-[0px] left-[0px] font-semibold">
                  Daniel Smith
                </div>
                <div className="absolute top-[7.99px] left-[3.58px] text-[3.37px] text-[#467a7e]">
                  Digital Marketer
                </div>
              </div>
              <div className="absolute top-[18.3px] left-[0px] border-gainsboro-100 border-solid border-t-[0.2px] box-border w-[50.5px] h-[0.2px]" />
              <div className="absolute top-[24.4px] left-[7.78px] w-[35px] h-[7.2px]">
                <div className="absolute top-[0px] left-[0px] w-[7.2px] h-[7.2px]">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
                    <Image
                      className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                      width={7.2}
                      height={7.2}
                      sizes="100vw"
                      alt="" src="/assets/images/aboutus/creative_team-1.png"
                    />
                    <Image
                      className="absolute h-[76.39%] w-[40.28%] top-[22.63%] right-[30.31%] bottom-[0.98%] left-[29.41%] max-w-full overflow-hidden max-h-full"
                      width={2.9}
                      height={5.5}
                      sizes="100vw"
                      alt="" src="/assets/images/aboutus/rectangle-128.png"
                    />
                  </div>
                </div>
                <div className="absolute top-[0px] left-[9.27px] w-[7.2px] h-[7.2px]">
                  <Image
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                    width={7.2}
                    height={7.2}
                    sizes="100vw"
                    alt="" src="/assets/images/aboutus/rectangle-128.png"
                  />
                </div>
                <div className="absolute top-[0px] left-[18.53px] w-[7.2px] h-[7.2px]">
                  <Image
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                    width={7.2}
                    height={7.2}
                    sizes="100vw"
                    alt="" src="/assets/images/aboutus/rectangle-128.png"
                  />
                </div>
                <div className="absolute top-[0px] left-[27.8px] w-[7.2px] h-[7.2px]">
                  <Image
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                    width={7.2}
                    height={7.2}
                    sizes="100vw"
                    alt="" src="/assets/images/aboutus/rectangle-128.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[296px] left-[0px] w-[301.4px] h-[349.8px] text-[8.95px]">
        <div className="absolute top-[-0.23px] left-[0px] w-[301.4px] h-[350px]">
          <Image
            className="absolute top-[0.23px] left-[0px] rounded-[10.89px] w-[301.4px] h-[349.8px] object-cover"
            width={301.4}
            height={349.8}
            sizes="100vw"
            alt="" src="/assets/images/aboutus/creative_team-2.png"
          />
          <div className="absolute top-[0px] left-[0px] [backdrop-filter:blur(24px)] rounded-[10.89px] bg-gainsboro-200 w-[301.4px] h-[349.8px] opacity-0" />
          <div className="absolute top-[200.83px] left-[102px] w-[97px] h-[69.8px] opacity-0">
            <div className="absolute top-[0px] left-[0px] rounded-[3.94px] bg-white w-[97px] h-[69.8px]" />
            <div className="absolute top-[7.87px] left-[calc(50%_-_42.77px)] w-[85.5px] h-[53.7px]">
              <div className="absolute top-[0px] left-[calc(50%_-_32.37px)] w-[65px] h-[20.6px]">
                <div className="absolute top-[0px] left-[calc(50%_-_32.5px)] font-semibold">
                  Ambert Daniel
                </div>
                <div className="absolute top-[13.6px] left-[10.02px] text-[5.73px] text-[#467a7e]">{`CEO & Founder`}</div>
              </div>
              <div className="absolute top-[31.14px] left-[0px] border-gainsboro-100 border-solid border-t-[0.4px] box-border w-[85.9px] h-[0.4px]" />
              <div className="absolute top-[41.52px] left-[13.24px] w-[59.5px] h-[12.2px]">
                <div className="absolute top-[0px] left-[0px] w-[12.2px] h-[12.2px]">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
                    <Image
                      className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                      width={12.2}
                      height={12.2}
                      sizes="100vw"
                      alt="" src="/assets/images/aboutus/"
                    />
                    <Image
                      className="absolute h-[77.05%] w-[40.98%] top-[22.73%] right-[29.48%] bottom-[0.22%] left-[29.54%] max-w-full overflow-hidden max-h-full"
                      width={5}
                      height={9.4}
                      sizes="100vw"
                      alt="" src="/assets/images/aboutus/"
                    />
                  </div>
                </div>
                <div className="absolute top-[0px] left-[15.77px] w-[12.2px] h-[12.2px]">
                  <Image
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                    width={12.2}
                    height={12.2}
                    sizes="100vw"
                    alt="" src="/assets/images/aboutus/"
                  />
                </div>
                <div className="absolute top-[0px] left-[31.54px] w-[12.2px] h-[12.2px]">
                  <Image
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                    width={12.2}
                    height={12.2}
                    sizes="100vw"
                    alt="" src="/assets/images/aboutus/"
                  />
                </div>
                <div className="absolute top-[0px] left-[47.31px] w-[12.2px] h-[12.2px]">
                  <Image
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                    width={12.2}
                    height={12.2}
                    sizes="100vw"
                    alt="" src="/assets/images/aboutus/"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[296px] left-[339.36px] w-[301.4px] h-[349.8px] text-[6.92px]">
        <div className="absolute top-[-0.23px] left-[0px] w-[301.4px] h-[350px]">
          <Image
            className="absolute top-[0.23px] left-[0px] rounded-[10.89px] w-[301.4px] h-[349.8px] object-cover"
            width={301.4}
            height={349.8}
            sizes="100vw"
            alt="" src="/assets/images/aboutus/creative_team-3.png"
          />
          <div className="absolute top-[0px] left-[0px] [backdrop-filter:blur(24px)] rounded-[10.89px] bg-gainsboro-200 w-[301.4px] h-[349.8px] opacity-0" />
          <div className="absolute top-[208.74px] left-[113px] w-[75px] h-[54px] opacity-0">
            <div className="absolute top-[0px] left-[0px] rounded-[3.04px] bg-white w-[75px] h-[54px]" />
            <div className="absolute top-[6.09px] left-[calc(50%_-_33.07px)] w-[66.1px] h-[41.5px]">
              <div className="absolute top-[0px] left-[calc(50%_-_22.81px)] w-[46px] h-[16.5px]">
                <div className="absolute top-[0px] left-[calc(50%_-_23px)] font-semibold">
                  Milano Digits
                </div>
                <div className="absolute top-[10.52px] left-[9.69px] text-[4.43px] text-[#467a7e]">
                  CO-Founder
                </div>
              </div>
              <div className="absolute top-[24.08px] left-[0px] border-gainsboro-100 border-solid border-t-[0.3px] box-border w-[66.4px] h-[0.3px]" />
              <div className="absolute top-[32.1px] left-[10.24px] w-[46px] h-[9.4px]">
                <div className="absolute top-[0px] left-[0px] w-[9.4px] h-[9.4px]">
                  <Image
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                    width={9.4}
                    height={9.4}
                    sizes="100vw"
                    alt="" src="/assets/images/aboutus/"
                  />
                </div>
                <div className="absolute top-[0px] left-[12.19px] w-[9.4px] h-[9.4px]">
                  <Image
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                    width={9.4}
                    height={9.4}
                    sizes="100vw"
                    alt="" src="/assets/images/aboutus/"
                  />
                </div>
                <div className="absolute top-[0px] left-[24.38px] w-[9.4px] h-[9.4px]">
                  <Image
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                    width={9.4}
                    height={9.4}
                    sizes="100vw"
                    alt="" src="/assets/images/aboutus/"
                  />
                </div>
                <div className="absolute top-[0px] left-[36.58px] w-[9.4px] h-[9.4px]">
                  <Image
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                    width={9.4}
                    height={9.4}
                    sizes="100vw"
                    alt="" src="/assets/images/aboutus/"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[296px] left-[1018.08px] w-[301.4px] h-[349.8px] text-[6.73px]">
        <div className="absolute top-[0px] left-[0px] w-[301.4px] h-[349.8px]">
          <Image
            className="absolute top-[0px] left-[0px] rounded-[10.89px] w-[301.4px] h-[349.8px] object-cover"
            width={301.4}
            height={349.8}
            sizes="100vw"
            alt="" src="/assets/images/aboutus/creative_team-4.png"
          />
          <div className="absolute top-[0px] left-[0px] [backdrop-filter:blur(24px)] rounded-[10.89px] bg-gainsboro-200 w-[301.4px] h-[349.8px] opacity-0" />
          <div className="absolute top-[209.24px] left-[114px] w-[73px] h-[52.5px] opacity-0">
            <div className="absolute top-[0px] left-[0px] rounded-[2.96px] bg-white w-[73px] h-[52.5px]" />
            <div className="absolute top-[5.93px] left-[calc(50%_-_32.19px)] w-[64.4px] h-[40.4px]">
              <div className="absolute top-[0px] left-[calc(50%_-_22.23px)] w-11 h-[15.2px]">
                <div className="absolute top-[0px] left-[calc(50%_-_22px)] font-semibold">
                  Latina Lucas
                </div>
                <div className="absolute top-[10.24px] left-[3.5px] text-[4.31px] text-[#467a7e]">
                  Network Engineer
                </div>
              </div>
              <div className="absolute top-[23.44px] left-[0px] border-gainsboro-100 border-solid border-t-[0.3px] box-border w-[64.6px] h-[0.3px]" />
              <div className="absolute top-[31.25px] left-[9.97px] w-[44.8px] h-[9.2px]">
                <div className="absolute top-[0px] left-[0px] w-[9.2px] h-[9.2px]">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
                    <Image
                      className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                      width={9.2}
                      height={9.2}
                      sizes="100vw"
                      alt="" src="/assets/images/aboutus/"
                    />
                    <Image
                      className="absolute h-[77.17%] w-[40.22%] top-[22.68%] right-[30.31%] bottom-[0.14%] left-[29.48%] max-w-full overflow-hidden max-h-full"
                      width={3.7}
                      height={7.1}
                      sizes="100vw"
                      alt="" src="/assets/images/aboutus/"
                    />
                  </div>
                </div>
                <div className="absolute top-[0px] left-[11.87px] w-[9.2px] h-[9.2px]">
                  <Image
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                    width={9.2}
                    height={9.2}
                    sizes="100vw"
                    alt="" src="/assets/images/aboutus/"
                  />
                </div>
                <div className="absolute top-[0px] left-[23.73px] w-[9.2px] h-[9.2px]">
                  <Image
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                    width={9.2}
                    height={9.2}
                    sizes="100vw"
                    alt="" src="/assets/images/aboutus/"
                  />
                </div>
                <div className="absolute top-[0px] left-[35.6px] w-[9.2px] h-[9.2px]">
                  <Image
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                    width={9.2}
                    height={9.2}
                    sizes="100vw"
                    alt="" src="/assets/images/aboutus/"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */
}
