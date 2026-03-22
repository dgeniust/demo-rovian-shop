import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import blackLogo from "../../assets/blackHorizontal_final.png";
import whiteLogo from "../../assets/whiteHorizontal_final.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const bgColor = isScrolled
    ? "bg-[#f8a5c2]/40 backdrop-blur-lg"
    : "bg-black/1 backdrop-blur-md";
  const textColor = isScrolled ? "text-white" : "text-black";
  const borderStyle = isScrolled ? "border-white/10" : "border-transparent";

  const logoSrc = isScrolled ? whiteLogo : blackLogo;

  return (
    <header
      className={`fixed top-0 left-0 w-full flex justify-between items-center py-5 px-8 z-50 ${bgColor} ${textColor} ${borderStyle} border-b
        transition-all duration-500 ease-in-out`}
    >
      <NavLink to="/" className="flex items-center">
        <img
          src={logoSrc}
          alt="ROVIAN Logo"
          className="h-6 md:h-10 object-contain transition-all duration-500 "
        />
      </NavLink>

      <nav className="hidden md:flex items-center space-x-10 text-[14px] font-medium uppercase tracking-[0.3em]">
        {[
          { name: "Lookbook", path: "/" },
          { name: "Shop", path: "/shop" },
          { name: "About", path: "/about" },
          { name: "Contact", path: "/contact" },
        ].map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `pb-1 transition-colors duration-200 hover:opacity-60 
              ${textColor}
              ${isActive ? (isScrolled ? "border-b border-white" : "border-b border-black") : "border-b border-transparent"}`
            }
          >
            {item.name}
          </NavLink>
        ))}

        <a
          href="https://instagram.com"
          className={`hover:opacity-60 transition-colors duration-200 border-b border-transparent pb-1 ${textColor}`}
        >
          Instagram
        </a>
      </nav>

      {/* Mobile Menu Icon */}
      <div className="flex flex-col space-y-1.5 md:hidden cursor-pointer">
        <div
          className={`w-6 h-[1px] ${isScrolled ? "bg-white" : "bg-black"} transition-colors`}
        ></div>
        <div
          className={`w-6 h-[1px] ${isScrolled ? "bg-white" : "bg-black"} transition-colors`}
        ></div>
      </div>
    </header>
  );
};

export default Header;
