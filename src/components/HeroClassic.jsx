import React, { useState } from 'react';
import { ArrowUpRight, Sparkles, Flame, CheckCircle, ShieldCheck } from 'lucide-react';
import { sounds } from '../utils/audio';

export default function HeroClassic({ onOpenBid, onOpenWallet }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setTilt({
      x: (y / (rect.height / 2)) * -8,
      y: (x / (rect.width / 2)) * 8,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section id="explore" className="relative pt-12 pb-20 md:py-24 overflow-hidden">
      {/* Background ambient radial gradients */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-indigo-600/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill border border-purple-500/30 text-xs font-semibold text-purple-300 shadow-sm animate-pulse-glow">
              <Sparkles className="w-3.5 h-3.5 text-pink-400" />
              <span>Next-Generation Digital Collectibles</span>
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
              <span className="text-white/60">v2.4 Live</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold font-display tracking-tight text-white leading-[1.08]">
                Create and <br />
                Collect The <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-300 text-glow">
                  Future Today
                </span>
              </h1>
            </div>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-purple-200/70 max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Buy, sell, and discover exclusive digital artworks and rigged 3D avatars curated by world-class digital sculptors and cyberpunk concept artists.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#collections"
                onClick={() => sounds.playClick()}
                className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-sm text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 hover:opacity-95 shadow-xl shadow-purple-600/30 transition transform hover:-translate-y-1 active:translate-y-0 cursor-pointer flex items-center justify-center gap-2 group"
              >
                <span>Explore Marketplace</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
              </a>

              <button
                onClick={() => { sounds.playClick(); onOpenWallet(); }}
                className="w-full sm:w-auto px-7 py-4 rounded-full font-semibold text-sm text-purple-200 glass-card hover:bg-white/10 border border-white/15 transition transform hover:-translate-y-0.5 cursor-pointer"
              >
                Connect Wallet
              </button>
            </div>

            {/* Live Stats */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0">
              <div>
                <span className="block text-2xl sm:text-3xl font-extrabold font-display text-white">32K+</span>
                <span className="text-xs text-purple-300/60 font-medium uppercase tracking-wider">Artworks</span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-extrabold font-display text-white">20K+</span>
                <span className="text-xs text-purple-300/60 font-medium uppercase tracking-wider">Auctions</span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-extrabold font-display text-white">15K+</span>
                <span className="text-xs text-purple-300/60 font-medium uppercase tracking-wider">Artists</span>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Holographic Card & Floating Badges */}
          <div className="lg:col-span-5 flex justify-center">
            <div
              className="relative w-full max-w-sm sm:max-w-md transition-transform duration-200 ease-out"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
              }}
            >
              {/* Outer Glow Halo */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-purple-600 via-pink-500 to-indigo-600 rounded-[36px] blur-xl opacity-40 animate-pulse-glow" />

              {/* Main Artwork Container */}
              <div className="relative rounded-[32px] overflow-hidden glass-card border border-purple-500/40 p-3 shadow-2xl bg-[#0f0b24]">
                <div className="relative aspect-[4/5] rounded-[24px] overflow-hidden group">
                  <img
                    src="/assets/hero_cyborg.jpg"
                    alt="Cybernetic Humanoid Avatar"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080614] via-transparent to-transparent opacity-80" />

                  {/* Artwork Meta Overlaid at Bottom */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-pink-400">Genesis Series</span>
                      <h3 className="text-xl font-bold font-display text-white drop-shadow-md">Aura Cyborg #001</h3>
                    </div>

                    <button
                      onClick={() => onOpenBid({
                        id: 'aura-001',
                        name: 'Aura Cyborg #001',
                        collection: 'Genesis Series',
                        currentBid: 18.5,
                        image: '/assets/hero_cyborg.jpg'
                      })}
                      className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-95 shadow-md shadow-purple-600/40 transition cursor-pointer"
                    >
                      Bid Now
                    </button>
                  </div>
                </div>

                {/* Floating Badge 1: Top Right Current Bid */}
                <div className="absolute -top-4 -right-4 sm:-right-6 glass-panel px-4 py-2.5 rounded-2xl border border-purple-500/40 shadow-xl flex items-center gap-3 animate-float">
                  <div className="w-8 h-8 rounded-xl bg-purple-600/30 flex items-center justify-center text-purple-300 font-bold">
                    💎
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] font-semibold text-purple-300 uppercase tracking-wider">Current Bid</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    </div>
                    <span className="text-base font-extrabold font-display text-white">18.50 ETH</span>
                  </div>
                </div>

                {/* Floating Badge 2: Bottom Left Creator Tag */}
                <div className="absolute -bottom-5 -left-4 sm:-left-6 glass-panel px-3.5 py-2.5 rounded-2xl border border-purple-500/40 shadow-xl flex items-center gap-3 animate-float-reverse">
                  <img
                    src="/assets/creator_alex.jpg"
                    alt="Alex Rivers"
                    className="w-9 h-9 rounded-xl object-cover border border-purple-400/50"
                  />
                  <div>
                    <div className="flex items-center gap-1">
                      <span className="text-xs font-bold text-white">Alex Rivers</span>
                      <CheckCircle className="w-3.5 h-3.5 text-blue-400 fill-blue-400/20" />
                    </div>
                    <span className="text-[10px] text-purple-300/70 font-medium">Top 1% Creator</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
