import React from "react";
import { motion } from "framer-motion";

const ContactSection = () => {
  // Cấu hình animation giữ nguyên sự sang trọng
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1], // Quintic ease out
      },
    },
  };

  return (
    // Đổi bg-black thành trắng kem (#fffafb) và text-white thành text-black
    <section className="bg-[#fffafb] text-black py-32 px-6 md:px-12 lg:px-24 overflow-hidden border-t border-rose-100">
      <div className="max-w-[1400px] mx-auto">
        {/* HEADER SECTION */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          // Đổi màu border sang hồng phấn nhạt
          className="mb-24 border-b border-rose-100 pb-12"
        >
          <motion.h2
            variants={itemVariants}
            // Giữ serif italic cho sự sang trọng, đổi text thành đen
            className="text-6xl md:text-8xl font-light font-serif tracking-tighter mb-6 italic text-stone-900"
          >
            Contact
          </motion.h2>
          <motion.p
            variants={itemVariants}
            // Đổi màu text phụ sang hồng phấn ấm
            className="text-[11px] uppercase tracking-[0.6em] text-rose-400 font-medium flex items-center gap-4"
          >
            <span className="w-8 h-[1px] bg-rose-200"></span>
            At your service, always.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-32">
          {/* CỘT 1: Philosophy & Visual */}
          <div className="lg:col-span-7 space-y-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <motion.h3
                variants={itemVariants}
                className="text-3xl md:text-4xl font-light font-serif italic mb-8 text-black"
              >
                The Art of <br /> Discretionary Care
              </motion.h3>

              <motion.div
                variants={itemVariants}
                // Đổi text-white/50 thành text-stone-600 (xám ấm)
                className="space-y-8 text-stone-600 font-light leading-relaxed max-w-xl text-lg"
              >
                <p>
                  At{" "}
                  <span className="text-black font-medium border-b border-rose-100">
                    ROVIAN
                  </span>
                  , our relationship with you begins long before a purchase and
                  extends far beyond the delivery.
                </p>
                <p>
                  Every inquiry is handled with absolute precision. Our
                  concierge team is dedicated to ensuring your experience is as
                  seamless as our collections.
                </p>
                <motion.div
                  // Đổi border và text sang tone hồng
                  className="pt-6 border-l border-rose-200 pl-8 italic text-rose-800 text-base font-light"
                  whileHover={{
                    borderLeftColor: "rgba(251,113,133,0.8)", // rose-400
                    x: 5,
                    color: "rgba(159,18,57,1)", // rose-900
                  }}
                  transition={{ duration: 0.4 }}
                >
                  "True luxury is felt in the silence of perfect service."
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Ảnh decor với hiệu ứng Reveal và Grayscale nhẹ hơn */}
            <motion.div
              initial={{ clipPath: "inset(100% 0% 0% 0%)", scale: 1.2 }}
              whileInView={{ clipPath: "inset(0% 0% 0% 0%)", scale: 1 }}
              transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
              viewport={{ once: true }}
              // Grayscale 50% để ảnh ấm hơn, không quá lạnh
              className="relative w-full h-[400px] grayscale-[50%] hover:grayscale-0 transition-all duration-1000 overflow-hidden group rounded-sm shadow-sm"
            >
              <img
                src="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&q=80"
                alt="Concierge Service"
                className="w-full h-full object-cover transition-transform duration-[3000ms] group-hover:scale-110"
              />
              {/* Overlay chuyển sang màu hồng phấn mờ */}
              <div className="absolute inset-0 bg-rose-100/10 group-hover:bg-transparent transition-colors duration-700"></div>
            </motion.div>
          </div>

          {/* CỘT 2: Contact Details */}
          <motion.div
            className="lg:col-span-5 space-y-20 flex flex-col justify-between"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <div className="space-y-16">
              {/* Email */}
              <motion.div
                variants={itemVariants}
                className="group cursor-pointer"
              >
                <h4 className="text-[10px] uppercase tracking-[0.4em] text-rose-400 mb-6 font-semibold">
                  Inquiries
                </h4>
                <a
                  href="mailto:concierge@rovian.com"
                  // Link text màu xám đá đậm
                  className="text-2xl md:text-3xl font-light text-stone-800 relative inline-block group-hover:text-black transition-colors"
                >
                  concierge@rovian.com
                  {/* Hiệu ứng underline màu hồng */}
                  <span className="absolute bottom-[-8px] left-0 w-full h-[1px] bg-rose-200 origin-left scale-x-100 group-hover:scale-x-0 transition-transform duration-500"></span>
                  <span className="absolute bottom-[-8px] left-0 w-full h-[1px] bg-rose-400 origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-100"></span>
                </a>
              </motion.div>

              {/* Address */}
              <motion.div variants={itemVariants}>
                <h4 className="text-[10px] uppercase tracking-[0.4em] text-rose-400 mb-6 font-semibold">
                  Flagship Atelier
                </h4>
                <p className="text-2xl md:text-3xl font-light leading-snug text-stone-900">
                  24 Rue du Faubourg <br /> Saint-Honoré, Paris
                </p>
              </motion.div>

              {/* Socials */}
              <motion.div variants={itemVariants}>
                <h4 className="text-[10px] uppercase tracking-[0.4em] text-rose-400 mb-8 font-semibold">
                  Follow us
                </h4>
                <div className="flex flex-wrap justify-center md:justify-center gap-x-12 gap-y-4">
                  {["Instagram", "Pinterest", "LinkedIn"].map((link) => (
                    <a
                      key={link}
                      href="#"
                      // Đổi màu social link sang xám ấm
                      className="text-xs uppercase tracking-widest text-stone-500 hover:text-rose-600 transition-colors relative group overflow-hidden font-medium"
                    >
                      {link}
                      {/* Underline social */}
                      <span className="absolute bottom-0 left-0 w-full h-[1px] bg-rose-400 translate-x-[-105%] group-hover:translate-x-0 transition-transform duration-500"></span>
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Working Hours */}
            <motion.div
              variants={itemVariants}
              // Đổi border sang hồng cực nhạt
              className="pt-12 border-t border-rose-100 flex justify-between items-end"
            >
              <div>
                <p className="text-[10px] text-rose-400 tracking-[0.3em] font-medium">
                  OPERATING HOURS
                </p>
                <p className="text-xs text-stone-500 mt-2 tracking-widest uppercase">
                  MON — FRI: 09:00 - 18:00 (CET)
                </p>
              </div>
              <div className="text-[10px] text-rose-300 italic font-light">
                ©2026 ROVIAN
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
