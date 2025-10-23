import React, { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    position: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    hearAbout: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Left Side - Contact Info */}
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 sm:mb-8">
              Contact
            </h2>
            
            <div className="space-y-4 sm:space-y-6">
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Address</h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  1 Usman Khan Street, Mount Road,<br />
                  Chennai - 600 002
                </p>
              </div>
              
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Phone</h3>
                <p className="text-gray-600 text-sm sm:text-base">+91 93639 77790</p>
              </div>
              
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600 text-sm sm:text-base">hello@evanam.com</p>
              </div>
              
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Follow Us</h3>
                <div className="flex flex-wrap gap-3 sm:gap-4">
                  <a href="#" className="text-gray-600 hover:text-PrimaryColor transition duration-300 text-sm sm:text-base">Youtube</a>
                  <a href="#" className="text-gray-600 hover:text-PrimaryColor transition duration-300 text-sm sm:text-base">Facebook</a>
                  <a href="#" className="text-gray-600 hover:text-PrimaryColor transition duration-300 text-sm sm:text-base">X</a>
                  <a href="#" className="text-gray-600 hover:text-PrimaryColor transition duration-300 text-sm sm:text-base">LinkedIn</a>
                  <a href="#" className="text-gray-600 hover:text-PrimaryColor transition duration-300 text-sm sm:text-base">Instagram</a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Side - Contact Form */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
              Looking for Answers? Let's Collaborate!
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name (Required)
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-PrimaryColor focus:border-transparent text-sm sm:text-base"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Position (Required)
                  </label>
                  <input
                    type="text"
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-PrimaryColor focus:border-transparent text-sm sm:text-base"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email (Required)
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-PrimaryColor focus:border-transparent text-sm sm:text-base"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone (Required)
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-PrimaryColor focus:border-transparent text-sm sm:text-base"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company name
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-PrimaryColor focus:border-transparent text-sm sm:text-base"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  How did you hear about us? (Required)
                </label>
                <select
                  name="hearAbout"
                  value={formData.hearAbout}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-PrimaryColor focus:border-transparent text-sm sm:text-base"
                >
                  <option value="">Select an option</option>
                  <option value="social-media">Social Media</option>
                  <option value="web-search">Web Search</option>
                  <option value="word-of-mouth">Word of Mouth</option>
                  <option value="linkedin">LinkedIn</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-PrimaryColor focus:border-transparent text-sm sm:text-base"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-PrimaryColor text-white py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-DarkGray transition duration-300 shadow-lg"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
