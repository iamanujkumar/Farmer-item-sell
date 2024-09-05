import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from "../../contexts/AppContext";
import SignOutButton from "../SignOutButton";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isLoggedIn } = useAppContext();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-green-500 via-green-600 to-green-700 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Brand Name */}
        <div className="text-white text-2xl font-bold">
          Brand
        </div>

        {/* Search Bar */}
        <div className="flex flex-grow max-w-md mx-4">
          <input
            type="text"
            className="w-full p-2 rounded-l-md focus:outline-none"
            placeholder="Search..."
          />
          <button className="bg-white text-green-200 p-2 rounded-r-md hover:bg-green-200 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 18a8 8 0 100-16 8 8 0 000 16zm21-6h2M21 11h2M15 8.5A3.5 3.5 0 0118.5 5 3.5 3.5 0 0122 8.5 3.5 3.5 0 0118.5 12A3.5 3.5 0 0115 8.5z" />
            </svg>
          </button>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-4 items-center">
          <li className="text-white hover:text-green-200 cursor-pointer"><Link to="/">Home</Link></li>
          <li className="text-white hover:text-green-200 cursor-pointer"><Link to="/aboutus">About Us</Link></li>
          <li className="text-white hover:text-green-200 cursor-pointer"><Link to="/products">Products</Link></li>
          <li className="text-white hover:text-green-200 cursor-pointer"><Link to="/mandibhavs">Mandi Bhav</Link></li>

          {/* Show Profile Icon and SignOutButton if logged in */}
          {isLoggedIn ? (
            <>
              <li className="text-white cursor-pointer">
                <Link to="/profile" className="text-3xl hover:text-gray-300">
                  <FaUserCircle />
                </Link>
              </li>
              <li><SignOutButton /></li>
            </>
          ) : (
            <li>
              <Link
                to="/sign-in"
                className="flex bg-white items-center text-green-500 px-3 font-bold hover:bg-gray-100 text-xl rounded-lg shadow-md transition duration-300 ease-in-out hover:text-green-400"
              >
                Sign In
              </Link>
            </li>
          )}
        </ul>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="md:hidden">
          <li className="block text-white py-2 px-4 hover:bg-green-500 cursor-pointer"><Link to="/">Home</Link></li>
          <li className="block text-white py-2 px-4 hover:bg-green-500 cursor-pointer"><Link to="/aboutus">About Us</Link></li>
          <li className="block text-white py-2 px-4 hover:bg-green-500 cursor-pointer"><Link to="/products">Products</Link></li>
          <li className="block text-white py-2 px-4 hover:bg-green-500 cursor-pointer"><Link to="/mandibhavs">Mandi Bhav</Link></li>
          
          {/* Show Profile Icon and SignOutButton if logged in */}
          {isLoggedIn ? (
            <>
              <li className="block text-white py-2 px-4 hover:bg-green-500 cursor-pointer">
                <Link to="/profile" className="text-3xl hover:text-gray-300">
                  <FaUserCircle />
                </Link>
              </li>
              <li className="block py-2 px-4"><SignOutButton /></li>
            </>
          ) : (
            <li className="block text-white py-2 px-4 hover:bg-green-500 cursor-pointer">
              <Link
                to="/sign-in"
                className="flex bg-white items-center text-green-500 px-3 font-bold hover:bg-gray-100 text-xl rounded-lg shadow-md transition duration-300 ease-in-out hover:text-green-400"
              >
                Sign In
              </Link>
            </li>
          )}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;