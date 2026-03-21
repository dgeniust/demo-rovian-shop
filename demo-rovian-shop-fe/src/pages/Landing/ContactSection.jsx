import React from "react";
import { motion } from "framer-motion";

const ContactSection = () => {
  // Cấu hình animation chung cho sự sang trọng
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
    <section className="bg-black text-white py-32 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        {/* HEADER SECTION */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mb-24 border-b border-white/10 pb-12"
        >
          <motion.h2
            variants={itemVariants}
            className="text-6xl md:text-8xl font-light tracking-tighter mb-6 italic"
          >
            Contact
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-[11px] uppercase tracking-[0.6em] text-white/40 flex items-center gap-4"
          >
            <span className="w-8 h-[1px] bg-white/20"></span>
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
                className="text-3xl md:text-4xl font-light italic mb-8"
              >
                The Art of <br /> Discretionary Care
              </motion.h3>

              <motion.div
                variants={itemVariants}
                className="space-y-8 text-white/50 font-light leading-relaxed max-w-xl text-lg"
              >
                <p>
                  At <span className="text-white">ROVIAN</span>, our
                  relationship with you begins long before a purchase and
                  extends far beyond the delivery.
                </p>
                <p>
                  Every inquiry is handled with absolute precision. Our
                  concierge team is dedicated to ensuring your experience is as
                  seamless as our collections.
                </p>
                <motion.div
                  className="pt-6 border-l border-white/20 pl-8 italic text-white/80 text-base"
                  whileHover={{
                    borderLeftColor: "rgba(255,255,255,0.8)",
                    x: 5,
                  }}
                  transition={{ duration: 0.4 }}
                >
                  "True luxury is felt in the silence of perfect service."
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Ảnh decor với hiệu ứng Reveal */}
            <motion.div
              initial={{ clipPath: "inset(100% 0% 0% 0%)", scale: 1.2 }}
              whileInView={{ clipPath: "inset(0% 0% 0% 0%)", scale: 1 }}
              transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
              viewport={{ once: true }}
              className="relative w-full h-[400px] grayscale hover:grayscale-0 transition-all duration-1000 overflow-hidden group"
            >
              <img
                src="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&q=80"
                alt="Concierge Service"
                className="w-full h-full object-cover transition-transform duration-[3000ms] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700"></div>
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
                <h4 className="text-[10px] uppercase tracking-[0.4em] text-white/30 mb-6">
                  Inquiries
                </h4>
                <a
                  href="mailto:concierge@rovian.com"
                  className="text-2xl md:text-3xl font-light relative inline-block"
                >
                  concierge@rovian.com
                  <span className="absolute bottom-[-8px] left-0 w-full h-[1px] bg-white/20 origin-left scale-x-100 group-hover:scale-x-0 transition-transform duration-500"></span>
                  <span className="absolute bottom-[-8px] left-0 w-full h-[1px] bg-white origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-100"></span>
                </a>
              </motion.div>

              {/* Address */}
              <motion.div variants={itemVariants}>
                <h4 className="text-[10px] uppercase tracking-[0.4em] text-white/30 mb-6">
                  Flagship Atelier
                </h4>
                <p className="text-2xl md:text-3xl font-light leading-snug">
                  24 Rue du Faubourg <br /> Saint-Honoré, Paris
                </p>
              </motion.div>

              {/* Socials */}
              <motion.div variants={itemVariants}>
                <h4 className="text-[10px] uppercase tracking-[0.4em] text-white/30 mb-8">
                  Follow us
                </h4>
                <div className="flex flex-wrap justify-center gap-x-12 gap-y-4">
                  {["Instagram", "Pinterest", "LinkedIn"].map((link) => (
                    <a
                      key={link}
                      href="#"
                      className="text-xs uppercase tracking-widest text-white/60 hover:text-white transition-colors relative group overflow-hidden"
                    >
                      {link}
                      <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white translate-x-[-105%] group-hover:translate-x-0 transition-transform duration-500"></span>
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Working Hours */}
            <motion.div
              variants={itemVariants}
              className="pt-12 border-t border-white/5 flex justify-between items-end"
            >
              <div>
                <p className="text-[10px] text-white/30 tracking-[0.3em]">
                  OPERATING HOURS
                </p>
                <p className="text-xs text-white/60 mt-2 tracking-widest uppercase">
                  MON — FRI: 09:00 - 18:00 (CET)
                </p>
              </div>
              <div className="text-[10px] text-white/20 italic">
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
