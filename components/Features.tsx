'use client';

import { motion } from 'framer-motion';
import { FaChalkboardTeacher, FaRegLightbulb } from 'react-icons/fa';
import { MdOutlineScreenShare, MdPeople, MdChildFriendly } from 'react-icons/md';

// Updated chessTypes and icon names
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

const features = [
  {
    title: 'Ages 4 & Up',
    icon: <MdChildFriendly className="text-[#f3c47a] text-3xl drop-shadow-[0_0_4px_rgba(243,196,122,0.8)]" />,
    desc: 'Tailored programs welcome young beginners, nurturing strategic thinking from their very first move.',
  },
  {
    title: 'Expert FIDE Coaches',
    icon: <FaChalkboardTeacher className="text-[#f3c47a] text-3xl drop-shadow-[0_0_4px_rgba(243,196,122,0.8)]" />,
    desc: 'International masters guide each student, refining skills with patience and precision.',
  },
  {
    title: 'Interactive Online Learning',
    icon: <MdOutlineScreenShare className="text-[#f3c47a] text-3xl drop-shadow-[0_0_4px_rgba(243,196,122,0.8)]" />,
    desc: 'Live classes with digital boards, puzzles, and game analysis keep children engaged and excited.',
  },
  {
    title: 'Personalised Attention',
    icon: <MdPeople className="text-[#f3c47a] text-3xl drop-shadow-[0_0_4px_rgba(243,196,122,0.8)]" />,
    desc: 'One-on-one and small group sessions ensure every child learns at the perfect pace.',
  },
  {
    title: 'Holistic Development',
    icon: <FaRegLightbulb className="text-[#f3c47a] text-3xl drop-shadow-[0_0_4px_rgba(243,196,122,0.8)]" />,
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
     ease: [0.42, 0, 0.58, 1] as const,
    },
  }),
};

export default function Features() {
  return (
    <section className="relative py-14 px-6 sm:px-10 bg-[#080d14] text-yellow-100 overflow-hidden min-h-auto">

      {/* Glowing Light */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-yellow-300/10 blur-3xl rounded-full z-0" />

      {/* Floating Chess Elements with Names */}
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
          <div className="text-xs font-semibold text-yellow-200">{element.type.charAt(0).toUpperCase() + element.type.slice(1)}</div>
        </motion.div>
      ))}

      {/* Grid Lines */}
      <div className="absolute inset-0 opacity-10 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[length:80px_80px] bg-[linear-gradient(to_right,#1f1f35_1px,transparent_1px),linear-gradient(to_bottom,#1f1f35_1px,transparent_1px)]" />
      </div>

      {/* Title */}
     <motion.h2
  className="text-center text-4xl sm:text-5xl font-extrabold mb-16 text-transparent bg-clip-text bg-gradient-to-r from-[#bd853c] to-[#e0b86d] drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] z-10 relative"
  initial="hidden"
  animate="visible"
  variants={fadeUp}
  custom={0}
>
  Key Features & Benefits
</motion.h2>


      {/* Feature Cards */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto z-10 relative">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-[#121820] border border-[#d4af37]/30 rounded-xl p-6 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-300 hover:scale-105"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={index + 1}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-[#d4af37]/10 rounded-full">{feature.icon}</div>
              <h3 className="text-xl font-bold text-[#f2e79b]">{feature.title}</h3>
            </div>
            <p className="text-[#ebcc88] text-sm leading-relaxed">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
