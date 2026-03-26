import React, { useState } from "react";
import {
  X,
  Trash2,
  AlertCircle,
  Loader2,
  Paperclip,
  Clock,
  FileText,
  User,
  Sparkles,
  Send,
} from "lucide-react";

const DeleteConfirmModal = ({ isOpen, onClose, onConfirm, product }) => {
  const [loading, setLoading] = useState(false);

  if (!isOpen || !product) return null;

  const handleConfirm = async () => {
    setLoading(true);
    await onConfirm(product.id);
    setLoading(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-6 font-sans">
      {/* Overlay với độ mờ nhẹ theo style ảnh */}
      <div
        className="absolute inset-0 bg-slate-200/40 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container - Bo góc 24px và Shadow cực mềm */}
      <div className="relative bg-white/90 backdrop-blur-xl rounded-[24px] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] w-full max-w-lg overflow-hidden border border-white/40">
        {/* Header - Minimalist */}
        <div className="px-6 py-5 flex justify-between items-center">
          <h3 className="text-[17px] font-semibold text-slate-800">
            Xác nhận xóa
          </h3>
          <div className="flex gap-2">
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        <div className="px-8 pb-8 space-y-6">
          {/* Nội dung chính */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              Xóa "{product.name}"?
            </h2>

            <p className="text-[15px] text-slate-500 leading-relaxed">
              Bạn đang thực hiện xóa sản phẩm này. Hành động này sẽ loại bỏ hoàn
              toàn dữ liệu khỏi hệ thống và không thể khôi phục lại.
            </p>
          </div>

          {/* Item hiển thị dạng Card giống phần Attachment trong ảnh */}
          <div className="flex items-center gap-3 p-3 bg-[#F4F4F5]/60 rounded-2xl border border-slate-200/50">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm border border-slate-100">
              {product.image_url ? (
                <img
                  src={product.image_url}
                  alt=""
                  className="w-full h-full rounded-xl object-cover"
                />
              ) : (
                <FileText className="text-slate-400" size={20} />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[14px] font-medium text-slate-700 truncate">
                {product.name}
              </p>
              <p className="text-[12px] text-slate-400 uppercase tracking-wide">
                ID: {product.id}
              </p>
            </div>
          </div>

          {/* Bottom Bar - Style giống thanh công cụ email */}
          <div className="flex items-center justify-between pt-4">
            <button
              onClick={onClose}
              className="px-5 py-2.5 text-[14px] font-semibold text-slate-600 hover:bg-slate-100 rounded-full transition-all"
            >
              Hủy
            </button>

            {/* Nút Ask AI và Send phối hợp */}
            <div className="flex items-center gap-1">
              <button
                onClick={handleConfirm}
                disabled={loading}
                className="flex items-center gap-2 px-6 py-2.5 bg-black text-white rounded-full text-[14px] font-semibold hover:bg-zinc-800 transition-all active:scale-95 disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed"
              >
                {loading ? (
                  <Loader2 className="animate-spin" size={18} />
                ) : (
                  <>
                    <span>Xác nhận</span>
                    <Send size={16} className="rotate-[45deg]" />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;
