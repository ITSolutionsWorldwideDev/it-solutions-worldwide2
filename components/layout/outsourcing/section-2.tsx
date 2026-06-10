// components/layout/outsourcing/section-2.tsx

import Link from "next/link";
import { FC } from "react";

interface card {
  title: string;
  description?: string;
  image?: string;
  icon?: string;
}

interface Section2Props {
  heading: string;
  description?: string;
  columns?: number;
  text?: string;
  buttonText?: string;
  bgButton?: string;
  buttonLink?: string;
  leftColor?: string;
  rightColor?: string;
  cards: card[];
}

const Section2: FC<Section2Props> = ({
  heading,
  description,
  text,
  buttonText,
  bgButton = "#236b7a",
  buttonLink = "/",
  leftColor = "#22A3AD",
  rightColor = "#156F76",
  cards,
  columns = 3,
}) => {
  // console.log(cards)
  const gridColsClass =
    {
      1: "lg:grid-cols-1",
      2: "lg:grid-cols-2",
      3: "lg:grid-cols-3",
      4: "lg:grid-cols-4",
      5: "lg:grid-cols-5",
      6: "lg:grid-cols-6",
    }[columns] || "lg:grid-cols-1";

  return (
    <div className="max-w-7xl mx-auto md:mx-4 lg:mx-auto my-12">
      <div className="w-full py-2 ml-4 sm:ml-0 text-center">
        <h2 className="text-2xl font-bold mb-4">{heading}</h2>
        <p className="text-gray-700">{text}</p>
      </div>

      <div
        className={`w-full grid grid-cols-1 sm:grid-cols-2  ${gridColsClass} gap-4 py-2`}
      >
        {cards.map((card, index) => (
          <div
            key={index}
            className="rounded-lg shadow-lg p-4 flex flex-col items-start "
          >
            {card.image && (
              <img
                src={card.image}
                alt={card.title}
                className="w-auto h-auto object-cover mb-4 rounded-t-lg"
              />
            )}
            {card.icon && (
              <img
                src={card.icon}
                alt={card.title}
                className="w-20 h-auto object-cover mb-4 rounded-t-lg"
              />
            )}
            <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
            <p className="text-gray-600">{card.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link
          href={`tel:${+31107660786}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white p-4 rounded font-semibold"
          style={{
            background: `linear-gradient(to right, ${leftColor}, ${rightColor})`,
          }}
        >
          {buttonText}
        </Link>
      </div>
    </div>
  );
};

export default Section2;

/* "use client";
import type { NextPage } from "next";
import Image from "next/image";

import Link from "next/link";
import React, { useState, useEffect } from "react";

const Section2: NextPage = () => {
  return (
    <div className="w-full relative flex flex-col items-center gap-[60px] text-center text-num-51_19 text-gray-200 font-inter">
      <div className="w-[1920px] h-[399px] relative">
        <div className="absolute top-[0px] left-[0px] bg-gainsboro w-[1920px] h-[399px]" />
        <div className="absolute top-[51px] left-[calc(50%_-_668px)] w-[1295px] h-[247px]">
          <b className="absolute top-[0px] left-[calc(50%_-_647.5px)] leading-num-60_15 inline-block w-[1295px] h-[114px]">
            <span>{`Hire `}</span>
            <span className="text-darkcyan-200">
              Remote Staff in the Netherlands,
            </span>
            <span> Find the Right Role, Fast</span>
          </b>
          <div className="absolute top-[133px] left-[calc(50%_-_628.5px)] text-[20.48px] leading-[29.44px] inline-block w-[1257px] h-[114px]">
            Whether you're scaling your team, filling a skills gap, or looking
            for a reliable outsourcing partner in the Netherlands, IT Solutions
            Worldwide connects you with pre-vetted, ready-to-work professionals
            across a wide range of roles.
            <br />
            No lengthy recruitment cycles. No guesswork. Just the right talent,
            onboarded quickly and tailored to your business needs.
          </div>
        </div>
        <div className="absolute top-[298px] left-[calc(50%_-_164px)] w-[327px] h-[54px] text-[16.18px] text-white font-poppins">
          <div className="absolute top-[0px] left-[calc(50%_-_163.5px)] rounded-[10.3px] [background:linear-gradient(90deg,_#22a3ad,_#219fa9_7.14%,_#209ba5_14.29%,_#1f98a1_21.43%,_#1e949d_28.57%,_#1d9099_35.71%,_#1c8c95_42.86%,_#1b8991_50%,_#1a858d_57.14%,_#1a8189_64.29%,_#197d85_71.43%,_#187a81_78.57%,_#17767e_85.71%,_#16737a_92.86%,_#156f76)] w-[327px] h-[54px]" />
          <b className="absolute top-[13px] left-[19px] leading-[27.77px] inline-block w-[291px]">
            Let's Build Your Team Today
          </b>
        </div>
      </div>
      <div className="w-num-1520 flex flex-col items-center gap-[35px]">
        <div className="w-[1323px] h-[122px] relative">
          <b className="absolute top-[0px] left-[calc(50%_-_612.5px)] leading-num-60_15 inline-block w-[1223px] h-[50px]">
            <span>{`Why Companies Choose `}</span>
            <span className="text-darkcyan-200">IT Solutions Worldwide</span>
          </b>
          <div className="absolute top-[65px] left-[calc(50%_-_661.5px)] text-[20.48px] leading-[29.44px] inline-block w-[1323px] h-[57px]">
            Outsourcing staff doesn't mean compromising on quality — it means
            working smarter. Hundreds of growing businesses in the Netherlands
            and beyond trust us to handle their staffing needs because we make
            the process simple, fast, and reliable.
            <br />
          </div>
        </div>
        <div className="w-num-1520 h-[152px] relative text-left text-num-16 text-gray-100">
          <div className="absolute top-[0px] left-[0px] shadow-[0px_10px_15px_-3px_rgba(0,_0,_0,_0.1),_0px_4px_6px_-4px_rgba(0,_0,_0,_0.1)] rounded-num-14 bg-white border-whitesmoke-100 border-solid border-[1px] box-border w-num-285_5 h-num-150">
            <Image
              className="absolute top-[25px] left-[25px] w-10 h-10"
              width={40}
              height={40}
              sizes="100vw"
              alt=""
            src=""
            />
            <div className="absolute top-[77px] left-[25px] w-num-246 h-6">
              <b className="absolute top-[-2px] left-[0px] leading-num-24 shrink-0">
                Save Up to 60% Compared
                <br />
                to Local Hiring
              </b>
            </div>
            <div className="absolute top-[105px] left-[25px] w-num-246 h-5 flex items-start" />
          </div>
          <div className="absolute top-[0px] left-[617.26px] shadow-[0px_10px_15px_-3px_rgba(0,_0,_0,_0.1),_0px_4px_6px_-4px_rgba(0,_0,_0,_0.1)] rounded-num-14 bg-white border-whitesmoke-100 border-solid border-[1px] box-border w-num-285_5 h-num-150">
            <Image
              className="absolute top-[25px] left-[25px] w-10 h-10"
              width={40}
              height={40}
              sizes="100vw"
              alt=""
            src=""
            />
            <div className="absolute top-[77px] left-[25px] w-num-246 h-6">
              <b className="absolute top-[-2px] left-[0px] leading-num-24 shrink-0">
                Fast Onboarding: Start
                <br />
                Within Days
              </b>
            </div>
            <div className="absolute top-[105px] left-[25px] w-num-246 h-5 flex items-start" />
          </div>
          <div className="absolute top-[2px] left-[308.63px] shadow-[0px_10px_15px_-3px_rgba(0,_0,_0,_0.1),_0px_4px_6px_-4px_rgba(0,_0,_0,_0.1)] rounded-num-14 bg-white border-whitesmoke-100 border-solid border-[1px] box-border w-num-285_5 h-num-150">
            <Image
              className="absolute top-[25px] left-[25px] w-10 h-10"
              width={40}
              height={40}
              sizes="100vw"
              alt=""
            src=""
            />
            <div className="absolute top-[77px] left-[25px] w-num-246 h-6">
              <b className="absolute top-[-2px] left-[0px] leading-num-24 shrink-0">
                Pre-Vetted, Ready-to-Work
                <br />
                Talent
              </b>
            </div>
            <div className="absolute top-[105px] left-[25px] w-num-246 h-5 flex items-start" />
          </div>
          <div className="absolute top-[2px] left-[925.89px] shadow-[0px_10px_15px_-3px_rgba(0,_0,_0,_0.1),_0px_4px_6px_-4px_rgba(0,_0,_0,_0.1)] rounded-num-14 bg-white border-whitesmoke-100 border-solid border-[1px] box-border w-num-285_5 h-num-150">
            <Image
              className="absolute top-[25px] left-[25px] w-10 h-10"
              width={40}
              height={40}
              sizes="100vw"
              alt=""
            src=""
            />
            <div className="absolute top-[77px] left-[25px] w-num-246 h-6">
              <b className="absolute top-[-2px] left-[0px] leading-num-24 shrink-0">
                Flexible Engagements:
                <br />
                Part-Time or Full-Time
              </b>
            </div>
            <div className="absolute top-[105px] left-[25px] w-num-246 h-5 flex items-start" />
          </div>
          <div className="absolute top-[2px] left-[1234.52px] shadow-[0px_10px_15px_-3px_rgba(0,_0,_0,_0.1),_0px_4px_6px_-4px_rgba(0,_0,_0,_0.1)] rounded-num-14 bg-white border-whitesmoke-100 border-solid border-[1px] box-border w-num-285_5 h-num-150">
            <Image
              className="absolute top-[25px] left-[25px] w-10 h-10"
              width={40}
              height={40}
              sizes="100vw"
              alt=""
            src=""
            />
            <div className="absolute top-[77px] left-[25px] w-num-246 h-6">
              <b className="absolute top-[-2px] left-[0px] leading-num-24 shrink-0">
                Dedicated Support Every
                <br />
                Step of the Way
              </b>
            </div>
            <div className="absolute top-[105px] left-[25px] w-num-246 h-5 flex items-start" />
          </div>
        </div>
        <div className="w-[365.4px] h-[54.5px] relative text-[16.18px] text-white font-poppins">
          <div className="absolute top-[0px] left-[0px] rounded-[10.3px] [background:linear-gradient(90deg,_#22a3ad,_#219fa9_7.14%,_#209ba5_14.29%,_#1f98a1_21.43%,_#1e949d_28.57%,_#1d9099_35.71%,_#1c8c95_42.86%,_#1b8991_50%,_#1a858d_57.14%,_#1a8189_64.29%,_#197d85_71.43%,_#187a81_78.57%,_#17767e_85.71%,_#16737a_92.86%,_#156f76)] w-[365.4px] h-[54.5px]" />
          <b className="absolute top-[13px] left-[72.71px] leading-[27.77px] inline-block w-[222px] h-[27px]">
            Book Your Free Call Today
            <br />
          </b>
        </div>
      </div>
      <div className="w-[1519.4px] flex flex-col items-center gap-[34px]">
        <b className="self-stretch h-12 relative leading-num-60_15 inline-block shrink-0">
          <span>Explore Our</span>
          <span className="text-darkcyan-200"> Hire Roles</span>
        </b>
        <div className="w-[1519.4px] h-[230.6px] relative text-left text-num-14_76">
          <div className="absolute top-[0px] left-[0px] flex items-center gap-[21px]">
            <div className="h-[230.6px] w-[364.3px] relative rounded-[14.76px] bg-white border-whitesmoke-200 border-solid border-[1.8px] box-border">
              <div className="absolute top-[31.36px] left-[31.36px] rounded-[12.91px] [background:linear-gradient(135deg,_#22a3ad,_#21a1aa_11.11%,_#209ea8_22.22%,_#1f9ca5_33.33%,_#1e99a3_44.44%,_#1e97a0_55.56%,_#1d949e_66.67%,_#1c929b_77.78%,_#1b8f99_88.89%,_#1a8d96)] w-[51.7px] h-[51.7px] flex items-center justify-center py-num-0 px-[12.9px] box-border">
                <Image
                  className="h-num-25_8 w-full relative"
                  width={25.8}
                  height={25.8}
                  sizes="100vw"
                  alt=""
            src=""
                />
              </div>
              <div className="absolute top-[105.15px] left-[31.36px] w-num-301_3 h-num-25_8 flex items-start" />
              <b className="absolute top-[45.19px] left-[94.08px] text-[18.45px] leading-[25.83px] inline-block w-[238.9px]">
                Administrative Support
              </b>
              <div className="absolute top-[97.77px] left-[31.36px] w-num-301_3 h-[66.4px] text-darkgray">
                <div className="absolute top-[-1.84px] left-[0px] leading-num-22_14 inline-block w-[301.6px] h-[68.3px] shrink-0">
                  Keep your business running smoothly with a dedicated remote
                  administrative assistant. Our admin support....
                </div>
              </div>
              <div className="absolute top-[178.93px] left-[31.36px] w-[319.1px] h-num-22_1 text-center text-darkcyan-100">
                <Image
                  className="absolute top-[3.69px] right-[10.08px] w-[14.8px] h-[14.8px]"
                  width={14.8}
                  height={14.8}
                  sizes="100vw"
                  alt=""
            src=""
                />
                <div className="absolute top-[0px] left-[0px] leading-num-22_14 font-semibold">
                  Hire an Administrative Support Specialist
                </div>
              </div>
            </div>
            <div className="h-[229.7px] w-[363.4px] relative rounded-[14.76px] bg-white border-whitesmoke-200 border-solid border-[1.8px] box-border">
              <div className="absolute top-[32.28px] left-[31.36px] rounded-[12.91px] [background:linear-gradient(135deg,_#1a8d96,_#1a8b93_7.69%,_#198891_15.38%,_#19868e_23.08%,_#18848c_30.77%,_#18818a_38.46%,_#187f87_46.15%,_#177d85_53.85%,_#177a82_61.54%,_#177880_69.23%,_#16767d_76.92%,_#16747b_84.62%,_#157178_92.31%,_#156f76)] w-[51.7px] h-[51.7px] flex items-center justify-center py-num-0 px-[12.9px] box-border shrink-0">
                <Image
                  className="h-num-25_8 w-full relative"
                  width={25.8}
                  height={25.8}
                  sizes="100vw"
                  alt=""
            src=""
                />
              </div>
              <div className="absolute top-[33.2px] left-[98.08px] w-num-301_3 h-num-25_8 flex items-start shrink-0 text-[18.45px]">
                <b className="w-[233.3px] relative leading-[25.83px] inline-block shrink-0">
                  HR Administrative (Remote)
                </b>
              </div>
              <div className="absolute top-[100.53px] left-[31.36px] w-num-301_3 h-[66.4px] shrink-0 text-darkgray">
                <div className="absolute top-[-1.84px] left-[0px] leading-num-22_14 inline-block w-[301.6px] shrink-0">
                  Streamline your HR operations with a remote HR administrative
                  professional. From managing employee...
                </div>
              </div>
              <div className="absolute top-[176.16px] left-[31.36px] w-[319.1px] h-num-22_1 shrink-0 text-center text-darkcyan-100">
                <Image
                  className="absolute top-[3.69px] right-[44.2px] w-[14.8px] h-[14.8px]"
                  width={14.8}
                  height={14.8}
                  sizes="100vw"
                  alt=""
            src=""
                />
                <div className="absolute top-[0px] left-[0px] leading-num-22_14 font-semibold inline-block w-[256.4px] h-num-22_1">
                  Hire an HR Administrative Specialist
                  <br />
                </div>
              </div>
            </div>
            <div className="h-[229.7px] w-[364.3px] relative rounded-[14.76px] bg-white border-whitesmoke-200 border-solid border-[1.8px] box-border">
              <div className="absolute top-[31.36px] left-[31.36px] rounded-[12.91px] [background:linear-gradient(135deg,_#22a3ad,_#21a1aa_11.11%,_#209ea8_22.22%,_#1f9ca5_33.33%,_#1e99a3_44.44%,_#1e97a0_55.56%,_#1d949e_66.67%,_#1c929b_77.78%,_#1b8f99_88.89%,_#1a8d96)] w-[51.7px] h-[51.7px] flex items-center justify-center py-num-0 px-[12.9px] box-border">
                <Image
                  className="h-num-25_8 w-full relative"
                  width={25.8}
                  height={25.8}
                  sizes="100vw"
                  alt=""
            src=""
                />
              </div>
              <div className="absolute top-[105.15px] left-[31.36px] w-num-301_3 h-num-25_8 flex items-start" />
              <b className="absolute top-[44.27px] left-[98.69px] text-[18.45px] leading-[25.83px] inline-block w-[170.6px]">
                Customer Support
              </b>
              <div className="absolute top-[97.77px] left-[31.36px] w-num-301_3 h-[66.4px] text-darkgray">
                <div className="absolute top-[-1.84px] left-[0px] leading-num-22_14 inline-block w-[301.6px] shrink-0">
                  Deliver exceptional customer experiences with a dedicated
                  remote support specialist. Our customer....
                </div>
              </div>
              <div className="absolute top-[178.93px] left-[31.36px] w-[319.1px] h-num-22_1 text-darkcyan-100">
                <Image
                  className="absolute top-[3.69px] right-[44.2px] w-[14.8px] h-[14.8px]"
                  width={14.8}
                  height={14.8}
                  sizes="100vw"
                  alt=""
            src=""
                />
                <div className="absolute top-[0px] left-[0px] leading-num-22_14 font-semibold inline-block w-[256.4px] h-num-22_1">
                  Hire a Customer Support Specialist
                </div>
              </div>
            </div>
            <div className="h-[229.7px] w-[364.3px] relative rounded-[14.76px] bg-white border-whitesmoke-200 border-solid border-[1.8px] box-border">
              <div className="absolute top-[31.36px] left-[31.36px] rounded-[12.91px] [background:linear-gradient(135deg,_#22a3ad,_#21a1aa_11.11%,_#209ea8_22.22%,_#1f9ca5_33.33%,_#1e99a3_44.44%,_#1e97a0_55.56%,_#1d949e_66.67%,_#1c929b_77.78%,_#1b8f99_88.89%,_#1a8d96)] w-[51.7px] h-[51.7px] flex items-center justify-center py-num-0 px-[12.9px] box-border">
                <Image
                  className="h-num-25_8 w-full relative"
                  width={25.8}
                  height={25.8}
                  sizes="100vw"
                  alt=""
            src=""
                />
              </div>
              <div className="absolute top-[105.15px] left-[31.36px] w-num-301_3 h-num-25_8 flex items-start" />
              <b className="absolute top-[44.27px] left-[98.69px] text-[18.45px] leading-[25.83px] inline-block w-[170.6px]">
                Customer Support
              </b>
              <div className="absolute top-[97.77px] left-[31.36px] w-num-301_3 h-[66.4px] text-darkgray">
                <div className="absolute top-[-1.84px] left-[0px] leading-num-22_14 inline-block w-[301.6px] shrink-0">
                  Deliver exceptional customer experiences with a dedicated
                  remote support specialist. Our customer....
                </div>
              </div>
              <div className="absolute top-[178.93px] left-[31.36px] w-[319.1px] h-num-22_1 text-darkcyan-100">
                <Image
                  className="absolute top-[3.69px] right-[44.2px] w-[14.8px] h-[14.8px]"
                  width={14.8}
                  height={14.8}
                  sizes="100vw"
                  alt=""
            src=""
                />
                <div className="absolute top-[0px] left-[0px] leading-num-22_14 font-semibold inline-block w-[256.4px] h-num-22_1">
                  Hire a Customer Support Specialist
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-num-1922 h-[921px] relative text-left text-num-36 text-white">
        <div className="absolute top-[309px] left-[0px] [background:linear-gradient(180deg,_#002025,_#002228_11.11%,_#00252b_22.22%,_#00272d_33.33%,_#002a30_44.44%,_#002d33_55.56%,_#002f36_66.67%,_#003239_77.78%,_#00343c_88.89%,_#00373f)] w-num-1922 h-[612px] overflow-hidden">
          <div className="absolute top-[64px] left-[calc(50%_-_781px)] w-[1562px] h-[72px] flex flex-col items-start py-num-0 px-16 box-border gap-2 shrink-0 text-center">
            <div className="self-stretch h-10 relative">
              <b className="absolute top-[0px] left-[472.31px] leading-num-40 shrink-0">{`Trusted by `}</b>
              <div className="absolute top-[-2px] left-[666.28px] w-[298.4px] h-11 flex items-start shrink-0">
                <b className="relative leading-num-40 text-transparent !bg-clip-text [background:linear-gradient(rgba(0,_0,_0,_0),_rgba(0,_0,_0,_0)),_linear-gradient(90deg,_#22a3ad,_#219fa9_7.14%,_#209ba5_14.29%,_#1f98a1_21.43%,_#1e949d_28.57%,_#1d9099_35.71%,_#1c8c95_42.86%,_#1b8991_50%,_#1a858d_57.14%,_#1a8189_64.29%,_#197d85_71.43%,_#187a81_78.57%,_#17767e_85.71%,_#16737a_92.86%,_#156f76)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                  Industry Leaders
                </b>
              </div>
            </div>
            <div className="self-stretch h-6 relative text-num-16 text-darkgray">
              <div className="absolute top-[-1px] left-[535.63px] leading-num-24">
                Powering innovation for 200+ global enterprises
              </div>
            </div>
          </div>
          <div className="absolute top-[168px] left-[0px] w-num-1922 h-16 overflow-hidden shrink-0 text-[24px] text-dimgray">
            <div className="absolute top-[0px] left-[-622.77px] w-[9142px] h-16 flex items-center py-num-0 pl-[32.2px] pr-8 box-border gap-[64.1px] shrink-0">
              <div className="h-16 w-44 relative shrink-0">
                <b className="absolute top-[15px] left-[31.77px] leading-num-32">
                  Microsoft
                </b>
              </div>
              <div className="h-16 w-[161px] relative shrink-0">
                <b className="absolute top-[15px] left-[32.16px] leading-num-32">
                  Amazon
                </b>
              </div>
              <div className="h-16 w-[147px] relative shrink-0">
                <b className="absolute top-[15px] left-[31.79px] leading-num-32">
                  Google
                </b>
              </div>
              <div className="h-16 w-num-109 relative shrink-0">
                <b className="absolute top-[15px] left-[32.01px] leading-num-32">
                  IBM
                </b>
              </div>
              <div className="h-16 w-num-141 relative shrink-0">
                <b className="absolute top-[15px] left-[32.1px] leading-num-32">
                  Oracle
                </b>
              </div>
              <div className="h-16 w-[113px] relative shrink-0">
                <b className="absolute top-[15px] left-[32.09px] leading-num-32">
                  SAP
                </b>
              </div>
              <div className="h-16 w-[189px] relative shrink-0">
                <b className="absolute top-[15px] left-[31.87px] leading-num-32">
                  Salesforce
                </b>
              </div>
              <div className="h-16 w-num-141 relative shrink-0">
                <b className="absolute top-[15px] left-[32.17px] leading-num-32">
                  Adobe
                </b>
              </div>
              <div className="h-16 w-[115px] relative shrink-0">
                <b className="absolute top-[15px] left-[31.98px] leading-num-32">
                  Intel
                </b>
              </div>
              <div className="h-16 w-[131px] relative shrink-0">
                <b className="absolute top-[15px] left-[32.23px] leading-num-32">
                  Cisco
                </b>
              </div>
              <div className="h-16 w-num-109 relative shrink-0">
                <b className="absolute top-[15px] left-[32.18px] leading-num-32">
                  Dell
                </b>
              </div>
              <div className="h-16 w-[97px] relative shrink-0">
                <b className="absolute top-[15px] left-[31.76px] leading-num-32">
                  HP
                </b>
              </div>
              <div className="h-16 w-[186px] relative shrink-0">
                <b className="absolute top-[15px] left-[31.97px] leading-num-32 shrink-0">
                  Accenture
                </b>
                <div className="absolute top-[0px] left-[-13.29px] [background:linear-gradient(-90deg,_#001a1e,_rgba(0,_22,_25,_0.92)_8.33%,_rgba(0,_18,_21,_0.83)_16.67%,_rgba(0,_14,_17,_0.75)_25%,_rgba(0,_10,_12,_0.67)_33.33%,_rgba(0,_7,_8,_0.58)_41.67%,_rgba(0,_4,_5,_0.5)_50%,_rgba(0,_2,_3,_0.42)_58.33%,_rgba(0,_1,_2,_0.33)_66.67%,_rgba(0,_1,_1,_0.25)_75%,_rgba(0,_0,_0,_0.17)_83.33%,_rgba(0,_0,_0,_0.08)_91.67%,_rgba(0,_0,_0,_0))] w-32 h-16 shrink-0" />
              </div>
              <div className="h-16 w-[155px] relative shrink-0">
                <b className="absolute top-[15px] left-[32.12px] leading-num-32">
                  Deloitte
                </b>
              </div>
              <div className="h-16 w-[118px] relative shrink-0">
                <b className="absolute top-[15px] left-[32.14px] leading-num-32">
                  PwC
                </b>
              </div>
              <div className="h-16 w-44 relative shrink-0">
                <b className="absolute top-[15px] left-[31.77px] leading-num-32">
                  Microsoft
                </b>
              </div>
              <div className="h-16 w-[161px] relative shrink-0">
                <b className="absolute top-[15px] left-[32.16px] leading-num-32">
                  Amazon
                </b>
              </div>
              <div className="h-16 w-[147px] relative shrink-0">
                <b className="absolute top-[15px] left-[31.79px] leading-num-32">
                  Google
                </b>
              </div>
              <div className="h-16 w-num-109 relative shrink-0">
                <b className="absolute top-[15px] left-[32.01px] leading-num-32">
                  IBM
                </b>
              </div>
              <div className="h-16 w-num-141 relative shrink-0">
                <b className="absolute top-[15px] left-[32.1px] leading-num-32">
                  Oracle
                </b>
              </div>
              <div className="h-16 w-[113px] relative shrink-0">
                <b className="absolute top-[15px] left-[32.09px] leading-num-32">
                  SAP
                </b>
              </div>
              <div className="h-16 w-[189px] relative shrink-0">
                <b className="absolute top-[15px] left-[31.87px] leading-num-32">
                  Salesforce
                </b>
              </div>
              <div className="h-16 w-num-141 relative shrink-0">
                <b className="absolute top-[15px] left-[32.17px] leading-num-32">
                  Adobe
                </b>
              </div>
              <div className="h-16 w-[115px] relative shrink-0">
                <b className="absolute top-[15px] left-[31.98px] leading-num-32">
                  Intel
                </b>
              </div>
              <div className="h-16 w-[131px] relative shrink-0">
                <b className="absolute top-[15px] left-[32.23px] leading-num-32">
                  Cisco
                </b>
              </div>
              <div className="h-16 w-num-109 relative shrink-0">
                <b className="absolute top-[15px] left-[32.18px] leading-num-32">
                  Dell
                </b>
              </div>
              <div className="h-16 w-[97px] relative shrink-0">
                <b className="absolute top-[15px] left-[31.76px] leading-num-32">
                  HP
                </b>
              </div>
              <div className="h-16 w-[186px] relative shrink-0">
                <b className="absolute top-[15px] left-[31.97px] leading-num-32">
                  Accenture
                </b>
              </div>
              <div className="h-16 w-[155px] relative shrink-0">
                <b className="absolute top-[15px] left-[32.13px] leading-num-32">
                  Deloitte
                </b>
              </div>
              <div className="h-16 w-[118px] relative shrink-0">
                <b className="absolute top-[15px] left-[32.14px] leading-num-32">
                  PwC
                </b>
              </div>
              <div className="h-16 w-44 relative shrink-0">
                <b className="absolute top-[15px] left-[31.77px] leading-num-32">
                  Microsoft
                </b>
              </div>
              <div className="h-16 w-[161px] relative shrink-0">
                <b className="absolute top-[15px] left-[32.16px] leading-num-32">
                  Amazon
                </b>
              </div>
              <div className="h-16 w-[147px] relative shrink-0">
                <b className="absolute top-[15px] left-[31.79px] leading-num-32">
                  Google
                </b>
              </div>
              <div className="h-16 w-num-109 relative shrink-0">
                <b className="absolute top-[15px] left-[32.01px] leading-num-32">
                  IBM
                </b>
              </div>
              <div className="h-16 w-num-141 relative shrink-0">
                <b className="absolute top-[15px] left-[32.1px] leading-num-32">
                  Oracle
                </b>
              </div>
              <div className="h-16 w-[113px] relative shrink-0">
                <b className="absolute top-[15px] left-[32.09px] leading-num-32">
                  SAP
                </b>
              </div>
              <div className="h-16 w-[189px] relative shrink-0">
                <b className="absolute top-[15px] left-[31.87px] leading-num-32">
                  Salesforce
                </b>
              </div>
              <div className="h-16 w-num-141 relative shrink-0">
                <b className="absolute top-[15px] left-[32.17px] leading-num-32">
                  Adobe
                </b>
              </div>
              <div className="h-16 w-[115px] relative shrink-0">
                <b className="absolute top-[15px] left-[31.98px] leading-num-32">
                  Intel
                </b>
              </div>
              <div className="h-16 w-[131px] relative shrink-0">
                <b className="absolute top-[15px] left-[32.23px] leading-num-32">
                  Cisco
                </b>
              </div>
              <div className="h-16 w-num-109 relative shrink-0">
                <b className="absolute top-[15px] left-[32.18px] leading-num-32">
                  Dell
                </b>
              </div>
              <div className="h-16 w-[97px] relative shrink-0">
                <b className="absolute top-[15px] left-[31.76px] leading-num-32">
                  HP
                </b>
              </div>
              <div className="h-16 w-[186px] relative shrink-0">
                <b className="absolute top-[15px] left-[31.97px] leading-num-32">
                  Accenture
                </b>
              </div>
              <div className="h-16 w-[155px] relative shrink-0">
                <b className="absolute top-[15px] left-[32.13px] leading-num-32">
                  Deloitte
                </b>
              </div>
              <div className="h-16 w-[118px] relative shrink-0">
                <b className="absolute top-[15px] left-[32.14px] leading-num-32">
                  PwC
                </b>
              </div>
            </div>
          </div>
          <div className="absolute top-[285.53px] left-[709px] [filter:blur(509.38px)] rounded-[56972572px] bg-darkcyan-100 w-[652px] h-[652px] opacity-[0.28] shrink-0" />
          <div className="absolute top-[168px] left-[0px] [background:linear-gradient(90deg,_#001a1e,_rgba(0,_22,_25,_0.92)_8.33%,_rgba(0,_18,_21,_0.83)_16.67%,_rgba(0,_14,_17,_0.75)_25%,_rgba(0,_10,_12,_0.67)_33.33%,_rgba(0,_7,_8,_0.58)_41.67%,_rgba(0,_4,_5,_0.5)_50%,_rgba(0,_2,_3,_0.42)_58.33%,_rgba(0,_1,_2,_0.33)_66.67%,_rgba(0,_1,_1,_0.25)_75%,_rgba(0,_0,_0,_0.17)_83.33%,_rgba(0,_0,_0,_0.08)_91.67%,_rgba(0,_0,_0,_0))] w-32 h-16 shrink-0" />
          <div className="absolute top-[296px] left-[244px] w-[1434px] h-[252px] shrink-0 text-num-16 text-darkcyan-100">
            <div className="absolute top-[0px] left-[0px] rounded-num-14 bg-gray-400 border-teal-400 border-solid border-[1px] box-border w-[456.7px] h-[252px]">
              <div className="absolute top-[25px] left-[25px] w-num-406_7 h-10 text-num-36">
                <div className="absolute top-[0px] left-[0px] leading-num-40">
                  "
                </div>
              </div>
              <div className="absolute top-[81px] left-[25px] w-num-406_7 h-num-52 text-lightgray">
                <div className="absolute top-[-1px] left-[0px] leading-num-26 inline-block w-[407px]">
                  Their AI solutions transformed our operations, reducing costs
                  by 40% while improving accuracy.
                </div>
              </div>
              <div className="absolute top-[157px] left-[25px] w-num-406_7 h-11 flex flex-col items-start text-white">
                <div className="self-stretch h-6 relative">
                  <div className="absolute top-[-1px] left-[0px] leading-num-24 font-semibold">
                    Sarah Johnson
                  </div>
                </div>
                <div className="self-stretch h-5 relative text-num-14 text-darkgray">
                  <div className="absolute top-[0px] left-[0px] leading-num-20">
                    CTO, Tech Corp
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-[0px] left-[488.66px] rounded-num-14 bg-gray-400 border-teal-400 border-solid border-[1px] box-border w-[456.7px] h-[252px]">
              <div className="absolute top-[25px] left-[25px] w-num-406_7 h-10 text-num-36">
                <div className="absolute top-[0px] left-[0px] leading-num-40">
                  "
                </div>
              </div>
              <div className="absolute top-[81px] left-[25px] w-num-406_7 h-num-52 text-lightgray">
                <div className="absolute top-[-1px] left-[0px] leading-num-26 inline-block w-[407px]">
                  Exceptional cloud migration expertise. Our infrastructure is
                  now more reliable and scalable....
                </div>
              </div>
              <div className="absolute top-[157px] left-[25px] w-num-406_7 h-11 flex flex-col items-start text-white">
                <div className="self-stretch h-6 relative">
                  <div className="absolute top-[-1px] left-[0px] leading-num-24 font-semibold">
                    Michael Chen
                  </div>
                </div>
                <div className="self-stretch h-5 relative text-num-14 text-darkgray">
                  <div className="absolute top-[0px] left-[0px] leading-num-20">
                    VP Engineering, Global Systems
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-[0px] left-[977.33px] rounded-num-14 bg-gray-400 border-teal-400 border-solid border-[1px] box-border w-[456.7px] h-[252px]">
              <div className="absolute top-[25px] left-[25px] w-num-406_7 h-10 text-num-36">
                <div className="absolute top-[0px] left-[0px] leading-num-40">
                  "
                </div>
              </div>
              <div className="absolute top-[81px] left-[25px] w-num-406_7 h-num-52 text-lightgray">
                <div className="absolute top-[-1px] left-[0px] leading-num-26 inline-block w-[407px]">
                  The supply chain transformation project exceeded all
                  expectations. Real-time visibility changed everything.
                </div>
              </div>
              <div className="absolute top-[157px] left-[25px] w-num-406_7 h-11 flex flex-col items-start text-white">
                <div className="self-stretch h-6 relative">
                  <div className="absolute top-[-1px] left-[0px] leading-num-24 font-semibold">
                    Emily Rodriguez
                  </div>
                </div>
                <div className="self-stretch h-5 relative text-num-14 text-darkgray">
                  <div className="absolute top-[0px] left-[0px] leading-num-20">
                    COO, Logistics Plus
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[0px] left-[0px] w-num-1922 h-[309px] text-center text-num-51_19 text-gray-200">
          <div className="absolute top-[0px] left-[0px] bg-gainsboro w-num-1922 h-[309px] flex flex-col items-start pt-[52px] pb-[35px] pl-52 pr-[211px] box-border">
            <div className="w-[1503px] h-[222px] relative">
              <b className="absolute top-[0px] left-[calc(50%_-_522.5px)] leading-num-60_15 inline-block w-[1046px] h-[114px]">
                <span>{`Why `}</span>
                <span className="text-darkcyan-200">
                  Businesses Keep Coming Back
                </span>
                <span> to Us</span>
              </b>
              <div className="absolute top-[76px] left-[calc(50%_-_751.5px)] text-[20.48px] leading-[29.44px] inline-block w-[1503px] h-[146px]">
                IT Solutions Worldwide has helped companies of all sizes, from
                fast-growing startups to established enterprises, build
                efficient, cost-effective remote teams. We place most clients
                with a shortlist of candidates within 3–5 business days, and
                because every professional is thoroughly pre-vetted, the working
                relationships we build tend to be long-term and stable. We work
                with both Dutch and international businesses, offer transparent
                pricing with no hidden fees, and give every client a single
                dedicated point of contact from start to finish. Simple, honest,
                and built around your success.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1038.2px] h-[847px] flex flex-col items-start gap-[37.1px] text-[55.62px] text-gray-100">
        <div className="self-stretch h-[98.5px] flex flex-col items-start gap-[10.4px] shrink-0">
          <div className="self-stretch h-[55.6px] relative">
            <b className="absolute top-[-3.48px] left-[133.65px] leading-[55.62px] shrink-0">
              Frequently Asked Questions
            </b>
          </div>
          <div className="self-stretch h-num-32_4 flex items-start text-[23.17px] text-dimgray">
            <div className="flex-1 relative leading-num-32_44">
              Got questions? We've got answers.
            </div>
          </div>
        </div>
        <div className="self-stretch h-[814px] flex flex-col items-start gap-[18.5px] shrink-0 text-left text-num-20_86">
          <div className="self-stretch h-[228.3px] shadow-[8.110808372497559px_13.904242515563965px_38.58px_2.32px_rgba(0,_0,_0,_0.15),_0px_1.158686876296997px_2.32px_-1.16px_rgba(0,_0,_0,_0.1)] rounded-num-18_54 bg-white border-whitesmoke-100 border-solid border-[1.2px] box-border overflow-hidden shrink-0 flex flex-col items-start p-num-1_2">
            <div className="self-stretch h-num-102 relative">
              <div className="absolute top-[34.76px] left-[27.81px] w-[514.8px] h-num-32_4">
                <div className="absolute top-[-1.16px] left-[0px] leading-num-32_44 font-semibold shrink-0">
                  What types of roles can IT Solutions Worldwide fill?
                </div>
              </div>
              <div className="absolute top-[74.16px] left-[1008.06px] rounded-num-38879044 bg-teal-300 w-[46.3px] h-num-46_3 flex items-center justify-center py-num-0 px-num-11_6 box-border [transform:_rotate(180deg)] [transform-origin:0_0]">
                <Image
                  className="h-num-23_2 w-full relative [transform:_rotate(-180deg)]"
                  width={23.2}
                  height={23.2}
                  sizes="100vw"
                  alt=""
            src=""
                />
              </div>
            </div>
            <div className="self-stretch h-[95.6px] relative text-dimgray">
              <div className="absolute top-[-1.16px] left-[27.81px] leading-[33.89px] inline-block w-[980.2px] shrink-0">
                We specialize in remote professional roles including
                Administrative Support, HR Administrative, Customer Support,
                Data Entry, and more. Our network is growing — reach out if you
                have a specific role in mind and we'll let you know if we can
                help.
              </div>
            </div>
          </div>
          <div className="self-stretch h-[104.3px] shadow-[8.110808372497559px_13.904242515563965px_38.58px_2.32px_rgba(0,_0,_0,_0.15),_0px_1.158686876296997px_3.48px_rgba(0,_0,_0,_0.1),_0px_1.158686876296997px_2.32px_-1.16px_rgba(0,_0,_0,_0.1)] rounded-num-18_54 bg-white border-whitesmoke-100 border-solid border-[1.2px] box-border overflow-hidden shrink-0 flex flex-col items-start p-num-1_2">
            <div className="self-stretch h-num-102 flex items-center justify-between p-[27.8px] box-border gap-5">
              <div className="h-num-32_4 w-[304px] relative">
                <div className="absolute top-[-1.16px] left-[0px] leading-num-32_44 font-semibold shrink-0">
                  How quickly can I hire someone?
                </div>
              </div>
              <div className="h-num-46_3 w-[46.3px] rounded-num-38879044 bg-teal-300 flex items-center justify-center py-num-0 px-num-11_6 box-border">
                <Image
                  className="h-num-23_2 w-full relative"
                  width={23.2}
                  height={23.2}
                  sizes="100vw"
                  alt=""
            src=""
                />
              </div>
            </div>
          </div>
          <div className="self-stretch h-[104.3px] shadow-[8.110808372497559px_13.904242515563965px_38.58px_2.32px_rgba(0,_0,_0,_0.15),_0px_1.158686876296997px_3.48px_rgba(0,_0,_0,_0.1),_0px_1.158686876296997px_2.32px_-1.16px_rgba(0,_0,_0,_0.1)] rounded-num-18_54 bg-white border-whitesmoke-100 border-solid border-[1.2px] box-border overflow-hidden shrink-0 flex flex-col items-start p-num-1_2">
            <div className="self-stretch h-num-102 flex items-center justify-between p-[27.8px] box-border gap-5">
              <div className="h-num-32_4 w-[372.3px] relative">
                <div className="absolute top-[-1.16px] left-[0px] leading-num-32_44 font-semibold shrink-0">
                  What is the cost of outsourcing through IT Solutions
                  Worldwide?
                </div>
              </div>
              <div className="h-num-46_3 w-[46.3px] rounded-num-38879044 bg-teal-300 flex items-center justify-center py-num-0 px-num-11_6 box-border">
                <Image
                  className="h-num-23_2 w-full relative"
                  width={23.2}
                  height={23.2}
                  sizes="100vw"
                  alt=""
            src=""
                />
              </div>
            </div>
          </div>
          <div className="self-stretch h-[104.3px] shadow-[8.110808372497559px_13.904242515563965px_38.58px_2.32px_rgba(0,_0,_0,_0.15),_0px_1.158686876296997px_3.48px_rgba(0,_0,_0,_0.1),_0px_1.158686876296997px_2.32px_-1.16px_rgba(0,_0,_0,_0.1)] rounded-num-18_54 bg-white border-whitesmoke-100 border-solid border-[1.2px] box-border overflow-hidden shrink-0 flex flex-col items-start p-num-1_2">
            <div className="self-stretch h-num-102 flex items-center justify-between p-[27.8px] box-border gap-5">
              <div className="h-num-32_4 w-[410.1px] relative">
                <div className="absolute top-[-1.16px] left-[0px] leading-num-32_44 font-semibold shrink-0">
                  Is this suitable for small businesses?
                </div>
              </div>
              <div className="h-num-46_3 w-[46.3px] rounded-num-38879044 bg-teal-300 flex items-center justify-center py-num-0 px-num-11_6 box-border">
                <Image
                  className="h-num-23_2 w-full relative"
                  width={23.2}
                  height={23.2}
                  sizes="100vw"
                  alt=""
            src=""
                />
              </div>
            </div>
          </div>
          <div className="self-stretch h-[104.3px] shadow-[8.110808372497559px_13.904242515563965px_38.58px_2.32px_rgba(0,_0,_0,_0.15),_0px_1.158686876296997px_3.48px_rgba(0,_0,_0,_0.1),_0px_1.158686876296997px_2.32px_-1.16px_rgba(0,_0,_0,_0.1)] rounded-num-18_54 bg-white border-whitesmoke-100 border-solid border-[1.2px] box-border overflow-hidden shrink-0 flex flex-col items-start p-num-1_2">
            <div className="self-stretch h-num-102 flex items-center justify-between p-[27.8px] box-border gap-5">
              <div className="h-num-32_4 w-[338.8px] relative">
                <div className="absolute top-[-1.16px] left-[0px] leading-num-32_44 font-semibold shrink-0">
                  How do you ensure quality and reliability?
                </div>
              </div>
              <div className="h-num-46_3 w-[46.3px] rounded-num-38879044 bg-teal-300 flex items-center justify-center py-num-0 px-num-11_6 box-border">
                <Image
                  className="h-num-23_2 w-full relative"
                  width={23.2}
                  height={23.2}
                  sizes="100vw"
                  alt=""
            src=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-num-1520 h-[161px] relative">
        <div className="absolute top-[0px] left-[calc(50%_-_760px)] w-num-1520 h-[161px]">
          <div className="absolute top-[0px] left-[calc(50%_-_760px)] w-num-1520 h-[161px]">
            <b className="absolute top-[0px] left-[calc(50%_-_522.43px)] leading-num-60_15 inline-block w-[1044.9px] h-[114px]">
              <span>{`Ready to `}</span>
              <span className="text-darkcyan-200">Build Your Remote Team?</span>
            </b>
            <div className="absolute top-[74px] left-[calc(50%_-_760px)] text-[20.48px] leading-[29.44px] inline-block w-num-1520 h-[87px]">
              Stop spending time on recruitment and start focusing on growth. IT
              Solutions Worldwide makes it easy to hire skilled, reliable remote
              staff — quickly and affordably.
              <br />
              Browse the roles below or contact us today to tell us what you
              need. We're here to help.
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1920px] h-[1588px] relative text-left text-[48px] text-white">
        <div className="absolute top-[0px] left-[0px] [background:linear-gradient(180deg,_#002025,_#002228_11.11%,_#00252b_22.22%,_#00272d_33.33%,_#002a30_44.44%,_#002d33_55.56%,_#002f36_66.67%,_#003239_77.78%,_#00343c_88.89%,_#00373f)] w-[1920px] h-[956px] overflow-hidden">
          <div className="absolute top-[-129px] left-[1134px] [filter:blur(509.38px)] rounded-[56972572px] bg-darkcyan-100 w-[930px] h-[930px] opacity-[0.28] shrink-0" />
          <div className="absolute top-[437px] left-[342px] [filter:blur(300px)] rounded-[33554400px] bg-darkcyan-100 w-96 h-96 opacity-[0.28] shrink-0" />
          <div className="absolute top-[833px] left-[0px] [filter:blur(300px)] rounded-[33554400px] bg-teal-100 w-96 h-96 opacity-[0.1] shrink-0" />
          <div className="absolute top-[65px] left-[576px] w-[768px] h-[75px] shrink-0 text-center text-lightgray">
            <div className="absolute top-[50px] left-[0px] w-[768px] h-[25px] text-[20px]">
              <div className="absolute top-[0px] left-[50.27px] leading-num-28 shrink-0">
                Ready to transform your business? Get in touch with our experts
                today
              </div>
            </div>
            <b className="absolute top-[1px] left-[238px] leading-[48px] inline-block text-white w-28 h-11">{`Let's `}</b>
            <div className="absolute top-[0px] left-[357.45px] w-[199.1px] h-[59px] flex items-start">
              <b className="h-11 w-[201px] relative leading-[48px] inline-block text-transparent !bg-clip-text [background:linear-gradient(rgba(0,_0,_0,_0),_rgba(0,_0,_0,_0)),_linear-gradient(90deg,_#22a3ad,_#219fa9_7.14%,_#209ba5_14.29%,_#1f98a1_21.43%,_#1e949d_28.57%,_#1d9099_35.71%,_#1c8c95_42.86%,_#1b8991_50%,_#1a858d_57.14%,_#1a8189_64.29%,_#197d85_71.43%,_#187a81_78.57%,_#17767e_85.71%,_#16737a_92.86%,_#156f76)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] shrink-0">
                Connect
              </b>
            </div>
          </div>
          <div className="absolute top-[199px] left-[279px] w-[726px] h-[598px] flex flex-col items-start gap-4 shrink-0 text-[30px]">
            <div className="self-stretch h-[104px] flex flex-col items-start gap-4">
              <div className="self-stretch h-9 flex items-start">
                <b className="flex-1 relative leading-9">Get in Touch</b>
              </div>
              <div className="self-stretch h-num-52 relative text-num-16 text-lightgray">
                <div className="absolute top-[-1px] left-[0px] leading-num-26 inline-block w-[693px]">
                  Have a project in mind? We'd love to hear from you. Send us a
                  message and we'll respond as soon as possible.
                </div>
              </div>
            </div>
            <div className="self-stretch h-[217px] relative text-num-14 text-darkgray">
              <div className="absolute top-[0px] left-[0px] rounded-num-14 bg-gray-400 border-teal-400 border-solid border-[1px] box-border w-[354px] h-[98px]">
                <div className="absolute top-[21px] left-[21px] rounded-num-10 [background:linear-gradient(135deg,_#22a3ad,_#219fa9_7.14%,_#209ba5_14.29%,_#1f98a1_21.43%,_#1e949d_28.57%,_#1d9099_35.71%,_#1c8c95_42.86%,_#1b8991_50%,_#1a858d_57.14%,_#1a8189_64.29%,_#197d85_71.43%,_#187a81_78.57%,_#17767e_85.71%,_#16737a_92.86%,_#156f76)] w-14 h-14 flex items-center justify-center py-num-0 px-4 box-border">
                  <Image
                    className="h-6 w-full relative"
                    width={24}
                    height={24}
                    sizes="100vw"
                    alt=""
            src=""
                  />
                </div>
                <div className="absolute top-[23px] left-[93px] w-[207.4px] h-num-52 flex flex-col items-start gap-1">
                  <div className="self-stretch h-5 relative">
                    <div className="absolute top-[0px] left-[0px] leading-num-20">
                      Email Us
                    </div>
                  </div>
                  <div className="relative text-num-18 leading-num-28 font-semibold text-white">
                    contact@company.com
                  </div>
                </div>
              </div>
              <div className="absolute top-[0px] left-[372px] rounded-num-14 bg-gray-400 border-teal-400 border-solid border-[1px] box-border w-[354px] h-[98px] flex items-center p-5 gap-4">
                <div className="h-14 w-14 rounded-num-10 [background:linear-gradient(135deg,_#22a3ad,_#219fa9_7.14%,_#209ba5_14.29%,_#1f98a1_21.43%,_#1e949d_28.57%,_#1d9099_35.71%,_#1c8c95_42.86%,_#1b8991_50%,_#1a858d_57.14%,_#1a8189_64.29%,_#197d85_71.43%,_#187a81_78.57%,_#17767e_85.71%,_#16737a_92.86%,_#156f76)] flex items-center justify-center py-num-0 px-4 box-border">
                  <Image
                    className="h-6 w-full relative"
                    width={24}
                    height={24}
                    sizes="100vw"
                    alt=""
            src=""
                  />
                </div>
                <div className="h-num-52 w-[158.8px] flex flex-col items-start gap-1">
                  <div className="self-stretch h-5 relative">
                    <div className="absolute top-[0px] left-[0px] leading-num-20">
                      Call Us
                    </div>
                  </div>
                  <div className="self-stretch h-7 relative text-num-18 text-white">
                    <div className="absolute top-[0px] left-[0px] leading-num-28 font-semibold shrink-0">
                      +1 (555) 123-4567
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute w-full top-[119px] right-[0px] left-[0px] rounded-num-14 bg-gray-400 border-teal-400 border-solid border-[1px] box-border h-[98px] flex items-center p-5 gap-4">
                <div className="h-14 w-14 rounded-num-10 [background:linear-gradient(135deg,_#22a3ad,_#219fa9_7.14%,_#209ba5_14.29%,_#1f98a1_21.43%,_#1e949d_28.57%,_#1d9099_35.71%,_#1c8c95_42.86%,_#1b8991_50%,_#1a858d_57.14%,_#1a8189_64.29%,_#197d85_71.43%,_#187a81_78.57%,_#17767e_85.71%,_#16737a_92.86%,_#156f76)] flex items-center justify-center py-num-0 px-4 box-border">
                  <Image
                    className="h-6 w-full relative"
                    width={24}
                    height={24}
                    sizes="100vw"
                    alt=""
            src=""
                  />
                </div>
                <div className="h-num-52 w-[243.4px] flex flex-col items-start gap-1">
                  <div className="self-stretch h-5 relative">
                    <div className="absolute top-[0px] left-[0px] leading-num-20">
                      Visit Us
                    </div>
                  </div>
                  <div className="self-stretch h-7 relative text-num-18 text-white">
                    <div className="absolute top-[0px] left-[0px] leading-num-28 font-semibold">
                      123 Business Ave, Tech City
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch h-[88px] flex flex-col items-start gap-4 text-num-16">
              <div className="self-stretch h-6 relative">
                <div className="absolute top-[-1px] left-[0px] leading-num-24 font-semibold">
                  Follow Us
                </div>
              </div>
              <div className="self-stretch h-12 flex items-start gap-4">
                <div className="h-12 w-12 rounded-num-10 bg-gray-400 border-teal-400 border-solid border-[1px] box-border flex items-center justify-center py-num-0 px-[13px]">
                  <Image
                    className="h-5 w-full relative"
                    width={20}
                    height={20}
                    sizes="100vw"
                    alt=""
            src=""
                  />
                </div>
                <div className="h-12 w-12 rounded-num-10 bg-gray-400 border-teal-400 border-solid border-[1px] box-border flex items-center justify-center py-num-0 px-[13px]">
                  <Image
                    className="h-5 w-full relative"
                    width={20}
                    height={20}
                    sizes="100vw"
                    alt=""
            src=""
                  />
                </div>
                <div className="h-12 w-12 rounded-num-10 bg-gray-400 border-teal-400 border-solid border-[1px] box-border flex items-center justify-center py-num-0 px-[13px]">
                  <Image
                    className="h-5 w-full relative"
                    width={20}
                    height={20}
                    sizes="100vw"
                    alt=""
            src=""
                  />
                </div>
                <div className="h-12 w-12 rounded-num-10 bg-gray-400 border-teal-400 border-solid border-[1px] box-border flex items-center justify-center py-num-0 px-[13px]">
                  <Image
                    className="h-5 w-full relative"
                    width={20}
                    height={20}
                    sizes="100vw"
                    alt=""
            src=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-[199px] left-[1119px] shadow-[0px_23.14241600036621px_46.28px_-11.11px_rgba(0,_0,_0,_0.25)] rounded-[14.81px] [background:linear-gradient(135deg,_rgba(0,_32,_37,_0.5),_rgba(0,_55,_63,_0.5))] border-teal-400 border-solid border-[0.9px] box-border w-[642px] h-[664px] flex flex-col items-start pt-9 px-[38px] pb-[0.9px] gap-[39px] shrink-0 text-num-12_96">
            <div className="self-stretch h-num-72_2 relative">
              <div className="absolute top-[0px] left-[0px] w-[271.7px] h-num-72_2 flex flex-col items-start gap-[7.4px]">
                <div className="self-stretch h-num-18_5 relative">
                  <div className="absolute top-[0px] left-[0px] leading-num-18_51 font-semibold">
                    Your Name *
                  </div>
                </div>
                <div className="self-stretch h-num-46_3 rounded-num-9_26 bg-gray-300 border-teal-200 border-solid border-[0.9px] box-border overflow-hidden shrink-0 flex items-center py-num-11_1 px-num-14_8 text-num-14_81 text-slategray">
                  <div className="relative">John Doe</div>
                </div>
              </div>
              <div className="absolute top-[0px] left-[293.91px] w-[271.7px] h-num-72_2 flex flex-col items-start gap-[7.4px]">
                <div className="self-stretch h-num-18_5 relative">
                  <div className="absolute top-[0px] left-[0px] leading-num-18_51 font-semibold">
                    Email Address *
                  </div>
                </div>
                <div className="self-stretch h-num-46_3 rounded-num-9_26 bg-gray-300 border-teal-200 border-solid border-[0.9px] box-border overflow-hidden shrink-0 flex items-center py-num-11_1 px-num-14_8 text-num-14_81 text-slategray">
                  <div className="relative">john@example.com</div>
                </div>
              </div>
            </div>
            <div className="self-stretch h-num-72_2 relative">
              <div className="absolute top-[0px] left-[0px] w-[271.7px] h-num-72_2 flex flex-col items-start gap-[7.4px]">
                <div className="self-stretch h-num-18_5 relative">
                  <div className="absolute top-[0px] left-[0px] leading-num-18_51 font-semibold">
                    Phone Number
                  </div>
                </div>
                <div className="self-stretch h-num-46_3 rounded-num-9_26 bg-gray-300 border-teal-200 border-solid border-[0.9px] box-border overflow-hidden shrink-0 flex items-center py-num-11_1 px-num-14_8 text-num-14_81 text-slategray">
                  <div className="relative">+1 (555) 000-0000</div>
                </div>
              </div>
              <div className="absolute top-[0px] left-[293.91px] w-[271.7px] h-num-72_2 flex flex-col items-start gap-[7.4px]">
                <div className="self-stretch h-num-18_5 relative">
                  <div className="absolute top-[0px] left-[0px] leading-num-18_51 font-semibold">
                    Company
                  </div>
                </div>
                <div className="self-stretch h-num-46_3 rounded-num-9_26 bg-gray-300 border-teal-200 border-solid border-[0.9px] box-border overflow-hidden shrink-0 flex items-center py-num-11_1 px-num-14_8 text-num-14_81 text-slategray">
                  <div className="relative">Your Company</div>
                </div>
              </div>
            </div>
            <div className="self-stretch h-[70.4px] flex flex-col items-start gap-[7.4px]">
              <div className="self-stretch h-num-18_5 relative">
                <div className="absolute top-[0px] left-[0px] leading-num-18_51 font-semibold">
                  Service Interested In
                </div>
              </div>
              <div className="self-stretch h-[44.4px] relative rounded-num-9_26 bg-gray-300 border-teal-200 border-solid border-[0.9px] box-border" />
            </div>
            <div className="self-stretch h-[166.6px] flex flex-col items-start gap-[7.4px]">
              <div className="self-stretch h-num-18_5 relative">
                <div className="absolute top-[0px] left-[0px] leading-num-18_51 font-semibold">
                  Your Message *
                </div>
              </div>
              <div className="self-stretch h-[135.2px] rounded-num-9_26 bg-gray-300 border-teal-200 border-solid border-[0.9px] box-border overflow-hidden shrink-0 flex items-start py-num-11_1 px-num-14_8 text-num-14_81 text-slategray">
                <div className="relative leading-[22.22px]">
                  Tell us about your project...
                </div>
              </div>
            </div>
            <div className="self-stretch h-[51.8px] relative rounded-num-9_26 [background:linear-gradient(90deg,_#22a3ad,_#219fa9_7.14%,_#209ba5_14.29%,_#1f98a1_21.43%,_#1e949d_28.57%,_#1d9099_35.71%,_#1c8c95_42.86%,_#1b8991_50%,_#1a858d_57.14%,_#1a8189_64.29%,_#197d85_71.43%,_#187a81_78.57%,_#17767e_85.71%,_#16737a_92.86%,_#156f76)] text-center text-num-14_81">
              <div className="absolute top-[13.89px] left-[217.02px] leading-[22.22px] font-semibold">
                Send Message
              </div>
              <Image
                className="absolute top-[16.66px] left-[330.07px] w-[18.5px] h-num-18_5"
                width={18.5}
                height={18.5}
                sizes="100vw"
                alt=""
            src=""
              />
            </div>
          </div>
          <Image
            className="absolute top-[668px] left-[calc(50%_-_681px)] shadow-[7.318573951721191px_7.318573951721191px_18.3px_rgba(0,_0,_0,_0.1)] rounded-[37.73px] w-[726px] h-[195px] object-cover shrink-0"
            width={726}
            height={195}
            sizes="100vw"
            alt=""
            src=""
          />
        </div>
        <div className="absolute w-full top-[956px] right-[0px] left-[0px] bg-gray-300 border-teal-400 border-solid border-t-[1px] box-border h-[632px] text-[30px]">
          <div className="absolute w-full top-[1px] right-[0px] left-[0px] h-[631px]">
            <div className="absolute top-[0px] left-[calc(50%_-_717px)] border-teal-400 border-solid border-b-[1px] box-border w-[1434px] h-[165px] flex flex-col items-start pt-12 px-num-0 pb-px">
              <div className="w-[1434px] h-[68px] relative">
                <div className="absolute top-[0px] left-[0px] w-[701px] h-[68px] flex flex-col items-start gap-2">
                  <div className="self-stretch h-9 flex items-start">
                    <b className="flex-1 relative leading-9">
                      Stay Updated with Latest Tech Insights
                    </b>
                  </div>
                  <div className="self-stretch h-6 relative text-num-16 text-darkgray">
                    <div className="absolute top-[-1px] left-[0px] leading-num-24">
                      Subscribe to our newsletter for industry news and
                      exclusive content
                    </div>
                  </div>
                </div>
                <div className="absolute top-[9px] left-[733px] w-[701px] h-[50px] flex items-start gap-3 text-num-16 text-slategray">
                  <div className="h-[50px] flex-1 rounded-num-10 bg-gray-200 border-teal-200 border-solid border-[1px] box-border overflow-hidden flex items-center py-3 px-4">
                    <div className="relative">Enter your email</div>
                  </div>
                  <div className="h-[50px] w-[150.4px] relative rounded-num-10 [background:linear-gradient(90deg,_#22a3ad,_#219fa9_7.14%,_#209ba5_14.29%,_#1f98a1_21.43%,_#1e949d_28.57%,_#1d9099_35.71%,_#1c8c95_42.86%,_#1b8991_50%,_#1a858d_57.14%,_#1a8189_64.29%,_#197d85_71.43%,_#187a81_78.57%,_#17767e_85.71%,_#16737a_92.86%,_#156f76)] text-center text-white">
                    <div className="absolute top-[12px] left-[24px] leading-num-24 font-semibold">
                      Subscribe
                    </div>
                    <Image
                      className="absolute top-[17px] left-[110.39px] w-4 h-4"
                      width={16}
                      height={16}
                      sizes="100vw"
                      alt=""
            src=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-[165px] left-[calc(50%_-_685px)] w-[1370px] h-96 text-num-18">
              <div className="absolute top-[64px] left-[0px] w-num-248_4 h-64 shrink-0 text-num-16 text-darkgray">
                <div className="absolute top-[0px] left-[0px] w-[140.4px] h-12 overflow-hidden" />
                <div className="absolute top-[72px] left-[0px] w-num-248_4 h-[78px]">
                  <div className="absolute top-[-1px] left-[0px] leading-num-26 inline-block w-[249px]">
                    Empowering businesses with cutting-edge IT solutions and
                    digital transformation services.
                  </div>
                </div>
                <div className="absolute top-[174px] left-[0px] w-num-248_4 h-10 flex items-start gap-3">
                  <div className="h-10 w-10 rounded-num-10 bg-gray-200 border-teal-400 border-solid border-[1px] box-border flex items-center justify-center py-num-0 px-[11px]">
                    <Image
                      className="h-4 w-full relative"
                      width={16}
                      height={16}
                      sizes="100vw"
                      alt=""
            src=""
                    />
                  </div>
                  <div className="h-10 w-10 rounded-num-10 bg-gray-200 border-teal-400 border-solid border-[1px] box-border flex items-center justify-center py-num-0 px-[11px]">
                    <Image
                      className="h-4 w-full relative"
                      width={16}
                      height={16}
                      sizes="100vw"
                      alt=""
            src=""
                    />
                  </div>
                  <div className="h-10 w-10 rounded-num-10 bg-gray-200 border-teal-400 border-solid border-[1px] box-border flex items-center justify-center py-num-0 px-[11px]">
                    <Image
                      className="h-4 w-full relative"
                      width={16}
                      height={16}
                      sizes="100vw"
                      alt=""
            src=""
                    />
                  </div>
                  <div className="h-10 w-10 rounded-num-10 bg-gray-200 border-teal-400 border-solid border-[1px] box-border flex items-center justify-center py-num-0 px-[11px]">
                    <Image
                      className="h-4 w-full relative"
                      width={16}
                      height={16}
                      sizes="100vw"
                      alt=""
            src=""
                    />
                  </div>
                </div>
              </div>
              <div className="absolute top-[64px] left-[296.39px] w-num-248_4 h-64 flex flex-col items-start gap-6 shrink-0">
                <div className="self-stretch h-7 relative">
                  <b className="absolute top-[0px] left-[0px] leading-num-28">
                    Services
                  </b>
                </div>
                <div className="self-stretch h-[204px] flex flex-col items-start gap-3 text-num-14 text-darkgray">
                  <div className="self-stretch h-6 relative">
                    <div className="absolute top-[3px] left-[0px] leading-num-20">
                      Web Development
                    </div>
                  </div>
                  <div className="self-stretch h-6 relative">
                    <div className="absolute top-[3px] left-[0px] leading-num-20">
                      Mobile Apps
                    </div>
                  </div>
                  <div className="self-stretch h-6 relative">
                    <div className="absolute top-[3px] left-[0px] leading-num-20">
                      Cloud Solutions
                    </div>
                  </div>
                  <div className="self-stretch h-6 relative">
                    <div className="absolute top-[3px] left-[0px] leading-num-20">{`AI & Machine Learning`}</div>
                  </div>
                  <div className="self-stretch h-6 relative">
                    <div className="absolute top-[3px] left-[0px] leading-num-20">
                      Cybersecurity
                    </div>
                  </div>
                  <div className="self-stretch h-6 relative">
                    <div className="absolute top-[3px] left-[0px] leading-num-20">{`DevOps & Automation`}</div>
                  </div>
                </div>
              </div>
              <div className="absolute top-[64px] left-[592.8px] w-num-248_4 h-64 flex flex-col items-start gap-6 shrink-0">
                <div className="self-stretch h-7 relative">
                  <b className="absolute top-[0px] left-[0px] leading-num-28">
                    Industries
                  </b>
                </div>
                <div className="self-stretch h-[204px] flex flex-col items-start gap-3 text-num-14 text-darkgray">
                  <div className="self-stretch h-6 relative">
                    <div className="absolute top-[3px] left-[0px] leading-num-20">{`Enterprise & Corporate`}</div>
                  </div>
                  <div className="self-stretch h-6 relative">
                    <div className="absolute top-[3px] left-[0px] leading-num-20">{`E-commerce & Retail`}</div>
                  </div>
                  <div className="self-stretch h-6 relative">
                    <div className="absolute top-[3px] left-[0px] leading-num-20">
                      Healthcare
                    </div>
                  </div>
                  <div className="self-stretch h-6 relative">
                    <div className="absolute top-[3px] left-[0px] leading-num-20">{`Logistics & Supply Chain`}</div>
                  </div>
                  <div className="self-stretch h-6 relative">
                    <div className="absolute top-[3px] left-[0px] leading-num-20">
                      Education
                    </div>
                  </div>
                  <div className="self-stretch h-6 relative">
                    <div className="absolute top-[3px] left-[0px] leading-num-20">{`Banking & Finance`}</div>
                  </div>
                </div>
              </div>
              <div className="absolute top-[64px] left-[889.19px] w-num-248_4 h-64 flex flex-col items-start gap-6 shrink-0">
                <div className="self-stretch h-7 relative">
                  <b className="absolute top-[0px] left-[0px] leading-num-28">
                    Company
                  </b>
                </div>
                <div className="self-stretch h-[204px] flex flex-col items-start gap-3 text-num-14 text-darkgray">
                  <div className="self-stretch h-6 relative">
                    <div className="absolute top-[3px] left-[0px] leading-num-20">
                      About Us
                    </div>
                  </div>
                  <div className="self-stretch h-6 relative">
                    <div className="absolute top-[3px] left-[0px] leading-num-20">
                      Careers
                    </div>
                  </div>
                  <div className="self-stretch h-6 relative">
                    <div className="absolute top-[3px] left-[0px] leading-num-20">
                      Case Studies
                    </div>
                  </div>
                  <div className="self-stretch h-6 relative">
                    <div className="absolute top-[3px] left-[0px] leading-num-20">
                      Blog
                    </div>
                  </div>
                  <div className="self-stretch h-6 relative">
                    <div className="absolute top-[3px] left-[0px] leading-num-20">
                      Contact Us
                    </div>
                  </div>
                  <div className="self-stretch h-6 relative">
                    <div className="absolute top-[3px] left-[0px] leading-num-20">
                      Partnerships
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-[64px] left-[1185.59px] w-num-248_4 h-64 flex flex-col items-start gap-6 shrink-0">
                <div className="self-stretch h-7 relative">
                  <b className="absolute top-[0px] left-[0px] leading-num-28">
                    Contact
                  </b>
                </div>
                <div className="self-stretch h-[132px] flex flex-col items-start gap-4 text-num-14 text-darkgray">
                  <div className="self-stretch h-5 relative">
                    <Image
                      className="absolute top-[2px] left-[0px] w-4 h-4"
                      width={16}
                      height={16}
                      sizes="100vw"
                      alt=""
            src=""
                    />
                    <div className="absolute top-[0px] left-[28px] w-[156.5px] h-5">
                      <div className="absolute top-[0px] left-[0px] leading-num-20">
                        contact@company.com
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch h-5 relative">
                    <Image
                      className="absolute top-[2px] left-[0px] w-4 h-4"
                      width={16}
                      height={16}
                      sizes="100vw"
                      alt=""
            src=""
                    />
                    <div className="absolute top-[0px] left-[28px] w-[121.3px] h-5">
                      <div className="absolute top-[0px] left-[0px] leading-num-20 shrink-0">
                        +1 (555) 123-4567
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch h-[60px] relative">
                    <Image
                      className="absolute top-[2px] left-[0px] w-4 h-4"
                      width={16}
                      height={16}
                      sizes="100vw"
                      alt=""
            src=""
                    />
                    <div className="absolute top-[0px] left-[28px] w-[139.4px] h-[60px]">
                      <div className="absolute top-[0px] left-[0px] leading-num-20 inline-block w-[140px]">
                        123 Business Avenue
                        <br />
                        Tech City, TC 12345
                        <br />
                        United States
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-[549px] left-[243px] border-teal-400 border-solid border-t-[1px] box-border w-[1466px] h-[82px] flex flex-col items-start pt-[25px] px-num-0 pb-num-0 text-num-14 text-darkgray">
              <div className="self-stretch h-[33px] flex items-center justify-between gap-5">
                <div className="h-5 w-[332.2px] relative">
                  <div className="absolute top-[0px] left-[0px] leading-num-20">
                    © 2026 IT Solutions Company. All rights reserved.
                  </div>
                </div>
                <div className="h-5 w-[715.8px] relative">
                  <div className="absolute top-[0px] left-[0px] w-[100.6px] h-5">
                    <div className="absolute top-[0px] left-[0px] leading-num-20">
                      Documentation
                    </div>
                  </div>
                  <div className="absolute top-[0px] left-[124.63px] w-[79px] h-5">
                    <div className="absolute top-[0px] left-[0px] leading-num-20">
                      Help Center
                    </div>
                  </div>
                  <div className="absolute top-[0px] left-[227.64px] w-[92.6px] h-5">
                    <div className="absolute top-[0px] left-[0px] leading-num-20">
                      Privacy Policy
                    </div>
                  </div>
                  <div className="absolute top-[0px] left-[344.22px] w-[112.8px] h-5">
                    <div className="absolute top-[0px] left-[0px] leading-num-20">
                      Terms of Service
                    </div>
                  </div>
                  <div className="absolute top-[0px] left-[480.98px] w-[89.8px] h-5">
                    <div className="absolute top-[0px] left-[0px] leading-num-20">
                      Cookie Policy
                    </div>
                  </div>
                  <div className="absolute top-[0px] left-[594.81px] w-[121px] h-5">
                    <div className="absolute top-[0px] left-[0px] leading-num-20">
                      GDPR Compliance
                    </div>
                  </div>
                </div>
                <div className="h-[33px] w-[99px] rounded bg-gray-200 border-teal-200 border-solid border-[1px] box-border flex flex-col items-start pt-num-0 pb-px px-num-0">
                  <div className="self-stretch h-0 relative" />
                  <div className="self-stretch h-0 relative" />
                  <div className="self-stretch h-0 relative" />
                  <div className="self-stretch h-0 relative" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;  */
/* "use client";
import type { NextPage } from "next";
import Image from "next/image";

const Section2: NextPage = () => {
  return (
    <div className="w-full relative flex flex-col items-center gap-[35px] text-center text-[51.19px] text-gray-200 font-inter">
      <div className="w-[1323px] h-[122px] relative">
        <b className="absolute top-[0px] left-[calc(50%_-_612.5px)] leading-[60.15px] inline-block w-[1223px] h-[50px]">
          <span>{`Why Companies Choose `}</span>
          <span className="text-darkcyan">IT Solutions Worldwide</span>
        </b>
        <div className="absolute top-[65px] left-[calc(50%_-_661.5px)] text-[20.48px] leading-[29.44px] inline-block w-[1323px] h-[57px]">
          Outsourcing staff doesn't mean compromising on quality — it means
          working smarter. Hundreds of growing businesses in the Netherlands and
          beyond trust us to handle their staffing needs because we make the
          process simple, fast, and reliable.
          <br />
        </div>
      </div>
      <div className="w-[1520px] h-[152px] relative text-left text-num-16 text-gray-100">
        <div className="absolute top-[0px] left-[0px] shadow-[0px_10px_15px_-3px_rgba(0,_0,_0,_0.1),_0px_4px_6px_-4px_rgba(0,_0,_0,_0.1)] rounded-num-14 bg-white border-whitesmoke border-solid border-[1px] box-border w-num-285_5 h-num-150">
          <Image
            className="absolute top-[25px] left-[25px] w-10 h-10"
            width={40}
            height={40}
            sizes="100vw"
            alt=""
            src=""
          />
          <div className="absolute top-[77px] left-[25px] w-num-246 h-6">
            <b className="absolute top-[-2px] left-[0px] leading-num-24 shrink-0">
              Save Up to 60% Compared
              <br />
              to Local Hiring
            </b>
          </div>
          <div className="absolute top-[105px] left-[25px] w-num-246 h-5 flex items-start" />
        </div>
        <div className="absolute top-[0px] left-[617.26px] shadow-[0px_10px_15px_-3px_rgba(0,_0,_0,_0.1),_0px_4px_6px_-4px_rgba(0,_0,_0,_0.1)] rounded-num-14 bg-white border-whitesmoke border-solid border-[1px] box-border w-num-285_5 h-num-150">
          <Image
            className="absolute top-[25px] left-[25px] w-10 h-10"
            width={40}
            height={40}
            sizes="100vw"
            alt=""
            src=""
          />
          <div className="absolute top-[77px] left-[25px] w-num-246 h-6">
            <b className="absolute top-[-2px] left-[0px] leading-num-24 shrink-0">
              Fast Onboarding: Start
              <br />
              Within Days
            </b>
          </div>
          <div className="absolute top-[105px] left-[25px] w-num-246 h-5 flex items-start" />
        </div>
        <div className="absolute top-[2px] left-[308.63px] shadow-[0px_10px_15px_-3px_rgba(0,_0,_0,_0.1),_0px_4px_6px_-4px_rgba(0,_0,_0,_0.1)] rounded-num-14 bg-white border-whitesmoke border-solid border-[1px] box-border w-num-285_5 h-num-150">
          <Image
            className="absolute top-[25px] left-[25px] w-10 h-10"
            width={40}
            height={40}
            sizes="100vw"
            alt=""
            src=""
          />
          <div className="absolute top-[77px] left-[25px] w-num-246 h-6">
            <b className="absolute top-[-2px] left-[0px] leading-num-24 shrink-0">
              Pre-Vetted, Ready-to-Work
              <br />
              Talent
            </b>
          </div>
          <div className="absolute top-[105px] left-[25px] w-num-246 h-5 flex items-start" />
        </div>
        <div className="absolute top-[2px] left-[925.89px] shadow-[0px_10px_15px_-3px_rgba(0,_0,_0,_0.1),_0px_4px_6px_-4px_rgba(0,_0,_0,_0.1)] rounded-num-14 bg-white border-whitesmoke border-solid border-[1px] box-border w-num-285_5 h-num-150">
          <Image
            className="absolute top-[25px] left-[25px] w-10 h-10"
            width={40}
            height={40}
            sizes="100vw"
            alt=""
            src=""
          />
          <div className="absolute top-[77px] left-[25px] w-num-246 h-6">
            <b className="absolute top-[-2px] left-[0px] leading-num-24 shrink-0">
              Flexible Engagements:
              <br />
              Part-Time or Full-Time
            </b>
          </div>
          <div className="absolute top-[105px] left-[25px] w-num-246 h-5 flex items-start" />
        </div>
        <div className="absolute top-[2px] left-[1234.52px] shadow-[0px_10px_15px_-3px_rgba(0,_0,_0,_0.1),_0px_4px_6px_-4px_rgba(0,_0,_0,_0.1)] rounded-num-14 bg-white border-whitesmoke border-solid border-[1px] box-border w-num-285_5 h-num-150">
          <Image
            className="absolute top-[25px] left-[25px] w-10 h-10"
            width={40}
            height={40}
            sizes="100vw"
            alt=""
            src=""
          />
          <div className="absolute top-[77px] left-[25px] w-num-246 h-6">
            <b className="absolute top-[-2px] left-[0px] leading-num-24 shrink-0">
              Dedicated Support Every
              <br />
              Step of the Way
            </b>
          </div>
          <div className="absolute top-[105px] left-[25px] w-num-246 h-5 flex items-start" />
        </div>
      </div>
      <div className="w-[365.4px] h-[54.5px] relative text-[16.18px] text-white font-poppins">
        <div className="absolute top-[0px] left-[0px] rounded-[10.3px] [background:linear-gradient(90deg,_#22a3ad,_#219fa9_7.14%,_#209ba5_14.29%,_#1f98a1_21.43%,_#1e949d_28.57%,_#1d9099_35.71%,_#1c8c95_42.86%,_#1b8991_50%,_#1a858d_57.14%,_#1a8189_64.29%,_#197d85_71.43%,_#187a81_78.57%,_#17767e_85.71%,_#16737a_92.86%,_#156f76)] w-[365.4px] h-[54.5px]" />
        <b className="absolute top-[13px] left-[72.71px] leading-[27.77px] inline-block w-[222px] h-[27px]">
          Book Your Free Call Today
          <br />
        </b>
      </div>
    </div>
  );
};

export default Section2; */
