'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { generateChessElements } from './utils/chessElements';

// === Types ===
type ChessType = 'pawn' | 'knight' | 'queen' | 'rook' | 'bishop' | 'king';

interface ChessElement {
  size: string;
  top: string;
  left: string;
  delay: number;
  duration: number;
  type: ChessType;
}

// === Constants ===
const chessTypes: ChessType[] = ['pawn', 'knight', 'queen', 'rook', 'bishop', 'king'];

const symbolMap: Record<ChessType, string> = {
  king: '♔',
  queen: '♕',
  rook: '♖',
  bishop: '♗',
  knight: '♘',
  pawn: '♙',
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: [0.42, 0, 0.58, 1] as const,
    },
  }),
};

const communityFeatures = [
  {
    icon: '🤝',
    title: 'Global Community',
    description: 'Connect with chess enthusiasts from around the world, share strategies, and celebrate victories together.',
    features: ['International tournaments', 'Peer learning groups', 'Cultural exchange']
  },
  {
    icon: '📱',
    title: '24/7 Support',
    description: 'Round-the-clock assistance for students and parents with dedicated support channels.',
    features: ['Live chat support', 'Email assistance', 'Video consultations']
  },
  {
    icon: '🎮',
    title: 'Interactive Learning',
    description: 'Engage in real-time games, puzzles, and challenges with fellow students.',
    features: ['Live game rooms', 'Puzzle challenges', 'Strategy discussions']
  },
  {
    icon: '🏆',
    title: 'Achievement System',
    description: 'Track progress, earn badges, and celebrate milestones with our gamified learning approach.',
    features: ['Progress tracking', 'Achievement badges', 'Milestone celebrations']
  },
  {
    icon: '👨‍👩‍👧‍👦',
    title: 'Family Involvement',
    description: 'Keep parents informed and involved in their child\'s chess journey with regular updates.',
    features: ['Progress reports', 'Parent workshops', 'Family tournaments']
  },
  {
  "icon": "🏆",
  "title": "Monthly Chess Tournament",
  "description": "Put your skills to the test! Compete against fellow players in our exciting monthly tournament to climb the leaderboard and claim victory.",
  "features": [
    "Structured tournament format (e.g., Swiss System)",
    "Competitive matches against various skill levels",
    "Prizes and recognition for top performers"
  ]
}
];

export default function CommunitySection() {
  const [chessElements, setChessElements] = useState<ChessElement[]>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const elements = generateChessElements(14).map((el, i) => ({
      ...el,
      type: chessTypes[i % chessTypes.length] as ChessType,
    }));
    setChessElements(elements);
  }, []);

  return (
    <section className="relative py-10 px-6 sm:px-10 bg-[#080d14] text-yellow-100 overflow-hidden min-h-auto">
      
      {/* Glowing Light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-yellow-300/10 blur-3xl rounded-full z-0" />

      {/* Floating Chess Elements */}
      {isClient && chessElements.map((el, index) => (
        <motion.div
          key={index}
          initial={{ y: 0, rotate: 0 }}
          animate={{ y: [-100, -200, -100], rotate: [0, 15, 0] }}
          transition={{
            duration: el.duration,
            delay: el.delay,
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'easeInOut',
          }}
          style={{
            width: el.size,
            height: el.size,
            top: el.top,
            left: el.left,
          }}
          className="absolute flex flex-col items-center justify-center text-yellow-300 z-0 opacity-50 drop-shadow-[0_0_8px_rgba(212,175,55,0.8)]"
        >
          <div className="text-4xl">{symbolMap[el.type]}</div>
          <div className="text-xs font-semibold text-yellow-200 capitalize">{el.type}</div>
        </motion.div>
      ))}

      {/* Grid Lines */}
      <div className="absolute inset-0 opacity-10 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[length:80px_80px] bg-[linear-gradient(to_right,#1f1f35_1px,transparent_1px),linear-gradient(to_bottom,#1f1f35_1px,transparent_1px)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Main Heading */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold p-2 text-transparent bg-clip-text bg-gradient-to-r from-[#bd853c] to-[#e0b86d] drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] mb-6">
            Community & Support
          </h2>
          <p className="text-xl sm:text-2xl text-[#f3c47a] max-w-4xl mx-auto leading-relaxed">
            Engaging Your Audience with a Thriving Chess Community
          </p>
        </motion.div>

        {/* Community Features Grid */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={1}
        >
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {communityFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-[#121820] border border-[#d4af37]/30 rounded-xl p-6 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-300 hover:scale-105"
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={index + 2}
              >
                <div className="text-4xl mb-4 text-center">{feature.icon}</div>
                <h4 className="text-xl font-bold text-[#f2e79b] mb-3 text-center">
                  {feature.title}
                </h4>
                <p className="text-[#ebcc88] text-md leading-relaxed text-center mb-4">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.features.map((item, idx) => (
                    <li key={idx} className="text-sm text-[#D4AF37] flex items-center">
                      <span className="mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Community Call to Action */}
        <motion.div
          className="mt-16 text-center"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={8}
        >
          <div className="bg-gradient-to-r from-[#472b12] to-[#8B4513] border-2 border-[#D4AF37] rounded-xl p-8 shadow-[0_4px_12px_rgba(212,175,55,0.4)]">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Join Our Thriving Community
            </h3>
            <p className="text-[#f3c47a] text-lg mb-6 max-w-2xl mx-auto">
              Connect with fellow chess enthusiasts, get support when you need it, and be part of a global family 
              that celebrates every victory and supports every challenge.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href='https://wa.me/919631218251' target='_blank' >
              <button className="bg-[#D4AF37] text-[#472b12] font-bold px-8 py-3 rounded-lg hover:bg-[#f0d998] transition-all duration-300 hover:scale-105 shadow-lg">
                Join Community
              </button>
              </Link>
              {/* <button className="border-2 border-[#D4AF37] text-[#D4AF37] font-bold px-8 py-3 rounded-lg hover:bg-[#D4AF37] hover:text-[#472b12] transition-all duration-300 hover:scale-105">
                Learn More
              </button> */}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
} 