"use client";
import { useState } from 'react';
import axios from 'axios';

interface MarketData {
  S_No: string;
  City: string;
  Commodity: string;
  Min_Prize: string;
  Max_Prize: string;
  Model_Prize: string;
}

const Mandi_Bhav: React.FC = () => {
  const [commodity, setCommodity] = useState<string>('');
  const [state, setState] = useState<string>('');
  const [district, setDistrict] = useState<string>('');
  const [marketData, setMarketData] = useState<MarketData[]>([]);
  const [filteredData, setFilteredData] = useState<MarketData[]>([]);

  const toTitleCase = (str: string): string => {
    return str
      .toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const fetchMarketPrices = async () => {
    try {
      // Base URL for the API
      let apiUrl =`https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=579b464db66ec23bdd000001b94a35c0130d46a15f058383f452e7c4&format=json&limit=20`;
  
      // Adding filters based on user input
      if (state) {
        apiUrl += `&filters%5Bstate.keyword%5D=${encodeURIComponent(state)}`;
      }
      if (district) {
        apiUrl += `&filters%5Bdistrict%5D=${encodeURIComponent(district)}`;
      }
      if (commodity) {
        apiUrl += `&filters%5Bcommodity%5D=${encodeURIComponent(commodity)}`;
      }
  
      // Fetching the data
      const response = await axios.get(apiUrl);
      const data: MarketData[] = response.data.records.map((record: any) => ({
        S_No: record.S_No || record['S.No'], // Adjust based on actual API field name
        City: record.market,
        Commodity: record.commodity,
        Min_Prize: record.min_price,
        Max_Prize: record.max_price,
        Model_Prize: record.modal_price,
      }));
  
      // Setting the state with the fetched data
      console.log(data)
      setMarketData(data);
      setFilteredData(data)  // Apply filtering after fetching data
    } catch (error) {
      console.error('Error fetching market prices:', error);
    }
  };
  

  return (
    <div className="container mx-auto p-6 bg-green-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-green-900 mb-6 text-center">Crop Market Prices</h1>

      <div className="mb-6 flex flex-col md:flex-row justify-center">
        <input
          type="text"
          value={commodity}
          onChange={(e) => setCommodity(toTitleCase(e.target.value))}
          placeholder="Enter Commodity"
          className="border-2 border-green-500 p-2 mb-2 md:mb-0 md:mr-2 rounded-md focus:outline-none focus:border-green-700"
        />
        <input
          type="text"
          value={state}
          onChange={(e) => setState(toTitleCase(e.target.value))}
          placeholder="Enter State"
          className="border-2 border-green-500 p-2 mb-2 md:mb-0 md:mr-2 rounded-md focus:outline-none focus:border-green-700"
        />
        <input
          type="text"
          value={district}
          onChange={(e) => setDistrict(toTitleCase(e.target.value))}
          placeholder="Enter District"
          className="border-2 border-green-500 p-2 mb-2 md:mb-0 md:mr-2 rounded-md focus:outline-none focus:border-green-700"
        />
        <button
          onClick={fetchMarketPrices}
          className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600 transition duration-200"
        >
          Search
        </button>
      </div>

      <div className="flex flex-col space-y-4">
        {filteredData.length > 0 ? (
          filteredData.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center p-4 bg-white border-2 border-green-500 rounded-md shadow-md"
            >
              <div className="flex-1 text-green-900 font-semibold">{item.City}</div>
              <div className="flex-1 text-green-700">{item.Commodity}</div>
              <div className="flex-1 text-green-600">Min Price: {item.Min_Prize} per quintal</div>
              <div className="flex-1 text-green-600">Max Price: {item.Max_Prize} per quintal</div>
              <div className="flex-1 text-green-600">Modal Price: {item.Model_Prize} per quintal</div>
            </div>
          ))
        ) : (
          <div className="text-center py-4 text-green-700">No data found</div>
        )}
      </div>
    </div>
  );
};

export default Mandi_Bhav;