"use client";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

// components/layout/footer.tsx
export default function Footer() {
  const params = useParams();
  const locale = params?.locale || "en"; // Agar locale nahi milta toh default 'en' par fallback karega

  return (
<footer className="bg-white pb-12 pt-6 text-center">
  <div className="container mx-auto px-4 lg:px-8">
        {/* Top section: 4 columns on md+ screens */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 gap-x-12">
          {/* Column 1: Logo + Company Info + Social Icons */}
          <div className="md:col-span-1">
            {/* FIX: next/image with explicit dimensions instead of plain <img>.
                Replace width/height below with the ACTUAL rendered size of your
                logo (check via DevTools > Inspect on the live footer logo). */}
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
              IT Solutions Worldwide delivers innovative IT solutions in supply
              chain management, IT support, digital marketing, and provides
              operational excellence.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3 text-gray-500">
              <li>
                <Link href={`/${locale}/blogs`} className="text-base hover:text-[#236B7A]">
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/about-us`}
                  className="text-base hover:text-[#236B7A]"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/profile`}
                  className="text-base hover:text-[#236B7A]"
                >
                  Profile
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  href="/assets/Branding_Guide_For_ITWW.pdf"
                  className="text-base hover:text-[#236b7a]"
                >
                  Our Branding
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/contact-us`}
                  target="_blank"
                  className="text-base hover:text-[#236B7A]"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
              Services
            </h3>
            <ul className="mt-4 space-y-3 text-gray-500">
              <li>
                <Link
                  href={`/${locale}/scm-services`}
                  className="text-base hover:text-[#236B7A]"
                >
                  SCM Services
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/it-support`}
                  className="text-base hover:text-[#236B7A]"
                >
                  IT Support
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/oracle-cloud`}
                  className="text-base hover:text-[#236B7A]"
                >
                  Oracle Cloud
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/digital-services`}
                  className="text-base hover:text-[#236B7A]"
                >
                  Digital Services
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/staffing-support`}
                  className="text-base hover:text-[#236B7A]"
                >
                  Staffing Support
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/supply-health-check-info`}
                  className="text-base hover:text-[#236B7A]"
                >
                  Supply Health Check
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Company */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
              Company
            </h3>
            <ul className="mt-4 space-y-3 text-gray-500">
              <li>
                <Link
                  href={`/${locale}/contact-us`}
                  className="text-base hover:text-[#236B7A]"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/about-us/#faq`}
                  className="text-base hover:text-[#236B7A]"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/career`} className="text-base hover:text-[#236B7A]">
                  Career
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/privacy-policy`}
                  className="text-base hover:text-[#236B7A]"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="mt-12 border-gray-200" />

        {/* Bottom row: disclaimers/contact info */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-evenly space-y-4 md:space-y-0 md:space-x-6">
          <p className="text-sm text-[#236B7A]">
            © IT Solutions Worldwide. All rights reserved
          </p>
          <span className="text-sm text-[#236B7A]">
            <Link
              href="mailto:info@itsolutionsworldwide.com"
              target="_blank"
              rel="noreferrer"
            >
              info@itsolutionsworldwide.com
            </Link>
          </span>
          <span className="text-sm text-[#236B7A]">
            Chamber of Commerce No. 72768916
          </span>
        </div>
      </div>
      <button
        onClick={() => window.dispatchEvent(new Event("open-cookie-settings"))}
        className="text-sm text-gray-500 hover:underline mt-4"
      >
        Cookie Settings
      </button>
    </footer>
  );
}