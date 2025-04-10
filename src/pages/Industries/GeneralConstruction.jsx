import React,{useEffect} from 'react';

const GeneralConstruction = () => {
      useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-orange-600 mb-6">
            AI-Powered Takeoff Software for General Construction
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Automate measurements, cost estimation, and project planning for efficient construction management.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-yellow-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-yellow-700 transition-all">
              Get Started
            </button>
            <button className="border-2 border-yellow-600 text-yellow-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-yellow-50 transition-all">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-yellow-700 mb-8">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 shadow-lg rounded-lg border border-gray-200">
              <h3 className="text-2xl font-semibold text-yellow-600 mb-4">Automated Takeoff</h3>
              <p className="text-gray-600">Extract accurate measurements from construction plans in seconds.</p>
            </div>
            <div className="p-6 shadow-lg rounded-lg border border-gray-200">
              <h3 className="text-2xl font-semibold text-yellow-600 mb-4">Material & Cost Estimation</h3>
              <p className="text-gray-600">Calculate materials, labor, and cost estimates with AI-powered precision.</p>
            </div>
            <div className="p-6 shadow-lg rounded-lg border border-gray-200">
              <h3 className="text-2xl font-semibold text-yellow-600 mb-4">Project Planning</h3>
              <p className="text-gray-600">Optimize scheduling and track progress with real-time insights.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-yellow-700 mb-8">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-yellow-600 mb-4">Upload Construction Plans</h3>
              <p className="text-gray-600">Easily upload blueprints or site layouts for automated analysis.</p>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-yellow-600 mb-4">AI-Driven Analysis</h3>
              <p className="text-gray-600">Detect structural elements, estimate resources, and generate reports.</p>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-yellow-600 mb-4">Download Reports</h3>
              <p className="text-gray-600">Export project summaries, cost estimates, and schedules in PDF or Excel.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GeneralConstruction;
