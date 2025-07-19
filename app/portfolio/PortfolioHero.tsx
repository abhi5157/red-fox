'use client';

import { useState, useEffect } from 'react';

export default function PortfolioHero() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-red-600 via-red-700 to-gray-900"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute w-96 h-96 bg-red-500/20 rounded-full blur-3xl animate-pulse"
          style={{
            left: `${mousePosition.x / 5}%`,
            top: `${mousePosition.y / 5}%`,
            transform: 'translate(-50%, -50%)'
          }}
        ></div>
        <div 
          className="absolute w-72 h-72 bg-white/10 rounded-full blur-2xl animate-pulse"
          style={{
            right: `${(100 - mousePosition.x) / 8}%`,
            bottom: `${(100 - mousePosition.y) / 8}%`,
            animationDelay: '1s'
          }}
        ></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-16 h-16 border-2 border-white/30 rounded-lg rotate-45 animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-12 h-12 border-2 border-red-300/50 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 left-1/5 w-20 h-20 border-2 border-white/20 rounded-lg animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 w-full max-w-6xl">
        <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
            <span className="block animate-fade-in-up" style={{ fontFamily: 'var(--font-inter)', animationDelay: '0.2s' }}>
              OUR <span className="text-red-300">PORTFOLIO</span>
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            Showcasing 14+ years of creative excellence in digital marketing, social media campaigns, 
            and brand transformations across diverse industries.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up" style={{ animationDelay: '1s' }}>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 px-8 py-4 rounded-full text-white font-semibold">
              <span className="flex items-center">
                <div className="w-5 h-5 mr-2 flex items-center justify-center">
                  <i className="ri-trophy-line text-red-300"></i>
                </div>
                500+ Projects Delivered
              </span>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 px-8 py-4 rounded-full text-white font-semibold">
              <span className="flex items-center">
                <div className="w-5 h-5 mr-2 flex items-center justify-center">
                  <i className="ri-heart-line text-red-300"></i>
                </div>
                200+ Happy Clients
              </span>
            </div>
          </div>

          {/* Specialties */}
          <div className="mt-16 animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
            <div className="text-white/70 text-sm uppercase tracking-widest mb-6">Our Specialties</div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <i className="ri-palette-line text-white"></i>
                </div>
                <div className="text-white font-semibold text-sm">Social Media</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <i className="ri-video-line text-white"></i>
                </div>
                <div className="text-white font-semibold text-sm">Video Content</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <i className="ri-camera-line text-white"></i>
                </div>
                <div className="text-white font-semibold text-sm">Photography</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <i className="ri-megaphone-line text-white"></i>
                </div>
                <div className="text-white font-semibold text-sm">Brand Campaigns</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-8 flex items-center justify-center">
          <i className="ri-arrow-down-line text-white text-2xl"></i>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}