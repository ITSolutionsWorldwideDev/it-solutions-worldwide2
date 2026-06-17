"use client";
import { useParams } from "next/navigation";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { MenuItem } from "@/lib/menu";
import { useState } from "react";

type Props = {
  items: MenuItem[];
};

export default function MenuDropdown({ items }: Props) {
  const params = useParams();
  const locale = params?.locale || "en";
  const [activeItem, setActiveItem] = useState<string | null>(null);

  return (
    /* Added 'mt-2' or adjustments if needed, but keeping absolute coordinates tight */
    <ul className="absolute left-0 top-full min-w-[260px] rounded-xl bg-white py-2 shadow-2xl border border-gray-100 z-50">
      {items.map((item, idx) => (
        <li
          key={idx}
          className="relative group/sub"
          onMouseEnter={() => setActiveItem(item.label)}
          onMouseLeave={() => setActiveItem(null)}
        >
          {/* FIX: Changed wrapper to relative block and unified look under group utilities */}
          <div className="relative flex items-center justify-between hover:bg-teal-50 hover:text-teal-700 transition duration-150">
            {item.link ? (
              <Link href={`/${locale}${item.link}`}
                className="block w-full px-4 py-3 text-sm text-gray-700 hover:text-teal-700 bg-transparent"
              >
                {item.label}
              </Link>
            ) : (
              <div className="block w-full px-4 py-3 text-sm font-semibold text-gray-900 bg-gray-50/50">
                {item.label}
              </div>
            )}

            {item.dropdown && (
              /* absolute alignment forces the icon to hover seamlessly on top of the container box boundary */
              <span className="absolute right-3 pointer-events-none text-gray-400 group-hover/sub:text-teal-700">
                <ChevronRight size={16} />
              </span>
            )}
          </div>

          {/* Nested Dropdown */}
          {item.dropdown && activeItem === item.label && (
            /* FIX: 'h-full' ko 'min-h-full w-[calc(100%+8px)]' kiya taaki mouse move hone par collision box break na ho */
            <div className="absolute left-full top-0 pl-2 -ml-2 min-h-full w-[calc(100%+8px)] z-50">
              <MenuDropdown items={item.dropdown} />
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}
