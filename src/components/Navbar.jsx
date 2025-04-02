import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Toggle dropdown visibility
  const toggleDropdown = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Text Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Quantity Takeoff
            </a>
          </div>

          {/* Navigation Links (Desktop) */}
          <div className="hidden md:flex space-x-6 items-center">
            {/* Who We Serve Dropdown */}
            <div className="relative group">
              <button
                onClick={() => toggleDropdown('whoWeServe')}
                className="text-gray-700 hover:text-blue-600 font-medium flex items-center"
              >
                Who We Serve
                <svg
                  className="ml-1 h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {activeDropdown === 'whoWeServe' && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                  <ul className="py-2">
                    <li>
                      <a
                        href="/contractors"
                        className="block px-4 py-2 text-gray-700 hover:bg-blue-100 rounded-md transition-colors duration-200"
                      >
                        Contractors
                      </a>
                    </li>
                    <li>
                      <a
                        href="/sub-contractors"
                        className="block px-4 py-2 text-gray-700 hover:bg-blue-100 rounded-md transition-colors duration-200"
                      >
                        Sub Contractors
                      </a>
                    </li>
                    <li>
                      <a
                        href="/suppliers"
                        className="block px-4 py-2 text-gray-700 hover:bg-blue-100 rounded-md transition-colors duration-200"
                      >
                        Suppliers
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Industries Dropdown */}
            <div className="relative group">
              <button
                onClick={() => toggleDropdown('industries')}
                className="text-gray-700 hover:text-blue-600 font-medium flex items-center"
              >
                Industries
                <svg
                  className="ml-1 h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {activeDropdown === 'industries' && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                  <ul className="py-2">
                    <li>
                      <a
                        href="/landscaping"
                        className="block px-4 py-2 text-gray-700 hover:bg-blue-100 rounded-md transition-colors duration-200"
                      >
                        Landscaping
                      </a>
                    </li>
                    <li>
                      <a
                        href="/paving"
                        className="block px-4 py-2 text-gray-700 hover:bg-blue-100 rounded-md transition-colors duration-200"
                      >
                        Paving
                      </a>
                    </li>
                    <li>
                      <a
                        href="/facilities-maintainance"
                        className="block px-4 py-2 text-gray-700 hover:bg-blue-100 rounded-md transition-colors duration-200"
                      >
                      Facilities & Maintainance
                      </a>
                    </li>

                    <li>
                      <a
                        href="/general-construction"
                        className="block px-4 py-2 text-gray-700 hover:bg-blue-100 rounded-md transition-colors duration-200"
                      >
                      General Construction
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Other Links */}
            <a href="/our-mission" className="text-gray-700 hover:text-blue-600">
              Our Mission
            </a>
            <a href="/about" className="text-gray-700 hover:text-blue-600">
              About
            </a>
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="/login"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Log In
            </a>
            <a
              href="/signup"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Sign Up
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="/our-mission"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600"
              >
                Our Mission
              </a>
              <a
                href="/about"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600"
              >
                About
              </a>
              <a
                href="/login"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600"
              >
                Log In
              </a>
              <a
                href="/signup"
                className="block px-3 py-2 rounded-md text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
              >
                Sign Up
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
