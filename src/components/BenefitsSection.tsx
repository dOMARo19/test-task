import React from 'react';

const benefits = [
  {
    title: "Tailored Financial Strategies",
    description: "Custom solutions designed specifically for your business needs and goals.",
    icon: "📊"
  },
  {
    title: "UK Market Expertise",
    description: "Deep understanding of the UK financial landscape and regulatory environment.",
    icon: "🇬🇧"
  },
  {
    title: "Proven Track Record",
    description: "Years of experience helping businesses achieve financial success.",
    icon: "🏆"
  },
  {
    title: "Transparent Pricing",
    description: "Clear, upfront costs with no hidden fees or surprises.",
    icon: "💷"
  },
  {
    title: "Ongoing Support",
    description: "Continuous guidance and adjustments as your business evolves.",
    icon: "🔄"
  },
  {
    title: "Technology-Driven",
    description: "Utilizing cutting-edge tools for accurate forecasting and analysis.",
    icon: "💻"
  }
];

const BenefitsSection: React.FC = () => {
  return (
    <section id="benefits" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Why Choose Our Financial Consulting Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;