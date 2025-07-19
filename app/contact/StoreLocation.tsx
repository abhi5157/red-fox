
'use client';

export default function StoreLocation() {
  return (
    <section className="bg-gray-50 py-16 px-8 lg:px-12">
      <div className="max-w-lg mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'var(--font-inter)' }}>
          Visit Our <span className="text-red-600">Office</span>
        </h2>
        <p className="text-gray-600 mb-8">
          Located in the heart of Patna, our creative studio is where ideas come to life. Drop by for a coffee and let's discuss your next big project.
        </p>

        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex items-start space-x-4 mb-6">
            <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
              <i className="ri-map-pin-line text-white text-xl"></i>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">REDFOX Office</h3>
              <p className="text-gray-600 leading-relaxed">
                Usha Rani Sinha House<br />
                Road No. 5/A, Rajendra Nagar<br />
                Patna - 800016, Bihar, India
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                <i className="ri-phone-line text-red-600"></i>
              </div>
              <div>
                <div className="font-semibold text-gray-900">Phone</div>
                <div className="text-gray-600">+91 612 2670011</div>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                <i className="ri-smartphone-line text-red-600"></i>
              </div>
              <div>
                <div className="font-semibold text-gray-900">Mobile</div>
                <div className="text-gray-600">+91 9709600011</div>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                <i className="ri-mail-line text-red-600"></i>
              </div>
              <div>
                <div className="font-semibold text-gray-900">Email</div>
                <div className="text-gray-600">team@redfoxonline.co.in</div>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                <i className="ri-time-line text-red-600"></i>
              </div>
              <div>
                <div className="font-semibold text-gray-900">Working Hours</div>
                <div className="text-gray-600">Mon-Sat: 9:00 AM - 7:00 PM</div>
              </div>
            </div>
          </div>
        </div>

        {/* Google Maps Embed */}
        <div className="rounded-2xl overflow-hidden shadow-lg mb-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.8833825442754!2d85.13489531504084!3d25.59584008374715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed582a5cd0b5b1%3A0x9b35b2b6e4a4e6b1!2sRajendra%20Nagar%2C%20Patna%2C%20Bihar!5e0!3m2!1sen!2sin!4v1642086254821!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="REDFOX Office Location"
          ></iframe>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4">
          <a
            href="https://wa.me/919709600011?text=Hi%20REDFOX,%20I%20would%20like%20to%20discuss%20a%20marketing%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-6 py-4 rounded-xl text-center font-semibold hover:bg-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer"
          >
            <div className="w-6 h-6 flex items-center justify-center mx-auto mb-2">
              <i className="ri-whatsapp-line text-xl"></i>
            </div>
            WhatsApp
          </a>
          
          <a
            href="tel:+916122670011"
            className="bg-blue-500 text-white px-6 py-4 rounded-xl text-center font-semibold hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer"
          >
            <div className="w-6 h-6 flex items-center justify-center mx-auto mb-2">
              <i className="ri-phone-line text-xl"></i>
            </div>
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
}
