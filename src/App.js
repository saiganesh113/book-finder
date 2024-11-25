import React, { useState } from 'react';
import axios from 'axios';
import { FaMoon, FaSun } from 'react-icons/fa'; // Import icons from react-icons

import SearchBar from './components/SearchBar';
import BookList from './components/BookList';

const App = () => {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false); // State for Dark Mode

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

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode); // Toggle function for Dark Mode

  return (
    <div
      className={`min-h-screen ${
        isDarkMode
          ? 'bg-gray-900 text-white'
          : 'bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white'
      }`}
    >
      {/* Floating Dark Mode Toggle Button */}
      <button
        onClick={toggleDarkMode}
        className={`fixed right-6 top-1/3 transform -translate-y-1/2 p-3 rounded-full shadow-lg transition ${
          isDarkMode
            ? 'bg-yellow-400 hover:bg-yellow-300 text-gray-900'
            : 'bg-blue-600 hover:bg-blue-500 text-white'
        }`}
      >
        {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
      </button>

      {/* Header */}
      <header className="py-8 text-center">
        <h1 className="text-5xl font-bold tracking-wide drop-shadow-md">
          📚 Book Finder
        </h1>
        <p className="text-lg mt-2 opacity-80">Discover your next read with ease</p>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6">
        <SearchBar onSearch={fetchBooks} />
        {error && (
          <p className="text-red-300 text-center mt-4 animate-pulse">{error}</p>
        )}
        <BookList books={books} />
      </main>

      {/* Footer */}
      <footer
        className={`mt-10 py-6 text-center ${
          isDarkMode ? 'bg-gray-800 text-gray-400' : 'bg-gray-900 text-gray-400'
        }`}
      >
        <p>
          &copy; 2024 Book Finder | Made with ❤ by <span className="font-semibold">Eduru Venkata Sai Ganesh</span>
        </p>
      </footer>
    </div>
  );
};

export default App;
