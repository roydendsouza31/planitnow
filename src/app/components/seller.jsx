"use client";
import React, { useState } from 'react';
import Image from 'next/image';

const categories = [
    { name: 'Catering', imageSrc: '/images/catering.jpg' },
    { name: 'Decorations', imageSrc: '/images/decorator.jpg' },
    { name: 'Event Planning', imageSrc: '/images/planner.jpg' },
    { name: 'Music & Entertainment', imageSrc: '/images/music.jpg' },
    { name: 'Venue', imageSrc: '/images/venue.jpg' },
    { name: 'Photography', imageSrc: '/images/photographer.jpg' },
    { name: 'Videography', imageSrc: '/images/videographer.jpg' },
    { name: 'Makeup Artists', imageSrc: '/images/makeup.jpg' },
    { name: 'Designers', imageSrc: '/images/designer.jpg' },
    { name: 'Florists', imageSrc: '/images/florist.jpg' },
];

const SellerCategories = () => {
  const itemsPerPage = 4; // Number of categories per page
  const totalPages = Math.ceil(categories.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePrevious = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentCategories = categories.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section className="relative bg-gray-800 py-24 sm:py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-8 lg:px-10">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-5xl text-white">
            Popular Seller Categories
          </h2>
          <button className="text-indigo-500 font-semibold hover:underline">
            View All
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {currentCategories.map((category, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="relative w-40 h-40">
                <Image
                  src={category.imageSrc || '/images/defaultCategory.jpg'}
                  alt={category.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold text-white mt-4">
                {category.name}
              </h3>
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

export default SellerCategories;
