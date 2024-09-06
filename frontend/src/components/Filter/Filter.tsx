import { useEffect, useState } from "react";

const FilterSection = ({ onFilterChange }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedCity, setSelectedCity] = useState('');
  const [sortOption, setSortOption] = useState('');

  const categories = ['Vegetables', 'Fruits', 'Spices', 'Dairy', 'Grains'];
  
  const cities = ['gorakhpur','Mumbai', 'Pune', 'Nagpur', 'New Delhi', 'Chennai', 'Coimbatore', 'Kolkata', 'Howrah', 'Bangalore', 'Mysore'];

  useEffect(() => {
    onFilterChange({ selectedCategory, priceRange, selectedCity, sortOption });
  }, [selectedCategory, priceRange, selectedCity, sortOption]);

  return (
    <div className="bg-white p-4 md:w-64 w-full md:h-screen shadow-md flex flex-col md:flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
      <h2 className="text-xl font-semibold mb-4">Filter & Sort Products</h2>

      {/* Category Filter */}
      <div className="mb-6 sm:mb-0">
        <h3 className="font-medium text-gray-800 mb-2">Category</h3>
        <select
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Price Range Filter */}
      <div className="mb-6 sm:mb-0">
        <h3 className="font-medium text-gray-800 mb-2">Price Range</h3>
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <input
            type="text"
            className="w-full sm:w-1/3 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            value={priceRange[0]}
            onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
            min="0"
          />
          <span className="mx-2">-</span>
          <input
            type="text"
            className="w-full sm:w-1/3 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
            min="0"
          />
        </div>
      </div>

      {/* City Filter */}
      <div className="mb-6 sm:mb-0">
        <h3 className="font-medium text-gray-800 mb-2">City</h3>
        <select
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
        >
          <option value="">All Cities</option>
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>

      {/* Sorting Options */}
      <div className="mb-6 sm:mb-0">
        <h3 className="font-medium text-gray-800 mb-2">Sort By</h3>
        <select
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="">None</option>
          <option value="Price: Low to High">Price: Low to High</option>
          <option value="Price: High to Low">Price: High to Low</option>
          <option value="Rating: High to Low">Rating: High to Low</option>
          <option value="Rating: Low to High">Rating: Low to High</option>
        </select>
      </div>
    </div>
  );
};

export default FilterSection;
