// components/MainPage.js
import React, { useState } from 'react';
import SearchBar from './SearchBar';
import BookList from './BookList';
import FilterOptions from './FilterOptions';

const MainPage = () => {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Google Books Search</h1>
      <SearchBar setQuery={setQuery} />
      <FilterOptions setCategory={setCategory} setStartDate={setStartDate} setEndDate={setEndDate} />
      <BookList query={query} category={category} startDate={startDate} endDate={endDate} />
    </div>
  );
};

export default MainPage;
