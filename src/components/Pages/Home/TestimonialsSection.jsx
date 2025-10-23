import React, { useEffect, useState } from 'react';

const TestimonialsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('testimonials-section');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CEO, TechStart Inc.",
      company: "TechStart Inc.",
      content: "Evanam transformed our entire business operations. Their AI solutions increased our efficiency by 300% and reduced costs by 40%. Truly game-changing!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "CTO, DataFlow Solutions",
      company: "DataFlow Solutions",
      content: "The digital transformation journey with Evanam was seamless. Their expertise in data analytics helped us make data-driven decisions that boosted our revenue by 150%.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Operations Director, GrowthCorp",
      company: "GrowthCorp",
      content: "Evanam's automation solutions revolutionized our workflow. What used to take days now takes hours. Their team is professional, innovative, and results-driven.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    }
  ];

  return (
    <section id="testimonials-section" className="py-20 sm:py-32 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&h=1080&fit=crop&crop=center" 
          alt="Client Testimonials Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/95"></div>
      </div>
      
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-PrimaryColor bg-opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-OrangeAccent bg-opacity-5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-OrangeAccent bg-opacity-10 rounded-full text-OrangeAccent text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-OrangeAccent rounded-full mr-2"></span>
            Client Success Stories
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            What Our Clients
            <span className="block bg-gradient-to-r from-PrimaryColor to-OrangeAccent bg-clip-text text-transparent">Say About Us</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what industry leaders say about their transformation journey with Evanam.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
            {/* Quote Icon */}
            <div className="absolute top-8 left-8 text-PrimaryColor text-6xl opacity-10">
              <svg fill="currentColor" viewBox="0 0 32 32">
                <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm16 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z"/>
              </svg>
            </div>

            {/* Testimonial Content */}
            <div className="relative z-10">
              <div className="text-center mb-8">
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-xl sm:text-2xl lg:text-3xl text-gray-700 leading-relaxed font-medium">
                  "{testimonials[currentTestimonial].content}"
                </blockquote>
              </div>

              {/* Client Info */}
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <div className="w-16 h-16 rounded-full overflow-hidden shadow-lg">
                  <img 
                    src={testimonials[currentTestimonial].avatar} 
                    alt={testimonials[currentTestimonial].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center sm:text-left">
                  <h4 className="text-lg font-bold text-gray-900">{testimonials[currentTestimonial].name}</h4>
                  <p className="text-PrimaryColor font-medium">{testimonials[currentTestimonial].position}</p>
                  <p className="text-gray-500 text-sm">{testimonials[currentTestimonial].company}</p>
                </div>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial 
                      ? 'bg-PrimaryColor scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16 sm:mt-20 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-PrimaryColor mb-2">500+</div>
            <div className="text-gray-600 text-sm sm:text-base">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-PrimaryColor mb-2">99%</div>
            <div className="text-gray-600 text-sm sm:text-base">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-PrimaryColor mb-2">24/7</div>
            <div className="text-gray-600 text-sm sm:text-base">Support</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-PrimaryColor mb-2">5★</div>
            <div className="text-gray-600 text-sm sm:text-base">Average Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

