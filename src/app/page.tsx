'use client';

import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import {
  HeroSection,
  AboutSection,
  ServicesSection,
  PropertiesSection,
  BranchesSection,
  CareersSection,
  ArticlesSection,
  CTASection,
  ContactSection,
} from '@/components/sections';
import type { BuildingConfig } from '@/types';

const HeroScene = dynamic(
  () => import('@/components/three/HeroScene').then((mod) => mod.HeroScene),
  { ssr: false, loading: () => null }
);

function HeroBackdrop() {
  return <HeroScene videoSrc="/videos/hero-1.mp4" />;
}

export default function HomePage() {
  useEffect(() => {
    document.title = 'The Valuation & Consultants | ประเมินอสังหาริมทรัพย์ ประเมินที่ดิน';
  }, []);

  return (
    <main className="relative min-h-screen bg-brand-navy text-white">
      <Navbar />

      <div className="relative">
        <HeroBackdrop />
        <HeroSection />
      </div>

      <AboutSection />
      <ServicesSection />
      <PropertiesSection />
      <BranchesSection />
      <CareersSection />
      <ArticlesSection />
      <CTASection />
      <ContactSection />

      <Footer />
    </main>
  );
}