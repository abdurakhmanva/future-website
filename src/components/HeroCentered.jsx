import React from 'react';
import { ArrowUpRight, Sparkles, ShieldCheck } from 'lucide-react';
import { sounds } from '../utils/audio';

export default function HeroCentered({ onOpenBid, onOpenWallet }) {
  return (
    <section className="relative pt-10 pb-20 md:py-24 text-center overflow-hidden">
      {/* Glow Backdrops */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 space-y-8">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill border border-purple-500/30 text-xs font-semibold text-purple-300">
          <Sparkles className="w-3.5 h-3.5 text-pink-400" />
          <span>The Metaverse Awaits</span>
        </div>

        {/* Big Centered Heading */}
        <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold font-display tracking-tight text-white leading-[1.1]">
          The Future of <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-300 text-glow">
            Digital Art & Avatars
          </span>
        </h1>

        {/* Centered Glowing Hero Avatar with Orbiting Badges */}
        <div className="relative w-64 h-64 sm:w-80 sm:h-80 mx-auto my-8">
          <div className="absolute -inset-4 bg-gradient-to-tr from-purple-600 to-pink-500 rounded-full blur-2xl opacity-40 animate-pulse-glow" />
          
          <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-purple-400/50 p-2 glass-card shadow-2xl">
            <img
              src="/assets/hero_cyborg.jpg"
              alt="Centerpiece Cyber Avatar"
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          {/* Orbiting Badge 1 */}
          <div className="absolute -top-3 -right-6 glass-panel px-3.5 py-2 rounded-2xl border border-purple-500/40 shadow-xl flex items-center gap-2 animate-float">
            <span className="text-lg">💎</span>
            <div className="text-left">
              <span className="text-[10px] text-purple-300 block font-semibold uppercase">Highest Bid</span>
              <span className="text-xs font-extrabold text-white">18.50 ETH</span>
            </div>
          </div>

          {/* Orbiting Badge 2 */}
          <div className="absolute -bottom-3 -left-6 glass-panel px-3.5 py-2 rounded-2xl border border-purple-500/40 shadow-xl flex items-center gap-2 animate-float-reverse">
            <img src="/assets/creator_alex.jpg" className="w-7 h-7 rounded-full object-cover border border-purple-400" />
            <div className="text-left">
              <span className="text-xs font-bold text-white">Alex Rivers</span>
              <span className="text-[10px] text-purple-300/80 block">Verified Creator</span>
            </div>
          </div>
        </div>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-purple-200/70 max-w-xl mx-auto leading-relaxed">
          Mint, collect, and experience high-fidelity 3D cybernetic avatars built for decentralized metaverse environments.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <a
            href="#collections"
            onClick={() => sounds.playClick()}
            className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-sm text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 hover:opacity-95 shadow-xl shadow-purple-600/30 transition transform hover:-translate-y-1 active:translate-y-0 cursor-pointer flex items-center justify-center gap-2 group"
          >
            <span>Explore Drops</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
          </a>

          <button
            onClick={() => { sounds.playClick(); onOpenWallet(); }}
            className="w-full sm:w-auto px-7 py-4 rounded-full font-semibold text-sm text-purple-200 glass-card hover:bg-white/10 border border-white/15 transition transform hover:-translate-y-0.5 cursor-pointer"
          >
            Connect Wallet
          </button>
        </div>

        {/* Centered Stat Capsule (matching column 3 of Figma) */}
        <div className="pt-6 max-w-md mx-auto">
          <div className="p-4 rounded-2xl glass-panel border border-purple-500/30 grid grid-cols-3 divide-x divide-white/10">
            <div className="px-3">
              <span className="block text-xl font-bold font-display text-white">45K+</span>
              <span className="text-[11px] text-purple-300/60 uppercase">Artworks</span>
            </div>
            <div className="px-3">
              <span className="block text-xl font-bold font-display text-white">24K+</span>
              <span className="text-[11px] text-purple-300/60 uppercase">Auctions</span>
            </div>
            <div className="px-3">
              <span className="block text-xl font-bold font-display text-white">15K+</span>
              <span className="text-[11px] text-purple-300/60 uppercase">Artists</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
