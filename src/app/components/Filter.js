import React from 'react';

const Filter = () => {
  return (
    <section className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-8 lg:px-10">
        <div className="text-center">
          <h1 className="text-7xl font-bold text-white pt-10 sm:text-8xl">
            Welcome to PlanItNow
          </h1>
          <p className="mt-8 text-3xl leading-10 text-gray-300">
            Your one-stop solution for all your event planning needs.
          </p>

          <div className="mt-24 flex justify-center items-center space-x-12">
            {/* Dropdown */}
            <div className="flex-shrink-0">
              <select className="bg-white/10 text-black font-semibold py-6 px-8 rounded-lg shadow-md ring-1 ring-white/10 focus:ring-2 focus:ring-indigo-500 text-2xl sm:text-lg md:text-xl lg:text-2xl">
                <option value="photographers">Photographers/Videographers</option>
                <option value="suppliers">Decorators</option>
                <option value="venue-planners">Venue Planners</option>
                <option value="aackup-artists">Mackup Artists</option>
                <option value="designers">Designers</option>
              </select>
            </div>

            {/* Search Button */}
            <div>
              <button
                type="button"
                className="bg-indigo-500 text-white font-semibold py-6 px-12 rounded-lg shadow-md hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 text-2xl sm:text-lg md:text-xl lg:text-2xl"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="absolute inset-0 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
        />
      </div>
    </section>
  );
};

export default Filter;
