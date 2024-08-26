"use client";
import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative bg-gray-950 text-white py-24 sm:py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-8 lg:px-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
          Welcome to Plan It Now
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8">
          Your one-stop solution for all your event planning needs.
        </p>
        <button className="bg-indigo-500 text-white font-semibold py-4 px-8 rounded-lg shadow-md hover:bg-indigo-400 transition-colors">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
