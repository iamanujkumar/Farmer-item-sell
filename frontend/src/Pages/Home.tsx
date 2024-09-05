import React, { useState } from 'react';
import axios from 'axios';
import { FaRobot } from 'react-icons/fa'; 
import { AiOutlineClose } from 'react-icons/ai'; 
import ChatAI from '../GenAI_Chatbot/Chatbot'
import HeroPage from '../components/HeroPage';

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
  const [chatbotVisible, setChatbotVisible] = useState<boolean>(false);

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

  const toggleChatbot = () => {
    setChatbotVisible(!chatbotVisible);
  };

  return (
    <div className="relative">
      

      {/* CHATBOT */}

     
      <div 
        className="fixed bottom-10 right-6 bg-blue-600 p-4 rounded-full shadow-lg cursor-pointer z-50"
        onClick={toggleChatbot}
      >
        <FaRobot className="text-gray-950 w-10 h-10" />
      </div>

     
      {chatbotVisible && (
        <div className="fixed bottom-50 right-6 w-80 h-46 bg-white border border-gray-300 rounded-lg shadow-lg p-4 z-50">
          <div className="relative h-full">
            <button 
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={toggleChatbot}
            >
              <AiOutlineClose className="w-6 h-20" />
            </button>
            <ChatAI />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;