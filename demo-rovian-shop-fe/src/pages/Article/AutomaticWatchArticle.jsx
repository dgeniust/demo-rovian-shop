import React from "react";
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
          name: "Your Watch Blog",
          logo: {
            "@type": "ImageObject",
            url: "/assets/black-crowd.png",
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
              text: "Chính xác, nhưng không bằng Quartz. Máy cơ Automatic phổ thông có sai số từ ±20 đến ±45 giây/ngày. Các máy cao cấp đạt chuẩn Chronometer (như Rolex, Omega) có thể giảm xuống ±2–5 giây/ngày. So sánh: đồng hồ Quartz chỉ sai ±15 giây/tháng. Với người dùng thông thường, sai số của máy cơ Automatic hoàn toàn chấp nhận được trong sinh hoạt hàng ngày.",
            },
          },
          {
            "@type": "Question",
            name: "Nên đeo đồng hồ cơ Automatic bao nhiêu tiếng mỗi ngày?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Tối thiểu 8 tiếng/ngày để rotor tạo đủ năng lượng duy trì hoạt động. Hầu hết đồng hồ Automatic có trữ cót từ 40–48 giờ (một số máy cao cấp lên tới 70–120 giờ), nghĩa là nếu bạn tháo ra ban đêm, đồng hồ vẫn chạy đến sáng hôm sau mà không cần đeo liên tục.",
            },
          },
          {
            "@type": "Question",
            name: "Đồng hồ cơ Automatic bao lâu cần bảo dưỡng một lần?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Khuyến nghị 3–5 năm/lần — bao gồm tháo máy, vệ sinh toàn bộ linh kiện, tra dầu bôi trơn mới và hiệu chỉnh lại độ chính xác. Chi phí bảo dưỡng đồng hồ Nhật tầm trung dao động từ 500.000 đến 1.500.000 đồng tại các trung tâm uy tín. Bỏ qua bảo dưỡng khiến dầu khô làm tăng ma sát, ảnh hưởng cả độ chính xác lẫn tuổi thọ bộ máy.",
            },
          },
          {
            "@type": "Question",
            name: "Hacking Stop là gì và tại sao quan trọng?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Hacking Stop (hay Hacking Second) là tính năng dừng kim giây lại khi bạn kéo núm đồng hồ ra để chỉnh giờ. Tính năng này cho phép đặt giờ chính xác đến từng giây bằng cách đồng bộ kim giây về vị trí '00' rồi thả núm ra đúng lúc.",
            },
          },
        ],
      },
    ],
  };
  useEffect(() => {
    // Đợi 1 giây để đảm bảo Helmet đã gắn xong thẻ Meta, rồi mới cho Prerender chụp
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
          content="máy cơ automatic, đồng hồ cơ tự động, rotor, hacking stop, ROVIAN"
        />

        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Máy Cơ Automatic Là Gì? Nguyên Lý & Lưu Ý Sử Dụng"
        />
        <meta
          property="og:description"
          content="Khám phá nguyên lý hoạt động của đồng hồ cơ tự động..."
        />
        <meta
          property="og:image"
          content="https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=2080&auto=format&fit=crop"
        />
        <meta
          property="og:url"
          content="https://www.rovianwatch.com/kien-thuc/may-co-automatic-la-gi"
        />

        <link
          rel="canonical"
          href="https://www.rovianwatch.com/kien-thuc/may-co-automatic-la-gi"
        />
      </Helmet>

      <main className="max-w-4xl mx-auto px-5 py-16 bg-white mt-10 text-left font-serif">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />

        <article>
          {/* Header */}
          <header className="mb-16 border-b border-gray-900 pb-12">
            <span className="text-xs font-bold tracking-[0.25em] text-gray-500 uppercase mb-5 block">
              Từ Điển Horology
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 leading-tight mb-8">
              Máy Cơ Automatic Là Gì? Giải Mã Trái Tim Cơ Khí Đích Thực
            </h1>
            <div className="flex items-center text-xs text-gray-500 font-sans tracking-widest uppercase">
              <span className="font-bold text-gray-900">
                Ban Biên Tập ROVIAN
              </span>
              <span className="mx-3">|</span>
              <time dateTime="2026-04-14">Kiến thức chuyên sâu</time>
            </div>
          </header>

          {/* Intro */}
          <div className="prose prose-xl prose-stone max-w-none font-serif text-gray-800 leading-relaxed mb-16">
            <p className="first-letter:text-7xl first-letter:font-serif first-letter:font-bold first-letter:text-gray-900 first-letter:mr-3 first-letter:float-left first-letter:leading-none">
              Trong thế giới của những bánh răng và con lắc, máy cơ Automatic
              (hay đồng hồ cơ tự động) được coi là biểu tượng nguyên thủy và
              thuần túy nhất của nghệ thuật chế tác đồng hồ. Nó là loại cỗ máy
              hoạt động hoàn toàn bằng năng lượng cơ học — không dùng pin, không
              chứa linh kiện điện tử và không cần bạn phải thao tác lên dây cót
              thủ công mỗi ngày.
            </p>
            <p>
              Thay vào đó, một bộ phận kim loại hình bán nguyệt tinh xảo gọi là{" "}
              <strong>rotor</strong>
              sẽ tự động xoay theo từng nhịp chuyển động nơi cổ tay người đeo,
              từ đó nạp năng lượng liên tục cho đồng hồ. Đây chính là chuẩn mực
              của kỹ thuật đồng hồ học (horology) hiện đại.
            </p>

            <blockquote className="border-l-4 border-gray-900 pl-8 py-3 my-12 text-2xl font-serif italic text-gray-700 bg-gray-50">
              Công thức cốt lõi: Automatic = Bộ máy cơ khí truyền thống + Rotor
              tự động lên cót + Năng lượng từ chính bạn.
            </blockquote>
          </div>

          {/* Section 1: Definition */}
          <section className="my-20 prose prose-xl prose-stone max-w-none font-serif text-gray-800 leading-relaxed">
            <h2 className="text-2xl font-bold font-sans uppercase tracking-widest text-gray-900 mb-8 border-b-2 border-gray-900 inline-block pb-2 not-prose">
              1. Định Nghĩa & Sự Khác Biệt
            </h2>
            <p>
              Trong ngôn ngữ chuyên ngành, thuật ngữ "Automatic" ám chỉ cơ chế
              tự động nạp cót mà không yêu cầu sự can thiệp thủ công từ người
              dùng. Sự nâng cấp này tạo ra lằn ranh rõ rệt với{" "}
              <strong>đồng hồ cơ thủ công (Hand-winding / Manual)</strong>, nơi
              mà người đeo phải duy trì thói quen vặn núm lên cót theo chu kỳ.
            </p>
            <p>
              Một cỗ máy Automatic thông thường được lắp ráp từ 100 đến 300 chi
              tiết vi cơ khí. Ở những tuyệt tác "Haute Horlogerie" mang các tính
              năng siêu phức tạp (Grand Complication), con số này có thể lên đến
              hàng ngàn. Tất cả đều giao ngàm và chuyển động với sai số được
              tính bằng phần trăm milimet.
            </p>

            <h3 className="text-xl font-bold text-gray-900 font-sans uppercase tracking-wide mt-12 mb-4">
              Sự Đối Lập Giữa Automatic và Quartz
            </h3>
            <p>
              Căn nguyên của sự khác biệt nằm ở nguồn năng lượng và cách đong
              đếm thời gian:
            </p>
            <ul className="list-none pl-0 space-y-4 my-6 font-sans text-base">
              <li className="relative pl-6 before:content-['—'] before:absolute before:left-0 before:text-gray-400">
                <strong className="text-gray-900 block mb-1">
                  Đồng hồ Quartz:
                </strong>
                Dùng pin để kích thích tinh thể thạch anh dao động. Đạt độ chính
                xác tuyệt đối (sai số ±15 giây/tháng) nhưng thiếu đi giá trị cơ
                khí nghệ thuật.
              </li>
              <li className="relative pl-6 before:content-['—'] before:absolute before:left-0 before:text-gray-400">
                <strong className="text-gray-900 block mb-1">
                  Đồng hồ Automatic:
                </strong>
                Sống bằng năng lượng dây cót. Sai số nằm trong khoảng ±15 đến
                ±45 giây/ngày tùy mức độ hoàn thiện, nhưng mang trong mình linh
                hồn của lịch sử chế tác.
              </li>
            </ul>

            <div className="border border-gray-200 p-6 my-12 font-sans bg-white not-prose">
              <span className="font-bold text-gray-900 uppercase tracking-widest text-xs mb-2 block">
                Nghiên Cứu Chuyên Sâu
              </span>
              <a
                href="/dong-ho-quartz-la-gi"
                className="text-gray-600 hover:text-gray-900 font-medium underline underline-offset-4"
              >
                Đồng hồ Quartz là gì? Bản đối chiếu chi tiết với cỗ máy
                Automatic
              </a>
            </div>
          </section>

          {/* Section 2: Mechanism */}
          <section className="my-20 prose prose-xl prose-stone max-w-none font-serif text-gray-800 leading-relaxed">
            <h2 className="text-2xl font-bold font-sans uppercase tracking-widest text-gray-900 mb-8 border-b-2 border-gray-900 inline-block pb-2 not-prose">
              2. Chu Trình Năng Lượng Chuyển Động
            </h2>
            <p>
              Để dễ hình dung nhất, hãy mường tượng về một dây lò xo bị cuộn
              chặt lại, và sức mạnh bung tỏa từ từ của nó khi giãn ra chính là
              thứ vận hành các kim đồng hồ. Chu trình này diễn ra khép kín qua 4
              giai đoạn:
            </p>

            <ol className="list-decimal pl-6 space-y-6 my-10 marker:font-sans marker:font-bold marker:text-gray-400">
              <li>
                <strong className="text-gray-900 font-sans tracking-wide">
                  NẠP NĂNG LƯỢNG:
                </strong>
                Quán tính từ cử động cổ tay khiến{" "}
                <span className="font-bold">Rotor</span> (bánh đà hình bán
                nguyệt) xoay quanh trục trung tâm.
              </li>
              <li>
                <strong className="text-gray-900 font-sans tracking-wide">
                  TÍCH TRỮ TẠI HỘP CÓT:
                </strong>
                Chuyển động của rotor sẽ cuộn chặt dây cót (Mainspring) nằm bên
                trong hộp cót. Một chiếc đồng hồ đầy cót có thể dự trữ năng
                lượng chạy liên tục từ 40 đến 80 giờ.
              </li>
              <li>
                <strong className="text-gray-900 font-sans tracking-wide">
                  ĐIỀU TIẾT QUA BỘ THOÁT:
                </strong>
                Bộ thoát (Escapement) đóng vai trò như một van khóa tinh vi,
                giải phóng năng lượng từ hộp cót theo từng nhịp ngắt quãng đều
                đặn (tiếng "tích tắc" bạn thường nghe).
              </li>
              <li>
                <strong className="text-gray-900 font-sans tracking-wide">
                  HIỂN THỊ THỜI GIAN:
                </strong>
                Năng lượng được kiểm soát này tiếp tục truyền qua hệ thống bánh
                răng (Gear Train), chuyển hóa thành vòng quay của kim giây, kim
                phút và kim giờ.
              </li>
            </ol>

            <div className="border border-gray-200 p-6 my-12 font-sans bg-white not-prose">
              <span className="font-bold text-gray-900 uppercase tracking-widest text-xs mb-2 block">
                Nghiên Cứu Chuyên Sâu
              </span>
              <a
                href="/cac-bo-phan-dong-ho"
                className="text-gray-600 hover:text-gray-900 font-medium underline underline-offset-4"
              >
                Giải phẫu giải phẫu học chi tiết các bộ phận của đồng hồ đeo tay
              </a>
            </div>
          </section>

          {/* Section 3: Pros and Cons */}
          <section className="my-24">
            <h2 className="text-2xl font-bold font-sans uppercase tracking-widest text-gray-900 mb-12 border-b-2 border-gray-900 inline-block pb-2">
              3. Đánh Giá: Tinh Hoa & Chấp Nhận
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 font-sans mb-8">
              {/* Pros */}
              <div className="border-t border-gray-900 pt-6">
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-6">
                  Tinh Hoa Chế Tác
                </h3>
                <ul className="list-none pl-0 space-y-4 text-gray-900 text-base font-medium">
                  <li className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:bg-gray-900 before:rounded-full">
                    Sống hoàn toàn bằng năng lượng cơ học, loại bỏ sự phụ thuộc
                    vào pin.
                  </li>
                  <li className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:bg-gray-900 before:rounded-full">
                    Sở hữu kim trôi (sweeping second hand) mượt mà lướt trên mặt
                    số, không bị giật từng nhịp như Quartz.
                  </li>
                  <li className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:bg-gray-900 before:rounded-full">
                    Giá trị sưu tầm, kế thừa và tính nghệ thuật vô giá.
                  </li>
                  <li className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:bg-gray-900 before:rounded-full">
                    Độ bền vượt thời gian (có thể hoạt động hàng thập kỷ nếu
                    được lau dầu đúng cách).
                  </li>
                </ul>
              </div>

              {/* Cons */}
              <div className="border-t border-gray-400 pt-6">
                <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-6">
                  Giới Hạn Cần Chấp Nhận
                </h3>
                <ul className="list-none pl-0 space-y-4 text-gray-800 text-base">
                  <li className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1 before:h-1 before:bg-gray-400 before:rounded-full">
                    Độ chính xác không tuyệt đối (sai số tự nhiên từ vài giây
                    đến vài chục giây mỗi ngày).
                  </li>
                  <li className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1 before:h-1 before:bg-gray-400 before:rounded-full">
                    Cần sự tương tác: Sẽ ngừng hoạt động nếu không được đeo sau
                    khi xả hết năng lượng trữ cót.
                  </li>
                  <li className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1 before:h-1 before:bg-gray-400 before:rounded-full">
                    Đòi hỏi chế độ bảo dưỡng (lau dầu, căn chỉnh) định kỳ mỗi
                    3–5 năm.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 4: FAQ */}
          <section className="my-20">
            <h2 className="text-2xl font-bold font-sans uppercase tracking-widest text-gray-900 mb-8 border-b-2 border-gray-900 inline-block pb-2">
              Hỏi – Đáp Từ Chuyên Gia
            </h2>

            <div className="divide-y divide-gray-200 font-sans border-t border-b border-gray-900">
              <details className="group py-6 cursor-pointer">
                <summary className="font-bold text-lg text-gray-900 list-none flex justify-between items-center outline-none">
                  Máy cơ Automatic có cần thay pin không?
                  <span className="text-2xl text-gray-400 group-open:rotate-45 transition-transform duration-300 font-light">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed pr-8 text-base">
                  Không. Đây chính là nguyên lý cốt lõi của cỗ máy này. Không có
                  pin, không có vi mạch. Năng lượng được tái tạo liên tục từ
                  chính những chuyển động của bạn trong đời sống thường nhật.
                </p>
              </details>

              <details className="group py-6 cursor-pointer">
                <summary className="font-bold text-lg text-gray-900 list-none flex justify-between items-center outline-none">
                  Nên đeo đồng hồ bao nhiêu tiếng mỗi ngày để không bị chết máy?
                  <span className="text-2xl text-gray-400 group-open:rotate-45 transition-transform duration-300 font-light">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed pr-8 text-base">
                  Khuyến nghị tối thiểu là 8 tiếng mỗi ngày đối với một người có
                  mức độ vận động bình thường. Với thời lượng này, bộ cót sẽ
                  được nạp đủ năng lượng (thường là 40 giờ trữ cót) để chiếc
                  đồng hồ có thể tiếp tục hoạt động mượt mà khi bạn tháo ra đi
                  ngủ vào ban đêm.
                </p>
              </details>

              <details className="group py-6 cursor-pointer">
                <summary className="font-bold text-lg text-gray-900 list-none flex justify-between items-center outline-none">
                  Hacking Stop là gì và tại sao lại quan trọng?
                  <span className="text-2xl text-gray-400 group-open:rotate-45 transition-transform duration-300 font-light">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed pr-8 text-base">
                  Hacking Stop (Hacking Second) là cơ chế hãm bánh xe cân bằng,
                  khiến kim giây dừng lại hoàn toàn khi bạn kéo núm vặn ra để
                  chỉnh giờ. Tính năng này đóng vai trò quan trọng, cho phép bạn
                  đồng bộ hóa thời gian chính xác đến từng giây với các nguồn
                  tham chiếu (như đồng hồ nguyên tử hoặc smartphone).
                </p>
              </details>

              <details className="group py-6 cursor-pointer">
                <summary className="font-bold text-lg text-gray-900 list-none flex justify-between items-center outline-none">
                  Bỏ qua bảo dưỡng định kỳ có sao không?
                  <span className="text-2xl text-gray-400 group-open:rotate-45 transition-transform duration-300 font-light">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed pr-8 text-base">
                  Dầu bôi trơn trong đồng hồ cơ sẽ khô và biến chất sau khoảng
                  3–5 năm. Nếu không bảo dưỡng, sự ma sát giữa các bánh răng kim
                  loại sẽ tăng lên, dẫn đến mài mòn linh kiện nghiêm trọng và
                  làm sai lệch hoàn toàn khả năng đong đếm thời gian của cỗ máy.
                </p>
              </details>
            </div>
          </section>

          {/* Footer Note */}
          <div className="mt-16 pt-8 border-t border-gray-200 text-left">
            <p className="font-sans text-[10px] text-gray-400 uppercase tracking-wider mb-2">
              — Thông tin từ Tòa soạn —
            </p>
            <p className="font-sans text-xs text-gray-500 leading-relaxed max-w-md">
              Tài liệu tham khảo chuyên ngành Horology (2025). ROVIAN là nhà
              phân phối và chia sẻ kiến thức chuẩn xác về nghệ thuật chế tác
              đồng hồ cao cấp.
            </p>
          </div>
        </article>
      </main>
    </>
  );
};

export default AutomaticWatchArticle;
