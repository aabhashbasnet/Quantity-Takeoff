import React, { useState } from "react";

const Portfolio = () => {
  // Sample portfolio data (can be replaced with API data)
  const portfolioData = [
    {
      id: 1,
      title: "Residential Construction Project",
      category: "Residential",
      image: "https://via.placeholder.com/400x300?text=Residential+Project",
      description:
        "Streamlined takeoff process for a 50-unit residential complex, reducing estimation time by 40%.",
      client: "ABC Builders",
      location: "Los Angeles, CA",
    },
    {
      id: 2,
      title: "Commercial Office Building",
      category: "Commercial",
      image: "https://via.placeholder.com/400x300?text=Commercial+Project",
      description:
        "Accurate quantity takeoffs for a 15-story office building, ensuring cost efficiency and timely delivery.",
      client: "XYZ Developers",
      location: "New York, NY",
    },
    {
      id: 3,
      title: "Infrastructure Development",
      category: "Infrastructure",
      image: "https://via.placeholder.com/400x300?text=Infrastructure+Project",
      description:
        "Managed material estimates for a highway expansion project, improving resource allocation.",
      client: "State Department of Transportation",
      location: "Texas",
    },
    {
      id: 4,
      title: "Renovation of Historical Site",
      category: "Renovation",
      image: "https://via.placeholder.com/400x300?text=Renovation+Project",
      description:
        "Preserved historical integrity while modernizing facilities using precise takeoff data.",
      client: "Heritage Trust",
      location: "Boston, MA",
    },
  ];

  // State for managing active category
  const [activeCategory, setActiveCategory] = useState("");

  // Get unique categories for filtering
  const categories = ["All", ...new Set(portfolioData.map((project) => project.category))];

  // Filter portfolio based on active category
  const filteredProjects =
    activeCategory === "All" || activeCategory === ""
      ? portfolioData
      : portfolioData.filter(
          (project) => project.category.toLowerCase() === activeCategory.toLowerCase()
        );

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Portfolio</h1>
        <p className="text-lg text-gray-600">
          Explore how our Quantity Takeoff software has helped clients achieve success in various projects.
        </p>
      </div>

      {/* Category Filters */}
      <div className="max-w-7xl mx-auto mt-8 flex justify-center space-x-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded ${
              activeCategory === category || (activeCategory === "" && category === "All")
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Portfolio Grid */}
      <div className="max-w-7xl mx-auto mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-sm overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              {/* Details */}
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900">{project.title}</h3>
                <p className="mt-2 text-gray-600">{project.description}</p>
                <div className="mt-4">
                  <p className="text-sm text-gray-500">
                    <strong>Client:</strong> {project.client}
                  </p>
                  <p className="text-sm text-gray-500">
                    <strong>Location:</strong> {project.location}
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-600 text-center col-span-full">
            No projects found for the selected category.
          </p>
        )}
      </div>

      {/* Call to Action Section */}
      <div className="max-w-7xl mx-auto mt-12 text-center">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">
          Ready to Transform Your Projects?
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Join the growing list of satisfied clients who trust our Quantity Takeoff software.
        </p>
        <a
          href="/contact"
          className="inline-block px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Contact Us Today
        </a>
      </div>
    </div>
  );
};

export default Portfolio;