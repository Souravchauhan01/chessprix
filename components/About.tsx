'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import ownerImg from '@/public/about1.jpg';
import { generateChessElements } from './utils/chessElements';

// === Types ===
type ChessType = 'pawn' | 'knight' | 'queen' | 'rook' | 'bishop' | 'king';

interface ChessElement {
  size: string;
  top: string;
  left: string;
  delay: number;
  duration: number;
  type: ChessType;
}

// === Constants ===
const chessTypes: ChessType[] = ['pawn', 'knight', 'queen', 'rook', 'bishop', 'king'];

const symbolMap: Record<ChessType, string> = {
  king: '♔',
  queen: '♕',
  rook: '♖',
  bishop: '♗',
  knight: '♘',
  pawn: '♙',
};

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

const benefits = [
  {
    icon: '🧠',
    title: 'Systematic Thinking',
    description: 'We don\'t just teach moves—we teach you how to think like a master with proven methodologies.',
  },
  {
    icon: '👨‍🏫',
    title: 'Expert Coaching',
    description: 'Learn from experienced coaches who have studied the game and implemented systematic approaches to achieve their own success.',
  },
  {
    icon: '🎯',
    title: 'Personalized Feedback',
    description: 'We analyze your individual games to identify specific weaknesses and create targeted improvement plans.',
  },
  {
    icon: '🏆',
    title: 'Tournament-Ready Skills',
    description: 'Our programs prepare you for real-world competition with practical skills and confidence needed to perform at your best.',
  },
  {
    icon: '⚡',
    title: 'Psychological Edge',
    description: 'We prepare you for the mental game, teaching time management, pressure handling, and blunder prevention.',
  },
  {
    icon: '🌟',
    title: 'Clear Path to Mastery',
    description: 'Structured programs from beginner to FIDE title level with measurable improvement at every stage.',
  },
];

