import { useNavigate } from "react-router-dom";

export default function ProductCard({ product }) {
  const navigate = useNavigate();
  const handleRedirect = (id) => {
    // Ngăn chặn sự kiện click lan ra ngoài nếu click vào nút con
    navigate(`/detail/${id || product?.id}`);
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("vi-VN").format(amount || 0) + "đ";
  };

  return (
    <div
      className="group cursor-pointer w-full"
      onClick={() => handleRedirect(product?.id)}
    >
      {/* Khối chứa ảnh - Cắt bỏ bo tròn, nền tối xám kim loại */}
      <div className="relative aspect-[4/5] mb-5 overflow-hidden flex items-center justify-center transition-all duration-700 border border-zinc-800/50 rounded-none bg-zinc-900/30 hover:bg-zinc-900/50">
        {/* Glow Effects */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-1000 ease-out z-0 scale-50 group-hover:scale-150" />
        <div className="absolute w-40 h-40 bg-zinc-600/10 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0" />

        {/* Ảnh sản phẩm - Thêm bóng đổ nam tính */}
        <img
          src={product?.image_url}
          alt={product?.name}
          className="w-[75%] h-auto object-contain z-10 transition-transform duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-110 drop-shadow-[0_15px_25px_rgba(0,0,0,0.5)]"
        />

        {/* --- NÚT MUA NGAY (Trượt lên khi hover) - Trắng/Đen tương phản mạnh --- */}
        <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-30">
          <button
            className="w-full bg-white/95 backdrop-blur-md text-black py-4 text-[12px] font-black uppercase tracking-[0.3em] hover:bg-white transition-colors shadow-[0_-10px_20px_rgba(0,0,0,0.5)] cursor-pointer"
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
        <h3 className="text-[13px] md:text-[14px] font-bold tracking-[0.15em] uppercase leading-tight text-zinc-300 group-hover:text-white transition-colors duration-300 line-clamp-2">
          {product?.name}
        </h3>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-1">
          <p className="text-[14px] text-zinc-400 font-medium tracking-[0.05em]">
            {formatCurrency(product?.price)}
          </p>
          {/* Link giả nhỏ bên dưới cho bản mobile */}
          <span className="text-[10px] text-zinc-600 uppercase tracking-widest font-semibold border-b border-zinc-700 w-fit mx-auto md:mx-0 group-hover:text-zinc-400 group-hover:border-zinc-500 transition-colors">
            View Details
          </span>
        </div>
      </div>
    </div>
  );
}
