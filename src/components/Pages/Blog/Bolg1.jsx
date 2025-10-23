import React from 'react'
import BannerMain from '../../Main/BannerMain'

const Bolg1 = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Business Automation",
      excerpt: "Discover how AI-powered automation is transforming business operations and driving unprecedented growth.",
      date: "December 15, 2024",
      category: "Automation",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Digital Transformation Best Practices",
      excerpt: "Learn the essential strategies for successful digital transformation in your organization.",
      date: "December 10, 2024",
      category: "Digital Transformation",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "Data Analytics for Business Growth",
      excerpt: "How to leverage data analytics to make informed decisions and accelerate business growth.",
      date: "December 5, 2024",
      category: "Analytics",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "Cloud Migration Strategies",
      excerpt: "A comprehensive guide to migrating your business to the cloud safely and efficiently.",
      date: "November 28, 2024",
      category: "Cloud",
      readTime: "8 min read"
    },
    {
      id: 5,
      title: "AI in Customer Service",
      excerpt: "Exploring how artificial intelligence is revolutionizing customer service and support.",
      date: "November 20, 2024",
      category: "AI",
      readTime: "4 min read"
    },
    {
      id: 6,
      title: "Cybersecurity for Small Businesses",
      excerpt: "Essential cybersecurity measures every small business should implement to protect their data.",
      date: "November 15, 2024",
      category: "Security",
      readTime: "6 min read"
    }
  ];

  return (
    <>
      <BannerMain />
      <div className="py-20 bg-SecondaryColor">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest insights on digital transformation, AI, and business automation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
                <div className="h-48 bg-gradient-to-br from-PrimaryColor to-DarkBlue flex items-center justify-center">
                  <div className="text-4xl text-white">📝</div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="bg-PrimaryColor bg-opacity-10 text-PrimaryColor px-2 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-sm">{post.readTime}</span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">{post.date}</span>
                    <button className="text-PrimaryColor font-semibold hover:text-DarkBlue transition duration-300">
                      Read More →
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <button className="bg-PrimaryColor text-white px-8 py-3 rounded-lg font-semibold hover:bg-DarkBlue transition duration-300">
              Load More Posts
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Bolg1
