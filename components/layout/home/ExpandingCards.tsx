"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from "framer-motion";
import { servicesData } from "@/lib/commonData";

export default function ExpandingCards() {
  const [selectedCard, setSelectedCard] = useState<typeof servicesData[0] | null>(null);

  if (!servicesData || servicesData.length === 0) {
    return <p className="text-center text-gray-500">No data to display</p>;
  }

  return (
    <div className="w-full max-w-[1400px] mx-auto pt-6 pb-20 px-4 sm:px-8 relative z-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {servicesData.map((card, index) => (
          <div
            key={index}
            onClick={() => setSelectedCard(card)}
            className="group rounded-2xl overflow-hidden border border-gray-100 bg-white flex flex-col h-[400px] cursor-pointer shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-2 hover:bg-[#175864] hover:shadow-[0_20px_40px_rgba(23,88,100,0.15)]"
          >
            <div className="w-full h-48 overflow-hidden bg-gray-900 relative">
              <Image src={card.url} alt={card.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div className="p-5 flex flex-col flex-1">
              <h3 className="text-lg font-bold mb-2 text-gray-800 group-hover:text-white line-clamp-2">{card.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed line-clamp-4 group-hover:text-white">{card.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Popup Modal */}
      <AnimatePresence>
        {selectedCard && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setSelectedCard(null)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            >
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-3xl overflow-hidden max-w-2xl w-full max-h-[90vh] shadow-2xl relative"
              >
                <button 
                  onClick={() => setSelectedCard(null)}
                  className="absolute top-4 right-4 z-10 bg-white/50 p-2 rounded-full hover:bg-white"
                >✕</button>
                
                <div className="h-64 w-full relative">
                  <Image src={selectedCard.url} alt={selectedCard.title} fill className="object-cover" />
                </div>
                
                <div className="p-8">
                  <h3 className="text-3xl font-bold mb-4 text-[#175864]">{selectedCard.title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">{selectedCard.description}</p>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}