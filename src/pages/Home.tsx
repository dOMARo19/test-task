import React from 'react';
import HeroSection from '../components/HeroSection';
import BenefitsSection from '../components/BenefitsSection';
import BlogSection from '../components/BlogSection';
import ContactForm from '../components/ContactForm';
import LocationMap from '../components/LocationMap';

const Home: React.FC = () => {
  return (
    <>
      <HeroSection />
      <BenefitsSection />
      <BlogSection />
      <ContactForm />
      <LocationMap />
    </>
  );
};

export default Home;