// components/layout/home/ExpandingCards.tsx
"use client";
import Image from "next/image";
import { useState, useEffect } from 'react';
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
      className="container w-11/12 flex h-[60vh] sm:h-[70vh] md:h-[90vh] 2xl:max-h-[70vh] gap-2 items-center overflow-hidden mx-auto flex-col md:flex-row"
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
          <Image
            src={card.url}
            alt={card.title}
            fill
            className="object-cover"
            priority={index === 0}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/65" />
          {activeIndex === index ? (
            <div className="absolute inset-0 flex flex-col justify-center sm:justify-end text-white p-3 sm:p-7 transition-opacity duration-500 delay-300 opacity-100">
              <h2 className="text-2xl font-bold transition-transform duration-500 delay-500 translate-y-0">
                {card.title}
              </h2>
              <p
                className={`mt-2 transition-opacity duration-500 ${
                  showDescription ? 'opacity-100' : 'opacity-0'
                }`}
              >
                {card.description}
              </p>
            </div>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-white p-2">
              <h2 className="transform rotate-0 md:-rotate-90 whitespace-nowrap">
                {card.title}
              </h2>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
