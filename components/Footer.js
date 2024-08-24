import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 text-center md:text-left">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm md:text-base">
            &copy; {currentYear} PlanItNow All rights reserved.
          </p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
