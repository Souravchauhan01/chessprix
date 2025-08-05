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

const ctaOptions = [
  {
    title: 'Start Your Journey',
    description: 'Begin your chess mastery with a free trial lesson',
    buttonText: 'Book Free Trial',
    buttonStyle: 'primary',
    icon: '🎯'
  },
  {
    title: 'Explore Programs',
    description: 'Discover our comprehensive chess curriculum',
    buttonText: 'View Programs',
    buttonStyle: 'secondary',
    icon: '📚'
  },
  {
    title: 'Talk to an Expert',
    description: 'Get personalized guidance from our chess masters',
    buttonText: 'Schedule Consultation',
    buttonStyle: 'primary',
    icon: '👨‍🏫'
  },
  {
    title: 'Join Community',
    description: 'Connect with fellow chess enthusiasts worldwide',
    buttonText: 'Join Now',
    buttonStyle: 'secondary',
    icon: '🤝'
  }
];

export default function FinalCTASection() {
  const [chessElements, setChessElements] = useState<ChessElement[]>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const elements = generateChessElements(10).map((el, i) => ({
      ...el,
      type: chessTypes[i % chessTypes.length] as ChessType,
    }));
    setChessElements(elements);
  }, []);

  return (
    <section className="relative py-20 px-6 sm:px-10 bg-[#080d14] text-yellow-100 overflow-hidden min-h-auto">
      
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
          <h2 className="text-4xl sm:text-5xl lg:text-6xl p-2 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#bd853c] to-[#e0b86d] drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] mb-6">
            Ready to Begin Your Chess Journey?
          </h2>
          <p className="text-xl sm:text-2xl text-[#f3c47a] max-w-4xl mx-auto leading-relaxed">
            Optimizing Calls to Action: Driving Conversion Through Strategic Engagement
          </p>
        </motion.div>

        {/* Urgency and Scarcity */}
        <motion.div
          className="mb-12 text-center"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={1}
        >
          <div className="bg-gradient-to-r from-[#472b12] to-[#8B4513] border-2 border-[#D4AF37] rounded-xl p-8 shadow-[0_4px_12px_rgba(212,175,55,0.4)]">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              ⏰ Limited Time Offer
            </h3>
            <p className="text-[#f3c47a] text-lg mb-4">
              Book your free trial lesson today and get <span className="font-bold text-[#D4AF37]">50% off</span> your first month!
            </p>
            <p className="text-[#ebcc88] text-sm">
              Only 10 spots available this week
            </p>
          </div>
        </motion.div>

        {/* CTA Options Grid */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={2}
        >
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {ctaOptions.map((option, index) => (
              <motion.div
                key={index}
                className="bg-[#121820] border border-[#d4af37]/30 rounded-xl p-6 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-300 hover:scale-105 text-center"
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={index + 3}
              >
                <div className="text-4xl mb-4">{option.icon}</div>
                <h4 className="text-xl font-bold text-[#f2e79b] mb-3">
                  {option.title}
                </h4>
                <p className="text-[#ebcc88] text-sm leading-relaxed mb-6">
                  {option.description}
                </p>
                <button 
                  className={`w-full font-bold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 ${
                    option.buttonStyle === 'primary' 
                      ? 'bg-[#D4AF37] text-[#472b12] hover:bg-[#f0d998] shadow-lg' 
                      : 'border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#472b12]'
                  }`}
                >
                  {option.buttonText}
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Social Proof */}
        <motion.div
          className="mt-16 text-center"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={7}
        >
          <div className="bg-[#121820]/50 border border-[#d4af37]/30 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#f2e79b] mb-6">
              Trusted by 500+ Families Worldwide
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
              <div className="text-[#ebcc88]">
                <div className="text-2xl font-bold text-[#D4AF37]">98%</div>
                <div>Parent Satisfaction Rate</div>
              </div>
              <div className="text-[#ebcc88]">
                <div className="text-2xl font-bold text-[#D4AF37]">4.9/5</div>
                <div>Average Student Rating</div>
              </div>
              <div className="text-[#ebcc88]">
                <div className="text-2xl font-bold text-[#D4AF37]">85%</div>
                <div>Students Continue After Trial</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          className="mt-12 text-center"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={8}
        >
          <div className="bg-gradient-to-r from-[#472b12] to-[#8B4513] border-2 border-[#D4AF37] rounded-xl p-8 shadow-[0_4px_12px_rgba(212,175,55,0.4)]">
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Your Chess Journey Starts Here
            </h3>
            <p className="text-[#f3c47a] text-lg mb-8 max-w-2xl mx-auto">
              Don't wait to unlock your child's potential. Join ChessPrix today and watch them transform into confident, strategic thinkers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#D4AF37] text-[#472b12] font-bold px-8 py-4 rounded-lg hover:bg-[#f0d998] transition-all duration-300 hover:scale-105 shadow-lg text-lg">
                Start Free Trial Now
              </button>
              <button className="border-2 border-[#D4AF37] text-[#D4AF37] font-bold px-8 py-4 rounded-lg hover:bg-[#D4AF37] hover:text-[#472b12] transition-all duration-300 hover:scale-105 text-lg">
                Contact Us
              </button>
            </div>
            <p className="text-[#ebcc88] text-sm mt-4">
              📧 chessprixacademy@gmail.com | 📞 (123) 456-7890
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
} 