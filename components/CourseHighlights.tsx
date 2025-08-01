'use client';

import { motion } from 'framer-motion';
import { FaChessPawn, FaChessKnight, FaChessQueen, FaChess } from 'react-icons/fa';

// === Floating chess pieces with labels ===
const chessTypes = ['pawn', 'knight', 'queen', 'rook', 'bishop', 'king'];
const chessElements = Array.from({ length: 14 }).map((_, i) => ({
  size: `${Math.floor(Math.random() * 60) + 40}px`,
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  delay: Math.random() * 3,
  duration: Math.random() * 5 + 5,
  type: chessTypes[i % chessTypes.length],
  color: 'text-yellow-300 drop-shadow-[0_0_8px_rgba(212,175,55,0.5)]',
}));

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
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: [0.42, 0, 0.58, 1],
    },
  }),
};

export default function CourseHighlights() {
  return (
    <section className="relative py-24 px-6 sm:px-10 bg-[#080d14] text-yellow-100 overflow-hidden min-h-screen">

      {/* Glowing Light */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-yellow-300/10 blur-3xl rounded-full z-0" />

      {/* Floating Chess Elements with Labels */}
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

      {/* Grid Lines */}
      <div className="absolute inset-0 opacity-10 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[length:80px_80px] bg-[linear-gradient(to_right,#1f1f35_1px,transparent_1px),linear-gradient(to_bottom,#1f1f35_1px,transparent_1px)]" />
      </div>

      {/* Section Title */}
      <motion.h2
        className="text-center text-4xl sm:text-5xl font-extrabold mb-16 text-transparent bg-clip-text bg-gradient-to-r from-[#bd853c] to-[#e0b86d] drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] z-10 relative"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        custom={0}
      >
        Course Highlights
      </motion.h2>

      {/* Course Cards in Single Row on Desktop */}
      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto z-10 relative">
        {courses.map((course, index) => (
          <motion.div
            key={index}
            className="bg-[#121820] border border-[#d4af37]/30 rounded-xl p-6 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-300 hover:scale-105"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={index + 1}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-[#d4af37]/10 rounded-full">{course.icon}</div>
              <h3 className="text-xl font-bold text-[#f2e79b]">{course.title}</h3>
            </div>
            <p className="text-[#ebcc88] text-sm leading-relaxed">{course.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
