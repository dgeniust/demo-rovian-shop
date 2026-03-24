export default function ProductCard({ product }) {
  const handleRedirect = (e) => {
    // Ngăn chặn sự kiện click lan ra ngoài nếu click vào nút con (nếu cần)
    if (product.url_redirect) {
      window.open(product.url_redirect, "_blank");
    }
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("vi-VN").format(amount || 0) + "đ";
  };

  return (
    <div className="group cursor-pointer w-full" onClick={handleRedirect}>
      {/* Khối chứa ảnh */}
      <div className="relative aspect-[4/5] bg-[#fffafb] mb-5 overflow-hidden flex items-center justify-center transition-all duration-700 border border-rose-50/50 group-hover:bg-[#fdf2f4] rounded-2xl">
        {/* Glow Effects (Giữ nguyên của bạn) */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-1000 ease-out bg-[radial-gradient(circle,_rgba(251,113,133,0.15)_0%,_transparent_70%)] z-0 scale-50 group-hover:scale-150" />
        <div className="absolute w-32 h-32 bg-rose-200/20 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0" />

        {/* Ảnh sản phẩm */}
        <img
          src={product.image_url}
          alt={product.name}
          className="w-[75%] h-auto object-contain z-10 transition-transform duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-110"
        />

        {/* --- NÚT MUA NGAY (Trượt lên khi hover) --- */}
        <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-30">
          <button
            className="w-full bg-rose-400/90 backdrop-blur-md text-white py-4 text-[12px] font-black uppercase tracking-[0.3em] hover:bg-rose-500 transition-colors shadow-[0_-10px_20px_rgba(0,0,0,0.05)] cursor-pointer"
            onClick={(e) => {
              e.stopPropagation(); // Ngăn click vào div cha
              handleRedirect();
            }}
          >
            Mua Ngay
          </button>
        </div>
      </div>

      {/* Thông tin sản phẩm */}
      <div className="space-y-2 px-1 text-center md:text-left">
        <h3 className="text-[13px] md:text-[14px] font-bold tracking-[0.15em] uppercase leading-tight text-stone-800 group-hover:text-rose-600 transition-colors duration-300 line-clamp-2">
          {product.name}
        </h3>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-1">
          <p className="text-[14px] text-rose-500 font-bold tracking-[0.05em]">
            {formatCurrency(product.price)}
          </p>
          {/* Link giả nhỏ bên dưới cho bản mobile */}
          <span className="text-[10px] text-stone-400 uppercase tracking-widest font-semibold border-b border-stone-200 w-fit mx-auto md:mx-0">
            View Details
          </span>
        </div>
      </div>
    </div>
  );
}
