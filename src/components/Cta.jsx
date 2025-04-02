import { Link } from 'react-router-dom';

const CTA = () => (
  <section className="relative py-24 bg-gradient-to-br from-blue-900 to-purple-900 overflow-hidden">
    {/* Animated background elements */}
    <div className="absolute top-0 left-0 w-full h-full opacity-20">
      <div className="absolute top-20 left-1/4 w-48 h-48 bg-blue-600 rounded-full mix-blend-screen opacity-30 animate-float"></div>
      <div className="absolute bottom-10 right-1/4 w-56 h-56 bg-blue-500 rounded-full mix-blend-screen opacity-30 animate-float-delayed"></div>
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300">
          Transform Your Estimating Process
        </h2>
        <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-2xl mx-auto">
          Join thousands of construction professionals already accelerating their workflows
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          {/* Start Free Trial button as Link */}
          <Link to="/free-trial" className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-400 hover:to-purple-400 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105">
            <span className="text-white font-semibold text-lg relative z-10">
              Start Free Trial
            </span>
            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-white/10 to-white/5"></div>
            <div className="absolute top-0 left-1/2 w-0 h-full bg-white/20 group-hover:w-full transition-all duration-500 -translate-x-1/2"></div>
          </Link>

          {/* Schedule Demo button as Link */}
          <Link to="/schedule-demo" className="group relative px-8 py-4 rounded-full border-2 border-blue-300 hover:border-purple-300 bg-transparent hover:bg-white/5 transition-all duration-300 transform hover:scale-105">
            <span className="text-blue-100 group-hover:text-purple-200 font-semibold text-lg">
              Schedule Demo
            </span>
            <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-purple-300/30 transition-all duration-300"></div>
          </Link>
        </div>

        <div className="mt-8 text-sm text-blue-200">
          No credit card required • 14-day free trial • Cancel anytime
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
