'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

// === Floating Chess ===
const chessTypes = ['pawn', 'knight', 'queen', 'rook', 'bishop', 'king'];
const symbolMap: Record<string, string> = {
  king: '♔',
  queen: '♕',
  rook: '♖',
  bishop: '♗',
  knight: '♘',
  pawn: '♙',
};

// === Student Cards ===
const students = [
  { name: 'Sophia Lee', img: '/students/sophia.jpg' },
  { name: 'Liam Carter', img: '/students/liam.jpg' },
  { name: 'Olivia Smith', img: '/students/olivia.jpg' },
  { name: 'Noah Johnson', img: '/students/noah.jpg' },
  { name: 'Ava Thompson', img: '/students/ava.jpg' },
  { name: 'Ethan Davis', img: '/students/ethan.jpg' },
];
const duplicateList = [...students, ...students];

export default function StudentCarousel() {
  const [width, setWidth] = useState(0);
  const [chessElements, setChessElements] = useState<any[]>([]);

  useEffect(() => {
    const container = document.getElementById('carousel-track');
    if (container) setWidth(container.scrollWidth / 2);

    // === Spread evenly instead of randomly clumping ===
    const count = window.innerWidth < 640 ? 6 : 14;
    const cols = Math.ceil(Math.sqrt(count));
    const rows = Math.ceil(count / cols);

    const elements = Array.from({ length: count }).map((_, i) => {
      const row = Math.floor(i / cols);
      const col = i % cols;

      return {
        size: `${Math.floor(Math.random() * 40) + 30}px`,
        top: `${(row / rows) * 90 + Math.random() * 5}%`,
        
        left: `${(col / cols) * 90 + Math.random() * 5}%`,
        delay: Math.random() * 3,
        duration: Math.random() * 5 + 5,
        type: chessTypes[i % chessTypes.length],
      };
    });
    setChessElements(elements);
  }, []);

  return (
    <section className="relative py-16 bg-[#080d14] overflow-hidden text-white min-h-auto">
      {/* Glowing Light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-yellow-300/10 blur-3xl rounded-full z-0" />

      {/* Floating Chess Pieces */}
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
          className="absolute flex flex-col items-center justify-center text-yellow-300 z-0 opacity-40 drop-shadow-[0_0_8px_rgba(212,175,55,0.8)] pointer-events-none"
        >
          <div className="text-3xl">{symbolMap[element.type]}</div>
          <div className="text-xs font-semibold text-yellow-200">
            {element.type.charAt(0).toUpperCase() + element.type.slice(1)}
          </div>
        </motion.div>
      ))}

      {/* Title */}
      <h2 className="text-center text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#bd853c] to-[#e0b86d] mb-12 z-10 relative">
        Meet Our Star Students
      </h2>

      {/* Carousel */}
      <div className="relative w-full overflow-hidden z-10">
        <motion.div
          id="carousel-track"
          className="flex gap-8 w-max"
          animate={{ x: [-0, -width] }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: 'linear',
          }}
        >
          {duplicateList.map((student, i) => (
            <div
              key={i}
              className="flex flex-col items-center bg-[#121820] border border-[#d4af37]/20 rounded-xl p-4 min-w-[180px] sm:min-w-[220px] shadow-md hover:scale-105 transition-transform duration-300"
            >
             <div className="relative w-38 h-38 sm:w-42 sm:h-42 mb-4 rounded-full overflow-hidden border-2 border-yellow-500 shadow-md">
  <Image
    src={student.img}
    alt={student.name}
    width={144}
    height={156}
    className="object-cover"
  />
</div>

              <p className="text-[#f5d084] text-center font-semibold">{student.name}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
