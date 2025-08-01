'use client';

import { motion } from 'framer-motion';
import { FaChessPawn, FaChessKnight, FaChessQueen, FaChess } from 'react-icons/fa';

// === Floating chess piece config (same as Hero) ===
const chessElements = Array.from({ length: 12 }).map((_, i) => ({
  size: `${Math.floor(Math.random() * 60) + 40}px`,
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  delay: Math.random() * 3,
  duration: Math.random() * 5 + 5,
  type: i % 3 === 0 ? 'pawn' : i % 2 === 0 ? 'knight' : 'queen',
  color: i % 2 === 0 ? 'text-yellow-400' : 'text-yellow-300',
}));

const courses = [
  {
    title: 'Foundation Course (Beginner)',
    icon: <FaChessPawn className="text-yellow-300 text-3xl" />,
    desc: 'Playful introduction to the game, piece movements, basic rules, and simple tactics. By the end, students confidently play their first full game and recognise key checkmate patterns.',
  },
  {
    title: 'Intermediate Course',
    icon: <FaChessKnight className="text-yellow-300 text-3xl" />,
    desc: 'Building on fundamentals with opening principles, basic strategies, and club-level competition skills. Engaging puzzles and practice matches prepare students for school tournaments.',
  },
  {
    title: 'Advanced Course',
    icon: <FaChessQueen className="text-yellow-300 text-3xl" />,
    desc: 'Focusing on complex tactics, advanced endgames, and competitive readiness. Students engage in timed games and strategic analysis to elevate their play.',
  },
  {
    title: 'Tournament & FIDE Rating Prep',
    icon: <FaChess className="text-yellow-300 text-3xl" />,
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
    <section className="relative py-24 px-6 sm:px-10 bg-gradient-to-br from-[#0e0d1b] via-[#1c1a2e] to-[#25233e] text-yellow-100 overflow-hidden min-h-screen">

      {/* Glowing orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-96 h-96 bg-yellow-400/10 blur-3xl rounded-full z-0" />

      {/* Animated Floating Chess Pieces */}
      {chessElements.map((element, index) => (
        <motion.div
          key={index}
          initial={{ y: 0, rotate: 0 }}
          animate={{ y: [-100, -200, -100], rotate: [0, 10, 0] }}
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
          className={`absolute opacity-20 z-0 ${element.color}`}
        >
          {element.type === 'pawn' && (
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 8.5c0 1.14-1.06 2.5-3 2.5-1.35 0-2-.5-3-.5s-1.65.5-3 .5c-1.94 0-3-1.36-3-2.5 0-1.09 1.06-2.5 3-2.5 1.35 0 2 .5 3 .5s1.65-.5 3-.5c1.94 0 3 1.41 3 2.5z" />
            </svg>
          )}
          {element.type === 'knight' && (
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 8.5c0 1.14-1.06 2.5-3 2.5-1.35 0-2-.5-3-.5s-1.65.5-3 .5c-1.94 0-3-1.36-3-2.5 0-1.09 1.06-2.5 3-2.5 1.35 0 2 .5 3 .5s1.65-.5 3-.5c1.94 0 3 1.41 3 2.5z" />
              <path d="M14 10.5c0 .82-.67 1.5-1.5 1.5s-1.5-.68-1.5-1.5.67-1.5 1.5-1.5 1.5.68 1.5 1.5z" />
            </svg>
          )}
          {element.type === 'queen' && (
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M18 3a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12zm-6 3a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm-7 8a1 1 0 0 0-1 1v4h2v-4a1 1 0 0 0-1-1zm14 0a1 1 0 0 0-1 1v4h2v-4a1 1 0 0 0-1-1z" />
            </svg>
          )}
        </motion.div>
      ))}

      {/* Background Grid Lines */}
      <div className="absolute inset-0 opacity-10 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[length:80px_80px] bg-[linear-gradient(to_right,#1f1f35_1px,transparent_1px),linear-gradient(to_bottom,#1f1f35_1px,transparent_1px)]" />
      </div>

      {/* Section Title */}
      <motion.h2
        className="text-center text-4xl sm:text-7xl font-extrabold mb-16 p-2 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-200 to-yellow-100 z-10 relative"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        custom={0}
      >
        Course Highlights
      </motion.h2>

      {/* Course Cards Grid */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-2 max-w-6xl mx-auto z-10 relative">
        {courses.map((course, index) => (
          <motion.div
            key={index}
            className="bg-[#1f1f35] border border-yellow-300/20 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:scale-105"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={index + 1}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-yellow-400/10 rounded-full">{course.icon}</div>
              <h3 className="text-xl font-bold text-yellow-200">{course.title}</h3>
            </div>
            <p className="text-yellow-100 text-sm leading-relaxed">{course.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
