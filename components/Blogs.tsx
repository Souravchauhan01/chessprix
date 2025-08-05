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

// Extended Blog List
const blogs = [
  {
    title: 'The Power of Chess in Child Development',
    excerpt: 'Discover how chess enhances cognitive skills, improves concentration, and builds confidence in young learners.',
    date: 'March 15, 2024',
    readTime: '5 min read',
    category: 'Education',
  },
  {
    title: 'Preparing for Your First Tournament',
    excerpt: 'Essential tips and strategies for young players entering their first competitive chess tournament.',
    date: 'March 10, 2024',
    readTime: '7 min read',
    category: 'Tournament',
  },
  {
    title: 'Opening Principles for Beginners',
    excerpt: 'Master the fundamental opening principles that every chess player should know to start games strong.',
    date: 'March 5, 2024',
    readTime: '6 min read',
    category: 'Strategy',
  },
  {
    title: 'Building a Strong Chess Foundation',
    excerpt: 'Learn the essential building blocks that create a solid foundation for chess improvement.',
    date: 'February 28, 2024',
    readTime: '8 min read',
    category: 'Learning',
  },
  {
    title: 'The Psychology of Chess',
    excerpt: 'Understanding the mental aspects of chess and how to develop a strong competitive mindset.',
    date: 'February 20, 2024',
    readTime: '9 min read',
    category: 'Psychology',
  },
  {
    title: 'Advanced Tactics for Intermediate Players',
    excerpt: 'Elevate your game with advanced tactical patterns and combinations for intermediate players.',
    date: 'February 15, 2024',
    readTime: '10 min read',
    category: 'Advanced',
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

export default function Blogs() {
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
    <section className="relative py-16 px-6 sm:px-10 bg-[#080d14] text-yellow-100 overflow-hidden min-h-auto mt-8 sm:mt-18">

      {/* Glowing Light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-yellow-300/10 blur-3xl rounded-full z-0" />

      {/* Floating Chess Pieces */}
      {isClient && chessElements.map((el, i) => (
        <motion.div
          key={i}
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
          className="absolute flex flex-col items-center justify-center text-yellow-300 z-0 opacity-50 drop-shadow-[0_0_8px_rgba(212,175,55,0.6)]"
        >
          <div className="text-4xl">{symbolMap[el.type]}</div>
          <div className="text-xs font-semibold text-yellow-200 capitalize">{el.type}</div>
        </motion.div>
      ))}

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Page Heading */}
        <motion.h2
          className="text-4xl sm:text-5xl font-extrabold text-center mb-12 p-2 text-transparent bg-clip-text bg-gradient-to-r from-[#bd853c] to-[#e0b86d] drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)]"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          ChessPrix Blogs
        </motion.h2>

        {/* Blog Cards */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={index + 1}
              className="bg-[#121820] border border-[#d4af37]/30 rounded-xl p-6 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-xl font-bold text-[#f2e79b]">{blog.title}</h3>
              </div>
              <div className="flex items-center text-sm text-[#ebcc88] mb-2 gap-2">
                {blog.date}
              </div>
              <p className="text-[#ebcc88] text-md leading-relaxed">{blog.excerpt}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
