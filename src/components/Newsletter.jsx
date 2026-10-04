import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { sounds } from '../utils/audio';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    sounds.playSuccess();
    setSubscribed(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 }
    });
  };

  return (
    <section className="py-16 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center relative z-10 space-y-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-pink-400 bg-pink-500/10 px-3.5 py-1 rounded-full border border-pink-500/20">
            Dispatch
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight mt-3">
            Stay In The Loop
          </h2>
          <p className="text-sm text-purple-200/70 mt-1 max-w-md mx-auto">
            Get exclusive curated drops, artist spotlights, and market analysis sent directly to your inbox.
          </p>
        </div>

        {subscribed ? (
          <div className="p-5 rounded-2xl glass-panel border border-emerald-500/40 text-emerald-300 flex items-center justify-center gap-2 max-w-md mx-auto">
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            <span className="text-sm font-semibold">You're subscribed! Welcome to the vanguard.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto relative flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 px-5 py-4 rounded-2xl bg-white/5 border border-purple-500/30 text-white placeholder-purple-300/40 text-sm focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-500/30 transition"
              required
            />
            <button
              type="submit"
              className="px-8 py-4 rounded-2xl font-bold text-sm text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-95 shadow-lg shadow-purple-600/30 transition cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Subscribe</span>
              <Send className="w-4 h-4" />
            </button>
          </form>
        )}

        <span className="text-[11px] text-white/40 block">
          No spam, ever. Unsubscribe with a single click at any time.
        </span>
      </div>
    </section>
  );
}
