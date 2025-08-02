import React from 'react';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    title: "5 Financial Planning Strategies for UK SMEs in 2023",
    excerpt: "Discover the key financial planning approaches that can help small and medium enterprises thrive in the current economic climate.",
    date: "June 15, 2023",
    category: "Business Finance"
  },
  {
    id: 2,
    title: "Navigating UK Tax Changes: What Businesses Need to Know",
    excerpt: "A comprehensive guide to the latest tax regulation updates and how they might affect your business operations.",
    date: "May 28, 2023",
    category: "Taxation"
  },
  {
    id: 3,
    title: "The Role of Financial Consulting in Business Growth",
    excerpt: "How professional financial advice can be the catalyst for sustainable business expansion and profitability.",
    date: "April 10, 2023",
    category: "Business Growth"
  },
  {
    id: 4,
    title: "Brexit Aftermath: Financial Implications for UK Companies",
    excerpt: "Analyzing the long-term financial impacts of Brexit and strategies to mitigate potential challenges.",
    date: "March 22, 2023",
    category: "Market Analysis"
  }
];

const BlogSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Latest From Our Blog</h2>
          <Link to="/blog" className="text-blue-600 hover:text-blue-800 font-medium">
            View All Articles →
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogPosts.map(post => (
            <article key={post.id} className="border rounded-lg overflow-hidden hover:shadow-lg transition duration-300">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <span className="text-sm text-blue-600 font-medium">{post.category}</span>
                <h3 className="text-xl font-semibold mt-2 mb-3 text-gray-800">
                  <Link to={`/blog/${post.id}`} className="hover:text-blue-600 transition">{post.title}</Link>
                </h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <Link to={`/blog/${post.id}`} className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                    Read More →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;