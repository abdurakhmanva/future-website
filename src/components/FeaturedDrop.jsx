import React, { useState, useEffect } from 'react';
import { Sparkles, Clock, CheckCircle, Flame, ArrowUpRight } from 'lucide-react';
import { sounds } from '../utils/audio';

const FEATURED_ITEMS = [
  {
    id: 'wings-001',
    name: 'Odyssey Wings Capsule #001',
    collection: 'Cyber Relics Genesis',
    image: '/assets/wings_capsule.jpg',
    currentBid: 8.50,
    usdPrice: 26775,
    creator: 'Elena Rostova',
    creatorAvatar: '/assets/creator_elena.jpg',
    rarity: 'Genesis 1 of 1',
    description: 'A pressurized holographic containment cell preserving the mythical cybernetic photonic wings of the First Ascendant. Rigged with real-time particle emission shaders.',
  },
  {
    id: 'samurai-042',
    name: 'Cyber Samurai #042',
    collection: 'Neo Tokyo Clan',
    image: '/assets/samurai.jpg',
    currentBid: 3.45,
    usdPrice: 10860,
    creator: 'Alex Rivers',
    creatorAvatar: '/assets/creator_alex.jpg',
    rarity: 'Mythic (99.4%)',
    description: 'Forged in the silicon alleyways of Neo-Tokyo, the Cyber Samurai combines ancient honor with quantum katana mechanics and custom armor shaders.',
  },
  {
    id: 'valkyrie-118',
    name: 'Neon Valkyrie #118',
    collection: 'Synthwave Pantheon',
    image: '/assets/valkyrie.jpg',
    currentBid: 4.20,
    usdPrice: 13230,
    creator: 'Elena Rostova',
    creatorAvatar: '/assets/creator_elena.jpg',
    rarity: 'Legendary (98.9%)',
    description: 'An ethereal bio-synthetic guardian traversing digital realms with optic neural implants, holographic visor, and photonic silver armor.',
  }
];

export default function FeaturedDrop({ onOpenBid }) {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const activeItem = FEATURED_ITEMS[selectedIdx];

  // Countdown timer simulation
  const [timeLeft, setTimeLeft] = useState({ hours: 6, minutes: 14, seconds: 48 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 12, minutes: 0, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="featured" className="py-20 md:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Big Interactive Artwork Preview + Thumbnail Switchers */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative rounded-3xl overflow-hidden glass-card border border-purple-500/40 p-3 shadow-2xl bg-[#0e0a22] group">
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <img
                  src={activeItem.image}
                  alt={activeItem.name}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                />
                
                {/* Floating Rarity Tag */}
                <div className="absolute top-4 left-4 glass-pill px-3 py-1.5 rounded-full border border-purple-400/40 text-xs font-bold text-pink-300 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{activeItem.rarity}</span>
                </div>

                {/* Live Countdown Pill Overlaid */}
                <div className="absolute bottom-4 left-4 right-4 glass-panel p-3 rounded-2xl border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-purple-200">
                    <Clock className="w-4 h-4 text-pink-400 animate-spin" />
                    <span>Auction Ends In:</span>
                  </div>
                  <div className="font-mono text-sm font-bold text-white tracking-wider">
                    {String(timeLeft.hours).padStart(2, '0')}h : {String(timeLeft.minutes).padStart(2, '0')}m : {String(timeLeft.seconds).padStart(2, '0')}s
                  </div>
                </div>
              </div>
            </div>

            {/* Thumbnail Selectors matching Figma design */}
            <div className="flex items-center gap-3">
              {FEATURED_ITEMS.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => { sounds.playClick(); setSelectedIdx(idx); }}
                  className={`flex-1 p-2 rounded-2xl border transition flex items-center gap-2 cursor-pointer ${
                    selectedIdx === idx
                      ? 'bg-purple-900/50 border-purple-400 shadow-lg shadow-purple-500/20'
                      : 'bg-white/5 border-white/10 hover:border-purple-500/40 hover:bg-white/10'
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-10 h-10 rounded-xl object-cover"
                  />
                  <div className="text-left hidden sm:block truncate">
                    <span className="text-[11px] font-bold text-white block truncate">{item.name}</span>
                    <span className="text-[10px] text-purple-300">{item.currentBid} ETH</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Detailed Description & Bidding Actions */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pink-500/10 border border-pink-500/30 text-xs font-bold text-pink-400">
              <Flame className="w-3.5 h-3.5" />
              <span>Curated Drop of the Week</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight leading-tight">
              {activeItem.name}
            </h2>

            <p className="text-base text-purple-200/70 leading-relaxed">
              {activeItem.description}
            </p>

            {/* Creator Profile Card */}
            <div className="flex items-center gap-3.5 p-3 rounded-2xl glass-pill max-w-sm">
              <img
                src={activeItem.creatorAvatar}
                alt={activeItem.creator}
                className="w-11 h-11 rounded-xl object-cover border border-purple-400"
              />
              <div>
                <span className="text-[10px] text-purple-300 uppercase tracking-wider block font-semibold">Artist & Architect</span>
                <div className="flex items-center gap-1.5">
                  <span className="text-sm font-bold text-white">{activeItem.creator}</span>
                  <CheckCircle className="w-3.5 h-3.5 text-blue-400 fill-blue-400/20" />
                </div>
              </div>
            </div>

            {/* Price & Bid Container */}
            <div className="p-6 rounded-3xl glass-panel border border-purple-500/30 space-y-4">
              <div className="flex items-baseline justify-between">
                <div>
                  <span className="text-xs text-purple-300 block font-medium">Current Top Bid</span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-3xl sm:text-4xl font-extrabold font-display text-white">
                      {activeItem.currentBid} ETH
                    </span>
                    <span className="text-sm text-purple-300/70 font-semibold">
                      (~${activeItem.usdPrice.toLocaleString()} USD)
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-xs text-emerald-400 font-semibold block">Reserve Price Met</span>
                  <span className="text-xs text-white/50">14 Bids Placed</span>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => onOpenBid(activeItem)}
                  className="flex-1 py-4 px-6 rounded-2xl font-bold text-sm text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 hover:opacity-95 shadow-xl shadow-purple-600/30 transition transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Place a Bid</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
