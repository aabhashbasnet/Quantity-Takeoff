"use client"

import { useState, useEffect } from "react"
import { FaTimes, FaRocket } from "react-icons/fa"
import "animate.css"

const DemoRequestPopup = () => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Show popup 2 seconds after the user visits the site
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  const handleClose = () => setIsOpen(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle demo request logic here
    console.log("Demo requested!")
    setIsOpen(false)
  }

  return (
    isOpen && (
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        {/* Modern backdrop with blur effect */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={handleClose}></div>

        {/* Modal container with improved design */}
        <div className="relative z-50 bg-white rounded-xl shadow-2xl max-w-lg w-full mx-4 p-8 transform transition-all duration-500 animate__animated animate__zoomIn">
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
            aria-label="Close"
          >
            <FaTimes size={24} />
          </button>

          {/* Header with icon */}
          <div className="flex items-center mb-5">
            <div className="bg-blue-50 p-3 rounded-full mr-4">
              <FaRocket className="text-blue-600" size={28} />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Get Your Free Demo</h2>
          </div>

          <p className="text-gray-600 mb-6">
            Discover how our AI-powered software can transform your construction process. Request a free demo today!
          </p>

          {/* Demo Request Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                required
                placeholder="John Doe"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium text-lg shadow-md hover:shadow-lg"
            >
              Request Demo
            </button>
          </form>

          {/* Additional Information */}
          <div className="mt-6 border-t pt-4">
            <p className="text-sm text-gray-500 text-center">We value your privacy and promise a no-spam guarantee.</p>
          </div>
        </div>
      </div>
    )
  )
}

export default DemoRequestPopup
