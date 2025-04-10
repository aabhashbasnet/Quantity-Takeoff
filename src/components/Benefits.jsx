import { Clock, FileCheck, HeadphonesIcon, BarChart3 } from "lucide-react"
import WavyBackground from "./WavyBackground"

const Benefits = () => {
  const benefits = [
    {
      number: "80%",
      label: "Faster Estimates",
      description: "Complete takeoffs in a fraction of the time compared to traditional methods.",
      icon: <Clock className="w-6 h-6" />,
      color: "from-blue-500 to-indigo-600",
    },
    {
      number: "50+",
      label: "File Types Supported",
      description: "Import from virtually any file format including PDF, DWG, DXF, and more.",
      icon: <FileCheck className="w-6 h-6" />,
      color: "from-indigo-500 to-purple-600",
    },
    {
      number: "24/7",
      label: "Expert Support",
      description: "Our dedicated team is always available to help with any questions or issues.",
      icon: <HeadphonesIcon className="w-6 h-6" />,
      color: "from-cyan-500 to-blue-600",
    },
    {
      number: "99.9%",
      label: "Accuracy Rate",
      description: "Precision you can trust with our AI-powered measurement technology.",
      icon: <BarChart3 className="w-6 h-6" />,
      color: "from-blue-500 to-indigo-600",
    },
  ]

  return (
    <section className="relative py-24 bg-gradient-to-br from-blue-50 via-white to-blue-100 overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute top-20 -left-20 w-64 h-64 bg-indigo-100 rounded-full opacity-30 blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-10 -right-20 w-72 h-72 bg-blue-100 rounded-full opacity-30 blur-3xl animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-100 rounded-full opacity-20 blur-3xl animate-pulse"
        style={{ animationDelay: "3s" }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            Why Choose Us
          </span>
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Quantifiable Benefits
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform delivers measurable improvements to your estimation workflow, saving you time and increasing
            accuracy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.label}
              className="relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 group transform hover:-translate-y-2"
            >
              {/* Top gradient bar */}
              <div className={`h-2 w-full bg-gradient-to-r ${benefit.color}`}></div>

              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div
                    className={`flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-to-r ${benefit.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    {benefit.icon}
                  </div>
                  <span className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                    {benefit.number}
                  </span>
                </div>

                <h3 className="text-xl font-semibold mb-3 text-gray-800">{benefit.label}</h3>
                <p className="text-gray-600">{benefit.description}</p>

                {/* Animated line */}
                <div className="mt-6 h-0.5 w-0 bg-gradient-to-r from-blue-500 to-indigo-600 group-hover:w-full transition-all duration-700"></div>
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                <div
                  className={`absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 rotate-45 w-8 h-24 bg-gradient-to-r ${benefit.color} opacity-20 group-hover:opacity-40 transition-opacity duration-300`}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="mt-20 bg-white rounded-2xl shadow-xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full opacity-50 transform translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-50 rounded-full opacity-50 transform -translate-x-1/3 translate-y-1/3"></div>

          <div className="relative z-10">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-white text-3xl font-bold">
                "
              </div>
              <div>
                <p className="text-xl md:text-2xl text-gray-700 italic mb-6">
                  Implementing this quantity takeoff solution has transformed our estimation process. We've reduced our
                  takeoff time by 75% while improving accuracy and winning more bids.
                </p>
                <div className="flex items-center">
                  <div>
                    <h4 className="font-semibold text-gray-900">Michael Rodriguez</h4>
                    <p className="text-gray-600">Chief Estimator, ABC Construction</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave border */}
      <div className="absolute bottom-0 left-0 right-0 transform translate-y-1">
        <svg className="w-full h-24 text-white" viewBox="0 0 1440 150" preserveAspectRatio="none">
          <path
            fill="currentColor"
            d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,106.7C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
      <WavyBackground />
    </section>
  )
}

export default Benefits

