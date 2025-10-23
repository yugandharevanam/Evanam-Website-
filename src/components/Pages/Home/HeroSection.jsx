import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-DarkGray via-PrimaryColor to-DarkGray text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white bg-opacity-5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white bg-opacity-5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white bg-opacity-3 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center">
          {/* Trust Badge */}
          <div className={`inline-flex items-center px-4 py-2 bg-white bg-opacity-10 backdrop-blur-sm rounded-full text-sm font-medium mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
            Trusted by 500+ Businesses Worldwide
          </div>

          {/* Main Headline */}
          <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="block">We Fix Messy</span>
            <span className="block bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Business Systems</span>
            <span className="block">To Enable Growth</span>
          </h1>

          {/* Subtitle */}
          <p className={`text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 text-gray-200 max-w-4xl mx-auto px-4 leading-relaxed transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            We design and automate your sales, marketing, and core operations, delivering 
            <span className="text-white font-semibold"> end‑to‑end digital transformation</span> powered by AI.
          </p>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
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
          <div className={`grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 sm:mt-20 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
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
        
        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16 px-4">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 sm:p-6 text-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2">Business Analytics</h3>
            <p className="text-gray-200 text-sm sm:text-base">Data Engineering Dashboard</p>
          </div>
          
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 sm:p-6 text-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2">DevOps and CI/CD</h3>
            <p className="text-gray-200 text-sm sm:text-base">Engineering</p>
          </div>
          
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 sm:p-6 text-center sm:col-span-2 lg:col-span-1">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
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
