"use client"

import { useState } from "react"
import Sidebar from "../Interface/sidebar"
import TopBar from "../Interface/top-bar"
import CanvasArea from "../Interface/canvas-area"
import RightPanel from "../Interface/right-panel"
import BottomPanel from "../Interface/bottom-panel"

function Dashboard() {
  const [currentProject, setCurrentProject] = useState("Commercial Building Project")
  const [selectedElement, setSelectedElement] = useState(null)
  const [takeoffItems, setTakeoffItems] = useState([
    {
      id: 1,
      type: "Wall",
      description: "Exterior Wall",
      quantity: 240,
      unit: "sqft",
      length: 60,
      area: 240,
      cost: 4800,
    },
    {
      id: 2,
      type: "Window",
      description: "Double-Pane Window",
      quantity: 8,
      unit: "each",
      length: null,
      area: null,
      cost: 3200,
    },
    {
      id: 3,
      type: "Floor",
      description: "Tile Flooring",
      quantity: 500,
      unit: "sqft",
      length: null,
      area: 500,
      cost: 7500,
    },
    {
      id: 4,
      type: "Door",
      description: "Interior Door",
      quantity: 12,
      unit: "each",
      length: null,
      area: null,
      cost: 2400,
    },
  ])

  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [rightPanelCollapsed, setRightPanelCollapsed] = useState(false)
  const [bottomPanelCollapsed, setBottomPanelCollapsed] = useState(true)

  const handleElementSelect = (element) => {
    setSelectedElement(element)
    setRightPanelCollapsed(false)
  }

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed)
  }

  const toggleRightPanel = () => {
    setRightPanelCollapsed(!rightPanelCollapsed)
  }

  const toggleBottomPanel = () => {
    setBottomPanelCollapsed(!bottomPanelCollapsed)
  }

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      {/* Sidebar */}
      <Sidebar collapsed={sidebarCollapsed} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Top Bar */}
        <TopBar currentProject={currentProject} toggleBottomPanel={toggleBottomPanel} />

        {/* Main Content Area */}
        <div className="flex flex-1 overflow-hidden">
          {/* Canvas Area */}
          <div
            className={`flex-1 overflow-hidden transition-all duration-300 ${!rightPanelCollapsed ? "mr-64" : "mr-0"}`}
          >
            <CanvasArea onElementSelect={handleElementSelect} />
          </div>

          {/* Right Panel */}
          <RightPanel
            selectedElement={selectedElement}
            collapsed={rightPanelCollapsed}
            togglePanel={toggleRightPanel}
          />
        </div>

        {/* Bottom Panel */}
        <BottomPanel takeoffItems={takeoffItems} collapsed={bottomPanelCollapsed} togglePanel={toggleBottomPanel} />
      </div>
    </div>
  )
}

export default Dashboard

