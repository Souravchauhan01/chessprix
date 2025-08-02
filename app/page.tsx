

// pages/index.js
import CourseHighlights from '@/components/CourseHighlights';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import HeroSection from '@/components/hero-section';
import Navbar from '@/components/Navbar';
import TestimonialsSection from '@/components/TestmonialsSection';

export default function Home() {
  return (
    <>
    <Navbar />
      <HeroSection />
      <Features />
      <CourseHighlights />
      <TestimonialsSection />
      <Footer />
      {/* other sections */}
    </>
  );
}
