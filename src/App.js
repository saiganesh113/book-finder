import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import BookList from './components/BookList';

const App = () => {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);

  const fetchBooks = async (query) => {
    try {
      setError(null);
      const response = await axios.get(
        `https://openlibrary.org/search.json?title=${query}`
      );
      setBooks(response.data.docs);
    } catch (err) {
      setError('Error fetching books. Please try again.');
    }
  };  

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white">
      <header className="py-8 text-center">
        <h1 className="text-5xl font-bold tracking-wide drop-shadow-md">
          📚 Book Finder
        </h1>
        <p className="text-lg mt-2 opacity-80">
          Discover your next read with ease
        </p>
      </header>

      <main className="max-w-5xl mx-auto px-6">
        <SearchBar onSearch={fetchBooks} />
        {error && (
          <p className="text-red-300 text-center mt-4 animate-pulse">
            {error}
          </p>
        )}
        <BookList books={books} />
      </main>

      <footer className="mt-10 py-6 text-center bg-gray-900">
        <p className="text-gray-400">
          &copy; 2024 Book Finder | Made with ❤️ by Eduru Venkata Sai Ganesh.
        </p>
      </footer>
    </div>
  );
};

export default App;
