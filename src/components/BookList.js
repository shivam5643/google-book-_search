// components/BookList.js
import React, { useState } from 'react';
import BookDetail from './BookDetail';

const BookList = ({ books, loadMoreBooks, totalItems }) => {
  const [selectedBook, setSelectedBook] = useState(null);

  const openBookDetail = (book) => {
    setSelectedBook(book);
  };

  const closeBookDetail = () => {
    setSelectedBook(null);
  };

  return (
    <div className="text-gray-200">
      <p className="mb-2">Total Books Found: {totalItems}</p>
      {books && books.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {books.map((book) => (
            <div
              key={book.id}
              className="border border-gray-700 bg-gray-800 p-4 rounded-lg cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => openBookDetail(book)}
            >
              <img
                src={book.volumeInfo.imageLinks?.thumbnail || 'https://via.placeholder.com/150'}
                alt={book.volumeInfo.title}
                className="w-full h-40 object-cover mb-2 rounded"
              />
              <h2 className="text-lg font-semibold mb-2 text-gray-100">{book.volumeInfo.title}</h2>
              <p className="text-gray-400">{book.volumeInfo.authors?.join(', ')}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No books found.</p>
      )}
      
      {selectedBook && <BookDetail book={selectedBook} onClose={closeBookDetail} />}
    </div>
  );
};

export default BookList;
