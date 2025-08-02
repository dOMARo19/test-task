import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/wealthbridge-logo.svg';

const Header: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Search functionality would be implemented here
    console.log('Searching for:', searchQuery);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="WealthBridge Logo" className="h-10 w-auto" />
            <span className="ml-2 text-xl font-bold text-blue-800">WealthBridge Consulting</span>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            <nav>
              <ul className="flex space-x-6">
                <li>
                  <Link to="/blog" className="text-gray-700 hover:text-blue-600 transition">Blog</Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition">Contact</Link>
                </li>
                <li>
                  <Link to="/faq" className="text-gray-700 hover:text-blue-600 transition">FAQ</Link>
                </li>
                <li>
                  <Link to="/about-us" className="text-gray-700 hover:text-blue-600 transition">About Us</Link>
                </li>
              </ul>
            </nav>

            <form onSubmit={handleSearch} className="flex items-center">
              <input
                type="text"
                placeholder="Search..."
                className="px-3 py-1 border rounded-l focus:outline-none focus:ring-1 focus:ring-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-3 py-1 rounded-r hover:bg-blue-700 transition"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </form>
          </div>

          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav>
              <ul className="space-y-3">
                <li>
                  <Link to="/blog" className="block text-gray-700 hover:text-blue-600 transition">Blog</Link>
                </li>
                <li>
                  <Link to="/contact" className="block text-gray-700 hover:text-blue-600 transition">Contact</Link>
                </li>
                <li>
                  <Link to="/faq" className="block text-gray-700 hover:text-blue-600 transition">FAQ</Link>
                </li>
                <li>
                  <Link to="/about-us" className="block text-gray-700 hover:text-blue-600 transition">About Us</Link>
                </li>
              </ul>
            </nav>

            <form onSubmit={handleSearch} className="mt-3 flex">
              <input
                type="text"
                placeholder="Search..."
                className="flex-grow px-3 py-1 border rounded-l focus:outline-none focus:ring-1 focus:ring-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-3 py-1 rounded-r hover:bg-blue-700 transition"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </form>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;