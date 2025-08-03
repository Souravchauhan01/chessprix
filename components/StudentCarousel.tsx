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
  { name: 'Sophia Lee', img: '/students/about1.jpg' },
  { name: 'Liam Carter', img: '/students/about1.jpg' },
  { name: 'Olivia Smith', img: '/students/about1.jpg' },
  { name: 'Noah Johnson', img: '/students/about1.jpg' },
  { name: 'Ava Thompson', img: '/students/about1.jpg' },
  { name: 'Ethan Davis', img: '/students/about1.jpg' },
];
const duplicateList = [...students, ...students];

// Deterministic random number generator
function seededRandom(seed: number): number {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

function generateStudentElements(): Array<{
  size: string;
  top: string;
  left: string;
  delay: number;
  duration: number;
}> {
  const rows = 3;
  const cols = 4;
  const totalElements = rows * cols;
  
  return Array.from({ length: totalElements }).map((_, i) => {
    const seed = i * 12345; // Deterministic seed based on index
    const row = Math.floor(i / cols);
    const col = i % cols;
    
    const size = Math.floor(seededRandom(seed) * 40) + 30;
    const top = (row / rows) * 90 + seededRandom(seed + 1) * 5;
    const left = (col / cols) * 90 + seededRandom(seed + 2) * 5;
    const delay = seededRandom(seed + 3) * 3;
    const duration = seededRandom(seed + 4) * 5 + 5;
    
    return {
      size: `${size}px`,
      top: `${top}%`,
      left: `${left}%`,
      delay,
      duration,
    };
  });
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.42, 0, 0.58, 1] as const,
    },
  }),
};

export default function StudentCarousel() {
  const [studentElements, setStudentElements] = useState<Array<{
    size: string;
    top: string;
    left: string;
    delay: number;
    duration: number;
  }>>([]);
  const [isClient, setIsClient] = useState(false);
  const [carouselWidth, setCarouselWidth] = useState(0);

  useEffect(() => {
    setIsClient(true);
    const elements = generateStudentElements();
    setStudentElements(elements);
    
    // Calculate carousel width after component mounts
    const calculateWidth = () => {
      const track = document.getElementById('carousel-track');
      if (track) {
        setCarouselWidth(track.scrollWidth / 2);
      }
    };
    
    // Calculate after a short delay to ensure DOM is ready
    setTimeout(calculateWidth, 100);
    
    // Also recalculate on window resize
    const handleResize = () => {
      setTimeout(calculateWidth, 100);
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="relative py-16 bg-[#080d14] overflow-hidden text-white min-h-auto">
      {/* Glowing Light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-yellow-300/10 blur-3xl rounded-full z-0" />

      {/* Floating Chess Pieces */}
      {isClient && studentElements.map((el, index) => (
        <motion.div
          key={index}
          initial={{ y: 0, rotate: 0 }}
          animate={{ y: [-50, -100, -50], rotate: [0, 10, 0] }}
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
          className="absolute flex flex-col items-center justify-center text-yellow-300 z-0 opacity-40 drop-shadow-[0_0_8px_rgba(212,175,55,0.8)] pointer-events-none"
        >
          <div className="text-3xl">👑</div>
          <div className="text-xs font-semibold text-yellow-200">Student</div>
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
          animate={isClient && carouselWidth > 0 ? { x: [-0, -carouselWidth] } : { x: [-0, -50] }}
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
