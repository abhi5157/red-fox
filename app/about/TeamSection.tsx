'use client';

import { useState, useEffect, useRef } from 'react';

export default function TeamSection() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const team = [
    {
      name: 'Anshu Kumar',
      position: 'Founder & Master Craftsman',
      experience: '35+ years',
      specialization: 'Traditional Bridal Jewelry',
      image: 'https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20mature%20Indian%20jewelry%20craftsman%20in%20traditional%20attire%2C%20dignified%20appearance%2C%20workshop%20background%2C%20master%20artisan%2C%20experienced%20jewelry%20maker%2C%20authentic%20traditional%20clothing%2C%20warm%20lighting&width=400&height=500&seq=team-001&orientation=portrait',
      bio: 'The visionary behind Anshu Jewellers, Master Anshu Kumar has dedicated his life to preserving traditional jewelry craftsmanship while embracing modern innovations.'
    },
    {
      name: 'Rajesh Sharma',
      position: 'Senior Design Artist',
      experience: '25+ years',
      specialization: 'Contemporary Gold Designs',
      image: 'https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20middle-aged%20Indian%20jewelry%20designer%2C%20creative%20artist%2C%20modern%20workshop%20setting%2C%20design%20sketches%20in%20background%2C%20artistic%20personality%2C%20professional%20attire&width=400&height=500&seq=team-002&orientation=portrait',
      bio: 'With over two decades of experience, Rajesh brings innovative design concepts while maintaining the essence of traditional Indian jewelry aesthetics.'
    },
    {
      name: 'Priya Verma',
      position: 'Gemstone Specialist',
      experience: '15+ years',
      specialization: 'Precious Stone Setting',
      image: 'https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20confident%20Indian%20woman%20jewelry%20expert%2C%20gemstone%20specialist%2C%20elegant%20appearance%2C%20luxury%20jewelry%20showroom%20background%2C%20professional%20attire%2C%20sophisticated%20look&width=400&height=500&seq=team-003&orientation=portrait',
      bio: 'Priya ensures every gemstone is perfectly selected and set, bringing her expertise in precious stones and quality assessment to every piece.'
    },
    {
      name: 'Vikash Singh',
      position: 'Quality Control Manager',
      experience: '20+ years',
      specialization: 'Quality Assurance',
      image: 'https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20experienced%20Indian%20quality%20control%20manager%2C%20inspection%20equipment%20in%20background%2C%20professional%20workshop%20setting%2C%20quality%20assurance%20expert%2C%20technical%20expertise&width=400&height=500&seq=team-004&orientation=portrait',
      bio: 'Vikash maintains our stringent quality standards, ensuring every piece that leaves our workshop meets the highest benchmarks of excellence.'
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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Meet Our <span style={{ color: '#C4A23F' }}>Master Craftsmen</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The skilled artisans and dedicated professionals who bring decades of expertise and passion to every piece we create.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
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
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden">
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {member.name}
                  </h3>
                  <p className="text-red-600 font-semibold mb-2">{member.position}</p>

                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 flex items-center justify-center">
                        <i className="ri-time-line text-red-500"></i>
                      </div>
                      <span>{member.experience} Experience</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 flex items-center justify-center">
                        <i className="ri-star-line text-red-500"></i>
                      </div>
                      <span>{member.specialization}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Join Our Legacy
            </h3>
            <p className="text-gray-700 mb-6">
              We're always looking for talented artisans and passionate individuals who share our commitment to excellence and traditional craftsmanship.
            </p>
            <button className="bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-3 rounded-full font-semibold hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer">
              Explore Careers
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}