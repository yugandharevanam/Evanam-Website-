import React from 'react';
import ScrollArrow from './ScrollArrow';
// Placeholder for Evanam logo
const logo = "https://via.placeholder.com/40x40/1E40AF/FFFFFF?text=E";

const Footer = () => {
  return (
    <>
    <div>
      <ScrollArrow/>
      </div>
    <footer className="bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
        {/* Logo and Contact Information */}
        <div className="flex items-center space-x-4 mb-4 md:mb-0">
          <div className="bg-PrimaryColor h-12 w-12 flex items-center justify-center rounded-full">
            <img src={logo} alt="Evanam Logo" className="w-8 h-8" />
          </div>
          <div className="text-gray-400">
            <p>Evanam Consulting</p>
            <p>+91 93639 77790</p>
            <p>hello@evanam.com</p>
          </div>
        </div>

        {/* Social Icons and Consultation Button */}
        <div className="flex items-center space-x-4 mb-4 md:mb-0">
          <div className="flex space-x-2">
            <a href="#" className="bg-gray-700 h-8 w-8 flex items-center justify-center rounded-full hover:bg-PrimaryColor transition duration-300">
              <span className="text-white text-xs">YT</span>
            </a>
            <a href="#" className="bg-gray-700 h-8 w-8 flex items-center justify-center rounded-full hover:bg-PrimaryColor transition duration-300">
              <span className="text-white text-xs">FB</span>
            </a>
            <a href="#" className="bg-gray-700 h-8 w-8 flex items-center justify-center rounded-full hover:bg-PrimaryColor transition duration-300">
              <span className="text-white text-xs">X</span>
            </a>
            <a href="#" className="bg-gray-700 h-8 w-8 flex items-center justify-center rounded-full hover:bg-PrimaryColor transition duration-300">
              <span className="text-white text-xs">LI</span>
            </a>
            <a href="#" className="bg-gray-700 h-8 w-8 flex items-center justify-center rounded-full hover:bg-PrimaryColor transition duration-300">
              <span className="text-white text-xs">IG</span>
            </a>
          </div>
          <button className="bg-white text-black font-bold py-2 px-4 rounded shadow-md hover:bg-gray-100 transition duration-300">
            Get a Consultation
          </button>
        </div>
      </div>

      {/* Information, Contact Details, Newsletter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left">
          {/* Information Section */}
          <div>
            <p className="text-gray-300 font-semibold mb-2">About Evanam</p>
            <p className="text-gray-500">
              We design and automate your sales, marketing, and core operations, delivering end-to-end digital transformation powered by AI.
            </p>
          </div>

          {/* Contact Section */}
          <div>
            <p className="text-gray-300 font-semibold mb-2">Contact</p>
            <p className="text-gray-500">
              1 Usman Khan Street, Mount Road,<br />
              Chennai - 600 002<br />
              Phone: +91 93639 77790<br />
              Email: hello@evanam.com
            </p>
          </div>

          {/* Newsletter Section */}
          <div className="flex flex-col">
            <p className="text-gray-300 font-semibold mb-2">Newsletter</p>
            <p className="text-gray-500 mb-4">
              Join our community and receive weekly news straight to your inbox.
            </p>
            <div className="flex items-center">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 border border-white rounded-l w-full focus:outline-none bg-gray-700 text-white placeholder-gray-400"
              />
              <button className="bg-white text-black font-bold py-2 px-4 rounded-r shadow-md hover:bg-gray-100 transition duration-300">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <hr className="my-8 border-gray-600" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between text-sm">
        <div className="text-gray-400 mb-4 md:mb-0">
            Evanam © 2024 All rights reserved
        </div>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-400 hover:text-gray-200 transition duration-300">
            Privacy Policy
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-200 transition duration-300">
            Terms of Service
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-200 transition duration-300">
            FAQ
          </a>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;
