import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/blackHorizontal_final.png"; // Sử dụng logo đen cho nền sáng

const SplashScreen = ({ finishLoading }) => {
  const [startFade, setStartFade] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setStartFade(true);
    }, 2200);

    const finishTimeout = setTimeout(() => {
      finishLoading();
    }, 3000);

    return () => {
      clearTimeout(timeout);
      clearTimeout(finishTimeout);
    };
  }, [finishLoading]);

  return (
    <AnimatePresence>
      {!startFade && (
        <motion.div
          className="fixed inset-0 flex flex-col items-center justify-center z-[100] bg-[#fffafb] overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: -50,
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
          }}
        >
          {/* 1. Visual Center: Logo Image & Glow Effect */}
          <div className="relative flex items-center justify-center mb-5">
            {/* Sakura Glow Effect - Tạo chiều sâu cho Logo */}
            <motion.div
              className="absolute w-48 h-48 bg-rose-200/30 rounded-full blur-[60px]"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{
                scale: 1.5,
                opacity: 1,
                transition: { duration: 2, ease: "easeOut" },
              }}
            />
            <motion.img
              src={logo}
              alt="ROVIAN Logo"
              className="w-52 md:w-60 h-auto relative z-10 object-contain"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: {
                  duration: 1.2,
                  delay: 0.2,
                  ease: [0.16, 1, 0.3, 1],
                },
              }}
            />
          </div>

          {/* 2. Brand Identity & English Content */}
          <div className="text-center space-y-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.8, duration: 0.8 },
              }}
            >
              <h1 className="text-3xl font-light uppercase tracking-[0.6em] text-gray-900">
                ROVIAN{" "}
                <span className="text-rose-400/80 font-serif italic ml-[-0.2em]">
                  Horology
                </span>
              </h1>
            </motion.div>

            {/* Divider Line */}
            <motion.div
              className="w-16 h-[1px] bg-gradient-to-r from-transparent via-rose-300 to-transparent mx-auto"
              initial={{ width: 0, opacity: 0 }}
              animate={{
                width: 64,
                opacity: 1,
                transition: { delay: 1, duration: 1 },
              }}
            />

            <div className="space-y-2">
              <motion.p
                className="text-[15px] uppercase tracking-[0.4em] text-gray-500 font-light"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { delay: 1.3, duration: 0.8 },
                }}
              >
                Timeless Precision • Absolute Devotion
              </motion.p>

              <motion.p
                className="text-[12px] italic tracking-[0.2em] text-rose-400/70"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { delay: 1.6, duration: 0.8 },
                }}
              >
                Honoring your time, every second counts.
              </motion.p>
            </div>
          </div>

          {/* 3. Luxury Loading Progress */}
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-gray-100 overflow-hidden">
            <motion.div
              className="h-full bg-rose-300"
              initial={{ width: "0%" }}
              animate={{
                width: "100%",
                transition: { duration: 2.5, ease: "easeInOut" },
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
