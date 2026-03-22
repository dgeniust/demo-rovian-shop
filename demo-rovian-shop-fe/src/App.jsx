import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Import các trang của bạn
import LandingPage from "./pages/Landing/LandingPage";
import ShoppingPage from "./pages/Shop/ShoppingPage";
import AboutPage from "./pages/About/AboutPage";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import ShopLayout from "./components/layout/ShopLayout";
import SplashScreen from "./components/SplashScreen";
import ScrollToTop from "./hooks/ScrollToTop";
import { PageWrapper } from "./components/PageWrapper";

// Tạo một Component bọc các Route để xử lý hiệu ứng chuyển trang
const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    // mode="wait": Chờ trang cũ biến mất xong mới hiện trang mới
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Trang Chủ */}
        <Route
          path="/"
          element={
            <PageWrapper>
              <Header variant="dark" />
              <LandingPage />
              <Footer variant="dark" />
            </PageWrapper>
          }
        />

        {/* Trang Shop */}
        <Route element={<ShopLayout />}>
          <Route
            path="/shop"
            element={
              <PageWrapper>
                <ShoppingPage />
              </PageWrapper>
            }
          />
        </Route>

        {/* Trang About */}
        <Route
          path="/about"
          element={
            <PageWrapper>
              <Header variant="shop" />
              <AboutPage />
              <Footer variant="light" />
            </PageWrapper>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

// Component tạo hiệu ứng "màn che" mỗi khi chuyển trang
// const PageWrapper = ({ children }) => {
//   const brandName = "ROVIAN";

//   // 1. Container cho các chữ cái: Chạy ngay khi trang mới "nhập cuộc"
//   const logoContainerVariants = {
//     initial: { opacity: 1 },
//     animate: {
//       opacity: 0,
//       y: -10,
//       transition: {
//         duration: 0.4,
//         delay: 0.7, // Thời gian này phải khớp với lúc chữ cuối hiện xong
//         ease: "easeIn",
//       },
//     },
//   };

//   // 2. Từng chữ cái lẻ: Hiện lên theo kiểu "Stagger"
//   const letterVariants = {
//     initial: { opacity: 0, y: 10 },
//     animate: (i) => ({
//       opacity: 1,
//       y: 0,
//       transition: {
//         delay: i * 0.08, // Mỗi chữ cách nhau 0.08s
//         duration: 0.3,
//         ease: "easeOut",
//       },
//     }),
//   };

//   return (
//     <motion.div
//       initial="initial"
//       animate="animate"
//       exit="exit"
//       className="relative"
//     >
//       {/* LỚP MÀN CHE */}
//       <motion.div
//         className="fixed inset-0 bg-[#fffafb] z-[9999] pointer-events-none flex items-center justify-center"
//         variants={{
//           initial: { opacity: 1 },
//           animate: {
//             opacity: 0,
//             transition: {
//               duration: 0.4, // Tan nhanh dứt khoát
//               delay: 0.8, // Đợi chữ ROVIAN hiện xong (0.08 * 6 + padding) là tan ngay
//               ease: "circOut",
//             },
//           },
//           exit: { opacity: 1, transition: { duration: 0.3 } },
//         }}
//       >
//         <motion.div
//           variants={logoContainerVariants}
//           className="flex text-3xl font-serif tracking-[0.4em] uppercase text-rose-300"
//         >
//           {brandName.split("").map((char, index) => (
//             <motion.span
//               key={index}
//               custom={index} // Truyền index vào để tính delay từng chữ
//               variants={letterVariants}
//             >
//               {char}
//             </motion.span>
//           ))}
//         </motion.div>
//       </motion.div>

//       {/* NỘI DUNG TRANG CHÍNH */}
//       <motion.div
//         variants={{
//           initial: { opacity: 0 },
//           animate: {
//             opacity: 1,
//             transition: {
//               delay: 0.8, // Khớp tuyệt đối với màn tan
//               duration: 0.5,
//             },
//           },
//           exit: { opacity: 0 },
//         }}
//       >
//         {children}
//       </motion.div>
//     </motion.div>
//   );
// };
function App() {
  const [initialLoading, setInitialLoading] = useState(true);
  useEffect(() => {
    // Khi người dùng reload trang (F5), ta xóa flag cũ đi để Splash xong không bị dính Loader
    window.onbeforeunload = () => {
      sessionStorage.removeItem("app_was_loaded");
    };
  }, []);
  return (
    <>
      {initialLoading ? (
        <SplashScreen finishLoading={() => setInitialLoading(false)} />
      ) : (
        <Router>
          <ScrollToTop />
          <div className="min-h-screen bg-[#fffafb]">
            <AnimatedRoutes />
          </div>
        </Router>
      )}
    </>
  );
}

export default App;
