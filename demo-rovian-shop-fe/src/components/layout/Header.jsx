import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import blackLogo from "../../assets/blackHorizontal_final.png";
import whiteLogo from "../../assets/whiteHorizontal_final.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Khóa cuộn trang khi mở menu
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const navLinks = [
    { name: "Lookbook", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const bgColor = isScrolled
    ? "bg-rose-200  backdrop-blur-lg" // Tăng độ đậm khi scroll
    : "bg-transparent backdrop-blur-md";

  // Khi mở menu mobile, ép màu text về trắng để nổi bật trên nền hồng
  const textColor = isOpen || isScrolled ? "text-white" : "text-black";
  const logoSrc = isOpen || isScrolled ? whiteLogo : blackLogo;

  return (
    <header
      className={`fixed top-0 left-0 w-full flex justify-between items-center py-5 px-8 z-[100] transition-all duration-500 ${bgColor} ${textColor}`}
    >
      {/* Logo - Luôn nằm trên lớp phủ */}
      <NavLink
        to="/"
        className="flex items-center z-[110]"
        onClick={() => setIsOpen(false)}
      >
        <img
          src={logoSrc}
          alt="ROVIAN Logo"
          className="h-7 md:h-10 object-contain"
        />
      </NavLink>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center space-x-10 text-[14px] font-medium uppercase tracking-[0.3em]">
        {navLinks.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `pb-1 transition-opacity hover:opacity-60 ${isActive ? (isScrolled ? "border-b border-white" : "border-b border-black") : ""}`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </nav>

      {/* Mobile Menu Icon - Tăng Z-index để nhấn được */}
      <div
        className="flex flex-col space-y-1.5 md:hidden cursor-pointer z-[110] p-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div
          className={`w-6 h-[2px] transition-all duration-300 ${isOpen || isScrolled ? "bg-white" : "bg-black"} ${isOpen ? "rotate-45 translate-y-[8px]" : ""}`}
        ></div>
        <div
          className={`w-6 h-[2px] transition-all duration-300 ${isOpen || isScrolled ? "bg-white" : "bg-black"} ${isOpen ? "-rotate-45 -translate-y-[0px]" : ""}`}
        ></div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }} // Cho trượt từ trên xuống thay vì từ phải sang để tránh lỗi chiều rộng
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
            className="fixed inset-0 w-full h-screen bg-[#f8a5c2] flex flex-col items-center justify-center z-[105] md:hidden"
          >
            <div className="flex flex-col items-center space-y-8">
              {navLinks.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <NavLink
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className="text-white text-3xl uppercase tracking-[0.3em] font-light hover:text-black transition-colors"
                  >
                    {item.name}
                  </NavLink>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="pt-10"
              >
                <a
                  href="https://instagram.com"
                  className="text-white/80 text-xs uppercase tracking-[0.5em] border-b border-white/30 pb-1"
                >
                  Instagram
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
