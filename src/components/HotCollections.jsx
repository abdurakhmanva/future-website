import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Heart, Sparkles, ArrowUpRight, Flame } from 'lucide-react';
import { NFT_COLLECTIONS } from '../data/mockData';
import { sounds } from '../utils/audio';

const CATEGORIES = ['All Drops', 'Avatars', 'Cyberpunk', '3D Art', 'Rare Artifacts'];

export default function HotCollections({ onOpenBid }) {
  const [selectedCategory, setSelectedCategory] = useState('All Drops');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [likedMap, setLikedMap] = useState({});

  const filteredItems = NFT_COLLECTIONS.filter((item) => {
    if (selectedCategory === 'All Drops') return true;
    return item.category === selectedCategory;
  });

  const handlePrev = () => {
    sounds.playClick();
    setCurrentIndex((prev) => (prev === 0 ? filteredItems.length - 1 : prev - 1));
  };

  const handleNext = () => {
    sounds.playClick();
    setCurrentIndex((prev) => (prev === filteredItems.length - 1 ? 0 : prev + 1));
  };

  const toggleLike = (id) => {
    sounds.playClick();
    setLikedMap((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="collections" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header & Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-bold text-purple-300 mb-3">
              <Flame className="w-3.5 h-3.5 text-pink-400" />
              <span>Trending Drops</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight">
              Hot Collections
            </h2>
            <p className="text-sm text-purple-200/70 mt-1">
              Top curated cyberpunk avatar drops with active on-chain bidding.
            </p>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="p-3 rounded-2xl glass-panel border border-white/10 hover:border-purple-500/40 text-white/80 hover:text-white transition cursor-pointer"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-2xl glass-panel border border-white/10 hover:border-purple-500/40 text-white/80 hover:text-white transition cursor-pointer"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Category Pills Filter */}
        <div className="flex items-center gap-2 overflow-x-auto pb-6 scrollbar-none">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => { sounds.playClick(); setSelectedCategory(cat); setCurrentIndex(0); }}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition whitespace-nowrap cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25'
                  : 'glass-panel text-purple-200/70 hover:text-white hover:border-purple-500/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* NFT Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((nft) => {
            const isLiked = !!likedMap[nft.id];

            return (
              <div
                key={nft.id}
                className="group relative rounded-3xl overflow-hidden glass-card border border-purple-500/20 hover:border-purple-400/50 transition-all duration-300 hover:-translate-y-2 flex flex-col p-3 shadow-xl bg-[#0f0b24]"
              >
                {/* Artwork Image */}
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-black/40">
                  <img
                    src={nft.image}
                    alt={nft.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Category Pill Tag */}
                  <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full glass-pill border border-white/20 text-white">
                    {nft.category}
                  </span>

                  {/* Like Button */}
                  <button
                    onClick={() => toggleLike(nft.id)}
                    className="absolute top-3 right-3 p-2 rounded-full glass-pill border border-white/20 hover:scale-110 transition cursor-pointer"
                    aria-label="Like"
                  >
                    <Heart
                      className={`w-4 h-4 transition ${
                        isLiked ? 'text-rose-500 fill-rose-500' : 'text-white/80'
                      }`}
                    />
                  </button>

                  {/* Timer pill */}
                  <div className="absolute bottom-3 left-3 glass-pill px-2.5 py-1 rounded-full border border-white/20 text-[10px] font-mono font-medium text-white/90">
                    ⏱ {nft.endsIn}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-3 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] text-purple-300 font-semibold block truncate">
                      {nft.collection}
                    </span>
                    <h3 className="text-base font-bold font-display text-white mt-0.5 truncate group-hover:text-purple-300 transition">
                      {nft.name}
                    </h3>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-white/50 block font-medium">Current Bid</span>
                      <span className="text-sm font-extrabold font-display text-white">
                        {nft.currentBid} ETH
                      </span>
                    </div>

                    <button
                      onClick={() => onOpenBid(nft)}
                      className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-purple-600 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 transition shadow-md shadow-purple-600/30 cursor-pointer flex items-center gap-1"
                    >
                      <span>Bid</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
