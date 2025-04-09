"use client"
import { Home, FolderOpen, Upload, BarChart2, Settings, User, LogOut, ChevronLeft, ChevronRight } from "lucide-react"

const Sidebar = ({ collapsed, toggleSidebar }) => {
  const menuItems = [
    { icon: Home, label: "Dashboard", path: "/dashboard" },
    { icon: FolderOpen, label: "Projects", path: "/projects" },
    { icon: Upload, label: "Upload Drawings", path: "/upload" },
    { icon: BarChart2, label: "Reports", path: "/reports" },
    { icon: Settings, label: "Settings", path: "/settings" },
  ]

  return (
    <div
      className={`bg-slate-800 text-white transition-all duration-300 ease-in-out h-full flex flex-col ${
        collapsed ? "w-16" : "w-64"
      }`}
    >
      {/* Logo */}
      <div className="flex items-center justify-between p-4 border-b border-slate-700">
        {!collapsed && (
          <div className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            QuantiTake
          </div>
        )}
        <button onClick={toggleSidebar} className="p-1 rounded-md hover:bg-slate-700 transition-colors">
          {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>

      {/* Navigation Items */}
      <div className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-2 px-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.path}
                className="flex items-center p-2 rounded-md hover:bg-slate-700 transition-colors group"
              >
                <item.icon className="h-5 w-5 text-slate-400 group-hover:text-white transition-colors" />
                {!collapsed && <span className="ml-3 transition-opacity duration-200">{item.label}</span>}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* User Profile & Logout */}
      <div className="p-4 border-t border-slate-700">
        <ul className="space-y-2">
          <li>
            <a href="/profile" className="flex items-center p-2 rounded-md hover:bg-slate-700 transition-colors group">
              <User className="h-5 w-5 text-slate-400 group-hover:text-white transition-colors" />
              {!collapsed && <span className="ml-3 transition-opacity duration-200">Profile</span>}
            </a>
          </li>
          <li>
            <a href="/logout" className="flex items-center p-2 rounded-md hover:bg-slate-700 transition-colors group">
              <LogOut className="h-5 w-5 text-slate-400 group-hover:text-white transition-colors" />
              {!collapsed && <span className="ml-3 transition-opacity duration-200">Logout</span>}
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar

