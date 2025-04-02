import React from 'react';

const Features = () => (
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-16">Powerful Features</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { 
            title: "AI-Powered Measurements",
            desc: "Automated quantity calculations using computer vision",
            icon: "📐"
          },
          {
            title: "Real-Time Collaboration",
            desc: "Team collaboration with version control",
            icon: "👥"
          },
          {
            title: "Multi-Format Export",
            desc: "Export to Excel, CSV, PDF, and BIM formats",
            icon: "📤"
          }
        ].map((feature) => (
          <div key={feature.title} className="p-6 bg-blue-00 rounded-xl hover:shadow-lg transition-all">
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
    {/* Beautiful Separator Line */}


  </section>
);

export default Features;
