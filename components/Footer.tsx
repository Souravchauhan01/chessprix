'use client';

import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Footer() {
const router = useRouter();

  return (
    <footer className="bg-[#080d14] text-[#e8dcc0] pt-10 pb-6 px-6 sm:px-10 border-t border-[#D4AF37]/30 shadow-inner">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10">

        {/* Logo & Description */}
        <div className="col-span-1 md:col-span-2">
          <Image src="/logo1.png" alt="ChessPrix Logo" width={170} height={170} className="mb-4" />
          <p className="text-sm sm:text-base leading-relaxed text-[#e8dcc0]/90">
            ChessPrix transforms young minds through strategic thinking and world-class coaching. Join us to begin your chess journey today!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-[#D4AF37] text-xl font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm sm:text-base">
            <li><Link href="/" className="hover:text-[#D4AF37] transition-colors duration-200">Home</Link></li>
            <li><Link href="/about" className="hover:text-[#D4AF37] transition-colors duration-200">About</Link></li>
            <li><Link href="/coaches" className="hover:text-[#D4AF37] transition-colors duration-200">Services</Link></li>
            <li><Link href="/halloffame" className="hover:text-[#D4AF37] transition-colors duration-200">Hall Of Fame</Link></li>
            <li><Link href="/blogs" className="hover:text-[#D4AF37] transition-colors duration-200">Blogs</Link></li>
            <li><Link href="/contact" className="hover:text-[#D4AF37] transition-colors duration-200">Contact</Link></li>
          </ul>
        </div>

          <div>
          <h4 className="text-[#D4AF37] text-xl font-bold mb-4">Programs</h4>
          <ul className="space-y-2 text-sm sm:text-base">
            <li><Link href="/beginner" className="hover:text-[#D4AF37] transition-colors duration-200">Beginner</Link></li>
            <li><Link href="/intermediate" className="hover:text-[#D4AF37] transition-colors duration-200">Intermediate</Link></li>
            <li><Link href="/advanced" className="hover:text-[#D4AF37] transition-colors duration-200">Advanced</Link></li>
            <li><Link href="/fide-rating" className="hover:text-[#D4AF37] transition-colors duration-200">FIDE Rating & Tournament Prep</Link></li>
            <li><Link href="/masters-path" className="hover:text-[#D4AF37] transition-colors duration-200">The Master's Path</Link></li>
          </ul>
        </div>

        {/* Policies */}
        {/* <div>
          <h4 className="text-[#D4AF37] text-xl font-bold mb-4">Policies</h4>
          <ul className="space-y-2 text-sm sm:text-base">
            <li><Link href="/privacy-policy" className="hover:text-[#D4AF37] transition-colors duration-200">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-[#D4AF37] transition-colors duration-200">Terms of Service</Link></li>
            
          </ul>
        </div> */}

        {/* Contact Info */}
        <div>
          <h4 className="text-[#D4AF37] text-xl font-bold mb-4">Contact Us</h4>
          <ul className="space-y-3 text-sm sm:text-base text-[#e8dcc0]">
            <li className="flex items-start gap-3">
              <FaPhoneAlt className="mt-1 text-[#D4AF37]" />
              <span>+91 9631218251</span>
            </li>
            <li className="flex items-start gap-3">
              <FaEnvelope className="mt-1 text-[#D4AF37]" />
              <span>info@chessprix.com</span>
            </li>
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="mt-1 text-[#D4AF37]" />
              <span>Teach Globally</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-[#D4AF37]/20">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm sm:text-base text-[#e8dcc0]/70">
          <p>© {new Date().getFullYear()} <span className="text-[#D4AF37] font-semibold">ChessPrix</span>. All rights reserved.</p>
          <div className='flex flex-col sm:flex-row gap-2 sm:gap-8 justify-center items-center'>
            <p className="hover:text-[#D4AF37] transition" onClick={() => router.push("/privacy-policy")}>Privacy Policy</p>
            <p  className="hover:text-[#D4AF37] transition" onClick={() => router.push("/term-service")}>Terms Of Service</p>
          </div>
          <div className="flex gap-5 text-lg">
            <Link href="https://www.facebook.com/profile.php?id=61579066523394" target="_blank" className="hover:text-[#D4AF37] transition"><FaFacebookF /></Link>
            <Link href="https://www.instagram.com/chess.prix?igsh=MXBudmg0dDJtNW91dQ==" target="_blank" className="hover:text-[#D4AF37] transition"><FaInstagram /></Link>
            <Link href="https://wa.me/919631218251" target="_blank" className="hover:text-[#D4AF37] transition"><FaWhatsapp /></Link>
            <Link href="https://www.linkedin.com/in/chess-prix-a10a82377/" target="_blank" className="hover:text-[#D4AF37] transition"><FaLinkedinIn /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
