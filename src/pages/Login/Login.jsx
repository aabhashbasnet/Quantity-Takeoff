import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'animate.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import WavyBackground from '../../components/WavyBackground';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Simulated login logic (replace with real API call if needed)
    console.log('Logging in with:', email, password);

    // ✅ Show success toast
    toast.success("Login successful! Redirecting to dashboard...", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: true,
      closeButton: false,
      className: "toast-success",
    });

    // ✅ Redirect to dashboard after a short delay
    setTimeout(() => {
      navigate('/get-started');
    }, 1600); // Adjusted to match toast duration
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleResetPassword = (e) => {
    e.preventDefault();

    // Simulate sending a reset password link
    console.log('Reset password request sent for email:', email);

    // Close the modal
    closeModal();

    // Show success toast
    toast.success("Password reset link sent successfully!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeButton: false,
      className: "toast-success",
    });
  };

  return (
    <section className="min-h-screen bg-gray-100 flex items-center justify-center py-12">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg animate__animated animate__fadeInUp relative z-10">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Sign In</h2>
        <form onSubmit={handleLogin} className="space-y-6">
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
          </div>

          {/* Remember Me */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <a href="#" onClick={openModal} className="font-medium text-blue-600 hover:text-blue-500">
                Forgot your password?
              </a>
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition-all transform hover:scale-105"
            >
              Sign In
            </button>
          </div>
        </form>

        {/* Sign Up Link */}
        <p className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <Link to="/signup" className="font-medium text-blue-600 hover:text-blue-500">
            Sign up
          </Link>
        </p>

        {/* ✅ Toast Container */}
        <ToastContainer position="top-right" autoClose={2000} hideProgressBar={true} />
      </div>

      {/* Modal for Forgot Password */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Forgot Password</h3>
            <p className="text-gray-600 mb-6">
              Enter your email address and we'll send you instructions to reset your password.
            </p>
            <form onSubmit={handleResetPassword}>
              <div>
                <label htmlFor="forgot-email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  id="forgot-email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
              </div>
              <div className="mt-6 flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-all"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all"
                >
                  Send Reset Link
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <WavyBackground />
    </section>
  );
};

export default Login;