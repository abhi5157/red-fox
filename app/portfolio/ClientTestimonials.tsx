'use client';

import { useState, useEffect } from 'react';

export default function ClientTestimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: 'Rahul Sharma',
      company: 'StyleHub Fashion',
      role: 'Founder & CEO',
      content: 'REDFOX transformed our social media presence completely. Their creative campaigns increased our engagement by 300% and generated ₹5L in revenue within 3 months. Outstanding work!',
      rating: 5,
      image: 'https://readdy.ai/api/search-image?query=Professional%20Indian%20businessman%20portrait%2C%20confident%20CEO%2C%20modern%20office%20background%2C%20business%20professional%20headshot&width=200&height=200&seq=client-001&orientation=squarish'
    },
    {
      name: 'Priya Patel',
      company: 'Spice Garden Restaurant',
      role: 'Marketing Director',
      content: 'The food videos created by REDFOX went viral and brought 40% more customers to our restaurant. Their understanding of food presentation and storytelling is exceptional.',
      rating: 5,
      image: 'https://readdy.ai/api/search-image?query=Professional%20Indian%20businesswoman%20portrait%2C%20marketing%20director%2C%20modern%20office%20setting%2C%20confident%20professional%20woman&width=200&height=200&seq=client-002&orientation=squarish'
    },
    {
      name: 'Amit Kumar',
      company: 'InnovateTech Solutions',
      role: 'Co-Founder',
      content: 'From brand identity to digital strategy, REDFOX delivered everything perfectly. We secured ₹10L funding partly due to our strong brand presence they created.',
      rating: 5,
      image: 'https://readdy.ai/api/search-image?query=Young%20Indian%20tech%20entrepreneur%20portrait%2C%20startup%20founder%2C%20modern%20workspace%20background%2C%20professional%20headshot&width=200&height=200&seq=client-003&orientation=squarish'
    },
    {
      name: 'Sunita Agarwal',
      company: 'GoldStar Jewellers',
      role: 'Owner',
      content: 'Their Diwali campaign was phenomenal! 500K reach and 150% sales boost during the festival season. REDFOX understands Indian culture and marketing perfectly.',
      rating: 5,
      image: 'https://readdy.ai/api/search-image?query=Elegant%20Indian%20businesswoman%20portrait%2C%20jewelry%20store%20owner%2C%20traditional%20yet%20modern%20appearance%2C%20professional%20setting&width=200&height=200&seq=client-004&orientation=squarish'
    },
    {
      name: 'Vikash Singh',
      company: 'Gadget Galaxy',
      role: 'E-commerce Manager',
      content: 'Product photography by REDFOX helped us achieve 90% conversion rate on Amazon. Their attention to detail and understanding of e-commerce requirements is remarkable.',
      rating: 5,
      image: 'https://readdy.ai/api/search-image?query=Professional%20Indian%20man%20portrait%2C%20e-commerce%20manager%2C%20tech-savvy%20appearance%2C%20modern%20office%20environment&width=200&height=200&seq=client-005&orientation=squarish'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-red-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'var(--font-inter)' }}>
            CLIENT <span className="text-red-600">TESTIMONIALS</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear what our clients say about working with REDFOX and the results we've delivered for their businesses.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-100 rounded-full -mr-16 -mt-16 opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-red-50 rounded-full -ml-12 -mb-12 opacity-50"></div>

            <div className="relative z-10">
              <div className="flex items-center justify-center mb-8">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-6 h-6 flex items-center justify-center">
                      <i className="ri-star-fill text-yellow-400 text-xl"></i>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center mb-8">
                <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed italic mb-6">
                  "{testimonials[currentSlide].content}"
                </blockquote>
              </div>

              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 rounded-full overflow-hidden shadow-lg">
                  <img
                    src={testimonials[currentSlide].image}
                    alt={testimonials[currentSlide].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-left">
                  <div className="font-bold text-lg text-gray-900">
                    {testimonials[currentSlide].name}
                  </div>
                  <div className="text-red-600 font-semibold">
                    {testimonials[currentSlide].role}
                  </div>
                  <div className="text-gray-600 text-sm">
                    {testimonials[currentSlide].company}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                  index === currentSlide
                    ? 'bg-red-600 w-8'
                    : 'bg-gray-300 hover:bg-red-300'
                }`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer flex items-center justify-center hover:bg-red-50"
          >
            <i className="ri-arrow-left-line text-red-600 text-xl"></i>
          </button>

          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % testimonials.length)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer flex items-center justify-center hover:bg-red-50"
          >
            <i className="ri-arrow-right-line text-red-600 text-xl"></i>
          </button>
        </div>

        {/* Success Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-thumb-up-line text-white text-2xl"></i>
            </div>
            <div className="text-3xl font-bold text-red-600 mb-2">98%</div>
            <div className="text-gray-600">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-repeat-line text-white text-2xl"></i>
            </div>
            <div className="text-3xl font-bold text-red-600 mb-2">85%</div>
            <div className="text-gray-600">Repeat Clients</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-time-line text-white text-2xl"></i>
            </div>
            <div className="text-3xl font-bold text-red-600 mb-2">72h</div>
            <div className="text-gray-600">Avg Response Time</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-rocket-line text-white text-2xl"></i>
            </div>
            <div className="text-3xl font-bold text-red-600 mb-2">250%</div>
            <div className="text-gray-600">Avg ROI Boost</div>
          </div>
        </div>
      </div>
    </section>
  );
}