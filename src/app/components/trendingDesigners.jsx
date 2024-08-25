"use client";
import React, { useState } from 'react';
import Image from 'next/image';

const photographers = [
    //imageSrc well have to add Dynamically.
    { name: 'John Doe', imageSrc: '', rating: 4.5, reviews: 120 },
    { name: 'Jane Smith', imageSrc: '', rating: 4.7, reviews: 98 },
    { name: 'Mike Johnson', imageSrc: '', rating: 4.6, reviews: 105 },
    { name: 'Alice Brown', imageSrc: '', rating: 4.8, reviews: 110 },
    { name: 'Chris Lee', imageSrc: '', rating: 4.7, reviews: 99 },
    { name: 'Sophia White', imageSrc: '', rating: 4.9, reviews: 130 },
    { name: 'John Doe', imageSrc: '', rating: 4.5, reviews: 120 },
    { name: 'Jane Smith', imageSrc: '', rating: 4.7, reviews: 98 },
    { name: 'Mike Johnson', imageSrc: '', rating: 4.6, reviews: 105 },
    { name: 'Alice Brown', imageSrc: '', rating: 4.8, reviews: 110 },
    { name: 'Chris Lee', imageSrc: '', rating: 4.7, reviews: 99 },
    { name: 'Sophia White', imageSrc: '', rating: 4.9, reviews: 130 },
  // Add more photographers as needed
];

const TrendingDesigners = () => {
  const itemsPerPage = 4; // Number of photographers per page
  const totalPages = Math.ceil(photographers.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePrevious = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentPhotographers = photographers.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section className="relative bg-gray-800 py-24 sm:py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-8 lg:px-10">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-5xl text-white">
            Trending Designers
          </h2>
          <button className="text-indigo-500 font-semibold hover:underline">
            View All
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 fade-in">
          {currentPhotographers.map((photographer, index) => (
            <div key={index} className="text-center flex flex-col items-center">
              <Image
                src={photographer.imageSrc || '/images/defaultPerson.jpg'}
                alt={photographer.name}
                width={200}
                height={200}
                className="rounded-lg object-cover shadow-md"
              />
              <h3 className="text-xl font-semibold text-white mt-4">
                {photographer.name}
              </h3>
              <p className="text-gray-400">
                {photographer.rating} stars ({photographer.reviews} reviews)
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center mt-8 space-x-4">
          <button
            onClick={handlePrevious}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-700 text-white rounded-md disabled:opacity-50"
          >
            &larr; Previous
          </button>
          {[...Array(totalPages)].map((_, pageIndex) => (
            <button
              key={pageIndex}
              onClick={() => setCurrentPage(pageIndex + 1)}
              className={`px-4 py-2 ${
                pageIndex + 1 === currentPage
                  ? 'bg-indigo-500 text-white'
                  : 'bg-gray-700 text-white'
              } rounded-md`}
            >
              {pageIndex + 1}
            </button>
          ))}
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-700 text-white rounded-md disabled:opacity-50"
          >
            Next &rarr;
          </button>
        </div>
      </div>
    </section>
  );
};

export default TrendingDesigners;
