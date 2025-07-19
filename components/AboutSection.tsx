
'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    years: 0,
    projects: 0,
    clients: 0,
    campaigns: 0
  });
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            animateCounters();
          }
        });
      },
      { threshold: 0.3, rootMargin: '50px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animateCounters = () => {
    const targets = { years: 14, projects: 500, clients: 200, campaigns: 150 };
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    let current = { years: 0, projects: 0, clients: 0, campaigns: 0 };

    const timer = setInterval(() => {
      const increment = {
        years: targets.years / steps,
        projects: targets.projects / steps,
        clients: targets.clients / steps,
        campaigns: targets.campaigns / steps
      };

      current.years += increment.years;
      current.projects += increment.projects;
      current.clients += increment.clients;
      current.campaigns += increment.campaigns;

      if (current.years >= targets.years) {
        current = targets;
        clearInterval(timer);
      }

      setCounters({
        years: Math.floor(current.years),
        projects: Math.floor(current.projects),
        clients: Math.floor(current.clients),
        campaigns: Math.floor(current.campaigns)
      });
    }, stepDuration);
  };

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-red-600 to-red-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border-4 border-white rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border-4 border-white rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-32 w-16 h-16 border-4 border-white rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 transform ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            <div className="mb-6">
              <div className="text-red-200 text-sm uppercase tracking-widest mb-2">Est. 2011</div>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-inter)' }}>
                ABOUT <span className="text-red-300">REDFOX</span>
              </h2>
            </div>
            
            <div className="space-y-6 text-white/90 text-lg leading-relaxed">
              <p>
                In 2011, a dynamic marketing agency named <strong className="text-white">REDFOX ADVERTISING & MARKETING</strong> started in Patna, Bihar. 
                With minimal resources and infrastructure, we managed to work beyond our capacity and 
                continuously worked towards our identity.
              </p>
              
              <p>
                Located at <strong className="text-red-300">Usha Rani Sinha House, Road No. 5/A, Rajendra Nagar, Patna-16</strong>, 
                we have been focused on delivering productive, creative outputs with practical excellence. 
                With <strong className="text-red-300">14+ years of experience</strong> in the industry, we specialize in 
                digital branding, social media marketing, content creation, and influencer partnerships.
              </p>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-inter)' }}>
                  Our Core Philosophy
                </h3>
                <div className="flex items-center space-x-8 text-white font-semibold">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-300 rounded-full animate-pulse"></div>
                    <span>THINK</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-300 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                    <span>CREATE</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-300 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                    <span>BUILD</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <p className="text-red-200 font-semibold">Contact Information:</p>
                <div className="mt-2 space-y-1 text-sm">
                  <p>📞 +91 612 2670011 | 📱 +91 9709600011</p>
                  <p>✉️ team@redfoxonline.co.in</p>
                  <p>🌐 redfox.online | 🔗 redfoxonline.in</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Link 
                href="/about"
                className="inline-flex items-center bg-white text-red-600 px-8 py-3 rounded-full text-lg font-bold hover:bg-red-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer"
              >
                <span>View Our Portfolio</span>
                <div className="w-5 h-5 ml-2 flex items-center justify-center">
                  <i className="ri-arrow-right-line"></i>
                </div>
              </Link>
            </div>
          </div>

          <div className={`transition-all duration-1000 transform ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`} style={{ transitionDelay: '0.3s' }}>
            <div className="relative">
              {/* 3D Card Effect */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-red-600 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                <div className="relative bg-white rounded-2xl p-8 shadow-2xl transform perspective-1000 group-hover:rotateY-5 transition-transform duration-500">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-red-600 mb-2">{counters.years}+</div>
                      <div className="text-gray-600 font-medium">Years Experience</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-red-600 mb-2">{counters.projects}+</div>
                      <div className="text-gray-600 font-medium">Projects Completed</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-red-600 mb-2">{counters.clients}+</div>
                      <div className="text-gray-600 font-medium">Happy Clients</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-red-600 mb-2">{counters.campaigns}+</div>
                      <div className="text-gray-600 font-medium">Campaigns Launched</div>
                    </div>
                  </div>
                  
                  <div className="mt-8 p-4 bg-red-50 rounded-xl">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-3">
                        <i className="ri-award-line text-white text-xl"></i>
                      </div>
                      <div className="text-red-600 font-bold">Digital Marketing Excellence</div>
                      <div className="text-gray-600 text-sm mt-1">Fresh Ideas. Creative Design.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
