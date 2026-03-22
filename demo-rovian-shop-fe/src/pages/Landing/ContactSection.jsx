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
    <section className="bg-[#fffafb] text-black py-12 md:py-18 px-6 md:px-12 lg:px-24 overflow-hidden border-t border-rose-100">
      <div className="max-w-[1400px] mx-auto">
        {/* HEADER SECTION - Đảm bảo text-left */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mb-16 md:mb-24 border-b border-rose-100 pb-12 text-left"
        >
          <motion.h2
            variants={itemVariants}
            className="text-5xl sm:text-7xl md:text-8xl font-light font-serif tracking-tighter mb-6 italic text-stone-900"
          >
            Contact
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-[10px] md:text-[11px] uppercase tracking-[0.4em] text-rose-400 font-medium flex items-center gap-4 justify-start"
          >
            <span className="w-8 h-[1px] bg-rose-200"></span>
            At your service, always.
          </motion.p>
        </motion.div>

        <div className="w-full flex justify-between items-start">
          {/* CỘT 1: Philosophy - Fix căn lề trái */}
          <div className="w-full space-y-12 text-left">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <motion.h3
                variants={itemVariants}
                className="text-3xl md:text-4xl font-light font-serif italic mb-8 text-black leading-tight"
              >
                The Art of <br /> Discretionary Care
              </motion.h3>

              <motion.div
                variants={itemVariants}
                className="space-y-6 text-stone-600 font-light leading-relaxed max-w-xl text-base md:text-lg"
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

                {/* Quote Line - Căn lề thẳng với text bên trên */}
                <motion.div
                  className="mt-10 pt-2 border-l-2 border-rose-200 pl-6 italic text-rose-800 text-base font-light"
                  whileHover={{ borderLeftColor: "#fb7185", x: 5 }}
                >
                  "True luxury is felt in the silence of perfect service."
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          {/* CỘT 2: Contact Details - Fix tràn chữ và căn lề phải/trái tùy màn hình */}
          <motion.div
            className="w-full flex justify-center flex-col space-y-12 md:space-y-16 lg:text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {/* Email */}
            <motion.div variants={itemVariants} className="group">
              <h4 className="text-[10px] uppercase tracking-[0.4em] text-rose-400 mb-4 font-semibold">
                Inquiries
              </h4>
              <a
                href="mailto:concierge@rovian.com"
                className="text-xl sm:text-2xl md:text-3xl font-light text-stone-800 hover:text-black transition-colors break-words md:break-normal"
              >
                concierge@rovian.com
              </a>
            </motion.div>

            {/* Address */}
            <motion.div variants={itemVariants}>
              <h4 className="text-[10px] uppercase tracking-[0.4em] text-rose-400 mb-4 font-semibold">
                Flagship Atelier
              </h4>
              <p className="text-xl md:text-2xl font-light leading-snug text-stone-900">
                24 Rue du Faubourg <br /> Saint-Honoré, Paris
              </p>
            </motion.div>

            {/* Socials - Đảm bảo không bị căn giữa gây lệch */}
            <motion.div variants={itemVariants}>
              <h4 className="text-[10px] uppercase tracking-[0.4em] text-rose-400 mb-6 font-semibold">
                Follow us
              </h4>
              <div className="flex flex-wrap gap-6 lg:justify-center">
                {["Instagram", "Pinterest", "LinkedIn"].map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="text-[10px] uppercase tracking-widest text-stone-500 hover:text-rose-600 transition-colors font-medium border-b border-transparent hover:border-rose-400"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Footer nhỏ bên dưới */}
            <div className="pt-6 border-t border-rose-100 flex justify-between lg:justify-center lg:gap-12 items-center">
              <div className="text-left lg:text-right">
                <p className="text-[9px] text-rose-400 tracking-[0.2em]">
                  OPERATING HOURS
                </p>
                <p className="text-[10px] text-stone-500 uppercase">
                  MON — FRI: 09:00 - 18:00
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
