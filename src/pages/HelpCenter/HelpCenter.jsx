import React, { useState } from "react";

const HelpCenter = () => {
  // Sample FAQ data (can be replaced with API data)
  const faqsData = [
    {
      question: "How do I create a new project?",
      answer:
        "To create a new project, navigate to the dashboard and click on the 'New Project' button. Fill in the required details and save your project.",
    },
    {
      question: "Can I export my quantity takeoff data?",
      answer:
        "Yes, you can export your data in various formats such as CSV or PDF. Use the 'Export' option available on the project page.",
    },
    {
      question: "What should I do if I encounter an error?",
      answer:
        "If you encounter an error, please check our troubleshooting guide. If the issue persists, contact our support team for assistance.",
    },
    {
      question: "How do I invite team members to my project?",
      answer:
        "You can invite team members by navigating to the project settings and using the 'Invite Members' feature.",
    },
  ];

  // State for managing FAQs and search
  const [faqs, setFaqs] = useState(faqsData);
  const [searchQuery, setSearchQuery] = useState("");

  // Function to toggle FAQ visibility
  const toggleFAQ = (index) => {
    const updatedFaqs = faqs.map((faq, i) => {
      if (i === index) {
        return { ...faq, isOpen: !faq.isOpen }; // Toggle open/close state
      }
      return faq;
    });
    setFaqs(updatedFaqs);
  };

  // Filter FAQs based on search query
  const filteredFaqs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to the Help Center
        </h1>
        <p className="text-lg text-gray-600">
          Find answers to common questions or contact us for further assistance.
        </p>
      </div>

      {/* Search Bar */}
      <div className="max-w-7xl mx-auto mt-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Search for help articles..."
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

      {/* FAQ Section */}
      <div className="max-w-7xl mx-auto mt-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Frequently Asked Questions
        </h2>
        {filteredFaqs.length > 0 ? (
          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-medium text-gray-900">
                  {faq.question}
                </h3>
                {faq.isOpen && (
                  <p className="mt-2 text-gray-600">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600 text-center">
            No results found for "{searchQuery}".
          </p>
        )}
      </div>

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto mt-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Still Need Help?
        </h2>
        <div className="bg-white p-8 rounded-lg shadow-sm text-center">
          <p className="text-gray-600 mb-4">
            Our support team is here to assist you. Reach out to us via email or
            phone.
          </p>
          <div className="space-y-2">
            <p className="text-gray-800 font-medium">Email: support@qtoff.com</p>
            <p className="text-gray-800 font-medium">Phone: +1 (123) 456-7890</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;