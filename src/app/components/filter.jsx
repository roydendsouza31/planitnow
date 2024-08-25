"use client";
import React, { useState, useRef, useEffect } from 'react';

const Filter = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Select Category');
  const [searchQuery, setSearchQuery] = useState('');
  const [options] = useState([
    'Photographers/Videographers',
    'Decorators',
    'Venue Planners',
    'Makeup Artists',
    'Designers',
  ]);
  const dropdownRef = useRef(null);

  // Handle clicks outside of the dropdown to close it
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };

  const handleSearch = () => {
    // Handle search functionality here
    console.log('Search query:', searchQuery);
  };

  const filteredOptions = options.filter(option =>
    option.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="relative isolate overflow-hidden bg-gray-900 py-12 sm:py-20 md:py-28 lg:py-36 min-h-[calc(100vh-80px)]">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white pt-8 sm:pt-10 md:pt-12 lg:pt-14">
            Welcome to Plan It Now
          </h1>
          <p className="mt-4 sm:mt-6 md:mt-8 lg:mt-10 text-lg sm:text-xl md:text-2xl lg:text-3xl leading-8 sm:leading-9 md:leading-10 text-gray-300">
            Your one-stop solution for all your event planning needs.
          </p>

          <div className="mt-16 sm:mt-20 md:mt-24 lg:mt-28 flex flex-col sm:flex-row justify-center items-center space-y-8 sm:space-y-0 sm:space-x-6 md:space-x-8 lg:space-x-12">
            {/* Container to stack button above dropdown on smaller screens */}
            <div className="flex flex-col-reverse sm:flex-row sm:items-center gap-4">
              {/* Dropdown */}
              <div className="relative flex-shrink-0 w-full sm:w-auto" ref={dropdownRef}>
                <button
                  onClick={toggleDropdown}
                  className="w-full sm:w-auto bg-white/10 text-white font-semibold py-4 sm:py-5 md:py-6 px-6 sm:px-8 md:px-10 rounded-lg shadow-md ring-1 ring-white/10 focus:ring-2 focus:ring-indigo-500 text-lg sm:text-xl md:text-2xl lg:text-3xl flex items-center justify-between"
                  type="button"
                >
                  <span>{selectedOption}</span>
                  <svg
                    className="w-5 h-5 ml-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="absolute z-20 w-full sm:w-80 mt-3 bg-white/10 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search..."
                      className="w-full bg-gray-200 text-gray-900 font-semibold py-2 px-4 rounded-t-lg border-b border-gray-300"
                    />
                    <ul className="py-1 text-sm text-white">
                      {filteredOptions.length > 0 ? (
                        filteredOptions.map((option) => (
                          <li key={option}>
                            <button
                              onClick={() => handleOptionClick(option)}
                              className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                            >
                              {option}
                            </button>
                          </li>
                        ))
                      ) : (
                        <li className="px-4 py-2 text-white">No results found</li>
                      )}
                    </ul>
                  </div>
                )}
              </div>

              {/* Search Button */}
              <div className="flex-shrink-0 w-full sm:w-auto">
                <button
                  onClick={handleSearch}
                  className="w-full sm:w-auto bg-indigo-500 text-white font-semibold py-4 sm:py-5 md:py-6 px-10 sm:px-12 md:px-14 rounded-lg shadow-md hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 text-lg sm:text-xl md:text-2xl lg:text-3xl"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="absolute inset-0 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
        />
      </div>
    </section>
  );
};

export default Filter;
