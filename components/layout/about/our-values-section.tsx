import type { NextPage } from "next";
import Image from "next/image";

const OurValuesSection: NextPage = () => {
  return (
    <div className="w-full relative text-justify text-lg text-gray mx-auto my-12 py-3 md:py-4 lg:py-12 px-4 md:px-4 lg:px-5  ">
      <div className=" w-full text-center">
        <div className="border-[#467a7e] border-solid border-2 rounded-4xl p-2 inline-flex">
          <Image
            className=" w-auto h-auto pr-2 object-contain"
            width={15}
            height={8}
            sizes="100vw"
            alt=""
            src="/assets/images/aboutus/group-9254.svg"
          />
          <div>Our Core Values</div>
          <Image
            className="w-auto h-auto pl-2 object-contain"
            width={15}
            height={8}
            sizes="100vw"
            alt=""
            src="/assets/images/aboutus/group-9253.svg"
          />
        </div>
      </div>
      <div className=" w-full text-[45px] top-4 font-semibold text-center text-black">
        <span>The </span>
        <span className="text-[#467a7e]">Foundation</span>
        <span> of Everything We Do</span>
      </div>
      <div className="  text-xl w-full text-black text-center opacity-[0.6]">
        At IT Solutions Worldwide, our values guide every decision, every
        solution, and every relationship.
        <br /> They reflect our commitment to excellence, innovation, and
        integrity in a rapidly evolving digital world.
      </div>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-4 py-2">
        <div className="rounded-lg shadow-lg p-4 flex flex-col items-start bg-white ">
          <div className="px-10 py-5">
            <div className="text-xl font-semibold text-black text-left inline-block pb-2">
              Client Commitment & Operational Excellence
            </div>
            <div className="border-[#467a7e] border-solid border-t-[3px] box-border w-[60%] h-[3px]" />
            <div className="pt-4 text-left">
              {" "}
              We prioritize delivering top-tier IT solutions that enhance
              business operations, boost efficiency, and build lasting
              partnerships with clients, stakeholders, and collaborators.
            </div>
          </div>
        </div>

        <div className="rounded-lg shadow-lg p-4 flex flex-col items-start bg-white ">
          <div className="px-10 py-5">
            <div className="text-xl font-semibold text-black text-left inline-block pb-2">
              Innovation & <br />
              Adaptability
            </div>
            <div className="border-[#467a7e] border-solid border-t-[3px] box-border w-[60%] h-[3px]" />
            <div className="pt-4 text-left">
              We embrace modern technologies and agile thinking to craft
              efficient, forward-looking solutions that drive real results in
              dynamic markets.
            </div>
          </div>
        </div>

        <div className="rounded-lg shadow-lg p-4 flex flex-col items-start bg-white ">
          <div className="px-10 py-5">
            <div className="text-xl font-semibold text-black text-left inline-block pb-2">
              Collaboration & <br />
              Integrity
            </div>
            <div className="border-[#467a7e] border-solid border-t-[3px] box-border w-[60%] h-[3px]" />
            <div className="pt-4 text-left">
              We foster strong, transparent relationships—internally and
              externally—grounded in trust, teamwork, and a shared pursuit of
              excellence.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurValuesSection;
