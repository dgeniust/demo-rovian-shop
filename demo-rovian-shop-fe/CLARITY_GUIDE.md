# 📊 Microsoft Clarity - Tracking Guide

## 🎯 Giới thiệu

Bạn đã tích hợp thành công **Microsoft Clarity** vào dự án. Đây là công cụ phân tích hành vi người dùng mạnh mẽ của Microsoft, giúp bạn:

- ✅ Theo dõi xem chi tiết sản phẩm
- ✅ Xem khi người dùng khởi tạo mua hàng
- ✅ Phân tích hành vi người dùng trên trang
- ✅ Xem các session recordings
- ✅ Theo dõi heatmaps

---

## 🚀 Cách sử dụng

### 1. **Cấu hình Environment Variable**

Thêm vào file `.env` hoặc `.env.local`:

```env
VITE_CLARITY_PROJECT_ID=your_project_id_here
```

Lấy Project ID từ: https://clarity.microsoft.com

### 2. **Các sự kiện được tracking tự động**

Hiện tại, code đã tracking:

#### **Product View** 🔍

- **Khi nào**: Người dùng xem chi tiết sản phẩm
- **Dữ liệu**: Product ID, tên, giá, danh mục
- **File**: `src/pages/ProductDetail/ProductDetail.jsx`

```javascript
trackProductView({
  id: selectedProduct.id,
  sku: selectedProduct.id,
  name: selectedProduct.name,
  price: selectedProduct.price,
  category: selectedProduct.category,
});
```

#### **Checkout Initiated** 🛒

- **Khi nào**: Người dùng click nút "Mua ngay"
- **Dữ liệu**: Product ID, tên, giá, danh mục
- **File**: `src/pages/ProductDetail/ProductDetail.jsx`

```javascript
trackCheckoutInitiated({
  id: selectedProduct.id,
  sku: selectedProduct.id,
  name: product.name,
  price: product.price,
  category: product.category,
});
```

---

## 💡 Thêm Tracking vào các tính năng khác

### **Ví dụ 1: Tracking Search**

Thêm vào `ShoppingPage.jsx`:

```javascript
import clarityService from "../../services/clarityService";

const handleSearch = (query, results) => {
  clarityService.trackSearch(query, results.length);
};
```

### **Ví dụ 2: Tracking Add to Cart**

Thêm vào component giỏ hàng của bạn:

```javascript
const handleAddToCart = (product, quantity) => {
  clarityService.trackAddToCart(product, quantity);
  // ... logic thêm vào giỏ
};
```

### **Ví dụ 3: Tracking Remove from Cart**

```javascript
const handleRemoveFromCart = (product) => {
  clarityService.trackRemoveFromCart(product);
  // ... logic xóa khỏi giỏ
};
```

### **Ví dụ 4: Custom Event**

```javascript
clarityService.trackCustomEvent("custom_action", {
  action_name: "downloaded_catalog",
  file_type: "pdf",
});
```

---

## 🔧 API Reference - Clarity Service

### **Initialization**

```javascript
clarityService.initialize(projectId);
```

### **Product Tracking**

```javascript
// Xem chi tiết sản phẩm
clarityService.trackProductView(product);

// Khởi tạo checkout
clarityService.trackCheckoutInitiated(product);

// Hoàn thành purchase
clarityService.trackPurchase(product, transactionId);

// Thêm vào giỏ
clarityService.trackAddToCart(product, quantity);

// Xóa khỏi giỏ
clarityService.trackRemoveFromCart(product, quantity);
```

### **Search & Custom Events**

```javascript
// Tracking tìm kiếm
clarityService.trackSearch(query, resultsCount);

// Custom event
clarityService.trackCustomEvent(eventName, eventData);
```

### **Session Data**

```javascript
// Set user data
clarityService.setSessionData(userId, {
  user_type: "premium",
  signup_date: "2024-01-01",
});
```

### **Element Tagging**

```javascript
// Tag element để tracking
const button = document.getElementById("buy-btn");
clarityService.tagElement(button, "purchase_button");
```

---

## 📈 Metrics bạn có thể xem trên Clarity Dashboard

### **Session Insights**

- Tổng số sessions
- Duration trung bình
- Browser/Device info
- Geographic data

### **Event Analytics**

- Product views
- Checkout initiations
- Search queries
- Custom events

### **User Behavior**

- Session recordings (có thể xem video hành động user)
- Heatmaps
- Click tracking
- Scroll tracking

### **Funnel Analysis**

- View → Checkout → Purchase funnel
- Drop-off points

---

## 🎬 Xem dữ liệu trên Dashboard

1. Truy cập: https://clarity.microsoft.com
2. Chọn project của bạn
3. Xem các tab:
   - **Metrics**: Overview
   - **Sessions**: Xem từng user session
   - **Heatmaps**: Heatmap of clicks
   - **Recordings**: Video playback
   - **Funnels**: Funnel analysis
   - **Events**: Custom events

---

## 🔐 Privacy & GDPR

- Clarity tự động tuân thủ GDPR
- Không theo dõi thông tin cá nhân nhạy cảm
- Data được mã hóa
- Có thể opt-out user theo dõi

---

## 📝 Logging

Tất cả các tracking đều có console logs:

```javascript
// Console sẽ hiện:
// 📊 Product View Tracked: { name: "...", price: ..., category: "..." }
// 🛒 Checkout Initiated Tracked: "..."
// 🔍 Search Tracked: { query: "...", results: ... }
```

---

## 🐛 Debugging

Kiểm tra trong DevTools Console:

```javascript
// Xem được init hay chưa
window.clarity;

// Kiểm tra project ID
console.log(import.meta.env.VITE_CLARITY_PROJECT_ID);
```

---

## 📱 Best Practices

1. **Track meaningful events** - Chỉ track những action quan trọng
2. **Use consistent naming** - Sử dụng tên sự kiện consistent
3. **Add context data** - Thêm dữ liệu ngữ cảnh cho mỗi event
4. **Monitor performance** - Clarity có overhead nhỏ nhưng hãy monitor
5. **Test in staging** - Test Clarity trước khi production

---

## 🚀 Next Steps

1. ✅ Thêm project ID vào `.env`
2. ✅ Test tracking với việc xem sản phẩm
3. ✅ Xem dữ liệu trên Clarity Dashboard
4. ✅ Thêm tracking cho tính năng khác (cart, search, etc.)
5. ✅ Thiết lập funnels để phân tích conversion

---

## 📚 Tài liệu tham khảo

- [Microsoft Clarity Docs](https://clarity.microsoft.com)
- [Clarity API Reference](https://docs.microsoft.com/en-us/clarity/setup-and-installation)
- [Event Tracking Guide](https://docs.microsoft.com/en-us/clarity/event-tracking)

---

## ❓ Câu hỏi thường gặp

**Q: Tôi phải làm gì nếu tracking không hoạt động?**
A: Kiểm tra Console trong DevTools, đảm bảo VITE_CLARITY_PROJECT_ID có giá trị đúng

**Q: Dữ liệu được lưu ở đâu?**
A: Tất cả dữ liệu được gửi lên server Microsoft Clarity

**Q: Có chi phí thêm không?**
A: Clarity có free tier, kiểm tra giá trên clarity.microsoft.com

**Q: Tôi có thể exclude user nào đó không?**
A: Có, dùng `Clarity.setSessionProperty("user_type", "staff")` để mark user

---

Chúc bạn sử dụng Clarity hiệu quả! 🎉
