import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
}

const FAQ: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqData: FAQItem[] = [
    // Investment Planning
    {
      id: 1,
      question: "What is the minimum investment amount required?",
      answer: "We offer flexible investment options starting from £5,000 for our standard investment plans. However, we also provide specialized services for larger portfolios and can create custom solutions based on your specific financial goals and circumstances.",
      category: "Investment Planning"
    },
    {
      id: 2,
      question: "How do you determine the best investment strategy for me?",
      answer: "Our investment strategy is personalized based on your financial goals, risk tolerance, time horizon, and current financial situation. We conduct a comprehensive financial assessment and use advanced portfolio analysis tools to create a strategy that aligns with your objectives.",
      category: "Investment Planning"
    },
    {
      id: 3,
      question: "What types of investments do you offer?",
      answer: "We offer a wide range of investment options including stocks, bonds, mutual funds, ETFs, real estate investment trusts (REITs), and alternative investments. We also provide access to international markets and specialized investment vehicles.",
      category: "Investment Planning"
    },
    {
      id: 4,
      question: "How often do you review and rebalance portfolios?",
      answer: "We conduct quarterly portfolio reviews and annual comprehensive assessments. However, we continuously monitor your investments and may rebalance more frequently if market conditions or your personal circumstances change significantly.",
      category: "Investment Planning"
    },

    // Retirement Planning
    {
      id: 5,
      question: "When should I start planning for retirement?",
      answer: "The earlier you start planning for retirement, the better. We recommend beginning retirement planning in your 20s or 30s, but it's never too late to start. Even if you're closer to retirement age, we can help you create a strategy to maximize your retirement income.",
      category: "Retirement Planning"
    },
    {
      id: 6,
      question: "What retirement accounts do you recommend?",
      answer: "The best retirement accounts depend on your employment status and financial situation. We typically recommend employer-sponsored 401(k) plans, IRAs (Traditional or Roth), and other tax-advantaged accounts. We'll help you choose the right combination for your needs.",
      category: "Retirement Planning"
    },
    {
      id: 7,
      question: "How much should I save for retirement?",
      answer: "The amount you should save depends on your desired retirement lifestyle, current age, and expected retirement age. As a general rule, we recommend saving 10-15% of your income, but we'll create a personalized savings plan based on your specific goals.",
      category: "Retirement Planning"
    },
    {
      id: 8,
      question: "Can you help with pension planning?",
      answer: "Yes, we specialize in pension planning and can help you understand your pension options, maximize your benefits, and integrate your pension with other retirement savings. We work with both defined benefit and defined contribution pension plans.",
      category: "Retirement Planning"
    },

    // Tax Planning
    {
      id: 9,
      question: "What tax planning services do you offer?",
      answer: "We offer comprehensive tax planning services including tax-efficient investment strategies, retirement account optimization, estate tax planning, business tax planning, and international tax considerations. We work closely with your tax advisor to ensure coordinated planning.",
      category: "Tax Planning"
    },
    {
      id: 10,
      question: "How can I reduce my tax liability?",
      answer: "There are several legal ways to reduce your tax liability including maximizing retirement contributions, using tax-loss harvesting, investing in tax-advantaged accounts, and implementing charitable giving strategies. We'll analyze your situation and recommend the most effective approaches.",
      category: "Tax Planning"
    },
    {
      id: 11,
      question: "Do you handle international tax planning?",
      answer: "Yes, we provide international tax planning services for expatriates, international investors, and businesses with global operations. We help navigate complex international tax laws and optimize your global tax position.",
      category: "Tax Planning"
    },

    // Fees and Services
    {
      id: 12,
      question: "What are your fees and how are they structured?",
      answer: "Our fees are transparent and typically based on a percentage of assets under management, ranging from 0.5% to 1.5% annually depending on portfolio size and services required. We also offer fixed-fee arrangements for specific services. We'll provide a detailed fee schedule during our initial consultation.",
      category: "Fees and Services"
    },
    {
      id: 13,
      question: "Do you offer a free initial consultation?",
      answer: "Yes, we offer a complimentary initial consultation where we'll discuss your financial goals, assess your current situation, and explain how we can help. This consultation typically lasts 30-45 minutes and can be conducted in person or via video call.",
      category: "Fees and Services"
    },
    {
      id: 14,
      question: "What services are included in your financial planning?",
      answer: "Our comprehensive financial planning includes investment management, retirement planning, tax planning, estate planning, insurance analysis, and ongoing financial advice. We also provide regular portfolio reviews, financial goal tracking, and access to our team of experts.",
      category: "Fees and Services"
    },
    {
      id: 15,
      question: "How often will I meet with my financial advisor?",
      answer: "We typically meet with clients quarterly for portfolio reviews and annually for comprehensive financial planning updates. However, we're available for additional meetings as needed, and you can always reach out to us with questions between scheduled meetings.",
      category: "Fees and Services"
    },

    // General Questions
    {
      id: 16,
      question: "Are you regulated and licensed?",
      answer: "Yes, we are fully regulated by the Financial Conduct Authority (FCA) and hold all necessary licenses to provide financial advisory services. Our team maintains ongoing professional development and adheres to strict ethical standards.",
      category: "General"
    },
    {
      id: 17,
      question: "What makes WealthBridge different from other financial advisors?",
      answer: "We combine personalized service with advanced technology and deep expertise. Our team has decades of combined experience, and we use sophisticated financial planning tools to create comprehensive, data-driven strategies. We also pride ourselves on transparent communication and long-term client relationships.",
      category: "General"
    },
    {
      id: 18,
      question: "Can you work with clients outside the UK?",
      answer: "Yes, we work with international clients, though our services may vary based on your location and local regulations. We have experience serving expatriates and international investors and can coordinate with local advisors as needed.",
      category: "General"
    }
  ];

  const categories = ['all', 'Investment Planning', 'Retirement Planning', 'Tax Planning', 'Fees and Services', 'General'];

  const filteredFAQs = faqData.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(itemId => itemId !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-xl mb-8 text-blue-100">
              Find answers to common questions about our financial services and planning process
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search questions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-6 py-4 text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
                <svg className="absolute right-4 top-4 h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {filteredFAQs.length === 0 ? (
              <div className="text-center py-12">
                <h3 className="text-2xl font-semibold text-gray-600 mb-4">No questions found</h3>
                <p className="text-gray-500 mb-6">Try adjusting your search or category filter</p>
                <Link
                  to="/contacts"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300"
                >
                  Contact Us
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredFAQs.map(faq => (
                  <div key={faq.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <button
                      onClick={() => toggleItem(faq.id)}
                      className="w-full px-6 py-4 text-left hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <div className="flex justify-between items-center">
                        <h3 className="text-lg font-semibold text-gray-800 pr-4">{faq.question}</h3>
                        <svg
                          className={`w-6 h-6 text-gray-500 transition-transform ${
                            openItems.includes(faq.id) ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                      <div className="flex items-center mt-2">
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
                          {faq.category}
                        </span>
                      </div>
                    </button>
                    
                    {openItems.includes(faq.id) && (
                      <div className="px-6 pb-4">
                        <div className="border-t border-gray-200 pt-4">
                          <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Still Have Questions?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Can't find what you're looking for? Our expert team is here to help you with any questions about your financial planning needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contacts"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Contact Us
              </Link>
              <a
                href="tel:+442071234567"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Helpful Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Financial Blog</h3>
                <p className="text-gray-600 mb-4">
                  Read our latest insights on investment strategies, retirement planning, and financial markets.
                </p>
                <Link
                  to="/blog"
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  Visit Blog →
                </Link>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">About Our Team</h3>
                <p className="text-gray-600 mb-4">
                  Learn more about our experienced financial advisors and their areas of expertise.
                </p>
                <Link
                  to="/about-us"
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  Meet Our Team →
                </Link>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Get in Touch</h3>
                <p className="text-gray-600 mb-4">
                  Ready to start your financial planning journey? Contact us for a free consultation.
                </p>
                <Link
                  to="/contacts"
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  Contact Us →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
