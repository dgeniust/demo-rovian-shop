import React, { useState } from "react";
import ProductCard from "./ProductCard";
import products from "../../data/production";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ProductList() {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9; // Số sản phẩm trên mỗi trang (3 cột x 2 hàng)

  // Tính toán logic phân trang
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct,
  );
  const totalPages = Math.ceil(products.length / productsPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" }); // Cuộn lên đầu khi đổi trang
  };

  return (
    <section className="max-w-[1400px] mx-auto px-10 py-20 bg-white text-black">
      {/* Header Section */}
      <div className="flex justify-between items-end mb-16 border-b border-gray-100 pb-6">
        <div>
          <h2 className="text-4xl font-serif uppercase tracking-tighter italic">
            Collections
          </h2>
          <p className="text-[10px] text-gray-400 uppercase tracking-[0.3em] mt-2">
            New Season 2026 — Showing {indexOfFirstProduct + 1}-
            {Math.min(indexOfLastProduct, products.length)} of {products.length}
          </p>
        </div>
        <button className="text-[11px] font-bold uppercase border-b border-black pb-1 hover:text-gray-400 hover:border-gray-400 transition-all">
          View All
        </button>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-20">
        {currentProducts.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>

      {/* Pagination Component */}
      <div className="mt-24 flex flex-col items-center space-y-6">
        {/* Line Decoration */}
        {/* <div className="w-px h-12 bg-gray-200"></div> */}

        <div className="flex items-center space-x-12">
          {/* Previous Button */}
          <button
            onClick={() => currentPage > 1 && paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className={`flex items-center space-x-2 uppercase text-[10px] tracking-widest font-bold transition-all ${currentPage === 1 ? "opacity-20 cursor-not-allowed" : "hover:opacity-50"}`}
          >
            <ChevronLeft size={14} strokeWidth={3} />
            <span>Prev</span>
          </button>

          {/* Page Numbers */}
          <div className="flex items-center space-x-6">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i + 1}
                onClick={() => paginate(i + 1)}
                className={`text-xs font-medium transition-all relative ${
                  currentPage === i + 1
                    ? "text-black after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-[1px] after:bg-black"
                    : "text-gray-300 hover:text-black"
                }`}
              >
                {String(i + 1).padStart(2, "0")}
              </button>
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={() =>
              currentPage < totalPages && paginate(currentPage + 1)
            }
            disabled={currentPage === totalPages}
            className={`flex items-center space-x-2 uppercase text-[10px] tracking-widest font-bold transition-all ${currentPage === totalPages ? "opacity-20 cursor-not-allowed" : "hover:opacity-50"}`}
          >
            <span>Next</span>
            <ChevronRight size={14} strokeWidth={3} />
          </button>
        </div>
      </div>
    </section>
  );
}
