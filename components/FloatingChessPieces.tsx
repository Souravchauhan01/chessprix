// components/FloatingChessPieces.tsx
'use client';

import { motion } from 'framer-motion';

const chessTypes = ['pawn', 'knight', 'queen', 'rook', 'bishop', 'king'];

const chessElements = Array.from({ length: 16 }).map((_, i) => ({
  size: `${Math.floor(Math.random() * 60) + 40}px`,
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  delay: Math.random() * 3,
  duration: Math.random() * 5 + 5,
  type: chessTypes[i % chessTypes.length],
}));

export default function FloatingChessPieces() {
  return (
    <>
      {/* Optional glowing background */}
      <div className="fixed top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-yellow-300/10 blur-3xl rounded-full z-0 pointer-events-none" />
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
          className="fixed flex flex-col items-center justify-center text-yellow-300 z-0 opacity-50 pointer-events-none drop-shadow-[0_0_8px_rgba(212,175,55,0.8)]"
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
    </>
  );
}
