import { ChevronUp, ChevronDown, Download, Trash2, Plus } from "lucide-react"

const BottomPanel = ({ takeoffItems, collapsed, togglePanel }) => {
  const totalCost = takeoffItems.reduce((sum, item) => sum + item.cost, 0)

  return (
    <div
      className={`border-t border-gray-200 bg-white transition-all duration-300 ease-in-out ${
        collapsed ? "h-16" : "h-[calc(100vh-200px)]"
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200">
        <div className="flex items-center">
          <h3 className="font-medium text-gray-800">Takeoff Summary</h3>
          <span className="ml-2 bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
            {takeoffItems.length} items
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <button className="p-1 rounded-md hover:bg-gray-100 transition-colors" aria-label="Download">
            <Download className="h-4 w-4 text-gray-600" />
          </button>
          <button className="p-1 rounded-md hover:bg-gray-100 transition-colors" aria-label="Add Item">
            <Plus className="h-4 w-4 text-gray-600" />
          </button>
          <button
            onClick={togglePanel}
            className="p-1 rounded-md hover:bg-gray-100 transition-colors"
            aria-label={collapsed ? "Expand Panel" : "Collapse Panel"}
          >
            {collapsed ? (
              <ChevronUp className="h-4 w-4 text-gray-600" />
            ) : (
              <ChevronDown className="h-4 w-4 text-gray-600" />
            )}
          </button>
        </div>
      </div>

      {/* Table */}
      {!collapsed && (
        <div className="overflow-auto h-[calc(100%-48px)]"> {/* Adjust the height here */}
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                {['Type', 'Description', 'Quantity', 'Unit', 'Length/Area', 'Cost'].map((header, index) => (
                  <th
                    key={index}
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {header}
                  </th>
                ))}
                <th scope="col" className="relative px-6 py-3">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {takeoffItems.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.type}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.description}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.quantity}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.unit}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {item.area ? `${item.area} sq ${item.unit}` : item.length ? `${item.length} ${item.unit}` : "-"}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${item.cost.toLocaleString()}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-red-600 hover:text-red-900" aria-label="Delete Item">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))}

              {/* Total Row */}
              <tr className="bg-gray-50">
                <td colSpan={5} className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-right">
                  Total
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">
                  ${totalCost.toLocaleString()}
                </td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

export default BottomPanel
