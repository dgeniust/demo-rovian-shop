import React, { useRef, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";

const StatsSection = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Autoplay blocked:", error);
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
    <section className="bg-[#fffafb] py-12 md:py-24 px-4 md:px-12 lg:px-24">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
        {/* BLOCK 1: MAIN IMAGE HERO */}
        <div className="md:col-span-12 lg:col-span-7 relative h-[450px] md:h-[550px] rounded-[32px] md:rounded-[60px] overflow-hidden group shadow-xl shadow-rose-100/20">
          <img
            src="https://cdn.ocp.richemont.com/api/public/content/default__2PWlBmWcTxiC4AG85gcBPpfCtyHY294C?v=6c3a68d9"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105 brightness-75 grayscale-[20%]"
            alt="Lobby luxury"
          />
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-stone-900/80 via-stone-900/30 to-transparent z-10" />

          <div className="relative z-20 p-8 md:p-16 h-full flex flex-col justify-between text-white">
            <div className="space-y-4 md:space-y-6">
              <div className="flex items-center space-x-3 text-rose-300">
                <span className="w-8 md:w-10 h-[1px] bg-current"></span>
                <span className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] md:tracking-[0.5em] font-bold">
                  The Rovian Legacy
                </span>
              </div>
              <h2 className="text-4xl md:text-7xl font-light leading-[0.95] tracking-tighter uppercase font-serif italic">
                Excellence <br />
                <span className="font-light not-italic text-rose-100 opacity-90">
                  In Every Tick.
                </span>
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
              <p className="text-white/70 text-[10px] md:text-[11px] leading-relaxed tracking-widest uppercase max-w-[240px] font-light">
                Beyond timekeeping, we craft heritage that transcends
                generations.
              </p>
              <div className="w-14 h-14 md:w-20 md:h-20 bg-rose-400/20 backdrop-blur-md border border-rose-200/30 rounded-full flex items-center justify-center hover:bg-rose-500 transition-all duration-500 cursor-pointer group/btn self-end">
                <ArrowUpRight
                  size={24}
                  strokeWidth={1.5}
                  className="text-white group-hover/btn:scale-110 transition-transform"
                />
              </div>
            </div>
          </div>
        </div>

        {/* BLOCK 2: STATS CARDS */}
        <div className="md:col-span-12 lg:col-span-5 grid grid-cols-1 gap-6 md:gap-8">
          {/* Clients Stats */}
          <div className="bg-rose-50 border border-rose-100 p-8 md:p-10 rounded-[32px] md:rounded-[60px] flex flex-col justify-between transition-all hover:shadow-md">
            <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
              <div className="space-y-2 md:space-y-3">
                <h3 className="text-5xl md:text-6xl font-light tracking-tighter italic font-serif text-stone-800">
                  1450+
                </h3>
                <p className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-bold text-rose-400">
                  Distinguished Clients
                </p>
              </div>
              <div className="flex -space-x-3 md:-space-x-4">
                {avatars.map((url, i) => (
                  <img
                    key={i}
                    src={url}
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 md:border-4 border-rose-50 grayscale hover:grayscale-0 transition-all cursor-pointer"
                    alt="User"
                  />
                ))}
              </div>
            </div>
            <p className="mt-6 md:mt-8 text-[10px] md:text-[11px] text-stone-500 font-light tracking-wider">
              Trusted across 40+ countries by connoisseurs.
            </p>
          </div>

          {/* Small Stats Grid */}
          <div className="grid grid-cols-2 gap-4 md:gap-8">
            <div className="bg-white border border-rose-100 p-6 md:p-10 rounded-[24px] md:rounded-[50px] shadow-sm flex flex-col justify-center">
              <p className="text-[8px] md:text-[9px] uppercase tracking-widest text-stone-400 mb-2 md:mb-4 font-bold">
                Products
              </p>
              <h4 className="text-3xl md:text-4xl font-light font-serif italic text-stone-800">
                300+
              </h4>
            </div>
            <div className="relative overflow-hidden bg-stone-900 text-white p-6 md:p-10 rounded-[24px] md:rounded-[50px] flex items-center justify-center min-h-[140px]">
              <img
                src="https://cdn.ocp.richemont.com/api/public/content/default__14BQHyzZZUT8DUvh4XwZ16iZhPgVbK3V?v=255c2087"
                className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale"
                alt="Atelier"
              />
              <div className="relative z-10 text-center">
                <h4 className="text-3xl md:text-4xl font-bold tracking-tighter">
                  20+
                </h4>
                <p className="text-[8px] md:text-[9px] uppercase tracking-[0.1em] opacity-80 font-bold text-rose-200">
                  Ateliers
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* BLOCK 3: FULL WIDTH VIDEO CINEMATIC */}
        <div className="md:col-span-12 relative h-[350px] md:h-[500px] rounded-[32px] md:rounded-[60px] overflow-hidden group shadow-2xl border border-rose-100 bg-stone-200 mt-2 md:mt-0">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover grayscale-[20%] brightness-[0.6] transition-transform duration-[5000ms] group-hover:scale-110"
          >
            <source
              src="https://www.jaeger-lecoultre.com/attachments/JL/JL_MASTER-UI_16-9_V4_WEB.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          {/* Video Overlay Content */}
          <div className="absolute inset-0 flex items-end p-6 md:p-12">
            <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center border-t border-white/20 pt-6 md:pt-8 gap-4">
              <h3 className="text-white font-serif italic text-lg md:text-2xl tracking-[0.1em] uppercase opacity-90">
                The Art of Precision
              </h3>
              <div className="text-rose-200 text-[8px] md:text-[9px] uppercase tracking-[0.3em] font-bold px-3 py-1 border border-rose-200/20 rounded-full">
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
