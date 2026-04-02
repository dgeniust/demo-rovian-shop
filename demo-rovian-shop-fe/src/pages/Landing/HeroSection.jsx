import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import h1 from "../../assets/SRWATCH_SL1611.1302TE-removebg-preview.png";
import h2 from "../../assets/SRWATCH_SL5010.1302BL-removebg-preview.png";
import h3 from "../../assets/SRWATCH_SL5011.9102BL-removebg-preview.png";

const HeroSection = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Dữ liệu cho 3 slide, bổ sung mảng thông số (specs)
  const slides = [
    {
      subtitle: "Thành lập năm 2026 — ROVIAN",
      titleLine1: "Thay đồng hồ",
      titleLine2: "Đổi phong cách",
      description: `"Vượt xa sự chính xác của cơ học là một linh hồn vĩnh cửu. ROVIAN bước qua ranh giới của nghệ thuật chế tác truyền thống, mang đến sự lịch lãm tuyệt đối cho quý ông hiện đại."`,
      image: h1,
      specs: [
        { label: "Mã SP", value: "SL1611.1302TE" },
        { label: "Chất liệu", value: "Thép không gỉ mạ PVD" },
        { label: "Mặt kính", value: "Sapphire nguyên khối" },
        { label: "Chống nước", value: "5 ATM" },
      ],
      btn1: { text: "Khám Phá Ngay", path: "/shop" },
      btn2: { text: "Câu Chuyện Thương Hiệu", path: "/about" },
    },
    {
      subtitle: "Kiệt Tác Thời Gian",
      titleLine1: "Tinh hoa cơ khí",
      titleLine2: "Tuyệt tác vĩnh cửu",
      description: `"Mỗi chiếc đồng hồ ROVIAN là một bản giao hưởng của hàng trăm chi tiết vi mô, được tinh chỉnh và lắp ráp hoàn toàn thủ công bởi những nghệ nhân bậc thầy."`,
      image: h2,
      specs: [
        { label: "Mã SP", value: "SL5010.1302BL" },
        { label: "Bộ máy", value: "Automatic" },
        { label: "Mặt kính", value: "Sapphire chống xước" },
        { label: "Chống nước", value: "5 ATM" },
      ],
      btn1: { text: "Xem Bộ Sưu Tập", path: "/shop" },
      btn2: { text: "Chế Tác Thủ Công", path: "/craftsmanship" },
    },
    {
      subtitle: "Biểu Tượng Quyền Lực",
      titleLine1: "Dấu ấn cá nhân",
      titleLine2: "Đẳng cấp phái mạnh",
      description: `"Không chỉ là cỗ máy đo lường thời gian, chúng tôi mang đến một tuyên ngôn không lời về sự thành đạt và gu thẩm mỹ đỉnh cao của người sở hữu."`,
      image: h3,
      specs: [
        { label: "Mã SP", value: "SL5011.9102BL" },
        { label: "Dây đeo", value: "Da cao cấp" },
        { label: "Mặt kính", value: "Sapphire Crystal" },
        { label: "Đường kính", value: "40mm" },
      ],
      btn1: { text: "Sản Phẩm Mới", path: "/shop" },
      btn2: { text: "Dịch Vụ Đặc Quyền", path: "/services" },
    },
  ];

  // Auto-play carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-zinc-700 overflow-hidden">
      {/* Main Content */}
      <main className="flex flex-col items-center justify-center pt-24 px-4">
        {/* Brand Narrative Section - Carousel */}
        <div className="relative w-full max-w-7xl mx-auto z-20 min-h-[800px] md:min-h-[650px] mb-8">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full flex flex-col md:flex-row items-center transition-all duration-1000 ease-in-out ${
                index === currentSlide
                  ? "opacity-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 translate-y-8 pointer-events-none"
              }`}
            >
              {/* Text Content */}
              <div className="w-full md:w-1/2 text-center md:text-left pr-0 md:pr-12 relative z-20">
                <p className="text-xs md:text-sm uppercase tracking-[0.4em] text-zinc-400 mb-12 animate-pulse font-medium">
                  {slide.subtitle}
                </p>

                <h2 className="flex flex-col mb-12 font-light font-['Playfair_Display'] text-5xl md:text-7xl tracking-[0.2rem]">
                  <span className="text-white mb-4">{slide.titleLine1}</span>
                  <span className="text-zinc-500 mt-[-2px] md:mt-[-3px] ml-0 md:ml-32">
                    {slide.titleLine2}
                  </span>
                </h2>

                <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-light mb-12 min-h-[80px]">
                  {slide.description}
                </p>

                <div className="flex justify-center md:justify-start gap-4 pt-6">
                  <button
                    onClick={() => navigate(slide.btn1.path)}
                    className="bg-white text-black px-8 py-3 rounded-none font-medium hover:bg-zinc-200 transition-all duration-300 text-xs md:text-sm uppercase tracking-[0.4em] active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.1)] cursor-pointer"
                  >
                    {slide.btn1.text}
                  </button>
                  <button
                    onClick={() => navigate(slide.btn2.path)}
                    className="border border-zinc-700 text-zinc-300 px-8 py-3 rounded-none font-medium hover:bg-zinc-900 hover:text-white transition-all duration-300 text-xs md:text-sm uppercase tracking-[0.4em] cursor-pointer"
                  >
                    {slide.btn2.text}
                  </button>
                </div>
              </div>

              {/* Image Content with Effect & Specs */}
              <div className="w-full md:w-1/2 mt-16 md:mt-0 flex justify-center md:justify-end relative">
                {/* Glow Effect phía sau ảnh */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-zinc-600/20 rounded-full blur-[80px] md:blur-[100px] pointer-events-none z-0"></div>

                {/* Hình ảnh */}
                <img
                  src={slide.image}
                  alt={slide.titleLine1}
                  className="relative w-full max-w-[350px] md:max-w-[500px] h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] filter grayscale-[0.2] hover:grayscale-0 transition-all duration-700 z-10"
                />

                {/* Specs Floating Box (Glassmorphism) */}
                <div className="absolute -bottom-6 md:bottom-10 left-1/2 md:-left-8 -translate-x-1/2 md:translate-x-0 w-[90%] md:w-auto bg-black/40 backdrop-blur-md border border-white/10 p-5 shadow-2xl z-20">
                  <ul className="space-y-3">
                    {slide.specs.map((spec, i) => (
                      <li
                        key={i}
                        className="flex justify-between items-center gap-8 text-[11px] md:text-xs tracking-widest border-b border-white/5 pb-2 last:border-0 last:pb-0"
                      >
                        <span className="text-zinc-500 uppercase">
                          {spec.label}
                        </span>
                        <span className="text-zinc-200 font-medium text-right">
                          {spec.value}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}

          {/* Carousel Dots Navigation */}
          <div className="absolute bottom-[-40px] md:bottom-0 left-1/2 -translate-x-1/2 flex gap-3 z-30">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-1 rounded-full transition-all duration-500 cursor-pointer ${
                  index === currentSlide
                    ? "w-8 bg-white"
                    : "w-2 bg-zinc-700 hover:bg-zinc-500"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-20 md:mt-12 mb-12 grid grid-cols-1 md:grid-cols-3 w-full max-w-7xl border-t border-zinc-800 pt-12 gap-12 text-center md:text-left z-20 text-sm md:text-base leading-relaxed font-light">
          {/* ... (Giữ nguyên phần footer này) ... */}
          <div>
            <h4 className="text-zinc-200 mb-4 font-bold">Đỉnh Cao Cơ Khí</h4>
            <p className="text-zinc-500">
              Trang bị cỗ máy tự động tinh vi, dự trữ năng lượng bền bỉ. Mọi chi
              tiết đều được lắp ráp thủ công với độ dung sai tính bằng micron.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="h-12 w-[1px] bg-gradient-to-b from-zinc-600 to-transparent hidden md:block"></div>
            <p className="text-[11px] tracking-[0.4em] text-zinc-400 mt-4 font-light">
              Biểu Tượng Của Sự Thành Đạt
            </p>
          </div>
          <div className="md:text-right">
            <h4 className="text-zinc-200 mb-4 font-bold">
              Chất Liệu Thượng Hạng
            </h4>
            <p className="text-zinc-500">
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
