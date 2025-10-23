import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CTASection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('cta-section');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="cta-section" className="py-20 sm:py-32 bg-gradient-to-br from-DarkGray via-PrimaryColor to-DarkGray text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-white bg-opacity-5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-OrangeAccent bg-opacity-10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white bg-opacity-3 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center">
          {/* Trust Indicators */}
          <div className={`inline-flex items-center px-4 py-2 bg-white bg-opacity-10 backdrop-blur-sm rounded-full text-sm font-medium mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
            Join 500+ Businesses Already Transformed
          </div>

          {/* Main CTA Headline */}
          <h2 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="block">Ready to Transform</span>
            <span className="block bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Your Business?</span>
          </h2>

          {/* CTA Description */}
          <p className={`text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 text-gray-200 max-w-4xl mx-auto px-4 leading-relaxed transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Get your <span className="text-white font-semibold">FREE business assessment</span> and discover how our AI-powered solutions can revolutionize your operations in just 30 days.
          </p>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4 mb-12 sm:mb-16 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Link 
              to="/contact-us" 
              className="group relative w-full sm:w-auto bg-white text-DarkGray px-8 sm:px-12 py-4 sm:py-6 rounded-xl font-bold text-lg sm:text-xl hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-white/20 hover:scale-105"
            >
              <span className="relative z-10 flex items-center justify-center">
                Get My Free Assessment
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-OrangeAccent to-RedAccent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            <Link 
              to="/services" 
              className="group w-full sm:w-auto border-2 border-white text-white px-8 sm:px-12 py-4 sm:py-6 rounded-xl font-bold text-lg sm:text-xl hover:bg-white hover:text-DarkGray transition-all duration-300 backdrop-blur-sm hover:scale-105"
            >
              <span className="flex items-center justify-center">
                View Our Solutions
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          </div>

          {/* Value Propositions */}
          <div className={`grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Free Assessment</h3>
              <p className="text-gray-300 text-sm">Get a comprehensive analysis of your business systems at no cost</p>
            </div>
            
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">30-Day Results</h3>
              <p className="text-gray-300 text-sm">See measurable improvements in your operations within 30 days</p>
            </div>
            
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Guaranteed Success</h3>
              <p className="text-gray-300 text-sm">99% success rate with our proven digital transformation methodology</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className={`mt-12 sm:mt-16 text-center transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-gray-300 mb-4">Or call us directly for immediate assistance</p>
            <a 
              href="tel:+919363977790" 
              className="inline-flex items-center text-white text-xl font-semibold hover:text-OrangeAccent transition-colors duration-300"
            >
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +91 93639 77790
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
