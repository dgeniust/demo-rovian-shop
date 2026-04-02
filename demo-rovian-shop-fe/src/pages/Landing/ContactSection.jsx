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

  const contactDetails = [
    {
      title: "Yêu cầu tư vấn",
      body: (
        <a
          href="mailto:rovianwatch@gmail.com"
          className="text-base sm:text-lg md:text-xl font-light text-zinc-300 hover:text-white transition-colors block break-words tracking-tight"
        >
          rovianwatch@gmail.com
        </a>
      ),
    },
    {
      title: "Xưởng chế tác Flagship",
      body: (
        <p className="text-base sm:text-lg md:text-xl font-light text-zinc-300 hover:text-white transition-colors block break-words tracking-tight">
          24 Rue du Faubourg <br /> Saint-Honoré, Paris
        </p>
      ),
    },
    {
      title: "GIỜ LÀM VIỆC",
      body: (
        <p className="text-base sm:text-lg md:text-xl font-light text-zinc-300 hover:text-white transition-colors block break-words tracking-tight">
          THỨ 2 — THỨ 6: 09:00 - 18:00
        </p>
      ),
    },
    {
      title: "Theo dõi chúng tôi",
      body: (
        <div className="flex flex-wrap gap-6 justify-start lg:justify-end">
          {["Instagram", "Pinterest", "LinkedIn"].map((link) => (
            <a
              key={link}
              href="#"
              className="text-base sm:text-lg md:text-xl font-light text-zinc-300 hover:text-white transition-colors block break-words tracking-tight"
            >
              {link}
            </a>
          ))}
        </div>
      ),
    },
  ];

  return (
    <section className="bg-[#0a0a0a] text-white py-16 md:py-24 px-6 md:px-12 lg:px-24 overflow-visible border-t border-zinc-900 font-['Google_Sans_Flex'] min-h-screen">
      <div className="max-w-[1400px] mx-auto">
        {/* HEADER SECTION */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mb-12 md:mb-20 border-b border-zinc-800 pb-10 text-left"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-['Roboto_Slab'] font-[350] tracking-tighter text-white leading-tight"
          >
            Liên hệ
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-sm md:text-base leading-relaxed tracking-[0.2em] md:tracking-[0.3em] text-zinc-400 font-medium whitespace-nowrap uppercase flex items-center gap-4 justify-start"
          >
            <span className="w-8 h-[1px] bg-zinc-700"></span>
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
              className="text-2xl sm:text-3xl md:text-4xl font-['Roboto_Slab'] font-[350] tracking-tighter text-white leading-tight italic"
            >
              Nghệ thuật của <br /> Sự tận tâm thầm lặng
            </motion.h3>

            <motion.div
              variants={itemVariants}
              className="space-y-6 text-sm md:text-base leading-relaxed font-medium text-zinc-400"
            >
              <p>
                Tại{" "}
                <span className="text-white font-medium border-b border-zinc-700 pb-1">
                  ROVIAN
                </span>
                , mối quan hệ giữa chúng tôi và bạn không chỉ dừng lại ở một
                tuyệt tác trên cổ tay, mà khởi nguồn từ sự thấu hiểu và gắn kết
                bền vững.
              </p>
              <p>
                Mọi yêu cầu đều được chúng tôi xử lý với sự chuẩn xác tuyệt đối
                của cơ khí. Đội ngũ chuyên gia luôn sẵn sàng đảm bảo trải nghiệm
                của bạn hoàn mỹ và trọn vẹn như chính những cỗ máy thời gian
                chúng tôi chế tác.
              </p>

              {/* Quote Line */}
              <motion.div
                className="mt-10 pt-2 border-l-2 border-zinc-600 pl-6 space-y-6 text-sm md:text-base leading-relaxed font-medium text-zinc-500 cursor-pointer"
                whileHover={{ borderLeftColor: "#ffffff", x: 5 }}
              >
                "Sự xa xỉ đích thực được khẳng định qua sự tĩnh lặng của một
                dịch vụ đẳng cấp."
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
            {contactDetails.map((item) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                className="group"
              >
                <h4 className="text-sm md:text-base leading-relaxed tracking-[0.2em] md:tracking-[0.3em] text-zinc-400 font-medium whitespace-nowrap uppercase mb-3 lg:justify-end">
                  {item.title}
                </h4>
                {item.body}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
