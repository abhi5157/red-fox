
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Hero() {
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

      {/* 3D Fox Logo Animation */}
      <div className="absolute top-1/4 right-10 opacity-20">
        <div className="w-32 h-32 animate-spin-slow">
          <svg viewBox="0 0 100 100" className="w-full h-full text-white/30">
            <path fill="currentColor" d="M20,20 Q50,5 80,20 Q85,30 80,40 L70,35 Q60,25 50,30 Q40,25 30,35 L20,40 Q15,30 20,20 Z"/>
            <path fill="currentColor" d="M15,45 Q25,40 35,45 Q40,55 35,65 L25,60 Q20,50 25,55 Q30,50 35,60 L45,65 Q50,75 45,85 L35,80 Q25,70 15,75 Q10,65 15,55 Q20,45 15,45 Z"/>
            <path fill="currentColor" d="M55,45 Q65,40 75,45 Q80,55 75,65 L65,60 Q60,50 65,55 Q70,50 75,60 L85,65 Q90,75 85,85 L75,80 Q65,70 55,75 Q50,65 55,55 Q60,45 55,45 Z"/>
          </svg>
        </div>
      </div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 w-full max-w-6xl">
        <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {/* Main Logo */}
          <div className="mb-8 flex justify-center">
            <div className="w-24 h-24 flex items-center justify-center animate-bounce-slow">
              <svg viewBox="0 0 100 100" className="w-24 h-24 text-white drop-shadow-2xl">
                <path fill="currentColor" d="M20,20 Q50,5 80,20 Q85,30 80,40 L70,35 Q60,25 50,30 Q40,25 30,35 L20,40 Q15,30 20,20 Z"/>
                <path fill="currentColor" d="M15,45 Q25,40 35,45 Q40,55 35,65 L25,60 Q20,50 25,55 Q30,50 35,60 L45,65 Q50,75 45,85 L35,80 Q25,70 15,75 Q10,65 15,55 Q20,45 15,45 Z"/>
                <path fill="currentColor" d="M55,45 Q65,40 75,45 Q80,55 75,65 L65,60 Q60,50 65,55 Q70,50 75,60 L85,65 Q90,75 85,85 L75,80 Q65,70 55,75 Q50,65 55,55 Q60,45 55,45 Z"/>
                <circle cx="35" cy="50" r="3" fill="currentColor" className="animate-pulse"/>
                <circle cx="65" cy="50" r="3" fill="currentColor" className="animate-pulse"/>
                <path fill="none" stroke="currentColor" strokeWidth="2" d="M40,70 Q50,75 60,70"/>
              </svg>
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white leading-tight">
            <span className="block animate-fade-in-up" style={{ fontFamily: 'var(--font-inter)', animationDelay: '0.2s' }}>
              RED<span className="text-red-300">FOX</span>
            </span>
          </h1>
          
          <div className="text-2xl md:text-3xl font-bold mb-8 text-red-200 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            ADVERTISING & MARKETING
          </div>
          
          <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            Fresh Ideas. Creative Design.
          </p>
          
          <p className="text-lg md:text-xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            Complete digital marketing solutions from social media campaigns to influencer partnerships. 
            14+ years of creative excellence in Bihar and beyond.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up" style={{ animationDelay: '1s' }}>
            <Link 
              href="/portfolio"
              className="group bg-white text-red-600 px-10 py-4 rounded-full text-lg font-bold hover:bg-red-50 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-white/25 whitespace-nowrap cursor-pointer"
            >
              <span className="flex items-center">
                View Portfolio
                <div className="w-5 h-5 ml-2 flex items-center justify-center">
                  <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform duration-300"></i>
                </div>
              </span>
            </Link>
            
            <Link 
              href="/contact"
              className="group border-2 border-white text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-white hover:text-red-600 transition-all duration-300 transform hover:scale-105 shadow-xl whitespace-nowrap cursor-pointer"
            >
              <span className="flex items-center">
                Get Free Quote
                <div className="w-5 h-5 ml-2 flex items-center justify-center">
                  <i className="ri-phone-line group-hover:animate-pulse"></i>
                </div>
              </span>
            </Link>
          </div>

          {/* Core Philosophy */}
          <div className="mt-16 animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
            <div className="text-white/70 text-sm uppercase tracking-widest mb-4">Our Core Philosophy</div>
            <div className="flex justify-center space-x-8 text-white font-semibold text-lg">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                <span>THINK</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <span>CREATE</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                <span>BUILD</span>
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
        
        @keyframes bounce-slow {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }
        
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 3s infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </section>
  );
}
