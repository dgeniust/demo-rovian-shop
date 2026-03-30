import React, { useEffect, useState } from "react";
import { X, ExternalLink, Calendar, Clock, ImageIcon } from "lucide-react";
import productService from "../services/productService";

const ProductDetailModal = ({ isOpen, onClose, product }) => {
  if (!isOpen || !product) return null;
  console.log("Product details:", JSON.stringify(product));
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("vi-VN").format(amount || 0);
  };

  const formatDate = (dateString) => {
    if (!dateString) return "---";
    return new Intl.DateTimeFormat("vi-VN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date(dateString));
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 font-sans">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-slate-900/20 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative bg-white/95 backdrop-blur-xl rounded-[28px] shadow-2xl w-full max-w-2xl overflow-hidden border border-white/50 animate-in fade-in zoom-in duration-300">
        {/* Header */}
        <div className="px-6 py-5 flex justify-between items-center border-b border-slate-100/50">
          <div className="flex items-center gap-2">
            <span className="text-[15px] font-semibold text-slate-800">
              Product Details
            </span>
            <span className="px-2 py-0.5 bg-slate-100 text-slate-500 rounded-md text-[12px] font-mono font-medium">
              #{product.id}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600 rounded-lg transition-colors cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="p-8 space-y-7 max-h-[80vh] overflow-y-auto custom-scrollbar">
          {/* MEDIA SECTION */}
          <div className="space-y-4">
            <label className="text-[12px] font-bold text-slate-400 uppercase tracking-widest px-1">
              Visuals
            </label>
            <div className="bg-slate-50/50 border border-slate-100 p-5 rounded-2xl flex flex-col md:flex-row gap-6 items-start">
              {/* Main Image */}
              <div className="flex flex-col items-center gap-2 w-full md:w-auto">
                <span className="text-[11px] font-bold text-slate-500 uppercase">
                  Main Image
                </span>
                <div className="w-32 h-32 bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm flex items-center justify-center">
                  {product.image_url ? (
                    <img
                      src={product.image_url}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <ImageIcon size={32} className="text-slate-300" />
                  )}
                </div>
              </div>

              <div className="hidden md:block w-px h-32 bg-slate-200"></div>

              {/* Gallery Images */}
              <div className="flex flex-col gap-2 flex-1 w-full">
                <span className="text-[11px] font-bold text-slate-500 uppercase">
                  Gallery Images
                </span>
                <div className="flex flex-wrap gap-3">
                  {product.expand_images && product.expand_images.length > 0 ? (
                    product.expand_images.map((src, index) => (
                      <div
                        key={index}
                        className="relative w-20 h-20 rounded-xl border border-slate-200 overflow-hidden shadow-sm"
                      >
                        <img
                          src={src}
                          alt={`Gallery ${index + 1}`}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                    ))
                  ) : (
                    <span className="text-[13px] text-slate-400 italic py-2">
                      Không có ảnh phụ
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* INFO SECTION */}
          <div className="space-y-4">
            {/* Name */}
            <div className="flex items-start gap-3 group">
              <span className="text-[14px] text-slate-400 min-w-[80px] pt-1">
                Name
              </span>
              <div className="flex-1 text-[16px] font-semibold text-slate-800 pt-1 leading-tight">
                {product.name || "---"}
              </div>
            </div>
            <div className="h-[1px] bg-slate-100 w-full" />

            {/* Price */}
            <div className="flex items-center gap-3">
              <span className="text-[14px] text-slate-400 min-w-[80px]">
                Price
              </span>
              <div className="flex-1">
                <span className="inline-block px-4 py-2 bg-green-50 text-green-700 rounded-xl font-bold text-[15px] border border-green-100">
                  {formatCurrency(product.price)}
                  <span className="text-[11px] opacity-70 ml-1">VND</span>
                </span>
              </div>
            </div>
            <div className="h-[1px] bg-slate-100 w-full" />

            {/* Redirect Link */}
            <div className="flex items-center gap-3">
              <span className="text-[14px] text-slate-400 min-w-[80px]">
                Link
              </span>
              <div className="flex-1">
                {product.url_redirect ? (
                  <a
                    href={product.url_redirect}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-[14px] text-blue-500 hover:text-blue-600 hover:underline font-medium break-all"
                  >
                    <ExternalLink size={14} />
                    {product.url_redirect}
                  </a>
                ) : (
                  <span className="text-[14px] text-slate-400 italic">
                    Không có link
                  </span>
                )}
              </div>
            </div>
            <div className="h-[1px] bg-slate-100 w-full" />

            {/* Description */}
            <div className="flex items-start gap-3">
              <span className="text-[14px] text-slate-400 min-w-[80px] pt-3">
                Description
              </span>
              <div className="flex-1 bg-[#F4F4F5]/50 px-4 py-3 rounded-xl border border-slate-100">
                <p className="text-[14px] text-slate-600 whitespace-pre-wrap leading-relaxed">
                  {product.description || (
                    <span className="italic text-slate-400">
                      Không có mô tả
                    </span>
                  )}
                </p>
              </div>
            </div>
            <div className="h-[1px] bg-slate-100 w-full" />

            {/* Timestamps */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 bg-slate-50/50 p-4 rounded-xl border border-slate-100 mt-2">
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-slate-400" />
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-slate-400 uppercase">
                    Created at
                  </span>
                  <span className="text-[13px] font-medium text-slate-700">
                    {formatDate(product.created_date)}
                  </span>
                </div>
              </div>
              <div className="hidden sm:block w-px h-8 bg-slate-200"></div>
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-slate-400" />
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-slate-400 uppercase">
                    Updated at
                  </span>
                  <span className="text-[13px] font-medium text-slate-700">
                    {formatDate(product.updated_date)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end p-6 border-t border-slate-100/50 bg-white">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-slate-900 text-white rounded-full text-[14px] font-bold hover:bg-slate-800 transition-all active:scale-95 shadow-lg shadow-slate-200 cursor-pointer"
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailModal;
