import React, { useEffect, useState } from "react";
import ProductCard from "../Shop/ProductCard";
import productService from "../../services/productService";

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const handleProduct = async () => {
      try {
        const res = await productService.getAllProducts({
          limit: 3,
        });
        console.log("Featured products:", JSON.stringify(res.data));
        setProducts(res.data);
      } catch (error) {
        console.error("Error fetching featured products:", error);
      }
    };
    handleProduct();
  }, []);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* --- HEADER SECTION --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-12 h-[1px] bg-rose-200"></span>
              <span className="text-xs uppercase tracking-[0.5em] text-rose-400 font-bold">
                Timeless Elegance
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-stone-900">
              Featured{" "}
              <span className="italic font-serif text-rose-300">
                Collections
              </span>
            </h2>
          </div>

          <div className="flex flex-col items-start md:items-end">
            <p className="text-stone-400 text-sm max-w-[300px] mb-4 md:text-right leading-relaxed italic">
              "Every second is a blooming petal in the garden of time."
            </p>
            <button className="group flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] font-bold text-stone-800 hover:text-rose-500 transition-colors">
              View All Masterpieces
              <span className="w-6 h-[1px] bg-stone-300 group-hover:bg-rose-500 group-hover:w-10 transition-all duration-500"></span>
            </button>
          </div>
        </div>

        {/* --- PRODUCTS GRID --- */}
        {/* Grid tự động nhảy: 1 cột (mobile) -> 2 cột (tablet) -> 3 hoặc 4 cột (desktop) */}
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

        {/* --- DECORATIVE TEXT (Chạy ngang nền - Tùy chọn) --- */}
        <div className="absolute left-0 w-full overflow-hidden pointer-events-none opacity-[0.03] select-none -z-10 mt-12">
          <span className="text-[15vw] font-black uppercase tracking-tighter whitespace-nowrap text-stone-900">
            SAKURA ATELIER SAKURA ATELIER
          </span>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
