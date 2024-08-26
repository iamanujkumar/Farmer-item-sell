import Navbar from '@/Components/Navbar/Navbar';
import { apiClient } from '@/lib/api-client';
import { SIGNIN_ROUTES } from '../../../Constants.js';
import React, { useState } from 'react';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const Navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log('Form Data:', formData);
    const { username, password } = formData;
    try {
      const response = await apiClient.post(SIGNIN_ROUTES, { username, password });
      console.log('Login Response:', response);

      // Redirect to dashboard
      if (response.status === 200) {
        localStorage.setItem('user', JSON.stringify(response));
        Navigate('/'); // Redirect to the dashboard or any other route
      }
      
    } catch (error) {
      console.error('Login Error:', error);
      
    }

  };

  return (
    <>
    <Navbar />
    <div className="relative flex items-center justify-center min-h-screen bg-gray-50 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url("https://plus.unsplash.com/premium_photo-1661962692059-55d5a4319814?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")' }} // Replace with your image path
      />
      
      {/* Backdrop Blur */}
      <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm" />

      {/* Form Container */}
      <div className="relative w-full max-w-md bg-white bg-opacity-80 shadow-lg rounded-lg p-8 z-10">
        <h2 className="text-2xl font-bold text-green-800 mb-6">Sign In</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex items-center border-b border-gray-300 pb-2">
            <FaEnvelope className="text-green-600 mr-3" />
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Username"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <div className="flex items-center border-b border-gray-300 pb-2">
            <FaLock className="text-green-600 mr-3" />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-800 text-white py-2 rounded-md hover:bg-green-700 transition-colors"
          >
            Sign In
          </button>
          <div className="mt-4 text-center">
            <p className="text-gray-600">
              Don’t have an account?{' '}
              <a href="/signup" className="text-green-600 font-medium hover:underline">
                Sign Up
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
    </>
  );
}

export default LoginPage;
