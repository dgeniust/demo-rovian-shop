import React from "react";
import { useNavigate } from "react-router-dom";
import h1 from "../../assets/SRWATCH_SL1611.1302TE-removebg-preview.png";
import h2 from "../../assets/SRWATCH_SL5010.1302BL-removebg-preview.png";
import h3 from "../../assets/SRWATCH_SL5011.9102BL-removebg-preview.png";
const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#fffafb] text-black selection:bg-rose-100 overflow-hidden">
      {/* Main Content */}
      <main className="flex flex-col items-center justify-center pt-25 px-4">
        {/* Brand Narrative Section */}
        <div className="text-center mb-12 max-w-4xl mx-auto">
          <p className="text-xs md:text-sm uppercase tracking-[0.4em] text-rose-400 mb-6 animate-pulse font-medium">
            Thành lập năm 2026 — ROVIAN
          </p>

          {/* NEW SLOGAN DESIGN */}
          <h2 className="flex flex-col items-center mb-10 font-light font-['Playfair_Display'] italic text-5xl md:text-7xl tracking-[0.2rem]">
            <span className="text-black mb-4 ">Thay đồng hồ</span>
            <span className="text-rose-400/80 mt-[-2px] md:mt-[-3px] ml-22 md:ml-30">
              Đổi phong cách
            </span>
          </h2>

          <div className="space-y-4 max-w-lg mx-auto">
            <p className="text-gray-600 text-sm md:text-base leading-relaxed font-light italic">
              "Vượt xa sự chính xác của cơ học là một linh hồn vĩnh cửu. ROVIAN
              bước qua ranh giới của nghệ thuật chế tác đồng hồ truyền thống,
              hòa quyện giữa nét thanh lịch tinh tế và di sản chế tác bậc thầy."
            </p>

            <div className="flex justify-center gap-4 pt-4">
              <button
                onClick={() => navigate("/shop")}
                className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-rose-500 transition-all duration-300 uppercase text-[13px] tracking-[0.2em] active:scale-95 shadow-lg shadow-rose-100 cursor-pointer"
              >
                Mua Ngay
              </button>
              <button
                onClick={() => navigate("/about")}
                className="border border-rose-200 text-rose-500 px-8 py-3 rounded-full font-medium hover:bg-rose-50 hover:text-rose-600 transition-all duration-300 uppercase text-[13px] tracking-[0.2em] cursor-pointer"
              >
                Khám Phá Câu Chuyện
              </button>
            </div>
          </div>
        </div>

        {/* Product Showcase */}
        <div className="relative flex items-center justify-center w-full max-w-[1600px] mt-12 gap-0 md:gap-4 px-4">
          {/* Background Glow Effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-rose-200/20 rounded-[100%] blur-[120px] pointer-events-none"></div>

          {/* LEFT WATCH */}
          <div className="hidden lg:block w-[35%] transform -rotate-6 -translate-x-10 opacity-60 hover:opacity-100 transition-all duration-1000 z-10 hover:scale-110 cursor-pointer group">
            {/* Hover Text cho đồng hồ trái */}
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
              <span className="text-[12px] tracking-[0.5em] text-rose-400 uppercase font-medium">
                SRWATCH SL5010.1302BL
              </span>
            </div>
            <img
              src={h2}
              alt="IMPERIALE Métier d'art"
              className="w-full h-auto filter sepia-[0.1] hover:sepia-0 transition-all duration-700"
            />
          </div>

          {/* CENTER WATCH */}
          <div className="z-30 w-full md:w-[40%] transform transition-all duration-1000 group cursor-crosshair">
            <div className="absolute -top-16 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
              <span className="text-[12px] tracking-[0.5em] text-rose-400 uppercase font-medium">
                SRWATCH SL1611.1302TE
              </span>
            </div>
            <img
              src={h1}
              alt="Main Watch"
              className="w-full drop-shadow-[0_30px_60px_rgba(251,113,133,0.3)] scale-90 group-hover:scale-105 transition-transform duration-1000"
            />
          </div>

          {/* RIGHT WATCH */}
          <div className="hidden lg:block w-[35%] transform rotate-6 translate-x-10 opacity-60 hover:opacity-100 transition-all duration-1000 z-10 hover:scale-110 cursor-pointer group">
            {/* Hover Text cho đồng hồ phải */}
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
              <span className="text-[12px] tracking-[0.5em] text-rose-400 uppercase font-medium">
                SRWATCH SL5011.9102BL
              </span>
            </div>
            <img
              src={h3}
              alt="Rovian Series 2"
              className="w-full h-auto filter sepia-[0.1] hover:sepia-0 transition-all duration-700"
            />
          </div>
        </div>

        {/* Technical Footer Section */}
        <div className="mt-20 mb-8 grid grid-cols-1 md:grid-cols-3 w-full max-w-6xl border-t border-rose-100 pt-12 gap-12 text-center md:text-left">
          <div>
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-rose-500 mb-4 font-bold">
              Độ Chính Xác
            </h4>
            <p className="text-gray-500 text-[13px] leading-relaxed">
              Được trang bị bộ máy Caliber-R1 độc quyền, đảm bảo khả năng dự trữ
              năng lượng lên đến 72 giờ với sự chuyển động mượt mà và thanh
              lịch.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-12 w-[1px] bg-gradient-to-b from-rose-200 to-transparent hidden md:block"></div>
            <p className="text-[11px] tracking-[0.4em] uppercase text-rose-300 mt-4">
              Định Nghĩa Lại Sự Tinh Tế
            </p>
          </div>
          <div className="md:text-right">
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-rose-500 mb-4 font-bold">
              Chất Liệu
            </h4>
            <p className="text-gray-500 text-[13px] leading-relaxed">
              Được chế tác từ Vàng Hồng đánh bóng và bảo vệ bởi lớp kính
              sapphire vòm kép kết hợp lớp phủ chống lóa dịu nhẹ.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HeroSection;
