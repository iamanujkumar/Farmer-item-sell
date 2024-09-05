import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
  FaCarrot, FaAppleAlt, FaSeedling, FaPepperHot, FaLemon, FaTint,
  FaFish, FaCheese, FaTractor, FaWater, FaTree, FaOilCan, FaMugHot,
  FaBoxOpen, FaTools, FaLeaf, FaSprayCan, FaSun, FaTimes
} from 'react-icons/fa';
import AllProduct from '../../Pages/AllProduct/AllProduct';

function Category() {
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [item, setItem] = useState("");
  const [items, setItems] = useState([]); // State to store fetched items

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/searchItems/search/?itemName=${item.toLowerCase()}`);
        setItems(response.data); // Set the fetched items to the state
        console.log(response);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    if (item) {
      fetchData();
    }
  }, [item]);
  useEffect(()=>{
        console.log(items.data)
  },[items])
 

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
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <div className="flex justify-center">
        {Array(fullStars)
          .fill(0)
          .map((_, index) => (
            <span key={index} className="text-yellow-500">&#9733;</span>
          ))}
        {halfStar && <span className="text-yellow-500">&#9733;</span>}
        {Array(emptyStars)
          .fill(0)
          .map((_, index) => (
            <span key={index} className="text-gray-300">&#9733;</span>
          ))}
      </div>
    );
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
        } md:relative md:translate-x-0 w-72 max-w-xs bg-green-100 p-6 transition-transform duration-300 ease-in-out z-50 overflow-y-auto`}
        style={{ maxHeight: '100vh' }}
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
                      <button onClick={() => setItem(item.name)} className="text-md font-medium text-green-700">{item.name}</button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Rest of the Screen */}
      { items?.data?.length >0 ?(<div
        className={`flex-grow p-4 transition-colors overflow-auto duration-300 ease-in-out ${
          isSidebarOpen ? 'bg-gray-50' : 'bg-white'
        }`}
        style={{ padding: 0 }}
      >
        <div className="flex flex-wrap gap-4 justify-center  items-center p-4">
          {items?.data?.length > 0 ? (
            items?.data?.map((item, index) => (
              // <div key={index} className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow w-64">
              //   <h3 className="text-xl font-bold mb-2">{item.itemName}</h3>
              //   <p className="text-gray-600 mb-4">{item.description}</p>
              //   <p className="text-green-800 font-semibold">Price: {item.price}</p>
              // </div>
              <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-56">
              <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-44">
                <img
                  src={item.imagesUrl[0]}
                  alt="card-image" className="object-cover w-full h-full" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                   {item.itemName}
                  </p>
                  <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                   {item.price}/Kg
                  </p>
                </div>
                <p className="block font-sans text-xl antialiased font-normal leading-normal text-gray-700 ">
              {renderStars(item.rating)}
              </p>
              </div>
              <div className="p-6 pt-0">
                <button
                  className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                  type="button">
                  Add to Cart
                </button>
              </div>
            </div>
            ))
          ) : (
            <p className="text-gray-500">Select a category and item to see details.</p>
          )}
        </div>
      </div>):("")}
      
    </div>
  );
}

export default Category;
