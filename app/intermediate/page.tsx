'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function IntermediatePage() {
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
              ♟️ Intermediate Level
            </motion.h1>
            <motion.p 
              className="text-xl text-yellow-200"
              variants={fadeInUp}
              custom={1}
            >
              Rating: 800 – 1000
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
                This level is suited for:
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
                  <span>Players who have mastered the basics and can play legal games without assistance.</span>
                </motion.li>
                <motion.li 
                  className="flex items-start text-yellow-100"
                  variants={fadeInUp}
                  custom={2}
                >
                  <span className="text-[#D4AF37] mr-3 mt-1">•</span>
                  <span>Students who understand common tactics like forks and pins but struggle to spot them consistently.</span>
                </motion.li>
                <motion.li 
                  className="flex items-start text-yellow-100"
                  variants={fadeInUp}
                  custom={3}
                >
                  <span className="text-[#D4AF37] mr-3 mt-1">•</span>
                  <span>Learners who have played several games and are beginning to think more seriously about improvement.</span>
                </motion.li>
                <motion.li 
                  className="flex items-start text-yellow-100"
                  variants={fadeInUp}
                  custom={4}
                >
                  <span className="text-[#D4AF37] mr-3 mt-1">•</span>
                  <span>Players who are familiar with simple openings but don't yet have a structured opening repertoire.</span>
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
              Skill Level: Intermediate
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
                    <span className="font-medium">800 - 1000</span>
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
                    <span className="font-medium">Basic Competence:</span> Students who can play a full game, understand basic tactics, and have some idea of opening principles.
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
                    Build a Foundation:
                  </h4>
                  <ul className="text-yellow-100 space-y-2">
                    <li className="flex items-start">
                      <span className="text-[#D4AF37] mr-2">•</span>
                      To solidify tactical vision
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D4AF37] mr-2">•</span>
                      Understand simple checkmate drills
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D4AF37] mr-2">•</span>
                      Learn a few reliable opening systems and basic endgame ideas
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
                  <span>Play consistent, principled openings and reach safe middlegames.</span>
                </motion.li>
                <motion.li 
                  className="flex items-start text-yellow-100"
                  variants={fadeInUp}
                  custom={2}
                >
                  <span className="text-[#D4AF37] mr-3 mt-1">•</span>
                  <span>Recognize and use basic tactical patterns with greater accuracy.</span>
                </motion.li>
                <motion.li 
                  className="flex items-start text-yellow-100"
                  variants={fadeInUp}
                  custom={3}
                >
                  <span className="text-[#D4AF37] mr-3 mt-1">•</span>
                  <span>Checkmate efficiently with common piece combinations.</span>
                </motion.li>
                <motion.li 
                  className="flex items-start text-yellow-100"
                  variants={fadeInUp}
                  custom={4}
                >
                  <span className="text-[#D4AF37] mr-3 mt-1">•</span>
                  <span>Handle elementary endgames with confidence.</span>
                </motion.li>
                <motion.li 
                  className="flex items-start text-yellow-100"
                  variants={fadeInUp}
                  custom={5}
                >
                  <span className="text-[#D4AF37] mr-3 mt-1">•</span>
                  <span>Think more proactively and reduce blunders.</span>
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
            transition={{ delay: 0.8 }}
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
                    <span>Daily tactics training (on Lichess, Chess.com, or ChessKid)</span>
                  </motion.li>
                  <motion.li 
                    className="flex items-start text-yellow-100"
                    variants={fadeInUp}
                    custom={3}
                  >
                    <span className="text-[#D4AF37] mr-3 mt-1">•</span>
                    <span>Playing longer time control games (15+10, 30 min) to build thinking discipline</span>
                  </motion.li>
                  <motion.li 
                    className="flex items-start text-yellow-100"
                    variants={fadeInUp}
                    custom={4}
                  >
                    <span className="text-[#D4AF37] mr-3 mt-1">•</span>
                    <span>Solving endgame checkmate drills</span>
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
                  Learning Resources:
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
                    <span>Studying annotated beginner games to see principles in action</span>
                  </motion.li>
                  <motion.li 
                    className="flex items-start text-yellow-100"
                    variants={fadeInUp}
                    custom={4}
                  >
                    <span className="text-[#D4AF37] mr-3 mt-1">•</span>
                    <span>Reviewing own games (especially losses) to find repeated mistakes</span>
                  </motion.li>
                  <motion.li 
                    className="flex items-start text-yellow-100"
                    variants={fadeInUp}
                    custom={5}
                  >
                    <span className="text-[#D4AF37] mr-3 mt-1">•</span>
                    <span>Watching intermediate chess YouTube channels (like Hanging Pawns, GothamChess's older videos)</span>
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