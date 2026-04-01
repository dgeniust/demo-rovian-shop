import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import rovianBentoGrid from "../../assets/Rovian_BentoGrid.png";
import model1 from "../../assets/model1_lbgrid.jpeg";
import model2 from "../../assets/model2_lbgrid.jpeg";
import model3 from "../../assets/model3_lbgrid.jpeg";
import prod1 from "../../assets/prod1_lbgrid.png";
import prod2 from "../../assets/prod2_lbgrid.png";
import prod3 from "../../assets/prod3_lbgrid.png";
const LOOKBOOK_DATA = [
  {
    id: 1,
    src: model1,
    tag: "01 / Ảnh Biên Tập",
    title: "Áo Len",
  },
  { id: 2, src: prod3, tag: "02 / Chất Liệu", title: "Áo Khoác" },
  {
    id: 3,
    src: prod2,
    tag: "03 / Tuyệt Tác",
    title: "Đồng Hồ",
  },
  {
    id: 4,
    src: model2,
    tag: "04 / Phong Cách",
    title: "Thời Thượng",
  },
  {
    id: 5,
    src: model3,
    tag: "05 / Cảm Hứng",
    title: "Bản Sắc",
  },
  {
    id: 6,
    src: prod1,
    tag: "06 / Kết Màn",
    title: "Xa Xỉ",
  },
];

const LookbookGrid = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const ySlow = useTransform(smoothProgress, [0, 1], [0, 80]);
  const yFast = useTransform(smoothProgress, [0, 1], [0, -80]);

  const revealVariant = {
    hidden: { clipPath: "inset(100% 0% 0% 0%)", opacity: 0 },
    visible: (i) => ({
      clipPath: "inset(0% 0% 0% 0%)",
      opacity: 1,
      transition: { duration: 1.5, ease: [0.19, 1, 0.22, 1], delay: i * 0.1 },
    }),
  };

  return (
    <section
      ref={containerRef}
      className="bg-[#fffafb] py-24 px-6 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-12 md:mb-20 flex flex-col md:flex-row justify-between items-start md:items-end border-b border-rose-100 pb-6 md:pb-10 gap-4"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-['Roboto_Slab'] font-[350] tracking-tighter text-black italic leading-tight">
            Bento <span className="text-rose-300 not-italic">Lookbook</span>
          </h2>

          <div className="flex flex-col items-start md:items-end gap-1">
            <span className="text-[9px] md:text-[11px] uppercase tracking-[0.4em] md:tracking-[0.6em] text-rose-400 font-medium whitespace-nowrap">
              Bộ Sưu Tập Xuân Hè 2026
            </span>
            <div className="w-12 h-[1px] bg-rose-200 md:hidden"></div>
          </div>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-auto md:h-[1200px]">
          {/* Item 1 - Big Vertical */}
          <motion.div
            style={{ y: ySlow }}
            className="md:col-span-2 md:row-span-2 relative overflow-hidden group bg-rose-50"
          >
            <motion.img
              src={LOOKBOOK_DATA[0].src}
              className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-[2000ms] group-hover:scale-105"
              alt="Editorial"
            />
            <div className="absolute inset-0 bg-rose-900/10 group-hover:bg-transparent transition-colors duration-1000 flex items-end p-12">
              <span className="text-black text-[10px] tracking-[0.5em] uppercase border-l border-rose-300 pl-4 font-medium">
                {LOOKBOOK_DATA[0].tag}
              </span>
            </div>
          </motion.div>

          {/* Item 2 - Horizontal */}
          <motion.div
            style={{ y: yFast }}
            className="md:col-span-2 md:row-span-1 relative overflow-hidden group bg-rose-50"
          >
            <img
              src={LOOKBOOK_DATA[1].src}
              className="w-full h-full object-cover group-hover:scale-105 transition-all duration-[2000ms]"
              alt="Texture"
            />
          </motion.div>

          {/* Item 3 & 4 - Small boxes */}
          {[LOOKBOOK_DATA[3], LOOKBOOK_DATA[2]].map((img, index) => (
            <motion.div
              key={img.id}
              className="md:col-span-1 md:row-span-1 relative overflow-hidden group bg-rose-50"
            >
              <img
                src={img.src}
                className="w-full h-full object-cover transition-all duration-[2000ms] group-hover:scale-110"
                alt="Detail"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-rose-100/40 opacity-0 group-hover:opacity-100 transition-all duration-700 backdrop-blur-[2px]">
                <span className="text-rose-900 text-[9px] tracking-[0.5em] uppercase font-bold">
                  Xem Chi Tiết
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Section */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div className="md:col-span-1 h-[500px] overflow-hidden group relative bg-rose-50">
            <img
              src={LOOKBOOK_DATA[4].src}
              className="w-full h-full object-cover group-hover:scale-105 transition-all duration-[2000ms]"
              alt="Mood"
            />
          </motion.div>

          <motion.div className="md:col-span-2 h-[500px] overflow-hidden group relative bg-rose-100">
            <img
              src={LOOKBOOK_DATA[5].src}
              className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-all duration-[2500ms]"
              alt="Luxury"
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <h2 className="text-white text-7xl md:text-[10rem] font-serif font-light tracking-[-0.05em] mix-blend-overlay opacity-80 group-hover:opacity-100 transition-all duration-[1500ms]">
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
