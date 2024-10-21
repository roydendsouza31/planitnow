"use client";
import React from 'react';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const Hero = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    // Add your search functionality here
    console.log('Search term:', searchTerm);
  };

  return (
    <section className="relative bg-gray-900 py-32 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black opacity-90 w-full h-full"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle,_rgba(255,255,255,0.05)_1px,_transparent_1px)] bg-[length:20px_20px]"></div>
      </div>
      <div className="relative z-10 text-center px-6 lg:px-12">
        <h1 className="text-4xl md:text-6xl text-white font-extrabold mb-8">
          Find the Perfect Venue
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-12">
          Discover venues for your events, whether it’s a wedding, birthday, or corporate gathering.
        </p>
        <div className="flex items-center justify-center max-w-md mx-auto">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for venues..."
            className="w-full px-4 py-3 rounded-l-md border-none focus:ring-0 text-black"
          />
          <button
            onClick={handleSearch}
            className="px-6 py-3 bg-indigo-500 text-white rounded-r-md flex items-center justify-center"
          >
            Search <FaSearch className="ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
