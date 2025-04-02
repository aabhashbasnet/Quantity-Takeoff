import React, { useState, useEffect } from "react";
import { FaTimes, FaRocket } from "react-icons/fa";
import "animate.css";

const DemoRequestPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show popup 2 seconds after the user visits the site
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => setIsOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle demo request logic here
    console.log("Demo requested!");
    setIsOpen(false);
  };

  return (
    isOpen && (
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        {/* Background overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-500 opacity-75"></div>
        
        {/* Modal container with polished design */}
        <div className="relative z-50 bg-white rounded-xl shadow-2xl max-w-lg w-full mx-4 p-6 transform transition-all duration-500 animate__animated animate__zoomIn">
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
          >
            <FaTimes size={24} />
          </button>

          {/* Header with icon */}
          <div className="flex items-center mb-4">
            <FaRocket className="text-blue-600 mr-2" size={32} />
            <h2 className="text-3xl font-bold text-gray-800">
              Get Your Free Demo
            </h2>
          </div>
          
          <p className="text-gray-600 mb-6">
            Discover how our AI-powered software can transform your construction process. Request a free demo today!
          </p>

          {/* Demo Request Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                required
                placeholder="John Doe"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                required
                placeholder="you@example.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Request Demo
            </button>
          </form>

          {/* Additional Information */}
          <div className="mt-6 border-t pt-4">
            <p className="text-sm text-gray-500">
               We value your privacy and promise a no-spam guarantee.
            </p>
          </div>
        </div>
      </div>
    )
  );
};

export default DemoRequestPopup;
