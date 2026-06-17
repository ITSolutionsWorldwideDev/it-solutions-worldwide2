// components/LanguageSwitcher.tsx
"use client";
import { usePathname } from "next/navigation";
import i18nConfig from "@/i18n/i18nConfig";
import Image from "next/image";
import Link from "next/link";

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const currentLocale =
    i18nConfig.locales.find((locale) => pathname?.startsWith(`/${locale}`)) ||
    i18nConfig.defaultLocale;

  const newLocale = currentLocale === "en" ? "nl" : "en";
  const pathWithoutLocale = pathname?.replace(`/${currentLocale}`, "") || "";
  const newPath = `/${newLocale}${pathWithoutLocale}`;

  const flag =
    currentLocale === "en"
      ? "/assets/images/flags/nl.webp"
      : "/assets/images/flags/uk.webp";
  const label = currentLocale === "en" ? "Dutch" : "English";

  return (
    <Link
      href={newPath}
      className="z-50 fixed right-0 top-1/2 transform -translate-y-1/2 -rotate-90 flex items-center text-black bg-white rounded-sm border-2 border-gray-300 px-3 py-2 hover:bg-gray-100 -mr-10 shadow-md cursor-pointer"
    >
      <Image src={flag} alt={`Switch to ${label}`} width={20} height={20} className="mr-2" />
      {label}
    </Link>
  );
}
