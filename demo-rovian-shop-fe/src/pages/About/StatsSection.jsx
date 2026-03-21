import React, { useRef, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";

const StatsSection = () => {
  // Sử dụng useRef để điều khiển video chạy chắc chắn hơn trong React
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Autoplay bị chặn hoặc lỗi link:", error);
      });
    }
  }, []);

  const avatars = [
    "https://i.pravatar.cc/150?u=11",
    "https://i.pravatar.cc/150?u=12",
    "https://i.pravatar.cc/150?u=13",
    "https://i.pravatar.cc/150?u=14",
  ];

  return (
    <section className="bg-[#fffafb] py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* BLOCK 1 & 2 giữ nguyên... */}
        <div className="md:col-span-12 lg:col-span-7 relative h-[550px] rounded-[60px] overflow-hidden group shadow-xl shadow-rose-100/20">
          <img
            src="https://cdn.ocp.richemont.com/api/public/content/default__2PWlBmWcTxiC4AG85gcBPpfCtyHY294C?v=6c3a68d9"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 brightness-75 grayscale-[20%]"
            alt="Lobby luxury"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-900/60 via-stone-900/20 to-transparent z-10" />
          <div className="relative z-20 p-12 md:p-16 h-full flex flex-col justify-between text-white">
            <div className="space-y-6">
              <div className="flex items-center space-x-3 text-rose-300">
                <span className="w-10 h-[1px] bg-current"></span>
                <span className="text-[10px] uppercase tracking-[0.5em] font-bold">
                  The Rovian Legacy
                </span>
              </div>
              <h2 className="text-5xl md:text-7xl font-light leading-[0.9] tracking-tighter uppercase font-serif italic">
                Excellence <br />
                <span className="font-light not-italic text-rose-100 opacity-90">
                  In Every Tick.
                </span>
              </h2>
            </div>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <p className="text-white/80 text-[11px] leading-relaxed tracking-widest uppercase max-w-xs font-light">
                Beyond timekeeping, we craft heritage.
              </p>
              <div className="w-20 h-20 bg-rose-400/20 backdrop-blur-md border border-rose-200/30 rounded-full flex items-center justify-center hover:bg-rose-500 transition-all duration-500 cursor-pointer group/btn">
                <ArrowUpRight
                  size={28}
                  strokeWidth={1}
                  className="text-white"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-6 lg:col-span-5 grid grid-cols-1 gap-8">
          <div className="bg-rose-50 border border-rose-100 p-10 rounded-[60px] flex flex-col justify-between transition-all hover:shadow-lg">
            {/* Nội dung client stats */}
            <div className="flex justify-between items-start">
              <div className="space-y-3">
                <h3 className="text-6xl font-light tracking-tighter italic font-serif text-stone-800">
                  1450+
                </h3>
                <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-rose-400">
                  Distinguished Clients
                </p>
              </div>
              <div className="flex -space-x-4">
                {avatars.map((url, i) => (
                  <img
                    key={i}
                    src={url}
                    className="w-12 h-12 rounded-full border-4 border-rose-50 grayscale"
                    alt="User"
                  />
                ))}
              </div>
            </div>
            <p className="mt-8 text-[11px] text-stone-500 font-light">
              Trusted across 40 countries.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="bg-white border border-rose-100 p-10 rounded-[50px] shadow-sm">
              <p className="text-[9px] uppercase tracking-widest text-stone-400 mb-4 font-bold">
                Products
              </p>
              <h4 className="text-4xl font-light font-serif italic text-stone-800">
                300+
              </h4>
            </div>
            <div className="relative overflow-hidden bg-stone-900 text-white p-10 rounded-[50px] flex items-center justify-center">
              <img
                src="https://cdn.ocp.richemont.com/api/public/content/default__14BQHyzZZUT8DUvh4XwZ16iZhPgVbK3V?v=255c2087"
                className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale"
                alt="Atelier"
              />
              <div className="relative z-10 text-center">
                <h4 className="text-4xl font-bold tracking-tighter">20+</h4>
                <p className="text-[9px] uppercase tracking-[0.2em] opacity-80 font-bold text-rose-200">
                  Ateliers
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* --- BLOCK 3: VIDEO FIX --- */}
        <div className="md:col-span-12 relative h-[500px] rounded-[60px] overflow-hidden group shadow-2xl border border-rose-100 bg-stone-200">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover grayscale-[30%] brightness-[0.7] transition-transform duration-[3000ms] group-hover:scale-110"
          >
            {/* Link video công cộng ổn định hơn để test */}
            <source
              src="https://www.jaeger-lecoultre.com/attachments/JL/JL_MASTER-UI_16-9_V4_WEB.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          {/* Overlay trang trí để block không bị trống trải */}
          <div className="absolute inset-0 flex items-end p-12">
            <div className="w-full flex justify-between items-center border-t border-white/20 pt-8">
              <h3 className="text-white font-serif italic text-2xl tracking-widest uppercase opacity-90">
                The Art of Precision
              </h3>
              <div className="text-rose-200 text-[9px] uppercase tracking-[0.4em] font-bold">
                Cinematic Experience
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
