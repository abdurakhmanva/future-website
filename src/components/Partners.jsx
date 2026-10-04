import React from 'react';
import { PARTNERS } from '../data/mockData';

export default function Partners() {
  return (
    <section className="py-10 border-y border-white/10 bg-[#06040f]/60 backdrop-blur-md overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 mb-4 text-center">
        <span className="text-[11px] font-bold uppercase tracking-widest text-purple-300/50">
          POWERED BY DECENTRALIZED PROTOCOLS & ECOSYSTEMS
        </span>
      </div>

      <div className="relative w-full overflow-hidden flex">
        {/* Gradient edge masks */}
        <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-[#080614] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-[#080614] to-transparent z-10 pointer-events-none" />

        {/* Marquee ticker */}
        <div className="animate-marquee flex items-center gap-12 sm:gap-20">
          {[...PARTNERS, ...PARTNERS, ...PARTNERS].map((partner, index) => (
            <div
              key={index}
              className="flex items-center gap-2.5 opacity-60 hover:opacity-100 transition group cursor-pointer"
            >
              <span className="text-xl sm:text-2xl group-hover:scale-110 transition">{partner.icon}</span>
              <span className="text-sm sm:text-base font-bold font-display text-white group-hover:text-purple-300 transition">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
