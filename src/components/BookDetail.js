// components/BookDetail.js
import React from 'react';

const BookDetail = ({ book, onClose }) => {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50"
      onClick={handleOverlayClick}
    >
      <div className="bg-white p-8 w-1/2 h-[500px] overflow-y-auto rounded-lg shadow-lg relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-600 hover:text-gray-800">
          ✖
        </button>
        <div className="flex flex-col sm:flex-row">
          <div className="sm:w-1/3 mb-4 sm:mb-0 sm:mr-8">
            <img
              src={book.volumeInfo.imageLinks?.thumbnail || 'https://via.placeholder.com/150'}
              alt={book.volumeInfo.title}
              className="w-full h-auto object-cover rounded"
            />
          </div>
          <div className="sm:w-2/3">
            <h2 className="text-2xl font-semibold mb-2 text-blue-800">{book.volumeInfo.title}</h2>
            <h3 className="text-xl font-medium text-gray-700 mb-4">{book.volumeInfo.authors?.join(', ')}</h3>
            <p className="text-gray-600 mb-4">{book.volumeInfo.description}</p>
            <div className="text-gray-700">
              <p className="mb-2"><strong className="text-blue-600">Average Rating:</strong> {book.volumeInfo.averageRating || 'N/A'}</p>
              <p className="mb-2"><strong className="text-blue-600">Published Date:</strong> {book.volumeInfo.publishedDate || 'N/A'}</p>
              <p className="mb-2"><strong className="text-blue-600">Categories:</strong> {book.volumeInfo.categories?.join(', ') || 'N/A'}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
