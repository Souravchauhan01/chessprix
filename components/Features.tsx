'use client';

import { motion } from 'framer-motion';
import { FaChalkboardTeacher, FaRegLightbulb } from 'react-icons/fa';
import { MdOutlineScreenShare, MdPeople, MdChildFriendly } from 'react-icons/md';

// === Floating chess pieces config (same as Hero) ===
const chessElements = Array.from({ length: 12 }).map((_, i) => ({
  size: `${Math.floor(Math.random() * 60) + 40}px`,
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  delay: Math.random() * 3,
  duration: Math.random() * 5 + 5,
  type: i % 3 === 0 ? 'pawn' : i % 2 === 0 ? 'knight' : 'queen',
  color: i % 2 === 0 ? 'text-yellow-400' : 'text-yellow-300',
}));

const features = [
  {
    title: 'Ages 4 & Up',
    icon: <MdChildFriendly className="text-yellow-300 text-3xl" />,
    desc: 'Tailored programs welcome young beginners, nurturing strategic thinking from their very first move.',
  },
  {
    title: 'Expert FIDE Coaches',
    icon: <FaChalkboardTeacher className="text-yellow-300 text-3xl" />,
    desc: 'International masters guide each student, refining skills with patience and precision.',
  },
  {
    title: 'Interactive Online Learning',
    icon: <MdOutlineScreenShare className="text-yellow-300 text-3xl" />,
    desc: 'Live classes with digital boards, puzzles, and game analysis keep children engaged and excited.',
  },
  {
    title: 'Personalised Attention',
    icon: <MdPeople className="text-yellow-300 text-3xl" />,
    desc: 'One-on-one and small group sessions ensure every child learns at the perfect pace.',
  },
  {
    title: 'Holistic Development',
    icon: <FaRegLightbulb className="text-yellow-300 text-3xl" />,
    desc: 'Beyond chess, we cultivate concentration, creativity, and confidence—skills that benefit all areas of life.',
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

export default function Features() {
  return (
    <section className="relative py-24 px-6 sm:px-10 bg-gradient-to-br from-[#0e0d1b] via-[#1c1a2e] to-[#25233e] text-yellow-100 overflow-hidden min-h-screen">

      {/* Glowing Light */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-yellow-400/10 blur-3xl rounded-full z-0" />

      {/* Animated Floating Chess Elements */}
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

      {/* Grid Lines Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[length:80px_80px] bg-[linear-gradient(to_right,#1f1f35_1px,transparent_1px),linear-gradient(to_bottom,#1f1f35_1px,transparent_1px)]" />
      </div>

      {/* Section Title */}
      <motion.h2
        className="text-center text-4xl sm:text-5xl font-extrabold mb-16 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-200 to-yellow-100 z-10 relative p-1"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        custom={0}
      >
        Key Features & Benefits
      </motion.h2>

      {/* Features Grid */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto z-10 relative">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-[#1f1f35] border border-yellow-300/20 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:scale-105"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={index + 1}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-yellow-400/10 rounded-full">{feature.icon}</div>
              <h3 className="text-xl font-bold text-yellow-200">{feature.title}</h3>
            </div>
            <p className="text-yellow-100 text-sm leading-relaxed">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
