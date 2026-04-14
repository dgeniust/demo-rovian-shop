export const config = {
  // Bộ lọc: Chỉ áp dụng middleware cho các đường dẫn trang (bỏ qua ảnh, css, js...)
  matcher: "/((?!.*\\.|api\\/).*)",
};

export default async function middleware(request) {
  const url = request.url;
  const userAgent = request.headers.get("user-agent")?.toLowerCase() || "";

  // 1. Nếu chính Prerender đang đọc trang thì bỏ qua để tránh vòng lặp vô hạn
  if (userAgent.includes("prerender")) {
    return;
  }

  // 2. Danh sách nhận diện các Bot phổ biến (Zalo, Facebook, Google, Telegram...)
  const isBot =
    /bot|facebook|whatsapp|telegram|zalo|viber|twitter|slack|linkedin|skype/i.test(
      userAgent,
    );
  console.log(`[Middleware Check] User-Agent: ${userAgent} | Is Bot? ${isBot}`);
  // 3. Nếu là Bot, chuyển hướng nó sang Prerender.io
  if (isBot) {
    // Thay 'YOUR_PRERENDER_TOKEN_HERE' bằng token bạn lấy ở Bước 1
    const PRERENDER_TOKEN = "TZx4ld4DmvKiVBvVzdew";
    const prerenderUrl = `https://service.prerender.io/${url}`;

    try {
      const response = await fetch(prerenderUrl, {
        headers: {
          "X-Prerender-Token": PRERENDER_TOKEN,
        },
      });

      // Trả file HTML hoàn chỉnh (có chứa React Helmet) về cho Bot
      return new Response(response.body, {
        status: response.status,
        headers: {
          "Content-Type": "text/html; charset=utf-8",
        },
      });
    } catch (error) {
      console.error("Lỗi khi gọi Prerender:", error);
      // Nếu Prerender lỗi, cứ để nó chạy SPA bình thường
      return;
    }
  }

  // Nếu là khách hàng (người thật) truy cập, Middleware không làm gì cả -> web vẫn load cực nhanh
}
