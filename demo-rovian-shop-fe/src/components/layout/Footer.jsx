import React from "react";
import { NavLink } from "react-router-dom";
import { Instagram, Twitter, Facebook, ArrowUpRight } from "lucide-react";

const Footer = ({ variant = "dark" }) => {
  const isLight = variant === "light";

  // Logic màu sắc linh hoạt
  const themeClass = isLight
    ? "bg-white text-black border-t border-gray-100"
    : "bg-black text-white border-t border-white/10";

  const textMuted = isLight ? "text-gray-500" : "text-gray-400";
  const borderClass = isLight ? "border-black" : "border-white";

  return (
    <footer
      className={`pt-20 pb-10 px-8 md:px-16 lg:px-24 transition-colors duration-500 ${themeClass}`}
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          {/* Brand Section - Chiếm 4 cột */}
          <div className="lg:col-span-4 space-y-8">
            <h2 className="text-4xl font-bold tracking-tighter uppercase italic font-serif">
              ROVIAN
            </h2>
            <p className={`text-sm leading-relaxed max-w-xs ${textMuted}`}>
              Crafting timeless elegance since 1994. Our timepieces represent
              the pinnacle of horological engineering and aesthetic perfection.
            </p>
            <div className="flex space-x-5">
              {[Instagram, Twitter, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="hover:opacity-50 transition-all">
                  <Icon size={20} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links - Chiếm 4 cột (Chia nhỏ 2 hàng) */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8">
            <div className="space-y-6">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.3em]">
                Explore
              </h4>
              <ul className="space-y-4 text-[13px] uppercase tracking-wider">
                {["Collections", "Store", "About", "Journal"].map((item) => (
                  <li key={item}>
                    <NavLink
                      to={`/${item.toLowerCase()}`}
                      className="hover:opacity-50 transition-opacity flex items-center group"
                    >
                      {item}{" "}
                      <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-all" />
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.3em]">
                Service
              </h4>
              <ul className="space-y-4 text-[13px] uppercase tracking-wider">
                {["Shipping", "Returns", "Warranty", "Faq"].map((item) => (
                  <li
                    key={item}
                    className="hover:opacity-50 cursor-pointer transition-opacity"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter Section - Chiếm 4 cột */}
          <div className="lg:col-span-4 space-y-6">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em]">
              Newsletter
            </h4>
            <p className={`text-sm ${textMuted}`}>
              Join our inner circle for exclusive previews.
            </p>
            <div className={`relative border-b ${borderClass} pb-2`}>
              <input
                type="email"
                placeholder="ENTER YOUR EMAIL"
                className="bg-transparent w-full text-[11px] outline-none placeholder:text-gray-500 tracking-widest uppercase"
              />
              <button className="absolute right-0 top-0 text-[10px] font-bold uppercase hover:italic transition-all">
                Submit
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className={`flex flex-col md:flex-row justify-between items-center pt-8 border-t ${isLight ? "border-gray-100" : "border-white/10"}`}
        >
          <span className="text-[9px] uppercase tracking-[0.3em] opacity-40">
            © 2026 ROVIAN Luxury Group. All rights reserved.
          </span>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <span className="text-[9px] uppercase tracking-[0.3em] opacity-40 cursor-pointer hover:opacity-100">
              Privacy Policy
            </span>
            <span className="text-[9px] uppercase tracking-[0.3em] opacity-40 cursor-pointer hover:opacity-100">
              Terms of Use
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
