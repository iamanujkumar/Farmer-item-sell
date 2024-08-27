import { apiClient } from "@/lib/api-client.js";
import { ADD_ITEM } from "../../../Constants.js";
import Navbar from "../../Components/Navbar/Navbar";
import React, { useState } from "react";

const AddItem = () => {
  const [category, setCategory] = useState("");
  const [itemName, setItemName] = useState("");
  const [city, setCity] = useState("");
  const [quantity, setQuantity] = useState("");
  const [mobile, setMobile] = useState("");
  const [description, setDescription] = useState("");
  const [state, setState] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);

  const user = localStorage.getItem("user");
  console.log(user)

  const handleSubmit = async(e) => {
    e.preventDefault();
    // Handle form submission logic
    try {
        const response = await apiClient.post(ADD_ITEM, { itemName, description, category, city, state, price });
        console.log(response)
        
    } catch (error) {
      console.error('Add Item Error:', error);
        
    }
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <>
    <Navbar />
    <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: `url('https://plus.unsplash.com/premium_photo-1661962692059-55d5a4319814?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')` }}>
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
      <div className="relative flex items-center justify-center min-h-screen">
        <div className="max-w-2xl w-full bg-green-100 p-8 rounded-lg shadow-lg bg-opacity-90">
          <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">Add New Item</h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Part */}
              <div>
                {/* Category */}
                <div className="mb-4">
                  <label className="block text-green-700 font-semibold mb-2" htmlFor="category">
                    Category
                  </label>
                  <select
                    id="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full p-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    <option value="">Select Category</option>
                    <option value="Vegetables">Vegetables</option>
                    <option value="Fruits">Fruits</option>
                    <option value="Dals">Dals</option>
                    <option value="Spices">Spices</option>
                    <option value="Dairy">Dairy & Cheese</option>
                    {/* Add more categories as needed */}
                  </select>
                </div>

                 {/* Item Name */}
                 <div className="mb-4">
                  <label className="block text-green-700 font-semibold mb-2" htmlFor="itemName">
                    Item Name
                  </label>
                  <select
                    id="itemName"
                    value={itemName}
                    onChange={(e) => setItemName(e.target.value)}
                    className="w-full p-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    <option value="">Select Item</option>
                    <option value="Apple">Apple</option>
                    <option value="Onion">Onion</option>
                    <option value="Garlic">Garlic</option>
                    <option value="Tomato">Tomato</option>
                    <option value="Carrot">Carrot</option>
                    {/* Add more items as needed */}
                  </select>
                </div>

                {/* City */}
                <div className="mb-4">
                  <label className="block text-green-700 font-semibold mb-2" htmlFor="city">
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full p-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Enter city name"
                  />
                </div>

                {/* Mobile Number */}
                <div className="mb-4">
                  <label className="block text-green-700 font-semibold mb-2" htmlFor="mobile">
                    Mobile Number
                  </label>
                  <input
                    type="text"
                    id="mobile"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    className="w-full p-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Enter mobile number"
                  />
                </div>

                {/* State */}
                <div className="mb-4">
                  <label className="block text-green-700 font-semibold mb-2" htmlFor="state">
                    State
                  </label>
                  <input
                    type="text"
                    id="state"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    className="w-full p-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Enter state"
                  />
                </div>
              </div>

              {/* Right Part */}
              <div>
                {/* Quantity */}
                <div className="mb-4">
                  <label className="block text-green-700 font-semibold mb-2" htmlFor="quantity">
                    Quantity
                  </label>
                  <input
                    type="number"
                    id="quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    className="w-full p-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Enter quantity"
                  />
                </div>

                {/* Price */}
                <div className="mb-4">
                  <label className="block text-green-700 font-semibold mb-2" htmlFor="price">
                    Price
                  </label>
                  <input
                    type="number"
                    id="price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="w-full p-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Enter price"
                  />
                </div>

                {/* Description */}
                <div className="mb-4">
                  <label className="block text-green-700 font-semibold mb-2" htmlFor="description">
                    Description
                  </label>
                  <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full p-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Enter description"
                  ></textarea>
                </div>

                {/* Image Upload */}
                <div className="mb-4">
                  <label className="block text-green-700 font-semibold mb-2" htmlFor="image">
                    Upload Image
                  </label>
                  <input
                    type="file"
                    id="image"
                    onChange={handleImageChange}
                    className="w-full p-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    accept="image/*"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-green-600 text-white font-semibold py-2 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Add Item
            </button>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default AddItem;
