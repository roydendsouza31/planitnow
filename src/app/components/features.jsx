"use client";
import React from 'react';

const FeaturesSection = () => {
  const features = [
    { title: 'Professional Vendors', description: 'Find the best vendors for your event.', icon: '🎉' },
    { title: 'Customizable Packages', description: 'Tailor your event to your needs.', icon: '🛠' },
    { title: '24/7 Support', description: 'We are here to help you anytime.', icon: '📞' },
  ];

  return (
    <section className="bg-gray-900 text-white py-24 sm:py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-8 lg:px-10 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-12">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="text-6xl mb-6">{feature.icon}</div>
              <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
