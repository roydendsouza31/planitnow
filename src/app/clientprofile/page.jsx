"use client";
import React from 'react';
import Image from 'next/image';

const ClientProfile = ({ imageSrc = '/images/defaultPerson.jpg' }) => {
  const reviews = [
    { id: 1, content: 'Great service, very professional.', rating: 5 },
    { id: 2, content: 'The event was well organized and smooth.', rating: 4 },
    { id: 3, content: 'Excellent experience, will use again.', rating: 5 }
  ];

  return (
    <section className="bg-gray-900 text-white py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-6">
          {/* Profile Picture */}
          <div className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40">
            <Image
              src={imageSrc || '/images/defaultPerson.jpg'} // Use default image if imageSrc is not provided
              alt="Client Profile Picture"
              width={160}
              height={160}
              className="rounded-full object-cover shadow-md"
            />
          </div>
          
          {/* Profile Info */}
          <div className="flex-1">
            <h1 className="text-3xl font-semibold mb-2">Client Name</h1>
            <p className="text-gray-400 mb-4">Client's Bio or Description</p>
            <div className="flex gap-4 mb-6">
              <div>
                <p className="text-lg font-semibold">Events Organized</p>
                <p className="text-gray-400">20</p>
              </div>
              <div>
                <p className="text-lg font-semibold">Reviews</p>
                <p className="text-gray-400">15</p>
              </div>
            </div>
            <button className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded-md mb-4">
              Edit Profile
            </button>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <button className="bg-gray-700 hover:bg-gray-800 text-white py-2 px-4 rounded-md flex items-center gap-2">
                  <span>📞</span> Contact
                </button>
                <button className="bg-gray-700 hover:bg-gray-800 text-white py-2 px-4 rounded-md flex items-center gap-2">
                  <span>✉️</span> Send Message
                </button>
              </div>
              <button className="bg-gray-700 hover:bg-gray-800 text-white py-2 px-4 rounded-md flex items-center gap-2">
                <span>📋</span> Service Requests
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Recent Events</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Event Cards */}
            {[1, 2, 3].map((event, index) => (
              <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Event {event}</h3>
                <p className="text-gray-400">Event description or details go here.</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Reviews Given</h2>
          <div className="space-y-6">
            {/* Review Cards */}
            {reviews.map((review) => (
              <div key={review.id} className="bg-gray-800 p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Review {review.id}</h3>
                <p className="text-gray-400 mb-2">{review.content}</p>
                <p className="text-yellow-400">Rating: {review.rating} ★</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientProfile;
