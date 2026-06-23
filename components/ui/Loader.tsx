// components/ui/Loader.tsx
'use client';
import React from 'react';
import Image from "next/image";

interface LoaderProps {
  message?: string;
}

export default function Loader({ message = 'Loading...' }: LoaderProps) {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50">
      {/* Logo */}
      <Image
        src="/assets/images/main-logo.webp"
        alt="IT Solutions Worldwide Logo"
        width={64} 
        height={64} 
        priority     
        className="h-16 w-16 mb-6 animate-bounce"
      />

      {/* Spinner */}
      <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>

      {/* Optional Message */}
      <p className="mt-4 text-gray-700 text-lg">{message}</p>
    </div>
  );
}