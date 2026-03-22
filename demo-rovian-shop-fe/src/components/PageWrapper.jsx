import React, { useMemo } from "react";
import { motion } from "framer-motion";
import Loader from "./Loader";

export const PageWrapper = ({ children }) => {
  // Sử dụng useMemo để xác định trạng thái NGAY LẬP TỨC khi render
  const isFirstLoad = useMemo(() => {
    const hasLoaded = sessionStorage.getItem("app_was_loaded");
    if (!hasLoaded) {
      // Nếu chưa có flag, đây là lần đầu (sau Splash)
      sessionStorage.setItem("app_was_loaded", "true");
      return true;
    }
    return false;
  }, []);

  // Nếu là lần đầu tiên, bỏ qua hoàn toàn phần màn che Loader
  if (isFirstLoad) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    );
  }

  // Chỉ từ lần chuyển trang thứ 2 trở đi mới chạy hiệu ứng này
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      className="relative"
    >
      {/* LỚP MÀN CHE */}
      <motion.div
        className="fixed inset-0 bg-[#fffafb] z-[9999] pointer-events-none flex items-center justify-center"
        variants={{
          initial: { opacity: 1 },
          animate: {
            opacity: 0,
            transition: { duration: 0.6, delay: 1.2, ease: "easeInOut" },
          },
          exit: { opacity: 1, transition: { duration: 0.3 } },
        }}
      >
        <Loader />
      </motion.div>

      {/* NỘI DUNG TRANG */}
      <motion.div
        variants={{
          initial: { opacity: 0 },
          animate: { opacity: 1, transition: { delay: 1.3, duration: 0.5 } },
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};
