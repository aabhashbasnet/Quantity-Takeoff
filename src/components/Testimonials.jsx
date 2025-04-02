// src/components/Testimonials.jsx
import React from 'react';

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
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Industry Professionals
          </h2>
          <p className="text-lg text-gray-600">
            Join thousands of construction experts who have transformed their workflows
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Quote */}
              <div className="relative mb-6">
                <svg 
                  className="absolute -top-3 -left-3 w-8 h-8 text-yellow-400"
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h6l-1.414 2.828a2 2 0 000 2.828l8 8a2 2 0 002.828-2.828L22 9.828V5h-4.586L17.414 2.586zM15 5H3v10h12V5z"/>
                </svg>
                <p className="pl-10 text-gray-700 italic">
                  "{testimonial.quote}"
                </p>
              </div>

              {/* User Info */}
              <div className="flex items-center space-x-4">
                <img 
                  src={testimonial.image}
                  alt={`${testimonial.name}'s avatar`}
                  className="w-14 h-14 rounded-full border-4 border-white shadow-md"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-xs text-gray-500 mt-1">{testimonial.company}</p>
                </div>
              </div>

              {/* Star Rating */}
              <div className="flex mt-4 text-yellow-500">
                {Array.from({ length: testimonial.rating }, (_, i) => (
                  <svg 
                    key={i}
                    className="w-5 h-5 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15.172l-3.475 1.955a1 1 0 01-1.465-1.06l.875-4.167L2.707 8.5a1 1 0 01.553-1.414l4.167-.875L10 2.328l2.578 1.465a1 1 0 01.553 1.414l-4.167.875 1.465 4.167a1 1 0 01-1.06 1.465L10 15.172z"/>
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;