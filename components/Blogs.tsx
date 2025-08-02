'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaPenNib, FaCalendarAlt } from 'react-icons/fa';

// Floating Chess Pieces
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

const generateFloatingPieces = (count: number) =>
  Array.from({ length: count }).map((_, i) => ({
    size: `${Math.floor(Math.random() * 60) + 40}px`,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 3,
    duration: Math.random() * 5 + 5,
    type: chessTypes[i % chessTypes.length],
  }));

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

// Extended Blog List
const blogs = [
  {
    title: 'How Chess Builds Cognitive Strength in Children',
    date: 'August 2, 2025',
    summary:
      'Discover how structured chess training enhances focus, memory, and problem-solving skills in young minds.',
  },
  {
    title: 'Mastering Openings: The Beginner’s Guide',
    date: 'July 25, 2025',
    summary:
      'Learn the most effective chess openings for early control and positioning. Perfect for beginners stepping into strategy.',
  },
  {
    title: 'Parent’s Role in Chess Learning Journey',
    date: 'July 15, 2025',
    summary:
      'Explore how parental involvement encourages motivation, progress, and tournament readiness in children.',
  },
  {
    title: 'Why Tactics Trump Strategy for Young Players',
    date: 'July 2, 2025',
    summary:
      'Understand the difference between tactics and strategy and why the former is a faster path to improvement for beginners.',
  },
  {
    title: 'How to Cultivate Focus Through Chess',
    date: 'June 24, 2025',
    summary:
      'Chess trains children to focus deeply for long periods — a skill often missing in the digital age.',
  },
  {
    title: 'Using Chess to Improve Academic Performance',
    date: 'June 10, 2025',
    summary:
      'Studies link chess to better math and reading scores. Learn how strategic thinking carries over to school success.',
  },
  {
    title: 'The Role of Puzzles in Accelerated Learning',
    date: 'May 28, 2025',
    summary:
      'Discover why chess puzzles are a shortcut to building fast, tactical calculation skills in young learners.',
  },
  {
    title: 'Top 5 Mistakes Young Chess Players Make',
    date: 'May 10, 2025',
    summary:
      'Avoid common pitfalls that slow down progress and shake a young player’s confidence on the board.',
  },
  {
    title: 'Chess for Special Needs: A Calming, Empowering Tool',
    date: 'April 26, 2025',
    summary:
      'How chess is being used in therapy and classrooms to improve focus, behavior, and self-esteem in neurodiverse children.',
  },
 
];

export default function Blogs() {
  const [floating, setFloating] = useState(generateFloatingPieces(14));

  useEffect(() => {
    const count = window.innerWidth < 640 ? 6 : 14;
    setFloating(generateFloatingPieces(count));
  }, []);

  return (
    <section className="relative w-full bg-[#080d14] text-yellow-100 px-6 sm:px-10 py-20 mt-15  overflow-hidden">
      {/* Glowing Light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-yellow-300/10 blur-3xl rounded-full z-0" />

      {/* Grid Lines */}
      <div className="absolute inset-0 opacity-10 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[length:80px_80px] bg-[linear-gradient(to_right,#1f1f35_1px,transparent_1px),linear-gradient(to_bottom,#1f1f35_1px,transparent_1px)]" />
      </div>

      {/* Floating Chess Pieces */}
      {floating.map((el, i) => (
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
                <FaPenNib className="text-[#f3c47a] text-xl" />
                <h3 className="text-xl font-bold text-[#f2e79b]">{blog.title}</h3>
              </div>
              <div className="flex items-center text-sm text-[#ebcc88] mb-2 gap-2">
                <FaCalendarAlt className="text-[#f3c47a]" />
                {blog.date}
              </div>
              <p className="text-[#ebcc88] text-md leading-relaxed">{blog.summary}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
