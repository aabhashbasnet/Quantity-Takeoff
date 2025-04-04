"use client"

import { useRef, useEffect, useState } from "react"
import { MousePointer, Ruler, Square, Circle, Pencil, Type, Move, Layers, Trash2 } from "lucide-react"

// Note: In a real implementation, you would use React Konva for the canvas
// This is a simplified version for demonstration purposes

const CanvasArea = ({ onElementSelect }) => {
  const canvasRef = useRef(null)
  const [activeTool, setActiveTool] = useState("select")
  const [showGrid, setShowGrid] = useState(true)

  const tools = [
    { id: "select", icon: MousePointer, label: "Select" },
    { id: "measure", icon: Ruler, label: "Measure" },
    { id: "rectangle", icon: Square, label: "Rectangle" },
    { id: "circle", icon: Circle, label: "Circle" },
    { id: "draw", icon: Pencil, label: "Draw" },
    { id: "text", icon: Type, label: "Text" },
    { id: "pan", icon: Move, label: "Pan" },
  ]

  // Simulate selecting an element
  const handleCanvasClick = (e) => {
    // In a real app, this would detect if an element was clicked
    // For demo purposes, we'll just create a mock element
    if (activeTool === "select") {
      const mockElement = {
        id: Math.floor(Math.random() * 1000),
        type: "Wall",
        length: 120,
        area: 480,
        material: "Concrete",
        color: "#3B82F6",
        notes: "",
      }
      onElementSelect(mockElement)
    }
  }

  // Draw a simple grid on the canvas
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    const width = canvas.width
    const height = canvas.height

    // Clear canvas
    ctx.clearRect(0, 0, width, height)

    // Draw background
    ctx.fillStyle = "#f8f9fa"
    ctx.fillRect(0, 0, width, height)

    // Draw grid
    if (showGrid) {
      ctx.strokeStyle = "#e5e7eb"
      ctx.lineWidth = 1

      const gridSize = 20

      // Draw vertical lines
      for (let x = 0; x <= width; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, height)
        ctx.stroke()
      }

      // Draw horizontal lines
      for (let y = 0; y <= height; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(width, y)
        ctx.stroke()
      }
    }

    // Draw a sample floor plan (just for visualization)
    ctx.strokeStyle = "#3B82F6"
    ctx.lineWidth = 2

    // Outer walls
    ctx.beginPath()
    ctx.rect(100, 100, 600, 400)
    ctx.stroke()

    // Inner walls
    ctx.beginPath()
    ctx.moveTo(350, 100)
    ctx.lineTo(350, 300)
    ctx.stroke()

    ctx.beginPath()
    ctx.moveTo(350, 300)
    ctx.lineTo(700, 300)
    ctx.stroke()

    ctx.beginPath()
    ctx.moveTo(500, 300)
    ctx.lineTo(500, 500)
    ctx.stroke()

    // Windows
    ctx.strokeStyle = "#60A5FA"
    ctx.lineWidth = 1

    // Window 1
    ctx.beginPath()
    ctx.rect(150, 100, 80, 5)
    ctx.stroke()

    // Window 2
    ctx.beginPath()
    ctx.rect(500, 100, 80, 5)
    ctx.stroke()

    // Window 3
    ctx.beginPath()
    ctx.rect(100, 250, 5, 80)
    ctx.stroke()

    // Door
    ctx.strokeStyle = "#9333EA"
    ctx.beginPath()
    ctx.arc(350, 150, 40, 0, Math.PI, true)
    ctx.stroke()
  }, [showGrid])

  return (
    <div className="h-full flex flex-col">
      {/* Toolbar */}
      <div className="bg-white border-b border-gray-200 p-2 flex items-center">
        {tools.map((tool) => (
          <button
            key={tool.id}
            className={`p-2 rounded-md mr-1 ${
              activeTool === tool.id ? "bg-blue-100 text-blue-600" : "text-gray-600 hover:bg-gray-100"
            }`}
            title={tool.label}
            onClick={() => setActiveTool(tool.id)}
          >
            <tool.icon className="h-5 w-5" />
          </button>
        ))}

        <div className="h-6 border-r border-gray-300 mx-2"></div>

        <button
          className={`p-2 rounded-md mr-1 ${
            showGrid ? "bg-blue-100 text-blue-600" : "text-gray-600 hover:bg-gray-100"
          }`}
          title="Toggle Grid"
          onClick={() => setShowGrid(!showGrid)}
        >
          <Layers className="h-5 w-5" />
        </button>

        <button className="p-2 rounded-md mr-1 text-gray-600 hover:bg-gray-100" title="Clear Canvas">
          <Trash2 className="h-5 w-5" />
        </button>
      </div>

      {/* Canvas */}
      <div className="flex-1 overflow-auto relative bg-gray-50">
        <canvas ref={canvasRef} width={1000} height={800} onClick={handleCanvasClick} className="cursor-crosshair" />

        {/* Floating tooltip - would appear when hovering over elements */}
        <div className="absolute hidden bg-white shadow-lg rounded-md p-2 border border-gray-200 text-sm">
          <div className="font-medium">Wall Section</div>
          <div className="text-gray-600">Length: 120 ft</div>
          <div className="text-gray-600">Area: 480 sq ft</div>
        </div>
      </div>
    </div>
  )
}

export default CanvasArea

