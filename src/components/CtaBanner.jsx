import React from 'react';
import { ArrowUpRight, MessageSquare, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { sounds } from '../utils/audio';

export default function CtaBanner({ onOpenWallet }) {
  const handleDiscordClick = () => {
    sounds.playSuccess();
    confetti({
      particleCount: 70,
      spread: 80,
      origin: { y: 0.7 }
    });
    window.open('https://discord.com', '_blank');
  };

  return (
    <section id="community" className="py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Wide Gradient Container */}
        <div className="relative rounded-[36px] overflow-hidden p-8 sm:p-12 lg:p-16 bg-gradient-to-r from-purple-900/90 via-indigo-900/80 to-purple-950/90 border border-purple-400/40 shadow-2xl shadow-purple-950/50">
          
          {/* Ambient Glows */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-10 w-80 h-80 bg-purple-600/30 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Column: Text & Buttons */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-xs font-bold text-white border border-white/20">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Join Over 100,000+ Members</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black font-display text-white tracking-tight leading-tight">
                Never Miss A Drop. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-pink-300 to-purple-300">
                  Join Our Community
                </span>
              </h2>

              <p className="text-base text-purple-200/80 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                Connect with digital creators, get whitelist priority access to genesis auctions, and participate in weekly metaverse townhalls.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <button
                  onClick={handleDiscordClick}
                  className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-sm text-gray-900 bg-gradient-to-r from-amber-400 to-orange-400 hover:from-amber-300 hover:to-orange-300 shadow-xl shadow-orange-500/30 transition transform hover:-translate-y-1 active:translate-y-0 cursor-pointer flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>Join Discord</span>
                </button>

                <button
                  onClick={() => { sounds.playClick(); onOpenWallet(); }}
                  className="w-full sm:w-auto px-8 py-4 rounded-full font-semibold text-sm text-white glass-pill hover:bg-white/15 border border-white/20 transition transform hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Mint Whitelist Pass</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Column: Floating 3D Character Model with Orange Orbiting Spheres */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80">
                <div className="absolute inset-0 bg-amber-500/20 rounded-full blur-2xl animate-pulse" />
                <img
                  src="/assets/cta_cyborg.jpg"
                  alt="3D Android Character with Orbiting Spheres"
                  className="w-full h-full object-contain relative z-10 animate-float drop-shadow-2xl"
                />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
