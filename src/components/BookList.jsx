import React from 'react';

const BookList = ({ books }) => {
  if (!books.length) {
    return (
      <p className="text-center text-white mt-10 text-lg font-light animate-fadeIn">
        No books found. Try searching for something different.
      </p>
    );
  }

  const getBookImage = (coverId) =>
    coverId
      ? `https://covers.openlibrary.org/b/id/${coverId}-L.jpg`
      : 'https://via.placeholder.com/150x200?text=No+Image';

  const getBookLink = (bookKey) => `https://openlibrary.org${bookKey}`;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {books.map((book) => (
        <div
          key={book.key}
          className="bg-white rounded-lg shadow-lg p-4 text-gray-900 transform transition duration-300 hover:scale-105 hover:shadow-xl"
        >
          {/* Image wrapped in a clickable link */}
          <a href={getBookLink(book.key)} target="_blank" rel="noopener noreferrer">
            <img
              src={getBookImage(book.cover_i)}
              alt={book.title}
              className="w-full h-60 object-cover rounded-md mb-4"
            />
          </a>
          <h3 className="text-xl font-semibold truncate">{book.title}</h3>
          <p className="mt-2 text-gray-600">
            {book.author_name?.join(', ') || 'Unknown Author'}
          </p>
          <p className="mt-1 text-sm text-gray-500">
            First published: {book.first_publish_year || 'N/A'}
          </p>
        </div>
      ))}
    </div>
  );
};

export default BookList;
