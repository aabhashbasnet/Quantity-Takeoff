import React from "react";
import ScrollToTop from "../../components/Buttons/ScrollToTop";

const Careers = () => {
  // Sample job openings data (can be replaced with API data)
  const jobOpenings = [
    {
      id: 1,
      title: "Frontend Developer",
      location: "Remote",
      type: "Full-Time",
      description:
        "We are looking for a skilled Frontend Developer to build intuitive user interfaces for our Quantity Takeoff software.",
    },
    {
      id: 2,
      title: "Backend Developer",
      location: "New York, NY",
      type: "Full-Time",
      description:
        "Join our team as a Backend Developer to design and implement scalable server-side solutions.",
    },
    {
      id: 3,
      title: "Customer Success Manager",
      location: "San Francisco, CA",
      type: "Full-Time",
      description:
        "Help our customers succeed by providing exceptional support and training on our software.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-8 py-16 mt-16">
      <ScrollToTop />
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Join Our Team</h1>
        <p className="text-lg text-gray-600">
          We're building innovative tools for construction professionals. Come grow with us!
        </p>
      </div>

      {/* Why Work With Us Section */}
      <div className="max-w-7xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg shadow-sm p-6 text-center">
          <h3 className="text-xl font-medium text-gray-900">Innovative Projects</h3>
          <p className="mt-2 text-gray-600">
            Work on cutting-edge software that transforms the construction industry.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6 text-center">
          <h3 className="text-xl font-medium text-gray-900">Collaborative Culture</h3>
          <p className="mt-2 text-gray-600">
            Join a team that values collaboration, creativity, and continuous learning.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6 text-center">
          <h3 className="text-xl font-medium text-gray-900">Work-Life Balance</h3>
          <p className="mt-2 text-gray-600">
            Enjoy flexible hours and remote work options to maintain a healthy balance.
          </p>
        </div>
      </div>

      {/* Open Positions Section */}
      <div className="max-w-7xl mx-auto mt-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">Open Positions</h2>
        {jobOpenings.length > 0 ? (
          <div className="space-y-6">
            {jobOpenings.map((job) => (
              <div key={job.id} className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-medium text-gray-900">{job.title}</h3>
                <div className="flex items-center text-sm text-gray-500 mt-2">
                  <span>{job.location}</span>
                  <span className="mx-2">•</span>
                  <span>{job.type}</span>
                </div>
                <p className="mt-4 text-gray-600">{job.description}</p>
                <a
                  href="#"
                  className="inline-block mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                >
                  Apply Now
                </a>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600 text-center">No open positions at the moment.</p>
        )}
      </div>

      {/* Application Process Section */}
      <div className="max-w-7xl mx-auto mt-12 bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Application Process</h2>
        <ol className="list-decimal pl-6 space-y-2 text-gray-600">
          <li>Submit your resume and cover letter through our application form.</li>
          <li>Our team will review your application and contact you for an initial interview.</li>
          <li>Complete a technical assessment or skills test (if applicable).</li>
          <li>Attend a final interview with the hiring manager and team members.</li>
          <li>Receive an offer and join our team!</li>
        </ol>
      </div>

      {/* Perks and Benefits Section */}
      <div className="max-w-7xl mx-auto mt-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">Perks and Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <h3 className="text-xl font-medium text-gray-900">Health Insurance</h3>
            <p className="mt-2 text-gray-600">
              Comprehensive health, dental, and vision coverage for you and your family.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <h3 className="text-xl font-medium text-gray-900">Professional Development</h3>
            <p className="mt-2 text-gray-600">
              Access to workshops, courses, and conferences to enhance your skills.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <h3 className="text-xl font-medium text-gray-900">Flexible Hours</h3>
            <p className="mt-2 text-gray-600">
              Work when it suits you best with flexible schedules and remote options.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="max-w-7xl mx-auto mt-12 text-center">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">
          Ready to Make an Impact?
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          We're excited to welcome passionate individuals who want to transform the construction industry.
        </p>
        <a
          href="#"
          className="inline-block px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          View All Openings
        </a>
      </div>
    </div>
  );
};

export default Careers;