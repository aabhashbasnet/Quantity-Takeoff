"use client"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

export default function Blog() {
  const [posts, setPosts] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  // Fetch blog posts (mock API call)
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Simulate an API call with mock data
        const mockData = {
          posts: [
            {
              id: 1,
              title: "How to Optimize Your Quantity Takeoff Process",
              excerpt:
                "Learn the best practices for streamlining your takeoff process and improving accuracy...",
              date: "2023-10-15",
              author: "John Doe",
              slug: "optimize-quantity-takeoff-process",
            },
            {
              id: 2,
              title: "Top 5 Tools for Construction Estimators",
              excerpt:
                "Discover the top tools that every construction estimator should have in their toolkit...",
              date: "2023-10-10",
              author: "Jane Smith",
              slug: "top-tools-for-construction-estimators",
            },
            {
              id: 3,
              title: "The Future of Digital Takeoff Software",
              excerpt:
                "Explore how digital takeoff software is revolutionizing the construction industry...",
              date: "2023-10-05",
              author: "Alex Johnson",
              slug: "future-of-digital-takeoff-software",
            },
            {
              id: 4,
              title: "Why Collaboration is Key in Construction Projects",
              excerpt:
                "Understand the importance of collaboration and how it impacts project success...",
              date: "2023-09-30",
              author: "Emily Clark",
              slug: "collaboration-in-construction-projects",
            },
          ],
          totalPages: 2, // Simulated total pages
        }

        setPosts(mockData.posts)
        setTotalPages(mockData.totalPages)
      } catch (error) {
        console.error("Error fetching blog posts:", error)
      }
    }

    fetchPosts()
  }, [currentPage])

  // Handle pagination
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Insights and Resources for Quantity Takeoff Professionals
          </h1>
          <p className="mt-4 text-lg">
            Stay updated with the latest trends, tips, and tools to streamline your takeoff process.
          </p>
        </div>
      </div>

      {/* Blog Posts Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800 hover:text-blue-600 transition-colors">
                  <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="mt-2 text-gray-600">{post.excerpt}</p>
                <div className="mt-4 flex items-center text-sm text-gray-500">
                  <span>{post.date}</span>
                  <span className="mx-2">·</span>
                  <span>By {post.author}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-12 flex justify-center space-x-4">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              currentPage === 1
                ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
          >
            Previous
          </button>
          <span className="text-gray-700">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              currentPage === totalPages
                ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
}