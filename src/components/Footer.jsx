import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Company Info */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold">AI-Powered Takeoff Software</h2>
          <p className="text-sm text-gray-400 mt-2 max-w-xl mx-auto">
            Streamline your construction estimation process with AI-driven precision and automation.
          </p>
        </div>
        
        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-6 mt-6">
          <a href="#" className="text-gray-400 hover:text-white transition">Home</a>
          <a href="#" className="text-gray-400 hover:text-white transition">Features</a>
          <a href="#" className="text-gray-400 hover:text-white transition">Portfolio</a>
          <a href="#" className="text-gray-400 hover:text-white transition">About Us</a>
          <a href="#" className="text-gray-400 hover:text-white transition">Contact</a>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center gap-4 mt-6">
          <a href="#" className="text-gray-400 hover:text-white transition text-xl"><FaFacebook /></a>
          <a href="#" className="text-gray-400 hover:text-white transition text-xl"><FaTwitter /></a>
          <a href="#" className="text-gray-400 hover:text-white transition text-xl"><FaLinkedin /></a>
          <a href="#" className="text-gray-400 hover:text-white transition text-xl"><FaInstagram /></a>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-8 max-w-md mx-auto">
          <p className="text-gray-400 text-sm mb-2">Subscribe to our newsletter for updates</p>
          <div className="flex items-center border border-gray-600 rounded-lg overflow-hidden">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-grow px-4 py-2 bg-gray-800 text-white border-none focus:outline-none"
            />
            <button className="bg-yellow-600 px-4 py-2 text-white font-semibold hover:bg-yellow-700 transition">Subscribe</button>
          </div>
        </div>
        
        {/* Copyright */}
        <p className="text-sm text-gray-500 mt-8">&copy; {new Date().getFullYear()} AI Takeoff Software. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
