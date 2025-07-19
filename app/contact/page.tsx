'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ContactHero from './ContactHero';
import ContactForm from './ContactForm';
import StoreLocation from './StoreLocation';
import ContactInfo from './ContactInfo';

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ContactHero />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        <ContactForm />
        <StoreLocation />
      </div>
      <ContactInfo />
      <Footer />
    </div>
  );
}