'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

/* ---------- Floating-piece helpers (identical to Features) ---------- */
const chessTypes = ['pawn', 'knight', 'queen', 'rook', 'bishop', 'king'];

function seededRandom(seed: number): number {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

function generateChessElements(): Array<{
  size: string;
  top: string;
  left: string;
  delay: number;
  duration: number;
  type: string;
  color: string;
}> {
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

/* ----------------------- Motion variants ----------------------- */
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.8,
      ease: [0.42, 0, 0.58, 1] as const,
    },
  }),
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 50 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] as const },
  },
};

const glowVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.2, ease: [0.42, 0, 0.58, 1] as const },
  },
};

/* --------------------------- Component -------------------------- */
export default function FideInPage() {
  const [chessElements, setChessElements] = useState<
    Array<{
      size: string;
      top: string;
      left: string;
      delay: number;
      duration: number;
      type: string;
      color: string;
    }>
  >([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setChessElements(generateChessElements());
  }, []);

  return (
    <>
      <Navbar />
      <div className="relative w-full bg-[#080d14] text-yellow-100 px-6 sm:px-10 py-20 overflow-hidden pt-32">
        {/* Glowing Light */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-yellow-300/10 blur-3xl rounded-full z-0"
          variants={glowVariants}
          initial="hidden"
          animate="visible"
        />

        {/* Floating Chess Pieces */}
        {isClient &&
          chessElements.map((el, idx) => (
            <motion.div
              key={idx}
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
              className={`absolute flex flex-col items-center justify-center opacity-50 z-0 ${el.color}`}
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

        {/* Grid Lines */}
        <motion.div
          className="absolute inset-0 opacity-10 pointer-events-none z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          <div className="absolute inset-0 bg-[length:80px_80px] bg-[linear-gradient(to_right,#1f1f35_1px,transparent_1px),linear-gradient(to_bottom,#1f1f35_1px,transparent_1px)]" />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 
              className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#bd853c] to-[#e0b86d] drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] mb-4"
              variants={fadeInUp}
              custom={0}
            >
              ♟️ FIDE Rating & Tournament Preparation
            </motion.h1>
            <motion.p 
              className="text-xl text-yellow-200"
              variants={fadeInUp}
              custom={1}
            >
              Rating: 1400 – 1600
            </motion.p>
          </motion.div>

          {/* Who is this level for? */}
          <motion.div 
            className="bg-[#0a0a0a]/80 backdrop-blur-xl border border-[#D4AF37]/20 rounded-lg shadow-2xl p-8 mb-8"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
          >
            <motion.h2 
              className="text-2xl font-semibold text-[#D4AF37] mb-6"
              variants={fadeInUp}
              custom={0}
            >
              🎯 Who is this level for?
            </motion.h2>
            
            <motion.div 
              className="space-y-4"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.p 
                className="text-yellow-100 text-lg mb-6"
                variants={fadeInUp}
                custom={0}
              >
                This level is designed for:
              </motion.p>
              
              <motion.ul 
                className="space-y-3"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                <motion.li 
                  className="flex items-start text-yellow-100"
                  variants={fadeInUp}
                  custom={1}
                >
                  <span className="text-[#D4AF37] mr-3 mt-1">•</span>
                  <span>Serious chess students who are ready to move beyond casual and club-level play.</span>
                </motion.li>
                <motion.li 
                  className="flex items-start text-yellow-100"
                  variants={fadeInUp}
                  custom={2}
                >
                  <span className="text-[#D4AF37] mr-3 mt-1">•</span>
                  <span>Players with a strong tactical and positional foundation who now want to pursue official FIDE ratings.</span>
                </motion.li>
                <motion.li 
                  className="flex items-start text-yellow-100"
                  variants={fadeInUp}
                  custom={3}
                >
                  <span className="text-[#D4AF37] mr-3 mt-1">•</span>
                  <span>Students who have played in local tournaments and are preparing for national/state/FIDE-rated events.</span>
                </motion.li>
                <motion.li 
                  className="flex items-start text-yellow-100"
                  variants={fadeInUp}
                  custom={4}
                >
                  <span className="text-[#D4AF37] mr-3 mt-1">•</span>
                  <span>Learners who want to improve competitive performance, not just chess knowledge.</span>
                </motion.li>
              </motion.ul>
            </motion.div>
          </motion.div>

          {/* Skill Level Details */}
          <motion.div 
            className="bg-[#0a0a0a]/80 backdrop-blur-xl border border-[#D4AF37]/20 rounded-lg shadow-2xl p-8 mb-8"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.6 }}
          >
            <motion.h2 
              className="text-2xl font-semibold text-[#D4AF37] mb-6"
              variants={fadeInUp}
              custom={0}
            >
              Skill Level: FIDE Rating & Tournament Prep
            </motion.h2>
            
            <motion.div 
              className="grid md:grid-cols-2 gap-8"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <div className="space-y-4">
                <motion.div 
                  className="bg-[#1a1a1a]/60 border border-[#D4AF37]/30 p-6 rounded-lg"
                  variants={fadeInUp}
                  custom={0}
                  whileHover={{ scale: 1.02, borderColor: '#D4AF37' }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-lg font-semibold text-[#D4AF37] mb-3">
                    Rating Range
                  </h3>
                  <p className="text-yellow-100">
                    <span className="font-medium">1400 - 1600</span>
                  </p>
                </motion.div>

                <motion.div 
                  className="bg-[#1a1a1a]/60 border border-[#D4AF37]/30 p-6 rounded-lg"
                  variants={fadeInUp}
                  custom={1}
                  whileHover={{ scale: 1.02, borderColor: '#D4AF37' }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-lg font-semibold text-[#D4AF37] mb-3">
                    Experience Level
                  </h3>
                  <p className="text-yellow-100">
                    <span className="font-medium">Aspiring Competitor:</span> Students who are serious about getting a FIDE rating and competing. They have a solid foundation but need to learn tournament-specific skills.
                  </p>
                </motion.div>
              </div>

              <motion.div 
                className="bg-[#1a1a1a]/60 border border-[#D4AF37]/30 p-6 rounded-lg"
                variants={fadeInUp}
                custom={2}
                whileHover={{ scale: 1.02, borderColor: '#D4AF37' }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-lg font-semibold text-[#D4AF37] mb-3">
                  Learning Objectives
                </h3>
                <div className="space-y-3">
                  <h4 className="font-medium text-[#e0b86d]">
                    Master Tournament Skills:
                  </h4>
                  <ul className="text-yellow-100 space-y-2">
                    <li className="flex items-start">
                      <span className="text-[#D4AF37] mr-2">•</span>
                      To prepare for the psychological and practical challenges of tournament play
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D4AF37] mr-2">•</span>
                      This includes time management, notation, using a clock
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D4AF37] mr-2">•</span>
                      Understanding the Swiss system format
                    </li>
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Learning Outcomes */}
          <motion.div 
            className="bg-[#0a0a0a]/80 backdrop-blur-xl border border-[#D4AF37]/20 rounded-lg shadow-2xl p-8 mb-8"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.8 }}
          >
            <motion.h2 
              className="text-2xl font-semibold text-[#D4AF37] mb-6"
              variants={fadeInUp}
              custom={0}
            >
              🧠 Learning Outcomes
            </motion.h2>
            
            <motion.div 
              className="space-y-4"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.p 
                className="text-yellow-100 text-lg mb-6"
                variants={fadeInUp}
                custom={0}
              >
                By the end of this level, students will be able to:
              </motion.p>
              
              <motion.ul 
                className="space-y-3"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                <motion.li 
                  className="flex items-start text-yellow-100"
                  variants={fadeInUp}
                  custom={1}
                >
                  <span className="text-[#D4AF37] mr-3 mt-1">•</span>
                  <span>Participate confidently in FIDE-rated tournaments.</span>
                </motion.li>
                <motion.li 
                  className="flex items-start text-yellow-100"
                  variants={fadeInUp}
                  custom={2}
                >
                  <span className="text-[#D4AF37] mr-3 mt-1">•</span>
                  <span>Use a chess clock properly and manage time in classical and rapid games.</span>
                </motion.li>
                <motion.li 
                  className="flex items-start text-yellow-100"
                  variants={fadeInUp}
                  custom={3}
                >
                  <span className="text-[#D4AF37] mr-3 mt-1">•</span>
                  <span>Record games using accurate notation.</span>
                </motion.li>
                <motion.li 
                  className="flex items-start text-yellow-100"
                  variants={fadeInUp}
                  custom={4}
                >
                  <span className="text-[#D4AF37] mr-3 mt-1">•</span>
                  <span>Handle tournament stress, adapt to unfamiliar opponents, and recover from tough games.</span>
                </motion.li>
                <motion.li 
                  className="flex items-start text-yellow-100"
                  variants={fadeInUp}
                  custom={5}
                >
                  <span className="text-[#D4AF37] mr-3 mt-1">•</span>
                  <span>Play consistent, principled chess throughout all game phases (opening → middlegame → endgame).</span>
                </motion.li>
                <motion.li 
                  className="flex items-start text-yellow-100"
                  variants={fadeInUp}
                  custom={6}
                >
                  <span className="text-[#D4AF37] mr-3 mt-1">•</span>
                  <span>Reach or approach a FIDE rating between 1400–1600 with a path to continue progressing.</span>
                </motion.li>
              </motion.ul>
            </motion.div>
          </motion.div>

          {/* Suggested Activities */}
          <motion.div 
            className="bg-[#0a0a0a]/80 backdrop-blur-xl border border-[#D4AF37]/20 rounded-lg shadow-2xl p-8"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.0 }}
          >
            <motion.h2 
              className="text-2xl font-semibold text-[#D4AF37] mb-6"
              variants={fadeInUp}
              custom={0}
            >
              🧩 Suggested Activities
            </motion.h2>
            
            <motion.div 
              className="grid md:grid-cols-2 gap-8"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.div 
                className="space-y-4"
                variants={fadeInUp}
                custom={0}
              >
                <motion.h3 
                  className="text-lg font-semibold text-[#e0b86d] mb-4"
                  variants={fadeInUp}
                  custom={1}
                >
                  Practice Activities:
                </motion.h3>
                <motion.ul 
                  className="space-y-3"
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.li 
                    className="flex items-start text-yellow-100"
                    variants={fadeInUp}
                    custom={2}
                  >
                    <span className="text-[#D4AF37] mr-3 mt-1">•</span>
                    <span>Play regular classical games (30+10, 60+30) with notation and analysis</span>
                  </motion.li>
                  <motion.li 
                    className="flex items-start text-yellow-100"
                    variants={fadeInUp}
                    custom={3}
                  >
                    <span className="text-[#D4AF37] mr-3 mt-1">•</span>
                    <span>Participate in FIDE-rated tournaments or online FIDE arenas (if applicable)</span>
                  </motion.li>
                  <motion.li 
                    className="flex items-start text-yellow-100"
                    variants={fadeInUp}
                    custom={4}
                  >
                    <span className="text-[#D4AF37] mr-3 mt-1">•</span>
                    <span>Analyze top-level games from candidates, world championship, or strong juniors</span>
                  </motion.li>
                </motion.ul>
              </motion.div>

              <motion.div 
                className="space-y-4"
                variants={fadeInUp}
                custom={1}
              >
                <motion.h3 
                  className="text-lg font-semibold text-[#e0b86d] mb-4"
                  variants={fadeInUp}
                  custom={2}
                >
                  Learning Tools:
                </motion.h3>
                <motion.ul 
                  className="space-y-3"
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.li 
                    className="flex items-start text-yellow-100"
                    variants={fadeInUp}
                    custom={3}
                  >
                    <span className="text-[#D4AF37] mr-3 mt-1">•</span>
                    <span>ChessBase or Lichess Study to organize prep</span>
                  </motion.li>
                  <motion.li 
                    className="flex items-start text-yellow-100"
                    variants={fadeInUp}
                    custom={4}
                  >
                    <span className="text-[#D4AF37] mr-3 mt-1">•</span>
                    <span>Chess.com Classroom for simulated tournament practice</span>
                  </motion.li>
                  <motion.li 
                    className="flex items-start text-yellow-100"
                    variants={fadeInUp}
                    custom={5}
                  >
                    <span className="text-[#D4AF37] mr-3 mt-1">•</span>
                    <span>Simulate tournament rounds at home with a clock and time control</span>
                  </motion.li>
                </motion.ul>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
} 