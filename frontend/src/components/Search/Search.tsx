import React, { useState, ChangeEvent } from 'react';

export const SearchBar: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const [results, setResults] = useState<string[]>([]);

  const data: string[] = ["Apple", "Banana", "Carrot", "Cabbage", "Grapes", "Orange", "Onion", "Garlic"];

  const handleSearch = (e: ChangeEvent<HTMLInputElement>): void => {
    const searchQuery = e.target.value;
    setQuery(searchQuery);

    if (searchQuery.length > 0) {
      const filteredResults = data.filter(item =>
        item.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setResults(filteredResults);
    } else {
      setResults([]);
    }
  };

  return (
    <div className="relative max-w-md mx-auto my-8">
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search..."
        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-green-500"
      />
      {results.length > 0 && (
        <div className="absolute w-full mt-1 bg-white border border-gray-300 rounded shadow-lg">
          {results.map((result, index) => (
            <div
              key={index}
              className="px-4 py-2 cursor-pointer hover:bg-green-100"
            >
              {result}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

