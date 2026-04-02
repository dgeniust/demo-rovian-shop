import React from "react";
import { NavLink } from "react-router-dom";
import { Instagram, Twitter, Facebook, ArrowUpRight } from "lucide-react";

const Footer = () => {
  // Tông màu Masculine Luxury (Đen - Xám khói - Trắng)
  const themeClass = "bg-[#0a0a0a] text-zinc-300 border-t border-zinc-800";
  const textMuted = "text-zinc-500";
  const borderClass = "border-zinc-800";

  return (
    <footer
      className={`pt-24 pb-12 px-8 md:px-16 lg:px-24 transition-colors duration-500 ${themeClass}`}
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          {/* Brand Section */}
          <div className="lg:col-span-4 space-y-8">
            <h2 className="text-3xl font-serif font-light tracking-[0.2em] uppercase italic text-white">
              ROVIAN
            </h2>
            <p
              className={`text-sm md:text-base leading-relaxed font-medium text-zinc-400 ${textMuted}`}
            >
              Crafting timeless elegance since 2026. Our pieces represent the
              intersection of mechanical precision and absolute masculinity.
            </p>
            <div className="flex space-x-6">
              {[Instagram, Twitter, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="text-zinc-600 hover:text-white transition-all duration-300"
                >
                  <Icon size={18} strokeWidth={1.2} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8">
            <div className="space-y-8">
              <h4 className="text-sm md:text-base leading-relaxed tracking-[0.2em] md:tracking-[0.3em] text-zinc-400 font-medium whitespace-nowrap uppercase">
                Explore
              </h4>
              <ul className="space-y-5 ">
                {["Collections", "Store", "About", "Journal"].map((item) => (
                  <li key={item} className="flex justify-center">
                    <NavLink
                      to={`/${item.toLowerCase()}`}
                      className="hover:text-white transition-colors flex items-center group text-sm md:text-base leading-relaxed font-medium text-zinc-400"
                    >
                      {item}
                      <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-8">
              <h4 className="text-sm md:text-base leading-relaxed tracking-[0.2em] md:tracking-[0.3em] text-zinc-400 font-medium whitespace-nowrap uppercase">
                Service
              </h4>
              <ul className="space-y-5">
                {["Shipping", "Returns", "Warranty", "Faq"].map((item) => (
                  <li
                    key={item}
                    className="flex justify-center hover:text-white transition-colors flex items-center group text-sm md:text-base leading-relaxed font-medium text-zinc-400"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="lg:col-span-4 space-y-8">
            <h4 className="text-sm md:text-base leading-relaxed tracking-[0.2em] md:tracking-[0.3em] text-zinc-400 font-medium whitespace-nowrap uppercase">
              Newsletter
            </h4>
            <p
              className={` text-sm md:text-base leading-relaxed font-medium text-zinc-400 ${textMuted}`}
            >
              Join our inner circle for exclusive previews and atelier updates.
            </p>
            <div className={`relative border-b ${borderClass} pb-3 group`}>
              <input
                type="email"
                placeholder="ENTER YOUR EMAIL"
                className="bg-transparent w-full text-[10px] outline-none placeholder:text-zinc-600 tracking-widest uppercase text-white"
              />
              <button className="absolute right-0 top-0 text-sm md:text-base leading-relaxed tracking-[0.2em] md:tracking-[0.3em] text-zinc-400 font-medium whitespace-nowrap uppercase hover:text-white hover:italic transition-all duration-300 cursor-pointer">
                Submit
              </button>
              {/* Line effect khi focus */}
              <div className="absolute bottom-[-1px] left-0 w-0 h-[1px] bg-white group-focus-within:w-full transition-all duration-500"></div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className={`flex flex-col md:flex-row justify-between items-center pt-10 border-t border-zinc-900`}
        >
          <span className="text-sm md:text-base leading-relaxed font-light text-zinc-600">
            © 2026 ROVIAN Luxury Group. All rights reserved.
          </span>
          <div className="flex space-x-10 mt-6 md:mt-0">
            {["Privacy Policy", "Terms of Use"].map((text) => (
              <span
                key={text}
                className="text-sm md:text-base leading-relaxed font-light text-zinc-600 cursor-pointer hover:text-white transition-colors"
              >
                {text}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
