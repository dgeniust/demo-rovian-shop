import React from "react";
import r1 from "../../assets/r1.png";
import r2 from "../../assets/r2.png";
import r3 from "../../assets/r3.png";

const HeroSection = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-gray-700 overflow-hidden">
      {/* Main Content */}
      <main className="flex flex-col items-center justify-center pt-20 px-4">
        {/* Brand Narrative Section */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <p className="text-xs md:text-sm uppercase tracking-[0.4em] text-gray-500 mb-6 animate-pulse">
            Established 2024 — ROVIAN Atelier
          </p>

          <h2 className="text-5xl md:text-8xl font-serif italic tracking-tighter uppercase leading-none mb-8">
            ONE SECOND <br />
            <span className="not-italic font-extralight text-gray-400">
              at a
            </span>{" "}
            TIME
          </h2>

          <div className="space-y-4 max-w-lg mx-auto">
            <p className="text-gray-400 text-sm md:text-base leading-relaxed font-light italic">
              "Beyond the mechanical precision lies an eternal soul. ROVIAN
              transcends traditional horology, blending avant-garde minimalism
              with the unwavering heritage of master craftsmanship."
            </p>
            <div className="flex justify-center gap-4 pt-4">
              <button className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-all duration-300 uppercase text-[10px] tracking-[0.2em] active:scale-95">
                Buy Now
              </button>
              <button className="border border-white/30 text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition-all duration-300 uppercase text-[10px] tracking-[0.2em]">
                Discover Story
              </button>
            </div>
          </div>
        </div>

        {/* Product Showcase */}
        <div className="relative flex items-end justify-center w-full max-w-7xl mt-8">
          {/* Background Glow Effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-white/5 rounded-[100%] blur-[120px] pointer-events-none"></div>

          {/* Left Watch - Smaller, Angled */}
          <div className="hidden lg:block w-1/4 transform -rotate-12 translate-y-20 opacity-40 hover:opacity-100 transition-all duration-700 z-0">
            <img
              src={r3}
              alt="Rovian Series 3"
              className="w-full h-auto filter grayscale hover:grayscale-0 transition-all duration-500"
            />
            <p className="text-[10px] tracking-widest text-center mt-4 opacity-0 hover:opacity-100 uppercase transition-opacity">
              The Maverick Edition
            </p>
          </div>

          {/* Center Watch - Hero */}
          <div className="z-20 w-full md:w-[35%] transform transition-all duration-1000 hover:scale-105 group">
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <span className="text-[10px] tracking-[0.5em] text-white/50 uppercase">
                Rovian Signature Onyx
              </span>
            </div>
            <img
              src={r1}
              alt="Main Watch"
              className="drop-shadow-[0_20px_50px_rgba(255,255,255,0.15)]"
            />
          </div>

          {/* Right Watch - Smaller, Angled */}
          <div className="hidden lg:block w-1/4 transform rotate-12 translate-y-20 opacity-40 hover:opacity-100 transition-all duration-700 z-0">
            <img
              src={r2}
              alt="Rovian Series 2"
              className="w-full h-auto filter grayscale hover:grayscale-0 transition-all duration-500"
            />
            <p className="text-[10px] tracking-widest text-center mt-4 opacity-0 hover:opacity-100 uppercase transition-opacity">
              The Heritage Slate
            </p>
          </div>
        </div>

        {/* Technical Footer Section */}
        <div className="mt-32 mb-16 grid grid-cols-1 md:grid-cols-3 w-full max-w-6xl border-t border-white/10 pt-12 gap-12 text-center md:text-left">
          <div>
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-white mb-4">
              Precision
            </h4>
            <p className="text-gray-500 text-[13px] leading-relaxed">
              Equipped with our proprietary Caliber-R1 movement, ensuring a
              72-hour power reserve with surgical accuracy.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-12 w-[1px] bg-gradient-to-b from-white to-transparent hidden md:block"></div>
            <p className="text-[11px] tracking-[0.4em] uppercase text-gray-400 mt-4">
              Craftsmanship Redefined
            </p>
          </div>
          <div className="md:text-right">
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-white mb-4">
              Material
            </h4>
            <p className="text-gray-500 text-[13px] leading-relaxed">
              Forged in Grade 5 Titanium and shielded by double-domed sapphire
              crystal with anti-reflective coating.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HeroSection;
