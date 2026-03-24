import React, { useState, useEffect, useCallback, useRef } from "react";
import ProductCard from "./ProductCard";
import {
  ChevronLeft,
  ChevronRight,
  Loader2,
  ChevronDown,
  Check,
  Search,
  X, // Đã thêm: Import icon X để không bị lỗi crash trang
} from "lucide-react";
import productService from "../../services/productService";

export default function ProductList() {
  // --- 1. KHỞI TẠO STATE ---
  const [products, setProducts] = useState([]); // Danh sách sản phẩm từ API
  const [loading, setLoading] = useState(true); // Trạng thái chờ khi gọi API
  const [currentPage, setCurrentPage] = useState(1); // Trang hiện tại
  const [totalItems, setTotalItems] = useState(0); // Tổng số sản phẩm để tính phân trang
  const [isOpen, setIsOpen] = useState(false); // Đóng/mở dropdown Sort
  const dropdownRef = useRef(null); // Ref để xử lý click out-side dropdown

  // State cho Sắp xếp (Sort)
  const [sortBy, setSortBy] = useState("id");
  const [order, setOrder] = useState("desc");

  // State cho Tìm kiếm (Search)
  const [searchTerm, setSearchTerm] = useState(""); // Giá trị người dùng gõ vào ô input
  const [debouncedSearch, setDebouncedSearch] = useState(""); // Giá trị đã qua bộ lọc hoãn (debounce)

  const productsPerPage = 9; // Số sản phẩm trên mỗi trang

  // --- 2. LOGIC DEBOUNCE (Hạn chế gọi API liên tục) ---
  useEffect(() => {
    // Khi người dùng gõ, đợi 500ms sau khi họ ngừng gõ mới cập nhật debouncedSearch
    const timer = setTimeout(() => {
      setDebouncedSearch(searchTerm);
    }, 500);
    return () => clearTimeout(timer); // Xóa timer cũ nếu người dùng tiếp tục gõ
  }, [searchTerm]);

  // --- 3. XỬ LÝ CLICK OUTSIDE (Đóng dropdown khi click ra ngoài) ---
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
      // Gọi service lấy data với đầy đủ các tham số: trang, giới hạn, sắp xếp và từ khóa tìm kiếm
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
  }, [currentPage, sortBy, order, debouncedSearch]); // Chạy lại khi một trong các giá trị này thay đổi

  // Tự động đưa về trang 1 khi người dùng thay đổi tiêu chí tìm kiếm hoặc sắp xếp
  useEffect(() => {
    setCurrentPage(1);
  }, [debouncedSearch, sortBy, order]);

  // Thực thi gọi API
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  // --- 5. HÀM XỬ LÝ SỰ KIỆN ---
  const totalPages = Math.ceil(totalItems / productsPerPage);

  // Chuyển trang
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    document
      .getElementById("product-grid-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  // Thay đổi kiểu sắp xếp
  const handleSelectSort = (option) => {
    setSortBy(option.sort);
    setOrder(option.order);
    setIsOpen(false);
  };

  // Các tùy chọn sắp xếp
  const sortOptions = [
    { label: "Latest Pieces", sort: "id", order: "desc" },
    { label: "Price: Low to High", sort: "price", order: "asc" },
    { label: "Price: High to Low", sort: "price", order: "desc" },
    { label: "Alphabet: A - Z", sort: "name", order: "asc" },
    { label: "Alphabet: Z - A", sort: "name", order: "desc" },
  ];

  // Lấy nhãn (label) đang được chọn để hiển thị lên nút
  const currentLabel = sortOptions.find(
    (opt) => opt.sort === sortBy && opt.order === order,
  )?.label;

  return (
    <section
      id="product-grid-section"
      className="max-w-[1600px] mx-auto px-6 md:px-10 py-24 text-black min-h-screen"
    >
      {/* HEADER: Chứa tiêu đề, Tìm kiếm và Sắp xếp */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 border-b border-rose-100 pb-10 gap-8">
        <div className="space-y-4">
          <h2 className="text-5xl font-extralight font-serif uppercase tracking-tight italic text-stone-900 leading-none">
            Collections{" "}
            <span className="not-italic text-rose-300 font-sans text-4xl block md:inline">
              / Atelier
            </span>
          </h2>
          <div className="flex items-center gap-4">
            <span className="h-px w-8 bg-rose-200"></span>
            <p className="text-[11px] text-rose-400 uppercase tracking-[0.4em] font-bold">
              Est. 2026 — Found {totalItems} Masterpieces
            </p>
          </div>
        </div>

        {/* CỤM ĐIỀU KHIỂN: Search & Sort */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
          {/* Ô TÌM KIẾM */}
          <div className="relative group w-full sm:w-64">
            <Search
              size={16}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 group-focus-within:text-rose-400 transition-colors"
            />
            <input
              type="text"
              placeholder="Search pieces..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-[#fffafb] border border-stone-200 pl-11 pr-10 py-3 rounded-full text-[12px] font-medium tracking-wider outline-none transition-all focus:border-rose-300 focus:bg-white focus:shadow-lg focus:shadow-rose-50/50"
            />
            {/* Nút X để xóa nhanh nội dung tìm kiếm */}
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-300 hover:text-rose-500 transition-colors"
              >
                <X size={14} />
              </button>
            )}
          </div>

          {/* DROPDOWN SẮP XẾP */}
          <div className="relative w-full sm:w-auto" ref={dropdownRef}>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="group flex items-center justify-between w-full sm:min-w-[220px] gap-4 bg-white border border-stone-200 px-6 py-2.5 rounded-full transition-all duration-300 hover:border-rose-300 hover:shadow-lg hover:shadow-rose-50/50"
            >
              <div className="flex flex-col items-start">
                <span className="text-[8px] uppercase tracking-[0.2em] text-stone-400 font-bold leading-none mb-1">
                  Sort By
                </span>
                <span className="text-[11px] font-bold text-stone-800 uppercase tracking-wider">
                  {currentLabel}
                </span>
              </div>
              <ChevronDown
                size={14}
                className={`text-rose-300 transition-transform duration-500 ${isOpen ? "rotate-180" : ""}`}
              />
            </button>

            {/* Menu Dropdown */}
            {isOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-white/90 backdrop-blur-xl border border-rose-50 rounded-3xl shadow-2xl z-[100] py-3 animate-in fade-in zoom-in-95 duration-200">
                {sortOptions.map((option, idx) => {
                  const isSelected =
                    sortBy === option.sort && order === option.order;
                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectSort(option)}
                      className={`w-full flex items-center justify-between px-5 py-3 text-[11px] uppercase tracking-widest transition-all ${
                        isSelected
                          ? "bg-rose-50/50 text-rose-600 font-black"
                          : "text-stone-500 hover:bg-stone-50 hover:text-stone-900"
                      }`}
                    >
                      {option.label}
                      {isSelected && <Check size={12} />}
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
            <div className="col-span-3 text-center py-20">
              <p className="text-stone-400 font-serif italic text-lg mb-4">
                No pieces available matching your criteria.
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSortBy("id");
                }}
                className="text-[10px] uppercase tracking-widest font-bold text-rose-400 border-b border-rose-200 pb-1"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      )}

      {/* PHÂN TRANG (PAGINATION) */}
      {totalPages > 1 && (
        <div className="mt-28 flex flex-col items-center space-y-8">
          <div className="w-px h-16 bg-rose-100"></div>
          <div className="flex items-center space-x-12">
            <button
              onClick={() => currentPage > 1 && paginate(currentPage - 1)}
              disabled={currentPage === 1 || loading}
              className={`flex items-center space-x-2 uppercase text-[10px] tracking-widest font-bold transition-all duration-300 text-stone-700 ${currentPage === 1 ? "opacity-20 cursor-not-allowed" : "hover:text-rose-600"}`}
            >
              <ChevronLeft size={14} strokeWidth={2.5} />
              <span>Prev</span>
            </button>

            <div className="flex items-center space-x-6">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i + 1}
                  onClick={() => paginate(i + 1)}
                  className={`text-xs font-medium transition-all relative pb-2 ${currentPage === i + 1 ? "text-rose-600 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[1px] after:bg-rose-500" : "text-stone-300 hover:text-rose-500 hover:font-bold"}`}
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
              className={`flex items-center space-x-2 uppercase text-[10px] tracking-widest font-bold transition-all duration-300 text-stone-700 ${currentPage === totalPages ? "opacity-20 cursor-not-allowed" : "hover:text-rose-600"}`}
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
