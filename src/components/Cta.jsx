import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';

const CTA = () => (
  <section className="relative py-24 bg-gradient-to-br from-blue-800 via-indigo-800 to-blue-900 overflow-hidden">
    {/* Animated background elements */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply opacity-20 blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply opacity-10 blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-block px-4 py-1.5 bg-blue-700/30 text-blue-100 rounded-full text-sm font-medium mb-4">
            Ready to Get Started?
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Transform Your Estimating Process Today
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Join thousands of construction professionals already accelerating their workflows and winning more bids with our platform.
          </p>

          <ul className="space-y-3 mb-10">
            {[
              "14-day free trial with full access",
              "No credit card required to start",
              "Dedicated onboarding support",
              "Cancel anytime, no commitments"
            ].map((item, index) => (
              <li key={index} className="flex items-center text-blue-100">
                <CheckCircle className="h-5 w-5 mr-3 text-blue-300" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row gap-4">
            {/* Start Free Trial button as Link */}
            <Link 
              to="/free-trial" 
              className="group relative px-8 py-4 rounded-lg bg-white text-blue-800 hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-semibold text-center"
            >
              Start Free Trial
              <ArrowRight className="inline-block ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            {/* Schedule Demo button as Link */}
            <Link 
              to="/book-a-demo" 
              className="group relative px-8 py-4 rounded-lg border-2 border-blue-300 hover:border-white bg-transparent hover:bg-blue-800/30 transition-all duration-300 text-center"
            >
              <span className="text-blue-100 group-hover:text-white font-semibold">
                Schedule Demo
              </span>
            </Link>
          </div>
        </div>

        {/* Testimonial Card */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20 relative">
          <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-2 rounded-lg shadow-lg">
            <span className="text-sm font-semibold">Customer Success</span>
          </div>
          
          <div className="flex items-center mb-6">
            <img 
              src="https://randomuser.me/api/portraits/men/32.jpg" 
              alt="Customer" 
              className="w-16 h-16 rounded-full border-4 border-white/20"
            />
            <div className="ml-4">
              <h4 className="text-white font-bold">James Wilson</h4>
              <p className="text-blue-200">Director, Wilson Construction</p>
            </div>
          </div>
          
          <blockquote className="text-blue-100 italic mb-6">
            "After implementing this platform, we've reduced our estimation time by 70% and increased our bid win rate by 35%. The ROI has been incredible."
          </blockquote>
          
          <div className="flex justify-between items-center border-t border-white/10 pt-6">
            <div className="text-white">
              <div className="text-3xl font-bold">35%</div>
              <div className="text-blue-200 text-sm">Increased Win Rate</div>
            </div>
            <div className="text-white">
              <div className="text-3xl font-bold">70%</div>
              <div className="text-blue-200 text-sm">Time Saved</div>
            </div>
            <div className="text-white">
              <div className="text-3xl font-bold">5x</div>
              <div className="text-blue-200 text-sm">ROI</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Animated wave border */}
    <div className="absolute bottom-0 left-0 right-0 transform translate-y-1">
      <svg
        className="w-full h-24 text-white"
        viewBox="0 0 1440 150"
        preserveAspectRatio="none"
      >
        <path
          fill="currentColor"
          d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,106.7C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>
  </section>
);

export default CTA;
