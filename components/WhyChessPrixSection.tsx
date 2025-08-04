'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
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
    icon: '🎯',
    title: 'Personalized Coaching',
    description: 'Expert FIDE-rated coaches analyze your games and create targeted improvement plans.',
  },
  {
    icon: '🏆',
    title: 'Tournament Ready',
    description: 'Develop the mental toughness and practical skills needed for competitive success.',
  },
  {
    icon: '📈',
    title: 'Clear Progression',
    description: 'Structured programs from beginner to master level with measurable improvement.',
  },
  {
    icon: '⚡',
    title: 'Psychological Edge',
    description: 'Learn time management, pressure handling, and blunder prevention techniques.',
  },
  {
    icon: '🌟',
    title: 'Proven Results',
    description: 'Our students consistently achieve tournament success and rapid rating improvements.',
  },
];

export default function WhyChessPrixSection() {
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
    <section id="why-chessprix" className="relative py-20 px-6 sm:px-10 bg-[#080d14] text-yellow-100 overflow-hidden min-h-screen">
      
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
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#bd853c] to-[#e0b86d] drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] mb-6">
            Why ChessPrix?
          </h2>
          <p className="text-xl sm:text-2xl text-[#f3c47a] max-w-4xl mx-auto leading-relaxed">
            Master the Game. Master the Mind.
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
              We Don't Just Teach Chess, We Teach a System
            </h3>
            <p className="text-lg sm:text-xl text-[#ebcc88] leading-relaxed text-center max-w-4xl mx-auto">
              Many chess academies focus on teaching you what to do. At ChessPrix, we focus on teaching you how to think. 
              Our curriculum is built around a proven, systematic methodology that gives you a clear and repeatable process 
              for every stage of the game—from the opening to the endgame. This is the difference between a good player 
              and a great player, and it's the foundation of every one of our programs.
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
              A Clear Path to Mastery
            </h3>
            <p className="text-lg sm:text-xl text-[#ebcc88] leading-relaxed text-center max-w-4xl mx-auto">
              Whether you're taking your very first steps on the board or you're a seasoned player aiming for a FIDE title, 
              ChessPrix has a program for you. Our tiered approach is a comprehensive roadmap for your chess journey. 
              We ensure you build a strong foundation, develop a robust tournament-ready skill set, and eventually master 
              the elite-level thinking required to break through any rating plateau.
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
            Why Our Students Succeed
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

        {/* Call to Action */}
        <motion.div
          className="mt-16 text-center"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={10}
        >
          <div className="bg-gradient-to-r from-[#472b12] to-[#8B4513] border-2 border-[#D4AF37] rounded-xl p-8 shadow-[0_4px_12px_rgba(212,175,55,0.4)]">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Ready to Transform Your Chess Game?
            </h3>
            <p className="text-[#f3c47a] text-lg mb-6 max-w-2xl mx-auto">
              Join hundreds of students who have already discovered the ChessPrix difference. 
              Start your journey to chess mastery today.
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