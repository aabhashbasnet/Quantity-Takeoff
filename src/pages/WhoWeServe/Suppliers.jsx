import React,{useEffect} from 'react';
import BookADemo from '../../components/Buttons/BookADemo';
import LearnMore from '../../components/Buttons/LearnMore';

const Suppliers = () => {
      useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white py-16 mt-16">
      {/* Hero Section */}
      <section className="pt-24 pb-16 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-red-600 mb-6">
            AI-Based Takeoff Software for Suppliers & Distributors
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Automate your takeoffs, improve accuracy, and process more estimates with our AI-powered solution.
          </p>
          <div className="flex justify-center gap-4">
            <BookADemo className='bg-red-600 hover:bg-red-700'/>
            <LearnMore variant='orange'/>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {[
            { icon: '📦', title: 'Fast Quantity Takeoffs', desc: 'Receive accurate and fast quantity takeoffs tailored for suppliers and distributors.' },
            { icon: '🔍', title: 'Enhanced Accuracy', desc: 'Minimize errors and ensure precise measurements with AI validation.' },
            { icon: '📊', title: 'Process More Estimates', desc: 'Handle more estimates efficiently without increasing your workload.' }
          ].map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gray-100 text-center">
        <h2 className="text-4xl font-extrabold mb-4">Enhance Your Estimating Process Today</h2>
        <p className="text-lg mb-6">Join leading suppliers and distributors who have streamlined their takeoff process with our AI-powered software.</p>
        <button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-8 rounded-full transition-colors">
          Get Started
        </button>
      </section>
    </div>
  );
};

export default Suppliers;
