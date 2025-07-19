
'use client';

import { useState, useEffect } from 'react';

export default function ContactHero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      className="relative py-24 flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(239, 68, 68, 0.8), rgba(185, 28, 28, 0.6)), url('https://readdy.ai/api/search-image?query=Modern%20digital%20marketing%20agency%20office%20with%20creative%20workspace%2C%20team%20collaboration%2C%20professional%20meeting%20room%2C%20red%20and%20white%20branding%2C%20marketing%20materials%2C%20creative%20environment&width=1920&height=600&seq=contact-hero-marketing&orientation=landscape')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-red-600/60 via-transparent to-red-800/40"></div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 w-full max-w-4xl">
        <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
            <span className="block" style={{ fontFamily: 'var(--font-inter)' }}>
              Let's Create Something
            </span>
            <span className="block mt-2 text-red-300" style={{ fontFamily: 'var(--font-inter)' }}>
              Amazing Together
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            Ready to transform your brand with fresh ideas and creative design? 
            Get in touch with REDFOX for a free consultation and custom quote.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-full text-white font-semibold">
              <span className="flex items-center">
                <div className="w-5 h-5 mr-2 flex items-center justify-center">
                  <i className="ri-phone-line text-red-300"></i>
                </div>
                +91 612 2670011
              </span>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-full text-white font-semibold">
              <span className="flex items-center">
                <div className="w-5 h-5 mr-2 flex items-center justify-center">
                  <i className="ri-mail-line text-red-300"></i>
                </div>
                team@redfoxonline.co.in
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
