'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function MastersPathPage() {
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
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.42, 0, 0.58, 1] as const,
      },
    },
  };

  const glowVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.42, 0, 0.58, 1] as const,
      },
    },
  };

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
              ♟️ The Master's Path: Elite Training & Rating Booster
            </motion.h1>
            <motion.p 
              className="text-xl text-yellow-200"
              variants={fadeInUp}
              custom={1}
            >
              FIDE 1600+
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
                  <span>FIDE-rated players (1600 and above) aiming to break through rating plateaus.</span>
                </motion.li>
                <motion.li 
                  className="flex items-start text-yellow-100"
                  variants={fadeInUp}
                  custom={2}
                >
                  <span className="text-[#D4AF37] mr-3 mt-1">•</span>
                  <span>Students with solid knowledge of tactics, endgames, and openings, but who need to refine their thinking process and strategic depth.</span>
                </motion.li>
                <motion.li 
                  className="flex items-start text-yellow-100"
                  variants={fadeInUp}
                  custom={3}
                >
                  <span className="text-[#D4AF37] mr-3 mt-1">•</span>
                  <span>Competitors who aspire to reach Candidate Master (CM), FIDE Master (FM) or even IM/GM levels in the long run.</span>
                </motion.li>
                <motion.li 
                  className="flex items-start text-yellow-100"
                  variants={fadeInUp}
                  custom={4}
                >
                  <span className="text-[#D4AF37] mr-3 mt-1">•</span>
                  <span>Ambitious players looking to systematically train and approach chess like a professional.</span>
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
              Skill Level: The Master's Path
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
                    <span className="font-medium">1600+</span>
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
                    <span className="font-medium">Experienced & Ambitious:</span> Students with a FIDE rating who are serious about breaking rating plateaus. They have a strong foundation but lack a systematic approach to in-game thinking.
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
                    Implement a GM-Level Thinking System:
                  </h4>
                  <ul className="text-yellow-100 space-y-2">
                    <li className="flex items-start">
                      <span className="text-[#D4AF37] mr-2">•</span>
                      To move beyond memorization and develop a structured, systematic process for every stage of the game
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D4AF37] mr-2">•</span>
                      The focus is on a deeper understanding of strategy, calculation, and positional evaluation
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
                By the end of this level, players will:
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
                  <span>Use a structured, professional thinking process in every game.</span>
                </motion.li>
                <motion.li 
                  className="flex items-start text-yellow-100"
                  variants={fadeInUp}
                  custom={2}
                >
                  <span className="text-[#D4AF37] mr-3 mt-1">•</span>
                  <span>Deeply understand strategic ideas and apply them consistently.</span>
                </motion.li>
                <motion.li 
                  className="flex items-start text-yellow-100"
                  variants={fadeInUp}
                  custom={3}
                >
                  <span className="text-[#D4AF37] mr-3 mt-1">•</span>
                  <span>Excel at long-term planning, not just short-term tactics.</span>
                </motion.li>
                <motion.li 
                  className="flex items-start text-yellow-100"
                  variants={fadeInUp}
                  custom={4}
                >
                  <span className="text-[#D4AF37] mr-3 mt-1">•</span>
                  <span>Know how to prepare and perform in high-level rated tournaments.</span>
                </motion.li>
                <motion.li 
                  className="flex items-start text-yellow-100"
                  variants={fadeInUp}
                  custom={5}
                >
                  <span className="text-[#D4AF37] mr-3 mt-1">•</span>
                  <span>Actively build toward achieving titles like CM, FM, IM, or national level recognition.</span>
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
                    <span>Train with customized study plans focused on your weaknesses</span>
                  </motion.li>
                  <motion.li 
                    className="flex items-start text-yellow-100"
                    variants={fadeInUp}
                    custom={3}
                  >
                    <span className="text-[#D4AF37] mr-3 mt-1">•</span>
                    <span>Analyze elite GM games deeply (not just result-focused)</span>
                  </motion.li>
                  <motion.li 
                    className="flex items-start text-yellow-100"
                    variants={fadeInUp}
                    custom={4}
                  >
                    <span className="text-[#D4AF37] mr-3 mt-1">•</span>
                    <span>Work with a coach or sparring partner regularly</span>
                  </motion.li>
                  <motion.li 
                    className="flex items-start text-yellow-100"
                    variants={fadeInUp}
                    custom={5}
                  >
                    <span className="text-[#D4AF37] mr-3 mt-1">•</span>
                    <span>Practice in classical tournaments and long time control online events</span>
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
                    <span>Chessable (for opening memorization + understanding)</span>
                  </motion.li>
                  <motion.li 
                    className="flex items-start text-yellow-100"
                    variants={fadeInUp}
                    custom={4}
                  >
                    <span className="text-[#D4AF37] mr-3 mt-1">•</span>
                    <span>ChessBase (for in-depth analysis and databases)</span>
                  </motion.li>
                  <motion.li 
                    className="flex items-start text-yellow-100"
                    variants={fadeInUp}
                    custom={5}
                  >
                    <span className="text-[#D4AF37] mr-3 mt-1">•</span>
                    <span>Aimchess/DecodeChess (for insight-driven feedback)</span>
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