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
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left Side - Pain Points */}
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 sm:mb-8">
              The Pain
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
            
            {/* Toy Pyramid Image Placeholder */}
            <div className="bg-gray-200 rounded-lg p-6 sm:p-8 mb-6 sm:mb-8">
              <div className="text-4xl sm:text-6xl mb-3 sm:mb-4">🧸</div>
              <p className="text-gray-500 text-sm sm:text-base">Wooden Toy Pyramid</p>
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
