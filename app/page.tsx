"use client"
import { useEffect, useState } from "react"

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
import SucessStories from '@/components/SucessStories';
import { UserDetailsModal } from '@/components/user-details-modal';

export default function Home() {
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true)
    }, 8000) // 10 seconds

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {showModal && <UserDetailsModal onClose={() => setShowModal(false)} />}

      <Navbar />
      <HeroSection />
      <WhyChessPrixSection />
      <CourseHighlights />
      <StatisticsSection />
      <CommunitySection />
      <SucessStories />
      <FinalCTASection />
      <Footer />
    </>
  );
}
