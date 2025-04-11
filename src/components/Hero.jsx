"use client"

import { useEffect } from "react"
import { Link } from "react-router-dom"
import "animate.css"
import interfaces from "../assets/interface.jpg"
import WavyBackground from "./WavyBackground"
import GradientButton from "./Buttons/GradientButton.jsx"

const Hero = () => {
  // Add scroll reveal effect
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".reveal")
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top
        const windowHeight = window.innerHeight
        if (elementTop < windowHeight - 100) {
          element.classList.add("active")
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Trigger once on load

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 py-24 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute top-40 -left-20 w-80 h-80 bg-indigo-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-60 h-60 bg-cyan-200 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8 text-center md:text-left">
            <div className="space-y-4">
              <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-medium animate__animated animate__fadeInDown">
                AI-Powered Quantity Takeoff
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate__animated animate__fadeInUp">
                <span className="text-blue-900">Precision Estimating</span>
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                  Made Simple
                </span>
              </h1>
            </div>

            <p className="text-xl text-gray-600 md:pr-12 animate__animated animate__fadeInUp animate__delay-1s">
              Accelerate your construction projects with AI-powered quantity takeoff solutions. Reduce errors, save
              time, and streamline your estimating workflow.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate__animated animate__fadeInUp animate__delay-1s">
              <GradientButton to="/free-trial" label="Start Free Trial" />
              <Link
                to="/book-a-demo"
                className="group relative overflow-hidden bg-white text-indigo-600 border-2 border-indigo-600 hover:text-white font-semibold py-4 px-10 rounded-lg transition-all duration-300"
              >
                <span className="relative z-10">Book a Demo</span>
                <span className="absolute inset-0 bg-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </Link>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-4 pt-8 reveal">
              <div className="text-center p-4 rounded-lg bg-white/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-3xl font-bold text-blue-900">50K+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-white/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-3xl font-bold text-blue-900">70%</div>
                <div className="text-gray-600">Time Saved</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-white/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-3xl font-bold text-blue-900">99%</div>
                <div className="text-gray-600">Accuracy Rate</div>
              </div>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="relative animate__animated animate__fadeInRight animate__delay-1s">
            <div className="relative z-10 transform hover:scale-105 transition-all duration-500 group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <img
                  src={interfaces || "/placeholder.svg"}
                  alt="Software Interface"
                  className="rounded-xl shadow-xl border-4 border-white"
                />
              </div>

              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg animate__animated animate__bounceIn animate__delay-2s">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold">Live Takeoff</span>
                </div>
              </div>

              {/* Feature tags */}
              <div className="absolute -top-4 -left-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg animate__animated animate__fadeInDown animate__delay-2s">
                <span className="text-sm font-semibold">AI-Powered</span>
              </div>

              <div className="absolute top-1/3 -right-8 bg-indigo-600 text-white px-4 py-2 rounded-lg shadow-lg animate__animated animate__fadeInLeft animate__delay-3s">
                <span className="text-sm font-semibold">Real-time Updates</span>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-12 -left-12 w-24 h-24 bg-purple-200 rounded-full opacity-70 animate-pulse"></div>
            <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-blue-200 rounded-full opacity-70 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Wave Decoration */}
      <WavyBackground />
    </section>
  )
}

export default Hero
