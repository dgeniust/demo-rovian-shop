export default function ProductCard({ product }) {
  return (
    <div className="group cursor-pointer w-full">
      {/* Khối chứa ảnh: Nền xám cực nhẹ để làm nổi bật sản phẩm */}
      <div className="relative aspect-[4/5] bg-[#F9F9F9] mb-6 overflow-hidden flex items-center justify-center transition-all duration-500 group-hover:bg-[#F2F2F2]">
        {/* Layer Blur nhẹ ở trung tâm tạo chiều sâu */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 bg-[radial-gradient(circle,_rgba(255,255,255,0.8)_0%,_transparent_70%)] z-0" />

        {/* --- Tag chất liệu (Góc trái trên) --- */}
        <div className="absolute top-4 left-4 z-20">
          <span className="text-[9px] font-bold tracking-[0.15em] uppercase border-[0.5px] border-black/20 px-2.5 py-1 rounded-full bg-white/50 backdrop-blur-md">
            {product.color}
          </span>
        </div>

        {/* --- Tag kích thước (Góc phải trên) --- */}
        <div className="absolute top-4 right-4 z-20">
          <span className="text-[9px] font-bold tracking-[0.15em] uppercase border-[0.5px] border-black/20 px-2.5 py-1 rounded-full bg-white/50 backdrop-blur-md">
            {product.size || "40mm"}
          </span>
        </div>

        {/* --- Ảnh sản phẩm --- */}
        <img
          src={product.img}
          alt={product.name}
          className="w-[80%] h-auto object-contain z-10 transition-transform duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-110"
        />

        {/* --- Nút "Quick View" xuất hiện khi hover (Tinh tế) --- */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-black/5 backdrop-blur-sm py-3 text-center z-20">
          <span className="text-[10px] uppercase tracking-widest font-bold">
            Discover
          </span>
        </div>
      </div>

      {/* --- Thông tin sản phẩm --- */}
      <div className="space-y-1 px-1">
        <h3 className="text-[11px] font-bold tracking-[0.2em] uppercase leading-tight text-gray-900">
          {product.name}
        </h3>
        <p className="text-[10px] text-gray-400 font-medium tracking-wide">
          {product.price}
        </p>
      </div>
    </div>
  );
}
