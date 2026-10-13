'use client';

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { HeroCinematic } from '@/components/HeroCinematic';
import {
  AboutSection,
  ServicesSection,
  PropertiesSection,
  BranchesSection,
  CareersSection,
  ArticlesSection,
  CTASection,
  ContactSection,
} from '@/components/sections';

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-brand-navy text-white">
      <Navbar />

      <HeroCinematic />

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
