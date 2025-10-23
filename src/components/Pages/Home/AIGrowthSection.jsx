import React from 'react';

const AIGrowthSection = () => {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-r from-PrimaryColor to-DarkGray text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left Side - Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              AI-Driven Growth Stack
            </h2>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-gray-200">
              Smarter marketing powered by AI and automation.
            </p>
            
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">Deploy chat-bots that resolve tickets 24/7</h3>
                  <p className="text-gray-200 text-sm sm:text-base">Automated customer support that never sleeps</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">Cheaper ads and higher conversions</h3>
                  <p className="text-gray-200 text-sm sm:text-base">AI-optimized advertising campaigns for better ROI</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Side - Image Placeholder */}
          <div className="text-center">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 sm:p-8">
              <div className="text-4xl sm:text-6xl mb-3 sm:mb-4">📚</div>
              <p className="text-gray-200 text-sm sm:text-base">Digital Reading</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIGrowthSection;
