import apiClient from "./apiClient";

const productService = {
  // Tạo sản phẩm mới
  createProduct: async (formData) => {
    return apiClient("/products", {
      method: "POST",
      body: formData,
      // LƯU Ý: KHÔNG ĐƯỢC set Content-Type ở đây.
      // Khi body là FormData, trình duyệt sẽ tự sinh Content-Type kèm boundary.
    });
  },

  // Lấy danh sách sản phẩm
  getAllProducts: async (params) => {
    // params bao gồm page, limit, search...
    const queryString = new URLSearchParams(params).toString();
    return apiClient(`/products?${queryString}`, { method: "GET" });
  },
  updateProduct: async (id, formData) => {
    return apiClient(`/products/${id}`, {
      method: "PUT",
      body: formData,
    });
  },

  // (Optional) Xóa sản phẩm
  deleteProduct: async (id) => {
    return apiClient(`/products/${id}`, {
      method: "DELETE",
    });
  },
  detailProduct: async (id) => {
    return apiClient(`/detail/${id}`, {
      method: "GET",
    });
  },
};

export default productService;
