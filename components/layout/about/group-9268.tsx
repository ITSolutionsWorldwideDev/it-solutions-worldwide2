import type { NextPage } from "next";
import Image from "next/image";

const Group9268: NextPage = () => {
  return (
    <div className="w-full relative text-justify text-lg text-gray mx-auto my-12 py-3 md:py-4 lg:py-12 px-4 md:px-4 lg:px-10">
      <div className="flex sm:flex-col md:flex-row">
        <div className=" w-full text-left">
          <div className="border-teal border-solid border-2 rounded-4xl p-2 inline-flex">
            <Image
              className=" w-auto h-auto pr-2 object-contain"
              width={15}
              height={8}
              sizes="100vw"
              alt=""
              src="/assets/images/aboutus/group-9254.svg"
            />
            <div>About Our Company</div>
            <Image
              className="w-auto h-auto pl-2 object-contain"
              width={15}
              height={8}
              sizes="100vw"
              alt=""
              src="/assets/images/aboutus/group-9253.svg"
            />
          </div>

          <div>
            <div className="text-[45px] font-semibold">What Define Us</div>
            <div className=" text-lg text-gray flex items-center sm:w-auto md:w-[549px] mb-4">
              IT Solutions Worldwide is a leading company that provides the
              best-updated solutions to a comprehensive range of industries
            </div>

            <div className="mb-4">
              <div className="flex sm:flex-col md:flex-row gap-4">
                <Image
                  className="w-[82px] h-[82px] bg-[rgb(230_237_237)] rounded-full p-4"
                  width={82}
                  height={82}
                  sizes="100vw"
                  alt=""
                  src="/assets/images/aboutus/streamline-freehand-security-it-service.svg"
                />

                <div className="">
                  <div className="font-semibold">Industry-Wide Impact</div>
                  <div className=" text-[15px] text-gray text-justify flex items-center sm:w-auto md:w-[434px]">
                    IT Solutions Worldwide delivers cutting-edge tech solutions
                    across diverse industries, driving success and efficiency
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <div className="flex sm:flex-col md:flex-row gap-4">
                <Image
                  className="w-[82px] h-[82px] bg-[rgb(230_237_237)] rounded-full p-4"
                  width={82}
                  height={82}
                  sizes="100vw"
                  alt=""
                  src="/assets/images/aboutus/lucide-chart-line.svg"
                />

                <div className="">
                  <div className="font-semibold">Proven Expertise</div>
                  <div className=" text-[15px] text-gray text-justify flex items-center sm:w-auto md:w-[434px]">
                    With X years of experience and a strong track record, we
                    specialize in supply chain optimization, IT support, digital
                    marketing, and operational excellence.
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <div className="flex sm:flex-col md:flex-row gap-4">
                <Image
                  className="w-[82px] h-[82px] bg-[rgb(230_237_237)] rounded-full p-4"
                  width={82}
                  height={82}
                  sizes="100vw"
                  alt=""
                  src="/assets/images/aboutus/formkit-people.svg"
                />

                <div className="">
                  <div className="font-semibold">
                    Modernization Through Talent
                  </div>
                  <div className=" text-[15px] text-gray text-justify flex items-center sm:w-auto md:w-[434px]">
                    Our top-tier technical professionals help businesses evolve
                    with simple, innovative, and future-ready strategies.
                  </div>
                </div>
              </div>
            </div>

            <div className="text-[21.8px] text-white font-plus-jakarta-sans">
              <div className="bg-[#278083] inline-flex text-white rounded-[12.11px] px-4 py-2 font-semibold transition">
                <b className="">Take Our Services</b>
                <div className="">
                  <Image
                    className=""
                    width={29.1}
                    height={29.1}
                    sizes="100vw"
                    alt=""
                    src="/assets/images/aboutus/icon-park-outline-arrow-up.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" w-full">
          <div className="absolute top-[51px] w-[676px] h-[552px]">
            <Image
              className="absolute top-[0px] left-[125px] rounded-[36px] w-[551px] h-[552px] object-cover"
              width={551}
              height={552}
              sizes="100vw"
              alt=""
              src="/assets/images/aboutus/rectangle-122.png"
            />
            <div className="absolute top-[294px] left-[0px] border-white border-8 rounded-[28.97px] w-[280px] h-[199.5px] overflow-hidden flex items-center justify-center">
              <Image
                className="w-full h-full object-cover absolute left-[0px] top-[0px] [transform:scale(1.079)]"
                width={280}
                height={199.5}
                sizes="100vw"
                alt=""
                src="/assets/images/aboutus/rectangle-123.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Group9268;
