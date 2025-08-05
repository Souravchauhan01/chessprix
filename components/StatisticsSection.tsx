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

const statistics = [
  {
    number: '500+',
    label: 'Students Taught',
    icon: '👥',
    description: 'Young minds transformed through chess excellence'
  },
  {
    number: '5+',
    label: 'Years in Operation',
    icon: '⏰',
    description: 'Proven track record of chess education excellence'
  },
  {
    number: '15+',
    label: 'Countries Served',
    icon: '🌍',
    description: 'Global reach with international chess community'
  },
  {
    number: '10,000+',
    label: 'Hours of Coaching',
    icon: '🎯',
    description: 'Dedicated coaching hours delivered to students'
  }
];

export default function StatisticsSection() {
  const [chessElements, setChessElements] = useState<ChessElement[]>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const elements = generateChessElements(12).map((el, i) => ({
      ...el,
      type: chessTypes[i % chessTypes.length] as ChessType,
    }));
    setChessElements(elements);
  }, []);

  return (
    <section className="relative py-15 px-6 sm:px-10 bg-[#080d14] text-yellow-100 overflow-hidden min-h-auto">
      
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
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#bd853c] to-[#e0b86d] drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] mb-6">
            Our Journey in Numbers
          </h2>
          <p className="text-xl sm:text-2xl text-[#f3c47a] max-w-4xl mx-auto leading-relaxed">
            Building Trust and Authority Through Proven Results
          </p>
        </motion.div>

        {/* Statistics Grid */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={1}
        >
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {statistics.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-[#121820] border border-[#d4af37]/30 rounded-xl p-6 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-300 hover:scale-105 text-center"
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={index + 2}
              >
                <div className="text-5xl mb-4">{stat.icon}</div>
                <div className="text-3xl sm:text-4xl font-bold text-[#D4AF37] mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-[#f2e79b] mb-3">
                  {stat.label}
                </div>
                <div className="text-sm text-[#ebcc88] leading-relaxed">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust Statement */}
        <motion.div
          className="mt-16 text-center"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={6}
        >
          <div className="bg-[#121820]/50 border border-[#d4af37]/30 rounded-2xl p-8 sm:p-12 backdrop-blur-sm">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#f2e79b] mb-6">
              Trusted by Parents Worldwide
            </h3>
            <p className="text-lg sm:text-xl text-[#ebcc88] leading-relaxed max-w-4xl mx-auto">
              Our numbers tell a story of consistent excellence, global reach, and unwavering commitment to chess education. 
              Every statistic represents a young mind empowered, a family supported, and a future champion nurtured.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
} 