import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
<footer className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="#" className="hover:underline">Plan it now</a>. All Rights Reserved.</span>
    </div>
</footer>
  );
};

export default Footer;