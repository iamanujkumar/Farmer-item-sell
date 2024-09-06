import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [products, setProducts] = useState([]);
  const navigate=useNavigate();

  // Fetch all products when the component mounts
  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/searchItems/search/?*');
        setProducts(response.data.data); // Assuming `data.data` holds the products array
        console.log(response.data.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    getAllProducts();
  }, []);

  // Handle search input
  const handleSearch = (e) => {
    const searchQuery = e.target.value;
    setQuery(searchQuery);

    // Filter products based on the query
    if (searchQuery.length > 0) {
      const filteredResults = products.filter((item) =>
        item.itemName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.state.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setResults(filteredResults);
    } else {
      setResults([]);
    }
  };

  return (
    <div className="relative max-w-md mx-auto z-50">
      {/* Wrapper for search bar and icon */}
      <div className="flex items-center border border-gray-300 rounded">
        <input
          type="text"
          value={query}
          onChange={handleSearch}
          placeholder="Search by name, city, state, or category..."
          className="w-full px-4 py-2 focus:outline-none focus:border-green-500"
        />
        {/* Search Icon */}
        <div className="px-3 text-gray-500">
          <FaSearch />
        </div>
      </div>

      {/* Search results dropdown */}
      {results.length > 0 && (
        <div className="absolute w-full bg-white border border-gray-300 rounded shadow-lg mt-1 z-50">
          {results.map((result, index) => (
            <div
              key={index}
              className="px-4 py-2 cursor-pointer hover:bg-green-100"
              onClick={()=>navigate(`/products`)}
            >
              <p className="font-bold">{result.itemName}</p>
              <p className="text-sm text-gray-600">{result.city}, {result.state} - {result.category}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
