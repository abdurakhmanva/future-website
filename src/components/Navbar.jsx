import React, { useState } from 'react';
import { Wallet, Volume2, VolumeX, Menu, X, Sparkles, ChevronRight, Layers } from 'lucide-react';
import { sounds } from '../utils/audio';

export default function Navbar({ onOpenWallet, walletState, activeLayout, setActiveLayout }) {
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleSound = () => {
    const isNowOn = sounds.toggle();
    setSoundEnabled(isNowOn);
    if (isNowOn) sounds.playClick();
  };

  const navLinks = [
    { label: 'Explore', href: '#explore' },
    { label: 'Featured', href: '#featured' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Collections', href: '#collections' },
    { label: 'Roadmap', href: '#roadmap' },
    { label: 'Community', href: '#community' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full">
      {/* Top Announcement & Layout Switcher Bar */}
      <div className="bg-gradient-to-r from-purple-950/90 via-indigo-950/90 to-purple-950/90 border-b border-purple-500/20 px-4 py-2 text-xs backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-purple-200">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="font-semibold text-white">Genesis Mint 2.0 is Live:</span>
            <span className="hidden md:inline text-purple-300">Whitelist spots available for Cyber Relics 1/1 collection.</span>
          </div>

          <div className="flex items-center gap-3">
            {/* Layout Switcher to toggle between Figma 1 (Two-Column) and Figma 2 (Centered) */}
            <div className="flex items-center gap-1.5 bg-black/40 px-2 py-1 rounded-full border border-purple-500/30">
              <Layers className="w-3.5 h-3.5 text-purple-400" />
              <span className="text-[11px] text-purple-300 font-medium mr-1">Figma Variant:</span>
              <button
                onClick={() => { sounds.playClick(); setActiveLayout('classic'); }}
                className={`px-2 py-0.5 rounded-full text-[11px] font-bold transition cursor-pointer ${
                  activeLayout === 'classic'
                    ? 'bg-purple-600 text-white shadow'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                Desktop 1
              </button>
              <button
                onClick={() => { sounds.playClick(); setActiveLayout('centered'); }}
                className={`px-2 py-0.5 rounded-full text-[11px] font-bold transition cursor-pointer ${
                  activeLayout === 'centered'
                    ? 'bg-purple-600 text-white shadow'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                Centered 2
              </button>
            </div>

            {/* Audio Toggle */}
            <button
              onClick={toggleSound}
              className="p-1 rounded-full hover:bg-white/10 text-purple-300 hover:text-white transition"
              title={soundEnabled ? 'Mute UI sounds' : 'Enable UI sounds'}
              aria-label="Sound Toggle"
            >
              {soundEnabled ? <Volume2 className="w-3.5 h-3.5 text-purple-300" /> : <VolumeX className="w-3.5 h-3.5 text-white/40" />}
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="glass-panel border-b border-white/10 px-4 sm:px-6 lg:px-8 py-3.5 transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={() => sounds.playClick()}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/30 group-hover:scale-105 transition">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-black font-display tracking-wider text-white">
              FUTURE<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">.</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => sounds.playClick()}
                className="text-sm font-medium text-purple-200/80 hover:text-white transition hover:text-glow cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Action / Wallet Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => { sounds.playClick(); onOpenWallet(); }}
              className={`flex items-center gap-2.5 px-5 py-2.5 rounded-full text-xs font-bold transition shadow-lg cursor-pointer ${
                walletState.connected
                  ? 'bg-purple-900/60 text-purple-200 border border-purple-500/40 hover:bg-purple-800/60'
                  : 'bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 text-white hover:opacity-90 shadow-purple-500/25 hover:shadow-purple-500/40 transform hover:-translate-y-0.5'
              }`}
            >
              <Wallet className="w-4 h-4" />
              {walletState.connected ? (
                <>
                  <span className="font-mono text-white">{walletState.address}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                </>
              ) : (
                'Connect Wallet'
              )}
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => { sounds.playClick(); setMobileMenuOpen(!mobileMenuOpen); }}
              className="p-2 rounded-xl text-white/80 hover:text-white bg-white/5 hover:bg-white/10 transition"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-4 pb-3 border-t border-white/10 space-y-3">
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => { sounds.playClick(); setMobileMenuOpen(false); }}
                  className="px-3 py-2 rounded-lg text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 transition"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={() => { sounds.playClick(); onOpenWallet(); setMobileMenuOpen(false); }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-purple-600 to-pink-600"
              >
                <Wallet className="w-4 h-4" />
                {walletState.connected ? walletState.address : 'Connect Wallet'}
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
