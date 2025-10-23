import React, { useState } from 'react'
import BannerMain from '../../Main/BannerMain'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What services does Evanam provide?",
      answer: "Evanam provides comprehensive digital transformation services including IT consulting, software development, AI-powered automation, data analytics, and business process optimization. We help businesses streamline operations and drive growth through technology."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary depending on scope and complexity. Simple automation projects may take 2-4 weeks, while comprehensive digital transformations can take 3-6 months. We provide detailed timelines during our initial consultation."
    },
    {
      question: "Do you work with small businesses?",
      answer: "Yes! We work with businesses of all sizes, from startups to enterprise companies. Our solutions are scalable and we tailor our approach to fit your specific needs and budget."
    },
    {
      question: "What technologies do you specialize in?",
      answer: "We specialize in modern technologies including AI/ML, cloud platforms (AWS, Azure, GCP), automation tools, data analytics platforms, and custom software development using various programming languages and frameworks."
    },
    {
      question: "How do you ensure data security?",
      answer: "Data security is our top priority. We follow industry best practices, implement proper encryption, conduct regular security audits, and ensure compliance with relevant regulations like GDPR and data protection laws."
    },
    {
      question: "What is your pricing model?",
      answer: "We offer flexible pricing models including project-based pricing, retainer agreements, and outcome-based pricing. We provide transparent quotes with no hidden costs and can work within your budget constraints."
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes, we provide comprehensive ongoing support and maintenance services. This includes system monitoring, updates, troubleshooting, and continuous optimization to ensure your solutions perform optimally."
    },
    {
      question: "How do I get started?",
      answer: "Getting started is easy! Contact us through our website, schedule a free consultation, or call us at +91 93639 77790. We'll discuss your needs and provide a customized solution plan."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <BannerMain />
      <div className="py-20 bg-SecondaryColor">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600">
              Find answers to common questions about our services and processes.
            </p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition duration-300"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    <svg
                      className={`w-5 h-5 text-gray-500 transform transition-transform duration-300 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Still have questions?
              </h2>
              <p className="text-gray-600 mb-6">
                Our team is here to help. Contact us for personalized answers to your specific questions.
              </p>
              <button className="bg-PrimaryColor text-white px-8 py-3 rounded-lg font-semibold hover:bg-DarkBlue transition duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FAQ
