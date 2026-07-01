"use client";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { menuItems } from "@/lib/menu";
import MenuDropdown from "./MenuDropdown";
import MobileMenuItem from "./MobileMenuItem";
import Image from "next/image";
import { useParams } from "next/navigation";


export default function NavbarHome() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const hideTimeout = useRef<NodeJS.Timeout | null>(null);
const params = useParams();
const locale = (params?.locale as string) || "en";

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
<nav className="relative z-10 flex items-center justify-between px-4 lg:px-8 pt-4 text-white 2xl:text-xl gap-5">
        <div className="flex items-center space-x-2 w-32">
          {/* LOCALE FIX: logo link */}
          <Link href={`/${locale}/#hometop`}>
  <Image
    src="/assets/images/main-logo.webp"
    alt="IT Solutions Worldwide Logo"
    width={128}  
    height={40}  
    priority     
    className="h-10 w-auto" 
  />
</Link>
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="focus:outline-none cursor-pointer"
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
                  menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        <ul className="hidden md:flex space-x-6">
          {menuItems.map((item, idx) => (
            <li
              key={idx}
              className="relative"
              onMouseEnter={() => handleMouseEnter(item.label)}
              onMouseLeave={handleMouseLeave}
            >
              {item.link ? (
                /* LOCALE FIX: nav links */
                <Link
                  href={`/${locale}${item.link}`}
                  className="text-white hover:text-[#278083] hover:underline font-medium mb-1 px-3 py-2 rounded-md transition"
                >
                  {item.label}
                </Link>
              ) : (
                <div
                  className="text-white hover:underline font-medium px-3 mb-1 rounded-md transition cursor-default"
                >
                  {item.label}
                </div>
              )}

              {item.dropdown && hoveredItem === item.label && (
                <MenuDropdown items={item.dropdown} />
              )}
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          {/* LOCALE FIX: contact us desktop */}
          <Link href={`/${locale}/contact-us`}>
            <button className="border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition-colors cursor-pointer">
              Contact Us
            </button>
          </Link>
        </div>
      </nav>

      {menuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-10"
            onClick={toggleMenu}
          ></div>
          <div className="fixed top-16 left-0 w-full h-screen bg-white shadow-lg z-20 overflow-y-auto">
            <ul className="flex flex-col space-y-4 p-4 ">
              {menuItems.map((item, idx) => (
                <MobileMenuItem key={idx} item={item} closeMenu={toggleMenu} />
              ))}
              <li>
                {/* LOCALE FIX: contact us mobile */}
                <Link
                  href={`/${locale}/contact-us`}
                  onClick={toggleMenu}
                  className="bg-[#278083] text-white px-4 py-2 rounded-md transition hover:bg-[#278083]"
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
