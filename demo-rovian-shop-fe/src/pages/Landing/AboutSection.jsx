import React from "react";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    // Đổi bg-black sang trắng hồng nhẹ, text-white sang text-black
    <section className="bg-[#fffafb] text-black py-24 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* CỘT TRÁI: Typography lớn làm điểm nhấn */}
        <div className="lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Đổi màu text phụ sang hồng phấn đậm hơn một chút */}
            <h2 className="text-[10px] uppercase tracking-[0.6em] text-rose-400 mb-8 font-semibold">
              The Essence
            </h2>
            <h3 className="text-5xl md:text-7xl font-light leading-tight tracking-tighter text-stone-900">
              Crafting <br />
              <span className="italic font-serif text-rose-300">
                Timeless
              </span>{" "}
              <br />
              Silhouettes.
            </h3>
          </motion.div>
        </div>

        {/* CỘT PHẢI: Nội dung giới thiệu */}
        <div className="lg:col-span-7 lg:pl-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="space-y-8"
          >
            <p className="text-lg md:text-xl font-light leading-relaxed text-stone-700 max-w-xl">
              <span className="text-black font-medium border-b border-rose-200">
                ROVIAN
              </span>{" "}
              is a luxury fashion house born from the intersection of minimalist
              architecture and contemporary tailoring. We believe that true
              elegance lies in the subtraction of the unnecessary.
            </p>

            <div className="space-y-6 text-sm md:text-base text-stone-500 font-light max-w-lg leading-loose">
              <p>
                Each piece in our collection is a testament to meticulous
                craftsmanship, using only the finest sustainable textiles
                sourced from heritage mills. Our aesthetic is defined by sharp
                lines,{" "}
                <span className="text-rose-300 italic">soft palettes</span>, and
                a silent confidence that transcends seasonal trends.
              </p>
              <p>
                Based in the heart of modern minimalism, Rovian continues to
                redefine the wardrobe for the discerning individual who seeks
                sophistication without effort.
              </p>
            </div>

            {/* Link tìm hiểu thêm với hiệu ứng hover màu hồng */}
            <motion.a
              href="/about"
              className="inline-block group pt-4"
              whileHover={{ x: 10 }}
            >
              <span className="text-[10px] uppercase tracking-[0.5em] pb-2 border-b border-rose-200 group-hover:border-rose-400 group-hover:text-rose-500 transition-colors cursor-pointer text-stone-400">
                Our Heritage —&gt;
              </span>
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Subtle branding ở dưới - Đổi sang màu hồng cực nhạt để ẩn hiện */}
      <div className="mt-32 flex justify-center opacity-[0.03]">
        <span className="text-[15vw] font-bold tracking-[0.2em] select-none text-rose-900">
          ROVIAN
        </span>
      </div>
    </section>
  );
};

export default AboutSection;
