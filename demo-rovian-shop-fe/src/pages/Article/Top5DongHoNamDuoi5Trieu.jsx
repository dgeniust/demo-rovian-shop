import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ARTICLE_ROUTES } from "../../config/articleLinks";

const Top5DongHoNamDuoi5Trieu = () => {
  const schemaData = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline:
        "Top 5 Đồng Hồ Nam Tốt Nhất Dưới 5 Triệu 2025 – Đánh Giá Thực Tế",
      description:
        "Top 5 đồng hồ nam dress watch dưới 5 triệu 2025: tiêu chí rõ ràng, thông số thực tế, giá tham khảo. Chọn đúng ngay lần đầu.",
      author: {
        "@type": "Person",
        name: "Chuyên gia Horology",
      },
      publisher: {
        "@type": "Organization",
        name: "ROVIAN",
        logo: {
          "@type": "ImageObject",
          url: "https://yourdomain.com/logo.png",
        },
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id":
          "https://yourdomain.com/kien-thuc/top-5-dong-ho-nam-tot-nhat-duoi-5-trieu-2025",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Top 5 Đồng Hồ Nam Tốt Nhất Dưới 5 Triệu 2025",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Orient Bambino FAC00009W0" },
        {
          "@type": "ListItem",
          position: 2,
          name: "Seiko Presage SRPB43J1 Cocktail Time",
        },
        { "@type": "ListItem", position: 3, name: "Citizen BI5010-59A" },
        {
          "@type": "ListItem",
          position: 4,
          name: "SRWATCH Timepiece TE SG1077.1101TE",
        },
        { "@type": "ListItem", position: 5, name: "Casio MTP-V006L" },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Đồng hồ nam dưới 5 triệu có đáng mua không, hay nên để dành mua đồng hồ đắt hơn?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Hoàn toàn đáng mua — nhưng với điều kiện bạn chọn đúng. Ở phân khúc 2–5 triệu, bạn đã tiếp cận được kính Sapphire chống trầy, vỏ thép 316L chống ăn mòn và bộ máy Nhật Bản bền bỉ. Nâng lên 10–15 triệu, bạn chủ yếu được thêm thương hiệu, độ hoàn thiện tinh xảo hơn. Với người mua lần đầu, tầm 3–5 triệu là vùng 'sweet spot' tốt nhất.",
          },
        },
        {
          "@type": "Question",
          name: "Nên chọn đồng hồ cơ (Automatic) hay đồng hồ Quartz trong tầm dưới 5 triệu?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Phụ thuộc vào lối sống. Đồng hồ cơ Automatic phù hợp nếu bạn đeo hàng ngày, thích cảm giác 'bộ máy sống' và chấp nhận bảo dưỡng. Đồng hồ Quartz phù hợp nếu bạn cần độ chính xác cao, không muốn bảo dưỡng phức tạp, hoặc ngân sách hạn chế.",
          },
        },
        {
          "@type": "Question",
          name: "Mua đồng hồ nam dưới 5 triệu ở đâu để chắc chắn là hàng chính hãng?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ưu tiên theo thứ tự: (1) Website/showroom chính thức của hãng; (2) Các chuỗi bán lẻ ủy quyền uy tín; (3) Gian hàng chính hãng được xác nhận trên Shopee/Tiki/Lazada. Tránh mua từ cá nhân không rõ nguồn gốc giá rẻ bất thường.",
          },
        },
        {
          "@type": "Question",
          name: "Kính Sapphire có thực sự quan trọng không, hay chỉ là marketing?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Quan trọng thật. Kính Sapphire có độ cứng 9/10, gần như không thể xước trong sinh hoạt. Sau 1–2 năm, Sapphire vẫn trong suốt trong khi kính khoáng sẽ xước dăm. Nếu ngân sách cho phép, ưu tiên chọn mẫu có Sapphire.",
          },
        },
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Top 5 Đồng Hồ Nam Tốt Nhất Dưới 5 Triệu 2025 – Đánh Giá Thực Tế |
          ROVIAN
        </title>
        <meta
          name="description"
          content="Top 5 đồng hồ nam dress watch dưới 5 triệu 2025: tiêu chí rõ ràng, thông số thực tế, giá tham khảo. Chọn đúng ngay lần đầu."
        />
      </Helmet>

      <main className="w-full mx-auto px-10 md:px-32 py-24 bg-white mt-2 text-left font-sans leading-[1.8]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />

        <article>
          {/* --- HEADER --- */}
          <header className="mb-24 border-b border-gray-100 pb-16 font-serif">
            <span className="text-lg font-bold tracking-[0.3em] text-gray-400 uppercase mb-4 block font-sans">
              Bảng Xếp Hạng Tuyển Chọn
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-[1.15] mb-12">
              Top 5 Đồng Hồ Nam Tốt Nhất Dưới 5 Triệu 2025: <br />
              <span className="text-gray-400 italic text-3xl md:text-5xl leading-tight block mt-4 font-serif">
                Chọn Đúng Ngay Lần Đầu
              </span>
            </h1>
            <div className="flex flex-wrap gap-4 items-center text-sm text-gray-400 tracking-widest uppercase font-sans">
              <span className="text-gray-900 font-semibold uppercase">
                Ban Biên Tập ROVIAN
              </span>
              <span className="mx-2 text-gray-200">|</span>
              <span>Từ khóa chính: top đồng hồ nam dưới 5 triệu</span>
              <span className="mx-2 text-gray-200">|</span>
              <span>Độ dài: ~1.500 từ</span>
            </div>
          </header>

          {/* --- INTRO SECTION --- */}
          <section className="mb-20 text-lg md:text-2xl text-gray-800">
            <p className="mb-5 first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 first-letter:mr-2 first-letter:float-left first-letter:leading-none">
              Phân khúc đồng hồ nam dưới 5 triệu tại Việt Nam đang có hàng trăm
              lựa chọn — nhưng không phải tất cả đều đáng đồng tiền. Để rút ngắn
              hành trình tìm kiếm cho bạn, danh sách này được xây dựng dựa trên
              5 tiêu chí cứng: chất liệu vỏ và dây (thép 316L hoặc tương đương),
              chất lượng mặt kính (ưu tiên Sapphire hoặc Hardlex), độ tin cậy
              của bộ máy (Quartz Nhật hoặc cơ Automatic), khả năng chống nước
              thực dụng (tối thiểu 3ATM), và mức độ phù hợp với phong cách công
              sở — dress watch ưu tiên. Tất cả giá tham khảo được cập nhật theo
              thị trường Việt Nam đầu năm 2025.
            </p>
          </section>

          {/* --- LIST SECTION --- */}
          <section className="space-y-32">
            {/* Item 01 */}
            <div className="group">
              <div className="flex items-baseline mb-8 border-b border-gray-100 pb-6 font-serif">
                <span className="text-5xl md:text-6xl font-bold text-gray-200 mr-6">
                  #1
                </span>
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
                  Orient Bambino FAC00009W0: Đồng Hồ Cơ Dress Watch Tốt Nhất
                  Dưới 5 Triệu
                </h2>
              </div>
              <div className="mb-12 overflow-hidden bg-gray-50 aspect-[16/9] flex items-center justify-center group-hover:shadow-xl transition-shadow duration-500">
                <img
                  src="https://product.hstatic.net/1000223154/product/z4625704601706_cd4a2c5dca62f2d8ff410930afb29779_df9b66065a53491382091c3988220344_master.jpg"
                  alt="Đồng hồ nam dưới 5 triệu Orient Bambino FAC00009W0 máy cơ Automatic kính cong vòm"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="text-xl md:text-2xl text-gray-700 space-y-8">
                <p>
                  <strong className="text-gray-900 font-serif">
                    Điểm nổi bật:
                  </strong>{" "}
                  Nếu chỉ có thể giữ lại một cái tên trong danh sách này, đó sẽ
                  là Orient Bambino. Ra mắt từ 2012 và liên tục cải tiến qua
                  nhiều thế hệ, Bambino là dress watch đồng hồ cơ (Automatic)
                  duy nhất trong tầm giá này sở hữu bộ máy in-house do chính
                  Orient sản xuất tại Nhật Bản — điều mà ngay cả nhiều hãng giá
                  cao hơn cũng không làm được.
                </p>
                <p>
                  Mặt kính cong vòm (domed crystal) là đặc trưng không thể nhầm
                  lẫn, tạo chiều sâu thị giác và tôn mặt số lên khác hẳn những
                  chiếc đồng hồ mặt phẳng thông thường. Cọc số La Mã thanh mảnh,
                  kim Dauphine vót nhọn, dây da nâu chính hãng — tổng thể gợi
                  nhớ phong cách của những chiếc đồng hồ Thụy Sĩ đắt tiền hơn
                  nhiều lần.
                </p>

                <div className="bg-stone-50 p-8 border-l-4 border-gray-900 font-sans">
                  <h4 className="font-bold uppercase mb-4 text-lg">
                    Thông số chính:
                  </h4>
                  <ul className="space-y-2 text-lg">
                    <li>
                      • <strong>Bộ máy:</strong> Automatic in-house Cal.F6724
                      (22 chân kính, trữ cót 40 giờ, hỗ trợ lên cót tay +
                      Hacking Stop)
                    </li>
                    <li>
                      • <strong>Sai số:</strong> -15 đến +25 giây/ngày (tiêu
                      chuẩn đồng hồ cơ phổ thông)
                    </li>
                    <li>
                      • <strong>Đường kính mặt:</strong> 40.5mm | Độ dày: ~12mm
                    </li>
                    <li>
                      • <strong>Mặt kính:</strong> Kính khoáng cong vòm
                    </li>
                    <li>
                      • <strong>Chất liệu vỏ:</strong> Thép không gỉ 316L
                    </li>
                    <li>
                      • <strong>Chống nước:</strong> 5ATM (đi mưa, rửa tay thoải
                      mái)
                    </li>
                    <li>
                      • <strong>Dây đeo:</strong> Da thật + khóa bướm thép
                    </li>
                  </ul>
                </div>
                <p className="italic">
                  <strong>Đối tượng phù hợp:</strong> Người yêu đồng hồ cơ lần
                  đầu, dân văn phòng thích phong cách cổ điển thanh lịch.{" "}
                  <strong>Giá tham khảo:</strong> ~3.500.000 – 4.500.000 đồng.
                </p>
              </div>
            </div>

            {/* Item 02 */}
            <div className="group">
              <div className="flex items-baseline mb-8 border-b border-gray-100 pb-6 font-serif">
                <span className="text-5xl md:text-6xl font-bold text-gray-200 mr-6">
                  #2
                </span>
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
                  Seiko Presage SRPB43J1 "Cocktail Time": Đồng Hồ Cơ Nhật Bản
                  Đẹp Nhất Tầm Giá
                </h2>
              </div>
              <div className="mb-12 overflow-hidden bg-gray-50 aspect-[16/9] flex items-center justify-center group-hover:shadow-xl transition-shadow duration-500">
                <img
                  src="https://image.pushauction.com/0/0/253c3b2b-f15f-4968-82b1-4a9031332a6f/1a965085-8482-4671-8a14-d9f6e9ccd38f.jpg"
                  alt="Đồng hồ nam Nhật Bản Seiko Presage SRPB43J1 Cocktail Time mặt số xà cừ xanh nhạt"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="text-xl md:text-2xl text-gray-700 space-y-8">
                <p>
                  <strong className="text-gray-900 font-serif">
                    Điểm nổi bật:
                  </strong>{" "}
                  Trong thế giới đồng hồ, hiếm có mặt số nào gây ấn tượng mạnh
                  như SRPB43J1 — được ví như "một ly cocktail gin lạnh dưới ánh
                  đèn bar". Lớp mặt số xà cừ (mother-of-pearl) lấp lánh đổi màu
                  theo góc nhìn ánh sáng là chi tiết thường chỉ thấy ở đồng hồ
                  cao cấp 15–20 triệu trở lên, nhưng Seiko đã đưa nó xuống phân
                  khúc này.
                </p>
                <p>
                  Thuộc dòng Seiko Presage — cấp cao hơn hẳn Seiko 5 phổ thông —
                  SRPB43J1 trang bị bộ máy cơ tự động Caliber 4R35 với kính
                  Sapphire chống trầy thực sự. Đây là điểm khác biệt lớn so với
                  hầu hết đối thủ cùng tầm giá vẫn đang dùng kính khoáng hoặc
                  Hardlex.
                </p>

                <div className="bg-stone-50 p-8 border-l-4 border-gray-900 font-sans">
                  <h4 className="font-bold uppercase mb-4 text-lg">
                    Thông số chính:
                  </h4>
                  <ul className="space-y-2 text-lg">
                    <li>
                      • <strong>Bộ máy:</strong> Automatic in-house Caliber 4R35
                      (24 chân kính, trữ cót ~41 giờ)
                    </li>
                    <li>
                      • <strong>Sai số:</strong> -35 đến +45 giây/ngày
                    </li>
                    <li>
                      • <strong>Đường kính mặt:</strong> 40.5mm | Độ dày:
                      ~13.5mm
                    </li>
                    <li>
                      • <strong>Mặt kính:</strong> Sapphire (chuẩn chống trầy
                      cao nhất ở phân khúc này)
                    </li>
                    <li>
                      • <strong>Mặt số:</strong> Xà cừ lấp lánh – hiệu ứng ánh
                      sáng độc đáo
                    </li>
                    <li>
                      • <strong>Chất liệu vỏ:</strong> Thép không gỉ
                    </li>
                    <li>
                      • <strong>Chống nước:</strong> 10ATM (đi bơi nhẹ được)
                    </li>
                  </ul>
                </div>
                <p className="italic">
                  <strong>Đối tượng phù hợp:</strong> Người mua lần đầu muốn
                  "one piece đáng nhớ", dân sưu tầm muốn mẫu cơ cao cấp.{" "}
                  <strong>Giá tham khảo:</strong> ~4.000.000 – 5.000.000 đồng.
                </p>
              </div>
            </div>

            {/* Item 03 */}
            <div className="group">
              <div className="flex items-baseline mb-8 border-b border-gray-100 pb-6 font-serif">
                <span className="text-5xl md:text-6xl font-bold text-gray-200 mr-6">
                  #3
                </span>
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
                  Citizen BI5010-59A: Đồng Hồ Nam Quartz Thanh Lịch, Pin Bền
                  Nhất Tầm Giá
                </h2>
              </div>
              <div className="mb-12 overflow-hidden bg-gray-50 aspect-[16/9] flex items-center justify-center group-hover:shadow-xl transition-shadow duration-500">
                <img
                  src="https://product.hstatic.net/1000223154/product/z2559560661868_2754caf869b95b1c137366ccdc5abb9d_6c6199a81a77434c8f62c53d41b4d0c5.jpg"
                  alt="Đồng hồ nam dress watch Citizen BI5010-59A máy Quartz Nhật Bản thiết kế tối giản"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="text-xl md:text-2xl text-gray-700 space-y-8">
                <p>
                  <strong className="text-gray-900 font-serif">
                    Điểm nổi bật:
                  </strong>{" "}
                  Không phải ai cũng muốn đồng hồ cơ — và Citizen BI5010 là lý
                  do tại sao lựa chọn đồng hồ Quartz Nhật Bản hoàn toàn có thể
                  sáng suốt ở phân khúc này. BI5010 là định nghĩa của từ "lịch
                  lãm không cần cố gắng".
                </p>
                <p>
                  Điểm mạnh kỹ thuật: bộ máy Quartz Miyota của Citizen với sai
                  số chỉ ±15 giây/tháng — chính xác hơn nhiều lần so với máy cơ
                  cùng tầm. Pin bền 2–3 năm. Không cần lên cót, không cần bảo
                  dưỡng phức tạp.
                </p>

                <div className="bg-stone-50 p-8 border-l-4 border-gray-900 font-sans">
                  <h4 className="font-bold uppercase mb-4 text-lg">
                    Thông số chính:
                  </h4>
                  <ul className="space-y-2 text-lg">
                    <li>
                      • <strong>Bộ máy:</strong> Quartz Miyota – Japan Movt (độ
                      chính xác ±15s/tháng)
                    </li>
                    <li>
                      • <strong>Đường kính mặt:</strong> 40mm | Độ dày: ~9mm
                      (siêu mỏng)
                    </li>
                    <li>
                      • <strong>Mặt kính:</strong> Kính khoáng chịu lực
                    </li>
                    <li>
                      • <strong>Mặt số:</strong> Trắng tinh, index vạch mạ bạc
                    </li>
                    <li>
                      • <strong>Chất liệu vỏ:</strong> Thép không gỉ mạ bạc
                      polished
                    </li>
                    <li>
                      • <strong>Chống nước:</strong> 5ATM
                    </li>
                    <li>
                      • <strong>Dây:</strong> Da thật mềm, nhiều màu tùy chọn
                    </li>
                  </ul>
                </div>
                <p className="italic">
                  <strong>Đối tượng phù hợp:</strong> Người cần đồng hồ "mua
                  xong không cần nghĩ", ưa độ chính xác cao.{" "}
                  <strong>Giá tham khảo:</strong> ~2.500.000 – 3.500.000 đồng.
                </p>
              </div>
            </div>

            {/* Item 04 */}
            <div className="group">
              <div className="flex items-baseline mb-8 border-b border-gray-100 pb-6 font-serif">
                <span className="text-5xl md:text-6xl font-bold text-gray-200 mr-6">
                  #4
                </span>
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
                  SRWATCH Timepiece TE SG1077.1101TE: Kính Sapphire + Thép 316L
                  Rẻ Nhất Danh Sách
                </h2>
              </div>
              <div className="mb-12 overflow-hidden bg-gray-50 aspect-[16/9] flex items-center justify-center group-hover:shadow-xl transition-shadow duration-500">
                <img
                  src="https://srwatch.vn/wp-content/uploads/2026/01/dong-ho-nam-srwatch-bst-te-SG1903.1101TE-4.jpg"
                  alt="Đồng hồ nam kính Sapphire giá rẻ SRWATCH Timepiece TE SG1077 thép không gỉ 316L"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="text-xl md:text-2xl text-gray-700 space-y-8">
                <p>
                  <strong className="text-gray-900 font-serif">
                    Điểm nổi bật:
                  </strong>{" "}
                  SRWATCH không phải cái tên nổi đình đám như Seiko hay Orient,
                  nhưng về tỷ lệ chất liệu/giá tiền, dòng Timepiece TE là câu
                  trả lời khó bác bỏ nhất ở phân khúc dưới 3 triệu. Ít thương
                  hiệu nào ở tầm giá này dám trang bị đồng thời kính Sapphire
                  nguyên khối và vỏ/dây thép không gỉ 316L.
                </p>

                <div className="bg-stone-50 p-8 border-l-4 border-gray-900 font-sans">
                  <h4 className="font-bold uppercase mb-4 text-lg">
                    Thông số chính:
                  </h4>
                  <ul className="space-y-2 text-lg">
                    <li>
                      • <strong>Bộ máy:</strong> Quartz Miyota (Japan Movt, sai
                      số ±15s/tháng)
                    </li>
                    <li>
                      • <strong>Đường kính mặt:</strong> ~39mm | Độ dày: ~6–7mm
                    </li>
                    <li>
                      • <strong>Mặt kính:</strong> Sapphire nguyên khối (chống
                      trầy cấp 9 Mohs)
                    </li>
                    <li>
                      • <strong>Mặt số:</strong> Đen tối giản, vạch số sắc nét
                    </li>
                    <li>
                      • <strong>Chất liệu vỏ + dây:</strong> Thép không gỉ 316L
                    </li>
                    <li>
                      • <strong>Chống nước:</strong> 5ATM (đi mưa, tắm rửa)
                    </li>
                  </ul>
                </div>
                <p className="italic">
                  <strong>Đối tượng phù hợp:</strong> Người mua lần đầu ngân
                  sách hạn chế, muốn chất liệu tốt nhất tầm giá.{" "}
                  <strong>Giá tham khảo:</strong> ~1.800.000 – 2.500.000 đồng.
                </p>
              </div>
            </div>

            {/* Item 05 */}
            <div className="group">
              <div className="flex items-baseline mb-8 border-b border-gray-100 pb-6 font-serif">
                <span className="text-5xl md:text-6xl font-bold text-gray-200 mr-6">
                  #5
                </span>
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
                  Casio MTP-V006L: Dress Watch Quartz Nhật Tốt Nhất Dưới 1 Triệu
                </h2>
              </div>
              <div className="mb-12 overflow-hidden bg-gray-50 aspect-[16/9] flex items-center justify-center group-hover:shadow-xl transition-shadow duration-500">
                <img
                  src="https://cdn.casio-vietnam.vn/wp-content/uploads/2019/06/CA01-c.png"
                  alt="Đồng hồ nam dưới 1 triệu Casio MTP-V006L chính hãng thiết kế thanh lịch cho sinh viên"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="text-xl md:text-2xl text-gray-700 space-y-8">
                <p>
                  <strong className="text-gray-900 font-serif">
                    Điểm nổi bật:
                  </strong>{" "}
                  Đây là chiếc đồng hồ Quartz Nhật Bản thanh lịch nhất trong tầm
                  dưới 1 triệu đồng, với thiết kế dress watch kinh điển: mặt
                  tròn, cọc số vạch hoặc La Mã, dây da hoặc dây kim loại mảnh.
                </p>
                <p>
                  Tính năng hiển thị ngày và thứ ở cửa sổ 3 giờ thực dụng. Trọng
                  lượng chỉ khoảng 46g — gần như không cảm nhận được khi đeo cả
                  ngày.
                </p>

                <div className="bg-stone-50 p-8 border-l-4 border-gray-900 font-sans">
                  <h4 className="font-bold uppercase mb-4 text-lg">
                    Thông số chính:
                  </h4>
                  <ul className="space-y-2 text-lg">
                    <li>
                      • <strong>Bộ máy:</strong> Quartz MIYOTA-1333 (sai số
                      ±20s/tháng)
                    </li>
                    <li>
                      • <strong>Đường kính mặt:</strong> 38mm | Trọng lượng:
                      ~46g (cực nhẹ)
                    </li>
                    <li>
                      • <strong>Mặt kính:</strong> Kính khoáng
                    </li>
                    <li>
                      • <strong>Chất liệu vỏ:</strong> Thép mạ crôm
                    </li>
                    <li>
                      • <strong>Chống nước:</strong> 3ATM (rửa tay, đi mưa nhẹ)
                    </li>
                    <li>
                      • <strong>Tính năng:</strong> Lịch ngày + lịch thứ song
                      ngữ (Anh/Pháp)
                    </li>
                  </ul>
                </div>
                <p className="italic">
                  <strong>Đối tượng phù hợp:</strong> Sinh viên, người mua đồng
                  hồ đầu tiên trong đời. <strong>Giá tham khảo:</strong>{" "}
                  ~700.000 – 900.000 đồng.
                </p>
              </div>
            </div>
          </section>

          {/* --- COMPARISON MATRIX --- */}
          <section className="my-32 bg-gray-900 text-white p-12 md:p-20 rounded-sm">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 border-b border-gray-700 pb-6 uppercase tracking-widest text-center font-serif">
              Bảng So Sánh Nhanh Top 5
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xl border-collapse font-sans">
                <thead className="text-gray-500 uppercase tracking-widest text-xs border-b border-gray-800">
                  <tr>
                    <th className="py-6 pr-4">Model</th>
                    <th className="py-6 px-4">Máy</th>
                    <th className="py-6 px-4 text-white">Kính</th>
                    <th className="py-6 px-4">Chống nước</th>
                    <th className="py-6 pl-4">Giá tham khảo</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800 text-lg">
                  <tr>
                    <td className="py-6 font-serif">Orient Bambino</td>
                    <td className="py-6">Cơ Automatic</td>
                    <td className="py-6 text-white">Kính khoáng cong</td>
                    <td className="py-6">5ATM</td>
                    <td className="py-6 font-bold">3,5 – 4,5 triệu</td>
                  </tr>
                  <tr>
                    <td className="py-6 font-serif">Seiko Presage</td>
                    <td className="py-6">Cơ Automatic</td>
                    <td className="py-6 text-white">Sapphire</td>
                    <td className="py-6">10ATM</td>
                    <td className="py-6 font-bold">4 – 5 triệu</td>
                  </tr>
                  <tr>
                    <td className="py-6 font-serif">Citizen BI5010</td>
                    <td className="py-6">Quartz Miyota</td>
                    <td className="py-6 text-white">Kính khoáng</td>
                    <td className="py-6">5ATM</td>
                    <td className="py-6 font-bold">2,5 – 3,5 triệu</td>
                  </tr>
                  <tr>
                    <td className="py-6 font-serif">SRWATCH SG1077</td>
                    <td className="py-6">Quartz Miyota</td>
                    <td className="py-6 text-white font-bold">Sapphire</td>
                    <td className="py-6">5ATM</td>
                    <td className="py-6 font-bold">1,8 – 2,5 triệu</td>
                  </tr>
                  <tr>
                    <td className="py-6 font-serif">Casio MTP-V006L</td>
                    <td className="py-6">Quartz MIYOTA</td>
                    <td className="py-6 text-white">Kính khoáng</td>
                    <td className="py-6">3ATM</td>
                    <td className="py-6 font-bold">700K – 900K</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-12 text-gray-400 font-serif italic text-lg text-center">
              "Tốt nhất về chất liệu tổng thể" → Seiko Presage. "Tốt nhất về giá
              trị/tiền" → SRWATCH SG1077.
            </div>
          </section>

          {/* --- FAQ SECTION --- */}
          <section className="mb-24 py-16 border-y border-gray-100 font-sans">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 font-serif uppercase">
              Câu Hỏi Thường Gặp (FAQ)
            </h2>
            <div className="space-y-12 text-xl md:text-2xl text-gray-700">
              <div className="space-y-4">
                <h4 className="font-bold text-gray-900 font-serif uppercase">
                  Đồng hồ nam dưới 5 triệu có đáng mua không?
                </h4>
                <p>
                  Hoàn toàn đáng mua — nhưng với điều kiện bạn chọn đúng. Ở phân
                  khúc 2–5 triệu, bạn đã tiếp cận được kính Sapphire chống trầy,
                  vỏ thép 316L chống ăn mòn và bộ máy Nhật Bản bền bỉ — ba yếu
                  tố tạo nên sự khác biệt thực sự về chất lượng dài hạn. Nâng
                  lên 10–15 triệu, bạn chủ yếu được thêm thương hiệu, độ hoàn
                  thiện tinh xảo hơn và máy cơ chất lượng cao hơn — không phải
                  cải thiện đột biến về chức năng cơ bản. Với người mua lần đầu,
                  tầm 3–5 triệu là vùng "sweet spot" tốt nhất.
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="font-bold text-gray-900 font-serif uppercase">
                  Nên chọn đồng hồ cơ (Automatic) hay đồng hồ Quartz?
                </h4>
                <p>
                  Phụ thuộc vào lối sống và ưu tiên của bạn. Đồng hồ cơ
                  Automatic (như Orient Bambino, Seiko Presage) phù hợp nếu bạn
                  đeo đồng hồ hàng ngày liên tục, thích cảm giác "bộ máy sống",
                  và chấp nhận sai số ±20–40 giây/ngày cùng bảo dưỡng định kỳ
                  3–5 năm/lần tốn 500K–2 triệu. Đồng hồ Quartz (Citizen,
                  SRWATCH, Casio MTP) phù hợp nếu bạn cần độ chính xác cao (±15
                  giây/tháng), không muốn bảo dưỡng phức tạp, đeo không thường
                  xuyên, hoặc ngân sách hạn chế. Cả hai đều là lựa chọn đúng đắn
                  — không có "đúng sai" tuyệt đối.
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="font-bold text-gray-900 font-serif uppercase">
                  Mua đồng hồ ở đâu để chắc chắn là hàng chính hãng?
                </h4>
                <p>
                  Ưu tiên theo thứ tự: (1) Website và showroom chính thức của
                  hãng (orient-watch.vn, seikowatches.com/vn…); (2) Các chuỗi
                  bán lẻ ủy quyền uy tín như Hải Triều, WatchStore, Xwatch,
                  Galle Watch — những nơi có hợp đồng đại lý chính thức và chính
                  sách bảo hành rõ ràng; (3) Gian hàng chính hãng được xác nhận
                  trên Shopee/Tiki/Lazada (tích xanh "Chính hãng"). Tránh mua từ
                  tài khoản cá nhân không rõ nguồn gốc, dù giá hấp dẫn đến đâu.
                  Dấu hiệu cảnh báo: giá thấp hơn thị trường 40%+, không có thẻ
                  bảo hành, không xuất được hóa đơn.
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="font-bold text-gray-900 font-serif uppercase">
                  Kính Sapphire có thực sự quan trọng không?
                </h4>
                <p>
                  Quan trọng thật — nhưng không phải yếu tố duy nhất. Kính
                  Sapphire có độ cứng 9/10 trên thang Mohs (chỉ thua kim cương),
                  gần như không thể bị xước trong sinh hoạt hàng ngày. So với
                  kính khoáng (độ cứng ~6), sự khác biệt rõ nhất sau 1–2 năm
                  đeo: mặt kính Sapphire vẫn trong suốt, kính khoáng bắt đầu có
                  các vết xước li ti nhìn dưới ánh sáng. Nếu ngân sách cho phép,
                  ưu tiên chọn mẫu có Sapphire — đặc biệt quan trọng với đồng hồ
                  bạn đeo hàng ngày đi làm.
                </p>
              </div>
            </div>
          </section>

          {/* --- READ MORE SECTION --- */}
          <section className="mb-16 py-12 border-t border-gray-100 pt-12">
            <div className="space-y-4">
              <Link
                to={ARTICLE_ROUTES.AUTOMATIC.path}
                className="font-sans text-lg text-gray-400 uppercase tracking-widest italic inline-block hover:text-gray-600 transition-colors"
              >
                🔗 Đọc thêm: [Máy Cơ Automatic Là Gì?]
              </Link>
              <br />
              <Link
                to={ARTICLE_ROUTES.CASIO_VS_SRWATCH.path}
                className="font-sans text-lg text-gray-400 uppercase tracking-widest italic inline-block hover:text-gray-600 transition-colors"
              >
                🔗 Đọc thêm: [Casio MTP vs SRWATCH Timepiece TE]
              </Link>
              <br />
              <Link
                to={ARTICLE_ROUTES.CACH_CHON_DONG_HO.path}
                className="font-sans text-lg text-gray-400 uppercase tracking-widest italic inline-block hover:text-gray-600 transition-colors"
              >
                🔗 Đọc thêm: [Cách Chọn Đồng Hồ Nam]
              </Link>
              <br />
              <Link
                to={ARTICLE_ROUTES.DANH_GIA_SRWATCH.path}
                className="font-sans text-lg text-gray-400 uppercase tracking-widest italic inline-block hover:text-gray-600 transition-colors"
              >
                🔗 Đọc thêm: [Đánh Giá SRWATCH SG1077]
              </Link>
            </div>
          </section>

          <footer className="mt-24 pt-10 text-gray-400 italic text-lg border-t border-gray-50 font-sans leading-relaxed text-center">
            <p className="mb-4 uppercase tracking-[0.2em] font-bold text-xs">
              — Thông tin từ Tòa soạn —
            </p>
            Giá tham khảo được cập nhật đầu năm 2025 tại thị trường Việt Nam và
            có thể biến động theo chương trình khuyến mãi. Kiểm tra giá thực tế
            tại đại lý trước khi mua.
          </footer>
        </article>
      </main>
    </>
  );
};

export default Top5DongHoNamDuoi5Trieu;
