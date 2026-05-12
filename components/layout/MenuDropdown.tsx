// components/layout/MenuDropdown.tsx

"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { MenuItem } from "@/lib/menu";
import { useState } from "react";

type Props = {
  items: MenuItem[];
};

export default function MenuDropdown({ items }: Props) {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  return (
    <ul className="absolute left-0 top-full min-w-[260px] rounded-xl bg-white py-2 shadow-2xl border border-gray-100 z-50">
      {items.map((item, idx) => (
        <li
          key={idx}
          className="relative"
          onMouseEnter={() => setActiveItem(item.label)}
          onMouseLeave={() => setActiveItem(null)}
        >
          <div className="flex items-center justify-between">
            {/* <Link
              href={item.link || "#"}
              className="block w-full px-4 py-3 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-700 transition"
            >
              {item.label}
            </Link> */}
            {item.link ? (
              <Link
                href={item.link}
                className="block w-full px-4 py-3 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-700 transition"
              >
                {item.label}
              </Link>
            ) : (
              <div className="block w-full px-4 py-3 text-sm font-semibold text-gray-900 bg-gray-50">
                {item.label}
              </div>
            )}

            {item.dropdown && (
              <span className="pr-3">
                <ChevronRight size={16} />
              </span>
            )}
          </div>

          {/* Nested Dropdown */}
          {item.dropdown && activeItem === item.label && (
            <div className="absolute left-full top-0 ml-1">
              <MenuDropdown items={item.dropdown} />
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}
