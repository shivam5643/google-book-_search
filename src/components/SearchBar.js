// components/SearchBar.js
import React, { useState } from 'react';

const SearchBar = ({ setQuery }) => {
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
    setQuery(e.target.value);
  };

  return (
    <div className="mb-4 flex justify-center">
      <input
        type="text"
        placeholder="Search for books..."
        value={input}
        onChange={handleChange}
        className="border border-gray-400 p-2 w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 rounded-md text-black"
      />
    </div>
  );
};

export default SearchBar;
