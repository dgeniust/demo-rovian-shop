import React from "react";
import { ArrowUpRight } from "lucide-react";

const BrandSection = () => {
  const brands = [
    "Rolex",
    "Jaeger-LeCoultre",
    "Audemars Piguet",
    "Louis Moinet",
    "De Bethune",
  ];

  return (
    // Đổi bg-white sang trắng kem hồng (#fffafb)
    <section className="bg-[#fffafb] text-stone-900 py-24 px-6 md:px-12 lg:px-24 font-sans border-t border-rose-100">
      {/* Header */}
      <div className="mb-20 text-center lg:text-left">
        <h2 className="text-5xl md:text-7xl font-light uppercase tracking-tighter italic font-serif">
          Shop Our{" "}
          <span className="font-light not-italic text-rose-300">Brands</span>
        </h2>
        <div className="h-[1px] w-20 bg-rose-200 mt-6 mx-auto lg:mx-0"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Left Column: Brand List & Main Image */}
        <div className="lg:col-span-7 space-y-16">
          {/* Main Image with Soft Overlay */}
          <div className="relative group overflow-hidden bg-rose-50 rounded-[40px] shadow-xl shadow-rose-100/20 border border-rose-100">
            <video
              autoPlay
              loop
              muted
              playsInline
              crossOrigin="anonymous"
              className="w-full h-[650px] object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-1000 ease-in-out scale-105 group-hover:scale-100"
            >
              {/* Nguồn Video cho Mobile (Dọc) */}
              <source
                src="https://objects-prod.cdn.chopard.com/video/upload/q_auto/f_auto/Campaigns/artisans-of-emotions/Mobile/03-Jewellery/03-Artisans-Jewellery--9x16.mp4"
                type="video/mp4"
                media="(max-width: 767px)"
              />
              {/* Nguồn Video cho Desktop (Ngang) */}
              <source
                src="https://objects-prod.cdn.chopard.com/video/upload/q_auto/f_auto/Campaigns/artisans-of-emotions/Desktop/03-Jewellery/03-Artisans-Jewellery--16x9.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>

            {/* Lớp phủ màu Sakura nhạt */}
            <div className="absolute inset-0 bg-rose-900/10 group-hover:bg-transparent transition-colors duration-700 pointer-events-none"></div>
          </div>

          {/* Brands List */}
          <div className="border-t border-rose-100">
            {brands.map((brand, index) => (
              <a
                key={index}
                href="#"
                // Hover chuyển từ đen sang hồng Rose đậm (rose-500)
                className="group flex items-center justify-between py-8 border-b border-rose-100 hover:bg-rose-200 hover:text-white transition-all duration-500 px-6 hover:italic"
              >
                <span className="text-2xl md:text-4xl font-light font-serif tracking-tight uppercase">
                  {brand}
                </span>
                <ArrowUpRight className="w-6 h-6 transform group-hover:rotate-45 transition-transform duration-500 text-rose-300 group-hover:text-white" />
              </a>
            ))}
          </div>
        </div>

        {/* Right Column: Sticky Product Card */}
        <div className="lg:col-span-5 lg:sticky lg:top-10 space-y-10">
          {/* Đổi nền card sang hồng kem nhạt hơn một chút (rose-50) */}
          <div className="bg-rose-50/50 p-8 md:p-14 text-center group rounded-sm border border-rose-100/50 relative overflow-hidden">
            {/* Sakura Glow nhè nhẹ góc card */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-rose-200/20 blur-[80px] rounded-full" />

            {/* Product Image */}
            <div className="relative mb-10 bg-white/40 transform transition-all duration-700 group-hover:scale-105 group-hover:drop-shadow-xl">
              <img
                src="https://objects-prod.cdn.chopard.com/q_auto,f_auto,dpr_auto/e_trim/c_lpad,w_iw,h_ih/c_lpad,ar_1:1,w_800,g_center/ProductsAssets/Web/385388-5001_01.png"
                alt="IMPERIALE Day & Night
"
                className="w-full object-contain mix-blend-multiply opacity-90 group-hover:opacity-100"
              />
            </div>

            {/* Product Info */}
            <div className="space-y-3 relative z-10">
              <h3 className="text-lg font-bold uppercase tracking-[0.2em] text-stone-800">
                IMPERIALE{" "}
                <span className="italic font-serif font-light text-rose-500">
                  Day & Night
                </span>
              </h3>
              <p className="text-rose-400 font-serif italic text-xl">
                Contact Us
              </p>
              <div className="pt-6">
                <span className="text-[10px] text-stone-400 font-sans tracking-[0.4em] border-t border-rose-200 pt-4 px-8 uppercase">
                  Ref. 6239
                </span>
              </div>
            </div>
          </div>

          {/* Secondary Decor (Hộp màu hồng thay vì đen) */}
          <div className="hidden md:flex gap-6 items-center justify-end opacity-60 hover:opacity-100 transition-all duration-500">
            <p className="text-right text-[10px] uppercase tracking-[0.3em] leading-loose max-w-[180px] text-stone-500">
              The excellence of{" "}
              <span className="text-rose-400">craftsmanship</span> in every
              movement.
            </p>
            <div className="w-20 h-28 bg-rose-100/50 border border-rose-200 flex items-center justify-center">
              <div className="w-10 h-[1px] bg-rose-300 rotate-45"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandSection;
