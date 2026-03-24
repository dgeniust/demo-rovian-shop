import { Outlet } from "react-router-dom";
import { HeaderAdmin } from "./HeaderAdmin";
import { NavbarAdmin } from "./NavbarAdmin";

const AdminLayout = () => (
  <div className="flex flex-col h-screen w-screen overflow-hidden bg-[#f9fafb]">
    {/* Header: Cố định độ cao */}
    <header className="z-20 shrink-0 border-b border-gray-200 bg-white">
      <HeaderAdmin />
    </header>

    <div className="flex flex-1 overflow-hidden">
      {/* Sidebar: Cố định chiều rộng, tự cuộn nếu menu quá dài */}
      <aside className="w-64 border-r border-gray-200 bg-white overflow-y-auto hidden md:block">
        <NavbarAdmin />
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Vùng cuộn nội dung */}
        <div className="flex-1 overflow-y-auto p-2 lg:p-4 custom-scrollbar">
          <div className="max-w-[1600px] mx-auto mt-12">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  </div>
);

export default AdminLayout;
