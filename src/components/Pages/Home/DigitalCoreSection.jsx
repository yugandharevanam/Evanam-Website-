import React from 'react';

const DigitalCoreSection = () => {
  const features = [
    "Real-time insights & governance",
    "AI & bots cut busywork", 
    "Streamlined SCM / ERP / CRM"
  ];

  return (
    <section className="py-20 bg-SecondaryColor">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Friction-Free Digital Core
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Build a digital foundation that runs smoothly.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition duration-300">
              <div className="w-16 h-16 bg-PrimaryColor bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-PrimaryColor rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {feature}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DigitalCoreSection;
