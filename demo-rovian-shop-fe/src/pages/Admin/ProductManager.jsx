import React, { useState, useEffect, useCallback } from "react";
import {
  Search,
  Plus,
  ExternalLink,
  X,
  ChevronLeft,
  ChevronRight,
  Loader2,
  Edit3,
  Trash2,
  Package,
} from "lucide-react";
import AddProductModal from "../../components/AddProductModal";
import productService from "../../services/productService";
import EditProductModal from "../../components/EditProductModal";
import DeleteConfirmModal from "../../components/DeleteConfirmModal";

const ProductManager = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);
  const pageSize = 6;
  const totalPages = Math.ceil(totalItems / pageSize);

  // --- Helpers ---
  const formatDate = (dateString) => {
    if (!dateString) return "---";
    return new Intl.DateTimeFormat("vi-VN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }).format(new Date(dateString));
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("vi-VN").format(amount || 0);
  };

  // --- Fetch Data ---
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
      setProducts(response.data || []);
      setTotalItems(response.total || 0);
    } catch (err) {
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  }, [currentPage, searchTerm]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const confirmDelete = async (id) => {
    try {
      await productService.deleteProduct(id);
      fetchProducts();
      // Có thể thêm thông báo thành công ở đây
    } catch (err) {
      alert("Lỗi khi xóa sản phẩm.");
    }
  };

  return (
    <div className="p-6 bg-[#F8F9FB] min-h-screen font-sans text-slate-700">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
            Product Inventory
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Manage your stock, prices and product details.
          </p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-[#f26522] hover:bg-[#d4541a] text-white px-5 py-2.5 rounded-2xl flex items-center justify-center gap-2 text-sm font-bold transition-all shadow-lg shadow-orange-200 active:scale-95"
        >
          <Plus size={18} strokeWidth={3} />
          <span>Add New Product</span>
        </button>
      </div>

      {/* Main Card */}
      <div className="bg-white rounded-[24px] shadow-sm border border-slate-100 overflow-hidden">
        {/* Table Toolbar */}
        <div className="p-6 border-b border-slate-50 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="relative w-full sm:w-96">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              size={18}
            />
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full pl-12 pr-10 py-3 bg-slate-50 border-none rounded-2xl text-sm focus:ring-2 focus:ring-orange-500/20 outline-none transition-all placeholder:text-slate-400"
            />
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-xl">
            <Package size={16} className="text-slate-400" />
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Total: {totalItems}
            </span>
          </div>
        </div>

        {/* Table Body */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-slate-50/50">
                <th className="px-6 py-4 text-left text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                  Product Info
                </th>
                <th className="px-6 py-4 text-center text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                  Price
                </th>
                <th className="px-6 py-4 text-center text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                  Date Created
                </th>
                <th className="px-6 py-4 text-right text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {loading ? (
                <tr>
                  <td colSpan="4" className="py-20 text-center">
                    <Loader2
                      className="animate-spin mx-auto text-orange-500"
                      size={32}
                    />
                  </td>
                </tr>
              ) : products.length > 0 ? (
                products.map((item) => (
                  <tr
                    key={item.id}
                    className="hover:bg-slate-50/80 transition-colors group"
                  >
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-4">
                        <div className="relative w-14 h-14 flex-shrink-0">
                          <img
                            src={item.image_url}
                            alt=""
                            onClick={() => setSelectedImg(item.image_url)}
                            className="w-full h-full rounded-2xl object-cover bg-slate-100 cursor-zoom-in shadow-sm border border-white group-hover:scale-105 transition-transform"
                          />
                        </div>
                        <div className="flex flex-col">
                          <span className="font-bold text-slate-800 text-sm leading-tight">
                            {item.name}
                          </span>
                          <div className="flex items-center gap-3 mt-1">
                            <span className="text-[10px] font-mono text-slate-400">
                              #{item.id}
                            </span>
                            <a
                              href={item.url_redirect}
                              target="_blank"
                              rel="noreferrer"
                              className="text-[10px] text-orange-500 font-bold flex items-center gap-1 hover:text-orange-600 transition-colors"
                            >
                              <ExternalLink size={10} strokeWidth={3} /> LINK
                            </a>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-5 text-center">
                      <span className="inline-block px-3 py-1 bg-green-50 text-green-600 rounded-lg font-bold text-sm">
                        {formatCurrency(item.price)}{" "}
                        <span className="text-[10px] opacity-70">đ</span>
                      </span>
                    </td>
                    <td className="px-6 py-5 text-center text-xs text-slate-500 font-medium">
                      {formatDate(item.created_date)}
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex justify-end gap-2">
                        <button
                          onClick={() => {
                            setSelectedProduct(item);
                            setIsEditModalOpen(true);
                          }}
                          className="p-2.5 text-slate-400 hover:text-blue-500 hover:bg-blue-50 rounded-xl transition-all"
                        >
                          <Edit3 size={18} />
                        </button>
                        <button
                          onClick={() => {
                            setProductToDelete(item);
                            setIsDeleteModalOpen(true);
                          }}
                          className="p-2.5 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="4"
                    className="py-20 text-center text-slate-400 font-medium"
                  >
                    No items found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="p-6 bg-slate-50/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            Page {currentPage} of {totalPages}
          </p>
          <div className="flex items-center gap-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1 || loading}
              className="p-2 bg-white border border-slate-200 rounded-xl shadow-sm disabled:opacity-30 hover:bg-slate-50 transition-all"
            >
              <ChevronLeft size={20} className="text-slate-600" />
            </button>
            <div className="flex gap-1">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i + 1}
                  onClick={() => handlePageChange(i + 1)}
                  className={`w-10 h-10 rounded-xl text-sm font-bold transition-all ${
                    currentPage === i + 1
                      ? "bg-[#f26522] text-white shadow-md shadow-orange-100"
                      : "bg-white text-slate-500 hover:bg-slate-100 border border-slate-100"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages || loading}
              className="p-2 bg-white border border-slate-200 rounded-xl shadow-sm disabled:opacity-30 hover:bg-slate-50 transition-all"
            >
              <ChevronRight size={20} className="text-slate-600" />
            </button>
          </div>
        </div>
      </div>

      {/* Modals & Lightbox */}
      <AddProductModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onRefresh={fetchProducts}
      />
      <EditProductModal
        isOpen={isEditModalOpen}
        onClose={() => {
          setIsEditModalOpen(false);
          setSelectedProduct(null);
        }}
        product={selectedProduct}
        onRefresh={fetchProducts}
      />
      <DeleteConfirmModal
        isOpen={isDeleteModalOpen}
        onClose={() => {
          setIsDeleteModalOpen(false);
          setProductToDelete(null);
        }}
        onConfirm={confirmDelete}
        product={productToDelete}
      />
      {selectedImg && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/90 backdrop-blur-md p-4 transition-all"
          onClick={() => setSelectedImg(null)}
        >
          <button className="absolute top-8 right-8 text-white hover:rotate-90 transition-transform">
            <X size={32} />
          </button>
          <img
            src={selectedImg}
            alt=""
            className="max-w-full max-h-[85vh] rounded-[32px] shadow-2xl border-4 border-white/10"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default ProductManager;
