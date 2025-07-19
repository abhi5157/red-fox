
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-12 h-12 text-red-600">
                <path fill="currentColor" d="M20,20 Q50,5 80,20 Q85,30 80,40 L70,35 Q60,25 50,30 Q40,25 30,35 L20,40 Q15,30 20,20 Z"/>
                <path fill="currentColor" d="M15,45 Q25,40 35,45 Q40,55 35,65 L25,60 Q20,50 25,55 Q30,50 35,60 L45,65 Q50,75 45,85 L35,80 Q25,70 15,75 Q10,65 15,55 Q20,45 15,45 Z"/>
                <path fill="currentColor" d="M55,45 Q65,40 75,45 Q80,55 75,65 L65,60 Q60,50 65,55 Q70,50 75,60 L85,65 Q90,75 85,85 L75,80 Q65,70 55,75 Q50,65 55,55 Q60,45 55,45 Z"/>
                <circle cx="35" cy="50" r="3" fill="white"/>
                <circle cx="65" cy="50" r="3" fill="white"/>
                <path fill="white" d="M40,70 Q50,75 60,70" stroke="white" strokeWidth="2"/>
              </svg>
            </div>
            <div className="text-2xl font-bold text-red-600" style={{ fontFamily: 'var(--font-inter)' }}>
              RED<span className={scrolled ? 'text-gray-900' : 'text-white'}>FOX</span>
            </div>
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className={`font-medium transition-colors duration-200 hover:text-red-600 ${
              scrolled ? 'text-gray-900' : 'text-white hover:text-red-400'
            }`}>
              Home
            </Link>
            <Link href="/about" className={`font-medium transition-colors duration-200 hover:text-red-600 ${
              scrolled ? 'text-gray-900' : 'text-white hover:text-red-400'
            }`}>
              About
            </Link>
            <Link href="/collections" className={`font-medium transition-colors duration-200 hover:text-red-600 ${
              scrolled ? 'text-gray-900' : 'text-white hover:text-red-400'
            }`}>
              Services
            </Link>
            <Link href="/portfolio" className={`font-medium transition-colors duration-200 hover:text-red-600 ${
              scrolled ? 'text-gray-900' : 'text-white hover:text-red-400'
            }`}>
              Portfolio
            </Link>
            <Link href="/contact" className={`font-medium transition-colors duration-200 hover:text-red-600 ${
              scrolled ? 'text-gray-900' : 'text-white hover:text-red-400'
            }`}>
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Link 
              href="/contact" 
              className="bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-2 rounded-full hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer font-medium"
            >
              Get Quote
            </Link>
            
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="w-6 h-6 flex items-center justify-center">
                <i className={`ri-menu-line text-xl ${scrolled ? 'text-gray-900' : 'text-white'}`}></i>
              </div>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/" className="block px-3 py-2 text-gray-900 hover:text-red-600">
                Home
              </Link>
              <Link href="/about" className="block px-3 py-2 text-gray-900 hover:text-red-600">
                About
              </Link>
              <Link href="/collections" className="block px-3 py-2 text-gray-900 hover:text-red-600">
                Services
              </Link>
              <Link href="/portfolio" className="block px-3 py-2 text-gray-900 hover:text-red-600">
                Portfolio
              </Link>
              <Link href="/contact" className="block px-3 py-2 text-gray-900 hover:text-red-600">
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
