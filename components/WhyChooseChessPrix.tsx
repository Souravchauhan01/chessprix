'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaChessPawn, FaChessKnight, FaChessQueen, FaChessRook, FaChessBishop, FaChessKing } from 'react-icons/fa';

type ChessType = 'pawn' | 'knight' | 'queen' | 'rook' | 'bishop' | 'king';

const chessTypes: ChessType[] = ['pawn', 'knight', 'queen', 'rook', 'bishop', 'king'];

const generatePieces = (count: number) => {
  return Array.from({ length: count }).map((_, i) => ({
    id: i,
    type: chessTypes[i % chessTypes.length],
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 3,
    duration: Math.random() * 5 + 5,
    size: `${Math.floor(Math.random() * 60) + 40}px`,
  }));
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

const cards = [
  {
    title: 'Proven Track Record',
    desc: 'Our students consistently win medals and improve their ratings, reflecting our effective teaching methods.',
  },
  {
    title: 'Innovative Online Platform',
    desc: 'We use state-of-the-art tools like chess.com, lichess, and chessbase to ensure the best interactive learning.',
  },
  {
    title: 'Flexible Learning',
    desc: 'Choose from one-on-one coaching or small group classes, tailored to your family’s needs.',
  },
  {
    title: 'Child-Centric Philosophy',
    desc: 'We celebrate every success, boosting confidence and helping kids grow through every milestone.',
  },
  {
    title: 'Passion & Excellence',
    desc: 'From our motto “Passion Refined Into eXellence,” we inspire mastery and deep dedication in each child.',
  },
  {
    title: 'Global Community',
    desc: 'Join a vibrant network of young chess enthusiasts, sharing strategies and celebrating victories together.',
  },
];

const WhyChooseChessPrix = () => {
  const [pieces, setPieces] = useState(() => generatePieces(12));

  useEffect(() => {
    setPieces(generatePieces(12));
  }, []);

  return (
    <section className="relative py-6 px-6 sm:px-10 bg-[#080d14] text-yellow-100 overflow-hidden">
      {/* Glowing Background */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-yellow-300/10 blur-3xl rounded-full z-0" />

      {/* Floating Chess Elements */}
      {pieces.map((piece, i) => (
        <motion.div
          key={i}
          initial={{ y: 0, rotate: 0 }}
          animate={{ y: [-100, -200, -100], rotate: [0, 15, 0] }}
          transition={{
            duration: piece.duration,
            delay: piece.delay,
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'easeInOut',
          }}
          style={{
            width: piece.size,
            height: piece.size,
            top: piece.top,
            left: piece.left,
          }}
          className="absolute flex flex-col items-center justify-center text-yellow-300 z-0 opacity-50 drop-shadow-[0_0_8px_rgba(212,175,55,0.5)]"
        >
          <div className="text-4xl">
            {{
              king: '♔',
              queen: '♕',
              rook: '♖',
              bishop: '♗',
              knight: '♘',
              pawn: '♙',
            }[piece.type]}
          </div>
          <div className="text-xs font-semibold text-yellow-200">
            {piece.type.charAt(0).toUpperCase() + piece.type.slice(1)}
          </div>
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
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="bg-[#121820] border border-[#d4af37]/30 rounded-xl p-6 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-300 hover:scale-105"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={index + 1}
          >
            <h3 className="text-2xl font-bold text-[#f2e79b] mb-2">{card.title}</h3>
            <p className="text-[#ebcc88] text-md leading-relaxed">{card.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseChessPrix;
