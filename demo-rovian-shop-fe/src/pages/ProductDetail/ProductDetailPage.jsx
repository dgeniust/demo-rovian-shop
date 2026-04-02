import { useParams } from "react-router-dom";
import ProductDetail from "./ProductDetail";
import FeaturedProducts from "../Landing/FeaturedProducts";

const ProductDetailPage = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-black text-white font-['Google_Sans_Flex']">
      <main>
        <ProductDetail productId={id} />
        <FeaturedProducts />
      </main>
    </div>
  );
};

export default ProductDetailPage;
