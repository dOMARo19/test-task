import React from 'react';

interface CookiePopupProps {
  onAccept: () => void;
}

const CookiePopup: React.FC<CookiePopupProps> = ({ onAccept }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 md:mr-4">
            <p className="text-sm">
              We use cookies to enhance your experience on our website. By continuing to browse, you agree to our use of cookies.
            </p>
          </div>
          <div className="flex space-x-3">
            <button
              onClick={onAccept}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition duration-300 text-sm"
            >
              Accept Cookies
            </button>
            <a
              href="/privacy-policy"
              className="bg-gray-700 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded transition duration-300 text-sm"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiePopup;