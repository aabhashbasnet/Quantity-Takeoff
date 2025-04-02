import React from 'react';
import 'animate.css';
import aboutImage from '../../assets/about.jpeg'; // Replace with your image path
import { FaRegBuilding, FaTools, FaUserFriends } from 'react-icons/fa';

const About = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <header className="text-center mb-12 animate__animated animate__fadeInDown">
          <h1 className="text-5xl font-bold text-gray-800">About Us</h1>
          <p className="text-xl text-gray-600 mt-4">
            Innovating Construction Estimation, One Project at a Time
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="animate__animated animate__fadeInLeft">
            <img 
              src={aboutImage} 
              alt="About Us" 
              className="rounded-lg shadow-2xl border-8 border-white"
            />
          </div>

          {/* Right Content */}
          <div className="space-y-6 animate__animated animate__fadeInRight">
            <p className="text-lg text-gray-700 leading-relaxed">
              Founded by industry experts, our company is dedicated to transforming the way construction projects are planned and executed. With a focus on precision, innovation, and efficiency, we have developed AI-powered takeoff software that revolutionizes quantity estimation and project management.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our journey began when a group of passionate engineers and construction professionals united under a shared vision: to eliminate the guesswork from construction estimation. Today, our technology is trusted by thousands of professionals worldwide, driving success on projects of all sizes.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We believe in continuous innovation and are committed to enhancing our solutions to meet the evolving needs of the construction industry. Through relentless research, user feedback, and technological advancements, we empower our clients with the tools they need to achieve outstanding results.
            </p>

            {/* Key Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-4 border rounded-lg shadow-md animate__animated animate__zoomIn animate__delay-1s">
                <FaRegBuilding className="text-3xl text-blue-600 mx-auto" />
                <h3 className="text-xl font-semibold mt-2">Expertise</h3>
                <p className="text-gray-600 text-sm">
                  Years of industry experience at your service.
                </p>
              </div>
              <div className="text-center p-4 border rounded-lg shadow-md animate__animated animate__zoomIn animate__delay-2s">
                <FaTools className="text-3xl text-blue-600 mx-auto" />
                <h3 className="text-xl font-semibold mt-2">Innovation</h3>
                <p className="text-gray-600 text-sm">
                  Cutting-edge technology that drives precision.
                </p>
              </div>
              <div className="text-center p-4 border rounded-lg shadow-md animate__animated animate__zoomIn animate__delay-3s">
                <FaUserFriends className="text-3xl text-blue-600 mx-auto" />
                <h3 className="text-xl font-semibold mt-2">Collaboration</h3>
                <p className="text-gray-600 text-sm">
                  Partnering with you to ensure project success.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Extended About Content */}
        <div className="mt-16 animate__animated animate__fadeInUp">
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-6">
            Our Story
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Our mission is driven by a deep commitment to excellence and a passion for innovation. Every project we undertake is a testament to our dedication to creating smarter, more efficient workflows for the construction industry. By leveraging advanced AI and machine learning, we continue to push the boundaries of what's possible, ensuring that our clients always stay ahead in a competitive market.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            As we look to the future, our vision remains clear: to be the leading provider of construction estimation solutions worldwide. We are continuously exploring new technologies, refining our methods, and expanding our services to cater to the evolving needs of the industry. Our journey is one of perseverance, innovation, and an unwavering commitment to quality.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Join us as we redefine the standards of construction management and pave the way for a more efficient, accurate, and sustainable future.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
