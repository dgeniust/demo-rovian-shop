import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import rovianBentoGrid from "../../assets/Rovian_BentoGrid.png"; // Giữ nguyên import của bạn

const LOOKBOOK_DATA = [
  {
    id: 1,
    src: "https://superwatchman.com/wp-content/uploads/2023/11/Snapinsta.app_403849218_244414635057875_2245932043618995273_n_1080.jpg",
    tag: "01 / Editorial",
    title: "Sweater",
  },
  {
    id: 2,
    src: rovianBentoGrid,
    tag: "02 / Texture",
    title: "Coat",
  }, // Thay tạm link nếu không có file local
  {
    id: 3,
    src: "https://file.hstatic.net/1000234497/file/rolex-hay-patek-philippe-ai-la-vua-giu-gia-dong-ho-tren-the-gioi-1.jpg",
    tag: "03 / Detail",
    title: "Watch",
  },
  {
    id: 4,
    src: "https://admin.vuahanghieu.com/upload/news/content/2023/07/cac-mau-dong-ho-cartier-noi-bat-nhat-2-jpg-1690353593-26072023133953.jpg",
    tag: "04 / Style",
    title: "Vogue",
  },
  {
    id: 5,
    src: "https://image.voh.com.vn/voh/Image/2021/07/01/son-ye-jin-song-hye-kyo-jun-ji-hyun-anh2.jpg?t=o",
    tag: "05 / Mood",
    title: "Essence",
  },
  {
    id: 6,
    src: "https://cdn-media.sforum.vn/storage/app/media/dong-ho-dat-nhat-the-gioi-10.jpg",
    tag: "06 / Finale",
    title: "Luxury",
  },
];

const LookbookGrid = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Tạo hiệu ứng Spring để Parallax mượt như bơ
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const ySlow = useTransform(smoothProgress, [0, 1], [0, 80]);
  const yFast = useTransform(smoothProgress, [0, 1], [0, -80]);

  // Variant cho hiệu ứng reveal sang trọng
  const revealVariant = {
    hidden: { clipPath: "inset(100% 0% 0% 0%)", opacity: 0 },
    visible: (i) => ({
      clipPath: "inset(0% 0% 0% 0%)",
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: [0.19, 1, 0.22, 1],
        delay: i * 0.1,
      },
    }),
  };

  return (
    <section ref={containerRef} className="bg-black py-16 px-6 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-20 flex justify-between items-end border-b border-white/10 pb-10"
        >
          <h2 className="text-6xl font-light tracking-tighter text-white italic">
            Bento Lookbook
          </h2>
          <span className="text-[11px] uppercase tracking-[0.6em] text-white/30">
            S/S 2026 Collection
          </span>
        </motion.div>

        {/* Cấu trúc Bento Grid chính */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-auto md:h-[1200px]">
          {/* Item 1 - Big Vertical */}
          <motion.div
            custom={0}
            variants={revealVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ y: ySlow }}
            className="md:col-span-2 md:row-span-2 relative overflow-hidden group bg-zinc-900"
          >
            <motion.img
              src={LOOKBOOK_DATA[0].src}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[2000ms] group-hover:scale-110"
              alt=""
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-1000 flex items-end p-12">
              <span className="text-white text-[10px] tracking-[0.5em] uppercase border-l border-white/30 pl-4">
                {LOOKBOOK_DATA[0].tag}
              </span>
            </div>
          </motion.div>

          {/* Item 2 - Horizontal */}
          <motion.div
            custom={1}
            variants={revealVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ y: yFast }}
            className="md:col-span-2 md:row-span-1 relative overflow-hidden group bg-zinc-900"
          >
            <img
              src={LOOKBOOK_DATA[1].src}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[2000ms] group-hover:scale-105"
              alt=""
            />
          </motion.div>

          {/* Item 3 & 4 - Small boxes */}
          {[LOOKBOOK_DATA[2], LOOKBOOK_DATA[3]].map((img, index) => (
            <motion.div
              key={img.id}
              custom={index + 2}
              variants={revealVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="md:col-span-1 md:row-span-1 relative overflow-hidden group bg-zinc-900"
            >
              <img
                src={img.src}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[2000ms] group-hover:scale-110"
                alt=""
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-700 backdrop-blur-[2px]">
                <span className="text-white text-[9px] tracking-[0.5em] uppercase">
                  View Detail
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- Phần Footer (Ảnh 5 & 6) --- */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            custom={4}
            variants={revealVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="md:col-span-1 h-[500px] overflow-hidden group relative"
          >
            <img
              src={LOOKBOOK_DATA[4].src}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[2000ms] group-hover:scale-105"
              alt=""
            />
          </motion.div>

          <motion.div
            custom={5}
            variants={revealVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="md:col-span-2 h-[500px] overflow-hidden group relative bg-zinc-900"
          >
            <img
              src={LOOKBOOK_DATA[5].src}
              className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-[2500ms]"
              alt=""
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <h2 className="text-white text-7xl md:text-[10rem] font-light tracking-[ -0.05em] mix-blend-difference opacity-50 group-hover:opacity-100 transition-all duration-[1500ms]">
                ROVIAN
              </h2>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LookbookGrid;
