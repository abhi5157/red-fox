'use client';

import { useState, useEffect, useRef } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AboutHero from './AboutHero';
import CompanyTimeline from './CompanyTimeline';
import TeamSection from './TeamSection';
import BrandValues from './BrandValues';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <AboutHero />
      <CompanyTimeline />
      <BrandValues />
      <TeamSection />
      <Footer />
    </div>
  );
}