import React from 'react';
import Image from 'next/image';

const Seller = () => {
  const seller = [
    { title: 'Photographers/Videographers', imageSrc: '/images/photographer.jpg' },
    { title: 'Decorators', imageSrc: '/images/decorator.jpg' },
    { title: 'Venue Planners', imageSrc: '/images/planner.jpg' },
    { title: 'Makeup Artists', imageSrc: '/images/makeup.jpg' },
    { title: 'Designers', imageSrc: '/images/designer.jpg' },
  ];

  return (
    <section className="relative bg-gray-800 py-16 sm:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="text-left mb-8">
          <h2 className="text-5xl font-bold text-white">
            Seller Categories
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-12">
          {seller.map((supplier, index) => (
            <div key={index} className="flex flex-col justify-center items-center text-center">
              <div className="flex items-center justify-center mb-4">
                <Image
                  src={supplier.imageSrc}
                  alt={supplier.title}
                  width={160} // Adjust according to your requirements
                  height={160} // Adjust according to your requirements
                  className="rounded-full justify-between object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-white">
                {supplier.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Seller;
