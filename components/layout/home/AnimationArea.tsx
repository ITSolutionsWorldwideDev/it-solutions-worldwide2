"use client";
import { motion } from "framer-motion";
import ExpandingCards from "./ExpandingCards";
import {
  LogosSlider,
  AnimatedList,
  FunFacts,
  PinnedProgressSection,
  AnimatedGlobe,
} from "./AnimationComponents";

export default function AnimationArea() {
  return (
    <>
      <div className="xl:max-h-fit container xl:max-w-[1200px] mx-auto text-center py-20">
        {/* LCP FIXED: Speed increased by reducing duration and removing delay */}
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.3,
            ease: "easeOut",
          }}
        >
          <span className="bg-[#175864] text-white px-4 py-1 rounded-md inline-block">
            OUR SERVICES
          </span>
        </motion.h2>

        <ExpandingCards />
      </div>
      <div className="max-h-[400px] flex flex-col justify-center items-center bg-cover bg-center w-full pt-20">
        <div className="container mx-auto ">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 text-center"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: 0.5,
            }}
            viewport={{ once: true }}
          >
            <span className="bg-[#175864] text-white px-4 py-1 rounded-md inline-block">
              Our Clients
            </span>
          </motion.h2>
          <h2 className="text-center text-2xl md:text-3xl lg:text-3xl font-medium text-[#175864] w-11/12 lg:w-8/12 mx-auto">
            Empowering Customers, Automating Success Smart Solutions for Smarter
            Businesses
          </h2>
          <LogosSlider />
        </div>
      </div>

      <div className=" container xl:max-w-[1200px] mx-auto text-center py-20">
        <AnimatedList />
      </div>
      <div
        className="flex flex-col justify-center items-center bg-cover bg-center w-full"
        style={{
          backgroundImage: `url(/assets/images/backgrounds/clients-section-radial-bg.webp)`,
        }}
      >
        <div className="container px-4 sm:px-6 lg:px-8 place-items-center">
          <FunFacts />
        </div>
      </div>

      <PinnedProgressSection />
      <AnimatedGlobe />
    </>
  );
}