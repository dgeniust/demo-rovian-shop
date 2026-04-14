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
import ContactPage from "./pages/Contact/ContactPage";
import AuthPage from "./pages/Auth/AuthPage";
import AdminLayout from "./components/layout/AdminLayout";
import ProductManager from "./pages/Admin/ProductManager";
import ProtectedRoute from "./components/layout/ProtectedRoute";
import ProductDetailPage from "./pages/ProductDetail/ProductDetailPage";
import clarityService from "./services/clarityService";
import AutomaticWatchArticle from "./pages/Article/AutomaticWatchArticle";
import Top5DongHoNamDuoi5Trieu from "./pages/Article/Top5DongHoNamDuoi5Trieu";
import CachChonDongHoNam from "./pages/Article/CachChonDongHoNam";
import SoSanhCasioVaSRWatch from "./pages/Article/SoSanhCasioVaSRWatch";
import DanhGiaSRWatchSG1077 from "./pages/Article/DanhGiaSRWatchSG1077";
// Tạo một Component bọc các Route để xử lý hiệu ứng chuyển trang
const CLARITY_PROJECT_ID = import.meta.env.VITE_CLARITY_PROJECT_ID;

const AnimatedRoutes = () => {
  const location = useLocation();

  useEffect(() => {
    clarityService.initialize(CLARITY_PROJECT_ID);
  }, []);
  return (
    // mode="wait": Chờ trang cũ biến mất xong mới hiện trang mới
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Trang Chủ */}
        <Route
          path="/auth"
          element={
            <PageWrapper>
              <AuthPage />
            </PageWrapper>
          }
        />
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
        {/* <Route element={<ShopLayout />}></Route> */}
        <Route
          path="/shop"
          element={
            <PageWrapper>
              <Header variant="dark" />
              <ShoppingPage />
              <Footer variant="dark" />
            </PageWrapper>
          }
        />
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
        {/* Trang Contact */}
        <Route
          path="/contact"
          element={
            <PageWrapper>
              <Header variant="shop" />
              <ContactPage />
              <Footer variant="light" />
            </PageWrapper>
          }
        />
        <Route
          path="/detail/:id"
          element={
            <PageWrapper>
              <Header variant="shop" />
              <ProductDetailPage />
              <Footer variant="light" />
            </PageWrapper>
          }
        />
        {/* Trang ADMIN */}
        <Route element={<ProtectedRoute />}>
          <Route element={<AdminLayout />}>
            <Route path="/admin" element={<ProductManager />} />
          </Route>
        </Route>
        <Route
          path="/kien-thuc/may-co-automatic-la-gi"
          element={
            <PageWrapper>
              <Header variant="shop" />
              {/* Trang Component chứa HTML Semantic và Schema JSON-LD đã viết trước đó */}
              <AutomaticWatchArticle />
              <Footer variant="light" />
            </PageWrapper>
          }
        />
        <Route
          path="/kien-thuc/top-5-dong-ho-nam-tot-nhat-duoi-5-trieu-2025"
          element={
            <PageWrapper>
              <Header variant="shop" />
              {/* Trang Component chứa HTML Semantic và Schema JSON-LD đã viết trước đó */}
              <Top5DongHoNamDuoi5Trieu />
              <Footer variant="light" />
            </PageWrapper>
          }
        />
        <Route
          path="/kien-thuc/cach-chon-dong-ho-nam"
          element={
            <PageWrapper>
              <Header variant="shop" />
              {/* Trang Component chứa HTML Semantic và Schema JSON-LD đã viết trước đó */}
              <CachChonDongHoNam />
              <Footer variant="light" />
            </PageWrapper>
          }
        />
        <Route
          path="/kien-thuc/danh-gia-srwatch-nam-SG1077-1101TE"
          element={
            <PageWrapper>
              <Header variant="shop" />
              {/* Trang Component chứa HTML Semantic và Schema JSON-LD đã viết trước đó */}
              <DanhGiaSRWatchSG1077 />
              <Footer variant="light" />
            </PageWrapper>
          }
        />
        <Route
          path="/kien-thuc/casio-mtp-vs-srwatch-timepiece-te"
          element={
            <PageWrapper>
              <Header variant="shop" />
              {/* Trang Component chứa HTML Semantic và Schema JSON-LD đã viết trước đó */}
              <SoSanhCasioVaSRWatch />
              <Footer variant="light" />
            </PageWrapper>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  const isServerContext = typeof window === "undefined" || import.meta.env.SSR;
  const [initialLoading, setInitialLoading] = useState(!isServerContext);
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
