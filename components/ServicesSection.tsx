
'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function ServicesSection() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const services = [
    {
      icon: 'ri-lightbulb-line',
      title: 'CREATIVE CONCEPTS',
      subtitle: 'Strategic Campaign Design',
      description: 'Fresh creative concepts for festivals, offers, and brand campaigns that capture attention and drive engagement.',
      features: ['Festival Campaigns', 'Offer Creatives', 'Brand Concepts', 'Visual Storytelling'],
      image: 'https://readdy.ai/api/search-image?query=Creative%20marketing%20campaign%20design%20with%20colorful%20graphics%2C%20festival%20promotional%20materials%2C%20social%20media%20posts%2C%20red%20and%20white%20branding%20elements%2C%20creative%20workspace%20with%20design%20tools&width=400&height=300&seq=creative-001&orientation=landscape',
      pricing: 'Starting ₹8,000/month'
    },
    {
      icon: 'ri-palette-line',
      title: 'DIGITAL BRANDING',
      subtitle: 'Social Media Excellence',
      description: 'Complete social media design solutions with 20+ posts monthly, story designs, and consistent brand presence.',
      features: ['20+ Posts/Month', '15+ Stories/Month', 'Brand Consistency', 'Multi-Platform Design'],
      image: 'https://readdy.ai/api/search-image?query=Social%20media%20marketing%20designs%20with%20multiple%20phone%20screens%20showing%20Instagram%20Facebook%20posts%2C%20digital%20branding%20materials%2C%20colorful%20social%20media%20graphics%2C%20marketing%20agency%20workspace&width=400&height=300&seq=branding-001&orientation=landscape',
      pricing: 'Starting ₹12,000/month'
    },
    {
      icon: 'ri-video-line',
      title: 'VIDEO & REELS',
      subtitle: 'Dynamic Content Creation',
      description: 'Engaging video content and trending reels to boost your social media presence and audience engagement.',
      features: ['4+ Videos/Month', '6+ Reels/Month', 'Trending Content', 'Professional Editing'],
      image: 'https://readdy.ai/api/search-image?query=Video%20production%20setup%20with%20cameras%2C%20lighting%20equipment%2C%20social%20media%20reels%20creation%2C%20video%20editing%20workspace%2C%20professional%20content%20creation%20studio&width=400&height=300&seq=video-001&orientation=landscape',
      pricing: 'Starting ₹15,000/month'
    },
    {
      icon: 'ri-camera-line',
      title: 'PHOTOGRAPHY',
      subtitle: 'Professional Shoots',
      description: 'High-quality product photography and brand shoots that showcase your business in the best light.',
      features: ['Product Photography', 'Brand Shoots', 'Professional Equipment', 'Post-Processing'],
      image: 'https://readdy.ai/api/search-image?query=Professional%20photography%20studio%20with%20camera%20equipment%2C%20product%20photography%20setup%2C%20professional%20lighting%2C%20photographer%20working%20with%20products%2C%20modern%20photography%20studio&width=400&height=300&seq=photo-001&orientation=landscape',
      pricing: 'Starting ₹5,000/shoot'
    },
    {
      icon: 'ri-edit-line',
      title: 'CONTENT WRITING',
      subtitle: 'Compelling Copy',
      description: 'Fresh, engaging content and taglines in Hindi & English that resonate with your target audience.',
      features: ['Hindi & English', 'SEO Optimized', 'Brand Voice', 'Engaging Copy'],
      image: 'https://readdy.ai/api/search-image?query=Content%20writing%20workspace%20with%20laptop%2C%20notebooks%2C%20creative%20writing%20process%2C%20copywriting%20materials%2C%20content%20strategy%20planning%2C%20modern%20office%20setup&width=400&height=300&seq=content-001&orientation=landscape',
      pricing: 'Starting ₹3,000/month'
    },
    {
      icon: 'ri-user-star-line',
      title: 'INFLUENCER MARKETING',
      subtitle: 'Reach & Engagement',
      description: 'Strategic influencer partnerships to amplify your brand reach and connect with your target audience.',
      features: ['Influencer Outreach', 'Campaign Management', 'Performance Tracking', 'ROI Analysis'],
      image: 'https://readdy.ai/api/search-image?query=Influencer%20marketing%20campaign%20with%20social%20media%20influencers%2C%20brand%20collaboration%2C%20content%20creators%2C%20social%20media%20engagement%2C%20digital%20marketing%20strategy&width=400&height=300&seq=influencer-001&orientation=landscape',
      pricing: 'Starting ₹10,000/campaign'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleCards(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'var(--font-inter)' }}>
            OUR <span className="text-red-600">SERVICES</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Complete digital marketing solutions from creative concepts to influencer partnerships. We deliver results that drive your business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              ref={el => cardRefs.current[index] = el}
              data-index={index}
              className={`group transition-all duration-700 transform ${
                visibleCards.includes(index) 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden h-full group-hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-red-600/80 to-transparent"></div>
                  
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                      <i className={`${service.icon} text-red-600 text-xl group-hover:text-white transition-colors duration-300`}></i>
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white mb-1" style={{ fontFamily: 'var(--font-inter)' }}>
                      {service.title}
                    </h3>
                    <p className="text-red-200 font-medium">{service.subtitle}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-4 h-4 flex items-center justify-center mr-3">
                          <i className="ri-check-line text-red-600"></i>
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="bg-red-50 rounded-lg p-3 mb-4">
                    <p className="text-red-600 font-bold text-center">{service.pricing}</p>
                  </div>

                  <button className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-3 rounded-full font-semibold hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer">
                    Get Quote
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Service Packages */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-3xl p-8 md:p-12 text-white mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4" style={{ fontFamily: 'var(--font-inter)' }}>
              COMPLETE PACKAGE
            </h3>
            <p className="text-red-200 text-lg">All-in-one digital marketing solution for your business</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h4 className="text-xl font-bold mb-4">STARTER PACKAGE</h4>
              <div className="text-3xl font-bold mb-4">₹15,000<span className="text-lg font-normal">/month</span></div>
              <ul className="space-y-2 text-red-200">
                <li className="flex items-center"><i className="ri-check-line mr-2"></i>20+ Social Media Posts</li>
                <li className="flex items-center"><i className="ri-check-line mr-2"></i>15+ Story Designs</li>
                <li className="flex items-center"><i className="ri-check-line mr-2"></i>4 Videos + 6 Reels</li>
                <li className="flex items-center"><i className="ri-check-line mr-2"></i>Content Writing</li>
                <li className="flex items-center"><i className="ri-check-line mr-2"></i>24/7 Admin Support</li>
              </ul>
            </div>

            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/50 transform scale-105">
              <div className="bg-red-500 text-white text-center py-1 px-3 rounded-full text-sm font-bold mb-4">POPULAR</div>
              <h4 className="text-xl font-bold mb-4">PREMIUM PACKAGE</h4>
              <div className="text-3xl font-bold mb-4">₹25,000<span className="text-lg font-normal">/month</span></div>
              <ul className="space-y-2 text-red-200">
                <li className="flex items-center"><i className="ri-check-line mr-2"></i>Everything in Starter</li>
                <li className="flex items-center"><i className="ri-check-line mr-2"></i>Monthly Photography</li>
                <li className="flex items-center"><i className="ri-check-line mr-2"></i>Influencer Campaign</li>
                <li className="flex items-center"><i className="ri-check-line mr-2"></i>Performance Analytics</li>
                <li className="flex items-center"><i className="ri-check-line mr-2"></i>Priority Support</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h4 className="text-xl font-bold mb-4">ENTERPRISE</h4>
              <div className="text-3xl font-bold mb-4">₹40,000<span className="text-lg font-normal">/month</span></div>
              <ul className="space-y-2 text-red-200">
                <li className="flex items-center"><i className="ri-check-line mr-2"></i>Everything in Premium</li>
                <li className="flex items-center"><i className="ri-check-line mr-2"></i>Weekly Photography</li>
                <li className="flex items-center"><i className="ri-check-line mr-2"></i>Multi-Platform Campaigns</li>
                <li className="flex items-center"><i className="ri-check-line mr-2"></i>Dedicated Account Manager</li>
                <li className="flex items-center"><i className="ri-check-line mr-2"></i>Custom Solutions</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link 
            href="/contact"
            className="inline-flex items-center bg-gradient-to-r from-red-500 to-red-600 text-white px-10 py-4 rounded-full text-lg font-bold hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer"
          >
            <span>Get Custom Quote</span>
            <div className="w-5 h-5 ml-2 flex items-center justify-center">
              <i className="ri-arrow-right-line"></i>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
