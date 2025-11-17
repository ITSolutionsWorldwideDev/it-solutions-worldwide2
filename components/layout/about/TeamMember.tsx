"use client";
import Image from "next/image";
import React, { useState } from "react";
import Modal from "./Modal";

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  bio?: string;
  bio2?: string;
  email?: string;
  phone?: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  role,
  image,
  bio,
  bio2,
  email,
  phone,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className="relative cursor-pointer group w-[301px] h-[350px]"
      >
        <Image
          src={image}
          alt={name}
          width={301}
          height={350}
          className="rounded-lg object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 rounded-lg transition-all flex items-center justify-center text-white">
          <div>
            <div className="font-semibold text-lg">{name}</div>
            <div className="text-sm text-[#467a7e]">{role}</div>
          </div>
        </div>
      </div>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className="flex flex-col items-center text-center">
          <div className="w-full h-[661px] relative text-justify text-xl text-gray font-lexend">
            <div className="absolute top-[0px] left-[0px] w-[1318px] h-[661px]">
              <div className="absolute top-[0px] left-[0px] rounded-[46px] bg-white w-[1318px] h-[661px]" />
              <div className="absolute top-[563.82px] left-[505px] w-[40.4px] h-[40.4px]">
                <Image
                  className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                  width={40.4}
                  height={40.4}
                  sizes="100vw"
                  alt=""
                  src="/assets/images/aboutus/facebook.svg"
                />
              </div>
              <div className="absolute top-[563.82px] left-[567.88px] w-[40.4px] h-[40.4px]">
                <Image
                  className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                  width={40.4}
                  height={40.4}
                  sizes="100vw"
                  alt=""
                  src="/assets/images/aboutus/instagram.svg"
                />
              </div>
              <div className="absolute top-[563.82px] left-[630.77px] w-[40.4px] h-[40.4px]">
                <Image
                  className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                  width={40.4}
                  height={40.4}
                  sizes="100vw"
                  alt=""
                  src="/assets/images/aboutus/twiter.svg"
                />
              </div>
              <div className="absolute top-[563.82px] left-[693.65px] w-[40.4px] h-[40.4px]">
                <Image
                  className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                  width={40.4}
                  height={40.4}
                  sizes="100vw"
                  alt=""
                  src="/assets/images/aboutus/linkedin.svg"
                />
              </div>
              <div className="absolute top-[60px] left-[505px] w-[291px] h-[87px] text-left text-[25px] text-[#467a7e]">
                <div className="absolute top-[56px] left-[0px]">{role}</div>
                <div className="absolute top-[0px] left-[calc(50%_-_145.5px)] text-[40px] font-semibold text-black">
                  {name}
                </div>
              </div>
              <Image
                className="absolute top-[60px] left-[60px] rounded-[10.89px] w-[388px] h-[541px] object-cover"
                width={388}
                height={541}
                sizes="100vw"
                alt=""
                src={image}
              />
              <div className="absolute top-[167px] left-[505px] flex items-center w-[756px]">
                {bio || "Bio coming soon..."}
              </div>
              <div className="absolute top-[312px] left-[505px] flex items-center w-[756px]">
                {bio2 || "..."}
              </div>
              <div className="absolute top-[433px] left-[505px] w-[358px] h-[83px] text-lg text-black">
                <div className="absolute top-[24px] left-[26px] w-[281px] h-9">
                  <div className="absolute top-[0px] left-[46px] w-[235px] h-9">
                    <div className="absolute top-[0px] left-[0px] leading-[30px] capitalize">
                      Email:
                    </div>
                    <div className="absolute top-[21px] left-[0px] text-[15px] tracking-[0.01em] leading-[100%] lowercase font-medium text-darkgray">
                      info@itsolutionsworldwide.com
                    </div>
                  </div>
                  <Image
                    className="absolute top-[0px] left-[0px] w-9 h-9 bg-[#DBF7F8] rounded-4xl p-2"
                    width={36}
                    height={36}
                    sizes="100vw"
                    alt=""
                    src="/assets/images/aboutus/modal-email.svg"
                  />
                </div>
                <div className="absolute top-[0px] left-[0px] rounded-[11px] border-gainsboro border-solid border-[2px] box-border w-[358px] h-[83px]" />
              </div>
              <div className="absolute top-[433px] left-[903px] w-[358px] h-[83px] text-lg text-black">
                <div className="absolute top-[0px] left-[0px] rounded-[11px] border-gainsboro border-solid border-[2px] box-border w-[358px] h-[83px]" />
                <div className="absolute top-[23.93px] left-[22px] w-[186px] h-9">
                  <div className="absolute top-[0px] left-[46px] w-[140px] h-9">
                    <div className="absolute top-[0px] left-[0px] leading-[30px] capitalize">
                      Phone Call:
                    </div>
                    <div className="absolute top-[21px] left-[0px] text-[15px] tracking-[0.01em] leading-[100%] lowercase font-medium text-darkgray">
                      208-6666-0112 308
                    </div>
                  </div>
                  <Image
                    className="absolute top-[0px] left-[0px] w-9 h-9 bg-[#DBF7F8] rounded-4xl p-2"
                    width={36}
                    height={36}
                    sizes="100vw"
                    alt=""
                    src="/assets/images/aboutus/modal-phone.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default TeamMember;
