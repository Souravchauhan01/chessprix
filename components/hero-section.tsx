'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Typewriter } from 'react-simple-typewriter';

import img from "@/public/about1.jpg";

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

// Deterministic random number generator
function seededRandom(seed: number): number {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

function generateChessElements(count: number): ChessElement[] {
  return Array.from({ length: count }).map((_, i) => {
    const seed = i * 12345; // Deterministic seed based on index
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
    };
  });
}

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
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const isTablet = typeof window !== 'undefined' && window.innerWidth >= 768 && window.innerWidth < 1024;
    const count = isMobile ? 6 : isTablet ? 12 : 16;

    const elements = generateChessElements(count);
    setChessElements(elements);
  }, []);

  return (
    // MODIFIED LINE: Replaced complex min-h and py classes with a simpler responsive padding system
    <section className="relative w-full overflow-hidden bg-[#080d14] flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-10 py-20 md:py-24 lg:py-28 mt-10">
      {/* Glowing Light - Adjusted for tablet */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[300px] md:w-[400px] lg:w-[500px] h-[300px] md:h-[400px] lg:h-[500px] bg-yellow-300/10 blur-3xl rounded-full z-0" />

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
          className="absolute flex flex-col items-center justify-center text-yellow-300 z-0 opacity-50 drop-shadow-[0_0_8px_rgba(212,175,55,0.8)]"
        >
          <div className="text-2xl md:text-3xl lg:text-4xl">{symbolMap[element.type]}</div>
          <div className="text-[8px] md:text-[10px] lg:text-xs font-semibold text-yellow-200">
            {element.type.charAt(0).toUpperCase() + element.type.slice(1)}
          </div>
        </motion.div>
      ))}

      {/* Main Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center lg:justify-between w-full max-w-7xl gap-4 md:gap-6 lg:gap-8 xl:gap-12">
        {/* Left Content */}
        <motion.div className="text-center lg:text-left w-full lg:w-auto max-w-2xl" initial="hidden" animate="visible">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#bd853c] to-[#e0b86d] drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)]"
            variants={fadeUp}
          >
            ChessPrix
          </motion.h1>

          <motion.h2
            className="mt-2 md:mt-3 text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold text-[#f3c47a]"
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
            className="mt-3 md:mt-4 lg:mt-6 text-sm md:text-base lg:text-lg text-[#f2e79b] leading-relaxed"
            variants={fadeUp}
          >
            At ChessPrix, we ignite young minds and shape future champions. We believe every child has untapped potential,
            and we channel that potential through the royal game of chess.
          </motion.p>

          <motion.p
            className="mt-2 md:mt-3 lg:mt-4 text-xs md:text-sm lg:text-base xl:text-lg text-[#ebcc88] italic"
            variants={fadeUp}
          >
            Our interactive online lessons, guided by FIDE-rated masters, transform learning into a golden journey of fun, strategy, and excellence.
          </motion.p>

          <motion.div
            className="mt-4 md:mt-6 lg:mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 md:gap-4"
            variants={fadeUp}
          >
            <button className="w-full sm:w-auto bg-[#472b12] text-white font-bold px-5 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 rounded-lg border-2 border-[#D4AF37] shadow-[0_4px_12px_rgba(212,175,55,0.4)] hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-[0_6px_16px_rgba(212,175,55,0.5)] focus:outline-none focus:ring-4 focus:ring-[#D4AF37]/50 group relative overflow-hidden">
              <span className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] to-[#472b12] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative flex items-center justify-center gap-2 text-sm md:text-base">
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Join Now
              </span>
            </button>

            <button className="w-full sm:w-auto relative px-5 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 rounded-lg text-sm md:text-base font-bold text-[#D4AF37] border-2 border-[#D4AF37] overflow-hidden z-10 group hover:text-white transition-all duration-300 ease-in-out">
              <span className="absolute inset-0 bg-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></span>
              <span className="relative z-10 flex items-center justify-center gap-2">
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Learn More
              </span>
            </button>
          </motion.div>

          <motion.div
            className="mt-3 md:mt-4 lg:mt-6 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 md:gap-4"
            variants={fadeUp}
          >
            <Link 
              href="/foundational" 
              className="w-full sm:w-auto bg-[#1a1a1a]/80 text-white font-bold px-5 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 rounded-lg border-2 border-[#D4AF37] shadow-[0_4px_12px_rgba(212,175,55,0.4)] hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-[0_6px_16px_rgba(212,175,55,0.5)] focus:outline-none focus:ring-4 focus:ring-[#D4AF37]/50 group relative overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] to-[#1a1a1a] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative flex items-center justify-center gap-2 text-sm md:text-base">
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                Foundational & Strategic Development
              </span>
            </Link>

            <Link 
              href="/competitive" 
              className="w-full sm:w-auto relative px-5 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 rounded-lg text-sm md:text-base font-bold text-[#D4AF37] border-2 border-[#D4AF37] overflow-hidden z-10 group hover:text-white transition-all duration-300 ease-in-out"
            >
              <span className="absolute inset-0 bg-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></span>
              <span className="relative z-10 flex items-center justify-center gap-2">
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
                High-Performance & Competitive Mastery
              </span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="w-full lg:w-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl relative mt-4 md:mt-6 lg:mt-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <div className="absolute -inset-2 sm:-inset-3 md:-inset-4 bg-gradient-to-r from-[#c49b61] to-[#f0d998] rounded-2xl opacity-20 blur-xl"></div>
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