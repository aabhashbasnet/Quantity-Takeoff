import React, { useState } from "react";

const Blog = () => {
  // Sample blog post data (can be replaced with API data)
  const blogPosts = [
    {
      id: 1,
      title: "How to Optimize Your Quantity Takeoff Workflow",
      slug: "optimize-quantity-takeoff-workflow",
      category: "Tips & Tricks",
      date: "2023-09-15",
      author: "John Doe",
      excerpt:
        "Learn how to streamline your workflow with these expert tips for Quantity Takeoff.",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...",
    },
    {
      id: 2,
      title: "Top 5 Features of Our Quantity Takeoff Software",
      slug: "top-features-quantity-takeoff-software",
      category: "Product Updates",
      date: "2023-08-25",
      author: "Jane Smith",
      excerpt:
        "Discover the top features that make our software the best choice for construction professionals.",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...",
    },
    {
      id: 3,
      title: "Common Mistakes to Avoid in Construction Takeoff",
      slug: "common-mistakes-construction-takeoff",
      category: "Best Practices",
      date: "2023-07-10",
      author: "Alice Johnson",
      excerpt:
        "Avoid these common mistakes to ensure accurate and efficient takeoffs.",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...",
    },
  ];

  // State for managing search query and active category
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("");

  // Filter blog posts based on search query and active category
  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      activeCategory === "" || post.category.toLowerCase() === activeCategory.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  // Get unique categories for the sidebar
  const categories = Array.from(new Set(blogPosts.map((post) => post.category)));

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog</h1>
        <p className="text-lg text-gray-600">
          Stay updated with the latest tips, tricks, and news about Quantity Takeoff.
        </p>
      </div>

      {/* Search Bar */}
      <div className="max-w-7xl mx-auto mt-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Search for blog posts..."
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

      {/* Blog Layout */}
      <div className="max-w-7xl mx-auto mt-12 grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-8">
        {/* Sidebar Navigation */}
        <div className="hidden lg:block bg-white rounded-lg shadow-sm p-4 space-y-4 sticky top-24">
          <h3 className="text-lg font-medium text-gray-900">Categories</h3>
          <ul className="space-y-2">
            <li>
              <button
                onClick={() => setActiveCategory("")}
                className={`block w-full text-left px-2 py-1 rounded ${
                  activeCategory === "" ? "bg-blue-500 text-white" : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                All Posts
              </button>
            </li>
            {categories.map((category) => (
              <li key={category}>
                <button
                  onClick={() => setActiveCategory(category)}
                  className={`block w-full text-left px-2 py-1 rounded ${
                    activeCategory === category.toLowerCase()
                      ? "bg-blue-500 text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          {filteredPosts.length > 0 ? (
            <div className="space-y-8">
              {filteredPosts.map((post) => (
                <div key={post.id} className="border-b border-gray-200 pb-8 last:border-b-0">
                  <h2 className="text-2xl font-semibold text-gray-900">
                    <a href={`/blog/${post.slug}`} className="hover:text-blue-500">
                      {post.title}
                    </a>
                  </h2>
                  <div className="flex items-center text-sm text-gray-500 mt-2">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>By {post.author}</span>
                  </div>
                  <p className="mt-4 text-gray-600">{post.excerpt}</p>
                  <a
                    href={`/blog/${post.slug}`}
                    className="inline-block mt-4 text-blue-500 hover:text-blue-700"
                  >
                    Read More →
                  </a>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600 text-center">
              No blog posts found for "{searchQuery}".
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog;