import React from 'react';
import { Wallet, FolderPlus, Sparkles, Tag } from 'lucide-react';
import { HOW_IT_WORKS } from '../data/mockData';

const ICONS = {
  Wallet,
  FolderPlus,
  Sparkles,
  Tag,
};

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-pink-400 bg-pink-500/10 px-3.5 py-1 rounded-full border border-pink-500/20">
            Getting Started
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight">
            How It Works
          </h2>
          <p className="text-sm sm:text-base text-purple-200/70">
            Join the decentralized economy in four seamless steps. Zero complexity, absolute ownership.
          </p>
        </div>

        {/* 4 Glowing Circular Cards / Orbs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {HOW_IT_WORKS.map((item, index) => {
            const IconComponent = ICONS[item.icon] || Sparkles;

            return (
              <div
                key={item.step}
                className="group relative rounded-3xl p-6 glass-panel border border-purple-500/20 hover:border-purple-400/50 transition-all duration-300 hover:-translate-y-2 text-center flex flex-col items-center"
              >
                {/* Number Watermark */}
                <span className="absolute top-4 right-4 text-xs font-mono font-bold text-purple-400/40 group-hover:text-purple-300 transition">
                  {item.step}
                </span>

                {/* Glowing Orb with Icon */}
                <div className="relative my-4">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-purple-600 via-indigo-600 to-pink-500 p-[2px] shadow-lg shadow-purple-500/30 group-hover:scale-110 group-hover:shadow-purple-500/50 transition-all duration-300">
                    <div className="w-full h-full rounded-full bg-[#120c2b] flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-purple-300 group-hover:text-white transition" />
                    </div>
                  </div>
                  {/* Subtle pulsing orbit ring */}
                  <div className="absolute -inset-2 rounded-full border border-purple-400/20 animate-pulse pointer-events-none" />
                </div>

                <h3 className="text-lg font-bold font-display text-white mt-3 mb-2 group-hover:text-purple-300 transition">
                  {item.title}
                </h3>

                <p className="text-xs text-purple-200/60 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
