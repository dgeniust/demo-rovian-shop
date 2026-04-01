import React from "react";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="bg-[#0a0a0a] text-white font-['Google_Sans_Flex'] py-24 px-6 md:px-12 lg:px-24 overflow-hidden relative">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
        {/* CỘT TRÁI: Typography lớn làm điểm nhấn */}
        <div className="lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h2 className="text-[10px] uppercase tracking-[0.6em] text-zinc-500 mb-8 font-semibold">
              Triết Lý Chế Tác
            </h2>
            <h3 className="text-5xl md:text-7xl font-light leading-tight tracking-tighter text-white">
              Kiến tạo <br />
              <span className="italic font-serif text-zinc-400">
                những tuyệt tác
              </span>{" "}
              <br />
              vượt thời gian.
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
            <p className="text-lg md:text-xl font-light leading-relaxed text-zinc-300 max-w-xl">
              <span className="text-white font-medium border-b border-zinc-700">
                ROVIAN
              </span>{" "}
              là biểu tượng của sự lịch lãm đích thực, nơi giao thoa giữa cơ khí
              chính xác và nghệ thuật chế tác đương đại. Chúng tôi tin rằng đẳng
              cấp thực thụ nằm ở sự tĩnh lặng và bản lĩnh vượt trội.
            </p>

            <div className="space-y-6 text-sm md:text-base text-zinc-500 font-light max-w-lg leading-loose">
              <p>
                Mỗi tuyệt tác trong bộ sưu tập là minh chứng cho sự tỉ mỉ tột
                cùng, được rèn giũa từ những vật liệu nguyên bản và thượng hạng
                nhất. Thẩm mỹ của chúng tôi định hình qua những đường cắt nam
                tính, sắc sảo,
                <span className="text-zinc-400 italic ml-1">
                  tinh tế trong từng chuyển động
                </span>
                , và một phong thái tự tin – thứ bản lĩnh đứng ngoài mọi vòng
                xoáy trào lưu.
              </p>
              <p>
                Khởi nguồn từ khao khát vươn tới sự hoàn mỹ, ROVIAN không ngừng
                tái định nghĩa chuẩn mực xa xỉ cho những quý ông hiện đại –
                những cá nhân tìm kiếm sự khẳng định vị thế một cách tự nhiên và
                đầy quyền uy.
              </p>
            </div>

            {/* Link tìm hiểu thêm */}
            <motion.a
              href="/about"
              className="inline-block group pt-4"
              whileHover={{ x: 10 }}
            >
              <span className="text-[10px] uppercase tracking-[0.5em] pb-2 border-b border-zinc-800 group-hover:border-white group-hover:text-white transition-colors cursor-pointer text-zinc-500">
                Khám Phá Di Sản —&gt;
              </span>
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Subtle branding */}
      <div className="mt-32 flex justify-center opacity-[0.02] absolute bottom-0 left-0 w-full pointer-events-none select-none z-0">
        <span className="text-[15vw] font-bold tracking-[0.2em] text-white">
          ROVIAN
        </span>
      </div>
    </section>
  );
};

export default AboutSection;
