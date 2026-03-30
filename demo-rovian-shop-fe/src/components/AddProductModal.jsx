import React, { useState, useEffect } from "react";
import { X, Loader2, Plus, ImageIcon, XCircle } from "lucide-react";
import productService from "../services/productService";

const AddProductModal = ({ isOpen, onClose, onRefresh }) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    url_redirect: "",
    description: "",
  });

  const [imageFile, setImageFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const [galleryFiles, setGalleryFiles] = useState([]);
  const [galleryPreviews, setGalleryPreviews] = useState([]);

  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
      galleryPreviews.forEach((p) => URL.revokeObjectURL(p));
    };
  }, [preview, galleryPreviews]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleMainImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleGalleryChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 0) {
      setGalleryFiles((prev) => [...prev, ...files]);
      const newPreviews = files.map((file) => URL.createObjectURL(file));
      setGalleryPreviews((prev) => [...prev, ...newPreviews]);
    }
  };

  const removeGalleryImage = (index) => {
    setGalleryFiles((prev) => prev.filter((_, i) => i !== index));
    setGalleryPreviews((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!imageFile) {
      alert("Vui lòng chọn ảnh chính (Main Image)!");
      return;
    }

    setLoading(true);
    try {
      const data = new FormData();

      // Các attributes bắt buộc
      data.append("name", formData.name.trim());
      data.append("price", parseInt(formData.price, 10)); // Đảm bảo là Integer
      data.append("url_redirect", formData.url_redirect.trim());
      data.append("image", imageFile);

      // Các attributes có thể null/optional
      if (formData.description.trim()) {
        data.append("description", formData.description.trim());
      }

      if (galleryFiles.length > 0) {
        galleryFiles.forEach((file) => {
          data.append("expand_images", file);
        });
      }

      const res = await productService.createProduct(data);
      console.log("Product created:", JSON.stringify(res));

      setFormData({ name: "", price: "", url_redirect: "", description: "" });
      setImageFile(null);
      setPreview(null);
      setGalleryFiles([]);
      setGalleryPreviews([]);

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
      <div
        className="absolute inset-0 bg-slate-200/40 backdrop-blur-md"
        onClick={onClose}
      />

      <div className="relative bg-white/95 backdrop-blur-xl rounded-[28px] shadow-2xl w-full max-w-2xl overflow-hidden border border-white/50 animate-in fade-in zoom-in duration-300">
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

        <form
          onSubmit={handleSubmit}
          className="p-8 space-y-7 max-h-[80vh] overflow-y-auto custom-scrollbar"
        >
          {/* MEDIA SECTION */}
          <div className="space-y-4">
            <label className="text-[12px] font-bold text-slate-400 uppercase tracking-widest px-1">
              Media Assets
            </label>
            <div className="bg-slate-50/50 border border-slate-100 p-5 rounded-2xl flex flex-col md:flex-row gap-6 items-start">
              <div className="flex flex-col items-center gap-2 w-full md:w-auto">
                <span className="text-[11px] font-bold text-slate-500 uppercase">
                  Main Image *
                </span>
                <label className="relative group cursor-pointer">
                  <div className="w-32 h-32 bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm transition-all hover:border-orange-300 flex items-center justify-center">
                    {preview ? (
                      <img
                        src={preview}
                        alt="Main"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <ImageIcon size={32} className="text-slate-300" />
                    )}
                  </div>
                  <input
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={handleMainImageChange}
                  />
                </label>
              </div>

              <div className="hidden md:block w-px h-32 bg-slate-200"></div>

              <div className="flex flex-col gap-2 flex-1 w-full">
                <span className="text-[11px] font-bold text-slate-500 uppercase">
                  Gallery Images
                </span>
                <div className="flex flex-wrap gap-3">
                  {galleryPreviews.map((src, index) => (
                    <div
                      key={index}
                      className="relative w-20 h-20 rounded-xl border border-slate-200 overflow-hidden group"
                    >
                      <img
                        src={src}
                        alt="Gallery"
                        className="w-full h-full object-cover"
                      />
                      <button
                        type="button"
                        onClick={() => removeGalleryImage(index)}
                        className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <XCircle size={20} className="text-white" />
                      </button>
                    </div>
                  ))}

                  <label className="w-20 h-20 bg-white border border-dashed border-slate-300 rounded-xl flex flex-col items-center justify-center cursor-pointer hover:border-orange-400 hover:bg-orange-50/50 transition-colors">
                    <Plus size={20} className="text-slate-400" />
                    <input
                      type="file"
                      multiple
                      className="hidden"
                      accept="image/*"
                      onChange={handleGalleryChange}
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* FORM FIELDS */}
          <div className="space-y-4">
            {/* Name */}
            <div className="flex items-center gap-3 group">
              <span className="text-[14px] text-slate-400 min-w-[60px]">
                Name *
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

            {/* Price */}
            <div className="flex items-center gap-3">
              <span className="text-[14px] text-slate-400 min-w-[60px]">
                Price *
              </span>
              <div className="relative flex-1 max-w-[200px]">
                <input
                  name="price"
                  type="number"
                  min="0"
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

            {/* Redirect Link */}
            <div className="flex items-center gap-3">
              <span className="text-[14px] text-slate-400 min-w-[60px]">
                Link *
              </span>
              <input
                name="url_redirect"
                type="url"
                value={formData.url_redirect}
                required
                onChange={handleChange}
                placeholder="https://..."
                className="flex-1 bg-transparent text-[14px] text-slate-600 outline-none placeholder:text-slate-300"
              />
            </div>
            <div className="h-[1px] bg-slate-100 w-full" />

            {/* Description */}
            <div className="flex items-start gap-3">
              <span className="text-[14px] text-slate-400 min-w-[60px] pt-2">
                Desc
              </span>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Write a short description for the product..."
                rows="3"
                className="flex-1 bg-[#F4F4F5]/50 px-4 py-3 rounded-xl text-[14px] text-slate-600 outline-none border border-transparent focus:border-slate-200 transition-all resize-none"
              />
            </div>
          </div>

          {/* Action Footer */}
          <div className="flex items-center justify-between pt-6 border-t border-slate-100/50 sticky bottom-0 bg-white">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 text-[14px] font-semibold text-slate-600 hover:bg-slate-100 rounded-full transition-all cursor-pointer"
            >
              Hủy
            </button>
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
        </form>
      </div>
    </div>
  );
};

export default AddProductModal;
