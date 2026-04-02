import { clarity } from "@microsoft/clarity"; // Thay đổi cách import này
/**
 * Clarity Service - Quản lý tracking thông số mua sản phẩm
 * Theo dõi: Product views, purchases, cart interactions
 */

const clarityService = {
  /**
   * Hàm khởi tạo Clarity
   * @param {string} projectId - Project ID từ environment variable
   */
  initialize: (projectId) => {
    if (projectId) {
      clarity.init(projectId);
      console.log("✓ Clarity initialized with project ID:", projectId);
    } else {
      console.warn("⚠ Clarity Project ID not found in environment variables");
    }
  },

  /**
   * Track sự kiện xem chi tiết sản phẩm
   * @param {Object} product - Thông tin sản phẩm
   */
  trackProductView: (product) => {
    if (!product) return;

    clarity.event("product_view", {
      product_id: product.id || product.sku || "unknown",
      product_name: product.name || "Unknown Product",
      product_price: String(product.price || 0),
      currency: "VND",
    });

    // Log lại cho debugging
    console.log("📊 Product View Tracked:", {
      name: product.name,
      price: product.price,
    });
  },

  /**
   * Track sự kiện khởi tạo mua hàng/checkout
   * @param {Object} product - Thông tin sản phẩm
   */
  trackCheckoutInitiated: (product) => {
    if (!product) return;

    clarity.event("checkout_initiated", {
      product_id: product.id || product.sku || "unknown",
      product_name: product.name || "Unknown Product",
      product_price: String(product.price || 0),
      currency: "VND",
      timestamp: new Date().toISOString(),
    });

    console.log("🛒 Checkout Initiated Tracked:", product.name);
  },

  /**
   * Track sự kiện hoàn thành mua hàng
   * @param {Object} product - Thông tin sản phẩm
   * @param {string} transactionId - ID giao dịch (nếu có)
   */
  trackPurchase: (product, transactionId = null) => {
    if (!product) return;

    const eventData = {
      product_id: product.id || product.sku || "unknown",
      product_name: product.name || "Unknown Product",
      product_price: String(product.price || 0),
      currency: "VND",
      timestamp: new Date().toISOString(),
    };

    if (transactionId) {
      eventData.transaction_id = transactionId;
    }

    clarity.event("purchase", eventData);

    console.log("✅ Purchase Tracked:", {
      product: product.name,
      price: product.price,
      transactionId: transactionId,
    });
  },

  /**
   * Track sự kiện thêm vào giỏ hàng
   * @param {Object} product - Thông tin sản phẩm
   * @param {number} quantity - Số lượng
   */
  //   trackAddToCart: (product, quantity = 1) => {
  //     if (!product) return;

  //     Clarity.event("add_to_cart", {
  //       product_id: product.id || product.sku || "unknown",
  //       product_name: product.name || "Unknown Product",
  //       product_price: String(product.price || 0),
  //       quantity: String(quantity),
  //       currency: "VND",
  //     });

  //     console.log("🛍️ Add to Cart Tracked:", {
  //       product: product.name,
  //       quantity: quantity,
  //     });
  //   },

  /**
   * Track sự kiện xóa khỏi giỏ hàng
   * @param {Object} product - Thông tin sản phẩm
   * @param {number} quantity - Số lượng
   */
  //   trackRemoveFromCart: (product, quantity = 1) => {
  //     if (!product) return;

  //     Clarity.event("remove_from_cart", {
  //       product_id: product.id || product.sku || "unknown",
  //       product_name: product.name || "Unknown Product",
  //       product_price: String(product.price || 0),
  //       quantity: String(quantity),
  //       currency: "VND",
  //     });

  //     console.log("🗑️ Remove from Cart Tracked:", product.name);
  //   },

  /**
   * Track sự kiện tìm kiếm sản phẩm
   * @param {string} searchQuery - Từ khóa tìm kiếm
   * @param {number} resultsCount - Số lượng kết quả
   */
  trackSearch: (searchQuery, resultsCount = 0) => {
    if (!searchQuery) return;

    clarity.event("search", {
      search_query: searchQuery,
      results_count: String(resultsCount),
      timestamp: new Date().toISOString(),
    });

    console.log("🔍 Search Tracked:", {
      query: searchQuery,
      results: resultsCount,
    });
  },

  /**
   * Track sự kiện custom với dữ liệu tùy ý
   * @param {string} eventName - Tên sự kiện
   * @param {Object} eventData - Dữ liệu sự kiện
   */
  trackCustomEvent: (eventName, eventData = {}) => {
    if (!eventName) return;

    clarity.event(eventName, {
      ...eventData,
      timestamp: new Date().toISOString(),
    });

    console.log(`📌 Custom Event Tracked: ${eventName}`, eventData);
  },

  /**
   * Set custom session data
   * @param {string} userId - ID người dùng
   * @param {Object} customData - Dữ liệu custom
   */
  setSessionData: (userId = null, customData = {}) => {
    if (userId) {
      clarity.setSessionProperty("user_id", userId);
    }

    Object.entries(customData).forEach(([key, value]) => {
      clarity.setSessionProperty(key, String(value));
    });

    console.log("👤 Session Data Set:", { userId, ...customData });
  },

  /**
   * Tag một element để tracking
   * @param {HTMLElement} element - Element DOM
   * @param {string} tagName - Tên tag
   */
  tagElement: (element, tagName) => {
    if (!element) return;

    clarity.tag(element, tagName);
    console.log("🏷️ Element Tagged:", { tag: tagName });
  },
};

export default clarityService;
