import React from "react";
import { NavLink } from "react-router-dom";
import { Instagram, Twitter, Facebook, ArrowUpRight } from "lucide-react";

const Footer = () => {
  // Tông màu cố định theo style Sakura Atelier (Trắng hồng - Text xám đá - Nhấn hồng Rose)
  const themeClass = "bg-[#fffafb] text-stone-900 border-t border-rose-100";
  const textMuted = "text-stone-500";
  const borderClass = "border-rose-200";

  return (
    <footer
      className={`pt-24 pb-12 px-8 md:px-16 lg:px-24 transition-colors duration-500 ${themeClass}`}
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          {/* Brand Section */}
          <div className="lg:col-span-4 space-y-8">
            <h2 className="text-3xl font-serif font-light tracking-[0.2em] uppercase italic text-stone-900">
              ROVIAN
            </h2>
            <p
              className={`text-[13px] leading-relaxed max-w-xs font-light ${textMuted}`}
            >
              Crafting timeless elegance since 1994. Our pieces represent the
              intersection of contemporary silhouettes and heritage
              craftsmanship.
            </p>
            <div className="flex space-x-6">
              {[Instagram, Twitter, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="text-stone-400 hover:text-rose-400 transition-all duration-300"
                >
                  <Icon size={18} strokeWidth={1.2} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8">
            <div className="space-y-8">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-rose-400">
                Explore
              </h4>
              <ul className="space-y-5 text-[11px] uppercase tracking-[0.2em] font-medium">
                {["Collections", "Store", "About", "Journal"].map((item) => (
                  <li key={item} className="flex justify-center">
                    <NavLink
                      to={`/${item.toLowerCase()}`}
                      className="text-stone-600 hover:text-rose-500 transition-colors flex items-center group"
                    >
                      {item}
                      <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-8">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-rose-400">
                Service
              </h4>
              <ul className="space-y-5 text-[11px] uppercase tracking-[0.2em] font-medium text-stone-600">
                {["Shipping", "Returns", "Warranty", "Faq"].map((item) => (
                  <li
                    key={item}
                    className="hover:text-rose-500 cursor-pointer transition-colors"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="lg:col-span-4 space-y-8">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-rose-400">
              Newsletter
            </h4>
            <p className={`text-[13px] font-light ${textMuted}`}>
              Join our inner circle for exclusive previews and atelier updates.
            </p>
            <div className={`relative border-b ${borderClass} pb-3 group`}>
              <input
                type="email"
                placeholder="ENTER YOUR EMAIL"
                className="bg-transparent w-full text-[10px] outline-none placeholder:text-stone-300 tracking-widest uppercase text-stone-800"
              />
              <button className="absolute right-0 top-0 text-[10px] font-bold uppercase text-stone-400 hover:text-rose-500 hover:italic transition-all duration-300">
                Submit
              </button>
              {/* Line effect khi focus */}
              <div className="absolute bottom-[-1px] left-0 w-0 h-[1px] bg-rose-400 group-focus-within:w-full transition-all duration-500"></div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className={`flex flex-col md:flex-row justify-between items-center pt-10 border-t border-rose-100`}
        >
          <span className="text-[9px] uppercase tracking-[0.4em] text-stone-400 font-light">
            © 2026 ROVIAN Luxury Group. All rights reserved.
          </span>
          <div className="flex space-x-10 mt-6 md:mt-0">
            {["Privacy Policy", "Terms of Use"].map((text) => (
              <span
                key={text}
                className="text-[9px] uppercase tracking-[0.4em] text-stone-400 cursor-pointer hover:text-rose-400 transition-colors font-light"
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
