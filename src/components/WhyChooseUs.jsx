import React from 'react';
import { Shield, Sparkles, Cpu, Users, CheckCircle2 } from 'lucide-react';

const HIGHLIGHTS = [
  {
    number: '01',
    title: 'High Quality Art & Shaders',
    desc: 'Every drop undergoes strict curation for model topology, texture maps, and spatial lighting fidelity.',
    icon: Sparkles,
  },
  {
    number: '02',
    title: 'Extensive Metaverse Collections',
    desc: 'Over 10,000 unique avatars interoperable across Unreal Engine 5, Unity, and spatial headsets.',
    icon: Cpu,
  },
  {
    number: '03',
    title: 'Zero Gas Fee Scaling Protocols',
    desc: 'Instant minting and secondary transfers powered by Ethereum Layer-2 rollups and smart gas subsidization.',
    icon: Shield,
  },
  {
    number: '04',
    title: 'Vibrant Global Creator Community',
    desc: 'Over 100,000 active collectors, artists, and DAO delegates collaborating in private channels.',
    icon: Users,
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[550px] h-[550px] bg-purple-700/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Feature Highlights */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-purple-400 bg-purple-500/10 px-3.5 py-1 rounded-full border border-purple-500/20">
              Platform Architecture
            </span>

            <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight leading-tight">
              Experience The Future <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-300">
                of Digital Ownership
              </span>
            </h2>

            <p className="text-sm sm:text-base text-purple-200/70 max-w-xl">
              Engineered from the ground up for extreme speed, aesthetic perfection, and verifiable cryptographic scarcity.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {HIGHLIGHTS.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.number}
                    className="p-5 rounded-2xl glass-panel border border-purple-500/20 hover:border-purple-400/40 transition group"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-xl bg-purple-600/20 flex items-center justify-center text-purple-300 group-hover:text-pink-400 group-hover:bg-purple-600/30 transition">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-xs font-bold text-white/40">{item.number}</span>
                    </div>

                    <h3 className="text-base font-bold font-display text-white mb-1.5 group-hover:text-purple-300 transition">
                      {item.title}
                    </h3>
                    <p className="text-xs text-purple-200/60 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: 3D Translucent Crystal Skull Artifact */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Pulsing Backlight */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-purple-600/40 via-amber-500/30 to-indigo-600/40 rounded-full blur-3xl opacity-60 animate-pulse-glow" />

              <div className="relative rounded-[32px] overflow-hidden glass-card border border-purple-500/30 p-3 shadow-2xl bg-[#0d0920] animate-float">
                <img
                  src="/assets/crystal_skull.jpg"
                  alt="Translucent Purple Crystal Skull with Orbiting Planets"
                  className="w-full h-auto rounded-[24px] object-cover"
                />

                <div className="p-4 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-pink-400 font-bold uppercase tracking-wider">Holographic Artifact</span>
                    <h4 className="text-lg font-bold font-display text-white">Quantum Relic #088</h4>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-white/50 block">Rarity Index</span>
                    <span className="text-sm font-bold text-emerald-400 font-mono">99.98%</span>
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
