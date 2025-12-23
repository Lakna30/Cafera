import React from 'react';
import { Navigation } from '../components/Navigation';
import { HeroSection } from '../components/HeroSection';
import { AboutSection } from '../components/AboutSection';
import { ServicesSection } from '../components/ServicesSection';
import { AppDownload } from '../components/AppDownload';
import { Footer } from '../components/Footer';
export function CafeLanding() {
  return <div className="min-h-screen bg-[#1A1A1A] font-sans selection:bg-[#FF9B6A] selection:text-white">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <AppDownload />
      </main>
      <Footer />
    </div>;
}