import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ServicesSection = () => {
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

    const element = document.getElementById('services-section');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      id: 1,
      title: "IT Consulting & Software Development",
      description: "Transform your business with cutting-edge technology solutions. Our expert team delivers custom software development, system integration, and digital transformation services.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=center",
      features: ["Custom Software", "System Integration", "Cloud Migration", "Technical Consulting"],
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 2,
      title: "Tech Strategy Consulting", 
      description: "Shape your digital future with strategic technology planning. We help businesses navigate complex tech landscapes and implement solutions that drive real growth.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center",
      features: ["Digital Strategy", "Technology Roadmap", "Process Optimization", "Change Management"],
      color: "from-green-500 to-green-600"
    },
    {
      id: 3,
      title: "AI & Automation Solutions",
      description: "Leverage artificial intelligence to automate processes and boost efficiency. Our AI solutions help businesses stay competitive in the digital age.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop&crop=center",
      features: ["AI Implementation", "Process Automation", "Machine Learning", "Smart Analytics"],
      color: "from-purple-500 to-purple-600"
    },
    {
      id: 4,
      title: "Data Analytics & Insights",
      description: "Transform raw data into actionable insights. Our data experts help you make informed decisions and unlock the hidden potential in your business data.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center",
      features: ["Data Analytics", "Business Intelligence", "Predictive Modeling", "Data Visualization"],
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section id="services-section" className="py-20 sm:py-32 bg-gradient-to-b from-SecondaryColor to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23374151' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-PrimaryColor bg-opacity-10 rounded-full text-PrimaryColor text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-PrimaryColor rounded-full mr-2"></span>
            Our Services
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Transform Your Business With
            <span className="block bg-gradient-to-r from-PrimaryColor to-DarkGray bg-clip-text text-transparent">Expert Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We deliver comprehensive technology solutions that drive growth, efficiency, and innovation across all business operations.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
            >
              {/* Card Header with Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/40"></div>
                <div className="absolute bottom-4 left-6 right-6">
                  <h3 className="text-xl font-bold text-white mb-1">{service.title}</h3>
                  <div className="w-12 h-1 bg-white bg-opacity-50 rounded"></div>
                </div>
                <div className="absolute top-4 right-4 w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white group-hover:rotate-45 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">Key Features</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-PrimaryColor rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <Link 
                  to="/services" 
                  className="group/btn inline-flex items-center justify-center w-full bg-PrimaryColor text-white px-6 py-3 rounded-lg font-semibold hover:bg-DarkGray transition-all duration-300 hover:scale-105"
                >
                  Learn More
                  <svg className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-16 sm:mt-20 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-gradient-to-r from-PrimaryColor to-DarkGray rounded-2xl p-8 sm:p-12 text-white">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
              Let's discuss how our expert solutions can help you achieve your digital transformation goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact-us" 
                className="bg-white text-PrimaryColor px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105"
              >
                Get Free Consultation
              </Link>
              <Link 
                to="/services" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-PrimaryColor transition-all duration-300 hover:scale-105"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
