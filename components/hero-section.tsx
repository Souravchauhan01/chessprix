'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import img from "@/public/about1.jpg";
import { Typewriter } from 'react-simple-typewriter';
import { Easings } from "framer-motion";


// Floating chess piece config (gold tones)
const chessElements = Array.from({ length: 12 }).map((_, i) => ({
  size: `${Math.floor(Math.random() * 60) + 40}px`,
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  delay: Math.random() * 3,
  duration: Math.random() * 5 + 5,
  type: i % 3 === 0 ? 'pawn' : i % 2 === 0 ? 'knight' : 'queen',
  color: i % 2 === 0 ? 'text-yellow-400' : 'text-yellow-300',
}));

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3,
      duration: 0.6,
      ease: Easings.easeInOut, // ✅ this works with the current type system
    },
  },
};

// 

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-[#0e0d1b] via-[#1c1a2e] to-[#25233e] flex items-center justify-center px-4 sm:px-6 md:px-10 py-16 sm:py-24">

      {/* Glowing Pawn Light */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-yellow-400/10 blur-3xl rounded-full z-0" />

      {/* Floating Chess Elements */}
      {chessElements.map((element, index) => (
        <motion.div
          key={index}
          initial={{ y: 0, rotate: 0 }}
          animate={{ y: [-100, -200, -100], rotate: [0, 10, 0] }}
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
          className={`absolute opacity-20 z-0 ${element.color}`}
        >
          {element.type === 'pawn' && (
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 8.5c0 1.14-1.06 2.5-3 2.5-1.35 0-2-.5-3-.5s-1.65.5-3 .5c-1.94 0-3-1.36-3-2.5 0-1.09 1.06-2.5 3-2.5 1.35 0 2 .5 3 .5s1.65-.5 3-.5c1.94 0 3 1.41 3 2.5z" />
            </svg>
          )}
          {element.type === 'knight' && (
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 8.5c0 1.14-1.06 2.5-3 2.5-1.35 0-2-.5-3-.5s-1.65.5-3 .5c-1.94 0-3-1.36-3-2.5 0-1.09 1.06-2.5 3-2.5 1.35 0 2 .5 3 .5s1.65-.5 3-.5c1.94 0 3 1.41 3 2.5z" />
              <path d="M14 10.5c0 .82-.67 1.5-1.5 1.5s-1.5-.68-1.5-1.5.67-1.5 1.5-1.5 1.5.68 1.5 1.5z" />
            </svg>
          )}
          {element.type === 'queen' && (
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M18 3a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12zm-6 3a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm-7 8a1 1 0 0 0-1 1v4h2v-4a1 1 0 0 0-1-1zm14 0a1 1 0 0 0-1 1v4h2v-4a1 1 0 0 0-1-1z" />
            </svg>
          )}
        </motion.div>
      ))}

      {/* Checkerboard Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[length:80px_80px] bg-[linear-gradient(to_right,#1f1f35_1px,transparent_1px),linear-gradient(to_bottom,#1f1f35_1px,transparent_1px)]"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl gap-12">
        {/* Left Content */}
        <motion.div
          className="text-center lg:text-left w-full max-w-2xl"
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-200 drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)]"
            variants={fadeUp}
            custom={1}
          >
            ChessPrix
          </motion.h1>

          <motion.h2
            className="mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-200 to-yellow-100"
            variants={fadeUp}
            custom={1.5}
          >
            <Typewriter
              words={['Passion Refined Into eXcellence']}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={0}
              delaySpeed={2000}
            />
          </motion.h2>

          <motion.p
            className="mt-6 text-base sm:text-lg md:text-xl text-yellow-100 leading-relaxed"
            variants={fadeUp}
            custom={2}
          >
            At ChessPrix, we ignite young minds and shape future champions.
            We believe every child has untapped potential, and we channel that potential
            through the royal game of chess.
          </motion.p>

          <motion.p
            className="mt-4 text-sm sm:text-base md:text-lg text-yellow-200 italic"
            variants={fadeUp}
            custom={3}
          >
            Our interactive online lessons, led by world-class FIDE-rated coaches,
            make learning both fun and transformative.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            variants={fadeUp}
            custom={4}
          >
            <button className="w-full sm:w-auto bg-gradient-to-r from-yellow-400 to-yellow-300 text-purple-900 font-bold px-8 py-4 rounded-lg shadow-lg hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-yellow-300/50 focus:outline-none focus:ring-4 focus:ring-yellow-300/50 group relative overflow-hidden">
              <span className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Join Now
              </span>
            </button>

            <button className="w-full sm:w-auto relative px-8 py-4 rounded-lg text-base font-bold text-yellow-300 border-2 border-yellow-300 overflow-hidden z-10 group hover:text-purple-900 transition-all duration-300 ease-in-out">
              <span className="absolute inset-0 bg-yellow-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></span>
              <span className="relative z-10 flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Learn More
              </span>
            </button>
          </motion.div>

          {/* Star Badge */}
          <motion.div 
            className="mt-10 inline-flex items-center gap-2 bg-yellow-100/5 backdrop-blur-sm px-4 py-2 rounded-full border border-yellow-400"
            variants={fadeUp}
            custom={5}
          >
            <div className="flex text-yellow-300">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-yellow-200 font-medium">Trusted by 1000+ students</span>
          </motion.div>
        </motion.div>

        {/* Right Side Image */}
        <motion.div
          className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 to-purple-400 rounded-2xl opacity-20 blur-xl"></div>
          <div className="relative overflow-hidden rounded-xl shadow-2xl border-2 border-yellow-300/20">
            <Image
              src={img}
              alt="Chess student"
              width={600}
              height={600}
              className="w-full h-auto object-cover"
              priority
            />
            <div className="absolute top-4 left-4 text-yellow-300 w-10 h-10">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 8.5c0 1.14-1.06 2.5-3 2.5-1.35 0-2-.5-3-.5s-1.65.5-3 .5c-1.94 0-3-1.36-3-2.5 0-1.09 1.06-2.5 3-2.5 1.35 0 2 .5 3 .5s1.65-.5 3-.5c1.94 0 3 1.41 3 2.5z" />
              </svg>
            </div>
            <div className="absolute bottom-4 right-4 text-yellow-200 w-10 h-10">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 3a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12zm-6 3a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm-7 8a1 1 0 0 0-1 1v4h2v-4a1 1 0 0 0-1-1zm14 0a1 1 0 0 0-1 1v4h2v-4a1 1 0 0 0-1-1z" />
              </svg>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
