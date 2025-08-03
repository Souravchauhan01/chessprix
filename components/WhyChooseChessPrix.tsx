'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
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

const reasons = [
  {
    title: 'Proven Track Record',
    description: 'Our students consistently achieve tournament success and rapid rating improvements.',
    icon: '🏆',
  },
  {
    title: 'Expert Coaches',
    description: 'All instructors are FIDE-rated with extensive experience teaching children.',
    icon: '👨‍🏫',
  },
  {
    title: 'Personalized Learning',
    description: 'Customized programs that adapt to each child\'s learning pace and style.',
    icon: '🎯',
  },
  {
    title: 'Interactive Technology',
    description: 'Modern online platform with digital boards, puzzles, and real-time feedback.',
    icon: '💻',
  },
  {
    title: 'Safe Environment',
    description: 'Secure, monitored online sessions ensuring your child\'s safety and privacy.',
    icon: '🛡️',
  },
  {
    title: 'Holistic Development',
    description: 'Beyond chess skills, we build confidence, focus, and strategic thinking.',
    icon: '🧠',
  },
];

export default function WhyChooseChessPrix() {
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
    <section className="relative py-16 px-6 sm:px-10 bg-[#080d14] text-yellow-100 overflow-hidden min-h-auto">

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

      {/* Title */}
      <motion.h2
        className="text-center text-4xl sm:text-5xl font-extrabold mb-10 p-2 text-transparent bg-clip-text bg-gradient-to-r from-[#bd853c] to-[#e0b86d] drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] z-10 relative mt-1"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        custom={0}
      >
        Why Choose ChessPrix
      </motion.h2>

      {/* Cards */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto z-10 relative">
        {reasons.map((reason, index) => (
          <motion.div
            key={index}
            className="bg-[#121820] border border-[#d4af37]/30 rounded-xl p-6 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-300 hover:scale-105"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={index + 1}
          >
            <div className="text-4xl mb-3">{reason.icon}</div>
            <h3 className="text-2xl font-bold text-[#f2e79b] mb-2">{reason.title}</h3>
            <p className="text-[#ebcc88] text-md leading-relaxed">{reason.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
