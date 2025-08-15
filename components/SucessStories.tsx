'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaTrophy } from 'react-icons/fa';
import { FiTrendingUp } from 'react-icons/fi';

// --- Chess Elements ---
const chessTypes = ['pawn', 'knight', 'queen', 'rook', 'bishop', 'king'];

function seededRandom(seed: number): number {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

function generateChessElements() {
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

// --- Testimonials Data ---
const testimonials = [
  {
    name: 'Anita Mathur',
    relation: 'Parent of Lakshay (Age 8)',
    review: 'The structured learning approach at ChessPrix is incredible! My son\'s chess skills improved dramatically in just 3 months.',
    achievement: { text: '+350 Rating Points', type: 'points' },
  },
  {
    name: 'Pradeep Kumar',
    relation: 'Parent of Muskan (Age 14)',
    review: 'Excellent coaching! My daughter won her first tournament after just 6 months of training with ChessPrix.',
    achievement: { text: 'State Champion', type: 'champion' },
  },
  {
    name: 'Seema Patel',
    relation: 'Parent of Ram (Age 11)',
    review: 'The online classes are engaging and interactive. My child looks forward to every session with his ChessPrix coach.',
    achievement: { text: '+280 Rating Points', type: 'points' },
  },
];

// --- Animation Variants ---
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: [0.42, 0, 0.58, 1] as const },
  }),
};

export default function SuccessStories() {
  const [chessElements, setChessElements] = useState<any[]>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setChessElements(generateChessElements());
  }, []);

  return (
    <section className="relative py-20 px-6 sm:px-10 bg-[#080d14] text-yellow-100 overflow-hidden">

      {/* Glowing Background Light */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-yellow-300/10 blur-3xl rounded-full z-0" />

      {/* Floating Chess Elements */}
      {isClient && chessElements.map((element, index) => (
        <motion.div
          key={index}
          initial={{ y: 0, rotate: 0 }}
          animate={{ y: [-100, -200, -100], rotate: [0, 15, 0] }}
          transition={{ duration: element.duration, delay: element.delay, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
          style={{ width: element.size, height: element.size, top: element.top, left: element.left }}
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
          <div className="text-xs font-semibold text-yellow-200">{element.type}</div>
        </motion.div>
      ))}

      {/* Grid Lines */}
      <div className="absolute inset-0 opacity-10 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[length:80px_80px] bg-[linear-gradient(to_right,#1f1f35_1px,transparent_1px),linear-gradient(to_bottom,#1f1f35_1px,transparent_1px)]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUp}
          custom={0}
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#bd853c] to-[#e0b86d] drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)]">
            Parent Success Stories
          </h2>
          <p className="text-[#ebcc88]">Real feedback from proud ChessPrix parents</p>
        </motion.div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-[#121820] border border-[#d4af37]/30 rounded-2xl p-6 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-300 hover:scale-105 flex flex-col"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              custom={index + 1}
            >
              {/* Header */}
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-[#d4af37]/20 mr-4 flex-shrink-0" />
                <div>
                  <p className="font-bold text-[#f2e79b]">{testimonial.name}</p>
                  <p className="text-sm text-[#ebcc88]/80">{testimonial.relation}</p>
                </div>
              </div>

              {/* Stars */}
              <div className="flex items-center mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar key={i} className="text-[#f3c47a]" />
                ))}
              </div>

              {/* Review */}
              <p className="text-[#ebcc88]/90 italic flex-grow">{testimonial.review}</p>

              {/* Achievement */}
              <div className="mt-6">
                {testimonial.achievement.type === 'points' ? (
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-green-300 bg-green-900/30 border border-green-500/30">
                    <FiTrendingUp /> {testimonial.achievement.text}
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-blue-300 bg-blue-900/30 border border-blue-500/30">
                    <FaTrophy /> {testimonial.achievement.text}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
