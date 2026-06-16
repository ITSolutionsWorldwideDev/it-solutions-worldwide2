// components/layout/MobileMenuItem.tsx
"use client";
import { useParams } from "next/navigation";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { MenuItem } from "@/lib/menu";
import { useState } from "react";

type Props = {
  item: MenuItem;
  closeMenu?: () => void;
};

export default function MobileMenuItem({ item, closeMenu }: Props) {
  const params = useParams();
  const locale = params?.locale || "en";
  const [open, setOpen] = useState(false);

  return (
    <li className="w-full">
      <div className="flex items-center justify-between">
        {/* <Link
          href={item.link || "#"}
          onClick={closeMenu}
          className="py-2 text-gray-800"
        >
          {item.label}
        </Link> */}
        {item.link ? (
          <Link
            href={`/${locale}${item.link}`}
            onClick={closeMenu}
            className="py-2 text-gray-800"
          >
            {item.label}
          </Link>
        ) : (
          <div className="py-2 font-medium text-gray-900">{item.label}</div>
        )}

        {item.dropdown && (
          <button onClick={() => setOpen(!open)} className="p-2">
            <ChevronDown
              size={18}
              className={`transition ${open ? "rotate-180" : ""}`}
            />
          </button>
        )}
      </div>

      {item.dropdown && open && (
        <ul className="ml-4 border-l border-gray-200 pl-4 mt-2 space-y-2">
          {item.dropdown.map((subItem, idx) => (
            <MobileMenuItem key={idx} item={subItem} closeMenu={closeMenu} />
          ))}
        </ul>
      )}
    </li>
  );
}
