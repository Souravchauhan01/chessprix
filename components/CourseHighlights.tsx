'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaChessPawn, FaChessKnight, FaChessQueen, FaChess, FaChessBishop } from 'react-icons/fa';

// 1️⃣ Define a union type for allowed chess piece names
type ChessPiece = 'pawn' | 'knight' | 'queen' | 'rook' | 'bishop' | 'king';

// 2️⃣ Strongly type chessTypes
const chessTypes: ChessPiece[] = ['pawn', 'knight', 'queen', 'rook', 'bishop', 'king'];

// 3️⃣ Type for generated floating elements
interface ChessElement {
  size: string;
  top: string;
  left: string;
  delay: number;
  duration: number;
  type: ChessPiece;
  color: string;
}

function seededRandom(seed: number): number {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

function generateChessElements(): ChessElement[] {
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

const courses = [
  {
    title: 'Foundation Course (Beginner)',
    icon: <FaChessPawn className="text-[#f3c47a] text-3xl drop-shadow-[0_0_4px_rgba(243,196,122,0.8)]" />,
    desc: 'Playful introduction to the game, piece movements, basic rules, and simple tactics. By the end, students confidently play their first full game and recognise key checkmate patterns.',
  },
  {
    title: 'Intermediate Course',
    icon: <FaChessKnight className="text-[#f3c47a] text-3xl drop-shadow-[0_0_4px_rgba(243,196,122,0.8)]" />,
    desc: 'Building on fundamentals with opening principles, basic strategies, and club-level competition skills. Engaging puzzles and practice matches prepare students for school tournaments.',
  },
  {
    title: 'Advanced Course',
    icon: <FaChessQueen className="text-[#f3c47a] text-3xl drop-shadow-[0_0_4px_rgba(243,196,122,0.8)]" />,
    desc: 'Focusing on complex tactics, advanced endgames, and competitive readiness. Students engage in timed games and strategic analysis to elevate their play.',
  },
  {
    title: 'Tournament & FIDE Rating Prep',
    icon: <FaChess className="text-[#f3c47a] text-3xl drop-shadow-[0_0_4px_rgba(243,196,122,0.8)]" />,
    desc: 'Intensive training for ambitious competitors. Simulated tournaments, grandmaster game studies, and focused mentorship prepare students to earn official FIDE ratings and excel in championships.',
  },
  {
    title: 'The Masters Path: Elite Training',
    icon: <FaChessBishop className="text-[#f3c47a] text-3xl drop-shadow-[0_0_4px_rgba(243,196,122,0.8)]" />,
    desc: 'Deep dive into positional play, pawn structures, and master-level strategic thinking for seasoned players.',
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

export default function CourseHighlights() {
  const [chessElements, setChessElements] = useState<ChessElement[]>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setChessElements(generateChessElements());
  }, []);

  return (
    <section className="relative py-10 px-6 sm:px-10 bg-[#080d14] text-yellow-100 overflow-hidden">

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
          className={`absolute flex flex-col items-center justify-center text-yellow-300 z-0 opacity-50 ${element.color}`}
        >
          <div className="text-4xl">
            {{
              king: '♔',
              queen: '♕',
              rook: '♖',
              bishop: '♗',
              knight: '♘',
              pawn: '♙',
            }[element.type]}
          </div>
          <div className="text-xs font-semibold text-yellow-200">
            {element.type.charAt(0).toUpperCase() + element.type.slice(1)}
          </div>
        </motion.div>
      ))}

      {/* Section Title */}
      <motion.h2
        className="text-center text-4xl sm:text-5xl font-extrabold p-2 mb-10 text-transparent bg-clip-text bg-gradient-to-r from-[#bd853c] to-[#e0b86d] drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] z-10 relative"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        custom={0}
      >
        Course Highlights
      </motion.h2>

      {/* Course Cards with Scroll + Arrows */}
      <div className="relative max-w-7xl mx-auto z-10">
        {/* Left Arrow */}
        <button
          onClick={() => document.getElementById("courseRow")?.scrollBy({ left: -300, behavior: "smooth" })}
          className="absolute -left-6 top-1/2 -translate-y-1/2 bg-[#d4af37]/20 p-2 rounded-full hover:bg-[#d4af37]/40 transition z-20"
        >
          ◀
        </button>

        {/* Scroll Row */}
        <div
          id="courseRow"
          className="flex gap-10 overflow-x-auto scroll-smooth no-scrollbar p-4"
        >
          {courses.map((course, index) => (
            <motion.div
              key={index}
              className="bg-[#121820] border border-[#d4af37]/30 rounded-xl p-6 min-w-[260px] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-300 hover:scale-105"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={index + 1}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-[#d4af37]/10 rounded-full">{course.icon}</div>
                <h3 className="text-xl font-bold text-[#f2e79b]">{course.title}</h3>
              </div>
              <p className="text-[#ebcc88] text-md leading-relaxed">{course.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => document.getElementById("courseRow")?.scrollBy({ left: 300, behavior: "smooth" })}
          className="absolute -right-6 top-1/2 -translate-y-1/2 bg-[#d4af37]/20 p-2 rounded-full hover:bg-[#d4af37]/40 transition z-20"
        >
          ▶
        </button>
      </div>
    </section>
  );
}
