import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUpload, FaFileAlt, FaMoon, FaSun, FaBell, FaUserCircle } from "react-icons/fa";

const FreeTrial = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "bg-gray-900 text-white min-h-screen" : "bg-gray-100 text-gray-900 min-h-screen"}>
      {/* Sidebar */}
      <div className="flex">
        <aside className="w-64 bg-blue-700 text-white min-h-screen p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Dashboard</h2>
            <button
              className="p-2 rounded-full text-xl"
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? <FaSun className="text-yellow-500" /> : <FaMoon className="text-gray-800" />}
            </button>
          </div>
          <nav>
            <ul className="space-y-4">
              <li><Link to="/" className="block hover:text-gray-200">Home</Link></li>
              <li><Link to="/upload" className="block hover:text-gray-200">Upload</Link></li>
              <li><Link to="/reports" className="block hover:text-gray-200">Reports</Link></li>
              <li><Link to="/settings" className="block hover:text-gray-200">Settings</Link></li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          {/* Hero Section */}
          <div className="mb-8">
            <h1 className="text-3xl font-semibold">Welcome to Your Dashboard</h1>
            <p className="text-lg text-gray-600">Manage your files, view reports, and get instant cost estimations.</p>
          </div>

          {/* Quick Access Section */}
          <div className="grid grid-cols-3 gap-6 mb-8">
            <Link to="/upload" className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition">
              Upload File
            </Link>
            <Link to="/reports" className="bg-green-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition">
              View Reports
            </Link>
            <Link to="/new-project" className="bg-yellow-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-700 transition">
              New Project
            </Link>
          </div>

          {/* Overview Cards */}
          <div className="grid grid-cols-3 gap-6 mb-8">
            <div className="bg-white shadow-md p-6 rounded-lg flex items-center space-x-4">
              <FaUpload className="text-blue-600 text-3xl" />
              <div>
                <h3 className="text-lg font-semibold">Total Uploads</h3>
                <p className="text-gray-600">12</p>
              </div>
            </div>
            <div className="bg-white shadow-md p-6 rounded-lg flex items-center space-x-4">
              <FaFileAlt className="text-green-600 text-3xl" />
              <div>
                <h3 className="text-lg font-semibold">Processed Files</h3>
                <p className="text-gray-600">8</p>
              </div>
            </div>
            <div className="bg-white shadow-md p-6 rounded-lg flex items-center space-x-4">
              <FaFileAlt className="text-red-600 text-3xl" />
              <div>
                <h3 className="text-lg font-semibold">Cost Estimations</h3>
                <p className="text-gray-600">$15,000</p>
              </div>
            </div>
          </div>

          {/* Recent Uploads */}
          <div className="bg-white shadow-md p-6 rounded-lg mb-8">
            <h3 className="text-lg font-semibold">Recent Uploads</h3>
            <ul className="space-y-4 mt-4">
              <li className="flex justify-between">
                <span>FloorPlan_1.pdf</span>
                <span className="text-sm text-gray-600">10 minutes ago</span>
              </li>
              <li className="flex justify-between">
                <span>FloorPlan_2.jpg</span>
                <span className="text-sm text-gray-600">1 hour ago</span>
              </li>
            </ul>
          </div>

          {/* Activity Feed / Notifications */}
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h3 className="text-lg font-semibold">Activity Feed</h3>
            <ul className="space-y-4 mt-4">
              <li className="flex justify-between">
                <span>New upload: FloorPlan_1.pdf</span>
                <span className="text-sm text-gray-600">10 minutes ago</span>
              </li>
              <li className="flex justify-between">
                <span>Cost estimation completed: $15,000</span>
                <span className="text-sm text-gray-600">1 hour ago</span>
              </li>
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
};

export default FreeTrial;
