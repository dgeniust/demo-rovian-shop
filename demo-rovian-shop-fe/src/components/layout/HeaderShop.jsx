import React from "react";

const HeaderShop = () => {
  return (
    <header className="fixed top-0 left-0 w-full flex justify-between items-center px-8 py-6 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 text-black">
      {/* Logo */}
      <div className="text-3xl tracking-tighter font-bold uppercase">
        ROVIAN
      </div>

      {/* Navigation */}
      <nav className="hidden md:flex items-center space-x-8 text-[11px] font-medium uppercase tracking-[0.2em]">
        <a href="#" className="border-b border-black pb-1 transition-all">
          Lookbook
        </a>
        <a href="#" className="hover:text-gray-400 transition-colors">
          Shop
        </a>
        <a href="#" className="hover:text-gray-400 transition-colors">
          About
        </a>
        <a href="#" className="hover:text-gray-400 transition-colors">
          Contact
        </a>
        <a href="#" className="hover:text-gray-400 transition-colors">
          Instagram
        </a>
      </nav>
    </header>
  );
};

export default HeaderShop;
