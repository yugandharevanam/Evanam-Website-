import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop&crop=center" 
          alt="Business Technology Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70"></div>
      </div>


      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center">
          {/* Trust Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white bg-opacity-10 backdrop-blur-sm rounded-full text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
            Trusted by 500+ Businesses Worldwide
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
            <span className="block">We Fix Messy</span>
            <span className="block bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Business Systems</span>
            <span className="block">To Enable Growth</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 text-gray-200 max-w-4xl mx-auto px-4 leading-relaxed">
            We design and automate your sales, marketing, and core operations, delivering 
            <span className="text-white font-semibold"> end‑to‑end digital transformation</span> powered by AI.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4">
            <Link 
              to="/contact-us" 
              className="group relative w-full sm:w-auto bg-white text-DarkGray px-8 sm:px-10 py-4 sm:py-5 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-white/20 hover:scale-105"
            >
              <span className="relative z-10">Get My Free Fix Plan</span>
              <div className="absolute inset-0 bg-gradient-to-r from-OrangeAccent to-RedAccent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            <Link 
              to="/about-us" 
              className="group w-full sm:w-auto border-2 border-white text-white px-8 sm:px-10 py-4 sm:py-5 rounded-xl font-semibold text-lg hover:bg-white hover:text-DarkGray transition-all duration-300 backdrop-blur-sm hover:scale-105"
            >
              <span className="flex items-center justify-center">
                Our Story
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 sm:mt-20">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-gray-300 text-sm sm:text-base">Businesses Transformed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2">99%</div>
              <div className="text-gray-300 text-sm sm:text-base">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-gray-300 text-sm sm:text-base">AI Support</div>
            </div>
          </div>
        </div>
        
        {/* Feature Cards with Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16 px-4">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 sm:p-6 text-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 rounded-full overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=400&fit=crop&crop=center" 
                alt="Business Analytics" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2">Business Analytics</h3>
            <p className="text-gray-200 text-sm sm:text-base">Data Engineering Dashboard</p>
          </div>
          
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 sm:p-6 text-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 rounded-full overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=400&fit=crop&crop=center" 
                alt="DevOps and CI/CD" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2">DevOps and CI/CD</h3>
            <p className="text-gray-200 text-sm sm:text-base">Engineering</p>
          </div>
          
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 sm:p-6 text-center sm:col-span-2 lg:col-span-1">
            <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 rounded-full overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=400&fit=crop&crop=center" 
                alt="Data Analytics" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2">Data Analytics</h3>
            <p className="text-gray-200 text-sm sm:text-base">and AI Analysis</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
