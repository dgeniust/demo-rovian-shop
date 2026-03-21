import React, { useState } from "react";
import ProductCard from "./ProductCard";
import products from "../../data/production"; // Giữ nguyên import data của bạn
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ProductList() {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9; // Số sản phẩm trên mỗi trang (3 cột x 3 hàng)

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
    // Tùy chọn: Cuộn lên đầu phần danh sách sản phẩm thay vì đầu trang
    document
      .getElementById("product-grid-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    // Đổi bg-white thành nền trắng hồng nhẹ (#fffafb)
    <section
      id="product-grid-section"
      className="max-w-[1400px] mx-auto px-6 md:px-10 py-24 text-black"
    >
      {/* Header Section */}
      {/* Đổi border-gray-100 thành border-rose-100 (hồng phấn nhạt) */}
      <div className="flex justify-between items-end mb-16 border-b border-rose-100 pb-8">
        <div>
          {/* Giữ serif italic sang trọng, phối text đen và nhấn hồng Rose */}
          <h2 className="text-4xl font-light font-serif uppercase tracking-tighter italic text-stone-900">
            Collections{" "}
            <span className="not-italic text-rose-300">/ Atelier</span>
          </h2>
          {/* Đổi text-gray-400 sang tone hồng đất Rose */}
          <p className="text-[10px] text-rose-400 uppercase tracking-[0.3em] mt-3 font-medium">
            New Season 2026 — Showing {indexOfFirstProduct + 1}-
            {Math.min(indexOfLastProduct, products.length)} of {products.length}
          </p>
        </div>
        {/* Đổi border-black sang border-rose-200, hover màu hồng đậm hơn */}
        <button className="text-[11px] font-bold uppercase border-b border-rose-200 pb-1.5 text-stone-700 hover:text-rose-600 hover:border-rose-400 transition-all duration-300">
          View All
        </button>
      </div>

      {/* Product Grid - Giữ nguyên Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-24">
        {currentProducts.map((item) => (
          // Giả định ProductCard cũng sẽ được cập nhật tông màu bên trong nó
          <ProductCard key={item.id} product={item} />
        ))}
      </div>

      {/* Pagination Component */}
      <div className="mt-28 flex flex-col items-center space-y-8">
        {/* Line Decoration - Đổi màu sang hồng nhạt */}
        <div className="w-px h-16 bg-rose-100"></div>

        <div className="flex items-center space-x-12">
          {/* Previous Button - Đổi sang màu stone ấm */}
          <button
            onClick={() => currentPage > 1 && paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className={`flex items-center space-x-2 uppercase text-[10px] tracking-widest font-bold transition-all duration-300 text-stone-700 ${currentPage === 1 ? "opacity-20 cursor-not-allowed" : "hover:text-rose-600 hover:opacity-100"}`}
          >
            <ChevronLeft size={14} strokeWidth={2.5} />
            <span>Prev</span>
          </button>

          {/* Page Numbers */}
          <div className="flex items-center space-x-6">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i + 1}
                onClick={() => paginate(i + 1)}
                // Đổi active màu hồng, hover màu hồng
                className={`text-xs font-medium transition-all relative pb-2 ${
                  currentPage === i + 1
                    ? "text-rose-600 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[1px] after:bg-rose-500"
                    : "text-stone-300 hover:text-rose-500 hover:font-bold"
                }`}
              >
                {/* Giữ format 01, 02... */}
                {String(i + 1).padStart(2, "0")}
              </button>
            ))}
          </div>

          {/* Next Button - Đổi sang màu stone ấm */}
          <button
            onClick={() =>
              currentPage < totalPages && paginate(currentPage + 1)
            }
            disabled={currentPage === totalPages}
            className={`flex items-center space-x-2 uppercase text-[10px] tracking-widest font-bold transition-all duration-300 text-stone-700 ${currentPage === totalPages ? "opacity-20 cursor-not-allowed" : "hover:text-rose-600 hover:opacity-100"}`}
          >
            <span>Next</span>
            <ChevronRight size={14} strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </section>
  );
}
