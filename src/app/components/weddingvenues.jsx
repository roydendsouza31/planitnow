"use client";
import React, { useState } from "react";

const venues = [
  { name: "The Grand Venue", location: "New York, NY", imageSrc: "", description: "An elegant venue perfect for grand weddings." },
  { name: "Sunset Pavilion", location: "Los Angeles, CA", imageSrc: "", description: "Enjoy stunning sunsets at this open-air venue." },
  { name: "Riverside Manor", location: "Chicago, IL", imageSrc: "", description: "A charming venue by the river with beautiful views." },
  { name: "City Lights Hall", location: "San Francisco, CA", imageSrc: "", description: "Modern venue with city skyline views and sophisticated decor." },
  { name: "Country Estate", location: "Austin, TX", imageSrc: "", description: "Rustic venue with spacious outdoor areas and elegant interior." },
  { name: "Coastal Retreat", location: "Miami, FL", imageSrc: "", description: "Beachside venue with a relaxed, tropical atmosphere." },
  // Add more venues as needed
];

const WeddingVenue = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3; // Number of venues per page
  const totalPages = Math.ceil(venues.length / itemsPerPage);

  const handlePrevious = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleNext = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentVenues = venues.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section className="bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-8 lg:px-10">
        <h2 className="text-4xl lg:text-6xl text-white mb-12">
          Wedding Venues
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentVenues.map((venue, index) => (
            <div key={index} className="relative bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <img src={venue.imageSrc || "/images/defaultwedding.jpg"} alt={venue.name} className="w-full h-64 object-cover rounded-t-lg" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-white">{venue.name}</h3>
                <p className="text-sm text-gray-400">{venue.location}</p>
                <p className="text-gray-300 mt-4">{venue.description}</p>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-50 flex items-center justify-center transition-opacity duration-300">
                <button className="text-white font-semibold py-2 px-4 bg-indigo-500 rounded-md">View Details</button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center mt-12 space-x-4">
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
              className={`px-4 py-2 ${pageIndex + 1 === currentPage ? 'bg-indigo-500 text-white' : 'bg-gray-700 text-white'} rounded-md`}
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

export default WeddingVenue;
