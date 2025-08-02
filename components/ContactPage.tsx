'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import vector from '@/public/contact.png';

type ChessType = 'pawn' | 'knight' | 'queen' | 'rook' | 'bishop' | 'king';

interface ChessElement {
  size: string;
  top: string;
  left: string;
  delay: number;
  duration: number;
  type: ChessType;
}

const chessTypes: ChessType[] = ['pawn', 'knight', 'queen', 'rook', 'bishop', 'king'];

const symbolMap: Record<ChessType, string> = {
  king: '♔',
  queen: '♕',
  rook: '♖',
  bishop: '♗',
  knight: '♘',
  pawn: '♙',
};

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
    },
  }),
};

export default function ContactPage() {
  const [chessElements, setChessElements] = useState<ChessElement[]>([]);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const isMobile = window.innerWidth < 640;
    const count = isMobile ? 6 : 16;

    const elements: ChessElement[] = Array.from({ length: count }).map((_, i) => ({
      size: `${Math.floor(Math.random() * 60) + 40}px`,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 3,
      duration: Math.random() * 5 + 5,
      type: chessTypes[i % chessTypes.length],
    }));

    setChessElements(elements);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      await fetch('https://formspree.io/f/xkgzvgdn', {
        method: 'POST',
        body: data,
        headers: {
          Accept: 'application/json',
        },
      });

      setFormSubmitted(true);
      form.reset();

      setTimeout(() => {
        setFormSubmitted(false);
      }, 4000);
    } catch (error) {
      alert('Failed to send message. Please try again later.');
    }
  };

  const handleCloseModal = () => {
    setFormSubmitted(false);
  };

  const handleOutsideClick = (e: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      handleCloseModal();
    }
  };

  useEffect(() => {
    if (formSubmitted) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }

    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [formSubmitted]);

  return (
    <div className="relative min-h-screen bg-[#1a1a1a] px-6 py-12 md:px-16 text-white sm:mt-25 mt-20 overflow-hidden">
      {/* Glowing Light */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-yellow-300/10 blur-3xl rounded-full z-0" />

      {/* Floating Chess Pieces */}
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
          className="absolute flex flex-col items-center justify-center text-yellow-300 z-0 opacity-40 drop-shadow-[0_0_8px_rgba(212,175,55,0.8)]"
        >
          <div className="text-4xl">{symbolMap[element.type]}</div>
          <div className="text-xs font-semibold text-yellow-200">
            {element.type.charAt(0).toUpperCase() + element.type.slice(1)}
          </div>
        </motion.div>
      ))}

      {/* Modal */}
      {formSubmitted && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div ref={modalRef} className="bg-[#2c2f36] border border-yellow-500/40 shadow-2xl text-white rounded-2xl p-6 max-w-sm w-full text-center relative">
            <div className="text-5xl text-yellow-400 mb-4">🎉</div>
            <h2 className="text-2xl font-bold text-[#f5d084] mb-2">Message Sent</h2>
            <p className="text-lg mb-6 text-gray-200">Thank you! We’ll get back to you shortly.</p>
            <button
              onClick={handleCloseModal}
              className="bg-gradient-to-r from-[#bd853c] to-[#e0b86d] hover:from-[#a9752b] hover:to-[#d8af60] text-black font-semibold px-6 py-2 rounded-lg w-full"
            >
              OK
            </button>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left Image */}
        <motion.div
          className="w-full lg:w-1/2"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
        >
          <Image
            src={vector}
            alt="Contact Vector"
            className="w-full h-auto rounded-xl shadow-lg mb-4"
          />
          <div className="text-lg text-[#f5d084] space-y-1 flex space-x-5 mt-5">
            <p>
              📧 Email:{' '}
              <a href="mailto:chessprixacademy@gmail.com" className="text-white ml-2">
                chessprixacademy@gmail.com
              </a>
            </p>
            <p>
              📞 Phone:{' '}
              <a href="tel:+91+91 9631218251" className="text-white ml-2">
                 +91 9631218251
              </a>
            </p>
          </div>
        </motion.div>

        {/* Right Form */}
        <motion.div
          className="w-full lg:w-1/2"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#bd853c] to-[#e0b86d] mb-6">
            Get in Touch
          </motion.h1>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />

            {/* Parent Name */}
            <div>
              <label className="block text-lg font-semibold text-[#f5d084] mb-2">Parent Name</label>
              <input type="text" name="parentName" required placeholder="Enter parent name" className="w-full px-4 py-2 rounded-lg bg-[#2c2f36] text-white border border-gray-700 focus:outline-none" />
            </div>

            {/* Student Name */}
            <div>
              <label className="block text-lg font-semibold text-[#f5d084] mb-2">Student Name</label>
              <input type="text" name="studentName" required placeholder="Enter student name" className="w-full px-4 py-2 rounded-lg bg-[#2c2f36] text-white border border-gray-700 focus:outline-none" />
            </div>

            {/* Age & Country */}
            <div className="flex flex-col md:flex-row md:space-x-4">
              <div className="flex-1 mb-4 md:mb-0">
                <label className="block text-lg font-semibold text-[#f5d084] mb-2">Select Age</label>
                <select name="ageGroup" className="w-full px-4 py-2 rounded-lg bg-[#2c2f36] text-white border border-gray-700 focus:outline-none">
                  <option value="" disabled selected hidden>Select your age</option>
                  <option>4 - 8 Years</option>
                  <option>8 - 12 Years</option>
                  <option>12 - 16 Years</option>
                  <option>16 - 20 Years</option>
                </select>
              </div>
              <div className="flex-1">
                <label className="block text-lg font-semibold text-[#f5d084] mb-2">Select Country</label>
                <select name="country" className="w-full px-4 py-2 rounded-lg bg-[#2c2f36] text-white border border-gray-700 focus:outline-none">
                  <option value="" disabled selected hidden>Select your country</option>
                  <option>India</option>
                  <option>United States</option>
                  <option>United Kingdom</option>
                  <option>Australia</option>
                  <option>Japan</option>
                  <option>Germany</option>
                  <option>France</option>
                  <option>Italy</option>
                  <option>Spain</option>
                  <option>Russia</option>
                  <option>China</option>
                  <option>UAE</option>
                  <option>Saudi Arabia</option>
                  <option>Bangladesh</option>
                  <option>Pakistan</option>
                  <option>Philippines</option>
                  <option>Turkey</option>
                  <option>South Korea</option>
                  <option>Brazil</option>
                  <option>Egypt</option>
                </select>
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="block text-lg font-semibold text-[#f5d084] mb-2">Phone Number</label>
              <div>
                
                <div className="flex space-x-2">
                  <select
                    name="countryCode"
                    className="w-2/5 sm:w-1/4 px-3 py-2 rounded-lg bg-[#2c2f36] text-white border border-gray-700 focus:outline-none"
                  >
                    <option value="" disabled selected hidden>Select code</option>
                    <option value="+91">India (+91)</option>
                    <option value="+1">USA (+1)</option>
                    <option value="+44">UK (+44)</option>
                    <option value="+61">Australia (+61)</option>
                    <option value="+81">Japan (+81)</option>
                    <option value="+49">Germany (+49)</option>
                    <option value="+33">France (+33)</option>
                    <option value="+39">Italy (+39)</option>
                    <option value="+34">Spain (+34)</option>
                    <option value="+7">Russia (+7)</option>
                    <option value="+86">China (+86)</option>
                    <option value="+971">UAE (+971)</option>
                    <option value="+966">Saudi Arabia (+966)</option>
                    <option value="+880">Bangladesh (+880)</option>
                    <option value="+92">Pakistan (+92)</option>
                    <option value="+63">Philippines (+63)</option>
                    <option value="+90">Turkey (+90)</option>
                    <option value="+82">South Korea (+82)</option>
                    <option value="+55">Brazil (+55)</option>
                    <option value="+20">Egypt (+20)</option>
                  </select>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="Enter phone number"
                    className="w-3/5 sm:w-3/4 px-4 py-2 rounded-lg bg-[#2c2f36] text-white border border-gray-700 focus:outline-none"
                  />
                </div>
              </div>

            </div>

            {/* Message */}
            <div>
              <label className="block text-lg font-semibold text-[#f5d084] mb-2">Message</label>
              <textarea name="message" required rows={3} placeholder="Type your message..." className="w-full px-4 py-2 rounded-lg bg-[#2c2f36] text-white border border-gray-700 focus:outline-none resize-none" />
            </div>

            {/* Submit Button */}
            <div>
              <button type="submit" className="bg-gradient-to-r from-[#bd853c] to-[#e0b86d] hover:from-[#a9752b] hover:to-[#d8af60] text-black font-semibold px-6 py-2 rounded-lg w-full shadow-lg">
                Submit
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
