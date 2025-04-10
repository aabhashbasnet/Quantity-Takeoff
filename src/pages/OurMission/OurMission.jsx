import React,{useEffect} from 'react';
import 'animate.css';
import { FaLightbulb, FaShieldAlt, FaUsers, FaLeaf } from 'react-icons/fa';
import innovation from '../../assets/innovation.jpg'
import quality from '../../assets/quality.jpg'
import future from '../../assets/future.jpg'
import values from '../../assets/values.jpg'
const OurMission = () => {
      useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <section className="min-h-screen bg-gradient-to-b from-indigo-50 to-white py-16 mt-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header Section */}
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold text-indigo-800 mb-4 animate__animated animate__fadeInDown">
            Our Mission
          </h1>
          <p className="text-xl text-gray-700 animate__animated animate__fadeInUp">
            Driving Innovation in Construction Estimation and Project Management
          </p>
        </header>

        {/* Detailed Mission Content */}
        <div className="space-y-16">
          {/* Empowering Innovation */}
          <div className="flex flex-col md:flex-row items-center gap-8 animate__animated animate__fadeInUp">
            <div className="md:w-1/2">
              <img
                src={innovation}
                alt="Empowering Innovation"
                className="rounded-xl shadow-2xl border-8 border-white"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-semibold text-indigo-700 mb-4 flex items-center gap-3">
                <FaLightbulb className="text-indigo-500" /> Empowering Innovation
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                At AI Takeoff Software, we harness the power of artificial intelligence to revolutionize construction estimation. Our cutting-edge tools transform complex blueprints into actionable data, streamlining the entire construction process. We’re not just creating software; we’re forging a future where innovation drives excellence.
              </p>
              <p className="text-lg text-gray-600 mt-4 leading-relaxed">
                Our approach is rooted in a deep understanding of the industry’s challenges. By integrating machine learning and real-time analytics, we empower teams to make data-driven decisions that enhance accuracy and reduce costs.
              </p>
            </div>
          </div>

          {/* Commitment to Quality */}
          <div className="flex flex-col md:flex-row items-center gap-8 animate__animated animate__fadeInUp delay-1s">
            <div className="md:w-1/2 order-2 md:order-1">
              <h2 className="text-3xl font-semibold text-indigo-700 mb-4 flex items-center gap-3">
                <FaShieldAlt className="text-indigo-500" /> Commitment to Quality
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Quality is at the heart of our mission. Every line of code, every design decision, and every integration is driven by our commitment to excellence. Our solutions undergo rigorous testing and continuous improvement to meet the evolving demands of the construction industry.
              </p>
              <p className="text-lg text-gray-600 mt-4 leading-relaxed">
                We collaborate with industry experts and leverage the latest technology to ensure that our software not only meets but exceeds the highest standards of quality and performance.
              </p>
            </div>
            <div className="md:w-1/2 order-1 md:order-2">
              <img
                src={quality}
                alt="Commitment to Quality"
                className="rounded-xl shadow-2xl border-8 border-white"
              />
            </div>
          </div>

          {/* Vision for the Future */}
          <div className="flex flex-col md:flex-row items-center gap-8 animate__animated animate__fadeInUp delay-2s">
            <div className="md:w-1/2">
              <img
                src={future}
                alt="Vision for the Future"
                className="rounded-xl shadow-2xl border-8 border-white"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-semibold text-indigo-700 mb-4 flex items-center gap-3">
                <FaUsers className="text-indigo-500" /> Vision for the Future
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We envision a future where technology and sustainability go hand in hand, transforming the way construction projects are executed. Our vision is to create a seamless digital ecosystem that not only optimizes project planning and cost estimation but also promotes environmentally responsible practices.
              </p>
              <p className="text-lg text-gray-600 mt-4 leading-relaxed">
                By embracing collaborative innovation and leveraging data-driven insights, we are paving the way for smarter, greener, and more efficient construction practices.
              </p>
            </div>
          </div>

          {/* Values and Our Promise */}
          <div className="flex flex-col md:flex-row items-center gap-8 animate__animated animate__fadeInUp delay-3s">
            <div className="md:w-1/2 order-2 md:order-1">
              <h2 className="text-3xl font-semibold text-indigo-700 mb-4 flex items-center gap-3">
                <FaLeaf className="text-indigo-500" /> Values That Drive Us
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our core values – innovation, integrity, collaboration, and sustainability – define who we are and guide every decision we make. We believe in pushing boundaries, working transparently, and forging lasting partnerships to achieve extraordinary results.
              </p>
              <p className="text-lg text-gray-600 mt-4 leading-relaxed">
                Every project, every innovation, and every step we take is a promise to our clients: a promise of quality, efficiency, and a brighter future for the construction industry.
              </p>
            </div>
            <div className="md:w-1/2 order-1 md:order-2">
              <img
                src={values}
                alt="Values and Our Promise"
                className="rounded-xl shadow-2xl border-8 border-white"
              />
            </div>
          </div>

          {/* Visual Story Section */}
          <div className="animate__animated animate__fadeInUp delay-4s">
            <h2 className="text-3xl font-semibold text-indigo-700 text-center mb-6">Our Visual Story</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <img
                src="https://via.placeholder.com/400x300"
                alt="Visual 1"
                className="rounded-lg shadow-md hover:scale-105 transform transition-all duration-300"
              />
              <img
                src="https://via.placeholder.com/400x300"
                alt="Visual 2"
                className="rounded-lg shadow-md hover:scale-105 transform transition-all duration-300"
              />
              <img
                src="https://via.placeholder.com/400x300"
                alt="Visual 3"
                className="rounded-lg shadow-md hover:scale-105 transform transition-all duration-300"
              />
            </div>
            <p className="text-lg text-gray-600 mt-6 text-center leading-relaxed">
              Through these visuals, we showcase our journey, the innovation we drive, and the transformative impact of our technology in the construction industry. Each image tells a part of our story—a story of relentless pursuit of excellence and a commitment to creating a sustainable future.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
