// Article Links Configuration
// Quản lý tất cả các liên kết giữa các bài viết

export const ARTICLE_ROUTES = {
  AUTOMATIC: {
    title: "Máy Cơ Automatic Là Gì?",
    path: "/kien-thuc/may-co-automatic-la-gi",
  },
  TOP5_DUOI_5_TRIEU: {
    title: "Top 5 Đồng Hồ Nam Dưới 5 Triệu",
    path: "/kien-thuc/top-5-dong-ho-nam-tot-nhat-duoi-5-trieu-2025",
  },
  CACH_CHON_DONG_HO: {
    title: "Cách Chọn Đồng Hồ Nam",
    path: "/kien-thuc/cach-chon-dong-ho-nam",
  },
  DANH_GIA_SRWATCH: {
    title: "Đánh Giá SRWATCH SG1077",
    path: "/kien-thuc/danh-gia-srwatch-nam-SG1077-1101TE",
  },
  CASIO_VS_SRWATCH: {
    title: "Casio MTP vs SRWATCH Timepiece TE",
    path: "/kien-thuc/casio-mtp-vs-srwatch-timepiece-te",
  },
};

// Article Read More Links Mapping
// Ánh xạ "Đọc thêm" từ một bài viết đến bài viết khác
export const READ_MORE_LINKS = {
  // AutomaticWatchArticle read more links
  TOP5_DUOI_5_TRIEU: ARTICLE_ROUTES.TOP5_DUOI_5_TRIEU,
  CACH_CHON_DONG_HO: ARTICLE_ROUTES.CACH_CHON_DONG_HO,
  DANH_GIA_SRWATCH: ARTICLE_ROUTES.DANH_GIA_SRWATCH,
};

export default ARTICLE_ROUTES;
