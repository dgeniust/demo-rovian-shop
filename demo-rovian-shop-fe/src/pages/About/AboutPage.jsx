import React from "react";
import StatsSection from "./StatsSection";

const AboutPage = () => {
  return (
    <div className="bg-white text-black min-h-screen pt-32 pb-20 px-6 md:px-12 lg:px-24 font-sans">
      {/* SECTION 1: HERO ABOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-32">
        {/* Left: Text Content */}
        <div className="lg:col-span-4 space-y-8">
          <h1 className="text-8xl md:text-9xl font-black tracking-tighter leading-[0.8] uppercase italic font-serif">
            THE <br /> STORY
          </h1>
          <div className="space-y-6 pt-10">
            <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-gray-400">
              Mastering the Art of Timekeeping
            </p>
            <p className="text-sm leading-relaxed text-gray-600 max-w-xs font-medium">
              A legacy built on precision, where every second is a testament to
              human ingenuity and aesthetic perfection.
            </p>
          </div>
        </div>

        {/* Center: Large Image */}
        <div className="lg:col-span-5 relative group">
          <img
            src="https://rolex.dafc.com.vn/rolex/wp-content/uploads/2024/06/servicing-your-rolex-dafc-service-centre.jpg"
            alt="Watchmaking Workshop"
            className="w-full h-[550px] object-cover rounded-[60px] grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl"
          />
          <div className="absolute top-8 right-8 bg-white/20 backdrop-blur-md px-6 py-2 rounded-full border border-white/30 text-[9px] uppercase tracking-widest font-bold text-white">
            Established 1994
          </div>
        </div>

        {/* Right: Philosophy Section */}
        <div className="lg:col-span-3 space-y-8 pt-0 lg:pt-24">
          <div className="overflow-hidden rounded-[40px] h-48 border border-gray-100 shadow-sm">
            <img
              src="https://rolex.dafc.com.vn/rolex/wp-content/uploads/2024/06/servicing-your-rolex-dafc-watchmakers.jpg"
              alt="Craftsmanship"
              className="w-full h-full object-cover grayscale transition-transform duration-700 hover:scale-110"
            />
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold tracking-tight uppercase">
              Our Ethos
            </h3>
            <p className="text-[13px] leading-relaxed text-gray-500 font-light italic">
              "At ROVIAN, we don't just assemble components; we breathe life
              into metal and sapphire, creating a silent companion for your
              life's most meaningful moments."
            </p>
          </div>
        </div>
      </div>

      {/* NEW SECTION: DETAILED BRAND INTRODUCTION */}
      <div className="mb-32 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-6 order-2 lg:order-1">
          <div className="space-y-10">
            <div className="inline-block px-5 py-2 bg-black text-white text-[10px] uppercase tracking-[0.3em] font-bold rounded-full">
              Heritage & Innovation
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase leading-tight">
              A Perpetual Quest <br /> for Excellence
            </h2>
            <div className="space-y-6 text-gray-600 leading-relaxed text-[15px]">
              <p>
                The history of <strong>ROVIAN</strong> is intertwined with the
                pursuit of horological perfection. Founded with a vision to
                marry traditional Swiss watchmaking with contemporary industrial
                design, we have spent decades refining the subtle balance
                between form and function.
              </p>
              <p>
                Every timepiece that leaves our workshop is subjected to
                rigorous testing, exceeding industry standards to ensure that it
                not only keeps perfect time but tells a story of unmatched
                quality. Our watchmakers are artisans, hand-finishing movements
                that are as beautiful as they are precise.
              </p>
              <p>
                Today, ROVIAN stands as a symbol of success and refined taste,
                worn by those who understand that a watch is more than a tool—it
                is an heirloom. We continue to push the boundaries of materials,
                from Grade 5 titanium to our proprietary gold alloys, ensuring
                that the legacy of ROVIAN remains as timeless as the seconds we
                measure.
              </p>
            </div>
          </div>
        </div>
        <div className="lg:col-span-6 order-1 lg:order-2">
          <div className="grid grid-cols-2 gap-4">
            <div className="h-[400px] rounded-[40px] overflow-hidden mt-12">
              <img
                src="https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?auto=format&fit=crop&q=80&w=600"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                alt="Watch Detail"
              />
            </div>
            <div className="h-[400px] rounded-[40px] overflow-hidden">
              <img
                src="https://rolex.dafc.com.vn/rolex/wp-content/uploads/2024/06/servicing-your-rolex-dafc-banner-2048x782.jpg"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                alt="Watch Movement"
              />
            </div>
          </div>
        </div>
      </div>

      {/* STATS SECTION */}
      <div className="border-t border-gray-100 pt-10">
        <StatsSection />
      </div>
    </div>
  );
};

export default AboutPage;
