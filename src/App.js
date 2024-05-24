// App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import BookList from './components/BookList';
import Filter from './components/Filter';

const App = () => {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [books, setBooks] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    if (query.trim() !== '') {
      searchBooks();
    } else {
      fetchInitialBooks();
    }
  }, [query, category, startDate, endDate]);

  const fetchInitialBooks = async () => {
    try {
      const response = await axios.get('https://www.googleapis.com/books/v1/volumes?q=bestsellers&maxResults=10');
      setBooks(response.data.items);
      setTotalItems(response.data.totalItems);
    } catch (error) {
      console.error('Error fetching initial books:', error);
    }
  };

  const searchBooks = async () => {
    try {
      let queryString = `q=${query}&startIndex=${startIndex}&maxResults=10`;
      if (category) {
        queryString += `&subject=${category}`;
      }
      if (startDate && endDate) {
        queryString += `&after=${startDate}&before=${endDate}`;
      }
      const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?${queryString}`);
      setBooks(response.data.items);
      setTotalItems(response.data.totalItems);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  const loadMoreBooks = async () => {
    try {
      setStartIndex((prevStartIndex) => prevStartIndex + 10);
      let queryString = `q=${query}&startIndex=${startIndex + 10}&maxResults=10`;
      if (category) {
        queryString += `&subject=${category}`;
      }
      if (startDate && endDate) {
        queryString += `&after=${startDate}&before=${endDate}`;
      }
      const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?${queryString}`);
      setBooks((prevBooks) => [...prevBooks, ...response.data.items]);
    } catch (error) {
      console.error('Error loading more books:', error);
    }
  };

  return (
    <div className="bg-gray-900 text-gray-200 min-h-screen">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Google Books Search</h1>
        <SearchBar setQuery={setQuery} />
        <Filter setCategory={setCategory} setStartDate={setStartDate} setEndDate={setEndDate} />
        <BookList books={books} loadMoreBooks={loadMoreBooks} totalItems={totalItems} />
        {totalItems > (books ? books.length : 0) && (
          <div className="flex justify-center mt-4">
            <button
              onClick={loadMoreBooks}
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition-colors"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
