import React from "react";
import { useNavigate } from "react-router-dom";
import h1 from "../../assets/SRWATCH_SL1611.1302TE-removebg-preview.png";
import h2 from "../../assets/SRWATCH_SL5010.1302BL-removebg-preview.png";
import h3 from "../../assets/SRWATCH_SL5011.9102BL-removebg-preview.png";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-zinc-700 overflow-hidden">
      {/* Main Content */}
      <main className="flex flex-col items-center justify-center pt-24 px-4">
        {/* Brand Narrative Section */}
        <div className="text-center mb-16 max-w-4xl mx-auto z-20">
          <p className="text-xs md:text-sm uppercase tracking-[0.4em] text-zinc-400 mb-6 animate-pulse font-medium">
            Thành lập năm 2026 — ROVIAN
          </p>

          <h2 className="flex flex-col items-center mb-10 font-light font-['Playfair_Display'] italic text-5xl md:text-7xl tracking-[0.2rem]">
            <span className="text-white mb-4">Thay đồng hồ</span>
            <span className="text-zinc-500 mt-[-2px] md:mt-[-3px] ml-16 md:ml-24">
              Đổi phong cách
            </span>
          </h2>

          <div className="space-y-6 max-w-lg mx-auto">
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-light italic">
              "Vượt xa sự chính xác của cơ học là một linh hồn vĩnh cửu. ROVIAN
              bước qua ranh giới của nghệ thuật chế tác truyền thống, mang đến
              sự lịch lãm tuyệt đối cho quý ông hiện đại."
            </p>

            <div className="flex justify-center gap-4 pt-6">
              <button
                onClick={() => navigate("/shop")}
                className="bg-white text-black px-8 py-3 rounded-none font-medium hover:bg-zinc-200 transition-all duration-300 uppercase text-[12px] tracking-[0.2em] active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.1)] cursor-pointer"
              >
                Khám Phá Ngay
              </button>
              <button
                onClick={() => navigate("/about")}
                className="border border-zinc-700 text-zinc-300 px-8 py-3 rounded-none font-medium hover:bg-zinc-900 hover:text-white transition-all duration-300 uppercase text-[12px] tracking-[0.2em] cursor-pointer"
              >
                Câu Chuyện Thương Hiệu
              </button>
            </div>
          </div>
        </div>

        {/* Product Showcase - Storytelling Layout */}
        <div className="relative flex items-center justify-center w-full max-w-[1000px] h-[450px] md:h-[600px] mt-4 mb-12">
          {/* Background Glow Effect - Tông khói xám */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-zinc-800/30 rounded-[100%] blur-[100px] pointer-events-none"></div>

          {/* LEFT WATCH - Phía sau, nghiêng nhẹ */}
          <div className="absolute left-[5%] md:left-[15%] top-[15%] md:top-[20%] w-[40%] md:w-[32%] transform -rotate-12 z-10 opacity-50 hover:opacity-100 hover:z-40 transition-all duration-700 group cursor-pointer">
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
              <span className="text-[10px] md:text-[12px] tracking-[0.4em] text-zinc-300 uppercase font-light">
                Tinh Tế Từng Chuyển Động
              </span>
            </div>
            <img
              src={h2}
              alt="Classic Series"
              className="w-full h-auto drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)] grayscale-[0.3] hover:grayscale-0 transition-all duration-700"
            />
          </div>

          {/* RIGHT WATCH - Phía sau, góc khuất */}
          <div className="absolute right-[5%] md:right-[15%] top-[10%] md:top-[15%] w-[38%] md:w-[30%] transform rotate-12 z-10 opacity-50 hover:opacity-100 hover:z-40 transition-all duration-700 group cursor-pointer">
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
              <span className="text-[10px] md:text-[12px] tracking-[0.4em] text-zinc-300 uppercase font-light">
                Dấu Ấn Cá Nhân
              </span>
            </div>
            <img
              src={h3}
              alt="Modern Series"
              className="w-full h-auto drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)] grayscale-[0.3] hover:grayscale-0 transition-all duration-700"
            />
          </div>

          {/* CENTER WATCH - Chủ đạo, to nhất, rõ nhất */}
          <div className="absolute left-1/2 top-[25%] md:top-[30%] -translate-x-1/2 w-[60%] md:w-[45%] z-30 transform hover:scale-105 transition-all duration-1000 group cursor-crosshair">
            <div className="absolute -top-14 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
              <span className="text-[12px] md:text-[14px] tracking-[0.5em] text-white uppercase font-medium border-b border-zinc-600 pb-1">
                Khẳng Định Bản Lĩnh
              </span>
            </div>
            <img
              src={h1}
              alt="Main Masterpiece"
              className="w-full drop-shadow-[0_30px_50px_rgba(255,255,255,0.05)] transition-transform duration-1000"
            />
          </div>
        </div>

        {/* Technical Footer Section - Giao diện tối */}
        <div className="mt-10 mb-12 grid grid-cols-1 md:grid-cols-3 w-full max-w-5xl border-t border-zinc-800 pt-12 gap-12 text-center md:text-left z-20">
          <div>
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-zinc-200 mb-4 font-bold">
              Đỉnh Cao Cơ Khí
            </h4>
            <p className="text-zinc-500 text-[13px] leading-relaxed">
              Trang bị cỗ máy tự động tinh vi, dự trữ năng lượng bền bỉ. Mọi chi
              tiết đều được lắp ráp thủ công với độ dung sai tính bằng micron.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="h-12 w-[1px] bg-gradient-to-b from-zinc-600 to-transparent hidden md:block"></div>
            <p className="text-[11px] tracking-[0.4em] uppercase text-zinc-400 mt-4 font-light">
              Biểu Tượng Của Sự Thành Đạt
            </p>
          </div>
          <div className="md:text-right">
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-zinc-200 mb-4 font-bold">
              Chất Liệu Thượng Hạng
            </h4>
            <p className="text-zinc-500 text-[13px] leading-relaxed">
              Khung vỏ thép không gỉ 316L chải xước nam tính, kết hợp cùng mặt
              kính Sapphire nguyên khối chống lóa mọi góc nhìn.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HeroSection;
