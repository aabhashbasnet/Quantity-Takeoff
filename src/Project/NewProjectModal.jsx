// import React, { useState } from 'react';

// const NewProjectModal = ({ onClose, onCreate }) => {
//   const [formData, setFormData] = useState({
//     name: '',
//     description: '',
//     units: 'imperial',
//     location: ''
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
    
//     // Mock project creation - replace with actual API call later
//     const mockProject = {
//       id: Date.now(),
//       name: formData.name,
//       description: formData.description,
//       units: formData.units,
//       status: 'draft',
//       progress: 0,
//       created_at: new Date().toISOString()
//     };

//     setTimeout(() => {
//       onCreate(mockProject);
//       onClose();
//       setIsSubmitting(false);
//     }, 1000); // Simulate API delay
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
//       <div className="bg-white rounded-lg p-6 w-full max-w-md">
//         <h2 className="text-2xl font-bold mb-4">Create New Project</h2>
        
//         <form onSubmit={handleSubmit}>
//           <div className="space-y-4">
//             <div>
//               <label className="block text-sm font-medium mb-1">Project Name *</label>
//               <input
//                 type="text"
//                 required
//                 className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none"
//                 value={formData.name}
//                 onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                 disabled={isSubmitting}
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium mb-1">Description</label>
//               <textarea
//                 className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none"
//                 rows="3"
//                 value={formData.description}
//                 onChange={(e) => setFormData({ ...formData, description: e.target.value })}
//                 disabled={isSubmitting}
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium mb-1">Measurement Units</label>
//               <select
//                 className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none"
//                 value={formData.units}
//                 onChange={(e) => setFormData({ ...formData, units: e.target.value })}
//                 disabled={isSubmitting}
//               >
//                 <option value="imperial">Imperial (ft/in)</option>
//                 <option value="metric">Metric (m/cm)</option>
//               </select>
//             </div>

//             <div className="flex justify-end space-x-3 mt-6">
//               <button
//                 type="button"
//                 onClick={onClose}
//                 className="px-4 py-2 text-gray-600 hover:bg-gray-50 rounded disabled:opacity-50"
//                 disabled={isSubmitting}
//               >
//                 Cancel
//               </button>
//               <button
//                 type="submit"
//                 className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
//                 disabled={!formData.name || isSubmitting}
//               >
//                 {isSubmitting ? 'Creating...' : 'Create Project'}
//               </button>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default NewProjectModal;

import React from 'react'

const NewProjectModal = () => {
  return (
    <div>
      jhtjttk
    </div>
  )
}

export default NewProjectModal
