import React from "react";

// Bạn có thể thay thế các URL ảnh này bằng ảnh sản phẩm thực tế của ROVIAN
const images = {
  main: "https://rolex.dafc.com.vn/rolex/wp-content/uploads/model/accessories/desk-clocks/packshot/rolex-accessories-c909010ln-0001-packshot.webp", // Ảnh chính, lớn (ví dụ: Rolex dây kim loại)
  sideTop:
    "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?q=80&w=600&auto=format&fit=crop",
  sideBottom:
    "https://rolex.dafc.com.vn/rolex/wp-content/uploads/model/accessories/cufflinks/packshot/rolex-accessories-a1039-packshot.webp", // Ảnh phụ dưới (ví dụ: Cận cảnh bộ máy hoặc hộp)
};

export default function RovianHeroSection() {
  return (
    <section className="bg-white text-black py-16 md:py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
        {/* --- KHỐI TEXT (BENTO CELL 1 - Chiếm 5/12 cột) --- */}
        <div className="md:col-span-5 flex flex-col justify-center items-start p-8 lg:p-12 bg-gray-50 rounded-2xl border border-gray-100">
          {/* Tên thương hiệu nhỏ, tinh tế */}
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-gray-500 mb-4">
            ROVIAN Luxury Timepieces
          </span>

          {/* SLOGAN CHÍNH (Tiếng Anh) */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif leading-[1.1] uppercase tracking-tighter mb-6">
            Timeless
            <br />
            Elegance,
            <br />
            Redefined.
          </h1>

          {/* Mô tả phụ */}
          <p className="text-base md:text-lg text-gray-600 max-w-md mb-10 leading-relaxed">
            Discover our curated collection of masterfully crafted watches,
            where precision meets unparalleled sophistication.
          </p>

          {/* NÚT BẤM (Tiếng Anh) - Phong cách tối giản */}
          <a
            href="#collection"
            className="group inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-full text-sm uppercase font-semibold tracking-wider transition-all duration-300 hover:bg-gray-800 hover:gap-4"
          >
            Explore Now
            {/* Biểu tượng mũi tên nhỏ */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
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

        {/* --- KHỐI ẢNH CHÍNH (BENTO CELL 2 - Chiếm 4/12 cột) --- */}
        <div className="md:col-span-4 relative overflow-hidden rounded-2xl group border border-gray-100 shadow-sm">
          <img
            src={images.main}
            alt="ROVIAN Featured Watch"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Overlay gradient nhẹ để text nổi bật nếu có */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          {/* Tag nhỏ góc ảnh */}
          <span className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm text-black text-[10px] uppercase font-bold px-3 py-1 rounded-full tracking-wider">
            Signature
          </span>
        </div>

        {/* --- KHỐI 2 ẢNH PHỤ (BENTO CELL 3 - Chiếm 3/12 cột) --- */}
        <div className="md:col-span-3 grid grid-rows-2 gap-6 lg:gap-8">
          {/* Ảnh phụ trên */}
          <div className="relative overflow-hidden rounded-2xl group border border-gray-100">
            <img
              src={images.sideTop}
              alt="ROVIAN Heritage Collection"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/50 to-transparent">
              <p className="text-white text-xs uppercase tracking-widest font-medium">
                Heritage
              </p>
            </div>
          </div>

          {/* Ảnh phụ dưới */}
          <div className="relative overflow-hidden rounded-2xl group border border-gray-100">
            <img
              src={images.sideBottom}
              alt="ROVIAN Craftsmanship Detail"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 hover:grayscale-0 grayscale"
            />
            <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/50 to-transparent">
              <p className="text-white text-xs uppercase tracking-widest font-medium">
                Craftsmanship
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
