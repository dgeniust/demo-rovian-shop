import React from "react";

// Thay thế các URL ảnh này bằng ảnh sản phẩm thực tế của ROVIAN
const images = {
  main: "https://rolex.dafc.com.vn/rolex/wp-content/uploads/model/accessories/desk-clocks/packshot/rolex-accessories-c909010ln-0001-packshot.webp",
  sideTop:
    "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?q=80&w=600&auto=format&fit=crop",
  sideBottom:
    "https://rolex.dafc.com.vn/rolex/wp-content/uploads/model/accessories/cufflinks/packshot/rolex-accessories-a1039-packshot.webp",
};

export default function RovianHeroSection() {
  return (
    // Đổi bg-white thành nền trắng hồng nhẹ (#fffafb)
    <section className="bg-[#fffafb] text-black py-16 mt-[-110px] md:py-24 px-6 md:px-12 lg:px-20 border-b border-rose-100">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
        {/* --- KHỐI TEXT (BENTO CELL 1 - Chiếm 5/12 cột) --- */}
        {/* Đổi bg-gray-50 thành bg-rose-50 (hồng phấn cực nhạt) và border-gray-100 thành border-rose-100 */}
        <div className="md:col-span-5 flex flex-col justify-center items-start p-8 lg:p-12 bg-rose-50 rounded-2xl border border-rose-100 shadow-inner">
          {/* Tên thương hiệu: Đổi text-gray-500 sang tone hồng Rose trung tính */}
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-rose-500 mb-5">
            ROVIAN Luxury Atelier
          </span>

          {/* SLOGAN CHÍNH: Giữ serif italic cho sự sang trọng, đổi text thành stone-900 (xám đá đậm) */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light font-serif leading-[1.1] uppercase tracking-tighter mb-6 text-stone-900 italic">
            Timeless
            <br />
            <span className="text-rose-300 not-italic">Elegance,</span>
            <br />
            Redefined.
          </h1>

          {/* Mô tả phụ: Đổi text-gray-600 sang text-stone-600 */}
          <p className="text-base md:text-lg text-stone-600 max-w-md mb-12 leading-relaxed font-light">
            Discover our curated collection of masterfully crafted watches,
            where Swiss precision meets unparalleled sophistication.
          </p>

          {/* NÚT BẤM (Tiếng Anh) - Chuyển sang tone hồng đậm hoặc đen với hiệu ứng Rose */}
          <a
            href="#collection"
            // Thay đổi màu nền hover từ đen sang hồng Rose, shadow ấm
            className="group inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-full text-xs uppercase font-bold tracking-wider transition-all duration-300 hover:bg-rose-600 shadow-lg shadow-rose-100 hover:gap-4"
          >
            Explore Now
            {/* Biểu tượng mũi tên giữ nguyên, thay đổi stroke mỏng hơn */}
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

        {/* --- KHỐI ẢNH CHÍNH (BENTO CELL 2 - Chiếm 4/12 cột) --- */}
        {/* Đổi border-gray-100 thành border-rose-100 */}
        <div className="md:col-span-4 relative overflow-hidden rounded-2xl group border border-rose-100 shadow-sm">
          <img
            src={images.main}
            alt="ROVIAN Featured Watch"
            // Grayscale nhẹ để ấm hơn, không quá lạnh
            className="w-full h-full object-cover grayscale-[30%] transition-transform duration-700 group-hover:scale-105 group-hover:grayscale-0"
          />
          {/* Overlay gradient chuyển sang màu ấm nhẹ */}
          <div className="absolute inset-0 bg-gradient-to-t from-rose-900/10 to-transparent"></div>
          {/* Tag nhỏ: Đổi màu text phụ sang hồng phấn */}
          <span className="absolute top-4 right-4 bg-white text-rose-800 text-[9px] uppercase font-bold px-3 py-1.5 rounded-full tracking-wider font-medium shadow-md">
            Signature Rose Gold
          </span>
        </div>

        {/* --- KHỐI 2 ẢNH PHỤ (BENTO CELL 3 - Chiếm 3/12 cột) --- */}
        <div className="md:col-span-3 grid grid-rows-2 gap-6 lg:gap-8">
          {/* Ảnh phụ trên */}
          <div className="relative overflow-hidden rounded-2xl group border border-rose-100 shadow-inner bg-rose-50">
            <img
              src={images.sideTop}
              alt="ROVIAN Heritage Collection"
              // Grayscale mạnh hơn để làm nổi vật Signature nếu cần
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 grayscale-[60%] hover:grayscale-0 transition-all duration-700"
            />
            {/* Overlay gradient tone ấm */}
            <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-rose-950/40 to-transparent">
              <p className="text-white text-[10px] uppercase tracking-[0.3em] font-medium border-l border-rose-300 pl-3">
                Heritage
              </p>
            </div>
          </div>

          {/* Ảnh phụ dưới */}
          <div className="relative overflow-hidden rounded-2xl group border border-rose-100 shadow-inner bg-rose-50">
            <img
              src={images.sideBottom}
              alt="ROVIAN Craftsmanship Detail"
              // Giữ grayscale 100% khi không hover, chuyển màu khi hover
              className="w-full h-full object-cover transition-transform duration-700 opacity-80 group-hover:opacity-100 grayscale hover:grayscale-0"
            />
            <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-rose-950/40 to-transparent">
              <p className="text-white text-[10px] uppercase tracking-[0.3em] font-medium border-l border-rose-300 pl-3">
                Craftsmanship
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
