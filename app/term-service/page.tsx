'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { generateChessElements } from '@/components/utils/chessElements';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: [0.42, 0, 0.58, 1],
    },
  }),
};

export default function TermsPage() {
  const [chessElements, setChessElements] = useState([]);
  const [isClient, setIsClient] = useState(false);
  const chessTypes = ['pawn', 'knight', 'queen', 'rook', 'bishop', 'king'];
  const symbolMap = {
    king: '♔',
    queen: '♕',
    rook: '♖',
    bishop: '♗',
    knight: '♘',
    pawn: '♙',
  };

  useEffect(() => {
    setIsClient(true);
    const elements = generateChessElements(10).map((el, i) => ({
      ...el,
      type: chessTypes[i % chessTypes.length],
    }));
    setChessElements(elements);
  }, []);

  return (
    <section className="relative py-20 px-6 sm:px-10 bg-[#080d14] text-yellow-100 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-yellow-300/10 blur-3xl rounded-full z-0" />
      <div className="absolute inset-0 opacity-10 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[length:80px_80px] bg-[linear-gradient(to_right,#1f1f35_1px,transparent_1px),linear-gradient(to_bottom,#1f1f35_1px,transparent_1px)]" />
      </div>

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
          style={{ width: el.size, height: el.size, top: el.top, left: el.left }}
          className="absolute flex flex-col items-center justify-center text-yellow-300 z-0 opacity-50 drop-shadow-[0_0_8px_rgba(212,175,55,0.8)]"
        >
          <div className="text-4xl">{symbolMap[el.type]}</div>
        </motion.div>
      ))}

      <motion.div className="max-w-5xl mx-auto relative z-10" initial="hidden" animate="visible" variants={fadeUp} custom={0}>
        <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#bd853c] to-[#e0b86d] text-center mb-10">
          Terms of Service
        </h1>
        <p className="text-[#f3c47a] text-lg mb-6 leading-relaxed">
          These terms govern your use of ChessPrix. By accessing our services, you agree to the following:
        </p>

        <h2 className="text-2xl font-bold text-[#f2e79b] mb-4 mt-8">1. Acceptance of Terms</h2>
        <p className="text-[#ebcc88] leading-relaxed">
          By using our platform, you accept all terms outlined in this document. If you disagree, please do not use our services.
        </p>

        <h2 className="text-2xl font-bold text-[#f2e79b] mb-4 mt-8">2. User Conduct</h2>
        <p className="text-[#ebcc88] leading-relaxed">
          Users must not misuse, hack, or disrupt the platform. Any misconduct may result in termination of access.
        </p>

        <h2 className="text-2xl font-bold text-[#f2e79b] mb-4 mt-8">3. Intellectual Property</h2>
        <p className="text-[#ebcc88] leading-relaxed">
          All content, logos, and curriculum on ChessPrix are owned by us and protected by copyright law. Do not reproduce without permission.
        </p>

        <h2 className="text-2xl font-bold text-[#f2e79b] mb-4 mt-8">4. Limitation of Liability</h2>
        <p className="text-[#ebcc88] leading-relaxed">
          We are not liable for any losses or damages arising from the use of our services or content.
        </p>

        <h2 className="text-2xl font-bold text-[#f2e79b] mb-4 mt-8">5. Updates</h2>
        <p className="text-[#ebcc88] leading-relaxed">
          Terms may change from time to time. We encourage users to revisit this page regularly.
        </p>

        <h2 className="text-2xl font-bold text-[#f2e79b] mb-4 mt-8">6. Contact</h2>
        <p className="text-[#ebcc88] leading-relaxed">
          For legal queries, reach out at <span className="text-yellow-200 font-semibold">legal@chessprix.com</span>.
        </p>
      </motion.div>
    </section>
  );
}
