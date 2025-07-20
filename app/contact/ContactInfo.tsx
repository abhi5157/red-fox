'use client';

export default function ContactInfo() {
  const services = [
    {
      icon: 'ri-customer-service-line',
      title: 'Personal Consultation',
      description: 'One-on-one guidance from our jewelry experts to help you find the perfect piece.',
      availability: 'Available during store hours'
    },
    {
      icon: 'ri-palette-line',
      title: 'Custom Design Service',
      description: 'Create unique, personalized jewelry pieces tailored to your vision and preferences.',
      availability: 'By appointment only'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Certification & Appraisal',
      description: 'Professional jewelry certification and appraisal services for insurance and resale.',
      availability: 'Tuesday & Friday'
    },
    {
      icon: 'ri-tools-line',
      title: 'Repair & Maintenance',
      description: 'Expert repair services and regular maintenance to keep your jewelry looking pristine.',
      availability: 'Monday to Saturday'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Our <span style={{ color: 'red' }}>Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Beyond creating beautiful jewelry, we offer comprehensive services to ensure your complete satisfaction and lasting relationships.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <i className={`${service.icon} text-white text-2xl`}></i>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                {service.title}
              </h3>

              <p className="text-gray-600 mb-4 leading-relaxed">
                {service.description}
              </p>

              <div className="bg-red-50 rounded-lg p-3">
                <p className="text-sm font-semibold text-red-700">
                  {service.availability}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Ready to Find Your Perfect Piece?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Visit our showroom today and experience the Anshu Jewellers difference. Our team is ready to help you create memories that last a lifetime.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://wa.me/919709600011?text=Hi%20Anshu%20Jewellers%2C%20I%20would%20like%20to%20schedule%20a%20visit%20to%20your%20showroom."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer"
            >
              Schedule Visit
            </a>

            <a
              href="tel:+919612267001"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}