// components/layout/footer.tsx
"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTiktok } from "react-icons/fa";
import { FiArrowRight, FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import enCommon from "@/public/locales/en/common.json";
import nlCommon from "@/public/locales/nl/common.json";

export default function Footer() {
  const params = useParams();
  const locale = (params?.locale as string) || "en";
  const t = locale === "nl" ? nlCommon.footer : enCommon.footer;

  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="w-full bg-[#002025] text-white pt-16 pb-8 border-t border-white/5">
      <div className="mx-auto w-full max-w-[1240px] px-6">
        
        {/* TOP NEWSLETTER ROW */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between pb-12 border-b border-white/10 gap-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-2">Stay Updated with Latest Tech Insights</h3>
            <p className="text-xs sm:text-sm text-gray-400">Subscribe to our newsletter for industry news and exclusive content</p>
          </div>
          <div className="w-full lg:w-[420px]">
             {subscribed ? (
              <div className="text-teal-400 text-xs font-semibold py-3 px-4 bg-white/5 rounded-xl border border-white/10">✓ Thank you for subscribing!</div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-3">
                <input type="email" required placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-3 bg-[#00181D] border border-white/10 rounded-xl text-xs sm:text-sm text-white focus:outline-none" />
                <button type="submit" className="px-6 py-3 bg-[#2B8A99] text-white font-semibold text-xs sm:text-sm rounded-xl flex items-center gap-2">Subscribe <FiArrowRight /></button>
              </form>
            )}
          </div>
        </div>

        {/* MIDDLE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 py-12 border-b border-white/10 text-left">
          {/* Col 1 */}
          <div className="space-y-6">
            <p className="text-xs text-gray-400 leading-relaxed">IT Solutions Worldwide delivers innovative IT solutions in supply chain management, IT support, digital marketing, and provides operational excellence.</p>
            <div className="flex items-center gap-3" aria-label="Social media links">
              <Link href="https://www.facebook.com/itsolutionsww" aria-label="Facebook" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-gray-300 hover:bg-[#2B8A99]">
                <FaFacebookF className="w-3.5 h-3.5" />
              </Link>
              <Link href="https://www.linkedin.com/company/it-solutions-worldwide-bv" aria-label="LinkedIn" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-gray-300 hover:bg-[#2B8A99]">
                <FaLinkedinIn className="w-3.5 h-3.5" />
              </Link>
              <Link href="https://www.instagram.com/itsolutionsworldwidebv/" aria-label="Instagram" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-gray-300 hover:bg-[#2B8A99]">
                <FaInstagram className="w-3.5 h-3.5" />
              </Link>
              <Link href="https://www.tiktok.com/@itsolutionsitsolu?lang=en-GB" aria-label="TikTok" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-gray-300 hover:bg-[#2B8A99]">
                <FaTiktok className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider">QUICK LINKS</h3>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li><Link href={`/${locale}/blogs`} className="hover:text-white">Blogs</Link></li>
              <li><Link href={`/${locale}/about-us`} className="hover:text-white">About Us</Link></li>
              <li><Link href={`/${locale}/profile`} className="hover:text-white">Profile</Link></li>
              <li><Link href={`/${locale}/contact-us`} className="hover:text-white">Contact Us</Link></li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider">SERVICES</h3>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li><Link href={`/${locale}/scm-services`} className="hover:text-white">SCM Services</Link></li>
              <li><Link href={`/${locale}/it-support`} className="hover:text-white">IT Support</Link></li>
              <li><Link href={`/${locale}/oracle-cloud`} className="hover:text-white">Oracle Cloud</Link></li>
              <li><Link href={`/${locale}/digital-services`} className="hover:text-white">Digital Services</Link></li>
              <li><Link href={`/${locale}/staffing-support`} className="hover:text-white">Staffing Support</Link></li>
            </ul>
          </div>

          {/* Col 4: Company */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider">COMPANY</h3>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li><Link href={`/${locale}/contact-us`} className="hover:text-white">Help Center</Link></li>
              <li><Link href={`/${locale}/career`} className="hover:text-white">Career</Link></li>
              <li><Link href={`/${locale}/privacy-policy`} className="hover:text-white">Privacy Policy</Link></li>
            </ul>
          </div>
                        
          {/* Col 5: Contact */}
            <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider">CONTACT</h3>
            <ul className="space-y-3 text-xs text-gray-400">
              <li className="flex gap-2"><FiMail className="text-[#2B8A99]" /><a href="mailto:info@itsolutionsworldwide.com">info@itsolutionsworldwide.com</a></li>
              <li className="flex gap-2"><FiPhone className="text-[#2B8A99]" /><a href="tel:+31123456789">+31 123 456 789</a></li>
              <li className="flex gap-2"><FiMapPin className="text-[#2B8A99]" /><span>123 Tech Avenue, Netherlands</span></li>
            </ul>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row justify-between pt-8 text-xs text-gray-400 gap-4">
          <p>© 2026 IT Solutions Worldwide. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="mailto:info@itsolutionsworldwide.com">info@itsolutionsworldwide.com</a>
            <span>Chamber of Commerce No. 72768916</span>
            <button onClick={() => window.dispatchEvent(new Event("open-cookie-settings"))} className="underline">Cookie Settings</button>
          </div>
        </div>
      </div>
    </footer>
  );
}