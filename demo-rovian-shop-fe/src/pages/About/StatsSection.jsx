import React from "react";
import { ArrowUpRight } from "lucide-react";

const StatsSection = () => {
  const avatars = [
    "https://i.pravatar.cc/150?u=11",
    "https://i.pravatar.cc/150?u=12",
    "https://i.pravatar.cc/150?u=13",
    "https://i.pravatar.cc/150?u=14",
  ];

  return (
    <section className="bg-white py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* BLOCK 1: MAIN STATEMENT (6 columns) */}
        <div className="md:col-span-12 lg:col-span-7 bg-black text-white p-12 md:p-20 rounded-[50px] flex flex-col justify-between min-h-[500px] relative overflow-hidden group">
          <div className="relative z-10">
            <div className="flex items-center space-x-3 mb-12">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold">
                The Rovian Legacy
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-light leading-[0.9] tracking-tighter uppercase font-serif italic">
              Excellence <br />
              <span className="font-bold not-italic">In Every Tick.</span>
            </h2>
          </div>

          <div className="relative z-10 mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
            <p className="text-gray-400 text-xs leading-relaxed tracking-wide uppercase">
              Beyond timekeeping, we craft heritage. Our workshop combines
              centuries-old techniques with future-forward engineering.
            </p>
            <div className="flex justify-end">
              <div className="w-24 h-24 border border-white/20 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500 cursor-pointer">
                <ArrowUpRight size={32} strokeWidth={1} />
              </div>
            </div>
          </div>
          {/* Decorative element */}
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
        </div>

        {/* BLOCK 2: STATS SMALL (5 columns) */}
        <div className="md:col-span-6 lg:col-span-5 grid grid-cols-1 gap-6">
          {/* Sub-block: Clients */}
          <div className="bg-[#f2f2f2] p-10 rounded-[50px] flex flex-col justify-between group hover:bg-[#e5e5e5] transition-colors">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-6xl font-bold tracking-tighter italic font-serif">
                  1450+
                </h3>
                <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 mt-2">
                  Distinguished Clients
                </p>
              </div>
              <div className="flex -space-x-4">
                {avatars.map((url, i) => (
                  <img
                    key={i}
                    src={url}
                    className="w-12 h-12 rounded-full border-4 border-[#f2f2f2] grayscale group-hover:grayscale-0 transition-all"
                    alt="User"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Sub-block: Grid 2 con số nhỏ */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white border border-gray-100 p-10 rounded-[50px] hover:border-black transition-all duration-500">
              <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-4 font-bold">
                Products
              </p>
              <h4 className="text-4xl font-bold tracking-tighter">300+</h4>
            </div>
            <div className="bg-black text-white p-10 rounded-[50px] flex flex-col justify-center items-center text-center">
              <h4 className="text-4xl font-bold tracking-tighter">20+</h4>
              <p className="text-[8px] uppercase tracking-[0.2em] opacity-60 mt-2 font-bold">
                Boutiques
              </p>
            </div>
          </div>
        </div>

        {/* BLOCK 3: FULL WIDTH IMAGE WITH OVERLAY TEXT (12 columns) */}
        <div className="md:col-span-12 relative h-[450px] rounded-[50px] overflow-hidden group">
          <img
            src="https://rolex.dafc.com.vn/rolex/wp-content/uploads/2024/06/rolex-deepsea-watches-dafc-banner-2048x747.jpg"
            className="w-full h-full object-cover grayscale transition-transform duration-1000 group-hover:scale-110"
            alt="Craft"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-12">
            <div className="flex flex-col md:flex-row md:items-center justify-between w-full">
              <p className="text-white/70 text-[10px] uppercase tracking-[0.5em] font-bold">
                Precision • Tradition • Luxury
              </p>
              <h3 className="text-white text-2xl md:text-3xl font-light tracking-widest uppercase mt-4 md:mt-0">
                The Masterpiece Collection
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
