import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import ARTICLE_ROUTES from "../../config/articleLinks";

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
        <title>
          Máy Cơ Automatic Là Gì? Nguyên Lý, Cấu Tạo & Lưu Ý Sử Dụng | ROVIAN
        </title>
        <meta
          name="description"
          content="Máy cơ Automatic là gì? Giải thích nguyên lý rotor, cách hoạt động, ưu nhược điểm và lưu ý sử dụng đúng cách cho người mới."
        />
        <meta
          name="keywords"
          content="máy cơ automatic là gì, đồng hồ cơ tự động, rotor đồng hồ, dây cót, bộ thoát, hacking stop, trữ cót, đồng hồ cơ thủ công, đồng hồ Quartz"
        />
      </Helmet>

      <main className="w-full mx-auto px-10 md:px-32 py-24 bg-white mt-2 text-left font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />

        <article>
          {/* --- HEADER --- */}
          <header className="mb-12 border-b border-gray-100 pb-16 font-serif">
            <span className="text-lg font-bold tracking-[0.3em] text-gray-400 uppercase mb-4 block font-sans">
              Di sản & Kỹ thuật Horology
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-[1.15] mb-12">
              Máy Cơ Automatic Là Gì? <br />
              <span className="text-gray-400 italic text-4xl md:text-5xl">
                Giải Thích Từ A–Z Cho Người Mới Bắt Đầu
              </span>
            </h1>
            <div className="flex items-center text-sm text-gray-400 tracking-widest uppercase font-sans">
              <span className="text-gray-900 font-semibold uppercase">
                Tòa soạn ROVIAN
              </span>
              <span className="mx-4 text-gray-200">|</span>
              <time dateTime="2026-04-14">Kiến thức chuyên sâu</time>
            </div>
          </header>

          <div className="mb-12 overflow-hidden bg-gray-50 aspect-[16/9] flex items-center justify-center group-hover:shadow-xl transition-shadow duration-500">
            <img
              src="https://luxshopping.vn/Uploads/UserFiles/images/dong-ho-co-bao-gom-dong-ho-co-thu-cong-va-dong-ho-co-automatic.jpg"
              alt="Sơ đồ cấu tạo máy cơ Automatic gồm rotor, dây cót, bộ thoát và hệ bánh răng"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          {/* --- INTRO SECTION --- */}
          <div className="max-w-none text-gray-800 mb-20">
            <p className="text-2xl md:text-3xl leading-[1.8] mb-10 first-letter:text-8xl first-letter:font-bold first-letter:text-gray-900 first-letter:mr-4 first-letter:float-left first-letter:leading-none">
              Máy cơ Automatic (hay đồng hồ cơ tự động) là loại bộ máy đồng hồ
              hoạt động hoàn toàn bằng năng lượng cơ học, không dùng pin và
              không cần lên dây cót thủ công. Thay vào đó, một bộ phận kim loại
              hình bán nguyệt gọi là rotor tự xoay 360° theo chuyển động cổ tay
              người đeo để nạp năng lượng liên tục cho đồng hồ. Đây là loại bộ
              máy phổ biến nhất trong dòng đồng hồ cơ hiện đại và được xem là
              đỉnh cao của kỹ thuật đồng hồ học (horology).
            </p>

            <div className="bg-stone-50 p-10 my-16 border-l-8 border-gray-900">
              <p className="text-xl font-sans tracking-wide text-gray-500 uppercase mb-4 font-bold">
                💡 Tóm tắt nhanh cho Google Featured Snippet
              </p>
              <p className="text-2xl leading-relaxed italic text-gray-800">
                Máy cơ Automatic = bộ máy cơ khí + rotor tự lên dây cót qua
                chuyển động cổ tay + không cần pin.
              </p>
            </div>
          </div>

          {/* --- DEFINITION --- */}
          <section className="mb-24 space-y-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight border-b border-gray-100 pb-4 font-serif">
              Máy Cơ Automatic Là Gì? Định Nghĩa Chính Xác
            </h2>
            <div className="text-xl md:text-2xl leading-[1.8] text-gray-700 space-y-8">
              <p>
                Trong ngành đồng hồ học, từ "Automatic" có nghĩa đen là "tự
                động" — ám chỉ cơ chế tự động lên dây cót mà không cần người
                dùng thực hiện thủ công. Điều này phân biệt nó với đồng hồ cơ
                thủ công (Manual Winding hoặc Hand-winding), loại đồng hồ vẫn
                cần người dùng xoay núm vặn hàng ngày.
              </p>
              <p>
                Bộ máy cơ Automatic thường gồm 100–300 linh kiện cơ khí (các
                model phức tạp cao cấp có thể lên tới 1.000 chi tiết), tất cả
                lắp ráp chính xác đến từng phần trăm milimet. Không có chip điện
                tử, không có pin — đây là lý do tại sao người yêu đồng hồ coi
                máy cơ Automatic là biểu tượng của nghệ thuật chế tác thuần túy.
              </p>

              <div className="py-8 space-y-4">
                <h3 className="text-2xl font-bold text-gray-900 font-serif">
                  Automatic khác Quartz như thế nào?
                </h3>
                <p>
                  Điểm khác biệt căn bản: đồng hồ Quartz dùng pin và chip điện
                  tử để dao động tinh thể thạch anh với độ chính xác cao (sai số
                  ±15 giây/tháng). Đồng hồ Automatic dùng năng lượng cơ học từ
                  dây cót, sai số thực tế khoảng ±20–45 giây/ngày tùy dòng máy —
                  kém chính xác hơn Quartz nhưng không cần thay pin và mang giá
                  trị kỹ thuật vượt trội. Đây là sự đánh đổi có chủ đích mà
                  người chơi đồng hồ thường xuyên chấp nhận.
                </p>
                <Link
                  to={ARTICLE_ROUTES.TOP5_DUOI_5_TRIEU.path}
                  className="font-sans text-lg text-gray-400 uppercase tracking-widest mt-4 italic inline-block hover:text-gray-600 transition-colors"
                >
                  🔗 Đọc thêm: [Top 5 Đồng Hồ Nam Tốt Nhất Dưới 5 Triệu 2025 –
                  Đánh Giá Thực Tế]
                </Link>
              </div>
            </div>
          </section>

          {/* --- HISTORY --- */}
          <section className="mb-24 p-12 bg-stone-50">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 font-serif">
              Lịch Sử Ngắn: Ai Phát Minh Ra Máy Cơ Automatic?
            </h2>
            <div className="w-full flex items-center justify-center mb-5">
              <img
                src="https://donghoduyanh.com/images/news/2024/03/25/large/gss_1711339566.jpg.webp"
                alt="Rotor đồng hồ cơ Automatic hình bán nguyệt tự xoay 360 độ theo chuyển động cổ tay"
                className="w-1/2h-1/2 object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="text-xl md:text-2xl leading-[1.8] text-gray-700 space-y-6 font-sans">
              <p>
                Ý tưởng về rotor tự động không phải xuất hiện vào thế kỷ 20. Năm
                1770, nhà chế tác Abraham-Louis Perrelet (Thụy Sĩ) đã phát minh
                cơ chế rotor tự động đầu tiên dành cho đồng hồ bỏ túi. Tuy
                nhiên, kỹ thuật lúc đó chưa đủ để thu nhỏ vào đồng hồ đeo tay.
              </p>
              <p>
                Bước ngoặt thực sự đến vào năm 1922, khi thợ đồng hồ người Anh
                John Harwood phát triển và cấp bằng sáng chế hệ thống lên dây
                cót tự động cho đồng hồ đeo tay. Năm 1928, các đồng hồ mang tên
                Harwood Automatic được sản xuất hàng loạt và giới thiệu tại
                Basel Watch Fair.
              </p>
              <p>
                Cột mốc hoàn thiện cuối cùng đến năm 1931, khi Rolex ra mắt cơ
                chế rotor xoay 360° liên tục trên mẫu Oyster Perpetual — thiết
                kế này trở thành nền tảng cho toàn bộ đồng hồ Automatic hiện đại
                ngày nay. Năm 1948, hãng Eterna bổ sung ổ bi vào rotor, giúp máy
                chạy êm hơn và bền hơn đáng kể.
              </p>
            </div>
          </section>

          {/* --- MECHANISM --- */}
          <section className="mb-24 bg-gray-900 text-white p-12 md:p-20 rounded-sm">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 border-b border-gray-700 pb-6 uppercase tracking-widest text-center font-serif">
              Cơ Chế Hoạt Động: Máy Cơ Automatic Chạy Như Thế Nào?
            </h2>
            <p className="text-xl md:text-2xl mb-12 text-center text-gray-400 italic">
              Để dễ hình dung, hãy nghĩ đến một dây lò xo bị cuộn chặt rồi từ từ
              giãn ra — đó chính xác là cách máy cơ Automatic tạo ra và sử dụng
              năng lượng. Quá trình diễn ra theo 4 bước tuần hoàn:
            </p>
            <div className="grid grid-cols-1 gap-12 text-xl md:text-2xl">
              <div className="flex gap-8">
                <span className="text-gray-500 font-bold text-5xl font-sans">
                  01
                </span>
                <div>
                  <h4 className="font-bold text-white mb-2 uppercase tracking-wide">
                    Bước 1 – Nạp năng lượng qua Rotor
                  </h4>
                  <p className="text-gray-400">
                    Khi bạn cử động cổ tay, chiếc rotor hình bán nguyệt gắn trên
                    mặt sau bộ máy sẽ xoay theo quán tính. Rotor được làm từ kim
                    loại nặng (thường là tungsten, vàng hoặc bạch kim ở máy cao
                    cấp) để có đủ trọng lực tạo lực quay. Chuyển động quay này
                    được truyền qua hệ thống bánh răng xuống dây cót — một dải
                    thép mỏng cuộn xoắn trong hộp cót. Khi dây cót đầy, một bộ
                    ly hợp tự động sẽ ngắt kết nối để rotor không cuộn thêm,
                    tránh làm gãy dây cót.
                  </p>
                </div>
              </div>
              <div className="flex gap-8">
                <span className="text-gray-500 font-bold text-5xl font-sans">
                  02
                </span>
                <div>
                  <h4 className="font-bold text-white mb-2 uppercase tracking-wide">
                    Bước 2 – Tích trữ năng lượng trong Dây Cót
                  </h4>
                  <p className="text-gray-400">
                    Dây cót (mainspring) được làm từ hợp kim thép đàn hồi cao,
                    bị cuộn chặt trong hộp cót hình trụ. Khi được lên đầy, năng
                    lượng cơ học tích trữ đủ để đồng hồ chạy từ 40 đến 80 giờ
                    (các máy cao cấp hiện đại có thể đạt 120 giờ trữ cót).
                  </p>
                </div>
              </div>
              <div className="flex gap-8">
                <span className="text-gray-500 font-bold text-5xl font-sans">
                  03
                </span>
                <div>
                  <h4 className="font-bold text-white mb-2 uppercase tracking-wide">
                    Bước 3 – Kiểm soát năng lượng qua Bộ Thoát (Escapement)
                  </h4>
                  <p className="text-gray-400">
                    Đây là bộ phận tinh vi nhất và cũng là linh hồn của mọi đồng
                    hồ cơ. Bộ thoát (escapement) hoạt động như một "van" điều
                    tiết — chỉ cho phép năng lượng từ dây cót chạy ra theo từng
                    nhịp nhỏ đều đặn, không phải chạy liên tục không kiểm soát.
                    Mỗi nhịp thoát tương ứng với một "tích tắc" của đồng hồ.
                    Bánh lắc (balance wheel) dao động như con lắc, kết hợp với
                    dây tóc (hairspring) để duy trì nhịp dao động đều đặn. Tần
                    số dao động phổ biến là 28.800 lần/giờ (A/h) trên các máy
                    hiện đại — tương đương 8 nhịp/giây.
                  </p>
                </div>
              </div>
              <div className="flex gap-8">
                <span className="text-gray-500 font-bold text-5xl font-sans">
                  04
                </span>
                <div>
                  <h4 className="font-bold text-white mb-2 uppercase tracking-wide">
                    Bước 4 – Hiển thị thời gian qua Hệ Bánh Răng
                  </h4>
                  <p className="text-gray-400">
                    Năng lượng được kiểm soát từ bộ thoát tiếp tục truyền qua
                    chuỗi bánh răng để quay kim giờ, kim phút và kim giây trên
                    mặt số. Các chức năng phức tạp hơn như lịch ngày, moonphase
                    hay chronograph đều được tích hợp trong cùng chuỗi truyền
                    động cơ học này.
                  </p>
                </div>
              </div>
            </div>
            <Link
              to={ARTICLE_ROUTES.CACH_CHON_DONG_HO.path}
              className="font-sans text-lg text-gray-500 uppercase tracking-widest mt-12 italic text-center inline-block hover:text-gray-700 transition-colors"
            >
              🔗 Đọc thêm: [Cách Chọn Đồng Hồ Nam Phù Hợp – Hướng Dẫn Từ A–Z
              (2025)]
            </Link>
          </section>

          {/* --- PROS & CONS --- */}
          <section className="mb-24 space-y-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 border-b border-gray-100 pb-4 font-serif">
              Ưu và Nhược Điểm Của Máy Cơ Automatic
            </h2>
            <img
              src="https://cdn.tgdd.vn/Files/2020/03/23/1243904/n4_800x450.jpg"
              alt="So sánh chuyển động kim giây đồng hồ cơ Automatic (trơn) và đồng hồ Quartz (giật từng nhịp)"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-gray-900 uppercase tracking-widest font-sans">
                  Ưu điểm
                </h3>
                <ul className="space-y-6 text-xl md:text-2xl text-gray-700 leading-relaxed">
                  <li>
                    • <strong>Không cần thay pin:</strong> Máy cơ Automatic hoạt
                    động hoàn toàn bằng năng lượng cơ học. Chỉ cần đeo thường
                    xuyên, đồng hồ tự duy trì hoạt động vô thời hạn.
                  </li>
                  <li>
                    • <strong>Giá trị kỹ thuật và nghệ thuật:</strong> Một bộ
                    máy Automatic là kết tinh của hàng trăm năm lịch sử chế tác
                    thủ công.
                  </li>
                  <li>
                    • <strong>Kim giây chạy trơn (sweeping):</strong> Khác với
                    đồng hồ Quartz có kim giây giật từng nhịp, kim giây của máy
                    Automatic lướt mượt mà.
                  </li>
                  <li>
                    • <strong>Tuổi thọ cao nếu bảo dưỡng đúng:</strong> Có thể
                    hoạt động tốt hàng chục năm, thậm chí truyền lại cho thế hệ
                    sau.
                  </li>
                </ul>
              </div>
              <div className="space-y-8 text-gray-400">
                <h3 className="text-2xl font-bold uppercase tracking-widest font-sans">
                  Nhược điểm
                </h3>
                <ul className="space-y-6 text-xl md:text-2xl leading-relaxed">
                  <li>
                    • <strong>Kém chính xác hơn Quartz:</strong> Sai số từ ±20
                    đến ±45 giây/ngày là bình thường với máy cơ phổ thông.
                  </li>
                  <li>
                    • <strong>Cần bảo dưỡng định kỳ:</strong> Khuyến nghị bảo
                    dưỡng mỗi 3–5 năm để vệ sinh, tra dầu lại toàn bộ máy.
                  </li>
                  <li>
                    • <strong>Dừng khi không đeo:</strong> Nếu không đeo trong
                    40–80 giờ, đồng hồ sẽ hết năng lượng và dừng lại.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* --- APPLICATIONS --- */}
          <section className="mb-24 space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-serif">
              Ứng Dụng Thực Tế: Ai Phù Hợp Với Đồng Hồ Cơ Automatic?
            </h2>
            <div className="text-xl md:text-2xl leading-[1.8] text-gray-700 space-y-6">
              <p>
                Máy cơ Automatic phù hợp nhất với người đeo đồng hồ hàng ngày
                liên tục trong ít nhất 8 tiếng — đủ để rotor nạp đầy dây cót.
                Người thường xuyên đi lại, vận động nhẹ trong công sở là đối
                tượng lý tưởng.
              </p>
              <p>
                Không phù hợp nếu: Bạn ít vận động (làm việc bàn giấy nhiều giờ
                liên tục), thường xuyên thay đổi giữa nhiều chiếc đồng hồ, hoặc
                cần độ chính xác cao cho công việc đặc thù.
              </p>
              <p>
                Mẹo thực tế: Nếu có nhiều đồng hồ cơ nhưng không đeo thường
                xuyên, hãy đầu tư thêm một hộp xoay đồng hồ (watch winder) —
                thiết bị tự xoay để giữ cho dây cót luôn được nạp khi không đeo.
              </p>
              <Link
                to={ARTICLE_ROUTES.DANH_GIA_SRWATCH.path}
                className="font-sans text-lg text-gray-400 uppercase tracking-widest mt-4 italic inline-block hover:text-gray-600 transition-colors"
              >
                🔗 Đọc thêm: [Đồng Hồ SRWatch Nam SG1077.1101TE – Đánh Giá Chi
                Tiết Từ Chuyên Gia]
              </Link>
            </div>
          </section>

          {/* --- MODELS --- */}
          <section className="mb-24 space-y-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 uppercase tracking-tighter">
              Các Mẫu Đồng Hồ Cơ Automatic Nổi Tiếng Theo Phân Khúc
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 font-sans">
              <div className="p-10 border border-gray-100 space-y-6">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                  Tầm dưới 5 triệu — Entry-level
                </span>
                <p className="text-2xl font-bold">Orient Bambino</p>
                <p className="text-gray-500 text-lg">Seiko 5 Sports SRPG</p>
              </div>
              <div className="p-10 border border-gray-100 space-y-6">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                  Tầm 5–15 triệu — Mid-range
                </span>
                <p className="text-2xl font-bold">Seiko Presage Cocktail</p>
                <p className="text-gray-500 text-lg">Citizen Tsuyosa NJ0150</p>
              </div>
              <div className="p-10 border border-gray-100 space-y-6">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                  Tầm luxury — Flagship
                </span>
                <p className="text-2xl font-bold">Rolex Oyster Perpetual</p>
                <p className="text-gray-500 text-lg">Omega Seamaster</p>
              </div>
            </div>
          </section>

          {/* --- FAQ SECTION --- */}
          <section className="mb-24 py-16 border-t border-gray-900">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 uppercase font-serif">
              Câu Hỏi Thường Gặp (FAQ)
            </h2>
            <div className="space-y-16 text-xl md:text-2xl leading-[1.8] text-gray-700">
              <div className="space-y-4">
                <h4 className="font-bold text-gray-900">
                  H: Máy cơ Automatic có cần thay pin không?
                </h4>
                <p>
                  Đ: Không. Đây chính là ưu điểm cốt lõi của đồng hồ cơ
                  Automatic — bộ máy hoàn toàn không sử dụng pin hay bất kỳ linh
                  kiện điện tử nào. Năng lượng được tạo ra từ chuyển động cổ tay
                  thông qua rotor, tích trữ trong dây cót và giải phóng dần để
                  đồng hồ hoạt động.
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="font-bold text-gray-900">
                  H: Đồng hồ cơ Automatic có chạy chính xác không?
                </h4>
                <p>
                  Đ: Chính xác, nhưng không bằng Quartz. Máy cơ Automatic phổ
                  thông có sai số từ ±20 đến ±45 giây/ngày. Các máy cao cấp đạt
                  chuẩn Chronometer có thể giảm xuống ±2–5 giây/ngày. Với người
                  dùng thông thường, sai số của máy cơ Automatic hoàn toàn chấp
                  nhận được trong sinh hoạt hàng ngày.
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="font-bold text-gray-900">
                  H: Nên đeo đồng hồ cơ Automatic bao nhiêu tiếng mỗi ngày?
                </h4>
                <p>
                  Đ: Tối thiểu 8 tiếng/ngày để rotor tạo đủ năng lượng duy trì
                  hoạt động. Hầu hết đồng hồ Automatic có trữ cót từ 40–48 giờ,
                  nghĩa là nếu bạn tháo ra ban đêm, đồng hồ vẫn chạy đến sáng
                  hôm sau mà không cần đeo liên tục.
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="font-bold text-gray-900">
                  H: Hacking Stop là gì và tại sao quan trọng?
                </h4>
                <p>
                  Đ: Hacking Stop (hay Hacking Second) là tính năng dừng kim
                  giây lại khi bạn kéo núm đồng hồ ra để chỉnh giờ. Tính năng
                  này cho phép đặt giờ chính xác đến từng giây bằng cách đồng bộ
                  kim giây về vị trí "00".
                </p>
              </div>
            </div>
          </section>

          {/* --- FOOTER NOTE --- */}
          <footer className="pt-12 border-t border-gray-100 text-gray-400 italic text-xl leading-relaxed">
            <p>
              Bài viết được biên soạn dựa trên kiến thức horology và dữ liệu kỹ
              thuật từ các nhà sản xuất đồng hồ uy tín. Thông số trữ cót và sai
              số có thể thay đổi tùy từng model cụ thể.
            </p>
          </footer>
        </article>
      </main>
    </>
  );
};

export default AutomaticWatchArticle;
