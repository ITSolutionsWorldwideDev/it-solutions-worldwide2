"use client";

import Image from "next/image";
import Link from "next/link";

export function Logo() {
  // 💡 Agar light aur dark dono mein same logo use ho raha hai, 
  // toh useTheme aur console.log ki yahan zaroorat nahi hai.

  return (
    <Link href="/" className="flex flex-shrink-0 items-center gap-2">
      <Image
        src="/assets/images/main-logo.webp"
        alt="ITSW Logo"
        // 🔥 Dimensions ko kam kar diya taake Next.js choti aur optimized image deliver kare
        width={160} 
        height={48} 
        className="h-10 w-auto"
        priority // ⚡ LCP boost karne ke liye yeh zaroori hai
      />
    </Link>
  );
}