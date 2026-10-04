import React, { useState } from 'react';
import Starfield from './components/Starfield';
import Navbar from './components/Navbar';
import HeroClassic from './components/HeroClassic';
import HeroCentered from './components/HeroCentered';
import Partners from './components/Partners';
import FeaturedDrop from './components/FeaturedDrop';
import HowItWorks from './components/HowItWorks';
import WhyChooseUs from './components/WhyChooseUs';
import HotCollections from './components/HotCollections';
import Roadmap from './components/Roadmap';
import TopCreators from './components/TopCreators';
import Testimonial from './components/Testimonial';
import FAQ from './components/FAQ';
import CtaBanner from './components/CtaBanner';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import WalletModal from './components/WalletModal';
import BidModal from './components/BidModal';

export default function App() {
  const [activeLayout, setActiveLayout] = useState('classic'); // 'classic' or 'centered'
  const [isWalletOpen, setIsWalletOpen] = useState(false);
  const [walletState, setWalletState] = useState({
    connected: false,
    address: '',
    fullAddress: '',
    balance: '0 ETH',
    usdBalance: '$0.00',
    walletName: '',
    walletIcon: '',
  });

  const [bidModalOpen, setBidModalOpen] = useState(false);
  const [selectedNft, setSelectedNft] = useState(null);

  const handleOpenBid = (nft) => {
    setSelectedNft(nft);
    setBidModalOpen(true);
  };

  const handlePlaceBidSuccess = (nftId, amount) => {
    // Optionally update local bid state if needed
  };

  return (
    <div className="min-h-screen bg-[#080614] text-white relative selection:bg-purple-500 selection:text-white">
      {/* Background Starfield Canvas */}
      <Starfield />

      {/* Navigation */}
      <Navbar
        onOpenWallet={() => setIsWalletOpen(true)}
        walletState={walletState}
        activeLayout={activeLayout}
        setActiveLayout={setActiveLayout}
      />

      <main className="relative z-10">
        {/* Dynamic Hero Section based on selected Figma Layout Variant */}
        {activeLayout === 'classic' ? (
          <HeroClassic
            onOpenBid={handleOpenBid}
            onOpenWallet={() => setIsWalletOpen(true)}
          />
        ) : (
          <HeroCentered
            onOpenBid={handleOpenBid}
            onOpenWallet={() => setIsWalletOpen(true)}
          />
        )}

        {/* Web3 Partners Marquee */}
        <Partners />

        {/* Featured Drop Showcase with image switcher */}
        <FeaturedDrop onOpenBid={handleOpenBid} />

        {/* How It Works 4-Step Glowing Orbs */}
        <HowItWorks />

        {/* Why Choose Us & Translucent Crystal Skull Artifact */}
        <WhyChooseUs />

        {/* Hot Collections 5-Avatar Carousel Slider */}
        <HotCollections onOpenBid={handleOpenBid} />

        {/* Project Roadmap Timeline */}
        <Roadmap />

        {/* Top Creators Leaderboard */}
        <TopCreators />

        {/* Testimonial Quote */}
        <Testimonial />

        {/* Frequently Asked Questions Accordion */}
        <FAQ />

        {/* Call to Action Banner */}
        <CtaBanner onOpenWallet={() => setIsWalletOpen(true)} />

        {/* Newsletter Dispatch */}
        <Newsletter />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <WalletModal
        isOpen={isWalletOpen}
        onClose={() => setIsWalletOpen(false)}
        walletState={walletState}
        setWalletState={setWalletState}
      />

      <BidModal
        isOpen={bidModalOpen}
        onClose={() => setBidModalOpen(false)}
        nft={selectedNft}
        onPlaceBidSuccess={handlePlaceBidSuccess}
      />
    </div>
  );
}
