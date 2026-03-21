import BrandSection from "./BrandSection";
import HeroSection from "./HeroSection";
import ProductList from "./ProductList";

const ShoppingPage = () => {
  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <main>
        <HeroSection />

        {/* Section List sản phẩm từ JSON */}
        <ProductList />

        <BrandSection />
      </main>
    </div>
  );
};

export default ShoppingPage;
