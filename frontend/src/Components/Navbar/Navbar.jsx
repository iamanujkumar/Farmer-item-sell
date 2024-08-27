import React, { useEffect, useState } from 'react';
import { FaUser, FaSignInAlt, FaBars, FaTimes, FaHome, FaInfoCircle,FaSignOutAlt } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const user  = localStorage.getItem('user');
  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      setIsLoggedIn(true);
    }
  }, []);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleLogout = () => {
    // Logic for logging out the user
    localStorage.clear();
    setIsLoggedIn(false);
  };

  return (
    <nav className="bg-gradient-to-r from-emerald-400 from-10% via-green-500 via-30% to-emerald-500 to-90% ... text-white flex items-center justify-between p-4 relative">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src="/path/to/logo.png" // Replace with your logo image path
          alt="Logo"
          className="h-8 w-auto"
        />
      </div>

      {/* Menu Button */}
      <div className="md:hidden flex items-center">
        <button
          onClick={toggleMenu}
          className="text-white p-2 rounded-md hover:bg-green-700 transition-colors"
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
      

      {/* Navigation Links */}
      <div
        className={`fixed inset-y-0 left-0 transform ${
          isMenuOpen ? 'translate-x-0  bg-green-100 text-green-800' : '-translate-x-full'
        } md:relative md:translate-x-0 transition-transform duration-300 ease-in-out md:bg-transparent md:flex md:space-x-6 md:items-center md:top-0 md:left-0 md:pt-0 md:space-x-6 md:mt-0 z-50`}
      >
        <div className="md:flex md:items-center md:space-x-6 md:mt-0 md:relative md:flex-row md:justify-center">
          <a href="/" className="block px-4 py-2 text-center hover:bg-green-700 transition-colors md:hover:bg-green-600 rounded-lg">
            <div className="flex items-center space-x-2">
              <FaHome size={20} />
              <span className=" md:inline">Home</span>
            </div>
          </a>
          <a href="/add" className="block px-4 py-2 text-center hover:bg-green-700 transition-colors md:hover:bg-green-600 rounded-lg">
            <div className="flex items-center space-x-2">
              <FaInfoCircle size={20} />
              <span className=" md:inline">About</span>
            </div>
          </a>
          {isLoggedIn ? (
        <a
          href="#"
          onClick={handleLogout}
          className="block bg-white text-green-800 px-4 py-2 rounded-lg flex items-center justify-center space-x-2 hover:bg-gray-200 transition-colors md:bg-transparent md:text-white md:hover:bg-transparent md:border md:border-white"
        >
          <FaSignOutAlt className="text-green-800 md:text-white" />
          <span className="md:inline">Logout</span>
        </a>
      ) : (
        <a
          href="/login"
          className="block bg-white text-green-800 px-4 py-2 rounded-lg flex items-center justify-center space-x-2 hover:bg-gray-200 transition-colors md:bg-transparent md:text-white md:hover:bg-transparent md:border md:border-white"
        >
          <FaSignInAlt className="text-green-800 md:text-white" />
          <span className="md:inline">Login</span>
        </a>
      )}
        </div>
      </div>

      {/* Profile Logo */}
     {
      isLoggedIn ? (
        <div className="hidden md:flex items-center">
        <button className="bg-green-700 p-2 rounded-full hover:bg-green-600 transition-colors">
          <FaUser className="text-white" size={24} />
        </button>
      </div>
      ): (<h1 className='hidden md:flex'></h1>)
     }
    </nav>
  );
};

export default Navbar;
