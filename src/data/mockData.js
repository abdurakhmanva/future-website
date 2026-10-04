export const PARTNERS = [
  { name: 'Ethereum', symbol: 'ETH', icon: '💎' },
  { name: 'Solana', symbol: 'SOL', icon: '⚡' },
  { name: 'Polygon', symbol: 'MATIC', icon: '🟣' },
  { name: 'MetaMask', symbol: 'WALLET', icon: '🦊' },
  { name: 'Coinbase', symbol: 'BASE', icon: '🔵' },
  { name: 'OpenSea', symbol: 'MARKET', icon: '🌊' },
  { name: 'Binance', symbol: 'BNB', icon: '🟡' },
];

export const NFT_COLLECTIONS = [
  {
    id: 'samurai-042',
    name: 'Cyber Samurai #042',
    collection: 'Neo Tokyo Clan',
    category: 'Avatars',
    image: '/assets/samurai.jpg',
    currentBid: 3.45,
    usdPrice: 10860,
    endsIn: '05h 24m 12s',
    creator: 'Alex Rivers',
    creatorAvatar: '/assets/creator_alex.jpg',
    verified: true,
    likes: 342,
    rarity: 'Mythic (99.4%)',
    edition: '1 of 1',
    description: 'Forged in the silicon alleyways of Neo-Tokyo, the Cyber Samurai combines ancient honor with quantum katana mechanics.',
  },
  {
    id: 'valkyrie-118',
    name: 'Neon Valkyrie #118',
    collection: 'Synthwave Pantheon',
    category: 'Avatars',
    image: '/assets/valkyrie.jpg',
    currentBid: 4.20,
    usdPrice: 13230,
    endsIn: '08h 12m 45s',
    creator: 'Elena Rostova',
    creatorAvatar: '/assets/creator_elena.jpg',
    verified: true,
    likes: 512,
    rarity: 'Legendary (98.9%)',
    edition: '1 of 1',
    description: 'An ethereal bio-synthetic guardian traversing digital realms with optic neural implants and photonic silver armor.',
  },
  {
    id: 'astronaut-007',
    name: 'Solaris Android #007',
    collection: 'Aether Deep Space',
    category: '3D Art',
    image: '/assets/astronaut.jpg',
    currentBid: 2.80,
    usdPrice: 8820,
    endsIn: '11h 04m 30s',
    creator: 'Marcus Vance',
    creatorAvatar: '/assets/creator_alex.jpg',
    verified: true,
    likes: 289,
    rarity: 'Rare (96.5%)',
    edition: '1 of 1',
    description: 'Deep-space exploratory unit Solaris-07 equipped with quantum emerald visor for high-radiation spatial reconnaissance.',
  },
  {
    id: 'mecha-501',
    name: 'Mecha Titan #501',
    collection: 'Titan Heavy Industries',
    category: 'Avatars',
    image: '/assets/mecha.jpg',
    currentBid: 5.10,
    usdPrice: 16065,
    endsIn: '03h 48m 10s',
    creator: 'Kaito Tanaka',
    creatorAvatar: '/assets/creator_elena.jpg',
    verified: true,
    likes: 674,
    rarity: 'Mythic (99.8%)',
    edition: '1 of 1',
    description: 'Heavy tactical carbon-titanium frame engineered for high-altitude defense across cyberpunk megacities.',
  },
  {
    id: 'assassin-204',
    name: 'Shadow Operative #204',
    collection: 'Ghost Syndicate',
    category: 'Cyberpunk',
    image: '/assets/assassin.jpg',
    currentBid: 3.90,
    usdPrice: 12285,
    endsIn: '09h 33m 50s',
    creator: 'Alex Rivers',
    creatorAvatar: '/assets/creator_alex.jpg',
    verified: true,
    likes: 420,
    rarity: 'Epic (97.7%)',
    edition: '1 of 1',
    description: 'Covert tactical infiltrator equipped with stealth thermal cloak and synchronized electromagnetic dampeners.',
  },
  {
    id: 'wings-001',
    name: 'Odyssey Wings Capsule #001',
    collection: 'Cyber Relics',
    category: 'Rare Artifacts',
    image: '/assets/wings_capsule.jpg',
    currentBid: 8.50,
    usdPrice: 26775,
    endsIn: '06h 15m 00s',
    creator: 'Elena Rostova',
    creatorAvatar: '/assets/creator_elena.jpg',
    verified: true,
    likes: 890,
    rarity: 'Genesis (100%)',
    edition: '1 of 1',
    description: 'A pressurized holographic containment cell preserving the mythical cybernetic photonic wings of the First Ascendant.',
  }
];

