import React,{useEffect} from 'react';
import BookADemo from '../../components/Buttons/BookADemo';

const Paving = () => {
      useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16 mt-16">
      {/* Hero Section */}
      <section className="pt-24 pb-16 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-700 to-gray-900 mb-6">
            AI-Powered Takeoff Software for Paving Projects
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Automate measurements, material estimation, and bidding processes for paving projects with precision.
          </p>
          <div className="flex justify-center gap-4">
            <BookADemo className='bg-gray-600 hover:bg-gray-700'/>
            <button className="border-2 border-gray-700 text-gray-700 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 shadow-lg rounded-lg border border-gray-200">
              <h3 className="text-2xl font-semibold text-gray-700 mb-4">Precision Takeoff</h3>
              <p className="text-gray-600">Quickly extract accurate measurements from site plans and blueprints.</p>
            </div>
            <div className="p-6 shadow-lg rounded-lg border border-gray-200">
              <h3 className="text-2xl font-semibold text-gray-700 mb-4">Material Estimation</h3>
              <p className="text-gray-600">Calculate the exact amount of asphalt, concrete, and aggregates required.</p>
            </div>
            <div className="p-6 shadow-lg rounded-lg border border-gray-200">
              <h3 className="text-2xl font-semibold text-gray-700 mb-4">Cost & Labor Analysis</h3>
              <p className="text-gray-600">Receive real-time cost estimates, labor breakdowns, and budget optimization.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-700 mb-4">Upload Site Plans</h3>
              <p className="text-gray-600">Easily upload PDFs or images of your paving project plans.</p>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-700 mb-4">AI-Powered Analysis</h3>
              <p className="text-gray-600">Automatically detect areas, calculate materials, and optimize costs.</p>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-700 mb-4">Download Reports</h3>
              <p className="text-gray-600">Generate detailed reports in PDF or Excel formats for easy project management.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Paving;
