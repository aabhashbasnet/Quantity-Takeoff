// "use client"
// import { Home, Folder, Upload, BarChart2, Settings, ChevronLeft, ChevronRight } from "lucide-react"

// const Sidebar = ({ collapsed, toggleSidebar, activeNavItem, onNavigate }) => {
//   const menuItems = [
//     { id: "dashboard", icon: Home, label: "Dashboard", path: "/dashboard" },
//     { id: "projects", icon: Folder, label: "Projects", path: "/projects" },
//     { id: "upload", icon: Upload, label: "Upload Drawings", path: "/upload" },
//     { id: "reports", icon: BarChart2, label: "Reports", path: "/reports" },
//     { id: "settings", icon: Settings, label: "Settings", path: "/settings" },
//   ]

//   return (
//     <div
//       className={`flex flex-col h-screen bg-slate-800 text-white shadow-lg ${
//         collapsed ? "w-16" : "w-64"
//       } transition-all duration-300 ease-in-out`}
//     >
//       <div className="p-4 flex items-center justify-between">
//         <span
//           className={`text-2xl font-bold ${collapsed ? "hidden" : "block"} transition-all duration-300 ease-in-out`}
//         >
//           Quantity Takeoff
//         </span>
//         <button onClick={toggleSidebar} className="p-2 hover:bg-slate-700 rounded">
//           {collapsed ? <ChevronRight /> : <ChevronLeft />}
//         </button>
//       </div>

//       <nav className="flex-grow p-4">
//         <ul>
//           {menuItems.map((item) => (
//             <li key={item.id} className="mb-2">
//               <a
//                 href="#"
//                 onClick={(e) => {
//                   e.preventDefault()
//                   onNavigate(item.id)
//                 }}
//                 className={`flex items-center p-2 rounded-md transition-colors group ${
//                   activeNavItem === item.id
//                     ? "bg-slate-700 text-white"
//                     : "hover:bg-slate-700 text-slate-300 hover:text-white"
//                 }`}
//               >
//                 <item.icon className="mr-2 h-5 w-5" />
//                 <span className={`${collapsed ? "hidden" : "block"} transition-all duration-300 ease-in-out`}>
//                   {item.label}
//                 </span>
//               </a>
//             </li>
//           ))}
//         </ul>
//       </nav>

//       <div className="p-4 text-center text-slate-400">
//         <p className="text-sm">© 2023 My App</p>
//       </div>
//     </div>
//   )
// }

// export default Sidebar


"use client"
import {
  Home,
  Folder,
  Upload,
  BarChart2,
  Settings,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

const Sidebar = ({ collapsed, toggleSidebar, activeNavItem, onNavigate }) => {
  const menuItems = [
    { id: "dashboard", icon: Home, label: "Dashboard", path: "/dashboard" },
    { id: "projects", icon: Folder, label: "Projects", path: "/projects" },
    { id: "upload", icon: Upload, label: "Upload Drawings", path: "/upload" },
    { id: "reports", icon: BarChart2, label: "Reports", path: "/reports" },
    { id: "settings", icon: Settings, label: "Settings", path: "/settings" },
  ]

  return (
    <div
      className={`flex flex-col h-screen bg-slate-800 text-white shadow-lg ${
        collapsed ? "w-16" : "w-64"
      } transition-all duration-300 ease-in-out`}
    >
      {/* Header */}
      <div className={`p-4 flex ${collapsed ? "justify-center" : "justify-between"} items-center`}>
        {!collapsed && (
          <span className="text-2xl font-bold transition-all duration-300 ease-in-out">
            Quantity Takeoff
          </span>
        )}
        <button
          onClick={toggleSidebar}
          className="p-2 hover:bg-slate-700 rounded"
        >
          {collapsed ? <ChevronRight /> : <ChevronLeft />}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-grow px-2">
        <ul>
          {menuItems.map((item) => (
            <li key={item.id} className="mb-2">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  onNavigate(item.id)
                }}
                className={`flex items-center space-x-3 p-2 rounded-md transition-all group ${
                  activeNavItem === item.id
                    ? "bg-slate-700 text-white"
                    : "hover:bg-slate-700 text-slate-300 hover:text-white"
                }`}
              >
                <div className="flex justify-center items-center w-6">
                  <item.icon className="h-5 w-5" />
                </div>
                {!collapsed && (
                  <span className="whitespace-nowrap transition-all duration-300">
                    {item.label}
                  </span>
                )}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer */}
      <div className="p-4 text-center text-slate-400">
        {!collapsed && <p className="text-sm">© 2023 My App</p>}
      </div>
    </div>
  )
}

export default Sidebar
