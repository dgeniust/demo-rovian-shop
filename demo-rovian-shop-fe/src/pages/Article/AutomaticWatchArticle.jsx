import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const AutomaticWatchArticle = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "Máy Cơ Automatic Là Gì? Nguyên Lý, Cấu Tạo & Lưu Ý Sử Dụng",
        description:
          "Máy cơ Automatic là gì? Giải thích nguyên lý rotor, cách hoạt động, ưu nhược điểm và lưu ý sử dụng đúng cách cho người mới.",
        author: {
          "@type": "Person",
          name: "Chuyên gia Horology",
        },
        publisher: {
          "@type": "Organization",
          name: "ROVIAN",
          logo: {
            "@type": "ImageObject",
            url: "https://www.rovianwatch.com/assets/logo.png",
          },
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": "https://www.rovianwatch.com/kien-thuc/may-co-automatic-la-gi",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Máy cơ Automatic có cần thay pin không?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Không. Đây chính là ưu điểm cốt lõi của đồng hồ cơ Automatic — bộ máy hoàn toàn không sử dụng pin hay bất kỳ linh kiện điện tử nào. Năng lượng được tạo ra từ chuyển động cổ tay thông qua rotor, tích trữ trong dây cót và giải phóng dần để đồng hồ hoạt động.",
            },
          },
          {
            "@type": "Question",
            name: "Đồng hồ cơ Automatic có chạy chính xác không?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Chính xác, nhưng không bằng Quartz. Máy cơ Automatic phổ thông có sai số từ ±20 đến ±45 giây/ngày. Các máy cao cấp đạt chuẩn Chronometer (như Rolex, Omega) có thể giảm xuống ±2–5 giây/ngày.",
            },
          },
          {
            "@type": "Question",
            name: "Nên đeo đồng hồ cơ Automatic bao nhiêu tiếng mỗi ngày?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Tối thiểu 8 tiếng/ngày để rotor tạo đủ năng lượng duy trì hoạt động. Hầu hết đồng hồ Automatic có trữ cót từ 40–48 giờ, giúp đồng hồ vẫn chạy qua đêm khi bạn không đeo.",
            },
          },
          {
            "@type": "Question",
            name: "Đồng hồ cơ Automatic bao lâu cần bảo dưỡng một lần?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Khuyến nghị 3–5 năm/lần để vệ sinh, tra dầu mới và hiệu chỉnh độ chính xác, giúp kéo dài tuổi thọ bộ máy.",
            },
          },
          {
            "@type": "Question",
            name: "Hacking Stop là gì?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Hacking Stop là tính năng dừng kim giây khi kéo núm chỉnh giờ, giúp bạn đồng bộ thời gian chính xác đến từng giây.",
            },
          },
        ],
      },
    ],
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      window.prerenderReady = true;
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Helmet>
        <title>Máy Cơ Automatic Là Gì? Nguyên Lý & Lưu Ý | ROVIAN</title>
        <meta
          name="description"
          content="Máy cơ Automatic là gì? Giải thích nguyên lý rotor, cách hoạt động, ưu nhược điểm và lưu ý sử dụng đúng cách cho người mới."
        />
      </Helmet>

      <main className="w-full mx-auto px-32 py-24 bg-white mt-10 text-left font-serif">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />

        <article>
          {/* --- HEADER --- */}
          <header className="mb-24 border-b border-gray-100 pb-16">
            <span className="text-lg font-bold tracking-[0.3em] text-gray-400 uppercase mb-4 block font-sans">
              Di sản & Kỹ thuật Horology
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-[1.15] mb-12">
              Máy Cơ Automatic Là Gì? <br />
              <span className="text-gray-400 italic text-4xl md:text-5xl">
                Giải thích từ A–Z cho người mới.
              </span>
            </h1>
            <div className="flex items-center text-sm text-gray-400 tracking-widest uppercase font-sans">
              <span className="text-gray-900 font-semibold">
                Tòa soạn ROVIAN
              </span>
              <span className="mx-4 text-gray-200">|</span>
              <time dateTime="2026-04-14">Kiến thức chuyên sâu</time>
            </div>
          </header>

          {/* --- INTRO & SNIPPET --- */}
          <section className="mb-20">
            <p className="text-2xl md:text-3xl leading-[1.8] mb-10 first-letter:text-8xl first-letter:font-bold first-letter:text-gray-900 first-letter:mr-4 first-letter:float-left first-letter:leading-none text-gray-800">
              Máy cơ Automatic (hay đồng hồ cơ tự động) là loại bộ máy đồng hồ
              hoạt động hoàn toàn bằng năng lượng cơ học, không dùng pin và
              không cần lên dây cót thủ công. Thay vào đó, một bộ phận kim loại
              hình bán nguyệt gọi là rotor tự xoay 360° theo chuyển động cổ tay
              người đeo để nạp năng lượng liên tục cho đồng hồ.
            </p>
            <div className="bg-stone-50 p-10 my-16 border-l-8 border-gray-900">
              <p className="text-xl font-sans tracking-wide text-gray-500 uppercase mb-4 font-bold">
                💡 Featured Snippet
              </p>
              <p className="text-2xl leading-relaxed italic text-gray-800">
                Máy cơ Automatic = bộ máy cơ khí + rotor tự lên dây cót qua
                chuyển động cổ tay + không cần pin.
              </p>
            </div>
          </section>

          {/* --- DEFINITION & QUARTZ --- */}
          <section className="mb-24 space-y-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight border-b border-gray-100 pb-4">
              Định Nghĩa Chính Xác
            </h2>
            <div className="text-xl md:text-2xl leading-[1.8] text-gray-700 space-y-6">
              <p>
                Trong ngành đồng hồ học, từ "Automatic" có nghĩa đen là "tự
                động" — ám chỉ cơ chế tự động lên dây cót mà không cần người
                dùng thực hiện thủ công. Điều này phân biệt nó với đồng hồ cơ
                thủ công (Manual Winding), loại đồng hồ vẫn cần người dùng xoay
                núm vặn hàng ngày.
              </p>
              <p>
                Bộ máy cơ Automatic thường gồm 100–300 linh kiện cơ khí, tất cả
                lắp ráp chính xác đến từng phần trăm milimet. Không có chip điện
                tử, không có pin — đây là biểu tượng của nghệ thuật chế tác
                thuần túy.
              </p>
              <div className="py-8 space-y-4">
                <h3 className="text-lg font-bold text-gray-900 uppercase font-sans tracking-widest">
                  Automatic khác Quartz như thế nào?
                </h3>
                <p>
                  Điểm khác biệt căn bản: đồng hồ Quartz dùng pin và chip điện
                  tử để dao động tinh thể thạch anh (sai số ±15 giây/tháng).
                  Đồng hồ Automatic dùng năng lượng cơ học từ dây cót (sai số
                  ±20–45 giây/ngày). Đây là sự đánh đổi vì giá trị kỹ thuật vượt
                  trội.
                </p>
              </div>
            </div>
          </section>

          {/* --- HISTORY --- */}
          <section className="mb-24 p-12 bg-stone-50">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Lịch Sử Phát Minh
            </h2>
            <div className="text-xl md:text-2xl leading-[1.8] text-gray-700 space-y-6 font-sans">
              <p>
                • <strong>1770:</strong> Abraham-Louis Perrelet phát minh cơ chế
                rotor tự động đầu tiên cho đồng hồ bỏ túi.
              </p>
              <p>
                • <strong>1922:</strong> John Harwood phát triển và cấp bằng
                sáng chế hệ thống cho đồng hồ đeo tay.
              </p>
              <p>
                • <strong>1931:</strong> Rolex ra mắt rotor xoay 360° trên mẫu
                Oyster Perpetual — nền tảng cho máy Automatic hiện đại.
              </p>
              <p>
                • <strong>1948:</strong> Eterna bổ sung ổ bi vào rotor, giúp máy
                chạy êm và bền hơn.
              </p>
            </div>
          </section>

          {/* --- MECHANISM (THE DARK BOX) --- */}
          <section className="mb-24 bg-gray-900 text-white p-12 md:p-20 rounded-sm">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 border-b border-gray-700 pb-6 uppercase tracking-widest text-center">
              Cơ Chế Hoạt Động 4 Bước
            </h2>
            <div className="grid grid-cols-1 gap-12 text-xl md:text-2xl">
              <div className="flex gap-8">
                <span className="text-gray-500 font-bold text-5xl font-sans">
                  01
                </span>
                <div>
                  <h4 className="font-bold text-white mb-2">
                    Nạp năng lượng qua Rotor
                  </h4>
                  <p className="text-gray-400">
                    Rotor hình bán nguyệt xoay theo quán tính cổ tay, truyền lực
                    qua hệ thống bánh răng xuống dây cót.
                  </p>
                </div>
              </div>
              <div className="flex gap-8">
                <span className="text-gray-500 font-bold text-5xl font-sans">
                  02
                </span>
                <div>
                  <h4 className="font-bold text-white mb-2">
                    Tích trữ tại Dây Cót
                  </h4>
                  <p className="text-gray-400">
                    Dây cót (mainspring) bị cuộn chặt trong hộp cót, trữ năng
                    lượng từ 40 đến 80 giờ.
                  </p>
                </div>
              </div>
              <div className="flex gap-8">
                <span className="text-gray-500 font-bold text-5xl font-sans">
                  03
                </span>
                <div>
                  <h4 className="font-bold text-white mb-2">
                    Kiểm soát qua Bộ Thoát
                  </h4>
                  <p className="text-gray-400">
                    Bộ thoát (escapement) hoạt động như một "van" điều tiết năng
                    lượng ra theo từng nhịp "tích tắc" đều đặn.
                  </p>
                </div>
              </div>
              <div className="flex gap-8">
                <span className="text-gray-500 font-bold text-5xl font-sans">
                  04
                </span>
                <div>
                  <h4 className="font-bold text-white mb-2">
                    Hiển thị qua Hệ Bánh Răng
                  </h4>
                  <p className="text-gray-400">
                    Năng lượng truyền qua chuỗi bánh răng để quay kim giờ, phút
                    và giây trên mặt số.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* --- PROS & CONS --- */}
          <section className="mb-24 grid grid-cols-1 md:grid-cols-2 gap-16 border-t border-gray-100 pt-16">
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-gray-900 uppercase tracking-widest font-sans">
                Ưu điểm
              </h3>
              <ul className="space-y-6 text-xl md:text-2xl text-gray-700">
                <li>• Không cần thay pin.</li>
                <li>• Kim giây chạy trơn (sweeping) thẩm mỹ.</li>
                <li>• Giá trị kỹ thuật và nghệ thuật cao.</li>
                <li>• Tuổi thọ vĩnh cửu nếu bảo dưỡng đúng.</li>
              </ul>
            </div>
            <div className="space-y-8 text-gray-400">
              <h3 className="text-2xl font-bold uppercase tracking-widest font-sans">
                Nhược điểm
              </h3>
              <ul className="space-y-6 text-xl md:text-2xl">
                <li>• Kém chính xác hơn Quartz (sai số mỗi ngày).</li>
                <li>• Cần bảo dưỡng lau dầu mỗi 3–5 năm.</li>
                <li>• Dừng hoạt động nếu không đeo trên 40-80 giờ.</li>
              </ul>
            </div>
          </section>

          {/* --- FAMOUS MODELS --- */}
          <section className="mb-24 space-y-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 uppercase tracking-tighter">
              Các Mẫu Nổi Tiếng
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 font-sans">
              <div className="p-8 border border-gray-100 space-y-4">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                  Dưới 5 Triệu
                </span>
                <p className="text-xl font-bold">Orient Bambino</p>
                <p className="text-gray-500">Seiko 5 Sports SRPG</p>
              </div>
              <div className="p-8 border border-gray-100 space-y-4">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                  5 – 15 Triệu
                </span>
                <p className="text-xl font-bold">Seiko Presage Cocktail</p>
                <p className="text-gray-500">Citizen Tsuyosa</p>
              </div>
              <div className="p-8 border border-gray-100 space-y-4">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                  Luxury
                </span>
                <p className="text-xl font-bold">Rolex Oyster Perpetual</p>
                <p className="text-gray-500">Omega Seamaster</p>
              </div>
            </div>
          </section>

          {/* --- FAQ SECTION --- */}
          <section className="mb-24 py-16 border-t border-gray-900">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 uppercase">
              Câu Hỏi Thường Gặp
            </h2>
            <div className="space-y-12 text-xl md:text-2xl leading-relaxed text-gray-700">
              <div>
                <h4 className="font-bold text-gray-900 mb-2">
                  Máy cơ Automatic có cần thay pin không?
                </h4>
                <p>
                  Không. Năng lượng được tạo ra hoàn toàn từ chuyển động cổ tay,
                  không dùng linh kiện điện tử.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">
                  Bao lâu cần bảo dưỡng một lần?
                </h4>
                <p>
                  Khuyến nghị 3–5 năm/lần để vệ sinh, tra dầu bôi trơn mới nhằm
                  bảo vệ linh kiện khỏi mài mòn.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">
                  Hacking Stop là gì?
                </h4>
                <p>
                  Là tính năng dừng kim giây khi kéo núm chỉnh giờ, giúp đồng bộ
                  thời gian chính xác đến từng giây.
                </p>
              </div>
            </div>
          </section>

          <footer className="pt-12 border-t border-gray-50 text-gray-400 italic text-lg">
            Bài viết được biên soạn dựa trên kiến thức horology và dữ liệu kỹ
            thuật 2026 bởi ROVIAN.
          </footer>
        </article>
      </main>
    </>
  );
};

export default AutomaticWatchArticle;
