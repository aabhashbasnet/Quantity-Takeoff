import React, { useEffect } from 'react'; // Import useEffect

const Blog = () => {
  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Sample blog posts data
  const blogPosts = [
    {
      id: 1,
      title: 'Mastering Quantity Takeoff: Tips and Tricks',
      date: 'October 15, 2023',
      excerpt:
        'Learn how to streamline your quantity takeoff process with these expert tips and tricks...',
      image: 'https://via.placeholder.com/800x400',
      link: '/blog/mastering-quantity-takeoff',
    },
    {
      id: 2,
      title: 'The Future of Construction Estimation',
      date: 'October 10, 2023',
      excerpt:
        'Discover how technology is revolutionizing construction estimation and what it means for your business...',
      image: 'https://via.placeholder.com/800x400',
      link: '/blog/future-of-construction-estimation',
    },
    {
      id: 3,
      title: 'Why Accuracy Matters in Quantity Takeoff',
      date: 'October 5, 2023',
      excerpt:
        'Accuracy in quantity takeoff can make or break your project. Here’s why it’s crucial...',
      image: 'https://via.placeholder.com/800x400',
      link: '/blog/accuracy-in-quantity-takeoff',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 pt-24 pb-12 py-20 mt-16">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          Welcome to Our Blog
        </h1>
        <p className="text-lg sm:text-xl text-gray-600">
          Stay updated with the latest insights, tips, and trends in quantity
          takeoff and construction estimation.
        </p>
      </div>

      {/* Blog Posts Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              {/* Blog Post Image */}
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />

              {/* Blog Post Content */}
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-sm text-gray-500 mb-4">{post.date}</p>
                <p className="text-gray-700 mb-6 line-clamp-3">{post.excerpt}</p>
                <a
                  href={post.link}
                  className="inline-block text-blue-600 hover:text-blue-800 font-medium transition duration-300"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination (Optional) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 flex justify-center">
        <nav className="inline-flex space-x-2">
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition duration-300">
            Previous
          </button>
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition duration-300">
            Next
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Blog;