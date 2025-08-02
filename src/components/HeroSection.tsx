import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gray-900 text-white">
      {/* Background video */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-70"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-stock-market-chart-going-up-1560-large.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-32">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Expert Financial Consulting for Your Business Growth
          </h1>
          <p className="text-xl mb-8">
            We help UK businesses navigate complex financial landscapes with tailored solutions and strategic advice.
          </p>
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
            <a
              href="#contact"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded transition duration-300 text-center"
            >
              Get a Free Consultation
            </a>
            <a
              href="#benefits"
              className="bg-white hover:bg-gray-100 text-gray-800 font-bold py-3 px-6 rounded transition duration-300 text-center"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;