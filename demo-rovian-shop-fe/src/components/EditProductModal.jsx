import React, { useState, useEffect } from "react";
import {
  X,
  Save,
  Loader2,
  ImageIcon,
  RotateCcw,
  Plus,
  Trash2,
} from "lucide-react";
import productService from "../services/productService";

const EditProductModal = ({ isOpen, onClose, onRefresh, product }) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    url_redirect: "",
    description: "",
  });

  // Main Image
  const [imageFile, setImageFile] = useState(null);
  const [preview, setPreview] = useState(null);

  // Expand Images - combined list
  const [expandImages, setExpandImages] = useState([]); // Mảng chứa objects: {type: 'url', value: url, preview: url} hoặc {type: 'file', value: file, preview: blobUrl}

  useEffect(() => {
    if (isOpen && product) {
      setFormData({
        name: product.name || "",
        price: product.price || "",
        url_redirect: product.url_redirect || "",
        description: product.description || "",
      });
      setPreview(product.image_url || null);
      setImageFile(null);

      // Khởi tạo danh sách ảnh từ dữ liệu product
      // Giả sử product.expand_images là mảng chứa các URL (string)
      setExpandImages(
        (product.expand_images || []).map((url) => ({
          type: "url",
          value: url,
          preview: url,
        })),
      );
    }
  }, [isOpen, product]);

  useEffect(() => {
    return () => {
      if (preview && preview.startsWith("blob:")) URL.revokeObjectURL(preview);
      expandImages.forEach((item) => {
        if (item.type === "file") URL.revokeObjectURL(item.preview);
      });
    };
  }, [preview, expandImages]);

  if (!isOpen || !product) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleMainFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleExpandFileChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 0) {
      const newItems = files.map((file) => ({
        type: "file",
        value: file,
        preview: URL.createObjectURL(file),
      }));
      setExpandImages((prev) => [...prev, ...newItems]);
    }
  };

  // Xóa ảnh
  const removeExpandImage = (indexToRemove) => {
    setExpandImages((prev) => {
      const newList = prev.filter((_, i) => i !== indexToRemove);
      // Revoke blob URL if it's a file
      if (prev[indexToRemove].type === "file") {
        URL.revokeObjectURL(prev[indexToRemove].preview);
      }
      return newList;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = new FormData();
      data.append("name", formData.name.trim());
      data.append("price", parseInt(formData.price, 10));
      data.append("url_redirect", formData.url_redirect.trim());

      if (formData.description) {
        data.append("description", formData.description.trim());
      }

      if (imageFile) {
        data.append("image", imageFile);
      }

      // Fetch existing expand images to Files and append all
      const existingUrls = expandImages
        .filter((item) => item.type === "url")
        .map((item) => item.value);
      const existingFiles = await Promise.all(
        existingUrls.map(async (url, index) => {
          const response = await fetch(url);
          if (!response.ok)
            throw new Error(`Cannot fetch existing image: ${url}`);
          const blob = await response.blob();
          const fileName = `existing-${index}.jpg`;
          return new File([blob], fileName, {
            type: blob.type || "image/jpeg",
          });
        }),
      );

      // Append all existing files
      existingFiles.forEach((file) => {
        data.append("expand_images", file);
      });

      // Append new files
      const newFiles = expandImages
        .filter((item) => item.type === "file")
        .map((item) => item.value);
      newFiles.forEach((file) => {
        data.append("expand_images", file);
      });

      await productService.updateProduct(product.id, data);
      if (onRefresh) onRefresh();
      onClose();
    } catch (err) {
      alert(
        "Lỗi: " +
          (err.response?.data?.detail?.[0]?.msg ||
            err.response?.data?.detail ||
            "Không thể cập nhật"),
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 font-sans">
      <div
        className="absolute inset-0 bg-slate-200/40 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      <div className="relative bg-white/95 backdrop-blur-xl rounded-[28px] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] w-full max-w-2xl max-h-[90vh] overflow-y-auto border border-white/50 animate-in fade-in zoom-in duration-300 scrollbar-hide">
        <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-xl px-6 py-5 flex justify-between items-center border-b border-slate-100/50">
          <div className="flex items-center gap-2">
            <span className="text-[15px] font-semibold text-slate-800">
              Edit Product
            </span>
            <span className="text-[13px] text-slate-400 font-medium">
              #{product.id}
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
          <div className="space-y-4">
            {/* Các field Name, Price, URL, Description giữ nguyên như cũ */}
            <div className="flex items-center gap-3 group">
              <span className="text-[14px] text-slate-400 min-w-[80px]">
                Name
              </span>
              <input
                name="name"
                value={formData.name}
                required
                onChange={handleChange}
                className="flex-1 bg-transparent text-[16px] font-semibold text-slate-800 outline-none"
              />
            </div>
            <div className="h-[1px] bg-slate-100 w-full" />
            <div className="flex items-center gap-3">
              <span className="text-[14px] text-slate-400 min-w-[80px]">
                Price
              </span>
              <input
                name="price"
                type="number"
                value={formData.price}
                required
                onChange={handleChange}
                className="w-full bg-[#F4F4F5]/50 px-4 py-2 rounded-xl outline-none"
              />
            </div>
            <div className="h-[1px] bg-slate-100 w-full" />
            <div className="flex items-center gap-3 group">
              <span className="text-[14px] text-slate-400 min-w-[80px]">
                URL
              </span>
              <input
                name="url_redirect"
                value={formData.url_redirect}
                required
                onChange={handleChange}
                className="flex-1 bg-[#F4F4F5]/50 px-4 py-2 rounded-xl outline-none"
              />
            </div>
            <div className="h-[1px] bg-slate-100 w-full" />
            <div className="flex items-start gap-3 group">
              <span className="text-[14px] text-slate-400 min-w-[80px] pt-2">
                Description
              </span>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={3}
                className="flex-1 bg-[#F4F4F5]/50 px-4 py-2 rounded-xl outline-none resize-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Main Image */}
            <div className="space-y-3">
              <label className="text-[12px] font-bold text-slate-400 uppercase tracking-widest px-1">
                Main Image
              </label>
              <div className="flex w-full items-center justify-center p-4 bg-white rounded-2xl border border-slate-200/60 shadow-sm h-full min-h-[200px]">
                <div className="flex flex-col items-center gap-3">
                  <label className="relative group cursor-pointer">
                    <div className="w-32 h-32 bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                      {preview ? (
                        <img
                          src={preview}
                          alt="Preview"
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-slate-100">
                          No Image
                        </div>
                      )}
                    </div>
                    <input
                      type="file"
                      className="hidden"
                      accept="image/*"
                      onChange={handleMainFileChange}
                    />
                  </label>
                </div>
              </div>
            </div>

            {/* Expand Images */}
            <div className="space-y-3">
              <label className="text-[12px] font-bold text-slate-400 uppercase tracking-widest px-1">
                Expand Images
              </label>
              <div className="p-4 bg-white rounded-2xl border border-slate-200/60 shadow-sm h-full min-h-[200px] flex flex-col gap-3">
                <div className="flex flex-wrap gap-3">
                  {/* Hiển thị tất cả ảnh */}
                  {expandImages.map((item, idx) => (
                    <div
                      key={idx}
                      className="relative w-16 h-16 rounded-xl overflow-hidden border border-slate-200 group"
                    >
                      <img
                        src={item.preview}
                        alt={`Image ${idx}`}
                        className="w-full h-full object-cover"
                      />
                      <button
                        type="button"
                        onClick={() => removeExpandImage(idx)}
                        className="absolute inset-0 bg-red-500/20 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity"
                      >
                        <Trash2
                          size={16}
                          className="text-red-600 drop-shadow-md"
                        />
                      </button>
                      <div
                        className={`absolute top-0 right-0 text-white text-[8px] px-1 rounded-bl-md ${item.type === "url" ? "bg-gray-600" : "bg-blue-500"}`}
                      >
                        {item.type === "url" ? "Cũ" : "Mới"}
                      </div>
                    </div>
                  ))}

                  {/* Nút upload file mới */}
                  <label className="w-16 h-16 rounded-xl border-2 border-dashed border-slate-300 flex items-center justify-center text-slate-400 hover:text-slate-600 hover:border-slate-400 hover:bg-slate-50 transition-colors cursor-pointer">
                    <Plus size={20} />
                    <input
                      type="file"
                      multiple
                      className="hidden"
                      accept="image/*"
                      onChange={handleExpandFileChange}
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between pt-6 border-t border-slate-100/50">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 text-[14px] font-semibold text-slate-600 hover:bg-slate-100 rounded-full transition-all"
            >
              Hủy
            </button>
            <button
              type="submit"
              disabled={loading}
              className="flex items-center gap-3 px-8 py-2.5 bg-black text-white rounded-full text-[14px] font-bold hover:bg-zinc-800 disabled:opacity-50"
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
        </form>
      </div>
    </div>
  );
};

export default EditProductModal;
