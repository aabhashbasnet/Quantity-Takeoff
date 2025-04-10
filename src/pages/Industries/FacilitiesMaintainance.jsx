import React,{useEffect} from 'react';

const FacilitiesMaintenance = () => {
      useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 mb-6">
            AI-Powered Takeoff Software for Facilities & Maintenance
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Streamline facility management with automated inspections, maintenance tracking, and cost estimation.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all">
              Get Started
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-50 transition-all">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-blue-700 mb-8">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 shadow-lg rounded-lg border border-gray-200">
              <h3 className="text-2xl font-semibold text-blue-600 mb-4">Automated Inspections</h3>
              <p className="text-gray-600">Use AI-powered tools to detect and assess maintenance needs efficiently.</p>
            </div>
            <div className="p-6 shadow-lg rounded-lg border border-gray-200">
              <h3 className="text-2xl font-semibold text-blue-600 mb-4">Maintenance Tracking</h3>
              <p className="text-gray-600">Schedule and manage maintenance tasks with real-time updates.</p>
            </div>
            <div className="p-6 shadow-lg rounded-lg border border-gray-200">
              <h3 className="text-2xl font-semibold text-blue-600 mb-4">Cost & Resource Estimation</h3>
              <p className="text-gray-600">Generate accurate cost estimates and track resource allocation effectively.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-blue-700 mb-8">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-blue-600 mb-4">Upload Facility Data</h3>
              <p className="text-gray-600">Easily upload floor plans, site maps, or existing maintenance records.</p>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-blue-600 mb-4">AI-Powered Analysis</h3>
              <p className="text-gray-600">Detect maintenance needs, generate estimates, and optimize task scheduling.</p>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-blue-600 mb-4">Download Reports</h3>
              <p className="text-gray-600">Generate detailed reports in PDF or Excel formats for seamless facility management.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FacilitiesMaintenance;
