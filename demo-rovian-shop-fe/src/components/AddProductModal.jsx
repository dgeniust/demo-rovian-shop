import React, { useState, useEffect } from "react";
import {
  X,
  Loader2,
  DollarSign,
  Link as LinkIcon,
  PackagePlus,
  Image as ImageIcon,
  Type,
  Plus,
  RotateCcw,
  Paperclip,
  Clock,
  FileText,
  User,
  ChevronDown,
} from "lucide-react";
import productService from "../services/productService";

const AddProductModal = ({ isOpen, onClose, onRefresh }) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    url_redirect: "",
  });
  const [imageFile, setImageFile] = useState(null);
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
    };
  }, [preview]);

  if (!isOpen) return null;

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
    if (!imageFile) {
      alert("Vui lòng chọn ảnh sản phẩm!");
      return;
    }

    setLoading(true);
    try {
      const data = new FormData();
      data.append("name", formData.name.trim());
      data.append("price", parseInt(formData.price, 10));
      data.append("url_redirect", formData.url_redirect.trim());
      data.append("image", imageFile);

      await productService.createProduct(data);
      setFormData({ name: "", price: "", url_redirect: "" });
      setImageFile(null);
      setPreview(null);
      if (onRefresh) onRefresh();
      onClose();
    } catch (err) {
      alert(
        "Lỗi: " +
          (err.response?.data?.detail?.[0]?.msg || "Không thể thêm sản phẩm"),
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 font-sans">
      {/* Overlay - Glassmorphism */}
      <div
        className="absolute inset-0 bg-slate-200/40 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative bg-white/95 backdrop-blur-xl rounded-[28px] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] w-full max-w-xl overflow-hidden border border-white/50 animate-in fade-in zoom-in duration-300">
        {/* Header - Minimalist */}
        <div className="px-6 py-5 flex justify-between items-center border-b border-slate-100/50">
          <div className="flex items-center gap-2">
            <Plus size={18} className="text-slate-800" />
            <span className="text-[15px] font-semibold text-slate-800">
              New Product
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-7">
          {/* Image Section - Click directly on image to change */}
          <div className="flex w-full items-center justify-center p-4 bg-white rounded-2xl border border-slate-200/60 shadow-sm relative group">
            <div className="flex flex-col items-center gap-3">
              <label className="relative group cursor-pointer transition-transform active:scale-95">
                <div className="w-40 h-40 bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 shadow-sm transition-all group-hover:border-black/20 group-hover:shadow-md flex items-center justify-center">
                  {preview ? (
                    <img
                      src={preview}
                      alt="Preview"
                      className="w-full h-full object-cover transition-opacity group-hover:opacity-90"
                    />
                  ) : (
                    <div className="flex flex-col items-center text-slate-300">
                      <ImageIcon size={48} strokeWidth={1.5} />
                      <span className="text-[11px] font-bold mt-2 uppercase tracking-widest text-slate-400">
                        No Image
                      </span>
                    </div>
                  )}

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

              <p className="text-[13px] font-bold text-slate-500 group-hover:text-black transition-colors">
                {preview ? "Click vào ảnh để thay đổi" : "Click để tải ảnh lên"}
              </p>

              {imageFile && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    setPreview(null);
                    setImageFile(null);
                  }}
                  className="text-[11px] font-bold text-red-500 hover:bg-red-50 px-2 py-1 rounded-lg transition-all"
                >
                  <RotateCcw size={12} className="inline mr-1" /> Xóa ảnh vừa
                  chọn
                </button>
              )}
            </div>
          </div>

          {/* Form Fields Section */}
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
                placeholder="Product name..."
                className="flex-1 bg-transparent text-[16px] font-semibold text-slate-800 outline-none placeholder:text-slate-300"
              />
            </div>
            <div className="h-[1px] bg-slate-100 w-full" />

            <div className="flex items-center gap-3">
              <span className="text-[14px] text-slate-400 min-w-[60px]">
                Price
              </span>
              <div className="relative flex-1 max-w-[200px]">
                <input
                  name="price"
                  type="number"
                  value={formData.price}
                  required
                  onChange={handleChange}
                  placeholder="0"
                  className="w-full bg-[#F4F4F5]/50 px-4 py-2 rounded-xl text-[14px] font-bold text-slate-700 outline-none border border-transparent focus:border-slate-200 transition-all"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-bold text-slate-400">
                  VND
                </span>
              </div>
            </div>
            <div className="h-[1px] bg-slate-100 w-full" />

            <div className="flex items-center gap-3">
              <span className="text-[14px] text-slate-400 min-w-[60px]">
                Link
              </span>
              <input
                name="url_redirect"
                value={formData.url_redirect}
                required
                onChange={handleChange}
                placeholder="https://shope.ee/..."
                className="flex-1 bg-transparent text-[14px] text-slate-600 outline-none placeholder:text-slate-300"
              />
            </div>
          </div>

          {/* Action Footer */}
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
                className="flex items-center gap-3 px-8 py-2.5 bg-black text-white rounded-full text-[14px] font-bold hover:bg-zinc-800 transition-all active:scale-95 disabled:opacity-50 shadow-lg shadow-zinc-200 cursor-pointer"
              >
                {loading ? (
                  <Loader2 className="animate-spin" size={18} />
                ) : (
                  <>
                    <span>Create</span>
                    <Plus size={18} />
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

export default AddProductModal;
