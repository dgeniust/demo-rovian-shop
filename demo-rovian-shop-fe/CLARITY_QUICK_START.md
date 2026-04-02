# ⚡ Quick Start - Microsoft Clarity Tracking

## 🎯 Mục tiêu

Bạn đã cài đặt và tích hợp Microsoft Clarity để theo dõi hành vi mua sắm của người dùng.

---

## 🚀 3 Bước để bắt đầu

### **Bước 1: Lấy Project ID** (2 phút)

1. Truy cập: https://clarity.microsoft.com
2. Đăng nhập với tài khoản Microsoft
3. Click "New Project"
4. Nhập tên project: `Demo Rovian Shop`
5. Chọn website URL: `https://your-domain.com`
6. Copy **Project ID** (dạng: `abc123def456`)

### **Bước 2: Cấu hình Environment** (30 giây)

Tạo/edit file `.env.local` trong thư mục root:

```env
VITE_CLARITY_PROJECT_ID=abc123def456
```

✅ Thay `abc123def456` bằng Project ID của bạn

### **Bước 3: Kiểm tra hoạt động** (1 phút)

```bash
npm run dev
```

Xem Console (F12 > Console tab):

```
✓ Clarity initialized with project ID: abc123def456
```

---

## 📊 Khi nào để xem dữ liệu?

### **Real-time Tracking**

```
1. Mở trang sản phẩm
   → Console sẽ hiện: 📊 Product View Tracked

2. Click "Mua ngay"
   → Console sẽ hiện: 🛒 Checkout Initiated Tracked

3. Tìm kiếm sản phẩm
   → Console sẽ hiện: 🔍 Search Tracked
```

### **Xem trên Dashboard** (sau 15-30 phút)

1. Truy cập: https://clarity.microsoft.com
2. Vào project **Demo Rovian Shop**
3. Tab **Dashboard** sẽ hiện:
   - Sessions
   - Events
   - Heatmaps
   - Recordings (video user)

---

## 📈 5 Metrics quan trọng bạn sẽ thấy

| Metric                 | Ý Nghĩa                          | Ví dụ              |
| ---------------------- | -------------------------------- | ------------------ |
| **Product Views**      | Số lần xem chi tiết sản phẩm     | 245 views          |
| **Checkout Initiated** | Bao nhiêu người click "Mua ngay" | 18 clicks          |
| **Search Queries**     | Những gì user tìm kiếm           | "mechanical watch" |
| **Session Duration**   | Bao lâu user ở lại               | 4m 30s             |
| **Session Recordings** | Video hành động user             | Xem video          |

---

## 🎬 Xem Video User Hành Động

Clarity giúp bạn xem **video lại hành động người dùng** trên website:

1. Vào **https://clarity.microsoft.com**
2. Chọn project
3. Tab **Recordings**
4. Click vào session để xem video

💡 **Lợi ích**:

- Thấy user click ở đâu
- Xem user scroll như nào
- Hiểu tại sao user không mua

---

## 🔥 Events được tracking tự động

### ✅ Đã setup

- 📊 **Product View** - Khi xem chi tiết sản phẩm
- 🛒 **Checkout Initiated** - Khi click "Mua ngay"
- 🔍 **Search** - Khi tìm kiếm sản phẩm

### 🔄 Có thể thêm sau

- 🛍️ Add to Cart
- 🗑️ Remove from Cart
- ✅ Purchase Complete
- 👤 User Login/Signup

---

## 💡 Ví dụ dữ liệu bạn sẽ nhận được

### **Product Performance Report**

```
Mechanical Watch - Model X500
├── Total Views: 156
├── Checkout Initiated: 12
├── Conversion Rate: 7.7%
├── Avg View Time: 2m 45s
└── Top Location: Ho Chi Minh City

Glass Vase - Limited Edition
├── Total Views: 89
├── Checkout Initiated: 4
├── Conversion Rate: 4.5%
├── Avg View Time: 1m 20s
└── Top Location: Hanoi
```

### **User Search Behavior**

```
Top Searches This Week:
1. "mechanical" → 45 searches → 23 products viewed
2. "vintage" → 32 searches → 18 products viewed
3. "limited edition" → 21 searches → 14 products viewed

Failed Searches (No Results):
- "robot" (0 results)
- "electronic" (0 results)
```

### **Traffic Overview**

```
Total Sessions: 1,245
└── Desktop: 680 (54%)
└── Mobile: 565 (46%)

Top Browsers:
├── Chrome: 845 (68%)
├── Safari: 265 (21%)
└── Firefox: 135 (11%)

Top Locations:
├── Vietnam: 892 (72%)
├── Thailand: 212 (17%)
└── Others: 141 (11%)
```

---

## ❓ Troubleshooting

### **Không thấy tracking trong Console?**

```javascript
// Kiểm tra trong Console:
1. Mở DevTools (F12)
2. Vào tab Console
3. Refresh trang (F5)
4. Làm action (xem sản phẩm, tìm kiếm, etc.)
5. Xem console log có hiện không
```

### **Không thấy dữ liệu trên Dashboard?**

- ⏱️ Dashboard cập nhật **mỗi 15-30 phút**
- 🔄 Thử refresh page sau vài phút
- ✅ Đảm bảo có `VITE_CLARITY_PROJECT_ID` trong `.env.local`

### **Project ID không đúng?**

```env
# ❌ Sai
VITE_CLARITY_PROJECT_ID=

# ✅ Đúng
VITE_CLARITY_PROJECT_ID=your_actual_project_id_here
```

---

## 🎓 Học thêm

### **Cơ bản**

- 📚 [Clarity Setup Guide](./CLARITY_GUIDE.md)
- 📊 [Setup Summary](./CLARITY_SETUP_SUMMARY.md)

### **Advanced**

- 🔗 [Microsoft Clarity Docs](https://clarity.microsoft.com)
- 📖 [Clarity API Reference](https://docs.microsoft.com/clarity)

---

## ✨ Tiếp theo

- [ ] Lấy Project ID từ clarity.microsoft.com
- [ ] Thêm vào `.env.local`
- [ ] Run `npm run dev`
- [ ] Xem console logs
- [ ] Xem sản phẩm để test
- [ ] Chờ 15-30 phút
- [ ] Xem dữ liệu trên Dashboard

---

## 🎉 Bạn đã sẵn sàng!

**Clarity service** đang chạy trong project của bạn. Chỉ cần:

1. ✅ Cấu hình Project ID
2. ✅ Chạy `npm run dev`
3. ✅ Xem dữ liệu trên Dashboard

🚀 **Bắt đầu ngay!**
