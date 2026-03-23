import React, { useState } from "react";
import { X, Upload, Loader2 } from "lucide-react";
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

  if (!isOpen) return null;

  const handleChange = (e) => {
    // Đảm bảo name của input khớp với key trong formData
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

    // Kiểm tra dữ liệu
    if (!imageFile) {
      alert("Vui lòng chọn ảnh sản phẩm!");
      return;
    }

    setLoading(true);

    try {
      const data = new FormData();
      // Đảm bảo các key này khớp chính xác với yêu cầu của Backend (FastAPI/Django/Node)
      data.append("name", formData.name.trim());

      // Chuyển đổi sang số nguyên trước khi append
      const priceValue = parseInt(formData.price, 10);
      data.append("price", priceValue);

      data.append("url_redirect", formData.url_redirect.trim());

      // Gửi file thực tế
      data.append("image", imageFile);

      // Log để kiểm tra (Xóa khi chạy thật)
      console.log("Dữ liệu gửi đi:");
      for (let pair of data.entries()) {
        console.log(pair[0] + ": ", pair[1]);
      }

      await productService.createProduct(data);
      alert("Thêm sản phẩm thành công!");

      // Reset form sau khi thành công
      setFormData({ name: "", price: "", url_redirect: "" });
      setImageFile(null);
      setPreview(null);

      // onRefresh();
      onClose();
    } catch (err) {
      // Sửa cách log lỗi để tránh [object Object]
      console.error("API Error Detail:", JSON.stringify(err));
      alert(
        "Lỗi: " +
          (err.response?.data?.detail?.[0]?.msg || "Không thể thêm sản phẩm"),
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-200">
        <div className="flex justify-between items-center p-6 border-b">
          <h3 className="text-xl font-bold text-gray-900">Add New Product</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Product Name
            </label>
            <input
              name="name"
              value={formData.name} // Thêm value để kiểm soát input
              required
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
              placeholder="e.g. Macbook Pro M2"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Price ($)
              </label>
              <input
                name="price"
                type="number"
                value={formData.price}
                required
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
                placeholder="0"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Redirect URL
              </label>
              <input
                name="url_redirect"
                value={formData.url_redirect}
                required
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
                placeholder="https://..."
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Product Image
            </label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-orange-500 transition-colors relative">
              {preview ? (
                <div className="relative w-full">
                  <img
                    src={preview}
                    alt="Preview"
                    className="h-32 w-full object-contain"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      setPreview(null);
                      setImageFile(null);
                    }}
                    className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1"
                  >
                    <X size={12} />
                  </button>
                </div>
              ) : (
                <div className="space-y-1 text-center">
                  <Upload className="mx-auto h-12 w-12 text-gray-400" />
                  <div className="flex text-sm text-gray-600">
                    <label className="relative cursor-pointer font-medium text-orange-600 hover:text-orange-500">
                      <span>Upload a file</span>
                      <input
                        type="file"
                        className="sr-only"
                        accept="image/*"
                        onChange={handleFileChange}
                      />
                    </label>
                  </div>
                  <p className="text-xs text-gray-500">PNG, JPG up to 10MB</p>
                </div>
              )}
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#f26522] hover:bg-orange-600 text-white font-bold py-3 rounded-lg transition-all flex items-center justify-center gap-2"
          >
            {loading ? <Loader2 className="animate-spin" /> : "Create Product"}
          </button>
        </form>
      </div>
    </div>
  );
};
export default AddProductModal;
