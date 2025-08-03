'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Deterministic random number generator
function seededRandom(seed: number): number {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

function generateFloatingElements(): Array<{
  size: string;
  top: string;
  left: string;
  delay: number;
  duration: number;
}> {
  return Array.from({ length: 14 }).map((_, i) => {
    const seed = i * 12345; // Deterministic seed based on index
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
    };
  });
}

const chessTypes = ['pawn', 'knight', 'queen', 'rook', 'bishop', 'king'];

const testimonials = [
  {
    quote:
      'ChessPrix’s program turned my daughter’s hobby into real skill. In just a few months she won her first trophy at school!',
    author: '– Parent of Ananya (Age 10)',
  },
  {
    quote:
      'My son’s confidence has soared. The coaches made lessons exciting and supportive, and now he’s playing chess every day.',
    author: '– Parent of Dev (Age 9)',
  },
  {
    quote:
      'I was nervous at first, but ChessPrix’s online tournaments gave me confidence. Now I compete regularly and love improving my rating!',
    author: '– Dev (Age 10), ChessPrix Student',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
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

export default function TestimonialsSection() {
  const [chessElements, setChessElements] = useState<Array<{
    size: string;
    top: string;
    left: string;
    delay: number;
    duration: number;
    type: string;
    color: string;
  }>>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const elements = generateFloatingElements().map((el, i) => ({
      ...el,
      type: chessTypes[i % chessTypes.length],
      color: 'text-yellow-300 drop-shadow-[0_0_8px_rgba(212,175,55,0.5)]',
    }));
    setChessElements(elements);
  }, []);

  return (
    <section className="relative py-14 px-6 sm:px-12 bg-[#080d14] text-yellow-100 overflow-hidden z-10">

      {/* Glowing Light */}
      <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-yellow-300/10 blur-3xl rounded-full z-0" />

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
          className={`absolute flex flex-col items-center justify-center z-0 opacity-50 ${element.color}`}
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

      {/* Heading */}
      <motion.h2
        className="text-center text-4xl sm:text-5xl font-extrabold mb-16 text-transparent bg-clip-text bg-gradient-to-r from-[#bd853c] to-[#e0b86d] drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] relative z-10"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        custom={0}
      >
        Testimonials & Success Quotes
      </motion.h2>

      {/* Testimonials in 1 Row on Desktop */}
      <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 z-10 relative">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            className="bg-[#121820] border border-[#d4af37]/30 rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-300 hover:scale-[1.03]"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={i + 1}
          >
            <p className="text-lg text-[#f2e79b] font-medium italic leading-relaxed mb-4">“{t.quote}”</p>
            <p className="text-sm text-[#ebcc88] text-right">{t.author}</p>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <motion.div
        className="mt-24 rounded-2xl bg-[#121820] border border-[#d4af37]/30 p-8 sm:p-12 text-center z-10 relative shadow-[0_0_30px_rgba(212,175,55,0.15)]"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        custom={testimonials.length + 1}
      >
        <h3 className="text-3xl sm:text-4xl font-semibold mb-6 text-[#f3c47a] drop-shadow-[0_0_6px_rgba(243,196,122,0.5)]">
          Join ChessPrix Today
        </h3>
        <p className="text-[#ebcc88] mb-4 text-lg max-w-3xl mx-auto leading-relaxed">
          Ready to watch your child thrive? <span className="text-[#f3c47a] font-medium">Book Your Free Trial</span> or{' '}
          <span className="text-[#f3c47a] font-medium">Learn More</span> about our programs.
        </p>
        <p className="text-[#f2e79b] mb-6">
          ChessPrix is where <em>Passion Refined Into eXellence</em> becomes a reality.
        </p>
        <p className="text-[#ebcc88] mb-8">
          Contact us at{' '}
          <a href="mailto:chessprixacademy@gmail.com" className="underline text-[#f3c47a]">chessprixacademy@gmail.com</a> or call{' '}
          <span className="text-[#f3c47a]">(123) 456-7890</span>
        </p>
        <button className="bg-[#472b12] text-white font-bold px-8 py-4 rounded-lg border-2 border-[#D4AF37] shadow-[0_4px_12px_rgba(212,175,55,0.4)] hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-[0_6px_16px_rgba(212,175,55,0.5)]">
          Book Free Demo Today
        </button>
      </motion.div>
    </section>
  );
}
