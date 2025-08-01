'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: 'Home',    href: '/' },
    { name: 'About',   href: '/about' },
    { name: 'Courses', href: '/courses' },
    { name: 'Coaches', href: '/coaches' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md
                 bg-gradient-to-r from-[#0e0d1b]/90 via-[#1c1a2e]/85 to-[#25233e]/90
                 border-b border-yellow-500/30 shadow-lg shadow-black/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-3 flex items-center justify-between">

        {/* ---------- Logo ---------- */}
        <Link href="/" onClick={closeMenu} className="flex items-center gap-3 group">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center rounded-lg bg-white/10 p-1.5 shadow-inner backdrop-blur 
                       border border-white/10 group-hover:border-yellow-400/30 transition-all"
          >
            <img
              src="/chessprix-logo.jpg"
              alt="ChessPrix Logo"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-md shadow-[0_0_12px_rgba(255,255,255,0.3)]"
            />
          </motion.div>
          <motion.span 
            whileHover={{ scale: 1.02 }}
            className="text-xl sm:text-2xl font-extrabold text-yellow-400 drop-shadow-[0_2px_4px_rgba(255,215,0,0.4)] tracking-wide"
          >
            ChessPrix
          </motion.span>
        </Link>

        {/* ---------- Desktop Nav ---------- */}
        <div className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) => (
            <motion.div key={link.name} whileHover={{ scale: 1.05 }}>
              <Link
                href={link.href}
                onClick={closeMenu}
                className="relative text-yellow-100 hover:text-yellow-400 transition-colors duration-200 font-medium
                           after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] 
                           after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.name}
              </Link>
            </motion.div>
          ))}

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/contact"
              className="bg-yellow-400 text-purple-900 font-semibold
                         px-4 py-2 rounded-lg shadow-lg hover:shadow-yellow-400/30 transition-all
                         relative overflow-hidden group"
            >
              <span className="relative z-10">Contact Us</span>
              <span className="absolute inset-0 bg-gradient-to-r from-yellow-400/30 to-yellow-500/30 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Link>
          </motion.div>
        </div>

        {/* ---------- Mobile Hamburger ---------- */}
        <motion.button 
          onClick={toggleMenu} 
          whileTap={{ scale: 0.9 }}
          className="md:hidden text-yellow-300 focus:outline-none bg-white/5 p-1.5 rounded-lg border border-white/10 hover:border-yellow-400/30 transition-all"
        >
          {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </motion.button>
      </div>

      {/* ---------- Mobile Dropdown ---------- */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="md:hidden bg-[#0e0d1b]/95 border-t border-yellow-500/30
                     px-4 pb-6 space-y-4 shadow-inner"
        >
          {navLinks.map((link) => (
            <motion.div 
              key={link.name} 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href={link.href}
                onClick={closeMenu}
                className="block text-yellow-100 hover:text-yellow-400 text-lg font-medium py-2 px-2
                           rounded-lg hover:bg-white/5 transition-colors duration-200"
              >
                {link.name}
              </Link>
            </motion.div>
          ))}

          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/contact"
              onClick={closeMenu}
              className="block bg-yellow-400 text-purple-900 font-semibold
                         text-center px-4 py-3 rounded-lg shadow-lg hover:shadow-yellow-400/30 transition-all mt-4"
            >
              Contact Us
            </Link>
          </motion.div>
        </motion.div>
      )}
    </motion.nav>
  );
}