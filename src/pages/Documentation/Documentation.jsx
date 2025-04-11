import React from 'react'
import ScrollToTop from "../../components/Buttons/ScrollToTop";

const Documentation = () => {
  
  return (
    <section id="documentation" className=" bg-gray-50 text-gray-800 py-16 mt-16">
      <ScrollToTop />
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Documentation</h2>

        {/* Overview */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">Overview</h3>
          <p>
            QuantiTake is a powerful and user-friendly quantity takeoff tool designed for construction professionals to
            measure and estimate project quantities from drawings and blueprints. This documentation helps you get
            started, use its features, and troubleshoot issues.
          </p>
        </div>

        {/* Installation */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">Installation</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Visit our official website and download the installer.</li>
            <li>Run the installer and follow the setup instructions.</li>
            <li>Ensure your system has the required dependencies (Node.js, browser support).</li>
            <li>For advanced users, install via <code className="bg-gray-200 px-1 py-0.5 rounded">npm install quantitake</code>.</li>
          </ul>
        </div>

        {/* Features Guide */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">Using the Tool</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Upload PDF or image blueprints using the drag-and-drop interface.</li>
            <li>Use AI-assisted tools to auto-detect walls, areas, and dimensions.</li>
            <li>Manually draw or edit measurements using the toolbar.</li>
            <li>Track quantities per layer (walls, flooring, windows, etc.).</li>
            <li>Switch between units (metric/imperial) easily from settings.</li>
          </ul>
        </div>

        {/* Exporting */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">Exporting Your Work</h3>
          <p>
            Once you've completed your takeoff, export your results in multiple formats:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Excel (.xlsx) - for quantity summaries</li>
            <li>CSV - lightweight for data processing</li>
            <li>PDF - to generate reports with drawings</li>
            <li>BIM - compatible with other construction software</li>
          </ul>
        </div>

        {/* FAQ */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h3>
          <div className="space-y-4">
            <div>
              <p className="font-semibold">Q: Can I use it on mobile?</p>
              <p>A: It’s best used on desktop or tablet for accurate drawing and annotations.</p>
            </div>
            <div>
              <p className="font-semibold">Q: Does it support multi-user collaboration?</p>
              <p>A: Yes! Teams can work together in real-time with version history.</p>
            </div>
            <div>
              <p className="font-semibold">Q: Can I import data from AutoCAD?</p>
              <p>A: You can import supported PDF exports from AutoCAD for accurate scaling.</p>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Need More Help?</h3>
          <p>
            Reach out to our support team at{" "}
            <a href="mailto:support@quantitake.com" className="text-blue-600 hover:underline">
              support@quantitake.com
            </a>{" "}
            or visit our{" "}
            <a href="/help" className="text-blue-600 hover:underline">
              Help Center
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  )
}

export default Documentation
