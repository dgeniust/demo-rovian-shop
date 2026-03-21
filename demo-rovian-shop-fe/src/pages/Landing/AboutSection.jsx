import React from "react";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="bg-black text-white py-32 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* CỘT TRÁI: Typography lớn làm điểm nhấn */}
        <div className="lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h2 className="text-[10px] uppercase tracking-[0.6em] text-white/40 mb-8">
              The Essence
            </h2>
            <h3 className="text-5xl md:text-7xl font-light leading-tight tracking-tighter">
              Crafting <br />
              <span className="italic font-serif">Timeless</span> <br />
              Silhouettes.
            </h3>
          </motion.div>
        </div>

        {/* CỘT PHẢI: Nội dung giới thiệu bằng tiếng Anh */}
        <div className="lg:col-span-7 lg:pl-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="space-y-8"
          >
            <p className="text-lg md:text-xl font-light leading-relaxed text-white/80 max-w-xl">
              <span className="text-white font-medium">ROVIAN</span> is a luxury
              fashion house born from the intersection of minimalist
              architecture and contemporary tailoring. We believe that true
              elegance lies in the subtraction of the unnecessary.
            </p>

            <div className="space-y-6 text-sm md:text-base text-white/60 font-light max-w-lg leading-loose">
              <p>
                Each piece in our collection is a testament to meticulous
                craftsmanship, using only the finest sustainable textiles
                sourced from heritage mills. Our aesthetic is defined by sharp
                lines, neutral palettes, and a silent confidence that transcends
                seasonal trends.
              </p>
              <p>
                Based in the heart of modern minimalism, Rovian continues to
                redefine the wardrobe for the discerning individual who seeks
                sophistication without effort.
              </p>
            </div>

            {/* Link tìm hiểu thêm với hiệu ứng hover */}
            <motion.a
              href="/about"
              className="inline-block group pt-4"
              whileHover={{ x: 10 }}
            >
              <span className="text-[10px] uppercase tracking-[0.5em] pb-2 border-b border-white/20 group-hover:border-white transition-colors cursor-pointer">
                Our Heritage —&gt;
              </span>
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Một chi tiết đồ họa nhỏ chạy ngang (Subtle branding) */}
      <div className="mt-32 flex justify-center opacity-5">
        <span className="text-[15vw] font-bold tracking-[0.2em] select-none">
          ROVIAN
        </span>
      </div>
    </section>
  );
};

export default AboutSection;
