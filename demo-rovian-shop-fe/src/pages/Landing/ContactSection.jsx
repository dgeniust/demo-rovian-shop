import React from "react";
import { motion } from "framer-motion";

const ContactSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="bg-[#fffafb] text-black py-16 md:py-24 px-6 md:px-12 lg:px-24 overflow-hidden border-t border-rose-100 font-['Google_Sans_Flex']">
      <div className="max-w-[1400px] mx-auto">
        {/* HEADER SECTION */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mb-12 md:mb-20 border-b border-rose-100 pb-10 text-left"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-6xl md:text-7xl font-light font-serif tracking-tighter mb-6 italic text-stone-900"
          >
            Liên hệ
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-[10px] md:text-[11px] uppercase tracking-[0.4em] text-rose-400 font-medium flex items-center gap-4 justify-start"
          >
            <span className="w-8 h-[1px] bg-rose-200"></span>
            Luôn sẵn sàng đồng hành cùng bạn
          </motion.p>
        </motion.div>

        {/* MAIN CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start">
          {/* CỘT 1: Philosophy */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="space-y-8 md:space-y-12 text-left"
          >
            <motion.h3
              variants={itemVariants}
              className="text-3xl md:text-4xl font-light italic text-black leading-tight"
            >
              Nghệ thuật của <br /> Sự tận tâm thầm lặng
            </motion.h3>

            <motion.div
              variants={itemVariants}
              className="space-y-6 text-stone-600 font-light leading-relaxed max-w-xl text-base md:text-lg"
            >
              <p>
                Tại{" "}
                <span className="text-black font-medium border-b border-rose-100">
                  ROVIAN
                </span>
                , mối quan hệ giữa chúng tôi và bạn không chỉ bắt đầu từ một đơn
                hàng, mà khởi nguồn từ sự thấu hiểu và kéo dài mãi về sau.
              </p>
              <p>
                Mọi yêu cầu đều được chúng tôi xử lý với sự chuẩn xác tuyệt đối.
                Đội ngũ tư vấn tận tâm sẽ đảm bảo trải nghiệm của bạn luôn mượt
                mà và tinh tế như chính những bộ sưu tập của chúng tôi.
              </p>

              {/* Quote Line */}
              <motion.div
                className="mt-10 pt-2 border-l-2 border-rose-200 pl-6 italic text-rose-800 text-base font-light"
                whileHover={{ borderLeftColor: "#fb7185", x: 5 }}
              >
                "Sự xa xỉ đích thực được cảm nhận qua sự tĩnh lặng của một dịch
                vụ hoàn hảo."
              </motion.div>
            </motion.div>
          </motion.div>

          {/* CỘT 2: Contact Details */}
          <motion.div
            className="flex flex-col space-y-12 md:space-y-16 text-left lg:text-right"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {/* Email */}
            <motion.div variants={itemVariants} className="group">
              <h4 className="text-[10px] uppercase tracking-[0.4em] text-rose-400 mb-3 font-semibold lg:justify-end">
                Yêu cầu tư vấn
              </h4>
              <a
                href="mailto:concierge@rovian.com"
                className="text-xl sm:text-2xl md:text-3xl font-light text-stone-800 hover:text-black transition-colors block break-words tracking-tight"
              >
                concierge@rovian.com
              </a>
            </motion.div>

            {/* Address */}
            <motion.div variants={itemVariants}>
              <h4 className="text-[10px] uppercase tracking-[0.4em] text-rose-400 mb-3 font-semibold lg:justify-end">
                Xưởng chế tác Flagship
              </h4>
              <p className="text-xl md:text-2xl font-light leading-snug text-stone-900 tracking-tight">
                24 Rue du Faubourg <br /> Saint-Honoré, Paris
              </p>
            </motion.div>

            {/* Socials */}
            <motion.div variants={itemVariants}>
              <h4 className="text-[10px] uppercase tracking-[0.4em] text-rose-400 mb-6 font-semibold lg:justify-end">
                Theo dõi chúng tôi
              </h4>
              <div className="flex flex-wrap gap-6 justify-start lg:justify-end">
                {["Instagram", "Pinterest", "LinkedIn"].map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="text-[10px] uppercase tracking-widest text-stone-500 hover:text-rose-600 transition-colors font-medium border-b border-transparent hover:border-rose-400 pb-1"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Footer nhỏ bên dưới */}
            <div className="pt-8 border-t border-rose-100 flex flex-row justify-between lg:justify-end lg:gap-12 items-center">
              <div className="text-left lg:text-right">
                <p className="text-[9px] text-rose-400 tracking-[0.2em] mb-1 font-bold">
                  GIỜ LÀM VIỆC
                </p>
                <p className="text-[10px] text-stone-500 uppercase">
                  THỨ 2 — THỨ 6: 09:00 - 18:00
                </p>
              </div>
              <div className="text-[10px] text-rose-300 italic">
                ©2026 ROVIAN
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
