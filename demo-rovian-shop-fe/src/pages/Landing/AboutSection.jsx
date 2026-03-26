import React from "react";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="bg-[#fffafb] text-black font-['Google_Sans_Flex'] py-24 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* CỘT TRÁI: Typography lớn làm điểm nhấn */}
        <div className="lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h2 className="text-[10px] uppercase tracking-[0.6em] text-rose-400 mb-8 font-semibold">
              Cốt Cách Thương Hiệu
            </h2>
            <h3 className="text-5xl md:text-7xl font-light leading-tight tracking-tighter text-stone-900">
              Kiến tạo <br />
              <span className="italic font-serif text-rose-300">
                những đường nét
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
            <p className="text-lg md:text-xl font-light leading-relaxed text-stone-700 max-w-xl">
              <span className="text-black font-medium border-b border-rose-200">
                ROVIAN
              </span>{" "}
              là biểu tượng thời trang xa xỉ, nơi giao thoa giữa triết lý kiến
              trúc tối giản và nghệ thuật may đo đương đại. Chúng tôi tin rằng
              sự thanh lịch thực thụ nằm ở việc chắt lọc những giá trị nguyên
              bản nhất.
            </p>

            <div className="space-y-6 text-sm md:text-base text-stone-500 font-light max-w-lg leading-loose">
              <p>
                Mỗi tuyệt tác trong bộ sưu tập là lời cam kết về sự tỉ mỉ, được
                dệt nên từ những sợi vải thượng hạng nhất. Thẩm mỹ của chúng tôi
                định hình qua những đường cắt sắc sảo,
                <span className="text-rose-300 italic ml-1">
                  bảng màu dịu nhẹ
                </span>
                , và một sự tự tin tĩnh lặng – thứ vẻ đẹp đứng ngoài mọi vòng
                xoáy trào lưu.
              </p>
              <p>
                Khởi nguồn từ trái tim của chủ nghĩa tối giản, ROVIAN không
                ngừng tái định nghĩa tủ đồ cho những cá nhân tinh tế – những
                người tìm kiếm sự sang trọng trong sự tự nhiên, không gắng
                gượng.
              </p>
            </div>

            {/* Link tìm hiểu thêm */}
            <motion.a
              href="/about"
              className="inline-block group pt-4"
              whileHover={{ x: 10 }}
            >
              <span className="text-[10px] uppercase tracking-[0.5em] pb-2 border-b border-rose-200 group-hover:border-rose-400 group-hover:text-rose-500 transition-colors cursor-pointer text-stone-400">
                Di Sản Của Chúng Tôi —&gt;
              </span>
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Subtle branding */}
      <div className="mt-32 flex justify-center opacity-[0.03]">
        <span className="text-[15vw] font-bold tracking-[0.2em] select-none text-rose-900">
          ROVIAN
        </span>
      </div>
    </section>
  );
};

export default AboutSection;
