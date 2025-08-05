'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
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

const coaches = [
  {
    name: 'Coach Sarah',
    rating: 'FIDE 2100',
    specialty: 'Opening Theory',
    experience: '8 years',
    image: '/about1.jpg',
    description: 'Specializes in teaching young players the fundamentals of chess openings and strategic thinking.',
  },
  {
    name: 'Coach Michael',
    rating: 'FIDE 2200',
    specialty: 'Endgame Mastery',
    experience: '12 years',
    image: '/about1.jpg',
    description: 'Expert in endgame techniques and tournament preparation for competitive players.',
  },
  {
    name: 'Coach Priya',
    rating: 'FIDE 2000',
    specialty: 'Tactical Training',
    experience: '6 years',
    image: '/about1.jpg',
    description: 'Focuses on tactical puzzles and pattern recognition for rapid improvement.',
  },
  {
    name: 'Coach David',
    rating: 'FIDE 2300',
    specialty: 'Advanced Strategy',
    experience: '15 years',
    image: '/about1.jpg',
    description: 'Teaches advanced strategic concepts and helps students reach master level.',
  },
];

export default function Coaches() {
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
    <section className="relative py-16 px-6 sm:px-10 bg-[#080d14] text-yellow-100 overflow-hidden min-h-auto sm:mt-17 mt-10">
      {/* Glowing Light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-yellow-300/10 blur-3xl rounded-full z-0" />

      {/* Grid Lines */}
      <div className="absolute inset-0 opacity-10 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[length:80px_80px] bg-[linear-gradient(to_right,#1f1f35_1px,transparent_1px),linear-gradient(to_bottom,#1f1f35_1px,transparent_1px)]" />
      </div>

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

      {/* Section Heading */}
      <motion.h2
        className="text-4xl sm:text-5xl p-2 font-extrabold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#bd853c] to-[#e0b86d] drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] z-10 relative"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0}
      >
        Meet the ChessPrix Coaches
      </motion.h2>

      <motion.p
        className="text-[#ebcc88] text-md sm:text-base leading-relaxed mb-10 text-center max-w-3xl mx-auto z-10 relative"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={1}
      >
        Our coaches are the heart of ChessPrix. Every instructor is FIDE-rated and excels at teaching children. They bring both championship experience and a love for working with kids.
      </motion.p>

      {/* Coach Cards */}
      <div className="grid sm:grid-cols-2 gap-8 max-w-7xl mx-auto z-10 relative">
        {coaches.map((coach, index) => (
          <motion.div
            key={index}
            className="bg-[#121820] border border-[#d4af37]/30 rounded-xl p-6 shadow-md hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-300 hover:scale-105 flex flex-col sm:flex-row gap-5 sm:items-start items-center"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={index + 2}
          >
            <div className="flex-shrink-0 w-20 h-20 rounded-full overflow-hidden border-2 border-yellow-400">
              <Image src={coach.image} alt={coach.name} width={100} height={100} className="object-cover w-full h-full" />
            </div>
            <div>
              <h4 className="text-2xl font-bold text-[#f2e79b] text-center sm:text-left">{coach.name}</h4>

              <div className="flex flex-wrap gap-2 my-2 justify-center sm:justify-start">
                <span className="bg-yellow-900 text-yellow-200 px-2 py-1 rounded text-xs font-semibold">{coach.rating}</span>
                <span className="bg-yellow-800 text-yellow-100 px-2 py-1 rounded text-xs font-semibold">{coach.specialty}</span>
                <span className="bg-yellow-700 text-yellow-50 px-2 py-1 rounded text-xs font-semibold">{coach.experience}</span>
              </div>

              <p className="text-[#ebcc88] text-md leading-relaxed text-center sm:text-left">{coach.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
