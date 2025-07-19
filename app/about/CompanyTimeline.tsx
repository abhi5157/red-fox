'use client';

import { useState, useEffect, useRef } from 'react';

export default function CompanyTimeline() {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const timelineData = [
    {
      year: '1990',
      title: 'The Beginning',
      description: 'Anshu Jewellers was founded with a small workshop in Muzaffarpur, Bihar, driven by passion for traditional Indian jewelry craftsmanship.',
      icon: 'ri-sparkling-line'
    },
    {
      year: '1995',
      title: 'First Expansion',
      description: 'Opened our first retail showroom and started serving customers across Bihar with authentic handcrafted jewelry pieces.',
      icon: 'ri-store-3-line'
    },
    {
      year: '2000',
      title: 'Master Artisans',
      description: 'Collaborated with renowned master craftsmen to enhance our design capabilities and traditional techniques.',
      icon: 'ri-hammer-line'
    },
    {
      year: '2005',
      title: 'Quality Certification',
      description: 'Received hallmark certification and established quality standards that set us apart in the jewelry industry.',
      icon: 'ri-award-line'
    },
    {
      year: '2010',
      title: 'Bridal Specialization',
      description: 'Launched our exclusive bridal collection, becoming the preferred choice for wedding jewelry in the region.',
      icon: 'ri-heart-line'
    },
    {
      year: '2015',
      title: 'Digital Presence',
      description: 'Embraced digital transformation with online presence and social media engagement to reach modern customers.',
      icon: 'ri-smartphone-line'
    },
    {
      year: '2020',
      title: 'Sustainable Practices',
      description: 'Implemented ethical sourcing and sustainable practices while maintaining traditional craftsmanship values.',
      icon: 'ri-leaf-line'
    },
    {
      year: '2025',
      title: 'Legacy Continues',
      description: 'Today, we continue to honor our heritage while embracing innovation, serving thousands of satisfied customers.',
      icon: 'ri-infinity-line'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.3, rootMargin: '50px' }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Our <span style={{ color: 'red' }}>Journey</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Three decades of dedication, innovation, and unwavering commitment to excellence in jewelry craftsmanship.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-red-400 to-red-600 rounded-full"></div>

          <div className="space-y-16">
            {timelineData.map((item, index) => (
              <div
                key={index}
                ref={el => { itemRefs.current[index] = el; }}
                data-index={index}
                className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`w-full max-w-md transition-all duration-700 transform ${visibleItems.includes(index)
                    ? 'translate-x-0 opacity-100'
                    : index % 2 === 0
                      ? '-translate-x-10 opacity-0'
                      : 'translate-x-10 opacity-0'
                    }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 ${index % 2 === 0 ? 'mr-8' : 'ml-8'
                    }`}>
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-lg">
                        <i className={`${item.icon} text-white text-xl`}></i>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-2xl font-bold text-red-600" style={{ fontFamily: 'Playfair Display, serif' }}>
                          {item.year}
                        </h3>
                      </div>
                    </div>

                    <h4 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                      {item.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-red-500 rounded-full shadow-lg"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}