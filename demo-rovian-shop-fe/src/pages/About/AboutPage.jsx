import React from "react";
import StatsSection from "./StatsSection";

const AboutPage = () => {
  return (
    // Đổi nền sang trắng kem hồng (#fffafb)
    <div className="bg-[#fffafb] text-stone-900 min-h-screen pt-32 pb-20 px-6 md:px-12 lg:px-24 font-sans">
      {/* SECTION 1: HERO ABOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
        {/* Left: Text Content */}
        <div className="lg:col-span-4 space-y-8">
          <h1 className="text-8xl md:text-9xl font-light tracking-tighter leading-[0.8] uppercase italic font-serif text-stone-900">
            THE <br /> <span className="text-rose-300 not-italic">STORY</span>
          </h1>
          <div className="space-y-6 pt-10 flex justify-center flex-col items-center">
            <p className="text-[11px] uppercase tracking-[0.4em] font-bold text-rose-400">
              Mastering the Art of Timekeeping
            </p>
            <p className="text-[17px] leading-relaxed text-stone-500 max-w-xs font-light italic">
              A legacy built on precision, where every second is a testament to
              human ingenuity and aesthetic perfection.
            </p>
          </div>
        </div>

        {/* Center: Large Image - Đã bỏ hover hiện màu */}
        <div className="lg:col-span-5 relative group">
          <img
            src="https://rolex.dafc.com.vn/rolex/wp-content/uploads/2024/06/servicing-your-rolex-dafc-service-centre.jpg"
            alt="Watchmaking Workshop"
            // Sử dụng grayscale nhẹ cố định và thêm lớp phủ ấm
            className="w-full h-[550px] object-cover rounded-[60px] grayscale-[20%] sepia-[10%] shadow-xl shadow-rose-100/50"
          />
          <div className="absolute top-8 right-8 bg-white/80 backdrop-blur-md px-6 py-2 rounded-full border border-rose-100 text-[9px] uppercase tracking-widest font-bold text-rose-500">
            Established 1994
          </div>
        </div>

        {/* Right: Philosophy Section */}
        <div className="lg:col-span-3 space-y-8 pt-0 lg:pt-24">
          <div className="overflow-hidden rounded-[40px] h-48 border border-rose-100 shadow-sm">
            <img
              src="https://rolex.dafc.com.vn/rolex/wp-content/uploads/2024/06/servicing-your-rolex-dafc-watchmakers.jpg"
              alt="Craftsmanship"
              className="w-full h-full object-cover grayscale-[30%] brightness-110"
            />
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-serif italic text-stone-800 tracking-tight">
              Our Ethos
            </h3>
            <p className="text-[17px] leading-relaxed text-stone-500 font-light">
              "At ROVIAN, we don't just assemble components; we breathe life
              into metal and sapphire, creating a silent companion for your
              life's most meaningful moments."
            </p>
          </div>
        </div>
      </div>

      {/* NEW SECTION: DETAILED BRAND INTRODUCTION */}
      <div className="mb-40 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-6 order-2 lg:order-1">
          <div className="space-y-10">
            {/* Badge màu hồng Rose thay vì đen */}
            <div className="inline-block px-6 py-2 bg-rose-50 text-rose-500 text-[11px] uppercase tracking-[0.3em] font-bold rounded-full border border-rose-100">
              Heritage & Innovation
            </div>
            <h2 className="text-4xl md:text-5xl font-light tracking-tighter uppercase leading-tight font-serif italic">
              A Perpetual Quest <br />{" "}
              <span className="not-italic text-stone-900 font-bold">
                for Excellence
              </span>
            </h2>
            <div className="space-y-6 text-stone-600 leading-relaxed text-[17px] font-light">
              <p>
                The history of{" "}
                <strong className="text-rose-400 font-medium">ROVIAN</strong> is
                intertwined with the pursuit of horological perfection. Founded
                with a vision to marry traditional Swiss watchmaking with
                contemporary design.
              </p>
              <p>
                Every timepiece that leaves our workshop is subjected to
                rigorous testing, exceeding industry standards to ensure that it
                not only keeps perfect time but tells a story of unmatched
                quality.
              </p>
              <p>
                Today, ROVIAN stands as a symbol of success and refined taste.
                We continue to push the boundaries of materials, from Grade 5
                titanium to our proprietary gold alloys, ensuring that the
                legacy remains timeless.
              </p>
            </div>
          </div>
        </div>

        {/* Gallery Images - Đã bỏ hover hiện màu */}
        <div className="lg:col-span-6 order-1 lg:order-2">
          <div className="grid grid-cols-2 gap-6">
            <div className="h-[400px] rounded-[40px] overflow-hidden mt-12 border border-rose-100">
              <img
                src="https://tamsonvn.com/wp-content/uploads/2025/09/chaumet_11.jpg"
                className="w-full h-full object-cover grayscale-[20%]"
                alt="Watch Detail"
              />
            </div>
            <div className="h-[400px] rounded-[40px] overflow-hidden border border-rose-100">
              <img
                src="https://tamsonvn.com/wp-content/uploads/2023/12/vendome_972x1358_3-identite-972x1358-1.jpg"
                className="w-full h-full object-cover grayscale-[20%]"
                alt="Watch Movement"
              />
            </div>
          </div>
        </div>
      </div>

      {/* STATS SECTION */}
      <div className="border-t border-rose-100 pt-8">
        <StatsSection />
      </div>
    </div>
  );
};

export default AboutPage;
