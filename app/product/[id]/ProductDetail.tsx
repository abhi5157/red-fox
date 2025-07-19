'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  originalPrice?: string;
  image: string;
  gallery: string[];
  rating: number;
  reviews: number;
  description: string;
  features: string[];
  specifications: { [key: string]: string };
  availability: string;
  deliveryTime: string;
}

export default function ProductDetail({ productId }: { productId: string }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);

  const product: Product = {
    id: parseInt(productId),
    name: 'Royal Bridal Necklace Set',
    category: 'Bridal Collection',
    price: '₹2,50,000',
    originalPrice: '₹2,80,000',
    image: 'https://readdy.ai/api/search-image?query=Luxurious%20Indian%20bridal%20gold%20necklace%20set%20with%20intricate%20traditional%20designs%2C%20heavy%20gold%20work%2C%20matching%20earrings%2C%20elegant%20red%20velvet%20background%2C%20professional%20jewelry%20photography%2C%20detailed%20craftsmanship%2C%20wedding%20jewelry&width=600&height=800&seq=detail-001&orientation=portrait',
    gallery: [
      'https://readdy.ai/api/search-image?query=Luxurious%20Indian%20bridal%20gold%20necklace%20set%20with%20intricate%20traditional%20designs%2C%20heavy%20gold%20work%2C%20matching%20earrings%2C%20elegant%20red%20velvet%20background%2C%20professional%20jewelry%20photography%2C%20detailed%20craftsmanship%2C%20wedding%20jewelry&width=600&height=800&seq=gallery-001&orientation=portrait',
      'https://readdy.ai/api/search-image?query=Close-up%20detail%20of%20intricate%20gold%20work%20on%20bridal%20necklace%2C%20traditional%20Indian%20patterns%2C%20fine%20craftsmanship%2C%20luxury%20jewelry%20macro%20photography%2C%20golden%20texture%2C%20artistic%20details&width=600&height=800&seq=gallery-002&orientation=portrait',
      'https://readdy.ai/api/search-image?query=Elegant%20bridal%20earrings%20matching%20the%20necklace%20set%2C%20traditional%20Indian%20jewelry%20design%2C%20gold%20and%20gemstone%20work%2C%20luxury%20photography%2C%20sophisticated%20presentation&width=600&height=800&seq=gallery-003&orientation=portrait',
      'https://readdy.ai/api/search-image?query=Complete%20bridal%20jewelry%20set%20displayed%20on%20elegant%20mannequin%2C%20traditional%20Indian%20bridal%20accessories%2C%20luxury%20presentation%2C%20warm%20lighting%2C%20premium%20jewelry%20showcase&width=600&height=800&seq=gallery-004&orientation=portrait'
    ],
    rating: 5,
    reviews: 127,
    description: 'This exquisite Royal Bridal Necklace Set represents the pinnacle of traditional Indian craftsmanship. Handcrafted by master artisans, each piece in this set tells a story of timeless elegance and cultural heritage. The intricate gold work features traditional motifs that have been passed down through generations, making it perfect for the most special day of your life.',
    features: [
      'Handcrafted by master artisans with over 20 years of experience',
      '22K gold with traditional Indian motifs and patterns',
      'Includes matching earrings and adjustable chain length',
      'Certified authentic with quality guarantee',
      'Gift packaging with premium jewelry box',
      'Lifetime polishing and maintenance service'
    ],
    specifications: {
      'Metal Purity': '22K Gold',
      'Weight': '185 grams (approx.)',
      'Chain Length': '16-18 inches (adjustable)',
      'Earring Type': 'Traditional Chandbali',
      'Craftsmanship': 'Hand-forged traditional techniques',
      'Origin': 'Muzaffarpur, Bihar'
    },
    availability: 'In Stock',
    deliveryTime: '3-5 business days'
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <div key={i} className="w-5 h-5 flex items-center justify-center">
        <i className={`ri-star-${i < rating ? 'fill' : 'line'} text-yellow-400`}></i>
      </div>
    ));
  };

  const handleAddToCart = () => {
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-yellow-600 cursor-pointer">Home</Link>
          <span>/</span>
          <Link href="/collections" className="hover:text-yellow-600 cursor-pointer">Collections</Link>
          <span>/</span>
          <span className="text-gray-900">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-4">
            <div className="aspect-w-4 aspect-h-5 bg-gray-100 rounded-2xl overflow-hidden">
              <img
                src={product.gallery[selectedImage]}
                alt={product.name}
                className="w-full h-96 md:h-[500px] object-cover object-top"
              />
            </div>
            
            <div className="grid grid-cols-4 gap-4">
              {product.gallery.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-all duration-300 cursor-pointer ${
                    selectedImage === index ? 'border-yellow-500' : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover object-top"
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-yellow-600 font-semibold mb-2">{product.category}</p>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                {product.name}
              </h1>
              
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center space-x-1">
                  {renderStars(product.rating)}
                </div>
                <span className="text-gray-600">({product.reviews} reviews)</span>
                <span className="text-green-600 font-semibold">{product.availability}</span>
              </div>
            </div>

            <div className="border-t border-b border-gray-200 py-6">
              <div className="flex items-center space-x-4 mb-4">
                <span className="text-3xl font-bold text-gray-900">{product.price}</span>
                {product.originalPrice && (
                  <span className="text-xl text-gray-500 line-through">{product.originalPrice}</span>
                )}
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                  Save ₹30,000
                </span>
              </div>
              
              <p className="text-gray-600 mb-6">{product.description}</p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <span className="text-gray-700 font-semibold">Quantity:</span>
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-2 text-gray-600 hover:text-gray-800 cursor-pointer"
                    >
                      -
                    </button>
                    <span className="px-4 py-2 border-l border-r border-gray-300">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-2 text-gray-600 hover:text-gray-800 cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={handleAddToCart}
                    className="flex-1 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer"
                  >
                    Add to Cart
                  </button>
                  
                  <Link
                    href="/contact"
                    className="flex-1 border-2 border-yellow-500 text-yellow-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-50 transition-all duration-300 text-center whitespace-nowrap cursor-pointer"
                  >
                    Book Appointment
                  </Link>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-5 h-5 flex items-center justify-center mt-0.5">
                        <i className="ri-check-line text-green-500"></i>
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Specifications</h3>
                <div className="space-y-3">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-2 border-b border-gray-100">
                      <span className="text-gray-600 font-medium">{key}</span>
                      <span className="text-gray-900">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-yellow-50 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-5 h-5 flex items-center justify-center">
                    <i className="ri-truck-line text-yellow-600"></i>
                  </div>
                  <span className="font-semibold text-gray-900">Fast Delivery</span>
                </div>
                <p className="text-gray-700">Delivered within {product.deliveryTime} with secure packaging</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showSuccess && (
        <div className="fixed bottom-8 right-8 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-slide-up">
          <div className="flex items-center space-x-2">
            <div className="w-5 h-5 flex items-center justify-center">
              <i className="ri-check-line"></i>
            </div>
            <span>Added to cart successfully!</span>
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  );
}