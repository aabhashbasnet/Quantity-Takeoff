"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const RightPanel = ({ selectedElement, collapsed, togglePanel }) => {
  const [activeTab, setActiveTab] = useState("info")

  // If no element is selected and panel is not collapsed, show empty state
  const showEmptyState = !selectedElement && !collapsed

  // If panel is collapsed, show only the toggle button
  if (collapsed) {
    return (
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
        <button onClick={togglePanel} className="bg-white p-1 rounded-l-md shadow-md border border-gray-200 border-r-0">
          <ChevronLeft className="h-5 w-5 text-gray-600" />
        </button>
      </div>
    )
  }

  return (
    <div className="w-64 bg-white border-l border-gray-200 h-full flex flex-col shadow-md absolute right-0 top-0 transition-all duration-300">
      {/* Header */}
      <div className="flex items-center justify-between p-3 border-b border-gray-200">
        <h2 className="font-medium text-gray-800">{selectedElement ? "Element Details" : "Properties"}</h2>
        <div className="flex items-center">
          <button onClick={togglePanel} className="p-1 rounded-md hover:bg-gray-100 transition-colors">
            <ChevronRight className="h-5 w-5 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Tabs */}
      {selectedElement && (
        <div className="flex border-b border-gray-200">
          <button
            className={`flex-1 py-2 text-sm font-medium ${
              activeTab === "info" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600"
            }`}
            onClick={() => setActiveTab("info")}
          >
            Info
          </button>
          <button
            className={`flex-1 py-2 text-sm font-medium ${
              activeTab === "material" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600"
            }`}
            onClick={() => setActiveTab("material")}
          >
            Material
          </button>
          <button
            className={`flex-1 py-2 text-sm font-medium ${
              activeTab === "notes" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600"
            }`}
            onClick={() => setActiveTab("notes")}
          >
            Notes
          </button>
        </div>
      )}

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-4">
        {showEmptyState ? (
          <div className="flex flex-col items-center justify-center h-full text-center text-gray-500">
            <div className="mb-2">
              <svg className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
              </svg>
            </div>
            <p className="text-sm">Select an element on the canvas to view and edit its properties</p>
          </div>
        ) : selectedElement && activeTab === "info" ? (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
              <div className="bg-gray-50 p-2 rounded-md text-sm">{selectedElement.type}</div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Length</label>
              <div className="flex">
                <input
                  type="number"
                  value={selectedElement.length}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
                <span className="inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                  ft
                </span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Area</label>
              <div className="flex">
                <input
                  type="number"
                  value={selectedElement.area}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
                <span className="inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                  sq ft
                </span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Color</label>
              <div className="flex items-center">
                <input
                  type="color"
                  value={selectedElement.color}
                  className="h-8 w-8 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
                <span className="ml-2 text-sm text-gray-600">{selectedElement.color}</span>
              </div>
            </div>
          </div>
        ) : selectedElement && activeTab === "material" ? (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Material Type</label>
              <select className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm">
                <option value="concrete">Concrete</option>
                <option value="wood">Wood</option>
                <option value="steel">Steel</option>
                <option value="glass">Glass</option>
                <option value="drywall">Drywall</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Cost per Unit</label>
              <div className="flex">
                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                  $
                </span>
                <input
                  type="number"
                  value="20"
                  className="block w-full rounded-r-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Total Cost</label>
              <div className="bg-gray-50 p-2 rounded-md text-sm font-medium">$9,600.00</div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Supplier</label>
              <select className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm">
                <option value="supplier1">ABC Suppliers</option>
                <option value="supplier2">XYZ Materials</option>
                <option value="supplier3">123 Building Co.</option>
              </select>
            </div>
          </div>
        ) : selectedElement && activeTab === "notes" ? (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Notes</label>
              <textarea
                rows={6}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                placeholder="Add notes about this element..."
                value={selectedElement.notes}
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Tags</label>
              <input
                type="text"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                placeholder="Add tags separated by commas..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Last Modified</label>
              <div className="bg-gray-50 p-2 rounded-md text-sm">Today at 2:30 PM</div>
            </div>
          </div>
        ) : null}
      </div>

      {/* Footer */}
      {selectedElement && (
        <div className="p-3 border-t border-gray-200">
          <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors text-sm font-medium">
            Apply Changes
          </button>
        </div>
      )}
    </div>
  )
}

export default RightPanel

