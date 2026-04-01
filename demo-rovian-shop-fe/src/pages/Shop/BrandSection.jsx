import React from "react";
import { ArrowUpRight } from "lucide-react";
import h1 from "../../assets/SRWATCH_SL1611.1302TE-removebg-preview.png";

const BrandSection = () => {
  const brands = [
    "Rolex",
    "Jaeger-LeCoultre",
    "Audemars Piguet",
    "Louis Moinet",
    "De Bethune",
  ];

  return (
    // Nền đen tuyền sang trọng
    <section className="bg-[#0a0a0a] text-white py-24 px-6 md:px-12 lg:px-24 border-t border-zinc-900">
      {/* Header */}
      <div className="mb-20 text-center lg:text-left">
        <h2 className="text-4xl md:text-6xl font-light uppercase tracking-tighter italic font-serif">
          Khám Phá <span className="not-italic text-zinc-500">Thương Hiệu</span>
        </h2>
        <div className="h-[1px] w-20 bg-zinc-700 mt-6 mx-auto lg:mx-0"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Left Column: Brand List & Main Image */}
        <div className="lg:col-span-7 space-y-16">
          {/* Main Image with Soft Overlay */}
          <div className="relative group overflow-hidden bg-zinc-900 rounded-none shadow-2xl border border-zinc-800">
            <video
              autoPlay
              loop
              muted
              playsInline
              crossOrigin="anonymous"
              className="w-full h-[650px] object-cover grayscale-[0.8] group-hover:grayscale-0 transition-all duration-1000 ease-in-out scale-105 group-hover:scale-100"
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

            {/* Lớp phủ màu khói nhạt */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-700 pointer-events-none"></div>
          </div>

          {/* Brands List */}
          <div className="border-t border-zinc-800">
            {brands.map((brand, index) => (
              <a
                key={index}
                href="#"
                // Hover chuyển sang nền trắng, chữ đen quyền lực
                className="group flex items-center justify-between py-8 border-b border-zinc-800 hover:bg-white hover:text-black transition-all duration-500 px-6 hover:italic"
              >
                <span className="text-2xl md:text-4xl font-light font-serif tracking-tight uppercase text-zinc-300 group-hover:text-black">
                  {brand}
                </span>
                <ArrowUpRight className="w-6 h-6 transform group-hover:rotate-45 transition-transform duration-500 text-zinc-500 group-hover:text-black" />
              </a>
            ))}
          </div>
        </div>

        {/* Right Column: Sticky Product Card */}
        <div className="lg:col-span-5 lg:sticky lg:top-10 space-y-10">
          {/* Đổi nền card sang xám khói, thiết kế nam tính vuông vức */}
          <div className="bg-zinc-900/40 p-8 md:p-14 text-center group rounded-none border border-zinc-800 relative overflow-hidden">
            {/* Glow khói xám nam tính */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-zinc-500/10 blur-[80px] rounded-full" />

            {/* Product Image */}
            <div className="relative mb-10 transform transition-all duration-700 group-hover:scale-105 group-hover:drop-shadow-[0_15px_30px_rgba(255,255,255,0.05)]">
              <img
                src={h1}
                alt="SRWATCH SL1611.1302TE"
                // Đảm bảo ảnh hiển thị nổi bật trên nền tối
                className="w-full object-contain opacity-90 group-hover:opacity-100 drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]"
              />
            </div>

            {/* Product Info */}
            <div className="space-y-3 relative z-10">
              <h3 className="text-lg font-bold uppercase tracking-[0.2em] text-white">
                SRWATCH{" "}
                <span className="italic font-serif font-light text-zinc-400">
                  SL1611.1302TE
                </span>
              </h3>
              <p className="text-zinc-500 font-serif italic text-xl">
                Liên hệ chế tác
              </p>
              <div className="pt-6">
                <span className="text-[10px] text-zinc-600 font-sans tracking-[0.4em] border-t border-zinc-800 pt-4 px-8 uppercase">
                  Ref. 6239
                </span>
              </div>
            </div>
          </div>

          {/* Secondary Decor */}
          <div className="hidden md:flex gap-6 items-center justify-end opacity-60 hover:opacity-100 transition-all duration-500">
            <p className="text-right text-[10px] uppercase tracking-[0.3em] leading-loose max-w-[180px] text-zinc-500">
              The excellence of{" "}
              <span className="text-white font-medium">precision</span> in every
              movement.
            </p>
            {/* Khối decor vuông góc cạnh, viền xám khói */}
            <div className="w-20 h-28 bg-zinc-900/50 border border-zinc-800 flex items-center justify-center relative overflow-hidden">
              <div className="w-10 h-[1px] bg-zinc-600 rotate-45 absolute"></div>
              <div className="w-10 h-[1px] bg-zinc-600 -rotate-45 absolute"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandSection;
