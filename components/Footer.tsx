'use client';

import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#080d14] text-[#f3e5b2] pt-10 pb-6 px-6 sm:px-10 border-t border-[#D4AF37]/30">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10">

        {/* Logo + Description */}
        <div className="col-span-1 md:col-span-2">
          <Image src="/logo1.png" alt="ChessPrix" width={150} height={150} className="mb-3" />
          <p className="text-sm leading-6">
            ChessPrix transforms young minds through strategic thinking and world-class coaching.
            Join us to begin your chess journey today!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-[#D4AF37] text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-[#D4AF37] transition">Home</Link></li>
            <li><Link href="/about" className="hover:text-[#D4AF37] transition">About</Link></li>
            <li><Link href="/courses" className="hover:text-[#D4AF37] transition">Courses</Link></li>
            <li><Link href="/coaches" className="hover:text-[#D4AF37] transition">Coaches</Link></li>
            <li><Link href="/contact" className="hover:text-[#D4AF37] transition">Contact</Link></li>
          </ul>
        </div>

        {/* Policies */}
        <div>
          <h4 className="text-[#D4AF37] text-lg font-semibold mb-3">Policies</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/privacy-policy" className="hover:text-[#D4AF37] transition">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-[#D4AF37] transition">Terms of Service</Link></li>
            <li><Link href="/refund-policy" className="hover:text-[#D4AF37] transition">Refund Policy</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-[#D4AF37] text-lg font-semibold mb-3">Contact Us</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <FaPhoneAlt className="mt-1 text-[#D4AF37]" />
              <span>+91 9631218251</span>
            </li>
            <li className="flex items-start gap-2">
              <FaEnvelope className="mt-1 text-[#D4AF37]" />
              <span>chessprixacademy@gmail.com</span>
            </li>
            <li className="flex items-start gap-2">
              <FaMapMarkerAlt className="mt-1 text-[#D4AF37]" />
              <span>123 Kings Road, Jaipur, India</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Social and Bottom Line */}
      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-[#D4AF37]/20">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-[#cfcfcf]">
          <p>© {new Date().getFullYear()} ChessPrix. All rights reserved.</p>
          <div className="flex gap-4 text-lg text-[#f3e5b2]">
            <Link href="https://facebook.com" target="_blank" className="hover:text-[#D4AF37] transition"><FaFacebookF /></Link>
            <Link href="https://instagram.com" target="_blank" className="hover:text-[#D4AF37] transition"><FaInstagram /></Link>
            <Link href="https://youtube.com" target="_blank" className="hover:text-[#D4AF37] transition"><FaYoutube /></Link>
            <Link href="https://linkedin.com" target="_blank" className="hover:text-[#D4AF37] transition"><FaLinkedinIn /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
