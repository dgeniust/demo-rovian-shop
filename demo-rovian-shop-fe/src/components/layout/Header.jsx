import React from "react";
import { NavLink } from "react-router-dom";

const Header = ({ variant = "dark" }) => {
  // Cấu hình style theo variant
  const isShop = variant === "shop";

  const headerStyles = isShop
    ? "bg-white/90 backdrop-blur-md border-b border-gray-100 text-black"
    : "bg-black/50 backdrop-blur-sm text-white";

  const activeStyle = isShop
    ? "border-b border-black"
    : "border-b border-white";
  const hoverStyle = isShop ? "hover:text-gray-400" : "hover:opacity-60";

  const navItems = [
    { name: "Lookbook", path: "/lookbook" },
    { name: "Shop", path: "/shop" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full flex justify-between items-center px-8 py-6 z-50 transition-all ${headerStyles}`}
    >
      <NavLink to="/" className="text-3xl tracking-tighter font-bold uppercase">
        ROVIAN
      </NavLink>

      <nav className="hidden md:flex items-center space-x-8 text-[11px] font-medium uppercase tracking-[0.2em]">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `pb-1 transition-all ${hoverStyle} ${isActive ? activeStyle : "border-b border-transparent"}`
            }
          >
            {item.name}
          </NavLink>
        ))}
        <a
          href="https://instagram.com"
          className={`${hoverStyle} transition-all`}
        >
          Instagram
        </a>
      </nav>
    </header>
  );
};

export default Header;
