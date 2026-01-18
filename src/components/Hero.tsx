import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="w-full bg-[#F5B24A]">
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <div>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight text-black">
            Fast and easy custom boxes your customers will love
          </h1>

          <p className="mt-6 text-black/80 max-w-md">
            Fastest turnaround. Best prices instantly. Dieline design help
            available.
          </p>

          <button className="mt-8 inline-block bg-black text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-gray-800 transition">
            Start your design
          </button>
        </div>

        {/* Right images */}
        <div className="relative flex justify-center md:justify-end">
          <div className="grid grid-cols-2 gap-4">
            <div className="w-32 h-32 bg-white rounded shadow-md" />
            <div className="w-32 h-32 bg-white rounded shadow-md" />
            <div className="w-32 h-32 bg-white rounded shadow-md" />
            <div className="w-32 h-32 bg-white rounded shadow-md" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
