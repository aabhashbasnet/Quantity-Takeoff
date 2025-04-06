"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { ChevronDown, Menu, X } from "lucide-react"

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Toggle dropdown visibility
  const toggleDropdown = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName)
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (activeDropdown && !event.target.closest(".dropdown-container")) {
        setActiveDropdown(null)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [activeDropdown])

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-white/90 shadow-md backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link
            to="/"
            className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 transition-all duration-300"
          >
            Quantity Takeoff
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden items-center md:flex">
          <div className="flex space-x-8">
            {/* Who We Serve Dropdown */}
            <div className="dropdown-container relative group">
              <button
                onClick={() => toggleDropdown("whoWeServe")}
                className="flex items-center gap-1 font-medium text-gray-700 hover:text-blue-500 h-10 px-4 py-2 rounded-md transition-colors"
              >
                Who We Serve
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-300 ${
                    activeDropdown === "whoWeServe" ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`absolute right-0 mt-2 w-48 rounded-md border border-blue-100 bg-white shadow-lg z-10 transition-all duration-300 transform origin-top ${
                  activeDropdown === "whoWeServe" ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
                }`}
              >
                <div className="py-1 rounded-md overflow-hidden">
                  <Link
                    to="/contractors"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-500 transition-colors duration-200"
                  >
                    Contractors
                  </Link>
                  <Link
                    to="/sub-contractors"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-500 transition-colors duration-200"
                  >
                    Sub Contractors
                  </Link>
                  <Link
                    to="/suppliers"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-500 transition-colors duration-200"
                  >
                    Suppliers
                  </Link>
                </div>
              </div>
            </div>

            {/* Industries Dropdown */}
            <div className="dropdown-container relative group">
              <button
                onClick={() => toggleDropdown("industries")}
                className="flex items-center gap-1 font-medium text-gray-700 hover:text-blue-500 h-10 px-4 py-2 rounded-md transition-colors"
              >
                Industries
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-300 ${
                    activeDropdown === "industries" ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`absolute right-0 mt-2 w-56 rounded-md border border-blue-100 bg-white shadow-lg z-10 transition-all duration-300 transform origin-top ${
                  activeDropdown === "industries" ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
                }`}
              >
                <div className="py-1 rounded-md overflow-hidden">
                  <Link
                    to="/landscaping"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-500 transition-colors duration-200"
                  >
                    Landscaping
                  </Link>
                  <Link
                    to="/paving"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-500 transition-colors duration-200"
                  >
                    Paving
                  </Link>
                  <Link
                    to="/facilities-maintainance"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-500 transition-colors duration-200"
                  >
                    Facilities & Maintainance
                  </Link>
                  <Link
                    to="/general-construction"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-500 transition-colors duration-200"
                  >
                    General Construction
                  </Link>
                </div>
              </div>
            </div>

            {/* Regular Links */}
            <Link
              to="/our-mission"
              className="relative flex items-center font-medium text-gray-700 hover:text-blue-500 h-10 px-4 py-2 rounded-md transition-colors group"
            >
              Our Mission
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-500 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
            <Link
              to="/about"
              className="relative flex items-center font-medium text-gray-700 hover:text-blue-500 h-10 px-4 py-2 rounded-md transition-colors group"
            >
              About
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-500 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="hidden items-center space-x-3 md:flex">
          <Link
            to="/login"
            className="inline-flex items-center justify-center rounded-md font-medium transition-all duration-200 h-10 px-4 py-2 hover:bg-blue-50 text-gray-700 hover:text-blue-500 relative overflow-hidden group"
          >
            <span className="relative z-10">Log In</span>
            <span className="absolute inset-0 bg-blue-100 opacity-0 group-hover:opacity-100 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
          </Link>
          <Link
            to="/signup"
            className="inline-flex items-center justify-center rounded-md font-medium transition-all duration-200 h-10 px-4 py-2 border border-blue-500 text-blue-500 hover:bg-blue-50 hover:text-blue-600 relative overflow-hidden group"
          >
            <span className="relative z-10">Sign Up</span>
            <span className="absolute inset-0 bg-blue-50 opacity-0 group-hover:opacity-100 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
          </Link>
          <Link
            to="/get-started"
            className="inline-flex items-center justify-center rounded-md font-medium transition-all duration-300 h-10 px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-blue-50 hover:text-blue-500 transition-colors md:hidden"
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`fixed inset-0 bg-black/25 backdrop-blur-sm transition-opacity duration-300 ${
            isMobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Drawer */}
        <div
          className={`fixed inset-y-0 right-0 flex w-full max-w-xs flex-col bg-white shadow-xl transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b px-4 py-3">
            <Link
              to="/"
              className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Quantity Takeoff
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="rounded-md p-2 text-gray-500 hover:bg-blue-50 hover:text-blue-500 transition-colors"
            >
              <X className="h-5 w-5" />
              <span className="sr-only">Close menu</span>
            </button>
          </div>

          <div className="flex flex-col gap-6 p-4 overflow-y-auto">
            <div className="flex flex-col space-y-3">
              {/* Mobile Accordions */}
              <div className="space-y-3">
                <div className="border-b pb-3">
                  <details className="group [&[open]>summary>svg]:rotate-180">
                    <summary className="flex cursor-pointer items-center justify-between py-1">
                      <span className="text-lg font-medium text-gray-700 group-hover:text-blue-500 transition-colors">
                        Who We Serve
                      </span>
                      <ChevronDown className="h-5 w-5 text-gray-500 transition-transform duration-300" />
                    </summary>
                    <div className="mt-3 space-y-2 pl-2 animate-in slide-in-from-top-5 duration-300">
                      <Link
                        to="/contractors"
                        className="block py-1.5 text-gray-600 hover:text-blue-500 transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Contractors
                      </Link>
                      <Link
                        to="/sub-contractors"
                        className="block py-1.5 text-gray-600 hover:text-blue-500 transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Sub Contractors
                      </Link>
                      <Link
                        to="/suppliers"
                        className="block py-1.5 text-gray-600 hover:text-blue-500 transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Suppliers
                      </Link>
                    </div>
                  </details>
                </div>

                <div className="border-b pb-3">
                  <details className="group [&[open]>summary>svg]:rotate-180">
                    <summary className="flex cursor-pointer items-center justify-between py-1">
                      <span className="text-lg font-medium text-gray-700 group-hover:text-blue-500 transition-colors">
                        Industries
                      </span>
                      <ChevronDown className="h-5 w-5 text-gray-500 transition-transform duration-300" />
                    </summary>
                    <div className="mt-3 space-y-2 pl-2 animate-in slide-in-from-top-5 duration-300">
                      <Link
                        to="/landscaping"
                        className="block py-1.5 text-gray-600 hover:text-blue-500 transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Landscaping
                      </Link>
                      <Link
                        to="/paving"
                        className="block py-1.5 text-gray-600 hover:text-blue-500 transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Paving
                      </Link>
                      <Link
                        to="/facilities-maintainance"
                        className="block py-1.5 text-gray-600 hover:text-blue-500 transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Facilities & Maintainance
                      </Link>
                      <Link
                        to="/general-construction"
                        className="block py-1.5 text-gray-600 hover:text-blue-500 transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        General Construction
                      </Link>
                    </div>
                  </details>
                </div>
              </div>

              <Link
                to="/our-mission"
                className="text-lg font-medium text-gray-700 hover:text-blue-500 transition-colors py-1"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Our Mission
              </Link>
              <Link
                to="/about"
                className="text-lg font-medium text-gray-700 hover:text-blue-500 transition-colors py-1"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
            </div>

            <div className="mt-4 flex flex-col space-y-3">
              <Link
                to="/login"
                className="inline-flex h-10 w-full items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-blue-50 hover:text-blue-500 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Log In
              </Link>
              <Link
                to="/signup"
                className="inline-flex h-10 w-full items-center justify-center rounded-md border border-blue-500 bg-white px-4 py-2 text-sm font-medium text-blue-500 shadow-sm hover:bg-blue-50 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sign Up
              </Link>
              <Link
                to="/get-started"
                className="inline-flex h-10 w-full items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-white shadow-sm bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

