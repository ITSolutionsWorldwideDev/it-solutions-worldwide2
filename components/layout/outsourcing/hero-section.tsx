// components/layout/outsourcing/hero-section.tsx

"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


interface FullContentSectionProps {
  imageUrl?: string;
  heading: string;
  text: React.ReactNode;
  instruction?: string;
  ctabuttonText?: string;
  buttonText?: string;
  bgButton?: string;
  buttonLink?: string;
  popup?: boolean;
  imageAlign?: "left" | "right";
  leftColor?: string;
  rightColor?: string;
  textColor?: string;
  logoUrl?: string;
  borderWidth?: string;
  borderColor?: string;
  bgColor?: string;
}

const FullContentSection = ({
  imageUrl,
  instruction,
  heading,
  text,
  ctabuttonText,
  buttonText,
  bgButton = "#236b7a",
  buttonLink = "/",
  popup = false,
  imageAlign = "left",
  leftColor = "#22A3AD",
  rightColor = "#156F76",
  textColor = "#000000",
  logoUrl,
  borderWidth = "0px",
  borderColor = "transparent",
  bgColor = "transparent",
}: FullContentSectionProps) => {
  const [showPopup, setShowPopup] = useState(false);

  const handlePopupOpen = () => setShowPopup(true);
  const handlePopupClose = () => setShowPopup(false);

  const isInternalLink = buttonLink?.startsWith("/");

  const contentComponent = (
    <div
      className="w-full lg:w-2/3 px-2 md:px-3 lg:px-0"
      style={{ backgroundColor: bgColor }}
    >
      <h1
        className="text-3xl lg:text-3xl font-semibold mb-4"
        style={{ color: textColor }}
      >
        {heading}
      </h1>
      <span className="text-lg lg:text-lg" style={{ color: textColor }}>
        {text}
      </span>
      {instruction && (
        <span className="text-lg lg:text-lg" style={{ color: textColor }}>
          {instruction}
        </span>
      )}

      {buttonText && (
        <div className="mt-10">
          {isInternalLink ? (
            <Link
              href="#roles"
              className="text-white px-4 py-2 rounded font-semibold"
              style={{ backgroundColor: bgButton }}
            >
              {buttonText}
            </Link>
          ) : (
            <Link
              href="#roles"
              // target="_blank"
              // rel="noopener noreferrer"
              className="text-white p-4 rounded font-semibold"
              style={{
                background: `linear-gradient(to right, ${leftColor}, ${rightColor})`,
              }}
            >
              {buttonText}
            </Link>
          )}
        </div>
      )}

      {/* bgButton */}

      {popup && (
        <button
          onClick={handlePopupOpen}
          className="mt-4 bg-[#236b7a] text-white px-4 py-2 rounded font-semibold cursor-pointer"
          type="button"
        >
          {ctabuttonText}
        </button>
      )}

      {logoUrl && (
        <div className="mt-4">
          <Image src={logoUrl} alt="Logo" width={360} height={80} />
        </div>
      )}
    </div>
  );

  return (
    <section
      className="w-full my-0 py-10 px-4 lg:px-8 rounded-md"
      style={{
        backgroundColor: `${bgColor}`,
        // background: `linear-gradient(to right, ${leftColor}, ${rightColor})`,
        border: `${borderWidth} solid ${borderColor}`,
      }}
    >
      <div
        className={`flex flex-col  gap-4 items-center text-center space-y-6 lg:space-y-0 lg:space-x-12`}
      >
        {contentComponent}
      </div>
    </section>
  );
};

export default FullContentSection;