import React, { useState, useEffect } from "react";
import {
  X,
  Save,
  Loader2,
  DollarSign,
  Link as LinkIcon,
  Edit3,
  Image as ImageIcon,
  RotateCcw,
  Type,
  Paperclip,
  Clock,
  FileText,
  User,
  Sparkles,
  ChevronDown,
} from "lucide-react";
import productService from "../services/productService";

const EditProductModal = ({ isOpen, onClose, onRefresh, product }) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    url_redirect: "",
  });
  const [imageFile, setImageFile] = useState(null);
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    if (isOpen && product) {
      setFormData({
        name: product.name || "",
        price: product.price || "",
        url_redirect: product.url_redirect || "",
      });
      setPreview(product.image_url || null);
      setImageFile(null);
    }
  }, [isOpen, product]);

  useEffect(() => {
    return () => {
      if (preview && preview.startsWith("blob:")) URL.revokeObjectURL(preview);
    };
  }, [preview]);

  if (!isOpen || !product) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = new FormData();
      data.append("name", formData.name.trim());
      data.append("price", parseInt(formData.price, 10));
      data.append("url_redirect", formData.url_redirect.trim());
      if (imageFile) data.append("image", imageFile);

      await productService.updateProduct(product.id, data);
      if (onRefresh) onRefresh();
      onClose();
    } catch (err) {
      alert(
        "Lỗi: " +
          (err.response?.data?.detail?.[0]?.msg || "Không thể cập nhật"),
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 font-sans">
      {/* Overlay - Mờ mịn theo style ảnh */}
      <div
        className="absolute inset-0 bg-slate-200/40 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative bg-white/95 backdrop-blur-xl rounded-[28px] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] w-full max-w-xl overflow-hidden border border-white/50 animate-in fade-in zoom-in duration-300">
        {/* Header - Minimalist Style */}
        <div className="px-6 py-5 flex justify-between items-center border-b border-slate-100/50">
          <div className="flex items-center gap-2">
            <span className="text-[15px] font-semibold text-slate-800">
              Edit Product
            </span>
            <span className="text-[13px] text-slate-400 font-medium">
              #{product.id}
            </span>
          </div>
          <div className="flex gap-2">
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:bg-slate-100 rounded-lg transition-colors"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-7">
          {/* Product Info Section (Giống phần To/Subject) */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 group">
              <span className="text-[14px] text-slate-400 min-w-[60px]">
                Name
              </span>
              <input
                name="name"
                value={formData.name}
                required
                onChange={handleChange}
                placeholder="Enter product name..."
                className="flex-1 bg-transparent text-[16px] font-semibold text-slate-800 outline-none placeholder:text-slate-300"
              />
            </div>
            <div className="h-[1px] bg-slate-100 w-full" />

            <div className="flex items-center gap-3">
              <span className="text-[14px] text-slate-400 min-w-[60px]">
                Price
              </span>
              <div className="flex gap-3 flex-1">
                <div className="relative flex-1">
                  <input
                    name="price"
                    type="number"
                    value={formData.price}
                    required
                    onChange={handleChange}
                    className="w-full bg-[#F4F4F5]/50 px-4 py-2 rounded-xl text-[14px] font-bold text-slate-700 outline-none border border-transparent focus:border-slate-200 transition-all"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-bold text-slate-400">
                    VND
                  </span>
                </div>
              </div>
            </div>
            <div className="h-[1px] bg-slate-100 w-full" />

            <div className="flex items-center gap-3 group">
              <span className="text-[14px] text-slate-400 min-w-[60px]">
                URL
              </span>
              <input
                name="url_redirect"
                value={formData.url_redirect}
                required
                onChange={handleChange}
                placeholder="Redirect URL"
                className="flex-[2] bg-[#F4F4F5]/50 px-4 py-2 rounded-xl text-[14px] text-slate-600 outline-none border border-transparent focus:border-slate-200 transition-all"
              />
            </div>
          </div>

          {/* Image Section - Attachment Card Style */}
          <div className="space-y-3">
            <label className="text-[12px] font-bold text-slate-400 uppercase tracking-widest px-1">
              Media Asset
            </label>

            <div className="flex w-full items-center justify-center p-4 bg-white rounded-2xl border border-slate-200/60 shadow-sm ">
              <div className="flex flex-col items-center gap-3">
                {/* Bọc toàn bộ Preview bằng label để click là chọn file */}
                <label className="relative group cursor-pointer transition-transform active:scale-95">
                  <div className="w-40 h-40 bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 shadow-sm transition-all group-hover:border-black/20 group-hover:shadow-md">
                    <img
                      src={preview}
                      alt="Preview"
                      className="w-full h-full object-cover transition-opacity group-hover:opacity-90"
                    />

                    {/* Lớp overlay hiện chữ khi hover (tùy chọn - giúp người dùng biết là click được) */}
                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                      <ImageIcon
                        className="text-white drop-shadow-md"
                        size={32}
                      />
                    </div>
                  </div>

                  <input
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={handleFileChange}
                  />
                </label>

                {/* Nút text hỗ trợ phía dưới, vẫn hoạt động vì nằm trong flow chọn file nếu bạn muốn, 
        hoặc đơn giản là một chỉ dẫn */}
                <p className="text-[13px] font-bold text-slate-500 group-hover:text-black transition-colors">
                  Click vào ảnh để thay đổi
                </p>

                {/* Nút Reset (nếu có file mới chọn) */}
                {imageFile && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault(); // Ngăn click lan ra label
                      setPreview(product.image_url);
                      setImageFile(null);
                    }}
                    className="text-[11px] font-bold text-red-500 hover:bg-red-50 px-2 py-1 rounded-lg transition-all"
                  >
                    <RotateCcw size={12} className="inline mr-1" /> Khôi phục
                    ảnh gốc
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Action Footer - Tái hiện thanh Toolbar của New Email */}
          <div className="flex items-center justify-between pt-6 border-t border-slate-100/50">
            <button
              onClick={onClose}
              className="px-5 py-2.5 text-[14px] font-semibold text-slate-600 hover:bg-slate-100 rounded-full transition-all cursor-pointer"
            >
              Hủy
            </button>
            <div className="flex items-center gap-3">
              <button
                type="submit"
                disabled={loading}
                className="flex items-center gap-3 px-8 py-2.5 bg-black text-white rounded-full text-[14px] font-bold hover:bg-zinc-800 transition-all active:scale-95 disabled:opacity-50 shadow-lg shadow-zinc-200 cursor-pointer disabled:cursor-not-allowed"
              >
                {loading ? (
                  <Loader2 className="animate-spin" size={18} />
                ) : (
                  <>
                    <span>Update</span>
                    <Save size={16} />
                  </>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProductModal;
