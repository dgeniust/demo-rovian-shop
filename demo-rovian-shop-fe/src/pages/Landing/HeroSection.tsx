import React from "react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#fffafb] text-black font-sans selection:bg-rose-100 overflow-hidden">
      {/* Main Content */}
      <main className="flex flex-col items-center justify-center pt-25 px-4">
        {/* Brand Narrative Section */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <p className="text-xs md:text-sm uppercase tracking-[0.4em] text-rose-400 mb-6 animate-pulse font-medium">
            Established 2024 — ROVIAN Atelier
          </p>

          <h2 className="text-5xl md:text-8xl font-serif italic tracking-tighter uppercase leading-none mb-8 text-black">
            ONE SECOND <br />
            <span className="not-italic font-extralight text-rose-300">
              at a
            </span>{" "}
            TIME
          </h2>

          <div className="space-y-4 max-w-lg mx-auto">
            <p className="text-gray-600 text-sm md:text-base leading-relaxed font-light italic">
              "Beyond the mechanical precision lies an eternal soul. ROVIAN
              transcends traditional horology, blending soft elegance with the
              unwavering heritage of master craftsmanship."
            </p>

            <div className="flex justify-center gap-4 pt-4">
              <button
                onClick={() => navigate("/shop")}
                className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-rose-500 transition-all duration-300 uppercase text-[13px] tracking-[0.2em] active:scale-95 shadow-lg shadow-rose-100 cursor-pointer"
              >
                Buy Now
              </button>
              <button
                onClick={() => navigate("/about")}
                className="border border-rose-200 text-rose-500 px-8 py-3 rounded-full font-medium hover:bg-rose-50 hover:text-rose-600 transition-all duration-300 uppercase text-[13px] tracking-[0.2em] cursor-pointer"
              >
                Discover Story
              </button>
            </div>
          </div>
        </div>

        {/* Product Showcase */}
        <div className="relative flex items-center justify-center w-full max-w-[1600px] mt-24 gap-0 md:gap-4 px-4">
          {/* Background Glow Effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-rose-200/20 rounded-[100%] blur-[120px] pointer-events-none"></div>

          {/* LEFT WATCH */}
          <div className="hidden lg:block w-[35%] transform -rotate-6 -translate-x-10 opacity-60 hover:opacity-100 transition-all duration-1000 z-10 hover:scale-110 cursor-pointer group">
            {/* Hover Text cho đồng hồ trái */}
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
              <span className="text-[12px] tracking-[0.5em] text-rose-400 uppercase font-medium">
                IMPERIALE Métier d'art
              </span>
            </div>
            <img
              src="https://objects-prod.cdn.chopard.com/q_auto,f_auto,dpr_auto/e_trim/w_iw,h_ih,c_lpad,g_center/c_pad,ar_1:1,w_1490,e_sharpen:60/ProductsAssets/Web/385392-1001_01.png"
              alt="IMPERIALE Métier d'art"
              className="w-full h-auto filter sepia-[0.1] hover:sepia-0 transition-all duration-700"
            />
          </div>

          {/* CENTER WATCH */}
          <div className="z-30 w-full md:w-[40%] transform transition-all duration-1000 group cursor-crosshair">
            <div className="absolute -top-16 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
              <span className="text-[12px] tracking-[0.5em] text-rose-400 uppercase font-medium">
                IMPERIALE Joaillerie Rainbow
              </span>
            </div>
            <img
              src="https://objects-prod.cdn.chopard.com/q_auto,f_auto,dpr_auto/e_trim/w_iw,h_ih,c_lpad,g_center/c_pad,ar_1:1,w_1490,e_sharpen:60/ProductsAssets/Web/384239-5009_01.png"
              alt="Main Watch"
              className="w-full drop-shadow-[0_30px_60px_rgba(251,113,133,0.3)] scale-110 group-hover:scale-125 transition-transform duration-1000"
            />
          </div>

          {/* RIGHT WATCH */}
          <div className="hidden lg:block w-[35%] transform rotate-6 translate-x-10 opacity-60 hover:opacity-100 transition-all duration-1000 z-10 hover:scale-110 cursor-pointer group">
            {/* Hover Text cho đồng hồ phải */}
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
              <span className="text-[12px] tracking-[0.5em] text-rose-400 uppercase font-medium">
                IMPERIALE Flying Tourbillon
              </span>
            </div>
            <img
              src="https://objects-prod.cdn.chopard.com/q_auto,f_auto,dpr_auto/e_trim/w_iw,h_ih,c_lpad,g_center/c_pad,ar_1:1,w_1490,e_sharpen:60/ProductsAssets/Web/385389-1001_01.png"
              alt="Rovian Series 2"
              className="w-full h-auto filter sepia-[0.1] hover:sepia-0 transition-all duration-700"
            />
          </div>
        </div>

        {/* Technical Footer Section */}
        <div className="mt-40 mb-16 grid grid-cols-1 md:grid-cols-3 w-full max-w-6xl border-t border-rose-100 pt-12 gap-12 text-center md:text-left">
          <div>
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-rose-500 mb-4 font-bold">
              Precision
            </h4>
            <p className="text-gray-500 text-[13px] leading-relaxed">
              Equipped with our proprietary Caliber-R1 movement, ensuring a
              72-hour power reserve with elegant fluidity.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-12 w-[1px] bg-gradient-to-b from-rose-200 to-transparent hidden md:block"></div>
            <p className="text-[11px] tracking-[0.4em] uppercase text-rose-300 mt-4">
              Softness Redefined
            </p>
          </div>
          <div className="md:text-right">
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-rose-500 mb-4 font-bold">
              Material
            </h4>
            <p className="text-gray-500 text-[13px] leading-relaxed">
              Forged in Polished Rose Gold and shielded by double-domed sapphire
              crystal with soft-glare coating.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HeroSection;
