import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="w-full bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-xl font-bold tracking-wide">ARKA</div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#" className="hover:text-orange-500 transition">
            Start Your Design
          </a>
          <a href="#" className="hover:text-orange-500 transition">
            All Products
          </a>
          <a href="#" className="hover:text-orange-500 transition">
            Inspiration
          </a>
          <a href="#" className="hover:text-orange-500 transition">
            About
          </a>
        </nav>

        <div className="text-sm font-medium cursor-pointer">Account</div>
      </div>
    </header>
  );
};

export default Header;
