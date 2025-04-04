import React, { useState } from "react";

const VideoTutorials = () => {
  // Sample video tutorial data (can be replaced with API data)
  const videoData = [
    {
      id: 1,
      title: "How to Create a New Project",
      description:
        "Learn how to create a new project in the Quantity Takeoff tool.",
      thumbnail: "https://via.placeholder.com/300x200?text=Project+Setup",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Example YouTube embed URL
    },
    {
      id: 2,
      title: "Exporting Data to CSV",
      description: "Step-by-step guide to exporting your data in CSV format.",
      thumbnail: "https://via.placeholder.com/300x200?text=Export+CSV",
      videoUrl: "https://www.youtube.com/embed/abcdef12345",
    },
    {
      id: 3,
      title: "Troubleshooting Common Errors",
      description:
        "Tips and tricks to resolve common errors in the application.",
      thumbnail: "https://via.placeholder.com/300x200?text=Troubleshooting",
      videoUrl: "https://www.youtube.com/embed/ghijkl67890",
    },
    {
      id: 4,
      title: "Inviting Team Members",
      description:
        "How to invite team members to collaborate on your projects.",
      thumbnail: "https://via.placeholder.com/300x200?text=Invite+Members",
      videoUrl: "https://www.youtube.com/embed/mnopqr12345",
    },
  ];

  // State for managing search query
  const [searchQuery, setSearchQuery] = useState("");

  // Filter videos based on search query
  const filteredVideos = videoData.filter((video) =>
    video.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Video Tutorials
        </h1>
        <p className="text-lg text-gray-600">
          Watch step-by-step guides to learn how to use the Quantity Takeoff
          tool effectively.
        </p>
      </div>

      {/* Search Bar */}
      <div className="max-w-7xl mx-auto mt-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Search for video tutorials..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      {/* Video Grid */}
      <div className="max-w-7xl mx-auto mt-12">
        {filteredVideos.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVideos.map((video) => (
              <div
                key={video.id}
                className="bg-white rounded-lg shadow-sm overflow-hidden transition-transform duration-300 hover:scale-105"
              >
                {/* Thumbnail */}
                <a
                  href={video.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-48 object-cover"
                  />
                </a>
                {/* Details */}
                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    {video.title}
                  </h3>
                  <p className="mt-2 text-gray-600">{video.description}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600 text-center">
            No video tutorials found for "{searchQuery}".
          </p>
        )}
      </div>
    </div>
  );
};

export default VideoTutorials;