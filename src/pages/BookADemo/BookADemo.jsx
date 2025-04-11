// import React, { useState, useEffect } from 'react';
// import zoom from '../../assets/zoom.jpg';

// const BookADemo = () => {
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     company: '',
//     preferredDate: '',
//     message: '',
//   });
  
//   const [isLoading, setIsLoading] = useState(false);
//   const [isSuccess, setIsSuccess] = useState(false);
//   const [isError, setIsError] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setIsError(false);

//     try {
//       // Simulate API call
//       await new Promise(resolve => setTimeout(resolve, 1500));
//       setIsSuccess(true);
//       setFormData({
//         name: '',
//         email: '',
//         company: '',
//         preferredDate: '',
//         message: '',
//       });
//     } catch (error) {
//       console.error('Submission failed:', error);
//       setIsError(true);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <section className="bg-gradient-to-br from-indigo-50 via-white to-indigo-50 py-16 md:py-24">
//       <div className="container mx-auto px-6 py-16 md:py-24">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//           {/* Left Column - Visual */}
//           <div className="hidden md:block ml-15">
//             <img
//               src={zoom}
//               alt="Team collaboration"
//               className="rounded-xl shadow-2xl border-8 border-white"
//             />
//             <div className="mt-6 grid grid-cols-3 gap-4">
//               <div className="bg-white p-4 rounded-lg shadow-md text-center">
//                 <h3 className="text-2xl font-bold text-indigo-600">500+</h3>
//                 <p className="text-gray-600">Happy Clients</p>
//               </div>
//               <div className="bg-white p-4 rounded-lg shadow-md text-center">
//                 <h3 className="text-2xl font-bold text-indigo-600">24/7</h3>
//                 <p className="text-gray-600">Support</p>
//               </div>
//               <div className="bg-white p-4 rounded-lg shadow-md text-center">
//                 <h3 className="text-2xl font-bold text-indigo-600">15min</h3>
//                 <p className="text-gray-600">Quick Setup</p>
//               </div>
//             </div>
//           </div>

//           {/* Right Column - Form */}
//           <div className="bg-white bg-opacity-90 backdrop-blur-md rounded-2xl p-8 md:p-10 shadow-xl">
//             <h2 className="text-3xl md:text-4xl font-extrabold text-indigo-800 mb-6 text-center">
//               Book Your Personalized Demo
//             </h2>

//             {isSuccess ? (
//               <div className="text-center py-8">
//                 <svg className="mx-auto h-16 w-16 text-green-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                 </svg>
//                 <p className="text-xl text-gray-700">Demo booked successfully!</p>
//                 <p className="text-indigo-600 mt-2">Check your email for confirmation</p>
//               </div>
//             ) : isError ? (
//               <div className="text-center py-8 text-red-600">
//                 <svg className="mx-auto h-16 w-16 text-red-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//                 <p className="text-xl">Something went wrong, please try again.</p>
//               </div>
//             ) : (
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div>
//                     <label className="block text-lg font-medium text-gray-700 mb-2">
//                       Full Name <span className="text-red-500">*</span>
//                     </label>
//                     <input
//                       type="text"
//                       name="name"
//                       value={formData.name}
//                       onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                       required
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
//                       placeholder="John Doe"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-lg font-medium text-gray-700 mb-2">
//                       Email <span className="text-red-500">*</span>
//                     </label>
//                     <input
//                       type="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                       required
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
//                       placeholder="john.doe@example.com"
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="block text-lg font-medium text-gray-700 mb-2">
//                     Company
//                   </label>
//                   <input
//                     type="text"
//                     name="company"
//                     value={formData.company}
//                     onChange={(e) => setFormData({ ...formData, company: e.target.value })}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
//                     placeholder="SSN Corporation"
//                   />
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div>
//                     <label className="block text-lg font-medium text-gray-700 mb-2">
//                       Preferred Date <span className="text-red-500">*</span>
//                     </label>
//                     <input
//                       type="date"
//                       name="preferredDate"
//                       value={formData.preferredDate}
//                       onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
//                       required
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-lg font-medium text-gray-700 mb-2">
//                       Time Zone
//                     </label>
//                     <select
//                       name="timezone"
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
//                     >
//                       <option value="utc-5">UTC-5 (Eastern Time)</option>
//                       <option value="utc-6">UTC-6 (Central Time)</option>
//                       <option value="utc-7">UTC-7 (Mountain Time)</option>
//                       <option value="utc-8">UTC-8 (Pacific Time)</option>
//                     </select>
//                   </div>
//                 </div>

