const API_URL = import.meta.env.VITE_API_BASE_URL;

const apiClient = async (endpoint, options = {}) => {
  const token = localStorage.getItem("access_token");

  // Cấu hình Header mặc định
  const headers = {
    ...options.headers,
  };

  // Nếu có token thì tự động đính kèm
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  // Tự động set Content-Type là JSON nếu body là Object (trừ khi gửi FormData)
  if (options.body && !(options.body instanceof FormData)) {
    headers["Content-Type"] = "application/json";
    options.body = JSON.stringify(options.body);
  }

  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers,
  });

  const data = await response.json();

  if (!response.ok) {
    // Xử lý lỗi 401 (Hết hạn token) nếu cần
    if (response.status === 401) {
      // logic logout hoặc refresh token
    }
    throw data || new Error("API Error");
  }

  return data;
};

export default apiClient;
