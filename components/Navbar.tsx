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
                 bg-gradient-to-r from-[#0e0d1b]/80 via-[#1c1a2e]/70 to-[#25233e]/80
                 border-b border-yellow-500/20 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-3 flex items-center justify-between">

        {/* ---------- Logo ---------- */}
<Link href="/" onClick={closeMenu} className="flex items-center gap-3">
  <div className="flex items-center rounded-lg bg-white/10 p-1.5 shadow-inner backdrop-blur">
    <img
      src="/chessprix-logo.jpg" // Make sure the image exists in public/
      alt="ChessPrix Logo"
      className="w-9 h-9 sm:w-10 sm:h-10 rounded-md shadow-[0_0_8px_rgba(255,255,255,0.25)]"
    />
  </div>
  <span className="text-xl sm:text-2xl font-extrabold text-yellow-400 drop-shadow-sm tracking-wide">
    ChessPrix
  </span>
</Link>

        {/* ---------- Desktop Nav ---------- */}
        <div className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={closeMenu}
              className="text-yellow-100 hover:text-yellow-400 transition-colors duration-200 font-medium"
            >
              {link.name}
            </Link>
          ))}

          <Link
            href="/contact"      /* make a /join page or replace with your sign-up route */
            className="bg-yellow-400 text-purple-900 font-semibold
                       px-4 py-2 rounded-lg shadow hover:scale-105 transition-all"
          >
           Contact Us
          </Link>
        </div>

        {/* ---------- Mobile Hamburger ---------- */}
        <button onClick={toggleMenu} className="md:hidden text-yellow-300 focus:outline-none">
          {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* ---------- Mobile Dropdown ---------- */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="md:hidden bg-[#0e0d1b]/95 border-t border-yellow-500/20
                     px-4 pb-6 space-y-4"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={closeMenu}
              className="block text-yellow-100 hover:text-yellow-400 text-lg font-medium"
            >
              {link.name}
            </Link>
          ))}

          <Link
            href="/contact"
            onClick={closeMenu}
            className="block bg-yellow-400 text-purple-900 font-semibold
                       text-center px-4 py-2 rounded-lg shadow hover:scale-105 transition-all"
          >
           Contact Us
          </Link>
        </motion.div>
      )}
    </motion.nav>
  );
}
