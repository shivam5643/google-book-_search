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
    <div>
      <p className="text-gray-600 mb-2">Total Books Found: {totalItems}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {books.map((book) => (
          <div key={book.id} className="border p-4 rounded-lg cursor-pointer" onClick={() => openBookDetail(book)}>
            <img
              src={book.volumeInfo.imageLinks?.thumbnail || 'https://via.placeholder.com/150'}
              alt={book.volumeInfo.title}
              className="w-full h-40 object-cover mb-2"
            />
            <h2 className="text-lg font-semibold mb-2">{book.volumeInfo.title}</h2>
            <p className="text-gray-600">{book.volumeInfo.authors?.join(', ')}</p>
          </div>
        ))}
      </div>
      {totalItems > books.length && (
        <button onClick={loadMoreBooks} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
          Load More
        </button>
      )}
      {selectedBook && <BookDetail book={selectedBook} onClose={closeBookDetail} />}
    </div>
  );
};

export default BookList;
