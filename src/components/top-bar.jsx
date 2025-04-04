"use client"

import { useState } from "react"
import { Undo2, Redo2, ZoomIn, ZoomOut, Save, Download, Ruler, ChevronDown } from "lucide-react"

const TopBar = ({
  projectName = "Untitled Project",
  onUndo,
  onRedo,
  onZoomIn,
  onZoomOut,
  onSave,
  onExport,
  scale,
  onScaleChange,
}) => {
  const [exportOpen, setExportOpen] = useState(false)
  const [scaleOpen, setScaleOpen] = useState(false)

  const exportOptions = ["PDF", "CSV", "PNG", "DXF"]
  const scaleOptions = [
    { label: "1:100", value: 100 },
    { label: "1:50", value: 50 },
    { label: "1:25", value: 25 },
    { label: "1:20", value: 20 },
    { label: "1:10", value: 10 },
    { label: "Custom", value: "custom" },
  ]

  return (
    <div className="h-14 border-b border-gray-200 bg-white flex items-center px-4 justify-between">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold text-gray-800 mr-8">{projectName}</h1>

        <div className="flex items-center space-x-1">
          <button onClick={onUndo} className="p-1.5 rounded-md hover:bg-gray-100 text-gray-600" title="Undo">
            <Undo2 size={18} />
          </button>
          <button onClick={onRedo} className="p-1.5 rounded-md hover:bg-gray-100 text-gray-600" title="Redo">
            <Redo2 size={18} />
          </button>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <div className="flex items-center space-x-1">
          <button onClick={onZoomOut} className="p-1.5 rounded-md hover:bg-gray-100 text-gray-600" title="Zoom Out">
            <ZoomOut size={18} />
          </button>
          <span className="text-sm text-gray-600 w-12 text-center">100%</span>
          <button onClick={onZoomIn} className="p-1.5 rounded-md hover:bg-gray-100 text-gray-600" title="Zoom In">
            <ZoomIn size={18} />
          </button>
        </div>

        <div className="h-6 border-r border-gray-300 mx-1"></div>

        <button
          onClick={onSave}
          className="p-1.5 rounded-md hover:bg-gray-100 text-gray-600 flex items-center"
          title="Save Project"
        >
          <Save size={18} />
          <span className="ml-1 text-sm">Save</span>
        </button>

        <div className="relative">
          <button
            onClick={() => setExportOpen(!exportOpen)}
            className="p-1.5 rounded-md hover:bg-gray-100 text-gray-600 flex items-center"
          >
            <Download size={18} />
            <span className="ml-1 text-sm">Export</span>
            <ChevronDown size={14} className="ml-1" />
          </button>

          {exportOpen && (
            <div className="absolute right-0 mt-1 w-36 bg-white border border-gray-200 rounded-md shadow-lg z-10">
              {exportOptions.map((option) => (
                <button
                  key={option}
                  className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => {
                    onExport(option)
                    setExportOpen(false)
                  }}
                >
                  Export as {option}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="h-6 border-r border-gray-300 mx-1"></div>

        <div className="relative">
          <button
            onClick={() => setScaleOpen(!scaleOpen)}
            className="p-1.5 rounded-md hover:bg-gray-100 text-gray-600 flex items-center"
          >
            <Ruler size={18} />
            <span className="ml-1 text-sm">Scale: {scale ? `1:${scale}` : "Not Set"}</span>
            <ChevronDown size={14} className="ml-1" />
          </button>

          {scaleOpen && (
            <div className="absolute right-0 mt-1 w-36 bg-white border border-gray-200 rounded-md shadow-lg z-10">
              {scaleOptions.map((option) => (
                <button
                  key={option.value}
                  className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => {
                    onScaleChange(option.value)
                    setScaleOpen(false)
                  }}
                >
                  {option.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default TopBar

