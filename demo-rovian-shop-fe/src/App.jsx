import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import Pages
import LandingPage from "./pages/Landing/LandingPage";
import ShoppingPage from "./pages/Shop/ShoppingPage";
import Header from "./components/layout/Header";
import ShopLayout from "./components/layout/ShopLayout";
import Footer from "./components/layout/Footer";
import AboutPage from "./pages/About/AboutPage";
// import Shop from "./pages/Shop/Shop";
// import ProductDetail from "./pages/ProductDetail/ProductDetail";
// import About from "./pages/About/About";
// import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black">
        <Routes>
          {/* Nhóm trang Shop dùng Header trắng */}
          <Route element={<ShopLayout />}>
            <Route path="/shop" element={<ShoppingPage />} />
            {/* <Route path="/shop/:id" element={<ProductDetail />} /> */}
          </Route>

          {/* Trang Landing dùng Header đen mặc định */}
          <Route
            path="/"
            element={
              <>
                <Header variant="dark" />
                <LandingPage />
                <Footer variant="dark" />
              </>
            }
          />

          {/* Các trang khác không thuộc ShopLayout */}
          <Route
            path="/lookbook"
            element={
              <>
                <Header variant="dark" />
                {/* <LookbookPage /> */}
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <Header variant="shop" />
                <AboutPage />
                <Footer variant="light" />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
