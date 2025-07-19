
'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-10 h-10 text-red-600">
                  <path fill="currentColor" d="M20,20 Q50,5 80,20 Q85,30 80,40 L70,35 Q60,25 50,30 Q40,25 30,35 L20,40 Q15,30 20,20 Z"/>
                  <path fill="currentColor" d="M15,45 Q25,40 35,45 Q40,55 35,65 L25,60 Q20,50 25,55 Q30,50 35,60 L45,65 Q50,75 45,85 L35,80 Q25,70 15,75 Q10,65 15,55 Q20,45 15,45 Z"/>
                  <path fill="currentColor" d="M55,45 Q65,40 75,45 Q80,55 75,65 L65,60 Q60,50 65,55 Q70,50 75,60 L85,65 Q90,75 85,85 L75,80 Q65,70 55,75 Q50,65 55,55 Q60,45 55,45 Z"/>
                  <circle cx="35" cy="50" r="3" fill="white"/>
                  <circle cx="65" cy="50" r="3" fill="white"/>
                  <path fill="white" d="M40,70 Q50,75 60,70" stroke="white" strokeWidth="2"/>
                </svg>
              </div>
              <div className="text-2xl font-bold text-red-600" style={{ fontFamily: 'var(--font-inter)' }}>
                RED<span className="text-white">FOX</span>
              </div>
            </Link>
            <p className="text-gray-300 mb-6 max-w-md">
              Out of the box and beyond the limits. Innovative, creative and agile solutions for modern business needs with 14+ years of experience.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors duration-300 cursor-pointer">
                <i className="ri-facebook-fill text-lg"></i>
              </a>
              <a href="https://instagram.com" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors duration-300 cursor-pointer">
                <i className="ri-instagram-line text-lg"></i>
              </a>
              <a href="https://linkedin.com" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors duration-300 cursor-pointer">
                <i className="ri-linkedin-line text-lg"></i>
              </a>
              <a href="https://twitter.com" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors duration-300 cursor-pointer">
                <i className="ri-twitter-line text-lg"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6 text-red-400">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-300 hover:text-red-400 transition-colors duration-200 cursor-pointer">Home</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-red-400 transition-colors duration-200 cursor-pointer">About</Link></li>
              <li><Link href="/collections" className="text-gray-300 hover:text-red-400 transition-colors duration-200 cursor-pointer">Services</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-red-400 transition-colors duration-200 cursor-pointer">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6 text-red-400">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 flex items-center justify-center mt-1">
                  <i className="ri-map-pin-line text-red-400"></i>
                </div>
                <div>
                  <p className="text-gray-300 text-sm">
                    Patna, Bihar, India
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-phone-line text-red-400"></i>
                </div>
                <div>
                  <a href="tel:+919876543210" className="text-gray-300 hover:text-red-400 transition-colors duration-200 cursor-pointer">
                    +91 98765 43210
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-mail-line text-red-400"></i>
                </div>
                <div>
                  <a href="mailto:info@redfoxmarketing.com" className="text-gray-300 hover:text-red-400 transition-colors duration-200 cursor-pointer">
                    info@redfoxmarketing.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 REDFOX Advertising & Marketing. All rights reserved. | Think • Create • Build
          </p>
        </div>
      </div>
    </footer>
  );
}
