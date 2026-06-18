"use client";
import React from "react";

export default function RegionsGlobe() {
  return (
<div className="w-full bg-[#175864] pt-16 pb-20 px-4 flex flex-col items-center justify-center relative z-10 min-h-[450px]">
      <div className="max-w-5xl mx-auto w-full flex flex-col items-center justify-center">
        
        {/* Header Section */}
        <h2 className="text-center text-2xl md:text-4xl font-bold text-white tracking-tight block">
          Delivering Excellence Globally
        </h2>
        <p className="text-center text-sm md:text-lg font-normal text-neutral-200 max-w-md mt-2 mx-auto mb-10 md:mb-14 block">
          Tailored Solutions Across Borders with Global Connectivity
        </p>

        {/* 3D Tech Globe Canvas Component */}
        <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center shrink-0">
          
          {/* Atmosphere External Glow */}
          <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-2xl pointer-events-none" />
          
          {/* Main 3D Sphere Core */}
          <div className="absolute inset-0 rounded-full border-2 border-white/20 bg-gradient-to-br from-[#0d343b] via-[#12454e] to-[#1e6b7a] shadow-[inset_-20px_-20px_50px_rgba(0,0,0,0.8),inset_15px_15px_30px_rgba(255,255,255,0.2),0_10px_30px_rgba(0,0,0,0.4)] overflow-hidden flex items-center justify-center">
            
            {/* Grid Matrix Mesh using Global CSS Layer */}
            <div className="absolute inset-0 opacity-30 rounded-full pointer-events-none globe-grid-bg" />
            
            {/* Core Tech Node Inner Center Light */}
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-cyan-400/10 blur-md animate-pulse pointer-events-none" />
          </div>

          {/* Animated Orbit Satellite Ring */}
          <div className="absolute w-[112%] h-[40%] border border-cyan-400/30 rounded-full animate-globe-orbit pointer-events-none flex items-center justify-between px-1">
            {/* Small Tech Satellites attached to the orbit track line */}
            <div className="w-1.5 h-1.5 bg-cyan-300 rounded-full shadow-[0_0_8px_#22d3ee]" />
            <div className="w-1.5 h-1.5 bg-cyan-300 rounded-full shadow-[0_0_8px_#22d3ee]" />
          </div>
          
          {/* Active Stationary Node Pulse */}
          <div className="absolute top-[30%] left-[35%] w-2.5 h-2.5 bg-cyan-300 rounded-full shadow-[0_0_10px_#22d3ee] pointer-events-none" />
          <div className="absolute top-[30%] left-[35%] w-2.5 h-2.5 bg-cyan-300 rounded-full animate-ping opacity-75 pointer-events-none" />
        </div>

      </div>
    </div>
  );
}