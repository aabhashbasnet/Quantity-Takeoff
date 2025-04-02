import React from 'react';

const Benefits = () => (
  <section className="relative py-16 bg-gradient-to-br from-blue-50 to-blue-100 overflow-hidden">
    {/* Floating background elements */}
    <div className="absolute top-20 -left-20 w-48 h-48 bg-purple-100 rounded-full opacity-20 animate-float"></div>
    <div className="absolute bottom-10 -right-20 w-56 h-56 bg-blue-100 rounded-full opacity-20 animate-float-delayed"></div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <h2 className="text-3xl font-bold text-center mb-16">Benefits</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { number: "80%", label: "Faster Estimates" },
          { number: "50+", label: "File Types" },
          { number: "24/7", label: "Support" },
          { number: "99.9%", label: "Accuracy" }
        ].map((stat) => (
          <div 
            key={stat.label}
            className="p-6 bg-white rounded-xl shadow-sm border border-blue-50 hover:shadow-md transition-all duration-300 group relative"
          >
            <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
              {stat.number}
            </div>
            <div className="text-sm md:text-base text-blue-900 font-medium">
              {stat.label}
            </div>
            
            {/* Animated wave underline */}
            <div className="absolute bottom-0 left-0 right-0 h-1 overflow-hidden">
              <div className="w-full h-full transform group-hover:translate-x-0 -translate-x-full transition-transform duration-500">
                <svg viewBox="0 0 100 10" className="text-blue-100 w-full h-full">
                  <path 
                    fill="currentColor" 
                    d="M0,8 C20,0 50,10 80,2 C100,-2 100,10 100,10 L100,12 L0,12 Z"
                  />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Bottom wave border */}
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

export default Benefits;