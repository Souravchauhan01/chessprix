'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function FoundationalPage() {
  const fadeInUp = {
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

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
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
        duration: 2,
        ease: [0.42, 0, 0.58, 1] as const,
      },
    },
  };

  const programs = [
    {
      title: "Beginner",
      rating: "Unrated - 800",
      experience: "No Experience: Students who are completely new to chess or have only learned the basic rules.",
      goal: "Learn the Fundamentals: To understand how the pieces move, basic checkmate patterns, and the very first tactical ideas (forks, pins).",
      href: "/beginner",
      color: "from-[#D4AF37] to-[#e0b86d]",
      icon: "♟️"
    },
    {
      title: "Intermediate",
      rating: "800 - 1000",
      experience: "Basic Competence: Students who can play a full game, understand basic tactics, and have some idea of opening principles.",
      goal: "Build a Foundation: To solidify tactical vision, understand simple checkmate drills, and learn a few reliable opening systems and basic endgame ideas.",
      href: "/intermediate",
      color: "from-[#bd853c] to-[#D4AF37]",
      icon: "♞"
    },
    {
      title: "Advanced",
      rating: "1000 - 1400",
      experience: "Club Player: Students who are comfortable with tactics, have a developed repertoire, and know some endgame theory. They have started playing in local tournaments.",
      goal: "Develop Strategic Understanding: To move beyond basic tactics, learn deeper strategic concepts (pawn structures, space), and refine endgame technique for converting advantages.",
      href: "/advanced",
      color: "from-[#a67c2e] to-[#bd853c]",
      icon: "♝"
    }
  ];

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
              Foundational & Strategic Development
            </motion.h1>
            <motion.p
              className="text-xl text-yellow-200 mb-8"
              variants={fadeInUp}
              custom={1}
            >
              Master the fundamentals and build a strong chess foundation
            </motion.p>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-[#D4AF37] to-[#e0b86d] mx-auto rounded-full"
              variants={fadeInUp}
              custom={2}
            />
          </motion.div>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {programs.map((program, index) => (
              <motion.div
                key={program.title}
                className="group relative"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <Link href={program.href}>
                  <div className="bg-[#0a0a0a]/80 backdrop-blur-xl border border-[#D4AF37]/20 rounded-xl shadow-2xl p-8 h-full hover:border-[#D4AF37]/40 hover:shadow-[0_8px_32px_rgba(212,175,55,0.15)] transition-all duration-500 relative overflow-hidden">
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                    
                    {/* Top Border Animation */}
                    <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${program.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
                    
                    <div className="relative z-10">
                      {/* Header */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="text-4xl">{program.icon}</div>
                        <div className="text-right">
                          <div className="text-sm text-[#D4AF37]/60 font-medium">Rating Range</div>
                          <div className="text-lg font-bold text-[#D4AF37]">{program.rating}</div>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-bold text-[#D4AF37] mb-4 group-hover:text-white transition-colors duration-300">
                        {program.title}
                      </h3>

                      {/* Experience Level */}
                      <div className="mb-4">
                        <div className="text-sm font-semibold text-yellow-200 mb-2">Experience Level</div>
                        <p className="text-sm text-yellow-200/80 leading-relaxed">
                          {program.experience}
                        </p>
                      </div>

                      {/* Learning Goal */}
                      <div className="mb-6">
                        <div className="text-sm font-semibold text-yellow-200 mb-2">Learning Goal</div>
                        <p className="text-sm text-yellow-200/80 leading-relaxed">
                          {program.goal}
                        </p>
                      </div>

                      {/* CTA Button */}
                      <div className="mt-auto">
                        <div className="inline-flex items-center gap-2 text-[#D4AF37] group-hover:text-white transition-colors duration-300 font-semibold">
                          <span>Learn More</span>
                          <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            className="text-center mt-12"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={4}
          >
            <p className="text-yellow-200/80 mb-6">
              Choose the program that best matches your current skill level
            </p>
            <Link
              href="/beginner"
              className="inline-flex items-center gap-2 bg-[#D4AF37] text-[#080d14] font-bold px-8 py-3 rounded-lg hover:bg-[#e0b86d] transition-colors duration-300"
            >
              <span>Start Your Journey</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
} 