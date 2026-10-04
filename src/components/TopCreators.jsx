import React, { useState } from 'react';
import { CheckCircle2, UserPlus, UserCheck, TrendingUp } from 'lucide-react';
import { TOP_CREATORS } from '../data/mockData';
import { sounds } from '../utils/audio';

export default function TopCreators() {
  const [followingMap, setFollowingMap] = useState({});

  const toggleFollow = (id) => {
    sounds.playClick();
    setFollowingMap((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-pink-400 bg-pink-500/10 px-3.5 py-1 rounded-full border border-pink-500/20">
              Leaderboard
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight mt-2">
              Top Creators This Week
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-purple-200/70 max-w-xs sm:text-right">
            Ranked by secondary transaction volume, mint velocity, and community engagement.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TOP_CREATORS.map((creator, index) => {
            const isFollowing = !!followingMap[creator.id];

            return (
              <div
                key={creator.id}
                className="relative rounded-3xl p-5 glass-panel border border-white/10 hover:border-purple-400/40 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group"
              >
                {/* Rank Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="w-7 h-7 rounded-xl bg-purple-600/20 text-purple-300 border border-purple-500/30 flex items-center justify-center font-mono text-xs font-bold">
                    #{index + 1}
                  </span>
                  <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    {creator.change}
                  </span>
                </div>

                {/* Creator Avatar & Names */}
                <div className="text-center my-2">
                  <div className="relative w-20 h-20 mx-auto mb-3">
                    <img
                      src={creator.avatar}
                      alt={creator.name}
                      className="w-full h-full object-cover rounded-2xl border-2 border-purple-400/50 shadow-lg group-hover:scale-105 transition-transform"
                    />
                    <CheckCircle2 className="w-5 h-5 text-blue-400 fill-blue-400/20 absolute -bottom-1 -right-1 bg-[#080614] rounded-full" />
                  </div>

                  <h3 className="text-base font-bold font-display text-white group-hover:text-purple-300 transition">
                    {creator.name}
                  </h3>
                  <span className="text-xs text-purple-300/60 font-mono block">
                    {creator.handle}
                  </span>
                </div>

                {/* Stats & Follow Button */}
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-white/50 block">Total Volume</span>
                    <span className="text-xs font-bold text-white font-mono">{creator.volume}</span>
                  </div>

                  <button
                    onClick={() => toggleFollow(creator.id)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition cursor-pointer flex items-center gap-1.5 ${
                      isFollowing
                        ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                        : 'bg-white/10 hover:bg-white/20 text-white'
                    }`}
                  >
                    {isFollowing ? (
                      <>
                        <UserCheck className="w-3.5 h-3.5" />
                        <span>Following</span>
                      </>
                    ) : (
                      <>
                        <UserPlus className="w-3.5 h-3.5" />
                        <span>Follow</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
