"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { servicesData } from "@/lib/commonData";

export default function ExpandingCards(){
  const [activeIndex, setActiveIndex] = useState(0);
  const [showDescription, setShowDescription] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowDescription(true);
    }, 1000);

    return () => {
      clearTimeout(timeout);
      setShowDescription(false);
    };
  }, [activeIndex]);

  if (!servicesData || servicesData.length === 0) {
    return <p className="text-center text-gray-500">No data to display</p>;
  }

  return (
    <div
      className="container w-11/12 flex h-[90vh] 2xl:max-h-[70vh] gap-2 items-center
       overflow-hidden mx-auto flex-col md:flex-row"
    >
      {servicesData.map((card, index) => (
        <div
          key={index}
          className={`relative cursor-pointer rounded-lg overflow-hidden transition-all duration-500 ease-linear w-full md:w-auto ${
            activeIndex === index ? 'flex-grow' : 'flex-shrink'
          }`}
          style={{
            flex: activeIndex === index ? 5 : 0.4,
            height: '100%',
          }}
          onClick={() => setActiveIndex(index)}
        >
          {/* PERFORMANCE FIX: Replaced slow inline background CSS with Next.js Image Component */}
          <Image
            src={card.url}
            alt={card.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            quality={80}
            className="object-cover transition-transform duration-500"
            // CRITICAL LCP FIX: Only priority load the first card because it renders immediately above-the-fold
            priority={index === 0}
            fetchPriority={index === 0 ? "high" : "low"}
          />

          {activeIndex === index ? (
            <div
              className="absolute inset-0 flex flex-col justify-center sm:justify-end text-white p-3 sm:p-7 transition-opacity duration-500 delay-300 opacity-100 rounded-lg"
              style={{
                background:
                  'linear-gradient(to bottom, rgba(23, 88, 100, 0.6) 100%)'
              }}             
            >
              <h2 className="text-2xl font-bold transition-transform duration-500 delay-500 translate-y-0 z-10">
                {card.title}
              </h2>
              <p
                className={`mt-2 transition-opacity duration-500 z-10 ${
                  showDescription ? 'opacity-100' : 'opacity-0'
                }`}
              >
                {card.description}
              </p>
            </div>
          ) : (
            <div
              className="absolute inset-0 flex items-center justify-center text-white p-2 rounded-lg"
              style={{
                background:
                  'linear-gradient(to bottom, rgba(0, 0, 0, 0.7) 20%, rgba(0, 0, 0, 0.3) 80%, rgba(0, 0, 0, 0) 100%)',
              }}
            >
              <h2 className="transform rotate-0 md:-rotate-90 whitespace-nowrap z-10">
                {card.title}
              </h2>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};