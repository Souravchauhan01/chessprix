'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProgramsDropdownOpen, setIsProgramsDropdownOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  const pathname = usePathname();
// hello
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/coaches' },
    { name: 'Hall Of Fame', href: '/halloffame' },
    { name: 'Blogs', href: '/blogs' },
    // { name: 'Coaches', href: '/coaches' },
  ];

  const programs = [
    { name: 'Beginner', href: '/beginner' },
    { name: 'Intermediate', href: '/intermediate' },
    { name: 'Advanced', href: '/advanced' },
    { name: 'FIDE Rating & Tournament Preparation', href: '/fide-rating' },
    { name: "The Master's Path: Elite Training & Rating Booster", href: '/masters-path' },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#080d14]/95 border-b border-[#D4AF37]/20 shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-2 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" onClick={closeMenu} className="flex items-center group">
          <motion.div
            initial={{ y: -10, opacity: 1 }}
            animate={{ y: [0, -4, 0], opacity: 1 }}
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
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <motion.div key={link.name} whileHover={{ scale: 1.05 }}>
                <Link
                  href={link.href}
                  onClick={closeMenu}
                  className={`relative transition-colors duration-200 
                    font-bold text-lg
                    ${isActive ? 'text-[#D4AF37]' : 'text-[#e8dcc0] hover:text-[#D4AF37]'} 
                    after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] 
                    after:bg-[#D4AF37] after:transition-all after:duration-300 hover:after:w-full`}
                >
                  {link.name}
                </Link>
              </motion.div>
            );
          })}

          {/* Programs Dropdown */}
          <div className="relative">
            <motion.button
              onClick={() => setIsProgramsDropdownOpen(!isProgramsDropdownOpen)}
              onMouseEnter={() => setIsProgramsDropdownOpen(true)}
              onMouseLeave={() => setIsProgramsDropdownOpen(false)}
              className="flex items-center space-x-1 font-bold text-lg text-[#e8dcc0] hover:text-[#D4AF37] transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
            >
              <span>Programs</span>
              <ChevronDown 
                className={`w-4 h-4 transition-transform duration-200 ${isProgramsDropdownOpen ? 'rotate-180' : ''}`} 
              />
            </motion.button>

            {/* Dropdown Menu */}
            {isProgramsDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                onMouseEnter={() => setIsProgramsDropdownOpen(true)}
                onMouseLeave={() => setIsProgramsDropdownOpen(false)}
                className="absolute top-full left-0 mt-2 w-80 bg-[#080d14]/95 border border-[#D4AF37]/20 rounded-lg shadow-lg backdrop-blur-xl z-50"
              >
                <div className="py-2">
                  {programs.map((program, index) => {
                    const isBasicLevel = index < 3; // First 3 items (Beginner, Intermediate, Advanced)
                    const isSpecializedLevel = index >= 3; // Last 2 items (FIDE Rating, Master's Path)
                    
                    return (
                      <motion.div
                        key={program.name}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ scale: 1.02 }}
                      >
                        <Link
                          href={program.href}
                          onClick={() => setIsProgramsDropdownOpen(false)}
                          className={`block px-4 py-3 text-[#e8dcc0] hover:text-[#D4AF37] hover:bg-white/5 transition-all duration-200 text-sm ${
                            isBasicLevel 
                              ? 'border-l-2 border-transparent hover:border-[#D4AF37]' 
                              : 'border-l-4 border-[#D4AF37]/30 hover:border-[#D4AF37]'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-semibold">
                              {program.name}
                            </span>
                          </div>
                          {isSpecializedLevel && (
                            <div className="text-xs text-[#D4AF37]/60 mt-1">
                              Specialized Program
                            </div>
                          )}
                        </Link>
                        {index === 2 && (
                          <div className="border-t border-[#D4AF37]/20 mx-4 my-2"></div>
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </div>

          {/* Contact Button */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/contact"
              className="bg-[#D4AF37] text-[#080d14] font-bold
                         px-6 py-3 text-lg rounded-lg shadow-md hover:shadow-[#D4AF37]/50 transition-all
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
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <motion.div
                key={link.name}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href={link.href}
                  onClick={closeMenu}
                  className={`block text-lg font-medium py-2 px-2 rounded-lg transition-colors duration-200
                    ${isActive ? 'text-[#D4AF37] bg-white/5' : 'text-[#f3e5b2] hover:text-[#D4AF37] hover:bg-white/5'}`}
                >
                  {link.name}
                </Link>
              </motion.div>
            );
          })}

          {/* Programs Dropdown (Mobile) */}
          <div className="space-y-2">
            <motion.button
              onClick={() => setIsProgramsDropdownOpen(!isProgramsDropdownOpen)}
              className="flex items-center justify-between w-full text-lg font-medium py-2 px-2 rounded-lg transition-colors duration-200 text-[#f3e5b2] hover:text-[#D4AF37] hover:bg-white/5"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Programs</span>
              <ChevronDown 
                className={`w-4 h-4 transition-transform duration-200 ${isProgramsDropdownOpen ? 'rotate-180' : ''}`} 
              />
            </motion.button>
            
            {isProgramsDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.3 }}
                className="pl-4 space-y-2"
              >
                {programs.map((program, index) => {
                  const isBasicLevel = index < 3; // First 3 items (Beginner, Intermediate, Advanced)
                  const isSpecializedLevel = index >= 3; // Last 2 items (FIDE Rating, Master's Path)
                  
                  return (
                    <motion.div
                      key={program.name}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Link
                        href={program.href}
                        onClick={closeMenu}
                        className={`block text-base font-medium py-2 px-2 rounded-lg transition-colors duration-200 text-[#f3e5b2] hover:text-[#D4AF37] hover:bg-white/5 ${
                          isBasicLevel 
                            ? 'border-l-2 border-transparent hover:border-[#D4AF37]' 
                            : 'border-l-4 border-[#D4AF37]/30 hover:border-[#D4AF37]'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-semibold">
                            {program.name}
                          </span>
                        </div>
                        {isSpecializedLevel && (
                          <div className="text-xs text-[#D4AF37]/60 mt-1">
                            Specialized Program
                          </div>
                        )}
                      </Link>
                      {index === 2 && (
                        <div className="border-t border-[#D4AF37]/20 mx-2 my-2"></div>
                      )}
                    </motion.div>
                  );
                })}
              </motion.div>
            )}
          </div>

          {/* Contact Button (Mobile) */}
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/contact"
              onClick={closeMenu}
              className="block w-full sm:w-auto bg-[#472b12] text-white font-bold px-8 py-6 rounded-lg border-2 border-[#D4AF37] shadow-[0_4px_12px_rgba(212,175,55,0.4)] hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-[0_6px_16px_rgba(212,175,55,0.5)] focus:outline-none focus:ring-4 focus:ring-[#D4AF37]/50 group relative overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] to-[#472b12] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative flex items-center justify-center gap-2 text-lg-bold">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
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
