import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import WavyBackground from './WavyBackground';
const testimonials = [
  {
    id: 1,
    quote: "This software cut our estimation time by 60%! The AI-powered takeoff tool is a game-changer for construction professionals.",
    name: "Sarah Johnson",
    role: "Project Manager",
    company: "BuildRight Contractors",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/45.jpg"
  },
  {
    id: 2,
    quote: "Finally, a tool that understands the complexities of MEP takeoffs. The collaboration features saved us hundreds of hours.",
    name: "Michael Chen",
    role: "MEP Engineer",
    company: "Precision Engineering",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/82.jpg"
  },
  {
    id: 3,
    quote: "The accuracy of material calculations has reduced our project overruns by 35%. Worth every penny!",
    name: "Emma Wilson",
    role: "Construction Estimator",
    company: "Summit Builders",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/29.jpg"
  },
  {
    id: 4,
    quote: "We've been able to scale our operations significantly since implementing this solution. The ROI was evident within the first month.",
    name: "David Rodriguez",
    role: "Operations Director",
    company: "Elite Construction Group",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/36.jpg"
  },
  {
    id: 5,
    quote: "The customer support team is exceptional. They helped us customize the platform to our specific workflow needs.",
    name: "Jennifer Lee",
    role: "Chief Estimator",
    company: "Cornerstone Builders",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/63.jpg"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleTestimonials, setVisibleTestimonials] = useState([]);
  const [autoplay, setAutoplay] = useState(true);

  // Determine how many testimonials to show based on screen size
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1024) { // lg
        setVisibleTestimonials(getVisibleItems(3));
      } else if (width >= 768) { // md
        setVisibleTestimonials(getVisibleItems(2));
      } else {
        setVisibleTestimonials(getVisibleItems(1));
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [activeIndex]);

  // Autoplay functionality
  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [autoplay, activeIndex]);

  const getVisibleItems = (count) => {
    const items = [];
    for (let i = 0; i < count; i++) {
      const index = (activeIndex + i) % testimonials.length;
      items.push(testimonials[index]);
    }
    return items;
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    setAutoplay(false);
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => 
      (prevIndex + 1) % testimonials.length
    );
  };

  return (
    <section id='testimonials' className="py-24 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-indigo-100 rounded-full opacity-20 blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Trusted by Industry Professionals
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of construction experts who have transformed their workflows with our platform
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="mb-16 bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-8 md:p-12 flex items-center">
              <div>
                <Quote className="w-12 h-12 text-white/30 mb-6" />
                <p className="text-xl md:text-2xl font-medium text-white mb-8 leading-relaxed">
                  "This platform has revolutionized how we approach quantity takeoffs. The AI accuracy is remarkable, and we've cut our estimation time in half while improving bid precision."
                </p>
                <div className="flex items-center">
                  <img 
                    src="https://randomuser.me/api/portraits/men/54.jpg"
                    alt="Robert Thompson's avatar"
                    className="w-16 h-16 rounded-full border-4 border-white/20"
                  />
                  <div className="ml-4">
                    <h4 className="font-bold text-white">Robert Thompson</h4>
                    <p className="text-blue-100">Chief Estimator, Thompson Construction</p>
                    <div className="flex mt-2 text-yellow-300">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-8 md:p-12 flex items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Results at a Glance</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 font-medium">Time Savings</span>
                      <span className="text-blue-600 font-bold">50%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '50%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 font-medium">Bid Accuracy</span>
                      <span className="text-blue-600 font-bold">98%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '98%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 font-medium">ROI</span>
                      <span className="text-blue-600 font-bold">320%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '100%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900">What Our Customers Say</h3>
            <div className="flex space-x-2">
              <button 
                onClick={handlePrev}
                className="p-2 rounded-full bg-white border border-gray-200 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={handleNext}
                className="p-2 rounded-full bg-white border border-gray-200 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleTestimonials.map((testimonial) => (
              <div 
                key={testimonial.id}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
              >
                {/* Quote */}
                <div className="mb-6">
                  <div className="flex mb-4">
                    {Array.from({ length: testimonial.rating }, (_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700">
                    "{testimonial.quote}"
                  </p>
                </div>

                {/* User Info */}
                <div className="flex items-center space-x-4 pt-4 border-t border-gray-100">
                  <img 
                    src={testimonial.image || "/placeholder.svg"}
                    alt={`${testimonial.name}'s avatar`}
                    className="w-12 h-12 rounded-full border-2 border-blue-100"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-10 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveIndex(index);
                  setAutoplay(false);
                }}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === activeIndex ? 'bg-blue-600 w-8' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
      <WavyBackground />
    </section>
  );
};

export default Testimonials;
