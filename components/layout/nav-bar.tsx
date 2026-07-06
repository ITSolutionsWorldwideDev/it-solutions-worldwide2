"use client";
import Link from "next/link";
import React, { useState, useRef } from "react";
import { useParams } from "next/navigation";
import { getMenuItems } from "@/lib/menu";
import enCommon from "@/public/locales/en/common.json";
import nlCommon from "@/public/locales/nl/common.json";import MenuDropdown from "./MenuDropdown";
import MobileMenuItem from "./MobileMenuItem";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const hideTimeout = useRef<NodeJS.Timeout | null>(null);

  const params = useParams();
  const locale = params?.locale || "en";
  const t = (key: string) => {
    const dict = locale === "nl" ? nlCommon : enCommon;
    return key.split(".").reduce((obj: any, k) => obj?.[k], dict) || key;
  };
  const menuItems = getMenuItems(t);

  const handleMouseEnter = (item: string) => {
    if (hideTimeout.current) {
      clearTimeout(hideTimeout.current);
      hideTimeout.current = null;
    }
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setHoveredItem(null);
    }, 300);

    hideTimeout.current = timeout;
  };

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const toggleDropdown = (itemLabel: any) => {
    setOpenDropdown((prev) => (prev === itemLabel ? null : itemLabel));
  };

  return (
    <>
      {/* FIX 1: Added relative and z-50 to the main <nav> container so nothing overlaps it */}
      <nav className="bg-white relative z-[9999] shadow-sm">
        <div className="mx-auto pt-6 flex justify-between items-center px-4 md:px-12">
          <div className="flex items-center space-x-2 w-32">
            {/* LOCALE FIX: logo bhi locale ke saath */}
            <Link href={`/${locale}/`}>
              <img
                src="/assets/images/logo.webp"
                alt="IT Solutions Worldwide Logo"
              />
            </Link>
          </div>

          <div className="md:hidden">
            <button
              className="lg:hidden text-[#278083] focus:outline-none cursor-pointer"
              onClick={toggleMenu}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"
                  }
                />
              </svg>
            </button>
          </div>

          <ul className="hidden md:flex space-x-4">
            {menuItems.map((item, idx) => (
              <li
                key={idx}
                /* FIX 2: Added 'pb-4 -mb-4' padding/margin hack to act as an invisible hover bridge */
                className="relative pb-4 -mb-4"
                onMouseEnter={() => handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                {item.link ? (
                  /* LOCALE FIX: har nav link pe locale prefix */
                  <Link
                    href={`/${locale}${item.link}`}
                    className="text-[#278083] hover:text-[#278083] font-medium text-sm px-2 py-2 rounded-md transition inline-block"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <div
                    className="text-[#278083] font-medium text-sm px-2 py-2 rounded-md transition cursor-default inline-block"
                  >
                    {item.label}
                  </div>
                )}
                {item.dropdown && hoveredItem === item.label && (
                  /* The MenuDropdown wrapper component renders right below now */
                  <MenuDropdown items={item.dropdown} />
                )}
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            {/* LOCALE FIX: contact us bhi locale ke saath */}
            <Link href={`/${locale}/contact-us`}>
              <button className="bg-[#278083] text-white md:my-2 px-4 py-2 rounded-md hover:bg-[#278083] transition cursor-pointer">
                {t("menu.contactUs")}
              </button>
            </Link>
          </div>
        </div>
      </nav>

      {menuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={toggleMenu}
          ></div>

          <div className="fixed top-16 left-0 w-3/4 h-screen bg-white shadow-lg z-50 overflow-y-auto">
            <ul className="flex flex-col space-y-4 p-4 ">
              {menuItems.map((item, idx) => (
                <MobileMenuItem key={idx} item={item} closeMenu={toggleMenu} />
              ))}
              <li className="relative">
                {/* LOCALE FIX: mobile contact us bhi locale ke saath */}
                <Link
                  href={`/${locale}/contact-us`}
                  onClick={toggleMenu}
                  className="bg-[#278083] flex text-white px-4 py-2 rounded-md transition hover:bg-[#278083] w-full"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </>
      )}
    </>
  );
}
