'use client';

import { useState, useEffect, useRef } from 'react';

export default function BrandValues() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const values = [
    {
      icon: 'ri-hammer-line',
      title: 'Exceptional Craftsmanship',
      description: 'Every piece is meticulously handcrafted by master artisans using traditional techniques passed down through generations.',
      image: 'https://readdy.ai/api/search-image?query=Close-up%20of%20skilled%20hands%20crafting%20intricate%20gold%20jewelry%2C%20traditional%20Indian%20jewelry%20making%20tools%2C%20detailed%20craftsmanship%2C%20warm%20workshop%20lighting%2C%20authentic%20artisan%20workspace%2C%20precision%20work%20on%20precious%20metals&width=300&height=200&seq=craft-001&orientation=landscape'
    },
    {
      icon: 'ri-gem-line',
      title: 'Premium Quality',
      description: 'We source only the finest materials and gemstones, ensuring each piece meets our stringent quality standards.',
      image: 'https://readdy.ai/api/search-image?query=Collection%20of%20premium%20gemstones%20and%20gold%20materials%2C%20high-quality%20jewelry%20components%2C%20sparkling%20diamonds%20and%20precious%20stones%2C%20luxury%20materials%20display%2C%20professional%20photography&width=300&height=200&seq=quality-001&orientation=landscape'
    },
    {
      icon: 'ri-heart-line',
      title: 'Customer Trust',
      description: 'Building lasting relationships through transparency, authenticity, and personalized service for over three decades.',
      image: 'https://readdy.ai/api/search-image?query=Happy%20customer%20being%20served%20in%20luxury%20jewelry%20store%2C%20smiling%20faces%2C%20personal%20consultation%2C%20elegant%20showroom%20interior%2C%20customer%20satisfaction%2C%20professional%20service&width=300&height=200&seq=trust-001&orientation=landscape'
    },
    {
      icon: 'ri-leaf-line',
      title: 'Ethical Practices',
      description: 'Committed to responsible sourcing and sustainable practices while supporting local artisan communities.',
      image: 'https://readdy.ai/api/search-image?query=Sustainable%20jewelry%20workshop%20with%20eco-friendly%20practices%2C%20ethical%20sourcing%20documentation%2C%20responsible%20craftsmanship%2C%20green%20business%20practices%2C%20environmental%20consciousness&width=300&height=200&seq=ethical-001&orientation=landscape'
    },
    {
      icon: 'ri-star-line',
      title: 'Innovation & Tradition',
      description: 'Blending time-honored techniques with contemporary designs to create jewelry for modern generations.',
      image: 'https://readdy.ai/api/search-image?query=Modern%20jewelry%20design%20studio%20with%20traditional%20and%20contemporary%20pieces%2C%20fusion%20of%20old%20and%20new%20techniques%2C%20innovative%20designs%2C%20creative%20workspace%2C%20artistic%20jewelry%20collection&width=300&height=200&seq=innovation-001&orientation=landscape'
    },
    {
      icon: 'ri-award-line',
      title: 'Excellence Recognition',
      description: 'Certified quality and recognized expertise that has earned trust and appreciation from thousands of customers.',
      image: 'https://readdy.ai/api/search-image?query=Jewelry%20quality%20certificates%2C%20hallmark%20certifications%2C%20awards%20and%20recognition%2C%20professional%20documentation%2C%20quality%20assurance%2C%20industry%20standards%20compliance&width=300&height=200&seq=excellence-001&orientation=landscape'
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
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Our <span style={{ color: 'red' }}>Values</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The principles that guide every aspect of our business and define who we are as craftsmen and custodians of tradition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              // ref={el => cardRefs.current[index] = el}
              ref={el => { cardRefs.current[index] = el; }}
              data-index={index}
              className={`group transition-all duration-700 transform ${visibleCards.includes(index)
                ? 'translate-y-0 opacity-100'
                : 'translate-y-10 opacity-0'
                }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden h-full">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={value.image}
                    alt={value.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                      <i className={`${value.icon} text-red-600 text-xl`}></i>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors duration-300" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}