'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Collections() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const categories = [
    { id: 'all', name: 'All Collections' },
    { id: 'bridal', name: 'Bridal' },
    { id: 'diamond', name: 'Diamond' },
    { id: 'gold', name: 'Gold' },
    { id: 'silver', name: 'Silver' },
    { id: 'gemstone', name: 'Gemstones' }
  ];

  const products = [
    {
      id: 1,
      name: 'Royal Bridal Necklace Set',
      category: 'bridal',
      price: '₹2,50,000',
      image: 'https://readdy.ai/api/search-image?query=Elegant%20Indian%20bridal%20gold%20necklace%20set%20with%20intricate%20traditional%20designs%2C%20heavy%20gold%20work%2C%20matching%20earrings%2C%20red%20velvet%20background%2C%20luxury%20jewelry%20photography%2C%20detailed%20craftsmanship%2C%20wedding%20jewelry%20collection&width=400&height=500&seq=prod-001&orientation=portrait',
      rating: 5,
      isNew: true
    },
    {
      id: 2,
      name: 'Diamond Solitaire Ring',
      category: 'diamond',
      price: '₹1,85,000',
      image: 'https://readdy.ai/api/search-image?query=Beautiful%20diamond%20solitaire%20engagement%20ring%20with%20brilliant%20cut%20center%20stone%2C%20white%20gold%20band%2C%20elegant%20presentation%2C%20clean%20white%20background%2C%20luxury%20jewelry%20photography%2C%20sparkling%20diamond%2C%20premium%20quality&width=400&height=500&seq=prod-002&orientation=portrait',
      rating: 5,
      isBestseller: true
    },
    {
      id: 3,
      name: 'Traditional Gold Bangles',
      category: 'gold',
      price: '₹95,000',
      image: 'https://readdy.ai/api/search-image?query=Set%20of%20traditional%20Indian%20gold%20bangles%20with%20intricate%20patterns%2C%20elegant%20gold%20finish%2C%20warm%20lighting%2C%20rich%20maroon%20background%2C%20detailed%20gold%20work%2C%20luxury%20jewelry%20display%2C%20traditional%20craftsmanship&width=400&height=500&seq=prod-003&orientation=portrait',
      rating: 4,
      isNew: false
    },
    {
      id: 4,
      name: 'Emerald Statement Earrings',
      category: 'gemstone',
      price: '₹1,25,000',
      image: 'https://readdy.ai/api/search-image?query=Stunning%20emerald%20drop%20earrings%20with%20gold%20setting%2C%20vibrant%20green%20emeralds%2C%20elegant%20design%2C%20luxury%20jewelry%20photography%2C%20sophisticated%20background%2C%20precious%20gemstone%20jewelry%2C%20high-end%20craftsmanship&width=400&height=500&seq=prod-004&orientation=portrait',
      rating: 5,
      isBestseller: true
    },
    {
      id: 5,
      name: 'Contemporary Silver Chain',
      category: 'silver',
      price: '₹25,000',
      image: 'https://readdy.ai/api/search-image?query=Modern%20silver%20chain%20necklace%20with%20contemporary%20design%2C%20sleek%20finish%2C%20minimalist%20style%2C%20clean%20background%2C%20professional%20jewelry%20photography%2C%20elegant%20silver%20piece%2C%20contemporary%20jewelry%20collection&width=400&height=500&seq=prod-005&orientation=portrait',
      rating: 4,
      isNew: true
    },
    {
      id: 6,
      name: 'Ruby Tennis Bracelet',
      category: 'gemstone',
      price: '₹1,45,000',
      image: 'https://readdy.ai/api/search-image?query=Elegant%20ruby%20tennis%20bracelet%20with%20alternating%20rubies%20and%20diamonds%2C%20gold%20setting%2C%20luxury%20jewelry%20photography%2C%20rich%20red%20gemstones%2C%20sophisticated%20display%2C%20high-end%20bracelet%20design&width=400&height=500&seq=prod-006&orientation=portrait',
      rating: 5,
      isNew: false
    },
    {
      id: 7,
      name: 'Bridal Maang Tikka',
      category: 'bridal',
      price: '₹75,000',
      image: 'https://readdy.ai/api/search-image?query=Traditional%20Indian%20bridal%20maang%20tikka%20with%20intricate%20gold%20work%2C%20pearls%20and%20precious%20stones%2C%20detailed%20craftsmanship%2C%20elegant%20bridal%20jewelry%2C%20luxury%20photography%2C%20traditional%20wedding%20accessories&width=400&height=500&seq=prod-007&orientation=portrait',
      rating: 5,
      isBestseller: false
    },
    {
      id: 8,
      name: 'Diamond Pendant Set',
      category: 'diamond',
      price: '₹2,10,000',
      image: 'https://readdy.ai/api/search-image?query=Exquisite%20diamond%20pendant%20necklace%20set%20with%20matching%20earrings%2C%20brilliant%20diamonds%2C%20white%20gold%20setting%2C%20luxury%20jewelry%20collection%2C%20elegant%20presentation%2C%20high-end%20diamond%20jewelry&width=400&height=500&seq=prod-008&orientation=portrait',
      rating: 5,
      isNew: true
    },
    {
      id: 9,
      name: 'Gold Chain Collection',
      category: 'gold',
      price: '₹65,000',
      image: 'https://readdy.ai/api/search-image?query=Beautiful%20gold%20chain%20with%20traditional%20Indian%20design%2C%20intricate%20gold%20work%2C%20warm%20golden%20lighting%2C%20elegant%20presentation%2C%20luxury%20gold%20jewelry%2C%20detailed%20craftsmanship%2C%20premium%20quality&width=400&height=500&seq=prod-009&orientation=portrait',
      rating: 4,
      isBestseller: true
    }
  ];

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(product => product.category === selectedCategory);

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
      { threshold: 0.1, rootMargin: '50px' }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [filteredProducts]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <div key={i} className="w-4 h-4 flex items-center justify-center">
        <i className={`ri-star-${i < rating ? 'fill' : 'line'} text-red-500`}></i>
      </div>
    ));
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Our <span style={{ color: 'red' }}>Collections</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our exquisite range of handcrafted jewelry, each piece representing the pinnacle of artistry and elegance.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold whitespace-nowrap cursor-pointer transition-all duration-300 ${selectedCategory === category.id
                  ? 'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 border border-gray-300 hover:border-red-400 hover:text-red-600'
                  }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                ref={el => { itemRefs.current[index] = el; }}
                data-index={index}
                className={`group cursor-pointer transition-all duration-700 transform ${visibleItems.includes(index)
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-10 opacity-0'
                  }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Link href={`/product/${product.id}`}>
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                    <div className="relative">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-80 object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      />

                      {product.isNew && (
                        <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          New
                        </div>
                      )}

                      {product.isBestseller && (
                        <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          Bestseller
                        </div>
                      )}

                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                        <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                          <i className="ri-heart-line text-gray-700 hover:text-red-500 transition-colors duration-300"></i>
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors duration-300" style={{ fontFamily: 'Playfair Display, serif' }}>
                        {product.name}
                      </h3>

                      <div className="flex items-center mb-3">
                        <div className="flex space-x-1">
                          {renderStars(product.rating)}
                        </div>
                        <span className="ml-2 text-sm text-gray-500">({product.rating}.0)</span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-red-600">
                          {product.price}
                        </span>

                        <div className="flex items-center text-red-600 font-semibold group-hover:text-red-700 transition-colors duration-300">
                          <span className="text-sm">View Details</span>
                          <div className="w-4 h-4 ml-1 flex items-center justify-center transform group-hover:translate-x-1 transition-transform duration-300">
                            <i className="ri-arrow-right-line"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <i className="ri-search-line text-4xl text-gray-400"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No products found</h3>
              <p className="text-gray-500">Try selecting a different category</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}