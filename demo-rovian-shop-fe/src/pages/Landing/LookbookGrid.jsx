import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import rovianBentoGrid from "../../assets/Rovian_BentoGrid.png";

const LOOKBOOK_DATA = [
  {
    id: 1,
    src: "https://superwatchman.com/wp-content/uploads/2023/11/Snapinsta.app_403849218_244414635057875_2245932043618995273_n_1080.jpg",
    tag: "01 / Editorial",
    title: "Sweater",
  },
  { id: 2, src: rovianBentoGrid, tag: "02 / Texture", title: "Coat" },
  {
    id: 3,
    src: "https://frodos.com.vn/wp-content/uploads/2022/12/cho1-scaled.jpg",
    title: "Watch",
  },
  {
    id: 4,
    src: "https://objects-prod.cdn.chopard.com/image/upload/t_navigation-card-portrait/q_auto,f_auto,dpr_auto/Campaigns/the-art-of-gifting/the-art-of-gifting-gifts-for-her-eu-and-all",
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
    // Đổi bg-black thành bg-white hoặc bg-[#fffafb]
    <section
      ref={containerRef}
      className="bg-[#fffafb] py-24 px-6 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Header Section - Đổi màu border và text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          /* Sử dụng flex-col trên mobile (mặc định) và flex-row trên md (tablet/desktop)
     items-start trên mobile và items-end trên desktop để tạo độ lệch sang trọng
  */
          className="mb-12 md:mb-20 flex flex-col md:flex-row justify-between items-start md:items-end border-b border-rose-100 pb-6 md:pb-10 gap-4"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-light tracking-tighter text-black italic leading-tight">
            Bento <span className="text-rose-300 not-italic">Lookbook</span>
          </h2>

          <div className="flex flex-col items-start md:items-end gap-1">
            <span className="text-[9px] md:text-[11px] uppercase tracking-[0.4em] md:tracking-[0.6em] text-rose-400 font-medium whitespace-nowrap">
              S/S 2026 Collection
            </span>
            {/* Thêm một line nhỏ dưới chữ collection trên mobile để cân bằng layout */}
            <div className="w-12 h-[1px] bg-rose-200 md:hidden"></div>
          </div>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-auto md:h-[1200px]">
          {/* Item 1 - Big Vertical */}
          <motion.div
            custom={0}
            variants={revealVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ y: ySlow }}
            // Đổi bg-zinc-900 thành bg-rose-50
            className="md:col-span-2 md:row-span-2 relative overflow-hidden group bg-rose-50"
          >
            <motion.img
              src={LOOKBOOK_DATA[0].src}
              // Thay grayscale thành sepia nhẹ hoặc giữ màu tự nhiên để trông "nữ tính" hơn
              className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-[2000ms] group-hover:scale-105"
              alt=""
            />
            <div className="absolute inset-0 bg-rose-900/10 group-hover:bg-transparent transition-colors duration-1000 flex items-end p-12">
              <span className="text-black text-[10px] tracking-[0.5em] uppercase border-l border-rose-300 pl-4 font-medium">
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
            className="md:col-span-2 md:row-span-1 relative overflow-hidden group bg-rose-50"
          >
            <img
              src={LOOKBOOK_DATA[1].src}
              className="w-full h-full object-cover group-hover:scale-105 transition-all duration-[2000ms]"
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
              className="md:col-span-1 md:row-span-1 relative overflow-hidden group bg-rose-50"
            >
              <img
                src={img.src}
                className="w-full h-full object-cover transition-all duration-[2000ms] group-hover:scale-110"
                alt=""
              />
              {/* Overlay chuyển sang màu hồng phấn mờ */}
              <div className="absolute inset-0 flex items-center justify-center bg-rose-100/40 opacity-0 group-hover:opacity-100 transition-all duration-700 backdrop-blur-[2px]">
                <span className="text-rose-900 text-[9px] tracking-[0.5em] uppercase font-bold">
                  View Detail
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Section */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            custom={4}
            variants={revealVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="md:col-span-1 h-[500px] overflow-hidden group relative bg-rose-50"
          >
            <img
              src={LOOKBOOK_DATA[4].src}
              className="w-full h-full object-cover group-hover:scale-105 transition-all duration-[2000ms]"
              alt=""
            />
          </motion.div>

          <motion.div
            custom={5}
            variants={revealVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="md:col-span-2 h-[500px] overflow-hidden group relative bg-rose-100"
          >
            <img
              src={LOOKBOOK_DATA[5].src}
              className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-all duration-[2500ms]"
              alt=""
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              {/* Chữ ROVIAN đổi sang màu hồng cực nhạt với mix-blend-mode để hiện rõ trên nền ảnh */}
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
