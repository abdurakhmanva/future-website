import React, { useState } from 'react';
import { X, Check, Copy, ExternalLink, ShieldCheck, RefreshCw } from 'lucide-react';
import confetti from 'canvas-confetti';
import { sounds } from '../utils/audio';

const WALLET_OPTIONS = [
  { id: 'metamask', name: 'MetaMask', icon: '🦊', popular: true, desc: 'Connect with MetaMask browser extension' },
  { id: 'coinbase', name: 'Coinbase Wallet', icon: '🔵', popular: false, desc: 'Connect with Coinbase smart wallet' },
  { id: 'phantom', name: 'Phantom', icon: '👻', popular: true, desc: 'Multi-chain Solana & Ethereum wallet' },
  { id: 'walletconnect', name: 'WalletConnect', icon: '🔗', popular: false, desc: 'Scan with 300+ mobile wallets' },
];

export default function WalletModal({ isOpen, onClose, walletState, setWalletState }) {
  const [connectingId, setConnectingId] = useState(null);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleConnect = (wallet) => {
    sounds.playClick();
    setConnectingId(wallet.id);

    setTimeout(() => {
      setConnectingId(null);
      setWalletState({
        connected: true,
        address: '0x71C...49fA',
        fullAddress: '0x71C283B4e287B41367d3Fe717eA391fB670849fA',
        balance: '4.825 ETH',
        usdBalance: '$15,198.75',
        walletName: wallet.name,
        walletIcon: wallet.icon,
      });
      sounds.playSuccess();
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 }
      });
    }, 900);
  };

  const handleDisconnect = () => {
    sounds.playClick();
    setWalletState({ connected: false });
  };

  const copyAddress = () => {
    sounds.playClick();
    if (walletState.fullAddress) {
      navigator.clipboard.writeText(walletState.fullAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md transition-all">
      <div 
        className="relative w-full max-w-md rounded-3xl glass-panel p-6 sm:p-8 shadow-2xl border border-purple-500/30 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow ambient background inside modal */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-purple-600/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-pink-600/20 rounded-full blur-3xl pointer-events-none" />

        {/* Header */}
        <div className="flex items-center justify-between pb-5 border-b border-white/10">
          <div>
            <h3 className="text-xl font-bold font-display text-white">
              {walletState.connected ? 'Wallet Overview' : 'Connect Wallet'}
            </h3>
            <p className="text-xs text-purple-300/70 mt-0.5">
              {walletState.connected ? 'Securely connected to Ethereum Mainnet' : 'Choose your Web3 gateway to start collecting'}
            </p>
          </div>
          <button
            onClick={() => { sounds.playClick(); onClose(); }}
            className="p-2 text-white/60 hover:text-white rounded-full hover:bg-white/10 transition"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {walletState.connected ? (
          <div className="pt-6 space-y-6">
            <div className="p-4 rounded-2xl bg-white/5 border border-purple-500/20 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-3xl">{walletState.walletIcon}</span>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-white">{walletState.walletName}</span>
                    <span className="flex items-center gap-1 text-[10px] font-medium bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Active
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-white/50 mt-1 font-mono">
                    <span>{walletState.address}</span>
                    <button onClick={copyAddress} className="hover:text-purple-300 transition">
                      {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-900/30 to-indigo-950/40 border border-purple-500/30">
              <span className="text-xs text-purple-300 font-medium">Available Balance</span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-3xl font-extrabold font-display text-white">{walletState.balance}</span>
                <span className="text-sm text-purple-300/60 font-medium">({walletState.usdBalance})</span>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={handleDisconnect}
                className="w-full py-3 px-4 rounded-xl text-sm font-medium text-rose-300 bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/20 transition cursor-pointer"
              >
                Disconnect
              </button>
              <button
                onClick={() => { sounds.playClick(); onClose(); }}
                className="w-full py-3 px-4 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 shadow-lg shadow-purple-500/25 transition cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div className="pt-6 space-y-3">
            {WALLET_OPTIONS.map((wallet) => {
              const isConnecting = connectingId === wallet.id;
              return (
                <button
                  key={wallet.id}
                  disabled={connectingId !== null}
                  onClick={() => handleConnect(wallet)}
                  className="w-full p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500/50 flex items-center justify-between text-left transition group cursor-pointer"
                >
                  <div className="flex items-center gap-3.5">
                    <span className="text-2xl group-hover:scale-110 transition">{wallet.icon}</span>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-white group-hover:text-purple-300 transition">
                          {wallet.name}
                        </span>
                        {wallet.popular && (
                          <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                            Popular
                          </span>
                        )}
                      </div>
                      <span className="text-xs text-white/50">{wallet.desc}</span>
                    </div>
                  </div>

                  {isConnecting ? (
                    <RefreshCw className="w-4 h-4 text-purple-400 animate-spin" />
                  ) : (
                    <ExternalLink className="w-4 h-4 text-white/30 group-hover:text-purple-300 transition" />
                  )}
                </button>
              );
            })}

            <div className="flex items-center gap-2 pt-4 justify-center text-xs text-white/40">
              <ShieldCheck className="w-4 h-4 text-purple-400" />
              <span>Smart contracts verified & non-custodial by default</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
