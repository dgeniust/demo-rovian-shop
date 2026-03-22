import React from "react";

const images = {
  main: "https://rolex.dafc.com.vn/rolex/wp-content/uploads/model/accessories/desk-clocks/packshot/rolex-accessories-c909010ln-0001-packshot.webp",
  sideTop:
    "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?q=80&w=600&auto=format&fit=crop",
  sideBottom:
    "https://rolex.dafc.com.vn/rolex/wp-content/uploads/model/accessories/cufflinks/packshot/rolex-accessories-a1039-packshot.webp",
};

export default function RovianHeroSection() {
  return (
    <section className="bg-[#fffafb] text-black py-16 md:py-24 lg:py-28 mt-0 md:mt-[-110px] px-4 sm:px-8 md:px-12 lg:px-20 border-b border-rose-100 overflow-hidden">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
        {/* --- KHỐI TEXT (BENTO CELL 1) --- */}
        <div className="md:col-span-5 flex flex-col justify-center items-center p-6 sm:p-8 lg:p-12 bg-rose-50 rounded-2xl border border-rose-100 shadow-inner">
          <span className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.2em] md:tracking-[0.3em] text-rose-500 mb-4 md:mb-5">
            ROVIAN Luxury Atelier
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light font-serif leading-[1.1] uppercase mb-6 text-stone-900 italic break-words w-full">
            Timeless
            <span className="block md:inline lg:block">
              <span className="text-rose-300 not-italic"> Elegance,</span>
            </span>
            <span className="block">Redefined.</span>
          </h1>

          <p className="text-sm md:text-base lg:text-lg text-stone-600 max-w-md mb-8 md:mb-12 leading-relaxed font-light">
            Discover our curated collection of masterfully crafted watches,
            where Swiss precision meets unparalleled sophistication.
          </p>

          <a
            href="#collection"
            className="group inline-flex items-center gap-3 bg-black text-white px-6 md:px-8 py-3 md:py-4 rounded-full text-[10px] md:text-xs uppercase font-bold tracking-wider transition-all duration-300 hover:bg-rose-600 shadow-lg shadow-rose-100 hover:gap-4"
          >
            Explore Now
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </a>
        </div>

        {/* --- KHỐI ẢNH CHÍNH (BENTO CELL 2) --- */}
        <div className="md:col-span-4 relative overflow-hidden rounded-2xl group border border-rose-100 shadow-sm min-h-[350px] md:min-h-full">
          <img
            src={images.main}
            alt="ROVIAN Featured Watch"
            className="w-full h-full object-cover grayscale-[30%] transition-transform duration-700 group-hover:scale-105 group-hover:grayscale-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-rose-900/10 to-transparent"></div>
          <span className="absolute top-4 right-4 bg-white text-rose-800 text-[8px] md:text-[9px] uppercase font-bold px-3 py-1.5 rounded-full tracking-wider shadow-md">
            Signature Rose Gold
          </span>
        </div>

        {/* --- KHỐI 2 ẢNH PHỤ (BENTO CELL 3) --- */}
        <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-1 grid-rows-1 md:grid-rows-2 gap-4 md:gap-6 lg:gap-8">
          <div className="relative overflow-hidden rounded-2xl group border border-rose-100 shadow-inner bg-rose-50 h-[200px] md:h-auto">
            <img
              src={images.sideTop}
              alt="ROVIAN Heritage Collection"
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 grayscale-[60%] hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-x-0 bottom-0 p-3 md:p-5 bg-gradient-to-t from-rose-950/40 to-transparent">
              <p className="text-white text-[8px] md:text-[10px] uppercase tracking-[0.2em] font-medium border-l border-rose-300 pl-3">
                Heritage
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl group border border-rose-100 shadow-inner bg-rose-50 h-[200px] md:h-auto">
            <img
              src={images.sideBottom}
              alt="ROVIAN Craftsmanship Detail"
              className="w-full h-full object-cover transition-transform duration-700 opacity-80 group-hover:opacity-100 grayscale hover:grayscale-0"
            />
            <div className="absolute inset-x-0 bottom-0 p-3 md:p-5 bg-gradient-to-t from-rose-950/40 to-transparent">
              <p className="text-white text-[8px] md:text-[10px] uppercase tracking-[0.2em] font-medium border-l border-rose-300 pl-3">
                Craftsmanship
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
