'use client';  // Mark this file as a Client Component

import React, { useState } from 'react';

interface SearchBarProps {
  placeholder?: string;
  onSearch: (searchTerm: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder = "Search...", onSearch }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSearch = () => {
    onSearch(inputValue);
  };

  return (
    <div className="flex items-center bg-white border border-gray-300 rounded-md p-2">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder={placeholder}
        className="flex-grow bg-transparent outline-none px-2"
      />
      <button 
        onClick={handleSearch} 
        className="bg-blue-500 text-white px-4 py-2 rounded-md">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
