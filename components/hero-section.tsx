'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import img from "@/public/about1.jpg";
import { Typewriter } from 'react-simple-typewriter';

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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3,
      duration: 0.6,
       ease: [0.42, 0, 0.58, 1] as const,
    },
  },
};

export default function Hero() {
  const [chessElements, setChessElements] = useState<ChessElement[]>([]);

  useEffect(() => {
    const isMobile = window.innerWidth < 640;
    const count = isMobile ? 6 : 16;

    const elements: ChessElement[] = Array.from({ length: count }).map((_, i) => ({
      size: `${Math.floor(Math.random() * 60) + 40}px`,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 3,
      duration: Math.random() * 5 + 5,
      type: chessTypes[i % chessTypes.length],
    }));

    setChessElements(elements);
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-[#080d14] flex items-center justify-center px-4 sm:px-6 md:px-10 py-16 sm:py-24">
      {/* Glowing Light */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-yellow-300/10 blur-3xl rounded-full z-0" />

      {/* Floating Chess Elements */}
      {chessElements.map((element, index) => (
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
          className="absolute flex flex-col items-center justify-center text-yellow-300 z-0 opacity-50 drop-shadow-[0_0_8px_rgba(212,175,55,0.8)]"
        >
          <div className="text-4xl">{symbolMap[element.type]}</div>
          <div className="text-xs font-semibold text-yellow-200">
            {element.type.charAt(0).toUpperCase() + element.type.slice(1)}
          </div>
        </motion.div>
      ))}

      {/* Main Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl gap-12">
        {/* Left Content */}
        <motion.div className="text-center lg:text-left w-full max-w-2xl" initial="hidden" animate="visible">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold mt-15 text-transparent bg-clip-text bg-gradient-to-r from-[#bd853c] to-[#e0b86d] drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)]"
            variants={fadeUp}
          >
            ChessPrix
          </motion.h1>

          <motion.h2
            className="mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#f3c47a]"
            variants={fadeUp}
          >
            <Typewriter
              words={['Passion Refined Into eXcellence']}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={0}
              delaySpeed={2000}
            />
          </motion.h2>

          <motion.p
            className="mt-6 text-base sm:text-lg md:text-xl text-[#f2e79b] leading-relaxed"
            variants={fadeUp}
          >
            At ChessPrix, we ignite young minds and shape future champions. We believe every child has untapped potential,
            and we channel that potential through the royal game of chess.
          </motion.p>

          <motion.p
            className="mt-4 text-sm sm:text-base md:text-lg text-[#ebcc88] italic"
            variants={fadeUp}
          >
            Our interactive online lessons, guided by FIDE-rated masters, transform learning into a golden journey of fun, strategy, and excellence.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            variants={fadeUp}
          >
            <button className="w-full sm:w-auto bg-[#472b12] text-white font-bold px-8 py-4 rounded-lg border-2 border-[#D4AF37] shadow-[0_4px_12px_rgba(212,175,55,0.4)] hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-[0_6px_16px_rgba(212,175,55,0.5)] focus:outline-none focus:ring-4 focus:ring-[#D4AF37]/50 group relative overflow-hidden">
              <span className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] to-[#472b12] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Join Now
              </span>
            </button>

            <button className="w-full sm:w-auto relative px-8 py-4 rounded-lg text-base font-bold text-[#D4AF37] border-2 border-[#D4AF37] overflow-hidden z-10 group hover:text-white transition-all duration-300 ease-in-out">
              <span className="absolute inset-0 bg-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></span>
              <span className="relative z-10 flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Learn More
              </span>
            </button>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-[#c49b61] to-[#f0d998] rounded-2xl opacity-20 blur-xl"></div>
          <div className="relative overflow-hidden rounded-xl shadow-2xl border-2 border-[#c49b61]/20">
            <Image
              src={img}
              alt="Chess student"
              width={600}
              height={600}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
