

// pages/index.js
import CourseHighlights from '@/components/CourseHighlights';
import Features from '@/components/Features';
import HeroSection from '@/components/hero-section';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <>
    <Navbar />
      <HeroSection />
      <Features />
      <CourseHighlights />
      {/* other sections */}
    </>
  );
}
