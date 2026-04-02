import React, { useState, useEffect } from "react";
import {
  ShoppingBag,
  ChevronRight,
  Phone,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import productService from "../../services/productService";
import clarityService from "../../services/clarityService";
import fb from "../../assets/fb.png";

const ProductDetail = ({ productId }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeImg, setActiveImg] = useState(0);

  const fetchProductDetails = async (id) => {
    try {
      const res = await productService.detailProduct(id);
      if (res) {
        setSelectedProduct(res);
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

  // Track product view with Clarity
  useEffect(() => {
    if (selectedProduct && selectedProduct.name) {
      clarityService.trackProductView({
        id: selectedProduct.id,
        sku: selectedProduct.id,
        name: selectedProduct.name,
        price: selectedProduct.price,
      });
    }
  }, [selectedProduct]);

  const contactLinks = {
    zalo: "https://zalo.me/0708110906",
    messenger:
      "https://www.facebook.com/profile.php?id=61578455405363&locale=vi_VN",
  };

  const product = selectedProduct
    ? {
        name: selectedProduct.name || "No Name",
        price: selectedProduct.price || 0,
        description: selectedProduct.description || "No Description",
        sku: selectedProduct.id || "",
        category: selectedProduct.category || "Tuyệt tác cơ khí",
        images: selectedProduct.image_url
          ? [
              selectedProduct.image_url,
              ...(selectedProduct.expand_images || []),
            ]
          : selectedProduct.expand_images || [],
        url_redirect: selectedProduct.url_redirect || "",
      }
    : {
        name: "Đang tải...",
        price: 0,
        description: "Đang tải dữ liệu từ xưởng chế tác...",
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
    // Track checkout/purchase initiation before opening URL
    if (product && product.name !== "Đang tải...") {
      clarityService.trackCheckoutInitiated({
        id: selectedProduct.id,
        sku: selectedProduct.id,
        name: product.name,
        price: product.price,
      });
    }
    window.open(url, "_blank");
  };

  return (
    <section className="bg-[#0a0a0a] text-white min-h-screen pt-24 pb-20 px-4 md:px-10 font-main selection:bg-zinc-700">
      {/* Breadcrumb */}
      <nav className="max-w-7xl mx-auto flex items-center space-x-2 text-xs md:text-sm leading-relaxed tracking-[0.1em] md:tracking-[0.2em] text-zinc-400 font-medium not-italic whitespace-nowrap uppercase mb-12">
        <a href="/" className="hover:text-white transition">
          Trang chủ
        </a>
        <ChevronRight size={10} />
        <span className="text-zinc-300">Chi tiết sản phẩm</span>
      </nav>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* LEFT: Gallery */}
        <div className="lg:col-span-7 flex flex-col md:flex-row-reverse gap-6">
          {/* Main Image Container */}
          <div className="flex-1 bg-zinc-900/30 border border-zinc-800 rounded-none overflow-hidden group">
            <div className="aspect-[4/5] relative flex items-center justify-center p-8 md:p-16">
              <img
                src={product.images[activeImg]}
                alt={product.name}
                className="w-full h-full object-contain transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-110 drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
              />
            </div>
          </div>

          {/* Thumbnails */}
          <div className="flex md:flex-col gap-4 w-full md:w-24 overflow-x-auto">
            {product.images.map((img, index) => (
              <button
                key={index}
                onClick={() => setActiveImg(index)}
                className={`relative flex-shrink-0 w-20 h-20 md:w-full aspect-square transition-all duration-500 rounded-none border ${
                  activeImg === index
                    ? "border-white bg-zinc-800 opacity-100"
                    : "border-zinc-800 opacity-40 hover:opacity-100 hover:border-zinc-600"
                }`}
              >
                <img
                  src={img}
                  className="w-full h-full object-cover"
                  alt="thumbnail"
                />
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT: Product Info */}
        <div className="lg:col-span-5 flex flex-col text-left space-y-10">
          {/* Title & Price */}
          <div className="space-y-6">
            <p className="text-sm md:text-base leading-relaxed tracking-[0.2em] md:tracking-[0.3em] text-zinc-400 font-medium not-italic whitespace-nowrap uppercase font-bold border-l-2 border-zinc-700 pl-4">
              Mã sản phẩm: {product.sku}
            </p>
            <h1 className="text-4xl md:text-5xl font-light leading-tight tracking-tight text-white uppercase">
              {product.name}
            </h1>
            <div className="pt-4">
              <span className="text-4xl font-bold tracking-tight text-white">
                {formatPrice(product.price)}
              </span>
            </div>
          </div>

          {/* Action Button */}
          <button
            className="w-full bg-white text-black py-4 rounded-none text-xs md:text-sm uppercase tracking-[0.4em] font-medium hover:bg-zinc-200 transition-all active:scale-[0.98] shadow-[0_0_30px_rgba(255,255,255,0.05)] cursor-pointer"
            onClick={() => handleOpenURL(product.url_redirect)}
          >
            Mua ngay
          </button>

          {/* Description */}
          <div className="space-y-4 pt-4">
            <h4 className="text-sm md:text-base leading-relaxed tracking-[0.2em] md:tracking-[0.3em] text-zinc-400 font-medium uppercase">
              Mô tả cỗ máy
            </h4>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-light">
              "{product.description}"
            </p>
          </div>

          {/* Attributes */}
          <div className="grid grid-cols-2 gap-8 py-8 border-t border-zinc-800">
            <div>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-light uppercase mb-2">
                Phân loại
              </p>
              <p className="text-white text-sm font-light uppercase tracking-wider">
                {product.category}
              </p>
            </div>
            <div>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-light uppercase mb-2">
                Tình trạng
              </p>
              <p className="text-white text-sm font-light uppercase tracking-wider">
                New Collection 2026
              </p>
            </div>
          </div>

          {/* Contact Support */}
          <div className="space-y-4">
            <p className="text-tag uppercase tracking-[0.3em] text-zinc-500 font-bold">
              Yêu cầu tư vấn chuyên gia
            </p>
            <div className="grid grid-cols-1 gap-3">
              {/* Messenger */}
              <a
                href={contactLinks.messenger}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between p-4 bg-zinc-900/50 border border-zinc-800 hover:border-zinc-500 transition-all"
              >
                <div className="flex items-center gap-4">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtMQRp6W8lmZFiCBVd_c-KEHnTSSQl2Udf3w&s"
                    alt="Messenger"
                    className="w- h-8 opacity-70 group-hover:opacity-100 transition-opacity"
                  />
                  <div className="flex flex-col">
                    <span className="text-[11px] font-bold text-white uppercase tracking-wider">
                      Facebook
                    </span>
                    <span className="text-zinc-500 text-xs md:text-sm leading-relaxed font-light">
                      Tư vấn qua Facebook
                    </span>
                  </div>
                </div>
                <ArrowRight
                  size={14}
                  className="text-zinc-700 group-hover:text-white transition-colors"
                />
              </a>

              {/* Zalo */}
              <a
                href={contactLinks.zalo}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between p-4 bg-zinc-900/50 border border-zinc-800 hover:border-zinc-500 transition-all"
              >
                <div className="flex items-center gap-4">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Icon_of_Zalo.svg/960px-Icon_of_Zalo.svg.png"
                    alt="Zalo"
                    className="w-8 h-8 opacity-70 group-hover:opacity-100 transition-opacity"
                  />
                  <div className="flex flex-col">
                    <span className="text-[11px] font-bold text-white uppercase tracking-wider">
                      Zalo Official
                    </span>
                    <span className="text-zinc-500 text-xs md:text-sm leading-relaxed font-light">
                      Phản hồi tức thì
                    </span>
                  </div>
                </div>
                <ArrowRight
                  size={14}
                  className="text-zinc-700 group-hover:text-white transition-colors"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
