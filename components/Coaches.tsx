'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import anandImg from '@/public/about1.jpg';
import sofiaImg from '@/public/about1.jpg';
import michaelImg from '@/public/about1.jpg';
import aishaImg from '@/public/about1.jpg';

type ChessType = 'pawn' | 'knight' | 'queen' | 'rook' | 'bishop' | 'king';

const chessTypes: ChessType[] = ['pawn', 'knight', 'queen', 'rook', 'bishop', 'king'];

const symbolMap: Record<ChessType, string> = {
  king: '♔',
  queen: '♕',
  rook: '♖',
  bishop: '♗',
  knight: '♘',
  pawn: '♙',
};

interface ChessElement {
  size: string;
  top: string;
  left: string;
  delay: number;
  duration: number;
  type: ChessType;
}

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
    name: 'Anand Verma',
    title: 'International Master',
    image: anandImg,
    bio: 'A former national junior champion, Anand has over 15 years of teaching experience. He’s patient and encouraging, helping young beginners build confidence with every lesson.',
  },
  {
    name: 'Sofia Petrova',
    title: 'Woman Grandmaster',
    image: sofiaImg,
    bio: 'Sofia has played competitively around the world and inspires students with her dynamic style. She believes in creative problem-solving and personal attention, motivating each child to strive for greatness.',
  },
  {
    name: 'Michael Lee',
    title: 'FIDE Trainer',
    image: michaelImg,
    bio: 'A tactical genius and experienced coach, Michael focuses on players preparing for tournaments. He analyses each game in detail, crafting customised training plans to sharpen every student’s skills.',
  },
  {
    name: 'Dr. Aisha Rahman',
    title: 'Chess Educator',
    image: aishaImg,
    bio: 'A former academic and chess enthusiast, Dr. Rahman blends teaching expertise with chess training. She designs interactive lessons that make learning fun and memorable for all ages.',
  },
];

export default function Coaches() {
  const [chessElements, setChessElements] = useState<ChessElement[]>([]);

  useEffect(() => {
    const isMobile = window.innerWidth < 640;
    const count = isMobile ? 6 : 14;

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
    <section className="relative w-full bg-[#080d14] text-yellow-100 px-6 sm:px-10 py-20 overflow-hidden mt-15">

      {/* Glowing Light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-yellow-300/10 blur-3xl rounded-full z-0" />

      {/* Grid Lines */}
      <div className="absolute inset-0 opacity-10 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[length:80px_80px] bg-[linear-gradient(to_right,#1f1f35_1px,transparent_1px),linear-gradient(to_bottom,#1f1f35_1px,transparent_1px)]" />
      </div>

      {/* Floating Chess Elements */}
      {chessElements.map((el, index) => (
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
        className="text-4xl sm:text-5xl font-extrabold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#bd853c] to-[#e0b86d] drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] z-10 relative"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0}
      >
        Meet the ChessPrix Coaches
      </motion.h2>

      <motion.p
        className="text-[#ebcc88] text-sm sm:text-base leading-relaxed mb-10 text-center max-w-3xl mx-auto z-10 relative"
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
            className="bg-[#121820] border border-[#d4af37]/30 rounded-xl p-6 shadow-md hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-300 hover:scale-105 flex gap-5"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={index + 2}
          >
            <div className="flex-shrink-0 w-20 h-20 rounded-full overflow-hidden border-2 border-yellow-400">
              <Image src={coach.image} alt={coach.name} width={80} height={80} className="object-cover w-full h-full" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-[#f2e79b]">{coach.name}</h4>
              <p className="text-sm italic text-yellow-300 mb-2">{coach.title}</p>
              <p className="text-[#ebcc88] text-sm leading-relaxed">{coach.bio}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
