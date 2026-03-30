import React, { useState, useEffect } from "react";
import { ShoppingBag, ChevronRight, Phone, MessageCircle } from "lucide-react";
import productService from "../../services/productService";

const ProductDetail = ({ productId }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeImg, setActiveImg] = useState(0);

  const fetchProductDetails = async (id) => {
    try {
      const res = await productService.detailProduct(id);
      console.log("Product details response:", JSON.stringify(res));
      if (res) {
        setSelectedProduct(res);
      } else {
        console.error("Failed to fetch product details:", res.message);
      }
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  };

  useEffect(() => {
    if (productId) {
      fetchProductDetails(productId);
    }
  }, [productId]);

  const contactLinks = {
    zalo: "https://zalo.me/0xxxxxxxxx",
    messenger: "https://m.me/yourfacebookpage",
  };

  const product = selectedProduct
    ? {
        name: selectedProduct.name || "No Name",
        price: selectedProduct.price || 0,
        originalPrice: selectedProduct.price || 0, // Assuming no originalPrice
        description: selectedProduct.description || "No Description",
        sku: selectedProduct.id || "",
        category: "Product", // Assuming no category
        images: selectedProduct.image_url
          ? [
              selectedProduct.image_url,
              ...(selectedProduct.expand_images || []),
            ]
          : selectedProduct.expand_images || [],
        url_redirect: selectedProduct.url_redirect || "",
      }
    : {
        name: "Loading...",
        price: 0,
        originalPrice: 0,
        description: "Loading...",
        sku: "",
        category: "",
        images: [],
        url_redirect: "",
      };

  const formatPrice = (num) =>
    new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(num);
  const handleOpenURL = (url) => {
    window.open(url, "_blank");
  };
  return (
    <section className="max-w-7xl mx-auto px-4 py-12 lg:py-20 bg-[#fafafa] min-h-screen font-sans selection:bg-rose-100">
      {/* Breadcrumb nhỏ xinh */}
      <nav className="flex items-center space-x-2 text-[11px] uppercase tracking-[0.2em] text-gray-400 mb-10">
        <a href="/" className="hover:text-black transition">
          Trang chủ
        </a>
        <ChevronRight size={10} />
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* LEFT: Gallery - Thiết kế thoáng đãng */}
        <div className="lg:col-span-7 flex flex-col md:flex-row-reverse gap-4">
          {/* Main Image */}
          <div className="flex-1 bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 group">
            <div className="aspect-[4/5] relative flex items-center justify-center p-8">
              <img
                src={product.images[activeImg]}
                alt={product.name}
                className="w-full h-full object-contain mix-blend-multiply transition-transform duration-700 ease-out group-hover:scale-110"
              />
            </div>
          </div>

          {/* Thumbnails - Chuyển sang dọc trên desktop để tiết kiệm không gian */}
          <div className="flex md:flex-col gap-3 w-full md:w-20 overflow-x-auto pb-2 md:pb-0">
            {product.images.map((img, index) => (
              <button
                key={index}
                onClick={() => setActiveImg(index)}
                className={`relative flex-shrink-0 w-20 h-20 md:w-full aspect-square rounded-xl border-2 transition-all duration-300 overflow-hidden ${
                  activeImg === index
                    ? "border-rose-400 shadow-md"
                    : "border-transparent opacity-60 hover:opacity-100 bg-white"
                }`}
              >
                <img
                  src={img}
                  className="w-full h-full object-cover"
                  alt="thumb"
                />
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT: Info - Typography tinh tế */}
        <div className="lg:col-span-5 space-y-8 text-left">
          <div className="space-y-4">
            <h1 className="text-4xl font-light text-gray-900 leading-tight">
              {product.name}
            </h1>
            <div className="flex items-baseline gap-4">
              <span className="text-3xl font-medium text-rose-500">
                {formatPrice(product.price)}
              </span>
              {/* <span className="text-gray-400 line-through text-sm">
                {formatPrice(product.originalPrice)}
              </span> */}
            </div>
          </div>

          <div className="h-[1px] w-full bg-gradient-to-r from-gray-200 to-transparent"></div>

          <p className="text-gray-500 leading-relaxed font-light text-[15px]">
            {product.description}
          </p>

          {/* Action Area */}
          <div className="space-y-6 pt-4">
            <div className="grid grid-cols-2 gap-4">
              <button
                className="bg-white border border-black text-black py-4 rounded-full font-medium hover:bg-black hover:text-white transition-all active:scale-95 shadow-sm"
                onClick={() => {
                  handleOpenURL(product.url_redirect);
                }}
              >
                Mua ngay
              </button>
            </div>
          </div>

          {/* Contact & Trust */}
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-5">
            <div className="relative">
              <input
                type="text"
                placeholder="Số điện thoại nhận tư vấn..."
                className="w-full bg-gray-50 border-none rounded-xl py-4 pl-4 pr-32 text-sm focus:ring-2 focus:ring-rose-200 outline-none transition"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-rose-500 text-white px-5 rounded-lg text-[11px] font-bold uppercase hover:bg-rose-600 transition">
                Gửi ngay
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {/* Messenger Button */}
              <a
                href={contactLinks.messenger}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 p-3 bg-white border border-neutral-100 rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-50 hover:border-blue-100"
              >
                <div className="w-12 h-12 flex-shrink-0 bg-blue-50 rounded-xl p-2 group-hover:bg-white transition-colors">
                  <img
                    src="https://www.computerhope.com/jargon/f/facebook-messenger.png"
                    alt="Messenger"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest leading-none mb-1">
                    Facebook
                  </span>
                  <span className="text-sm font-black text-slate-800 tracking-tight group-hover:text-blue-600 transition-colors">
                    Messenger
                  </span>
                </div>
              </a>

              {/* Zalo Button */}
              <a
                href={contactLinks.zalo}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 p-3 bg-white border border-neutral-100 rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-sky-50 hover:border-sky-100"
              >
                <div className="w-12 h-12 flex-shrink-0 bg-sky-50 rounded-xl p-2 group-hover:bg-white transition-colors">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Icon_of_Zalo.svg/960px-Icon_of_Zalo.svg.png"
                    alt="Zalo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest leading-none mb-1">
                    Kênh chính thức
                  </span>
                  <span className="text-sm font-black text-slate-800 tracking-tight group-hover:text-sky-600 transition-colors">
                    Zalo Chat
                  </span>
                </div>
              </a>
            </div>
          </div>

          <div className="flex gap-8 text-[10px] text-gray-400 uppercase tracking-[0.15em]">
            <p>
              SKU: <span className="text-black ml-1">{product.sku}</span>
            </p>
            <p>
              Category:{" "}
              <span className="text-black ml-1">{product.category}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
