import React from "react"; // Add this line
import { Ruler, Users, FileOutput, Zap, Clock, Shield, BarChart3, Smartphone, Cloud } from "lucide-react";
import {Link} from "react-router-dom";

const Features = () => {
  const featuresList = [
    {
      title: "AI-Powered Measurements",
      desc: "Automated quantity calculations using advanced computer vision technology for precise measurements.",
      icon: <Ruler className="w-6 h-6" />,
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Real-Time Collaboration",
      desc: "Seamless team collaboration with version control and instant updates across all devices.",
      icon: <Users className="w-6 h-6" />,
      color: "from-indigo-500 to-indigo-600",
    },
    {
      title: "Multi-Format Export",
      desc: "Export your takeoffs to Excel, CSV, PDF, and BIM formats with a single click.",
      icon: <FileOutput className="w-6 h-6" />,
      color: "from-cyan-500 to-cyan-600",
    },
    {
      title: "Lightning Fast Processing",
      desc: "Process even the most complex blueprints in seconds with our optimized algorithms.",
      icon: <Zap className="w-6 h-6" />,
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "Time-Saving Automation",
      desc: "Reduce manual work by up to 70% with intelligent automation workflows.",
      icon: <Clock className="w-6 h-6" />,
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Secure Data Storage",
      desc: "Enterprise-grade security ensures your project data is always protected and compliant.",
      icon: <Shield className="w-6 h-6" />,
      color: "from-indigo-500 to-indigo-600",
    },
    {
      title: "Advanced Analytics",
      desc: "Gain insights from comprehensive reports and analytics on your estimation data.",
      icon: <BarChart3 className="w-6 h-6" />,
      color: "from-cyan-500 to-cyan-600",
    },
    {
      title: "Mobile Accessibility",
      desc: "Access your takeoffs on any device with our responsive web and mobile applications.",
      icon: <Smartphone className="w-6 h-6" />,
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "Cloud Integration",
      desc: "Seamlessly integrate with popular cloud storage services and construction software.",
      icon: <Cloud className="w-6 h-6" />,
      color: "from-blue-500 to-blue-600",
    },
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-white to-blue-50 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[20%] right-[10%] w-[25%] h-[25%] bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute bottom-[20%] left-[10%] w-[25%] h-[25%] bg-indigo-100 rounded-full opacity-30 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Powerful Features
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Our platform combines cutting-edge technology with user-friendly design to streamline your quantity takeoff process.
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {featuresList.map((feature, index) => (
            <div
              key={feature.title}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 sm:hover:shadow-xl sm:hover:-translate-y-1"
            >
              <div className="p-6">
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} text-white mb-5 group-hover:scale-110 transition-transform duration-300`}
                >
                  {React.cloneElement(feature.icon, { className: "w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" })}
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
              <div
                className={`h-1 w-full bg-gradient-to-r ${feature.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
              ></div>
            </div>
          ))}
        </div>

        {/* Separator Line */}
        <div className="relative mt-24 mb-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200 sm:border-t-2"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-gradient-to-r from-blue-50 via-white to-blue-50 px-6 text-blue-500">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="animate-pulse"
              >
                <path d="M12 5v14M5 12h14"></path>
              </svg>
            </span>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-semibold mb-6 text-gray-800">Ready to experience these features?</h3>
          <Link
            to="/book-a-demo"
            className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1"
          >
            Request a Demo
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Features;