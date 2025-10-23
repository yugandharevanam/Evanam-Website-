import React from 'react';
import { Link } from 'react-router-dom';

const PainPointsSection = () => {
  const painPoints = [
    "Too many spreadsheets",
    "Zero real time data", 
    "Leads slip through cracks",
    "Your tools don't talk to each other",
    "Ads cost more, results shrink"
  ];

  return (
    <section className="py-16 sm:py-20 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&h=1080&fit=crop&crop=center" 
          alt="Business Solutions Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/95"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left Side - Pain Points */}
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 sm:mb-8">
              The Pain
              <span className="block text-red-500">Points</span>
            </h2>
            <div className="space-y-3 sm:space-y-4">
              {painPoints.map((point, index) => (
                <div key={index} className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-2 h-2 bg-RedAccent rounded-full flex-shrink-0"></div>
                  <p className="text-base sm:text-lg text-gray-700">{point}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Side - Solution */}
          <div className="text-center lg:text-left">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              Sound Familiar?
            </h3>
            <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8">
              Evanam can help.
            </p>
            
            {/* Solution Image */}
            <div className="relative rounded-lg overflow-hidden mb-6 sm:mb-8 shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center" 
                alt="Business Solutions" 
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white font-semibold text-lg">Transform Your Business Today</p>
              </div>
            </div>
            
            <Link 
              to="/contact-us" 
              className="inline-block bg-PrimaryColor text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-DarkGray transition duration-300 shadow-lg"
            >
              Get My Free Fix Plan
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;
