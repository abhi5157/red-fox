'use client';

import { useState, useEffect, useRef } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PortfolioHero from './PortfolioHero';
import ProjectGrid from './ProjectGrid';
import ClientTestimonials from './ClientTestimonials';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <PortfolioHero />
      <ProjectGrid />
      <ClientTestimonials />
      <Footer />
    </div>
  );
}