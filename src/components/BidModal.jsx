import React, { useState } from 'react';
import { X, ArrowRight, Zap, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { sounds } from '../utils/audio';

export default function BidModal({ isOpen, onClose, nft, onPlaceBidSuccess }) {
  if (!isOpen || !nft) return null;

  const minBid = (nft.currentBid + 0.1).toFixed(2);
  const [bidAmount, setBidAmount] = useState(minBid);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const ethToUsd = 3150;
  const numBid = parseFloat(bidAmount) || 0;
  const gasFeeEth = 0.0042;
  const totalEth = (numBid + gasFeeEth).toFixed(4);

  const handleSubmit = (e) => {
    e.preventDefault();
    sounds.playBid();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      sounds.playSuccess();
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });

      if (onPlaceBidSuccess) {
        onPlaceBidSuccess(nft.id, numBid);
      }
    }, 1200);
  };

  const handleClose = () => {
    sounds.playClick();
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div 
        className="relative w-full max-w-lg rounded-3xl glass-panel p-6 sm:p-8 shadow-2xl border border-purple-500/30 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute -top-20 -right-20 w-44 h-44 bg-purple-600/30 rounded-full blur-3xl pointer-events-none" />

        {/* Modal Close button */}
        <button
          onClick={handleClose}
          className="absolute top-6 right-6 p-2 text-white/60 hover:text-white rounded-full hover:bg-white/10 transition z-10"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <h3 className="text-2xl font-bold font-display text-white">Bid Placed Successfully!</h3>
            <p className="text-sm text-purple-200/70 max-w-xs mx-auto">
              Your bid of <strong className="text-white">{numBid} ETH</strong> for <strong className="text-white">{nft.name}</strong> has been submitted to the mempool.
            </p>
            <div className="p-3 rounded-xl bg-white/5 border border-white/10 font-mono text-xs text-white/50 max-w-xs mx-auto">
              Tx: 0x9f32b8...a71e2c
            </div>
            <button
              onClick={handleClose}
              className="mt-6 w-full py-3 px-6 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 transition cursor-pointer"
            >
              Continue Exploring
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-purple-400 bg-purple-500/10 px-2.5 py-1 rounded-full border border-purple-500/20">
                Live Auction
              </span>
              <h3 className="text-2xl font-bold font-display text-white mt-2">Place Your Bid</h3>
              <p className="text-xs text-white/50">You must bid at least {minBid} ETH</p>
            </div>

            {/* NFT Preview summary */}
            <div className="flex items-center gap-4 p-3.5 rounded-2xl bg-white/5 border border-white/10">
              <img
                src={nft.image}
                alt={nft.name}
                className="w-16 h-16 rounded-xl object-cover border border-purple-500/30 shadow-md"
              />
              <div className="flex-1 min-w-0">
                <span className="text-xs text-purple-300 font-medium block truncate">{nft.collection}</span>
                <h4 className="text-base font-bold text-white truncate">{nft.name}</h4>
                <div className="flex items-center gap-2 mt-0.5 text-xs text-white/60">
                  <span>Current:</span>
                  <strong className="text-purple-300">{nft.currentBid} ETH</strong>
                </div>
              </div>
            </div>

            {/* Input field */}
            <div>
              <label className="block text-xs font-semibold text-purple-200 uppercase tracking-wider mb-2">
                Your Bid (ETH)
              </label>
              <div className="relative">
                <input
                  type="number"
                  step="0.01"
                  min={minBid}
                  value={bidAmount}
                  onChange={(e) => setBidAmount(e.target.value)}
                  className="w-full px-4 py-3.5 pr-24 rounded-2xl bg-white/5 border border-purple-500/30 text-white font-display text-xl focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-500/30"
                  required
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-bold text-purple-300 bg-purple-500/20 px-3 py-1 rounded-xl">
                  ETH
                </span>
              </div>
              <div className="flex justify-between items-center text-xs text-white/50 mt-1.5 px-1">
                <span>≈ ${(numBid * ethToUsd).toLocaleString('en-US', { maximumFractionDigits: 2 })} USD</span>
                <span>Balance: 4.825 ETH</span>
              </div>
            </div>

            {/* Fee summary breakdown */}
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 space-y-2 text-xs">
              <div className="flex justify-between text-white/60">
                <span>Bid Amount</span>
                <span className="font-mono text-white">{numBid.toFixed(2)} ETH</span>
              </div>
              <div className="flex justify-between text-white/60">
                <span className="flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5 text-amber-400" />
                  Estimated Gas Fee
                </span>
                <span className="font-mono text-white">{gasFeeEth} ETH (~$13.20)</span>
              </div>
              <div className="pt-2 border-t border-white/10 flex justify-between text-sm font-bold text-white">
                <span>Total Payment</span>
                <span className="font-mono text-purple-300">{totalEth} ETH</span>
              </div>
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={isSubmitting || numBid < parseFloat(minBid)}
              className="w-full py-4 px-6 rounded-2xl font-bold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 hover:opacity-95 shadow-xl shadow-purple-600/30 transition transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 cursor-pointer flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Signing Cryptographic Bid...
                </>
              ) : (
                <>
                  Confirm & Place Bid
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
