// components/SearchBar.js
import React, { useState } from 'react';

const SearchBar = ({ setQuery }) => {
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
    setQuery(e.target.value);
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search for books..."
        value={input}
        onChange={handleChange}
        className="border border-gray-400 p-2 w-1/2 rounded-md text-black"
      />
    </div>
  );
};

export default SearchBar;
