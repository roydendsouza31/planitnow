"use client";
import React, { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const reviews = [
  {
    id: 1,
    name: "John Doe",
    text: "This venue was perfect for our wedding. The staff was amazing, and the setting was beautiful.",
    rating: 5,
  },
  {
    id: 2,
    name: "Jane Smith",
    text: "A fantastic experience from start to finish. Highly recommend for any special event!",
    rating: 4.5,
  },
  {
    id: 3,
    name: "Mike Johnson",
    text: "Great location and fantastic service. Made our event truly memorable.",
    rating: 4,
  },
  {
    id: 4,
    name: "Sarah Lee",
    text: "Exceptional service and a stunning venue. Worth every penny!",
    rating: 5,
  },
  {
    id: 5,
    name: "Emily Davis",
    text: "A beautiful setting with attentive staff. Perfect for any occasion.",
    rating: 4.5,
  },
  // Add more reviews as needed
];

const ReviewsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);

  const updateItemsToShow = () => {
    const width = window.innerWidth;
    if (width < 768) {
      setItemsToShow(1); // Small screens
    } else if (width < 1024) {
      setItemsToShow(2); // Medium screens
    } else {
      setItemsToShow(3); // Large screens
    }
  };

  useEffect(() => {
    updateItemsToShow();
    window.addEventListener("resize", updateItemsToShow);
    return () => window.removeEventListener("resize", updateItemsToShow);
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? reviews.length - itemsToShow : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev >= reviews.length - itemsToShow ? 0 : prev + 1
    );
  };

  return (
    <section className="bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-8 lg:px-10">
        <h2 className="text-4xl lg:text-6xl font-bold text-white mb-12 text-left">
          What Our Clients Say
        </h2>
        <div className="relative">
          <div className="flex overflow-hidden">
            {reviews
              .slice(currentIndex, currentIndex + itemsToShow)
              .map((review, idx) => (
                <div
                  key={review.id}
                  className={`flex-shrink-0 w-full ${itemsToShow === 1 ? 'px-4' : 'px-2'} ${
                    itemsToShow === 3 ? 'sm:w-1/2 md:w-1/3' : ''
                  } transition-transform duration-500 ease-in-out ${
                    idx === 1 && itemsToShow === 3 ? 'scale-105 z-10' : ''
                  } ${
                    itemsToShow === 3 && idx !== 1 ? 'opacity-50' : ''
                  }`}
                  style={{ transition: "transform 0.5s ease" }}
                >
                  <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center h-full">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {review.name}
                    </h3>
                    <p className="text-gray-300 mb-4">{review.text}</p>
                    <div className="flex justify-center text-yellow-400 mb-2">
                      {[...Array(Math.round(review.rating))].map((_, i) => (
                        <svg
                          key={i}
                          className="w-6 h-6"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2l2.39 7.36h7.76l-6.27 4.57 2.39 7.36-6.27-4.57-6.27 4.57 2.39-7.36-6.27-4.57h7.76z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
            style={{ zIndex: 10 }}
          >
            <FiChevronLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
            style={{ zIndex: 10 }}
          >
            <FiChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReviewsCarousel;
