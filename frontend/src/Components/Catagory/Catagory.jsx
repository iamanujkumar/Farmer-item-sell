import React, { useState } from 'react';
import {
  FaCarrot, FaAppleAlt, FaSeedling, FaPepperHot, FaLemon, FaTint,
  FaFish, FaCheese, FaTractor, FaWater, FaTree, FaOilCan, FaMugHot,
  FaBoxOpen, FaTools, FaLeaf, FaSprayCan, FaSun, FaTimes
} from 'react-icons/fa';

function Category() {
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const categories = {
    Vegetables: [
      { name: 'Brinjal', icon: <FaLeaf /> },
      { name: 'Carrot', icon: <FaCarrot /> },
      { name: 'Broccoli', icon: <FaSeedling /> },
      { name: 'Tomato', icon: <FaPepperHot /> },
    ],
    Fruits: [
      { name: 'Apple', icon: <FaAppleAlt /> },
      { name: 'Banana', icon: <FaLemon /> },
      { name: 'Mango', icon: <FaLemon /> },
      { name: 'Grapes', icon: <FaTint /> },
    ],
    Dals: [
      { name: 'Toor Dal', icon: <FaLeaf /> },
      { name: 'Moong Dal', icon: <FaLeaf /> },
      { name: 'Chana Dal', icon: <FaLeaf /> },
      { name: 'Urad Dal', icon: <FaLeaf /> },
    ],
    Spices: [
      { name: 'Black Pepper', icon: <FaPepperHot /> },
      { name: 'Garlic', icon: <FaLeaf /> },
      { name: 'Turmeric', icon: <FaSun /> },
      { name: 'Others', icon: <FaBoxOpen /> },
    ],
    // Add more categories as needed
  };

  const toggleCategory = (category) => {
    if (expandedCategory === category) {
      setExpandedCategory(null);
    } else {
      setExpandedCategory(category);
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Category Button */}
      <div className="md:hidden p-4 z-50 ">
        <button
          onClick={toggleSidebar}
          className="text-white bg-green-800 px-4 py-2 rounded focus:outline-none"
        >
          Category
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:relative md:translate-x-0 w-64 max-w-xs bg-green-100 p-6 transition-transform duration-300 ease-in-out z-50 overflow-y-auto`}
        style={{ maxHeight: '100vh' }} // Ensure the sidebar does not exceed viewport height
      >
        {/* Close Button in Sidebar */}
        <div className="flex justify-end mb-4 md:hidden">
          <button
            onClick={toggleSidebar}
            className="text-green-800 focus:outline-none"
          >
            <FaTimes size={24} />
          </button>
        </div>

        <h2 className="text-2xl font-bold text-green-800 mb-6">Categories</h2>
        <div className="space-y-6">
          {Object.keys(categories).map((category) => (
            <div key={category}>
              <div
                className={`bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer ${
                  expandedCategory === category ? 'bg-green-200' : ''
                }`}
                onClick={() => toggleCategory(category)}
              >
                <div className="flex items-center">
                  <div className="h-12 w-12 bg-green-200 rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl text-green-600">
                      {category === 'Vegetables' && '🥦'}
                      {category === 'Fruits' && '🍎'}
                      {category === 'Dals' && '🍛'}
                      {category === 'Spices' && '🌶️'}
                      {/* Add emojis or icons for other categories */}
                    </span>
                  </div>
                  <h3 className="text-lg font-medium text-green-700">{category}</h3>
                </div>
              </div>

              {/* Subcategories */}
              {expandedCategory === category && (
                <div className="ml-12 mt-4 space-y-2">
                  {categories[category].map((item) => (
                    <div
                      key={item.name}
                      className="bg-gray-100 p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow flex items-center"
                    >
                      <span className="text-xl text-green-600 mr-3">{item.icon}</span>
                      <a href='' className="text-md font-medium text-green-700">{item.name}</a>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Rest of the Screen */}
      <div
        className={`flex-grow p-0 transition-colors duration-300 ease-in-out ${
          isSidebarOpen ? 'bg-gray-50' : 'bg-white'
        } `}
        style={{ padding: 0 }}
      >
        <div className="flex items-center justify-center h-full">
          <img
            src="https://plus.unsplash.com/premium_photo-1661962692059-55d5a4319814?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with your image path
            alt="Category Illustration"
            className="object-cover w-full h-full"
            style={{ maxHeight: 'calc(100vh - 64px)' }} // Adjust to avoid overlapping with navbar
          />
        </div>
      </div>
    </div>
  );
}

export default Category;
