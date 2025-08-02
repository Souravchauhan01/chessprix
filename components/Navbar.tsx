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
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Courses', href: '/courses' },
    { name: 'Coaches', href: '/coaches' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl
                 bg-[#080d14]/95 border-b border-[#D4AF37]/20 shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-2 flex items-center justify-between">
        {/* Logo */}
      <Link href="/" onClick={closeMenu} className="flex items-center group">
  <motion.div
    initial={{ y: -10, opacity: 1 }}
    animate={{
      y: [0, -4, 0],
      opacity: 1,
    }}
    transition={{
      duration: 1.2,
      ease: 'easeInOut',
      repeat: Infinity,
      repeatType: 'loop',
    }}
    whileHover={{ scale: 1.08, rotate: 2 }}
    className="rounded-lg p-1.5 transition-all"
  >
    <Image
      src="/logo1.png"
      alt="ChessPrix Logo"
      width={80}
      height={80}
      className="h-16 sm:h-20 w-auto"
      priority
    />
  </motion.div>
</Link>



        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) => (
            <motion.div key={link.name} whileHover={{ scale: 1.05 }}>
              <Link
                href={link.href}
                onClick={closeMenu}
                className="relative text-[#e8dcc0] hover:text-[#D4AF37] transition-colors duration-200 font-medium
                           after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] 
                           after:bg-[#D4AF37] after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.name}
              </Link>
            </motion.div>
          ))}

          {/* Contact Button */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/contact"
              className="bg-[#D4AF37] text-[#080d14] font-semibold
                         px-4 py-2 rounded-lg shadow-md hover:shadow-[#D4AF37]/50 transition-all
                         relative overflow-hidden group"
            >
              <span className="relative z-10">Contact Us</span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#d4af37]/30 to-[#f0d998]/30 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Link>
          </motion.div>
        </div>

        {/* Hamburger Menu */}
        <motion.button
          onClick={toggleMenu}
          whileTap={{ scale: 0.9 }}
          className="md:hidden text-[#f3d27e] focus:outline-none bg-white/5 p-1.5 rounded-lg border border-white/10 hover:border-[#D4AF37]/40 transition-all"
        >
          {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </motion.button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="md:hidden bg-[#080d14]/95 border-t border-[#D4AF37]/20
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
                className="block text-[#f3e5b2] hover:text-[#D4AF37] text-lg font-medium py-2 px-2
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
    className="block w-full sm:w-auto bg-[#472b12] text-white font-bold px-8 py-4 rounded-lg border-2 border-[#D4AF37] shadow-[0_4px_12px_rgba(212,175,55,0.4)] hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-[0_6px_16px_rgba(212,175,55,0.5)] focus:outline-none focus:ring-4 focus:ring-[#D4AF37]/50 group relative overflow-hidden"
  >
    <span className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] to-[#472b12] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
    <span className="relative flex items-center justify-center gap-2">
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
      Contact Us
    </span>
  </Link>
</motion.div>

        </motion.div>
      )}
    </motion.nav>
  );
}
