'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaTrophy } from 'react-icons/fa';
import { FiTrendingUp } from 'react-icons/fi';

// --- Type Definitions and Constants ---
// Use `as const` to let TypeScript know these are specific, readonly strings
const chessTypes = ['pawn', 'knight', 'queen', 'rook', 'bishop', 'king'] as const;

// Create a union type of all possible chess piece names
type ChessPieceType = typeof chessTypes[number];

// Create a typed map for chess piece characters for type safety and performance
const chessPieceMap: Record<ChessPieceType, string> = {
  king: '♔',
  queen: '♕',
  rook: '♖',
  bishop: '♗',
  knight: '♘',
  pawn: '♙',
};

// Define a reusable type for the generated chess element objects
interface ChessElement {
  size: string;
  top: string;
  left: string;
  delay: number;
  duration: number;
  type: ChessPieceType;
  color: string;
}

// --- Helper Functions ---
function seededRandom(seed: number): number {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

function generateChessElements(): Array<ChessElement> {
  return Array.from({ length: 14 }).map((_, i) => {
    const seed = i * 12345;
    const size = Math.floor(seededRandom(seed) * 60) + 40;
    const top = seededRandom(seed + 1) * 100;
    const left = seededRandom(seed + 2) * 100;
    const delay = seededRandom(seed + 3) * 3;
    const duration = seededRandom(seed + 4) * 5 + 5;
    
    return {
      size: `${size}px`,
      top: `${top}%`,
      left: `${left}%`,
      delay,
      duration,
      type: chessTypes[i % chessTypes.length],
      color: 'text-yellow-300 drop-shadow-[0_0_8px_rgba(212,175,55,0.5)]',
    };
  });
}

// --- Component Data ---
const stories = [
  {
    title: 'Anita Mathur',
    icon: <FiTrendingUp className="text-[#f3c47a] text-3xl drop-shadow-[0_0_4px_rgba(243,196,122,0.8)]" />,
    desc: `“The structured learning approach is incredible! My son Lakshay's (Age 8) skills improved dramatically, gaining over 350 rating points.”`,
  },
  {
    title: 'Pradeep Kumar',
    icon: <FaTrophy className="text-[#f3c47a] text-3xl drop-shadow-[0_0_4px_rgba(243,196,122,0.8)]" />,
    desc: `“Excellent coaching! My daughter Muskan (Age 14) won her first tournament and became State Champion after just 6 months of training.”`,
  },
  {
    title: 'Seema Patel',
    icon: <FiTrendingUp className="text-[#f3c47a] text-3xl drop-shadow-[0_0_4px_rgba(243,196,122,0.8)]" />,
    desc: `“The online classes are so engaging. My child Ram (Age 11) looks forward to every session and has gained 280 rating points.”`,
  },
];

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

// --- Main Component ---
export default function SuccessStories() {
  const [chessElements, setChessElements] = useState<Array<ChessElement>>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const elements = generateChessElements();
    setChessElements(elements);
  }, []);

  return (
    <section className="relative py-14 px-6 sm:px-10 bg-[#080d14] text-yellow-100 overflow-hidden min-h-auto">

      {/* Glowing Light */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-yellow-300/10 blur-3xl rounded-full z-0" />

      {/* Floating Chess Elements */}
      {isClient && chessElements.map((element, index) => (
        <motion.div
          key={index}
          initial={{ y: 0, rotate: 0 }}
          animate={{ y: [-100, -200, -100], rotate: [0, 15, 0] }}
          transition={{
            duration: element.duration,
            delay: element.delay,
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'easeInOut',
          }}
          style={{
            width: element.size,
            height: element.size,
            top: element.top,
            left: element.left,
          }}
          className={`absolute flex flex-col items-center justify-center z-0 opacity-50 ${element.color}`}
        >
          {/* --- FIX APPLIED HERE --- */}
          {/* Using the typed map to get the correct chess piece character */}
          <div className="text-4xl">
            {chessPieceMap[element.type]}
          </div>
          <div className="text-xs font-semibold text-yellow-200">{element.type.charAt(0).toUpperCase() + element.type.slice(1)}</div>
        </motion.div>
      ))}

      {/* Grid Lines */}
      <div className="absolute inset-0 opacity-10 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[length:80px_80px] bg-[linear-gradient(to_right,#1f1f35_1px,transparent_1px),linear-gradient(to_bottom,#1f1f35_1px,transparent_1px)]" />
      </div>

      {/* Title */}
      <motion.h2
        className="text-center text-4xl sm:text-5xl font-extrabold mb-16 p-2 text-transparent bg-clip-text bg-gradient-to-r from-[#bd853c] to-[#e0b86d] drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] z-10 relative"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        custom={0}
      >
        Success Stories
      </motion.h2>

      {/* Story Cards Grid */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto z-10 relative">
        {stories.map((story, index) => (
          <motion.div
            key={index}
            className="bg-[#121820] border border-[#d4af37]/30 rounded-xl p-6 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-300 hover:scale-105"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={index + 1}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-[#d4af37]/10 rounded-full">{story.icon}</div>
              <h3 className="text-xl font-bold text-[#f2e79b]">{story.title}</h3>
            </div>
            <p className="text-[#ebcc88] text-md leading-relaxed italic">{story.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}