import React, { useState, useEffect } from "react";
import { ShoppingBag, ChevronRight, Phone, MessageCircle } from "lucide-react";
import productService from "../../services/productService";
import fb from "../../assets/fb.png";
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
    zalo: "https://zalo.me/0708110906",
    messenger:
      "https://www.facebook.com/profile.php?id=61578455405363&locale=vi_VN",
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

        {/* RIGHT: Info - Redesigned Layout */}
        <div className="lg:col-span-5 flex flex-col text-left">
          {/* HEADER SECTION - Name & Price */}
          <div className="pb-8 border-b border-gray-200">
            <h1 className="text-4xl font-light text-gray-900 leading-tight mb-6">
              {product.name}
            </h1>
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.2em] text-gray-400 font-medium">
                Giá
              </p>
              <span className="text-4xl font-semibold text-rose-500">
                {formatPrice(product.price)}
              </span>
            </div>
          </div>

          {/* DESCRIPTION SECTION */}
          <div className="py-8 border-b border-gray-200">
            <p className="text-xs uppercase tracking-[0.2em] text-gray-400 font-medium mb-4">
              Mô tả sản phẩm
            </p>
            <p className="text-gray-700 leading-relaxed font-light text-base">
              {product.description}
            </p>
          </div>

          {/* DETAILS SECTION */}
          <div className="py-8 border-b border-gray-200 space-y-4">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-gray-400 font-medium mb-2">
                Danh mục
              </p>
              <p className="text-gray-800 font-light">{product.category}</p>
            </div>
          </div>

          {/* ACTION BUTTON */}
          <div className="py-8 border-b border-gray-200">
            <button
              className="w-full bg-black text-white py-4 rounded-lg font-medium hover:bg-gray-800 transition-all active:scale-95 tracking-wide uppercase text-sm"
              onClick={() => {
                handleOpenURL(product.url_redirect);
              }}
            >
              Mua ngay
            </button>
          </div>

          {/* CONTACT SECTION */}
          <div className="py-8 space-y-6">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-gray-400 font-medium mb-4">
                Liên hệ tư vấn
              </p>
              <div className="space-y-3">
                {/* Messenger */}
                <a
                  href={contactLinks.messenger}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between p-4 border-l-4 border-blue-400 bg-blue-50 hover:bg-blue-100 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 flex-shrink-0 p-1.5">
                      <img
                        src={fb}
                        alt="Messenger"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-semibold text-blue-600">
                        Facebook Messenger
                      </span>
                      <span className="text-[11px] text-gray-500">
                        Hỗ trợ 24/7
                      </span>
                    </div>
                  </div>
                  <span className="text-gray-400">→</span>
                </a>

                {/* Zalo */}
                <a
                  href={contactLinks.zalo}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between p-4 border-l-4 border-sky-400 bg-sky-50 hover:bg-sky-100 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 flex-shrink-0 p-1.5">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Icon_of_Zalo.svg/960px-Icon_of_Zalo.svg.png"
                        alt="Zalo"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-semibold text-sky-600">
                        Zalo Official
                      </span>
                      <span className="text-[11px] text-gray-500">
                        Phản hồi nhanh
                      </span>
                    </div>
                  </div>
                  <span className="text-gray-400">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
