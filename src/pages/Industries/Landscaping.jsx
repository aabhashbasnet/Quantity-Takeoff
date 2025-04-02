import React from 'react';

const Landscaping = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-teal-600 mb-6">
            AI-Powered Takeoff Software for Landscaping
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Automate measurements, material estimation, and bidding processes for landscaping projects.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-green-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-green-700 transition-all">
              Get Started
            </button>
            <button className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-green-50 transition-all">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-green-700 mb-8">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 shadow-lg rounded-lg border border-gray-200">
              <h3 className="text-2xl font-semibold text-green-600 mb-4">Automated Takeoff</h3>
              <p className="text-gray-600">Instantly generate accurate measurements from blueprints and site plans.</p>
            </div>
            <div className="p-6 shadow-lg rounded-lg border border-gray-200">
              <h3 className="text-2xl font-semibold text-green-600 mb-4">Material Estimation</h3>
              <p className="text-gray-600">Calculate the exact quantity of materials needed for landscaping projects.</p>
            </div>
            <div className="p-6 shadow-lg rounded-lg border border-gray-200">
              <h3 className="text-2xl font-semibold text-green-600 mb-4">Cost Analysis</h3>
              <p className="text-gray-600">Receive instant cost estimates based on real-time pricing and vendor data.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-green-700 mb-8">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-green-600 mb-4">Upload Plans</h3>
              <p className="text-gray-600">Easily upload PDFs or images of your landscaping blueprints.</p>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-green-600 mb-4">Automate Takeoff</h3>
              <p className="text-gray-600">AI-powered tools instantly extract dimensions and material requirements.</p>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-green-600 mb-4">Download Reports</h3>
              <p className="text-gray-600">Generate detailed PDF or Excel reports with cost estimates and materials needed.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landscaping;