export const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Set Up Your Wallet',
    description: 'Connect MetaMask, Coinbase, or Phantom with zero latency. Secure cryptographic signing keeps your keys 100% in your custody.',
    icon: 'Wallet',
    gradient: 'from-purple-500 to-indigo-600',
  },
  {
    step: '02',
    title: 'Create Your Collection',
    description: 'Deploy self-custodial smart contracts with automated royalties, split payments, and customizable metadata in one click.',
    icon: 'FolderPlus',
    gradient: 'from-pink-500 to-rose-600',
  },
  {
    step: '03',
    title: 'Add Your Rare NFTs',
    description: 'Upload high-resolution 3D models (GLTF/OBJ), generative art, or 4K video. We store immutable decentralized proofs on IPFS & Arweave.',
    icon: 'Sparkles',
    gradient: 'from-cyan-400 to-blue-600',
  },
  {
    step: '04',
    title: 'List Them For Sale',
    description: 'Choose between English auctions, instant fixed buys, or declining Dutch auctions with cross-chain liquidity and zero gas listings.',
    icon: 'Tag',
    gradient: 'from-violet-500 to-fuchsia-600',
  }
];

export const ROADMAP_PHASES = [
  {
    phase: 'Phase 01',
    title: 'Genesis Architecture',
    status: 'Completed',
    date: 'Q1 2026',
    items: [
      'ERC-721A optimized smart contract deployment',
      'High-throughput indexing engine & WebSocket live feed',
      'Genesis Drop: Cyber Relics 1/1 collection',
      'Audit by OpenZeppelin with 100% security score'
    ]
  },
  {
    phase: 'Phase 02',
    title: 'Metaverse Avatar Rigging',
    status: 'In Progress',
    date: 'Q2 2026',
    items: [
      'Unreal Engine 5 & Unity avatar integration standard',
      'Zero-gas Layer 2 rollup bridging on Polygon & Base',
      'Multi-currency bidding in USDC, SOL, and ETH',
      'VIP Collector Private Discord Lounge & White-glove concierge'
    ]
  },
  {
    phase: 'Phase 03',
    title: 'DAO & Staking Liquidity',
    status: 'Upcoming',
    date: 'Q3 2026',
    items: [
      '$FUTURE governance token airdrop to genesis collectors',
      'NFT fractional staking pool with native ETH yield',
      'Community curation grants & creator accelerator program',
      'Decentralized physical galleries in Tokyo & London'
    ]
  },
  {
    phase: 'Phase 04',
    title: 'Spatial Computing & AR',
    status: 'Future',
    date: 'Q4 2026',
    items: [
      'Native Apple Vision Pro & Meta Quest spatial exhibition app',
      'Holographic AI avatars with interactive neural voice',
      'Cross-chain interoperability with Cosmos & Sui',
      'Autonomous AI agent secondary market arbitrage'
    ]
  }
];

export const TOP_CREATORS = [
  {
    id: 1,
    name: 'Alex Rivers',
    handle: '@alexrivers_art',
    avatar: '/assets/creator_alex.jpg',
    volume: '540.8 ETH',
    change: '+32.4%',
    items: 48,
    badge: 'Genesis VIP',
  },
  {
    id: 2,
    name: 'Elena Rostova',
    handle: '@elena_metaverse',
    avatar: '/assets/creator_elena.jpg',
    volume: '482.1 ETH',
    change: '+28.1%',
    items: 36,
    badge: 'Top Seller',
  },
  {
    id: 3,
    name: 'Kaito Tanaka',
    handle: '@kaito_cyber',
    avatar: '/assets/samurai.jpg',
    volume: '390.5 ETH',
    change: '+19.6%',
    items: 52,
    badge: 'Trending',
  },
  {
    id: 4,
    name: 'Valkyrie Core',
    handle: '@valkyrie_ai',
    avatar: '/assets/valkyrie.jpg',
    volume: '315.0 ETH',
    change: '+15.2%',
    items: 29,
    badge: 'Rising Star',
  }
];

export const FAQS = [
  {
    q: 'How do I connect my Web3 wallet to FUTURE?',
    a: 'Click the "Connect Wallet" button in the top navigation. Select your preferred wallet provider (MetaMask, Coinbase Wallet, Phantom, or WalletConnect). Authorize the read-only connection in your wallet extension. No funds are ever transferred without your cryptographic signature.'
  },
  {
    q: 'What blockchains and tokens are supported?',
    a: 'FUTURE natively supports Ethereum Mainnet (ETH, WETH), Base, and Polygon (MATIC) for near-zero gas fee transactions. You can place bids using ETH, WETH, or native stablecoins like USDC.'
  },
  {
    q: 'How does the creator royalty protocol work?',
    a: 'We strictly enforce on-chain EIP-2981 royalty standards. Creators receive their customized royalties (up to 10%) automatically and instantaneously on every secondary sale, directly to their payout contract.'
  },
  {
    q: 'Can I export my 3D avatars into games and metaverse platforms?',
    a: 'Yes! Every avatar NFT in the Future Collection includes downloadable rigged 3D models (.VRM, .FBX, and .GLTF) compatible with Unreal Engine, Unity, VRChat, and Apple Vision Pro.'
  }
];
