export default function ProductCard({ product }) {
  return (
    <div className="group cursor-pointer w-full">
      {/* Khối chứa ảnh: Nền hồng kem cực nhạt để đồng bộ Sakura Atelier */}
      <div className="relative aspect-[4/5] bg-[#fffafb] mb-6 overflow-hidden flex items-center justify-center transition-all duration-700 border border-rose-50/50 group-hover:bg-[#fdf2f4]">
        {/* --- HIỆU ỨNG BLUR HỒNG PHÍA SAU (Sakura Glow) --- */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-1000 ease-out 
          bg-[radial-gradient(circle,_rgba(251,113,133,0.15)_0%,_transparent_70%)] z-0 scale-50 group-hover:scale-150"
        />

        {/* Thêm một lớp glow phụ sát tâm ảnh để tạo độ rực nhẹ */}
        <div className="absolute w-32 h-32 bg-rose-200/20 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0" />

        {/* --- Tag thông tin (Góc trái/phải) --- */}
        <div className="absolute top-4 left-4 z-20">
          <span className="text-[9px] font-bold tracking-[0.15em] uppercase border-[0.5px] border-rose-200 px-2.5 py-1 rounded-full bg-white/80 text-stone-600 backdrop-blur-md">
            {product.color}
          </span>
        </div>

        <div className="absolute top-4 right-4 z-20">
          <span className="text-[9px] font-bold tracking-[0.15em] uppercase border-[0.5px] border-rose-200 px-2.5 py-1 rounded-full bg-white/80 text-stone-600 backdrop-blur-md">
            {product.size || "40mm"}
          </span>
        </div>

        {/* --- Ảnh sản phẩm (Scale và nổi bật trên nền glow) --- */}
        <img
          src={product.img}
          alt={product.name}
          className="w-[80%] h-auto object-contain z-10 transition-transform duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-110 group-hover:drop-shadow-[0_10px_20px_rgba(251,113,133,0.1)]"
        />

        {/* --- Nút "Discover" (Sakura Style) --- */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-rose-50/80 backdrop-blur-sm py-3 text-center z-20 border-t border-rose-100">
          <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-rose-600">
            Discover Details
          </span>
        </div>
      </div>

      {/* --- Thông tin sản phẩm --- */}
      <div className="space-y-1.5 px-1 text-center md:text-left">
        <h3 className="text-[12px] md:text-[12px] font-bold tracking-[0.2em] uppercase leading-tight text-stone-800 group-hover:text-rose-600 transition-colors duration-300">
          {product.name}
        </h3>
        <p className="text-[11px] text-rose-400 font-medium tracking-[0.1em] italic">
          {product.price}
        </p>
      </div>
    </div>
  );
}
