import React from 'react'
import BannerMain from '../../Main/BannerMain'

const PrivacyPolicy = () => {
  return (
    <>
      <BannerMain />
      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600">
              Last updated: December 2024
            </p>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
                <p className="text-gray-600 mb-4">
                  We collect information you provide directly to us, such as when you create an account, 
                  contact us, or use our services. This may include:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Name, email address, phone number, and company information</li>
                  <li>Business requirements and project details</li>
                  <li>Communication preferences and feedback</li>
                  <li>Payment and billing information</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
                <p className="text-gray-600 mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send technical notices, updates, and support messages</li>
                  <li>Respond to your comments and questions</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Information Sharing</h2>
                <p className="text-gray-600 mb-4">
                  We do not sell, trade, or otherwise transfer your personal information to third parties 
                  without your consent, except as described in this policy. We may share your information:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>With service providers who assist us in operating our business</li>
                  <li>When required by law or to protect our rights</li>
                  <li>In connection with a business transfer or acquisition</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Security</h2>
                <p className="text-gray-600">
                  We implement appropriate security measures to protect your personal information against 
                  unauthorized access, alteration, disclosure, or destruction. However, no method of 
                  transmission over the internet is 100% secure.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Your Rights</h2>
                <p className="text-gray-600 mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Access and update your personal information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Data portability</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Cookies and Tracking</h2>
                <p className="text-gray-600">
                  We use cookies and similar tracking technologies to enhance your experience on our website. 
                  You can control cookie settings through your browser preferences.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Contact Us</h2>
                <p className="text-gray-600">
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <p className="text-gray-600">
                    <strong>Evanam Consulting</strong><br />
                    1 Usman Khan Street, Mount Road<br />
                    Chennai - 600 002<br />
                    Email: hello@evanam.com<br />
                    Phone: +91 93639 77790
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PrivacyPolicy
