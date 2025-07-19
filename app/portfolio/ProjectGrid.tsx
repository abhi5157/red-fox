'use client';

import { useState, useEffect, useRef } from 'react';

export default function ProjectGrid() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'social', label: 'Social Media' },
    { id: 'video', label: 'Video Content' },
    { id: 'branding', label: 'Branding' },
    { id: 'photography', label: 'Photography' }
  ];

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Fashion Brand Campaign',
      category: 'social',
      client: 'StyleHub Fashion',
      description: 'Complete social media transformation with 300% engagement increase',
      image: 'https://readdy.ai/api/search-image?query=Fashion%20e-commerce%20social%20media%20campaign%20with%20stylish%20clothing%20posts%2C%20Instagram%20feed%20design%2C%20modern%20fashion%20photography%2C%20colorful%20social%20media%20graphics&width=400&height=300&seq=fashion-001&orientation=landscape',
      results: ['300% Engagement ↑', '50K New Followers', '₹5L Revenue Generated'],
      tags: ['Instagram', 'Facebook', 'Influencer Marketing']
    },
    {
      id: 2,
      title: 'Restaurant Brand Video Series',
      category: 'video',
      client: 'Spice Garden Restaurant',
      description: 'Mouth-watering food videos and behind-the-scenes content',
      image: 'https://readdy.ai/api/search-image?query=Professional%20food%20photography%20and%20videography%20setup%2C%20restaurant%20kitchen%2C%20chef%20preparing%20dishes%2C%20appetizing%20food%20presentation%2C%20video%20production%20equipment&width=400&height=300&seq=restaurant-001&orientation=landscape',
      results: ['2M+ Video Views', '40% Footfall Increase', '25 Viral Reels'],
      tags: ['Video Production', 'Food Photography', 'Reels']
    },
    {
      id: 3,
      title: 'Tech Startup Brand Identity',
      category: 'branding',
      client: 'InnovateTech Solutions',
      description: 'Complete brand identity and digital presence creation',
      image: 'https://readdy.ai/api/search-image?query=Modern%20tech%20startup%20branding%20materials%2C%20logo%20design%2C%20brand%20guidelines%2C%20corporate%20identity%2C%20digital%20marketing%20materials%2C%20professional%20brand%20presentation&width=400&height=300&seq=tech-001&orientation=landscape',
      results: ['Brand Recognition ↑200%', '₹10L Funding Raised', 'Market Leader Status'],
      tags: ['Logo Design', 'Brand Guidelines', 'Digital Strategy']
    },
    {
      id: 4,
      title: 'Festival Campaign - Diwali Special',
      category: 'social',
      client: 'GoldStar Jewellers',
      description: 'Festival-themed social media campaign with traditional touch',
      image: 'https://readdy.ai/api/search-image?query=Diwali%20festival%20marketing%20campaign%20with%20traditional%20Indian%20decorations%2C%20gold%20jewelry%2C%20festive%20social%20media%20posts%2C%20cultural%20celebration%20themes&width=400&height=300&seq=diwali-001&orientation=landscape',
      results: ['500K Campaign Reach', '150% Sales Boost', '1000+ Shares'],
      tags: ['Festival Marketing', 'Cultural Content', 'Seasonal Campaign']
    },
    {
      id: 5,
      title: 'Product Photography Portfolio',
      category: 'photography',
      client: 'Gadget Galaxy',
      description: 'Professional product shoots for electronics brand',
      image: 'https://readdy.ai/api/search-image?query=Professional%20product%20photography%20studio%20with%20electronics%20gadgets%2C%20smartphone%20photography%2C%20lighting%20setup%2C%20clean%20white%20background%2C%20commercial%20photography&width=400&height=300&seq=gadget-001&orientation=landscape',
      results: ['50+ Products Shot', '90% Conversion Rate', 'Amazon Best Seller'],
      tags: ['Product Photography', 'E-commerce', 'Studio Setup']
    },
    {
      id: 6,
      title: 'Influencer Collaboration Campaign',
      category: 'social',
      client: 'BeautyBliss Cosmetics',
      description: 'Multi-influencer campaign across beauty segment',
      image: 'https://readdy.ai/api/search-image?query=Beauty%20influencer%20collaboration%20campaign%20with%20cosmetics%20products%2C%20makeup%20tutorials%2C%20social%20media%20content%20creation%2C%20beauty%20bloggers%2C%20colorful%20makeup&width=400&height=300&seq=beauty-001&orientation=landscape',
      results: ['20 Influencers', '5M+ Impressions', '₹15L ROI'],
      tags: ['Influencer Marketing', 'Beauty', 'Collaboration']
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

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
  }, [filteredProjects]);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'var(--font-inter)' }}>
            FEATURED <span className="text-red-600">PROJECTS</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Explore our most successful campaigns and creative solutions that delivered exceptional results for our clients.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer ${
                  activeFilter === filter.id
                    ? 'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-red-50 hover:text-red-600 border border-gray-200'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
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
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {project.client}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-inter)' }}>
                      {project.title}
                    </h3>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {project.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Results:</h4>
                    <ul className="space-y-1">
                      {project.results.map((result, idx) => (
                        <li key={idx} className="flex items-center text-sm text-green-600 font-medium">
                          <div className="w-4 h-4 flex items-center justify-center mr-2">
                            <i className="ri-check-line"></i>
                          </div>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-3 rounded-full font-semibold hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer">
                    View Case Study
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Create Your Success Story?</h3>
            <p className="text-red-200 mb-6">Let's discuss how we can transform your brand with our proven strategies.</p>
            <button className="bg-white text-red-600 px-8 py-3 rounded-full font-bold hover:bg-red-50 transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer">
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}