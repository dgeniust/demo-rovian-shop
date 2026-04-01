import React, { useEffect, useState } from "react";
import ProductCard from "../Shop/ProductCard";
import productService from "../../services/productService";
import { useNavigate } from "react-router-dom";

const FeaturedProducts = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const handleProduct = async () => {
      try {
        const res = await productService.getAllProducts({
          limit: 3,
        });
        setProducts(res.data);
      } catch (error) {
        console.error("Lỗi khi lấy sản phẩm nổi bật:", error);
      }
    };
    handleProduct();
  }, []);

  return (
    <section className="py-24 bg-[#0a0a0a] overflow-hidden relative text-white">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* --- HEADER SECTION --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-12 h-[1px] bg-zinc-600"></span>
              <span className="text-xs uppercase tracking-[0.5em] text-zinc-400 font-bold">
                Dấu Ấn Thời Gian
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-white">
              Bộ Sưu Tập{" "}
              <span className="italic font-serif text-zinc-500">Tiêu Biểu</span>
            </h2>
          </div>

          <div className="flex flex-col items-start md:items-end">
            <p className="text-zinc-500 text-sm max-w-[300px] mb-4 md:text-right leading-relaxed italic">
              "Mỗi tích tắc trôi qua là một lời khẳng định cho bản lĩnh và phong
              thái của người dẫn đầu."
            </p>
            <button
              className="group flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] font-bold text-zinc-300 hover:text-white transition-colors cursor-pointer"
              onClick={() => navigate("/shop")}
            >
              Xem Tất Cả Tuyệt Tác
              <span className="w-6 h-[1px] bg-zinc-600 group-hover:bg-white group-hover:w-10 transition-all duration-500"></span>
            </button>
          </div>
        </div>

        {/* --- PRODUCTS GRID --- */}
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-16">
          {products.map((product) => (
            <div
              key={product.id}
              className="animate-in fade-in slide-in-from-bottom-8 duration-1000"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>

      {/* --- DECORATIVE TEXT --- */}
      <div className="absolute top-1/2 left-0 w-full overflow-hidden pointer-events-none opacity-[0.02] select-none z-0 -translate-y-1/2 mt-12">
        <span className="text-[15vw] font-black uppercase tracking-tighter whitespace-nowrap text-white">
          ROVIAN ATELIER ROVIAN ATELIER
        </span>
      </div>
    </section>
  );
};

export default FeaturedProducts;
