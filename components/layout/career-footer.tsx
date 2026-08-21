// components/layout/career-footer.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FiMail, FiPhone, FiMapPin, FiArrowRight } from "react-icons/fi";

export default function CareerFooter() {
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
      <div className="mx-auto w-full max-w-[1240px] px-6 sm:px-8 lg:px-0">
        
        {/* TOP NEWSLETTER ROW */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between pb-12 border-b border-white/10 gap-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-2">
              Stay Updated with Latest Tech Insights
            </h3>
            <p className="text-xs sm:text-sm text-gray-400">
              Subscribe to our newsletter for industry news and exclusive content
            </p>
          </div>

          <div className="w-full lg:w-auto">
            {subscribed ? (
              <div className="text-teal-400 text-xs font-semibold py-3 px-4 bg-white/5 rounded-xl border border-white/10">
                ✓ Thank you for subscribing!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 w-full lg:w-[420px]">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-[#00181D] border border-white/10 rounded-xl text-xs sm:text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#2B8A99] transition"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#2B8A99] hover:bg-[#237380] text-white font-semibold text-xs sm:text-sm rounded-xl transition duration-300 flex items-center justify-center gap-2 shrink-0 cursor-pointer"
                >
                  <span>Subscribe</span>
                  <FiArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* MIDDLE LINKS COLUMNS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 py-12 border-b border-white/10">
          
          {/* BRAND / ABOUT COL */}
          <div className="lg:col-span-3 space-y-6">
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              Empowering businesses with cutting-edge IT solutions and digital transformation services.
            </p>
            <div className="flex items-center gap-3">
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:bg-[#2B8A99] hover:text-white transition"
              >
                <FaFacebookF className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:bg-[#2B8A99] hover:text-white transition"
              >
                <FaTwitter className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:bg-[#2B8A99] hover:text-white transition"
              >
                <FaLinkedinIn className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:bg-[#2B8A99] hover:text-white transition"
              >
                <FaInstagram className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* SERVICES COL */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold text-white tracking-wide">Services</h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li><Link href="/services" className="hover:text-white transition">Web Development</Link></li>
              <li><Link href="/services" className="hover:text-white transition">Mobile Apps</Link></li>
              <li><Link href="/services" className="hover:text-white transition">Cloud Solutions</Link></li>
              <li><Link href="/services" className="hover:text-white transition">AI & Machine Learning</Link></li>
              <li><Link href="/services" className="hover:text-white transition">Cybersecurity</Link></li>
              <li><Link href="/services" className="hover:text-white transition">DevOps & Automation</Link></li>
            </ul>
          </div>

          {/* INDUSTRIES COL */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold text-white tracking-wide">Industries</h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li><Link href="/industries" className="hover:text-white transition">Enterprise & Corporate</Link></li>
              <li><Link href="/industries" className="hover:text-white transition">E-commerce & Retail</Link></li>
              <li><Link href="/industries" className="hover:text-white transition">Healthcare</Link></li>
              <li><Link href="/industries" className="hover:text-white transition">Logistics & Supply Chain</Link></li>
              <li><Link href="/industries" className="hover:text-white transition">Education</Link></li>
              <li><Link href="/industries" className="hover:text-white transition">Banking & Finance</Link></li>
            </ul>
          </div>

          {/* COMPANY COL */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold text-white tracking-wide">Company</h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
              <li><Link href="/career" className="hover:text-white transition">Careers</Link></li>
              <li><Link href="/case-studies" className="hover:text-white transition">Case Studies</Link></li>
              <li><Link href="/blog" className="hover:text-white transition">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">Contact Us</Link></li>
              <li><Link href="/partnerships" className="hover:text-white transition">Partnerships</Link></li>
            </ul>
          </div>

          {/* CONTACT COL */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white tracking-wide">Contact</h4>
            <ul className="space-y-3 text-xs text-gray-400">
              <li className="flex items-start gap-2.5">
                <FiMail className="w-4 h-4 text-[#2B8A99] shrink-0 mt-0.5" />
                <a href="mailto:contact@company.com" className="hover:text-white transition">contact@company.com</a>
              </li>
              <li className="flex items-start gap-2.5">
                <FiPhone className="w-4 h-4 text-[#2B8A99] shrink-0 mt-0.5" />
                <a href="tel:+15551234567" className="hover:text-white transition">+1 (555) 123-4567</a>
              </li>
              <li className="flex items-start gap-2.5">
                <FiMapPin className="w-4 h-4 text-[#2B8A99] shrink-0 mt-0.5" />
                <span>123 Business Avenue<br />Tech City, TC 12345<br />United States</span>
              </li>
            </ul>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT & LEGAL LINKS */}
        <div className="flex flex-col lg:flex-row items-center justify-between pt-8 text-[11px] text-gray-400 gap-4">
          <p>© 2026 IT Solutions Worldwide. All rights reserved.</p>
          
          <div className="flex flex-wrap items-center gap-6">
            <Link href="/documentation" className="hover:text-white transition">Documentation</Link>
            <Link href="/help" className="hover:text-white transition">Help Center</Link>
            <Link href="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition">Terms of Service</Link>
            <Link href="/cookie-policy" className="hover:text-white transition">Cookie Policy</Link>
            <Link href="/gdpr" className="hover:text-white transition">GDPR Compliance</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}