'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import ownerImg from '@/public/about1.jpg'; // Replace with your actual image path

// Chess piece animation setup
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

export default function About() {
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

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <motion.h2
          className="text-4xl sm:text-5xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-[#bd853c] to-[#e0b86d] drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)]"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          About ChessPrix
        </motion.h2>

        {/* Intro */}
        <motion.p
          className="text-[#ebcc88] text-sm sm:text-base leading-relaxed mb-10 text-center max-w-3xl mx-auto"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          ChessPrix is more than a chess school – it's a community where passion meets excellence. Founded by educators and chess masters, our academy is dedicated to nurturing young minds from their very first move. We blend the thrill of competition with educational fun, ensuring every lesson is engaging and purposeful.
        </motion.p>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            className="bg-[#121820] border border-[#d4af37]/30 rounded-xl p-6 shadow-md"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            <h3 className="text-xl font-bold text-[#f2e79b] mb-3">Our Mission</h3>
            <p className="text-[#ebcc88] text-sm leading-relaxed">
              Our mission is to channel each child’s passion into the pursuit of excellence. We believe every student can achieve mastery with the right guidance—whether they dream of winning tournaments or simply honing their problem-solving skills. At ChessPrix, learning is empowering: we celebrate progress, encourage curiosity, and create champions one move at a time.
            </p>
          </motion.div>

          <motion.div
            className="bg-[#121820] border border-[#d4af37]/30 rounded-xl p-6 shadow-md"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
          >
            <h3 className="text-xl font-bold text-[#f2e79b] mb-3">Our Vision</h3>
            <p className="text-[#ebcc88] text-sm leading-relaxed">
              Our vision is to create a generation of thinkers and leaders who carry critical thinking, focus, and confidence beyond the board. Through chess, we empower young minds for lifelong success and global citizenship.
            </p>
          </motion.div>
        </div>

        {/* Approach */}
        <motion.div
          className="bg-[#121820] border border-[#d4af37]/30 rounded-xl p-6 mb-16 shadow-md"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={4}
        >
          <h3 className="text-xl font-bold text-[#f2e79b] mb-3">Our Approach</h3>
          <ul className="list-disc list-inside text-[#ebcc88] text-sm leading-relaxed space-y-2">
            <li><strong>Structured Progression:</strong> Each course builds on the last, so students steadily advance from basic rules to advanced strategies.</li>
            <li><strong>Global Community:</strong> Students from around the world connect and learn together, making each class a diverse and enriching experience.</li>
            <li><strong>Engaging Curriculum:</strong> Lessons use puzzles, games, and live board analysis, turning complex ideas into fun challenges.</li>
            <li><strong>Parental Involvement:</strong> We keep families informed with progress updates, so parents see the impact of every class and tournament.</li>
          </ul>
        </motion.div>

        {/* Owner Section */}
        <motion.div
          className="flex flex-col lg:flex-row items-center gap-8 bg-[#121820] p-6 rounded-xl border border-[#d4af37]/30"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={5}
        >
          {/* Owner Image */}
          <div className="w-56 h-56 rounded-full overflow-hidden border-4 border-[#d4af37]/40 shadow-[0_0_20px_rgba(212,175,55,0.3)]">
            <Image
              src={ownerImg}
              alt="Founder of ChessPrix"
              width={224}
              height={224}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Owner Info */}
          <div>
            <h3 className="text-xl font-bold text-[#f3c47a] mb-2">Sourav Singh Chauhan</h3>
            <p className="text-[#ebcc88] text-xs leading-relaxed max-w-2xl">
              As the founder of ChessPrix, I envisioned a space where chess becomes a tool to inspire strategic minds, self-discipline, and global camaraderie. Every student has the potential to become a leader—and we build that, one move at a time.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
