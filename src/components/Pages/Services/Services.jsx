import React from 'react'
import BannerMain from '../../Main/BannerMain'

const Services = () => {
  const services = [
    {
      id: 1,
      title: "IT Consulting & Software Development",
      description: "Evanam Consulting provides tech solutions to boost efficiency and growth. Services include IT consulting, software development, and digital transformation. Partner with us to unlock potential with strategic insights and advanced technology.",
      features: ["Custom Software Development", "System Integration", "Cloud Migration", "Technical Consulting"],
      icon: "💻"
    },
    {
      id: 2,
      title: "Tech Strategy Consulting", 
      description: "Evanam Consulting shapes tech strategies. Our experts drive growth, streamline operations, and boost competitiveness. Partner with us to unlock your business's potential and navigate tech confidently.",
      features: ["Digital Strategy Planning", "Technology Roadmapping", "Process Optimization", "Change Management"],
      icon: "📊"
    },
    {
      id: 3,
      title: "Custom Tech Solutions & Digital Growth",
      description: "Evanam Consulting fuels innovation with custom tech solutions for digital growth. Our experts enhance efficiency and unlock potential. Partner with us to transform ideas into strategies and stay competitive.",
      features: ["AI & Machine Learning", "Automation Solutions", "Digital Marketing Tools", "Growth Hacking"],
      icon: "🚀"
    },
    {
      id: 4,
      title: "Data Integration & Analysis",
      description: "Evanam Consulting transforms data into insights, breaking silos. Our expertise in data integration and analysis empowers decisions and maximizes potential. Partner with us to unlock data value for impactful results.",
      features: ["Data Analytics", "Business Intelligence", "Data Visualization", "Predictive Analytics"],
      icon: "📈"
    }
  ];

  return (
    <>
      <BannerMain />
      <div className="py-20 bg-SecondaryColor">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to transform your business operations and drive growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition duration-300">
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">{service.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, index) => (
                          <li key={index} className="flex items-center">
                            <div className="w-2 h-2 bg-PrimaryColor rounded-full mr-3"></div>
                            <span className="text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <button className="bg-PrimaryColor text-white px-6 py-3 rounded-lg hover:bg-DarkBlue transition duration-300">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* CTA Section */}
          <div className="mt-20 text-center">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Let's discuss how our services can help you achieve your digital transformation goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-PrimaryColor text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-DarkBlue transition duration-300">
                  Get My Free Fix Plan
                </button>
                <button className="border-2 border-PrimaryColor text-PrimaryColor px-8 py-4 rounded-lg font-semibold text-lg hover:bg-PrimaryColor hover:text-white transition duration-300">
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Services
