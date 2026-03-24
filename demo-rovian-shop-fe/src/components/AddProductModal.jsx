import React, { useState, useEffect } from "react";
import {
  X,
  Loader2,
  DollarSign,
  Link as LinkIcon,
  PackagePlus,
  Image as ImageIcon,
  Type,
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
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Overlay - Glassmorphism nhẹ */}
      <div
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative bg-white rounded-[32px] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.14)] w-full max-w-xl overflow-hidden animate-in fade-in zoom-in duration-300">
        {/* Header Section */}
        <div className="px-8 pt-8 pb-4 flex justify-between items-start">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center text-[#f26522]">
              <PackagePlus size={24} strokeWidth={2.5} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                Create Product
              </h3>
              <p className="text-sm text-slate-500 font-medium">
                Add a new item to your showcase
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 bg-slate-50 text-slate-400 hover:text-slate-600 rounded-full transition-colors"
          >
            <X size={20} strokeWidth={3} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-8 pt-4 space-y-6">
          {/* Upload Area - Phá cách hơn */}
          <div className="space-y-2">
            <label className="text-[13px] font-bold text-slate-400 uppercase tracking-widest px-1">
              Product Visual
            </label>
            <div
              className={`relative group border-2 border-dashed rounded-[24px] transition-all duration-300 overflow-hidden
              ${preview ? "border-orange-500 bg-orange-50/20" : "border-slate-100 bg-slate-50 hover:bg-slate-100"}`}
            >
              {preview ? (
                <div className="p-3 relative group">
                  <img
                    src={preview}
                    alt="Preview"
                    className="h-48 w-full object-cover rounded-[18px] shadow-sm"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-[18px] flex items-center justify-center">
                    <button
                      type="button"
                      onClick={() => {
                        setPreview(null);
                        setImageFile(null);
                      }}
                      className="bg-white text-red-500 p-3 rounded-2xl font-bold text-sm shadow-xl hover:scale-105 transition-transform"
                    >
                      Remove and Change
                    </button>
                  </div>
                </div>
              ) : (
                <label className="flex flex-col items-center justify-center py-12 cursor-pointer">
                  <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-slate-400 group-hover:text-orange-500 group-hover:scale-110 transition-all">
                    <ImageIcon size={28} />
                  </div>
                  <span className="mt-4 text-sm font-bold text-slate-700">
                    Drop your image here
                  </span>
                  <span className="text-xs text-slate-400 mt-1 font-medium">
                    Supports JPG, PNG (Max 10MB)
                  </span>
                  <input
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={handleFileChange}
                  />
                </label>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5">
            {/* Input Tên */}
            <div className="space-y-2">
              <label className="text-[13px] font-bold text-slate-400 uppercase tracking-widest px-1 flex items-center gap-2">
                <Type size={14} /> Product Name
              </label>
              <input
                name="name"
                value={formData.name}
                required
                onChange={handleChange}
                placeholder="Name of your awesome product"
                className="w-full px-5 py-4 bg-slate-50 border-none rounded-2xl text-slate-800 font-semibold focus:ring-2 focus:ring-orange-500/20 outline-none transition-all placeholder:text-slate-300"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Input Giá */}
              <div className="space-y-2">
                <label className="text-[13px] font-bold text-slate-400 uppercase tracking-widest px-1 flex items-center gap-2">
                  <DollarSign size={14} /> Price (VND)
                </label>
                <input
                  name="price"
                  type="number"
                  value={formData.price}
                  required
                  onChange={handleChange}
                  placeholder="0.00"
                  className="w-full px-5 py-4 bg-slate-50 border-none rounded-2xl text-slate-800 font-bold focus:ring-2 focus:ring-orange-500/20 outline-none transition-all placeholder:text-slate-300"
                />
              </div>

              {/* Input Link */}
              <div className="space-y-2">
                <label className="text-[13px] font-bold text-slate-400 uppercase tracking-widest px-1 flex items-center gap-2">
                  <LinkIcon size={14} /> Affiliate Link
                </label>
                <input
                  name="url_redirect"
                  value={formData.url_redirect}
                  required
                  onChange={handleChange}
                  placeholder="https://shope.ee/..."
                  className="w-full px-5 py-4 bg-slate-50 border-none rounded-2xl text-slate-800 font-medium focus:ring-2 focus:ring-orange-500/20 outline-none transition-all placeholder:text-slate-300"
                />
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="flex items-center gap-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-4 bg-slate-50 text-slate-500 font-bold rounded-2xl hover:bg-slate-100 transition-all active:scale-95"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="flex-[2] bg-[#f26522] hover:bg-[#d4541a] text-white font-bold py-4 rounded-2xl transition-all shadow-lg shadow-orange-100 active:scale-95 disabled:opacity-50 flex items-center justify-center gap-3"
            >
              {loading ? (
                <Loader2 className="animate-spin" size={20} />
              ) : (
                <>
                  <span>Publish Item</span>
                  <PackagePlus size={20} />
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProductModal;