//                 <div>
//                   <label className="block text-lg font-medium text-gray-700 mb-2">
//                     Additional Requirements
//                   </label>
//                   <textarea
//                     name="message"
//                     value={formData.message}
//                     onChange={(e) => setFormData({ ...formData, message: e.target.value })}
//                     rows="4"
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
//                     placeholder="Tell us about your needs..."
//                   />
//                 </div>

//                 <button
//                   type="submit"
//                   disabled={isLoading}
//                   className={`w-full bg-gradient-to-r from-indigo-600 to-purple-600 
//                     text-white font-bold py-4 px-6 rounded-lg transition-all 
//                     ${isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:from-indigo-700 hover:to-purple-700'}`}
//                 >
//                   {isLoading ? (
//                     <svg className="animate-spin h-5 w-5 mx-auto" viewBox="0 0 24 24">
//                       <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                       <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                     </svg>
//                   ) : (
//                     'Schedule My Demo'
//                   )}
//                 </button>

//                 <p className="text-center text-gray-500 text-sm">
//                   By clicking "Schedule My Demo" you agree to our <a href="#" className="text-indigo-600 hover:underline">Terms</a>
//                 </p>
//               </form>
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BookADemo;




import React, { useState,useEffect } from 'react';
import zoomImage from '../../assets/zoom.jpg';

const BookADemo = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    preferredDate: '',
    message: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));  // Mock delay
      setIsSuccess(true);  // Success!
      setFormData({
        name: '',
        email: '',
        company: '',
        preferredDate: '',
        message: '',
      });
    } catch (error) {
      console.error('Submission failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="bg-gradient-to-br from-indigo-50 via-white to-indigo-50 py-16 md:py-24">
      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Visual */}
          <div className="hidden md:block ml-15">
            <img
              src={zoomImage}
              alt="Team collaboration"
              className="rounded-xl shadow-2xl border-8 border-white"
            />
            <div className="mt-6 grid grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <h3 className="text-2xl font-bold text-indigo-600">500+</h3>
                <p className="text-gray-600">Happy Clients</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <h3 className="text-2xl font-bold text-indigo-600">24/7</h3>
                <p className="text-gray-600">Support</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <h3 className="text-2xl font-bold text-indigo-600">15min</h3>
                <p className="text-gray-600">Quick Setup</p>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-white bg-opacity-90 backdrop-blur-md rounded-2xl p-8 md:p-10 shadow-xl">
            <h2 className="text-3xl md:text-4xl font-extrabold text-indigo-800 mb-6 text-center">
              Book Your Personalized Demo
            </h2>

            {isSuccess ? (
              <div className="text-center py-8">
                <svg className="mx-auto h-16 w-16 text-green-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-xl text-gray-700">Demo booked successfully!</p>
                <p className="text-indigo-600 mt-2">Check your email for confirmation.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-lg font-medium text-gray-700 mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-lg font-medium text-gray-700 mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="john.doe@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-lg font-medium text-gray-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="SSN Corporation"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-lg font-medium text-gray-700 mb-2">
                      Preferred Date <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-lg font-medium text-gray-700 mb-2">
                      Time Zone
                    </label>
                    <select
                      name="timezone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    >
                      <option value="utc-5">UTC-5 (Eastern Time)</option>
                      <option value="utc-6">UTC-6 (Central Time)</option>
                      <option value="utc-7">UTC-7 (Mountain Time)</option>
                      <option value="utc-8">UTC-8 (Pacific Time)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-lg font-medium text-gray-700 mb-2">
                    Additional Requirements
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="Tell us about your needs..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full bg-gradient-to-r from-indigo-600 to-purple-600 
                    text-white font-bold py-4 px-6 rounded-lg transition-all 
                    ${isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:from-indigo-700 hover:to-purple-700'}`}
                >
                  {isLoading ? (
                    <svg className="animate-spin h-5 w-5 mx-auto" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.974 7.974 0 0012 20a7.974 7.974 0 006-2.709V12H6v5.291z"></path>
                    </svg>
                  ) : (
                    'Book Your Demo'
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookADemo;
