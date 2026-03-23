import React, { useState, useEffect, useCallback } from "react";
import ProductCard from "./ProductCard";
import { ChevronLeft, ChevronRight, Loader2 } from "lucide-react";
import productService from "../../services/productService";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const productsPerPage = 9;

  // 1. Hàm gọi API lấy sản phẩm thực tế
  const fetchProducts = useCallback(async () => {
    setLoading(true);
    try {
      const response = await productService.getAllProducts({
        page: currentPage,
        limit: productsPerPage,
        sort_by: "id",
        order: "desc",
      });

      // Giả định backend trả về { data: [...], total: 100 }
      setProducts(response.data || []);
      setTotalItems(response.total || 0);
    } catch (err) {
      console.error("Error fetching collections:", err);
    } finally {
      setLoading(false);
    }
  }, [currentPage]);

  // 2. Chạy fetch khi currentPage thay đổi
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const totalPages = Math.ceil(totalItems / productsPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Cuộn lên mượt mà khi đổi trang
    document
      .getElementById("product-grid-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="product-grid-section"
      className="max-w-[1400px] mx-auto px-6 md:px-10 py-24 text-black min-h-screen"
    >
      {/* Header Section */}
      <div className="flex justify-between items-end mb-16 border-b border-rose-100 pb-8">
        <div>
          <h2 className="text-4xl font-light font-serif uppercase tracking-tighter italic text-stone-900">
            Collections{" "}
            <span className="not-italic text-rose-300">/ Atelier</span>
          </h2>
          <p className="text-[10px] text-rose-400 uppercase tracking-[0.3em] mt-3 font-medium">
            New Season 2026 — Showing{" "}
            {Math.min((currentPage - 1) * productsPerPage + 1, totalItems)}-
            {Math.min(currentPage * productsPerPage, totalItems)} of{" "}
            {totalItems}
          </p>
        </div>
        <button className="text-[11px] font-bold uppercase border-b border-rose-200 pb-1.5 text-stone-700 hover:text-rose-600 hover:border-rose-400 transition-all duration-300">
          View All
        </button>
      </div>

      {/* Product Grid hoặc Loading State */}
      {loading ? (
        <div className="flex flex-col items-center justify-center py-40 space-y-4">
          <Loader2 className="animate-spin text-rose-200" size={40} />
          <p className="text-serif italic text-stone-400 tracking-widest text-xs">
            Curating Collection...
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-24">
          {products.length > 0 ? (
            products.map((item) => <ProductCard key={item.id} product={item} />)
          ) : (
            <div className="col-span-3 text-center py-20 text-stone-400 font-serif italic">
              No pieces available in this collection yet.
            </div>
          )}
        </div>
      )}

      {/* Pagination Component - Chỉ hiện nếu có nhiều hơn 1 trang */}
      {totalPages > 1 && (
        <div className="mt-28 flex flex-col items-center space-y-8">
          <div className="w-px h-16 bg-rose-100"></div>

          <div className="flex items-center space-x-12">
            <button
              onClick={() => currentPage > 1 && paginate(currentPage - 1)}
              disabled={currentPage === 1 || loading}
              className={`flex items-center space-x-2 uppercase text-[10px] tracking-widest font-bold transition-all duration-300 text-stone-700 ${
                currentPage === 1
                  ? "opacity-20 cursor-not-allowed"
                  : "hover:text-rose-600"
              }`}
            >
              <ChevronLeft size={14} strokeWidth={2.5} />
              <span>Prev</span>
            </button>

            <div className="flex items-center space-x-6">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i + 1}
                  onClick={() => paginate(i + 1)}
                  className={`text-xs font-medium transition-all relative pb-2 ${
                    currentPage === i + 1
                      ? "text-rose-600 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[1px] after:bg-rose-500"
                      : "text-stone-300 hover:text-rose-500 hover:font-bold"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </button>
              ))}
            </div>

            <button
              onClick={() =>
                currentPage < totalPages && paginate(currentPage + 1)
              }
              disabled={currentPage === totalPages || loading}
              className={`flex items-center space-x-2 uppercase text-[10px] tracking-widest font-bold transition-all duration-300 text-stone-700 ${
                currentPage === totalPages
                  ? "opacity-20 cursor-not-allowed"
                  : "hover:text-rose-600"
              }`}
            >
              <span>Next</span>
              <ChevronRight size={14} strokeWidth={2.5} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
