'use client';

import React from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { MobileTaskbar } from '../components/layout/MobileTaskbar';
import { Hero } from '../components/sections/Hero';
import { MetricsBar } from '../components/sections/MetricsBar';
import { BentoFeatures } from '../components/sections/BentoFeatures';
import { Pricing } from '../components/sections/Pricing';
import { Testimonials } from '../components/sections/Testimonials';
import { Faq } from '../components/sections/Faq';
import { CtaBanner } from '../components/sections/CtaBanner';
import { CustomCursor } from '../components/ui/CustomCursor';
import { ScrollProgress } from '../components/ui/ScrollProgress';
import { DeveloperCredit } from '../components/ui/DeveloperCredit';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-surface-light dark:bg-surface-dark transition-colors duration-200">
      {/* Custom Magnetic Cursor & Scroll Progress & Developer Credit */}
      <CustomCursor />
      <ScrollProgress />
      <DeveloperCredit />

      {/* Global Navigation Header */}
      <Header />

      {/* Main Landing Page Sections */}
      <main className="flex-1">
        <Hero />
        <MetricsBar />
        <BentoFeatures />
        <Pricing />
        <Testimonials />
        <Faq />
        <CtaBanner />
      </main>

      {/* Structured Footer */}
      <Footer />

      {/* Mobile Sticky Dock with pb-safe */}
      <MobileTaskbar />
    </div>
  );
}
