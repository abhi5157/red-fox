'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function FeaturedCategories() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const categories = [
    {
      id: 1,
      name: 'Bridal Collection',
      description: 'Exquisite pieces for your special day',
      image: 'https://readdy.ai/api/search-image?query=Beautiful%20Indian%20bridal%20jewelry%20collection%20with%20intricate%20gold%20necklaces%2C%20earrings%2C%20and%20bangles%2C%20rich%20red%20velvet%20background%2C%20elegant%20lighting%2C%20traditional%20craftsmanship%2C%20luxury%20wedding%20jewelry%20showcase%2C%20detailed%20gold%20work%2C%20precious%20stones%2C%20sophisticated%20display&width=600&height=400&seq=bridal-001&orientation=landscape',
      link: '/collections/bridal'
    },
    {
      id: 2,
      name: 'Diamond Jewelry',
      description: 'Brilliant diamonds for timeless elegance',
      image: 'https://readdy.ai/api/search-image?query=Sparkling%20diamond%20jewelry%20collection%20with%20rings%2C%20necklaces%2C%20and%20earrings%2C%20pristine%20white%20background%2C%20studio%20lighting%2C%20brilliant%20cut%20diamonds%2C%20luxury%20jewelry%20photography%2C%20elegant%20presentation%2C%20high-end%20diamond%20pieces%2C%20professional%20showcase&width=600&height=400&seq=diamond-001&orientation=landscape',
      link: '/collections/diamonds'
    },
    {
      id: 3,
      name: 'Gold Ornaments',
      description: 'Traditional and contemporary gold designs',
      image: 'https://readdy.ai/api/search-image?query=Elegant%20gold%20jewelry%20collection%20featuring%20traditional%20and%20modern%20designs%2C%20warm%20golden%20lighting%2C%20rich%20maroon%20velvet%20background%2C%20intricate%20gold%20necklaces%2C%20bangles%2C%20and%20chains%2C%20luxury%20gold%20ornaments%20display%2C%20sophisticated%20jewelry%20photography&width=600&height=400&seq=gold-001&orientation=landscape',
      link: '/collections/gold'
    },
    {
      id: 4,
      name: 'Precious Gemstones',
      description: 'Rare gems in stunning settings',
      image: 'https://readdy.ai/api/search-image?query=Colorful%20precious%20gemstone%20jewelry%20with%20emeralds%2C%20rubies%2C%20sapphires%2C%20and%20other%20rare%20gems%2C%20elegant%20black%20background%2C%20dramatic%20lighting%2C%20luxury%20gemstone%20collection%2C%20professional%20jewelry%20photography%2C%20vibrant%20colors%2C%20sophisticated%20display&width=600&height=400&seq=gems-001&orientation=landscape',
      link: '/collections/gemstones'
    },
    {
      id: 5,
      name: 'Silver Collection',
      description: 'Contemporary silver designs for modern style',
      image: 'https://readdy.ai/api/search-image?query=Modern%20silver%20jewelry%20collection%20with%20contemporary%20designs%2C%20sleek%20silver%20necklaces%2C%20bracelets%2C%20and%20rings%2C%20minimalist%20white%20background%2C%20clean%20studio%20lighting%2C%20elegant%20silver%20pieces%2C%20sophisticated%20modern%20jewelry%20photography&width=600&height=400&seq=silver-001&orientation=landscape',
      link: '/collections/silver'
    },
    {
      id: 6,
      name: 'Custom Designs',
      description: 'Personalized jewelry crafted just for you',
      image: 'https://readdy.ai/api/search-image?query=Custom%20jewelry%20design%20workshop%20with%20artisan%20crafting%20personalized%20jewelry%2C%20elegant%20workbench%2C%20various%20jewelry%20tools%2C%20gold%20and%20silver%20materials%2C%20soft%20warm%20lighting%2C%20artistic%20jewelry%20creation%20process%2C%20handmade%20luxury%20pieces&width=600&height=400&seq=custom-001&orientation=landscape',
      link: '/collections/custom'
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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Our <span style={{ color: '#C4A23F' }}>Collections</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our carefully curated selection of fine jewelry, each piece telling its own story of elegance and craftsmanship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={category.id}
              ref={el => { cardRefs.current[index] = el; }}
              data-index={index}
              className={`group cursor-pointer transition-all duration-700 transform ${visibleCards.includes(index)
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-10 opacity-0'
                }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <Link href={category.link}>
                <div className="relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 bg-white">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
                      <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <i className="ri-sparkle-2-line text-white text-lg"></i>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-yellow-600 transition-colors duration-300" style={{ fontFamily: 'Playfair Display, serif' }}>
                      {category.name}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {category.description}
                    </p>

                    <div className="flex items-center text-yellow-600 font-semibold group-hover:text-yellow-700 transition-colors duration-300">
                      <span>Explore Collection</span>
                      <div className="w-4 h-4 ml-2 flex items-center justify-center transform group-hover:translate-x-1 transition-transform duration-300">
                        <i className="ri-arrow-right-line"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            href="/collections"
            className="inline-block bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer"
          >
            View All Collections
          </Link>
        </div>
      </div>
    </section>
  );
}