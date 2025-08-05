'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { generateChessElements } from '@/components/utils/chessElements';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

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

export default function PrivacyPolicy() {
  const [chessElements, setChessElements] = useState<ChessElement[]>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const elements = generateChessElements(12).map((el, i) => ({
      ...el,
      type: chessTypes[i % chessTypes.length],
    }));
    setChessElements(elements);
  }, []);

  return (
    <>
   
    <section className="relative py-20 px-6 sm:px-10 bg-[#080d14] text-yellow-100 overflow-hidden mt-10 min-h-auto">

      {/* Glowing Circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-yellow-300/10 blur-3xl rounded-full z-0" />

      {/* Grid Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[length:80px_80px] bg-[linear-gradient(to_right,#1f1f35_1px,transparent_1px),linear-gradient(to_bottom,#1f1f35_1px,transparent_1px)]" />
      </div>

      {/* Floating Chess Elements */}
      {isClient && chessElements.map((el, i) => (
        <motion.div
          key={i}
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

      {/* Content */}
      <motion.div
        className="max-w-5xl mx-auto relative z-10"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        custom={0}
      >
        <h1 className="text-4xl sm:text-5xl p-2 font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#bd853c] to-[#e0b86d] text-center mb-10">
          Privacy Policy
        </h1>

        <p className="text-[#f3c47a] text-lg mb-6 leading-relaxed">
          At ChessPrix, we respect your privacy. This Privacy Policy outlines how we collect, use, and protect your information.
        </p>

        <div className="space-y-10">
          <div>
            <h2 className="text-2xl font-bold text-[#f2e79b] mb-2">1. Information Collection</h2>
            <p className="text-[#ebcc88] leading-relaxed">
              We collect personal details like name, email, and contact number when you register or use our services.
              We may also collect analytics data to improve our services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#f2e79b] mb-2">2. Use of Information</h2>
            <p className="text-[#ebcc88] leading-relaxed">
              Information is used for communication, service improvements, and personalized learning. We do not sell
              or share your data with third parties without your consent.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#f2e79b] mb-2">3. Security</h2>
            <p className="text-[#ebcc88] leading-relaxed">
              Your data is stored securely with encryption protocols. However, no method is 100% secure, and we encourage
              strong passwords and confidentiality on your end as well.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#f2e79b] mb-2">4. Cookies</h2>
            <p className="text-[#ebcc88] leading-relaxed">
              We use cookies to enhance your experience on our site. You can choose to disable cookies via your browser settings.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#f2e79b] mb-2">5. Contact</h2>
            <p className="text-[#ebcc88] leading-relaxed">
              For any privacy-related questions or concerns, please email us at <span className="text-yellow-200 font-semibold">support@chessprix.com</span>.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
    
    </>
  );
}
