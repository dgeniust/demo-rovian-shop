import BrandSection from "./BrandSection";
import HeroSection from "./HeroSection";
import ProductList from "./ProductList";

const ShoppingPage = () => {
  return (
    <div className="min-h-screen bg-black text-white font-['Google_Sans_Flex']">
      <main>
        {/* Section List sản phẩm từ JSON */}
        <ProductList />
        {/* <HeroSection /> */}

        <BrandSection />
      </main>
    </div>
  );
};

export default ShoppingPage;
