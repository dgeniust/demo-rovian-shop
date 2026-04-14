import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Bạn có thể chuyển mảng này thành API call qua service (VD: articleService.getFeatured())
const mockArticles = [
  {
    id: 1,
    title: "Máy Cơ Automatic Là Gì? Nguyên Lý, Cấu Tạo & Lưu Ý Sử Dụng",
    excerpt:
      "Máy cơ Automatic là gì? Giải thích nguyên lý rotor, cách hoạt động, ưu nhược điểm và lưu ý sử dụng đúng cách cho người mới.",
    date: "14 Thg 04, 2026",
    category: "Chuyên Đề",
    imageUrl:
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=2080&auto=format&fit=crop",
    link: "/kien-thuc/may-co-automatic-la-gi",
  },
  {
    id: 2,
    title: "Top 5 Đồng Hồ Nam Tốt Nhất Dưới 5 Triệu 2025 – Đánh Giá Thực Tế",
    excerpt:
      "Top 5 đồng hồ nam dress watch dưới 5 triệu 2025: tiêu chí rõ ràng, thông số thực tế, giá tham khảo. Chọn đúng ngay lần đầu.",
    date: "10 Thg 04, 2026",
    category: "Di Sản",
    imageUrl:
      "https://images.unsplash.com/photo-1490367532201-b9bc1dc483f6?q=80&w=2070&auto=format&fit=crop",
    link: "/kien-thuc/top-5-dong-ho-nam-tot-nhat-duoi-5-trieu-2025",
  },
  {
    id: 3,
    title: "Cách Chọn Đồng Hồ Nam Phù Hợp – Hướng Dẫn Từ A–Z (2025)",
    excerpt:
      "Chưa biết cách chọn đồng hồ nam? Hướng dẫn từ A–Z: nhu cầu, ngân sách, phong cách, thương hiệu & nơi mua uy tín tại VN.",
    date: "05 Thg 04, 2026",
    category: "Xu Hướng",
    imageUrl:
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=1983&auto=format&fit=crop",
    link: "/kien-thuc/cach-chon-dong-ho-nam",
  },
  {
    id: 4,
    title:
      "Đồng Hồ SRWatch Nam SG1077.1101TE – Đánh Giá Chi Tiết Từ Chuyên Gia",
    excerpt:
      "Bạn đang tìm một chiếc đồng hồ nam vừa đẹp, vừa bền, vừa không 'đau ví' — nhưng vẫn toát lên phong thái chỉn chu mỗi khi đi làm hay dự tiệc? Đồng hồ SRWatch nam dòng Timepiece TE, cụ thể là model SG1077.1101TE",
    date: "05 Thg 04, 2026",
    category: "Xu Hướng",
    imageUrl:
      "https://cdn.vuahanghieu.com/unsafe/0x900/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/product/2025/07/dong-ho-nam-srwatch-sg1905-1101te-mau-den-bac-6877603ec5e7b-16072025151806.jpg",
    link: "/kien-thuc/danh-gia-srwatch-nam-SG1077-1101TE",
  },
  {
    id: 5,
    title: "Casio MTP vs SRWATCH Timepiece TE: Nên Mua Loại Nào? (2025)",
    excerpt:
      "So sánh Casio MTP và SRWATCH Timepiece TE: thông số, chất liệu, giá & kết luận rõ ràng cho người mua lần đầu tại Việt Nam.",
    date: "05 Thg 04, 2026",
    category: "Đánh giá",
    imageUrl:
      "https://orient-watch.vn/wp-content/uploads/2025/02/so-sanh-dong-ho-co-va-dong-ho-pin-1-min.jpg",
    link: "/kien-thuc/casio-mtp-vs-srwatch-timepiece-te",
  },
];

const FeaturedArticles = () => {
  const navigate = useNavigate();
  const [articles, setArticles] = useState([]);

  // Tương tự component sản phẩm, dùng useEffect để fetch data bài viết (ở đây dùng mock data)
  useEffect(() => {
    // Giả lập gọi API
    const fetchArticles = () => {
      setArticles(mockArticles);
    };
    fetchArticles();
  }, []);

  return (
    <section className="py-24 bg-[#0a0a0a] overflow-hidden relative text-white">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* --- HEADER SECTION --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-12 h-[1px] bg-zinc-600"></span>
              <span className="text-sm md:text-base leading-relaxed tracking-[0.2em] md:tracking-[0.3em] text-zinc-400 font-medium whitespace-nowrap uppercase">
                Câu Chuyện Thương Hiệu
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-['Roboto_Slab'] font-[350] tracking-tighter text-white italic leading-tight">
              Tạp Chí{" "}
              <span className="not-italic text-zinc-500">Thời Gian</span>
            </h2>
          </div>

          <div className="flex flex-col items-start md:items-end">
            <p className="text-zinc-500 max-w-[320px] mb-4 md:text-right text-sm md:text-base leading-relaxed font-light">
              "Khám phá những câu chuyện cảm hứng đằng sau từng cỗ máy thời gian
              và xu hướng nghệ thuật chế tác đỉnh cao."
            </p>
            <button
              className="group flex items-center gap-2 text-sm md:text-base leading-relaxed tracking-[0.2em] md:tracking-[0.3em] text-zinc-400 font-medium whitespace-nowrap uppercase hover:text-white transition-colors cursor-pointer"
              onClick={() => navigate("/blog")}
            >
              Xem Tất Cả Bài Viết
              <span className="w-6 h-[1px] bg-zinc-600 group-hover:bg-white group-hover:w-10 transition-all duration-500"></span>
            </button>
          </div>
        </div>

        {/* --- ARTICLES GRID --- */}
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-12">
          {articles.map((article) => (
            <article
              key={article.id}
              className="group flex flex-col cursor-pointer animate-in fade-in slide-in-from-bottom-8 duration-1000"
              onClick={() => navigate(article.link)}
            >
              {/* Image Container with Hover Zoom */}
              <div className="relative overflow-hidden aspect-[4/3] w-full mb-6">
                <img
                  src={article.imageUrl}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Article Info */}
              <div className="flex flex-col flex-grow">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs tracking-widest text-zinc-300 uppercase font-medium">
                    {article.category}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-zinc-600"></span>
                  <span className="text-xs tracking-wider text-zinc-500">
                    {article.date}
                  </span>
                </div>

                <h3 className="text-2xl font-['Roboto_Slab'] font-light text-white mb-3 leading-snug group-hover:text-zinc-300 transition-colors">
                  {article.title}
                </h3>

                <p className="text-zinc-400 text-sm leading-relaxed mb-6 line-clamp-3">
                  {article.excerpt}
                </p>

                {/* Read More Link (Push to bottom if excerpt is short) */}
                <div className="mt-auto flex items-center gap-2 text-xs tracking-[0.2em] text-white uppercase">
                  Đọc tiếp
                  <span className="w-4 h-[1px] bg-white group-hover:w-8 transition-all duration-300"></span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* --- DECORATIVE TEXT --- */}
      <div className="absolute top-1/2 left-0 w-full overflow-hidden pointer-events-none opacity-[0.02] select-none z-0 -translate-y-1/2 mt-24">
        <span className="text-[15vw] font-black uppercase tracking-tighter whitespace-nowrap text-white">
          JOURNAL ROVIAN JOURNAL
        </span>
      </div>
    </section>
  );
};

export default FeaturedArticles;
