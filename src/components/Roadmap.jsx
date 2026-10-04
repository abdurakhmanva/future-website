import React from 'react';
import { CheckCircle2, Clock, Sparkles } from 'lucide-react';
import { ROADMAP_PHASES } from '../data/mockData';

export default function Roadmap() {
  return (
    <section id="roadmap" className="py-20 md:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-400 bg-indigo-500/10 px-3.5 py-1 rounded-full border border-indigo-500/20">
            Evolution
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight">
            Project Roadmap
          </h2>
          <p className="text-sm sm:text-base text-purple-200/70">
            Our strategic trajectory to revolutionize metaverse asset ownership, spatial computing, and on-chain liquidity.
          </p>
        </div>

        {/* Roadmap Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ROADMAP_PHASES.map((phase) => {
            const isCompleted = phase.status === 'Completed';
            const isInProgress = phase.status === 'In Progress';

            return (
              <div
                key={phase.phase}
                className={`relative rounded-3xl p-6 glass-panel border transition-all duration-300 flex flex-col justify-between ${
                  isInProgress
                    ? 'border-purple-400/60 shadow-xl shadow-purple-600/20'
                    : 'border-white/10 hover:border-purple-500/40'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-purple-300">{phase.phase}</span>
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border flex items-center gap-1.5 ${
                        isCompleted
                          ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30'
                          : isInProgress
                          ? 'bg-purple-500/20 text-purple-300 border-purple-500/30 animate-pulse'
                          : 'bg-white/5 text-white/50 border-white/10'
                      }`}
                    >
                      {isCompleted && <CheckCircle2 className="w-3 h-3" />}
                      {isInProgress && <Clock className="w-3 h-3" />}
                      {phase.status}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-display text-white mb-1">
                    {phase.title}
                  </h3>
                  <span className="text-xs text-purple-300/60 font-medium block mb-4">
                    Target: {phase.date}
                  </span>

                  <ul className="space-y-2.5 text-xs text-purple-200/70">
                    {phase.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-pink-400 font-bold mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5">
                  <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${
                        isCompleted
                          ? 'w-full bg-emerald-400'
                          : isInProgress
                          ? 'w-1/2 bg-gradient-to-r from-purple-500 to-pink-500'
                          : 'w-0'
                      }`}
                    />
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
