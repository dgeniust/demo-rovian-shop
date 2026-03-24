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
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Overlay - Glassmorphism */}
      <div
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative bg-white rounded-[32px] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.14)] w-full max-w-xl overflow-hidden animate-in fade-in zoom-in duration-300">
        {/* Header - Indigo Accent */}
        <div className="px-8 pt-8 pb-4 flex justify-between items-start">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600">
              <Edit3 size={24} strokeWidth={2.5} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                Edit Product
              </h3>
              <p className="text-sm text-slate-500 font-medium italic">
                Modifying ID: #{product.id}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 bg-slate-50 text-slate-400 hover:text-red-500 rounded-full transition-all"
          >
            <X size={20} strokeWidth={3} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-8 pt-4 space-y-6">
          {/* Image Section - Interactive Overlay */}
          <div className="space-y-2">
            <div className="flex justify-between items-end px-1">
              <label className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em]">
                Product Image
              </label>
              {imageFile && (
                <button
                  type="button"
                  onClick={() => {
                    setPreview(product.image_url);
                    setImageFile(null);
                  }}
                  className="text-[11px] font-bold text-indigo-600 flex items-center gap-1 hover:bg-indigo-50 px-2 py-1 rounded-lg transition-all"
                >
                  <RotateCcw size={12} strokeWidth={3} /> RESET TO ORIGINAL
                </button>
              )}
            </div>

            <div
              className={`relative group border-2 border-dashed rounded-[24px] transition-all duration-300 overflow-hidden
              ${imageFile ? "border-indigo-500 bg-indigo-50/20" : "border-slate-100 bg-slate-50"}`}
            >
              <div className="p-3">
                <div className="relative h-44 w-full group">
                  <img
                    src={preview}
                    alt="Preview"
                    className="h-full w-full object-cover rounded-[18px] shadow-sm transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <label className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-all rounded-[18px] flex flex-col items-center justify-center cursor-pointer backdrop-blur-[2px]">
                    <div className="bg-white p-3 rounded-2xl text-indigo-600 shadow-xl mb-2">
                      <ImageIcon size={24} />
                    </div>
                    <span className="text-white text-xs font-bold uppercase tracking-wider">
                      Change Photo
                    </span>
                    <input
                      type="file"
                      className="hidden"
                      accept="image/*"
                      onChange={handleFileChange}
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Form Fields */}
          <div className="space-y-5">
            <div className="space-y-2">
              <label className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] px-1 flex items-center gap-2">
                <Type size={14} /> Product Name
              </label>
              <input
                name="name"
                value={formData.name}
                required
                onChange={handleChange}
                className="w-full px-5 py-4 bg-slate-50 border-none rounded-2xl text-slate-800 font-bold focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] px-1 flex items-center gap-2">
                  <DollarSign size={14} /> Price (VND)
                </label>
                <input
                  name="price"
                  type="number"
                  value={formData.price}
                  required
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-slate-50 border-none rounded-2xl text-slate-800 font-bold focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] px-1 flex items-center gap-2">
                  <LinkIcon size={14} /> Redirect Link
                </label>
                <input
                  name="url_redirect"
                  value={formData.url_redirect}
                  required
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-slate-50 border-none rounded-2xl text-slate-800 font-medium focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all"
                />
              </div>
            </div>
          </div>

          {/* Action Footer */}
          <div className="flex items-center gap-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-4 bg-slate-50 text-slate-500 font-bold rounded-2xl hover:bg-slate-100 transition-all active:scale-95"
            >
              Discard
            </button>
            <button
              type="submit"
              disabled={loading}
              className="flex-[2] bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-2xl transition-all shadow-lg shadow-indigo-100 active:scale-95 disabled:opacity-50 flex items-center justify-center gap-3"
            >
              {loading ? (
                <Loader2 className="animate-spin" size={20} />
              ) : (
                <>
                  <Save size={20} strokeWidth={2.5} />
                  <span>Update Changes</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProductModal;
