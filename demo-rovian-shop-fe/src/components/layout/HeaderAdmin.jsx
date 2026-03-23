import { Bell, MessageSquare, Search } from "lucide-react";
import logo from "../../assets/blackHorizontal_final.png";
export const HeaderAdmin = () => (
  <header className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 z-50 flex items-center justify-between px-6">
    <div className="flex items-center gap-2">
      <img src={logo} alt="Logo" className="h-8" />
    </div>

    <div className="flex items-center gap-4">
      <div className="relative w-64">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input
          type="search"
          placeholder="Search products..."
          className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-lg bg-gray-50 focus:ring-1 focus:ring-blue-500"
        />
      </div>
      <button className="text-gray-500 hover:text-blue-600 p-1.5 rounded-full bg-gray-50 border border-gray-200">
        <MessageSquare size={18} />
      </button>
      <button className="text-gray-500 hover:text-blue-600 p-1.5 rounded-full bg-gray-50 border border-gray-200">
        <Bell size={18} />
      </button>
      <div className="flex items-center gap-2 border-l pl-4 border-gray-200">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/019/194/935/small/global-admin-icon-color-outline-vector.jpg"
          alt="Admin"
          className="w-9 h-9 rounded-full object-cover"
        />
        <div>
          <div className="text-sm font-semibold text-gray-900">Admin</div>
        </div>
      </div>
    </div>
  </header>
);
