// components/ui/share-job-button.tsx
"use client";

import { useState } from "react";

export default function ShareJobButton() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy link", err);
    }
  };

  return (
    <button
      type="button"
      onClick={handleShare}
      className="w-full rounded-xl border border-gray-200 py-2.5 text-xs font-semibold text-gray-600 transition hover:border-[#2B8A99] hover:text-[#2B8A99]"
    >
      {copied ? "Link copied!" : "Share this job"}
    </button>
  );
}