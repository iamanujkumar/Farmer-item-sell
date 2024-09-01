

import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import CategorySection from '../components/Category/Category';

interface Item {
  name: string;
  category: string;
  price: number;
}
const Home: React.FC = () => {
  const [searchName, setSearchName] = useState<string>('');
  const [searchCategory, setSearchCategory] = useState<string>('');
  const [priceRange, setPriceRange] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [results, setResults] = useState<Item[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleSearchByName = async () => {
    try {
      const response = await axios.get<Item[]>(`http://localhost:8000/api/searchItems/search/?name=${searchName}`);
      setResults(response.data);
      setError(null);
    } catch (error) {
      setError('Error fetching data by name.');
      console.error(error);
    }
  };

  const handleSearchByCategory = async () => {
    try {
      const response = await axios.get<Item[]>(`http://localhost:8000/api/searchItems/search/?category=${searchCategory}`);
      setResults(response.data);
      setError(null);
    } catch (error) {
      setError('Error fetching data by category.');
      console.error(error);
    }
  };

  const handleSearchByPriceRange = async () => {
    try {
      const response = await axios.get<Item[]>(`http://localhost:8000/api/searchItems/search/?sortOption=${priceRange}`);
      setResults(response.data);
      setError(null);
    } catch (error) {
      setError('Error fetching data by price range.');
      console.error(error);
    }
  };

  const handlePagination = async () => {
    try {
      const response = await axios.get<Item[]>(`http://localhost:8000/api/searchItems/search/?page=${page}`);
      setResults(response.data);
      setError(null);
    } catch (error) {
      setError('Error fetching data by page.');
      console.error(error);
    }
  };

  return (
    <>
    <Navbar/>
    <div>
      <h1>Home Page</h1>
      <div>
        <h2>Search by Name</h2>
        <input 
          type="text" 
          placeholder="Enter name" 
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
        />
        <button onClick={handleSearchByName}>Search by Name</button>
      </div>

      <div>
        <h2>Search by Category</h2>
        <input 
          type="text" 
          placeholder="Enter category" 
          value={searchCategory}
          onChange={(e) => setSearchCategory(e.target.value)}
        />
        <button onClick={handleSearchByCategory}>Search by Category</button>
      </div>

      <div>
        <h2>Search by Price Range</h2>
        <input 
          type="text" 
          placeholder="Enter price range" 
          value={priceRange}
          onChange={(e) => setPriceRange(e.target.value)}
        />
        <button onClick={handleSearchByPriceRange}>Search by Price Range</button>
      </div>

      <div>
        <h2>Pagination</h2>
        <input 
          type="number" 
          placeholder="Enter page number" 
          value={page}
          onChange={(e) => setPage(Number(e.target.value))}
        />
        <button onClick={handlePagination}>Go to Page</button>
      </div>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div>
        <h3>Results:</h3>
        <ul>
          {results.map((item, index) => (
            <li key={index}>
              <strong>{item.name}</strong> - {item.category} - ${item.price}
            </li>
          ))}
        </ul>
      </div>
    </div>
    <CategorySection />
    {/* <Footer  */}
    </>
  );
};

export default Home;
