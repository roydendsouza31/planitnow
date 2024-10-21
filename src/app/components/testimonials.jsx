"use client";
import React from 'react';

const testimonials = [
  { name: 'Jane Doe', feedback: 'Plan It Now made my wedding a dream come true!' },
  { name: 'John Smith', feedback: 'Their service is top-notch and highly professional.' },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10">What Our Clients Say</h2>
        <div className="flex flex-wrap justify-center">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="bg-gray-900 rounded-lg shadow-lg p-6 text-center">
                <p className="text-lg italic mb-4">&quot;{testimonial.feedback}&quot;</p>
                <h3 className="text-2xl font-semibold">{testimonial.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