export default function About() {
  const [chessElements, setChessElements] = useState<ChessElement[]>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const elements = generateChessElements(14).map((el, i) => ({
      ...el,
      type: chessTypes[i % chessTypes.length] as ChessType,
    }));
    setChessElements(elements);
  }, []);

  return (
    <section className="relative py-20 px-6 sm:mt-15 mt-8 sm:px-10 bg-[#080d14] text-yellow-100 overflow-hidden min-h-auto">
      
      {/* Glowing Light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-yellow-300/10 blur-3xl rounded-full z-0" />

      {/* Floating Chess Elements */}
      {isClient && chessElements.map((el, index) => (
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
          className="absolute flex flex-col items-center justify-center text-yellow-300 z-0 opacity-50 drop-shadow-[0_0_8px_rgba(212,175,55,0.8)]"
        >
          <div className="text-4xl">{symbolMap[el.type]}</div>
          <div className="text-xs font-semibold text-yellow-200 capitalize">{el.type}</div>
        </motion.div>
      ))}

      {/* Grid Lines */}
      <div className="absolute inset-0 opacity-10 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[length:80px_80px] bg-[linear-gradient(to_right,#1f1f35_1px,transparent_1px),linear-gradient(to_bottom,#1f1f35_1px,transparent_1px)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Main Heading */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl  font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#bd853c] to-[#e0b86d] drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] mb-6">
            About ChessPrix
          </h2>
          <p className="text-xl sm:text-2xl text-[#f3c47a] max-w-4xl mx-auto leading-relaxed">
            It's not just about learning chess. It's about learning how to think.
          </p>
        </motion.div>

        {/* Philosophy Section */}
        <motion.div
          className="mb-20"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={1}
        >
          <div className="bg-[#121820]/50 border border-[#d4af37]/30 rounded-2xl p-8 sm:p-12 backdrop-blur-sm">
            <h3 className="text-3xl sm:text-4xl font-bold text-[#f2e79b] mb-6 text-center">
              Our Philosophy — The ChessPrix Difference
            </h3>
            <p className="text-lg sm:text-xl text-[#ebcc88] leading-relaxed text-center max-w-4xl mx-auto">
              <strong>We Don't Just Teach Chess, We Teach a System.</strong> Many chess academies focus on teaching you what to do. 
              At ChessPrix, we focus on teaching you how to think. Our curriculum is built around a proven, systematic methodology 
              that gives you a clear and repeatable process for every stage of the game—from the opening to the endgame. 
              This is the difference between a good player and a great player, and it's the foundation of every one of our programs.
            </p>
          </div>
        </motion.div>

        {/* Journey Section */}
        <motion.div
          className="mb-20"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={2}
        >
          <div className="bg-[#121820]/50 border border-[#d4af37]/30 rounded-2xl p-8 sm:p-12 backdrop-blur-sm">
            <h3 className="text-3xl sm:text-4xl font-bold text-[#f2e79b] mb-6 text-center">
              Your Journey, Our Roadmap
            </h3>
            <p className="text-lg sm:text-xl text-[#ebcc88] leading-relaxed text-center max-w-4xl mx-auto">
              <strong>A Clear Path to Mastery:</strong> Whether you're taking your very first steps on the board or you're a seasoned 
              player aiming for a FIDE title, ChessPrix has a program for you. Our tiered approach is a comprehensive roadmap 
              for your chess journey. We ensure you build a strong foundation, develop a robust tournament-ready skill set, 
              and eventually master the elite-level thinking required to break through any rating plateau.
            </p>
          </div>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={3}
        >
          <h3 className="text-3xl sm:text-4xl font-bold text-[#f2e79b] mb-12 text-center">
            What Makes Us Stand Out
          </h3>
          
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-[#121820] border border-[#d4af37]/30 rounded-xl p-6 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-300 hover:scale-105"
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={index + 4}
              >
                <div className="text-4xl mb-4 text-center">{benefit.icon}</div>
                <h4 className="text-xl font-bold text-[#f2e79b] mb-3 text-center">
                  {benefit.title}
                </h4>
                <p className="text-[#ebcc88] text-md leading-relaxed text-center">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Founder Section */}
        <motion.div
          className="mt-20"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={10}
        >
          <div className="bg-[#121820]/50 border border-[#d4af37]/30 rounded-2xl p-8 sm:p-12 backdrop-blur-sm">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              {/* Founder Image */}
              <div className="w-56 h-56 rounded-full overflow-hidden border-4 border-[#d4af37]/40 shadow-[0_0_20px_rgba(212,175,55,0.3)] flex-shrink-0">
                <Image
                  src={ownerImg}
                  alt="Founder of ChessPrix"
                  width={224}
                  height={224}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Founder Info */}
              <div className="text-center lg:text-left">
                <h3 className="text-3xl font-bold text-[#f3c47a] mb-4">Sourav Singh Chauhan</h3>
                <p className="text-lg text-[#ebcc88] leading-relaxed max-w-2xl">
                  As the founder of ChessPrix, I envisioned a space where chess becomes a tool to inspire strategic minds, 
                  self-discipline, and global camaraderie. Every student has the potential to become a leader—and we build that, 
                  one move at a time. Our systematic approach to chess education transforms not just how students play the game, 
                  but how they think about challenges in life.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="mt-16 text-center"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={11}
        >
          <div className="bg-gradient-to-r from-[#472b12] to-[#8B4513] border-2 border-[#D4AF37] rounded-xl p-8 shadow-[0_4px_12px_rgba(212,175,55,0.4)]">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Ready to Master the Game and Master the Mind?
            </h3>
            <p className="text-[#f3c47a] text-lg mb-6 max-w-2xl mx-auto">
              Join hundreds of students who have already discovered the ChessPrix difference. 
              Start your systematic journey to chess mastery today.
            </p>
            <button className="bg-[#D4AF37] text-[#472b12] font-bold px-8 py-3 rounded-lg hover:bg-[#f0d998] transition-all duration-300 hover:scale-105 shadow-lg">
              Start Your Journey
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
