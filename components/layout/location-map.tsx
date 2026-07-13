"use client";

import { useEffect, useRef, useState } from "react";

export default function LocationMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  const mapSrc =
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2229.4664779419377!2d4.3753155!3d51.867517199999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c44b8a79991dfd%3A0xfeb452cbb689e588!2sIT%20Solutions%20Worldwide%20BV!5e1!3m2!1sen!2s!4v1782289665315!5m2!1sen!2s"

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