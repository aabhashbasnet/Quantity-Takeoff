import React from 'react';
import 'animate.css';
import interfaces from '../assets/interface.jpg';
import { Link } from 'react-router-dom';


const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-blue-100 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 text-center md:text-left animate__animated animate__fadeInLeft">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 leading-tight">
              Precision Estimating
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                Made Simple
              </span>
            </h1>

            <p className="text-xl text-gray-600 md:pr-12">
              Accelerate your construction projects with AI-powered quantity takeoff solutions.
              Reduce errors, save time, and streamline your estimating workflow.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                to="/free-trial"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 shadow-lg animate__animated animate__fadeInUp animate__delay-1s"
              >
                Start Free Trial
              </Link>
              <Link
                to="/book-a-demo"
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-4 px-10 rounded-lg shadow-xl transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Book a Demo
              </Link>

            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="text-center animate__animated animate__fadeInUp animate__delay-3s">
                <div className="text-3xl font-bold text-blue-900">50K+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center animate__animated animate__fadeInUp animate__delay-3s">
                <div className="text-3xl font-bold text-blue-900">70%</div>
                <div className="text-gray-600">Time Saved</div>
              </div>
              <div className="text-center animate__animated animate__fadeInUp animate__delay-3s">
                <div className="text-3xl font-bold text-blue-900">99%</div>
                <div className="text-gray-600">Accuracy Rate</div>
              </div>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="relative animate__animated animate__fadeInRight animate__delay-1s">
            <div className="relative z-10 transform hover:scale-105 transition-all duration-300">
              <img
                src={interfaces}
                alt="Software Interface"
                className="rounded-xl shadow-2xl border-8 border-white"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-md animate__animated animate__bounceIn animate__delay-2s">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold">Live Takeoff</span>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-8 -left-8 w-24 h-24 bg-purple-100 rounded-full opacity-50 animate__animated animate__fadeIn animate__delay-2s"></div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-blue-100 rounded-full opacity-50 animate__animated animate__fadeIn animate__delay-3s"></div>
          </div>
        </div>
      </div>

      {/* Wave Decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-24 text-white"
          viewBox="0 0 1440 150"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            d="M0,96L48,106.7C96,117,192,139,288,138.7C384,139,480,117,576,112C672,107,768,117,864,128C960,139,1056,149,1152,138.7C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
