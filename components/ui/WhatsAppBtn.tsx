import React from "react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
const WhatsAppBtn = () => {
  return (
    <Link
      href={`https://wa.me/31107660786?text=Hi%20there!%20I%20would%20like%20to%20get%20more%20information%20about%20your%20services.`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed z-100 bottom-6 right-16 bg-white border border-slate-200 shadow-lg rounded-xl px-4 py-3 flex items-center gap-3 hover:shadow-xl transition-shadow duration-200"
    >
      <div className="bg-green-500 p-2 rounded-lg">
        <FaWhatsapp className="text-white" size={20} />
      </div>
      <div>
        <p className="text-sm font-semibold text-slate-800">Direct Chat</p>
        <p className="text-xs text-slate-500">Contact us on WhatsApp</p>
      </div>
    </Link>
  );
};

export default WhatsAppBtn;
