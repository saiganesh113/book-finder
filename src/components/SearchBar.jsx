import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() !== '') {
      onSearch(query);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center bg-white rounded-full shadow-xl overflow-hidden mt-6"
    >
      <input
        type="text"
        className="flex-grow px-4 py-3 text-gray-800 outline-none"
        placeholder="Search for books by title..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        type="submit"
        className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium tracking-wide"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
