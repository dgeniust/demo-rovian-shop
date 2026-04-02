import React, { useState, useEffect, useCallback, useRef } from "react";
import ProductCard from "./ProductCard";
import {
  ChevronLeft,
  ChevronRight,
  Loader2,
  ChevronDown,
  Check,
  Search,
  X,
} from "lucide-react";
import productService from "../../services/productService";

export default function ProductList() {
  // --- 1. KHỞI TẠO STATE ---
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // State cho Sắp xếp (Sort)
  const [sortBy, setSortBy] = useState("id");
  const [order, setOrder] = useState("desc");

  // State cho Tìm kiếm (Search)
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  const productsPerPage = 9;

  // --- 2. LOGIC DEBOUNCE ---
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchTerm);
    }, 500);
    return () => clearTimeout(timer);
  }, [searchTerm]);

  // --- 3. XỬ LÝ CLICK OUTSIDE ---
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // --- 4. HÀM GỌI API (FETCH DATA) ---
  const fetchProducts = useCallback(async () => {
    setLoading(true);
    try {
      const response = await productService.getAllProducts({
        page: currentPage,
        limit: productsPerPage,
        sort_by: sortBy,
        order: order,
        search: debouncedSearch,
      });

      setProducts(response.data || []);
      setTotalItems(response.total || 0);
    } catch (err) {
      console.error("Error fetching collections:", err);
    } finally {
      setLoading(false);
    }
  }, [currentPage, sortBy, order, debouncedSearch]);

  useEffect(() => {
    setCurrentPage(1);
  }, [debouncedSearch, sortBy, order]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  // --- 5. HÀM XỬ LÝ SỰ KIỆN ---
  const totalPages = Math.ceil(totalItems / productsPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    document
      .getElementById("product-grid-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSelectSort = (option) => {
    setSortBy(option.sort);
    setOrder(option.order);
    setIsOpen(false);
  };

  const sortOptions = [
    { label: "Tuyệt tác mới nhất", sort: "id", order: "desc" },
    { label: "Giá: Thấp đến Cao", sort: "price", order: "asc" },
    { label: "Giá: Cao đến Thấp", sort: "price", order: "desc" },
    { label: "Bảng chữ cái: A - Z", sort: "name", order: "asc" },
    { label: "Bảng chữ cái: Z - A", sort: "name", order: "desc" },
  ];

  const currentLabel = sortOptions.find(
    (opt) => opt.sort === sortBy && opt.order === order,
  )?.label;

  return (
    <section
      id="product-grid-section"
      className="max-w-[1600px] mx-auto px-6 md:px-10 pt-24 pb-6 text-white bg-[#0a0a0a] min-h-screen"
    >
      {/* HEADER: Chứa tiêu đề, Tìm kiếm và Sắp xếp */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 border-b border-zinc-800 pb-10 gap-8">
        <div className="space-y-4">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-['Roboto_Slab'] font-[350] tracking-tighter text-white italic leading-tight">
            Bộ sưu tập{" "}
            <span className="text-sm md:text-base leading-relaxed tracking-[0.2em] md:tracking-[0.3em] text-zinc-400 font-medium not-italic whitespace-nowrap uppercase">
              / Tuyệt Tác Cơ Khí
            </span>
          </h2>
          <div className="flex items-center gap-4">
            <span className="h-px w-8 bg-zinc-600"></span>
            <p className="text-sm md:text-base leading-relaxed tracking-[0.2em] md:tracking-[0.3em] text-zinc-400 font-medium not-italic whitespace-nowrap uppercase">
              Est. 2026 — Khám phá {totalItems} Cỗ máy thời gian
            </p>
          </div>
        </div>

        {/* CỤM ĐIỀU KHIỂN: Search & Sort */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
          {/* Ô TÌM KIẾM */}
          <div className="relative group w-full sm:w-64">
            <Search
              size={16}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600 group-focus-within:text-white transition-colors"
            />
            <input
              type="text"
              placeholder="Tìm kiếm cỗ máy..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-transparent border border-zinc-800 pl-11 pr-10 py-3 rounded-none text-[12px] font-medium tracking-wider text-white placeholder:text-zinc-600 outline-none transition-all focus:border-white focus:bg-zinc-900/50 focus:shadow-[0_0_15px_rgba(255,255,255,0.05)]"
            />
            {/* Nút X */}
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white transition-colors"
              >
                <X size={14} />
              </button>
            )}
          </div>

          {/* DROPDOWN SẮP XẾP */}
          <div className="relative w-full sm:w-auto" ref={dropdownRef}>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="group flex items-center justify-between w-full sm:min-w-[220px] gap-4 bg-transparent border border-zinc-800 px-6 py-2.5 rounded-none transition-all duration-300 hover:border-white hover:shadow-[0_0_15px_rgba(255,255,255,0.05)]"
            >
              <div className="flex flex-col items-start">
                <span className="text-[8px] uppercase tracking-[0.2em] text-zinc-500 font-bold leading-none mb-1 group-hover:text-zinc-400 transition-colors">
                  Sắp xếp theo
                </span>
                <span className="text-white text-sm md:text-base leading-none font-medium">
                  {currentLabel}
                </span>
              </div>
              <ChevronDown
                size={14}
                className={`text-zinc-500 transition-transform duration-500 ${isOpen ? "rotate-180 text-white" : ""}`}
              />
            </button>

            {/* Menu Dropdown */}
            {isOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-[#0a0a0a]/95 backdrop-blur-xl border border-zinc-800 rounded-none shadow-2xl z-[100] py-3 animate-in fade-in zoom-in-95 duration-200">
                {sortOptions.map((option, idx) => {
                  const isSelected =
                    sortBy === option.sort && order === option.order;
                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectSort(option)}
                      className={`w-full flex items-center justify-between px-5 py-3 text-[11px] uppercase tracking-widest transition-all ${
                        isSelected
                          ? "bg-white/10 text-white font-black border-l-2 border-white"
                          : "text-zinc-500 hover:bg-white/5 hover:text-white border-l-2 border-transparent"
                      }`}
                    >
                      {option.label}
                      {isSelected && <Check size={12} className="text-white" />}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* HIỂN THỊ DANH SÁCH SẢN PHẨM */}
      {loading ? (
        <div className="flex flex-col items-center justify-center py-40 space-y-4">
          <Loader2 className="animate-spin text-zinc-600" size={40} />
          <p className="font-serif italic text-zinc-500 tracking-widest text-xs">
            Đang khởi động cỗ máy...
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-24">
          {products.length > 0 ? (
            products.map((item) => <ProductCard key={item.id} product={item} />)
          ) : (
            <div className="col-span-3 text-center py-20">
              <p className="text-zinc-500 font-serif italic text-lg mb-4">
                Không tìm thấy tuyệt tác nào phù hợp với yêu cầu của ngài.
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSortBy("id");
                }}
                className="text-[10px] uppercase tracking-widest font-bold text-white border-b border-zinc-600 hover:border-white pb-1 transition-colors"
              >
                Khôi phục bộ lọc
              </button>
            </div>
          )}
        </div>
      )}

      {/* PHÂN TRANG (PAGINATION) */}
      {totalPages > 1 && (
        <div className="mt-28 flex flex-col items-center space-y-8">
          <div className="w-px h-16 bg-zinc-800"></div>
          <div className="flex items-center space-x-12">
            <button
              onClick={() => currentPage > 1 && paginate(currentPage - 1)}
              disabled={currentPage === 1 || loading}
              className={`flex items-center space-x-2 uppercase text-[10px] tracking-widest font-bold transition-all duration-300 ${
                currentPage === 1
                  ? "opacity-20 cursor-not-allowed text-zinc-600"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <ChevronLeft size={14} strokeWidth={2.5} />
              <span>Trở Lại</span>
            </button>

            <div className="flex items-center space-x-6">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i + 1}
                  onClick={() => paginate(i + 1)}
                  className={`text-xs font-medium transition-all relative pb-2 ${
                    currentPage === i + 1
                      ? "text-white after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[1px] after:bg-white"
                      : "text-zinc-600 hover:text-zinc-300 hover:font-bold"
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
              className={`flex items-center space-x-2 uppercase text-[10px] tracking-widest font-bold transition-all duration-300 ${
                currentPage === totalPages
                  ? "opacity-20 cursor-not-allowed text-zinc-600"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <span>Tiếp Theo</span>
              <ChevronRight size={14} strokeWidth={2.5} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
