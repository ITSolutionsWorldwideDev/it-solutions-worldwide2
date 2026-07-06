"use client";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import enCommon from "@/public/locales/en/common.json";
import nlCommon from "@/public/locales/nl/common.json";

export default function Footer() {
  const params = useParams();
  const locale = (params?.locale as string) || "en";
  const t = locale === "nl" ? nlCommon.footer : enCommon.footer;

  return (
    <footer className="bg-white pb-12 pt-6 text-center">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 gap-x-12">
          {/* Column 1: Logo + Company Info */}
          <div className="md:col-span-1">
            <Image
              className="w-auto h-auto"
              src="/assets/footer-logo.webp"
              alt="IT Solutions Worldwide"
              width={160}
              height={48}
              quality={75}
              loading="lazy"
            />
            <p className="mt-4 text-sm text-gray-500 leading-relaxed">
              {t.description}
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
              {t.quickLinks}
            </h3>
            <ul className="mt-4 space-y-3 text-gray-500">
              <li>
                <Link href={`/${locale}/blogs`} className="text-base hover:text-[#236B7A]">
                  {t.blogs}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/about-us`} className="text-base hover:text-[#236B7A]">
                  {t.aboutUs}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/profile`} className="text-base hover:text-[#236B7A]">
                  {t.profile}
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  href="/assets/Branding_Guide_For_ITWW.pdf"
                  className="text-base hover:text-[#236b7a]"
                >
                  {t.ourBranding}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/contact-us`}
                  target="_blank"
                  className="text-base hover:text-[#236B7A]"
                >
                  {t.contactUs}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
              {t.services}
            </h3>
            <ul className="mt-4 space-y-3 text-gray-500">
              <li>
                <Link href={`/${locale}/scm-services`} className="text-base hover:text-[#236B7A]">
                  {t.scmServices}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/it-support`} className="text-base hover:text-[#236B7A]">
                  {t.itSupport}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/oracle-cloud`} className="text-base hover:text-[#236B7A]">
                  {t.oracleCloud}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/digital-services`} className="text-base hover:text-[#236B7A]">
                  {t.digitalServices}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/staffing-support`} className="text-base hover:text-[#236B7A]">
                  {t.staffingSupport}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/supply-health-check-info`} className="text-base hover:text-[#236B7A]">
                  {t.supplyHealthCheck}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Company */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
              {t.company}
            </h3>
            <ul className="mt-4 space-y-3 text-gray-500">
              <li>
                <Link href={`/${locale}/contact-us`} className="text-base hover:text-[#236B7A]">
                  {t.helpCenter}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/about-us/#faq`} className="text-base hover:text-[#236B7A]">
                  {t.faq}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/career`} className="text-base hover:text-[#236B7A]">
                  {t.career}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/privacy-policy`} className="text-base hover:text-[#236B7A]">
                  {t.privacyPolicy}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <hr className="mt-12 border-gray-200" />

        <div className="mt-8 flex flex-col md:flex-row items-center justify-evenly space-y-4 md:space-y-0 md:space-x-6">
          <p className="text-sm text-[#236B7A]">{t.copyright}</p>
          <span className="text-sm text-[#236B7A]">
            <Link href="mailto:info@itsolutionsworldwide.com" target="_blank" rel="noreferrer">
              info@itsolutionsworldwide.com
            </Link>
          </span>
          <span className="text-sm text-[#236B7A]">{t.chamberOfCommerce}</span>
        </div>
      </div>
      <button
        onClick={() => window.dispatchEvent(new Event("open-cookie-settings"))}
        className="text-sm text-gray-500 hover:underline mt-4"
      >
        {t.cookieSettings}
      </button>
    </footer>
  );
}