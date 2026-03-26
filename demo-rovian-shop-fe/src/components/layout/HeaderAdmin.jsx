import React, { useState, useRef, useEffect } from "react";
import {
  Bell,
  MessageSquare,
  Search,
  LogOut,
  User,
  Settings,
  House,
} from "lucide-react";
import { useNavigate } from "react-router-dom"; // Giả sử bạn dùng react-router
import logo from "../../assets/blackHorizontal_final.png";

export const HeaderAdmin = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  // Đóng dropdown khi click ra ngoài vùng menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    navigate("/auth");
  };
  const handleNavigateHomePage = () => {
    localStorage.removeItem("access_token");
    navigate("/");
  };

  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-100 z-[100] flex items-center justify-between px-8">
      {/* Logo Section */}
      <div className="flex items-center gap-2">
        <img src={logo} alt="Logo" className="h-7" />
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {/* Search Bar - Tinh chỉnh giao diện cho đồng bộ với Table */}
        <div className="relative hidden md:block w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="search"
            placeholder="Search everything..."
            className="w-full pl-10 pr-4 py-2 text-sm border-none rounded-2xl bg-slate-50 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all placeholder:text-slate-400"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 pr-2">
          <button className="text-slate-500 hover:text-orange-600 p-2.5 rounded-xl hover:bg-orange-50 transition-all">
            <MessageSquare size={20} />
          </button>
          <button className="text-slate-500 hover:text-orange-600 p-2.5 rounded-xl hover:bg-orange-50 transition-all relative">
            <Bell size={20} />
            <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
          </button>
        </div>

        {/* User Profile Dropdown */}
        <div
          className="relative border-l pl-4 border-slate-100"
          ref={dropdownRef}
        >
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className={`flex items-center gap-3 p-1.5 rounded-[18px] transition-all hover:bg-slate-50 cursor-pointer ${
              isDropdownOpen ? "bg-slate-50" : ""
            }`}
          >
            <div className="relative">
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/019/194/935/small/global-admin-icon-color-outline-vector.jpg"
                alt="Admin"
                className="w-9 h-9 rounded-[14px] object-cover border-2 border-white shadow-sm"
              />
              <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
            </div>
            <div className="hidden lg:block text-left">
              <div className="text-sm font-bold text-slate-900 leading-tight">
                Admin
              </div>
              <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                Superuser
              </div>
            </div>
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-3 w-56 bg-white rounded-[24px] shadow-[0_20px_40px_rgba(0,0,0,0.1)] border border-slate-50 p-2 animate-in fade-in zoom-in duration-200 origin-top-right">
              <div className="px-4 py-3 border-b border-slate-50 mb-1">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                  Account Info
                </p>
                <p className="text-sm font-semibold text-slate-700 truncate">
                  admin@gmail.com
                </p>
              </div>

              <button className="w-full flex items-center gap-3 px-4 py-3 text-sm font-bold text-slate-600 hover:bg-slate-50 hover:text-slate-900 rounded-[16px] transition-all cursor-pointer">
                <User size={18} className="text-slate-400" />
                Profile Details
              </button>

              <button
                onClick={handleNavigateHomePage}
                className="w-full flex items-center gap-3 px-4 py-3 text-sm font-bold text-slate-600 hover:bg-slate-50 hover:text-slate-900 rounded-[16px] transition-all cursor-pointer"
              >
                <House size={18} className="text-slate-400" />
                Homepage
              </button>

              <hr className="my-1 border-slate-50" />

              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-3 px-4 py-3 text-sm font-bold text-red-500 hover:bg-red-50 rounded-[16px] transition-all cursor-pointer"
              >
                <LogOut size={18} />
                Sign Out
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
