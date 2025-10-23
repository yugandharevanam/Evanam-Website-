import React from 'react'
import BannerMain from '../../Main/BannerMain'

const About1 = () => {
  return (
    <>
      <BannerMain />
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Story
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Evanam was founded with a vision to transform how businesses operate in the digital age. 
              We believe that every business deserves access to cutting-edge technology and automation solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What We Do</h2>
              <p className="text-gray-600 mb-6">
                We design and automate your sales, marketing, and core operations, delivering end-to-end 
                digital transformation powered by AI. Our team of experts works closely with businesses 
                to identify pain points and implement solutions that drive real results.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-PrimaryColor rounded-full mr-3"></div>
                  <span className="text-gray-600">IT Consulting & Software Development</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-PrimaryColor rounded-full mr-3"></div>
                  <span className="text-gray-600">Digital Transformation Solutions</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-PrimaryColor rounded-full mr-3"></div>
                  <span className="text-gray-600">AI-Powered Business Automation</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-PrimaryColor rounded-full mr-3"></div>
                  <span className="text-gray-600">Data Analytics & Insights</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-100 rounded-lg p-8 text-center">
              <div className="text-6xl mb-4">💻</div>
              <p className="text-gray-500">Computer Office Work</p>
            </div>
          </div>
          
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Badges of Trust</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white border border-gray-200 rounded-lg p-6 text-center shadow-sm">
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="text-lg font-semibold mb-2">Certified Experts</h3>
                <p className="text-gray-600">Our team holds industry certifications and continuous learning credentials.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 text-center shadow-sm">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="text-lg font-semibold mb-2">Secure & Compliant</h3>
                <p className="text-gray-600">We follow industry best practices for data security and compliance.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 text-center shadow-sm">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-lg font-semibold mb-2">Proven Results</h3>
                <p className="text-gray-600">Track record of successful digital transformations and business growth.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About1
