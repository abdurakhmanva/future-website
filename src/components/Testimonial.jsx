import React from 'react';
import { Star, Quote, CheckCircle } from 'lucide-react';

export default function Testimonial() {
  return (
    <section className="py-20 md:py-28 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative rounded-3xl p-8 sm:p-12 glass-panel border border-purple-500/30 shadow-2xl">
          {/* Quote Icon */}
          <div className="w-12 h-12 mx-auto mb-6 rounded-2xl bg-gradient-to-tr from-purple-600 to-pink-500 flex items-center justify-center text-white shadow-lg shadow-purple-500/30">
            <Quote className="w-6 h-6" />
          </div>

          {/* Rating */}
          <div className="flex items-center justify-center gap-1.5 mb-6 text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400" />
            ))}
          </div>

          {/* Testimonial Quote */}
          <blockquote className="text-xl sm:text-2xl font-display font-medium text-white leading-relaxed mb-8">
            "The FUTURE marketplace completely changed how I collect and interact with digital art. The immersive 3D avatars, instantaneous Layer-2 transactions, and creator royalties are unmatched anywhere in Web3."
          </blockquote>

          {/* Author */}
          <div className="flex items-center justify-center gap-3.5">
            <img
              src="/assets/creator_elena.jpg"
              alt="Elena Rostova"
              className="w-12 h-12 rounded-full object-cover border-2 border-purple-400 shadow-md"
            />
            <div className="text-left">
              <div className="flex items-center gap-1.5">
                <span className="text-sm font-bold text-white">Elena Rostova</span>
                <CheckCircle className="w-4 h-4 text-blue-400 fill-blue-400/20" />
              </div>
              <span className="text-xs text-purple-300/70 font-medium">Founder & Web3 Curator, NeoArt DAO</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
