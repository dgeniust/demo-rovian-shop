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
import clarityService from "../../services/clarityService";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const [sortBy, setSortBy] = useState("id");
  const [order, setOrder] = useState("desc");

  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  const productsPerPage = 9;

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchTerm);
    }, 500);
    return () => clearTimeout(timer);
  }, [searchTerm]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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

      // Track search event with Clarity
      if (debouncedSearch) {
        clarityService.trackSearch(debouncedSearch, response.data?.length || 0);
      }
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
      /* CẢI TIẾN 1: Dùng w-full và overflow-x-hidden để triệt tiêu vệt trắng khi scroll ngang */
      className="w-full max-w-full overflow-x-hidden bg-[#0a0a0a] text-white min-h-screen pt-24 pb-12 px-4 md:px-10"
    >
      <div className="max-w-[1600px] mx-auto">
        {/* HEADER SECTION */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 md:mb-20 border-b border-zinc-800 pb-10 gap-8">
          <div className="space-y-4 w-full text-left">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-light tracking-tighter text-white italic leading-tight">
              Bộ sưu tập{" "}
              <span className="block sm:inline text-sm md:text-base tracking-[0.3em] text-zinc-500 font-sans not-italic uppercase mt-2 sm:mt-0">
                / Tuyệt Tác Cơ Khí
              </span>
            </h2>
            <div className="flex items-center gap-4">
              <span className="h-px w-8 bg-zinc-600"></span>
              <p className="text-[10px] md:text-xs tracking-[0.3em] text-zinc-400 uppercase font-medium">
                Est. 2026 — {totalItems} Tuyệt tác
              </p>
            </div>
          </div>

          {/* CỤM ĐIỀU KHIỂN: Search & Sort - CẢI TIẾN 2: Reponsive tối ưu cho mobile */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full lg:w-auto">
            {/* Ô TÌM KIẾM */}
            <div className="relative group flex-1 sm:w-64">
              <Search
                size={16}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600 group-focus-within:text-white transition-colors"
              />
              <input
                type="text"
                placeholder="Tìm kiếm..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-zinc-900/30 border border-zinc-800 pl-11 pr-10 py-3 rounded-none text-xs font-medium tracking-wider text-white outline-none focus:border-white transition-all"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white"
                >
                  <X size={14} />
                </button>
              )}
            </div>

            {/* DROPDOWN SẮP XẾP */}
            <div className="relative flex-1 sm:w-auto" ref={dropdownRef}>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="group flex items-center justify-between w-full sm:min-w-[200px] gap-4 bg-zinc-900/30 border border-zinc-800 px-5 py-2.5 rounded-none transition-all hover:border-white"
              >
                <div className="flex flex-col items-start">
                  <span className="text-xs uppercase tracking-[0.2em] text-zinc-500 font-bold mb-1">
                    Sắp xếp
                  </span>
                  <span className="text-white text-xs font-medium truncate max-w-[120px] sm:max-w-none">
                    {currentLabel}
                  </span>
                </div>
                <ChevronDown
                  size={14}
                  className={`text-zinc-500 transition-transform duration-500 ${
                    isOpen ? "rotate-180 text-white" : ""
                  }`}
                />
              </button>

              {/* Menu Dropdown - CẢI TIẾN 3: Responsive chiều rộng dropdown cho mobile */}
              {isOpen && (
                <div className="absolute right-0 left-0 sm:left-auto mt-2 w-full sm:w-64 bg-zinc-900 border border-zinc-800 z-[100] py-2 animate-in fade-in zoom-in-95 duration-200">
                  {sortOptions.map((option, idx) => {
                    const isSelected =
                      sortBy === option.sort && order === option.order;
                    return (
                      <button
                        key={idx}
                        onClick={() => handleSelectSort(option)}
                        className={`w-full flex items-center justify-between px-5 py-3 text-[10px] uppercase tracking-widest transition-all ${
                          isSelected
                            ? "bg-white/10 text-white font-bold border-l-2 border-white"
                            : "text-zinc-500 hover:text-white border-l-2 border-transparent"
                        }`}
                      >
                        {option.label}
                        {isSelected && (
                          <Check size={12} className="text-white" />
                        )}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* DANH SÁCH SẢN PHẨM */}
        <div className="min-h-[400px]">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-40 space-y-4">
              <Loader2 className="animate-spin text-zinc-600" size={40} />
              <p className="font-serif italic text-zinc-500 tracking-widest text-xs">
                Đang khởi động cỗ máy...
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 md:gap-x-12 gap-y-12 md:gap-y-24">
              {products.length > 0 ? (
                products.map((item) => (
                  <ProductCard key={item.id} product={item} />
                ))
              ) : (
                <div className="col-span-full text-center py-20">
                  <p className="text-zinc-500 font-serif italic text-lg mb-4">
                    Không tìm thấy tạo tác phù hợp.
                  </p>
                  <button
                    onClick={() => {
                      setSearchTerm("");
                      setSortBy("id");
                    }}
                    className="text-[10px] uppercase tracking-widest font-bold text-white border-b border-zinc-600 pb-1"
                  >
                    Khôi phục bộ lọc
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* PHÂN TRANG */}
        {totalPages > 1 && (
          <div className="mt-20 md:mt-28 flex flex-col items-center space-y-8">
            <div className="w-px h-12 md:h-16 bg-zinc-800"></div>
            <div className="flex items-center justify-center gap-4 md:gap-12 w-full">
              <button
                onClick={() => currentPage > 1 && paginate(currentPage - 1)}
                disabled={currentPage === 1 || loading}
                className="flex items-center gap-2 uppercase text-[9px] md:text-[10px] tracking-widest font-bold disabled:opacity-20 text-zinc-400 hover:text-white transition-all"
              >
                <ChevronLeft size={14} />
                <span className="hidden sm:inline">Trở Lại</span>
              </button>

              <div className="flex items-center gap-2 md:gap-6">
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i + 1}
                    onClick={() => paginate(i + 1)}
                    className={`text-[10px] md:text-xs font-medium transition-all relative pb-2 ${
                      currentPage === i + 1
                        ? "text-white after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[1px] after:bg-white"
                        : "text-zinc-600 hover:text-zinc-300"
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
                className="flex items-center gap-2 uppercase text-[9px] md:text-[10px] tracking-widest font-bold disabled:opacity-20 text-zinc-400 hover:text-white transition-all"
              >
                <span className="hidden sm:inline">Tiếp Theo</span>
                <ChevronRight size={14} />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
