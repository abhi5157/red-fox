'use client';

import { useState, useEffect } from 'react';

export default function AboutHero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(26, 26, 26, 0.6), rgba(109, 26, 54, 0.4)), url('https://readdy.ai/api/search-image?query=Traditional%20Indian%20jewelry%20artisan%20workshop%20with%20master%20craftsmen%20creating%20intricate%20gold%20jewelry%2C%20warm%20lighting%2C%20authentic%20workspace%2C%20traditional%20tools%2C%20detailed%20jewelry%20making%20process%2C%20cultural%20heritage%2C%20skilled%20hands%20working%20on%20precious%20metals&width=1920&height=1080&seq=about-hero-001&orientation=landscape')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/40"></div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 w-full max-w-4xl">
        <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
            <span className="block" style={{ fontFamily: 'Playfair Display, serif' }}>
              Our Story of
            </span>
            <span className="block mt-2" style={{ fontFamily: 'Playfair Display, serif', color: 'red' }}>
              Timeless Craftsmanship
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            For over three decades, Anshu Jewellers has been crafting dreams into reality,
            one precious piece at a time. Our journey began with a simple vision: to create
            jewelry that celebrates life's most precious moments.
          </p>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-8 flex items-center justify-center">
          <i className="ri-arrow-down-line text-white text-2xl"></i>
        </div>
      </div>
    </section>
  );
}