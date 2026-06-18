"use client";

import { useEffect, useRef, useState } from "react";

export default function LocationMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  const mapSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2433.5289514228773!2d4.482805076926155!3d51.890982479691176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5cfd553bb1c9f%3A0xb340df3dc06d9ad0!2sMandenmakerstraat%20100C%2C%203194%20DG%20Hoogvliet%20Rotterdam%2C%20Netherlands!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s";

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "200px 0px", // start loading 200px before it enters viewport
        threshold: 0,
      }
    );

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="container mx-auto my-10">
      <div ref={containerRef} className="w-full h-80 bg-gray-100 rounded-xl overflow-hidden">
        {shouldLoad ? (
          <iframe
            title="Location Map"
            src={mapSrc}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
            Loading map…
          </div>
        )}
      </div>
    </div>
  );
}