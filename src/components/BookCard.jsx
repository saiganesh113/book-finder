import React from 'react';

const BookCard = ({ book }) => {
  const imageUrl = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
    : 'https://via.placeholder.com/150';

  return (
    <div className="border rounded shadow-md p-4 bg-white">
      <img
        src={imageUrl}
        alt={book.title}
        className="w-full h-48 object-cover mb-2"
      />
      <h3 className="text-lg font-semibold">{book.title}</h3>
      <p className="text-sm text-gray-600">
        {book.author_name?.join(', ') || 'Unknown Author'}
      </p>
      <p className="text-sm text-gray-500">{book.first_publish_year || 'N/A'}</p>
    </div>
  );
};

export default BookCard;