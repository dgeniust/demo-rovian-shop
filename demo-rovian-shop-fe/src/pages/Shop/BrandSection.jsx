import React from "react";
import { ArrowUpRight } from "lucide-react"; // Cần cài đặt lucide-react

const BrandSection = () => {
  const brands = [
    "Rolex",
    "Jaeger-LeCoultre",
    "Audemars Piguet",
    "Louis Moinet",
    "De Bethune",
  ];

  return (
    <section className="bg-white text-black py-20 px-6 md:px-12 lg:px-24 font-sans">
      {/* Header */}
      <div className="mb-16 text-center lg:text-left">
        <h2 className="text-5xl md:text-7xl font-light uppercase tracking-tighter italic font-serif">
          Shop Our <span className="font-bold not-italic">Brands</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Brand List & Main Image */}
        <div className="lg:col-span-7 space-y-12">
          {/* Main Context Image with Creative Crop */}
          <div className="relative group overflow-hidden bg-gray-100 rounded-sm">
            <img
              src="https://rolex.dafc.com.vn/rolex/wp-content/uploads/2024/06/servicing-your-rolex-dafc-expert.jpg"
              alt="Luxury Watch"
              className="w-full h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 border-[20px] border-white/10 pointer-events-none"></div>
          </div>

          {/* Brands List */}
          <div className="border-t border-black/10">
            {brands.map((brand, index) => (
              <a
                key={index}
                href="#"
                className="group flex items-center justify-between py-6 border-b border-black/10 hover:bg-black hover:text-white transition-all duration-300 px-4 hover:italic font-medium"
              >
                <span className="text-2xl md:text-3xl font-medium tracking-tight uppercase">
                  {brand}
                </span>
                <ArrowUpRight className="w-6 h-6 transform group-hover:rotate-45 transition-transform duration-300" />
              </a>
            ))}
          </div>
        </div>

        {/* Right Column: Sticky Product Card */}
        <div className="lg:col-span-5 lg:sticky lg:top-10 space-y-8">
          <div className="bg-[#f9f9f9] p-8 md:p-12 text-center group">
            {/* Product Image */}
            <div className="relative mb-8 transform transition-transform duration-500 group-hover:scale-105">
              <img
                src="https://sothebys-md.brightspotcdn.com/dims4/default/201b89d/2147483647/strip/true/crop/3543x3543+0+0/resize/2048x2048!/quality/90/?url=http%3A%2F%2Fsothebys-brightspot.s3.amazonaws.com%2Fmedia-desk%2F16%2F50%2F98e847854f0e91c14d181d71040c%2Fn10701-bxkn5.jpg"
                alt='Rolex Daytona "Paul Newman" (Ref. 6239)'
                className="w-full object-contain mix-blend-multiply"
              />
            </div>

            {/* Product Info */}
            <div className="space-y-2">
              <h3 className="text-xl font-bold uppercase tracking-widest">
                Rolex Daytona "Paul Newman"
              </h3>
              <p className="text-gray-500 font-medium">$17,752,500</p>
              <div className="pt-4">
                <span className="text-[12px] text-gray-400 font-mono tracking-tighter">
                  REF. 6239
                </span>
              </div>
            </div>
          </div>

          {/* Small Secondary Image (Sáng tạo thêm) */}
          <div className="hidden md:flex gap-4 items-center justify-end opacity-50 hover:opacity-100 transition-opacity">
            <p className="text-right text-xs uppercase tracking-widest leading-relaxed max-w-[150px]">
              The excellence of craftsmanship in every movement.
            </p>
            <div className="w-24 h-24 bg-black"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandSection;
