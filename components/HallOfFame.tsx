'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const chessTypes = ['pawn', 'knight', 'queen', 'rook', 'bishop', 'king'];

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

export default function HallOfFame() {
  const [chessElements, setChessElements] = useState<any[]>([]);

  const students = Array.from({ length: 12 }).map((_, i) => ({
    name: `Student ${i + 1}`,
    img: `/students/student${(i % 10) + 1}.jpg`,
  }));

  useEffect(() => {
    const count = 16;
    const generated = Array.from({ length: count }).map((_, i) => ({
      size: `${Math.floor(Math.random() * 60) + 40}px`,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 3,
      duration: Math.random() * 5 + 5,
      type: chessTypes[i % chessTypes.length],
      color: 'text-yellow-300 drop-shadow-[0_0_8px_rgba(212,175,55,0.5)]',
    }));
    setChessElements(generated);
  }, []);

  return (
    <section className="relative py-16 mt-15 px-6 sm:px-10 bg-gradient-to-br from-[#0a0f1a] via-[#0e131f] to-[#0a0f1a] text-yellow-100 overflow-hidden min-h-screen">

      {/* Glowing Background Center Light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-300/10 blur-[200px] rounded-full z-0" />

      {/* Floating Chess Pieces */}
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
          className={`absolute flex flex-col items-center justify-center z-0 opacity-50 ${el.color}`}
        >
          <div className="text-4xl">
            {{
              king: '♔',
              queen: '♕',
              rook: '♖',
              bishop: '♗',
              knight: '♘',
              pawn: '♙',
            }[el.type]}
          </div>
          <div className="text-xs font-semibold text-yellow-200">
            {el.type.charAt(0).toUpperCase() + el.type.slice(1)}
          </div>
        </motion.div>
      ))}

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[length:80px_80px] bg-[linear-gradient(to_right,#1f1f35_1px,transparent_1px),linear-gradient(to_bottom,#1f1f35_1px,transparent_1px)]" />
      </div>

      {/* Section Title */}
      <motion.h2
        className="text-center text-4xl sm:text-5xl font-extrabold mb-16 p-2 text-transparent bg-clip-text bg-gradient-to-r from-[#bd853c] to-[#e0b86d] drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] z-10 relative"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        custom={0}
      >
        🎓 Hall of Fame
      </motion.h2>

      {/* Student Cards */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto z-10 relative">
        {students.map((student, i) => (
          <motion.div
            key={i}
            className="bg-[#121820] border border-[#d4af37]/40 rounded-xl overflow-hidden shadow-xl hover:shadow-yellow-400/40 transition-all duration-300 hover:scale-[1.03] group"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={i + 1}
          >
            <div className="relative w-full h-64 sm:h-72">
              <Image
                src={student.img}
                alt={student.name}
                fill
                className="object-cover object-top"
              />
            </div>
            <div className="p-4 text-center">
              <p className="text-[#f2e79b] text-xl font-bold tracking-wide">
                {student.name}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
