import React, { useState, useEffect, useCallback } from "react";
import {
  Search,
  Plus,
  MoreHorizontal,
  ExternalLink,
  X,
  ChevronLeft,
  ChevronRight,
  Loader2,
} from "lucide-react";
import AddProductModal from "../../components/AddProductModal";
import productService from "../../services/productService";

const ProductManager = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);

  // --- State Phân trang ---
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const pageSize = 2;
  const totalPages = Math.ceil(totalItems / pageSize);

  // --- Hàm Format Ngày tháng ---
  const formatDate = (dateString) => {
    if (!dateString) return "---";
    return new Intl.DateTimeFormat("vi-VN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date(dateString));
  };

  // --- 1. Hàm lấy dữ liệu (Fetch Data) ---
  const fetchProducts = useCallback(async () => {
    setLoading(true);
    try {
      const response = await productService.getAllProducts({
        page: currentPage,
        limit: pageSize,
        search: searchTerm,
        sort_by: "id",
        order: "desc",
      });

      // Kiểm tra cấu trúc response của bạn (thường là response.data hoặc response.items)
      setProducts(response.data || []);
      setTotalItems(response.total || 0);
    } catch (err) {
      console.error("Lỗi khi tải sản phẩm:", err);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  }, [currentPage, searchTerm]);

  // Gọi lại API khi trang hoặc từ khóa thay đổi
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  // --- 2. Xử lý chuyển trang ---
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      // Cuộn lên đầu bảng khi chuyển trang (tùy chọn)
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col h-full gap-4 p-4">
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden text-slate-800">
        {/* Header */}
        <div className="p-5 border-b border-gray-100 flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
            Products <span className="text-gray-300 text-lg">/</span> Inventory
          </h2>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-[#f26522] hover:bg-orange-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-semibold transition-all active:scale-95"
          >
            <Plus size={18} /> Add Product
          </button>
        </div>

        {/* Action Bar (Search) */}
        <div className="p-4 bg-gray-50/50 flex justify-between items-center border-b">
          <div className="relative w-80">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={16}
            />
            <input
              type="text"
              placeholder="Search by name..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1); // Reset về trang 1 khi tìm kiếm mới
              }}
              className="w-full pl-10 pr-10 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X size={14} />
              </button>
            )}
          </div>
          <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
            Total: {totalItems} items
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto min-h-[450px]">
          <table className="w-full text-left">
            <thead className="bg-gray-50/50 text-gray-400 text-[10px] uppercase font-bold border-b">
              <tr>
                <th className="px-6 py-4">Product Details</th>
                <th className="px-6 py-4 text-center">ID</th>
                <th className="px-6 py-4 text-center">Price</th>
                <th className="px-6 py-4 text-center">Created</th>
                <th className="px-6 py-4 text-center">Updated</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {loading ? (
                <tr>
                  <td colSpan="6" className="py-20 text-center">
                    <div className="flex flex-col items-center gap-2 text-gray-400">
                      <Loader2 className="animate-spin" size={32} />
                      <span className="text-sm font-medium">
                        Loading products...
                      </span>
                    </div>
                  </td>
                </tr>
              ) : products.length > 0 ? (
                products.map((item) => (
                  <tr
                    key={item.id}
                    className="hover:bg-orange-50/30 transition-colors group"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="relative w-12 h-12 flex-shrink-0">
                          <img
                            src={item.image_url}
                            alt={item.name}
                            onClick={() => setSelectedImg(item.image_url)}
                            className="w-full h-full rounded-lg object-cover bg-gray-100 cursor-zoom-in border border-gray-100 group-hover:border-orange-200 transition-all shadow-sm"
                          />
                        </div>
                        <div className="flex flex-col">
                          <span className="font-bold text-gray-800 text-sm line-clamp-1">
                            {item.name}
                          </span>
                          <a
                            href={item.url_redirect}
                            target="_blank"
                            rel="noreferrer"
                            className="text-[10px] text-orange-600 font-medium flex items-center gap-1 hover:underline"
                          >
                            <ExternalLink size={10} /> View Source
                          </a>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center font-mono text-xs text-gray-500">
                      #{item.id}
                    </td>
                    <td className="px-6 py-4 text-center font-bold text-gray-900">
                      ${item.price}
                    </td>
                    <td className="px-6 py-4 text-center text-[11px] text-gray-500">
                      {formatDate(item.created_date)}
                    </td>
                    <td className="px-6 py-4 text-center text-[11px] text-gray-500">
                      {formatDate(item.updated_date)}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-400 hover:text-gray-600">
                        <MoreHorizontal size={18} />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="6"
                    className="px-6 py-20 text-center text-gray-400 text-sm font-medium"
                  >
                    No products found matching your search.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* --- Phần Phân Trang (Pagination Controls) --- */}
        <div className="p-4 border-t border-gray-100 flex items-center justify-between bg-white">
          <div className="text-xs text-gray-500 font-medium">
            Showing{" "}
            <span className="text-gray-900">
              {(currentPage - 1) * pageSize + 1}
            </span>{" "}
            to{" "}
            <span className="text-gray-900">
              {Math.min(currentPage * pageSize, totalItems)}
            </span>{" "}
            of <span className="text-gray-900">{totalItems}</span> results
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1 || loading}
              className="p-2 border rounded-md hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <ChevronLeft size={16} />
            </button>

            {/* Hiển thị danh sách số trang (Logic đơn giản) */}
            {[...Array(totalPages)].map((_, index) => {
              const pageNum = index + 1;
              // Chỉ hiện trang hiện tại, trang đầu, trang cuối và lân cận nếu totalPages quá lớn (tùy chọn)
              return (
                <button
                  key={pageNum}
                  onClick={() => handlePageChange(pageNum)}
                  className={`w-8 h-8 text-xs font-bold rounded-md transition-all ${
                    currentPage === pageNum
                      ? "bg-[#f26522] text-white shadow-md shadow-orange-200"
                      : "text-gray-500 hover:bg-gray-100"
                  }`}
                >
                  {pageNum}
                </button>
              );
            })}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages || loading}
              className="p-2 border rounded-md hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* --- Modals --- */}
      <AddProductModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onRefresh={fetchProducts}
      />

      {/* Lightbox phóng to ảnh */}
      {selectedImg && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-in fade-in duration-200 cursor-zoom-out"
          onClick={() => setSelectedImg(null)}
        >
          <button className="absolute top-5 right-5 text-white/70 hover:text-white">
            <X size={32} />
          </button>
          <img
            src={selectedImg}
            alt="Preview"
            className="max-w-full max-h-[90vh] rounded-lg shadow-2xl animate-in zoom-in duration-300"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default ProductManager;
