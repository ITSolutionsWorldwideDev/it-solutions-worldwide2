"use client";
import React, { useEffect, useRef, useState } from "react";

interface SlotDigitProps {
  finalDigit: number;
  direction: "up" | "down";
  duration?: number;
  digitHeight?: number;
  startAnimation: boolean;
}

interface AnimatedNumberProps {
  value: number;
  duration?: number;
  digitHeight?: number;
  startAnimation: boolean;
}

const SlotDigit: React.FC<SlotDigitProps> = ({
  finalDigit,
  direction,
  duration = 2000,
  digitHeight = 60,
  startAnimation,
}) => {
  const numbers =
    direction === "up"
      ? [...Array(10).keys(), finalDigit]
      : [...Array(10).keys()].reverse().concat(finalDigit);

  const finalOffset =
    (numbers.length - 1) * digitHeight * (direction === "up" ? -1 : 1);

  const innerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (startAnimation) {
      const timeoutId = setTimeout(() => {
        if (innerRef.current) {
          innerRef.current.style.transform = `translateY(${finalOffset}px)`;
          innerRef.current.style.transition = `transform ${duration}ms ease-out`;
        }
      }, 100);

      return () => clearTimeout(timeoutId);
    }
  }, [finalOffset, duration, startAnimation]);

  return (
    <div
      style={{
        height: `${digitHeight}px`,
        overflow: "hidden",
        display: "flex",
        alignItems: direction === "down" ? "flex-end" : "flex-start",
      }}
    >
      <div ref={innerRef}>
        {numbers.map((num, index) => (
          <div
            key={index}
            style={{
              height: `${digitHeight}px`,
              lineHeight: `${digitHeight}px`,
              textAlign: "center",
            }}
          >
            {num}
          </div>
        ))}
      </div>
    </div>
  );
};

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({
  value,
  duration = 2000,
  digitHeight = 60,
  startAnimation,
}) => {
  const strValue = value.toString().padStart(2, "0");

  return (
    <span className="inline-flex lg:text-7xl md:text-5xl text-[50px]">
      {Array.from(strValue).map((char, index) => {
        const digit = parseInt(char, 10);
        const direction = index === 0 ? "up" : "down";
        return (
          <SlotDigit
            key={index}
            finalDigit={digit}
            direction={direction}
            duration={duration}
            digitHeight={digitHeight}
            startAnimation={startAnimation}
          />
        );
      })}
    </span>
  );
};

export default function FunFacts() {
  const [startAnimation, setStartAnimation] = useState(false);
  const funFactsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartAnimation(true);
          observer.disconnect();
        }
      },
      {
        root: null,
        threshold: 0.5,
      }
    );

    if (funFactsRef.current) {
      observer.observe(funFactsRef.current);
    }

    return () => {
      if (funFactsRef.current) {
        observer.unobserve(funFactsRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={funFactsRef}
      className="min-h-[250px] container xl:max-w-[1200px] bg-green-700 rounded-3xl py-12 px-6 my-10"      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h2 className="text-white text-3xl md:text-4xl font-bold text-center mb-12">
        Global Reach, Local Expertise
      </h2>
      <div className="flex flex-col sm:flex-row w-full justify-between text-white">
        <div className="flex-1 text-center p-4">
          <h2 className="md:text-3xl text-xl mb-2 font-bold">
            <AnimatedNumber
              value={8}
              duration={2000}
              digitHeight={60}
              startAnimation={startAnimation}
            />
            +
          </h2>
          <p className="text-lg md:text-base sm:text-sm mb-2">
            Years Serving Globally
          </p>
        </div>
        <div className="flex-1 text-center p-4 border-t sm:border-t-0 sm:border-l border-gray-300">
          <h2 className="md:text-3xl text-xl mb-2 font-bold">
            <AnimatedNumber
              value={98}
              duration={2000}
              digitHeight={60}
              startAnimation={startAnimation}
            />
            %
          </h2>
          <p className="text-lg md:text-base sm:text-sm mb-2">
            Customer Satisfaction
          </p>
        </div>
        <div className="flex-1 text-center p-4 border-t sm:border-t-0 sm:border-l border-gray-300">
          <h2 className="md:text-3xl text-xl mb-2 font-bold">
            <AnimatedNumber
              value={90}
              duration={2000}
              digitHeight={60}
              startAnimation={startAnimation}
            />
            +
          </h2>
          <p className="text-lg md:text-base sm:text-sm mb-2">
            Projects Completed
          </p>
        </div>
        <div className="flex-1 text-center p-4 border-t sm:border-t-0 sm:border-l border-gray-300">
          <h2 className="md:text-3xl text-xl mb-2 font-bold">
            <AnimatedNumber
              value={20}
              duration={2000}
              digitHeight={60}
              startAnimation={startAnimation}
            />
            +
          </h2>
          <p className="text-lg md:text-base sm:text-sm mb-2">
            Countries We Serve
          </p>
        </div>
      </div>
    </div>
  );
}
