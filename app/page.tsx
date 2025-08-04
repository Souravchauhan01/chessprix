

// pages/index.js
import CourseHighlights from '@/components/CourseHighlights';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import HeroSection from '@/components/hero-section';
import Navbar from '@/components/Navbar';
import StudentCarousel from '@/components/StudentCarousel';
import TestimonialsSection from '@/components/TestmonialsSection';
import WhyChessPrixSection from '@/components/WhyChessPrixSection';
import StatisticsSection from '@/components/StatisticsSection';
import CommunitySection from '@/components/CommunitySection';
import FinalCTASection from '@/components/FinalCTASection';

export default function Home() {
  return (
    <>
      <Navbar />
      
      {/* A. The Hero Section: Your Unforgettable First Impression */}
      <HeroSection />
      
      {/* B. Articulating Your Value: "Why ChessPrix?" */}
      <WhyChessPrixSection />
      
      {/* C. Showcasing Your Programs: Clear Pathways to Mastery */}
      <CourseHighlights />
      
      {/* D. Building Trust and Authority: The Credibility Cornerstones */}
      <StatisticsSection />
      
      {/* E. Engaging Your Audience: Community & Support */}
      <CommunitySection />
      
      {/* F. Optimizing Calls to Action (CTAs): Driving Conversion */}
      <FinalCTASection />
      
      <Footer />
    </>
  );
}
