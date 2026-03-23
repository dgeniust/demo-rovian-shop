import { LayoutDashboard, UsersRound, Settings, Package } from "lucide-react";
export const NavbarAdmin = () => {
  const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard },
    { name: "Products", icon: Package, active: true },
    { name: "Categories", icon: LayoutDashboard },
    { name: "Orders", icon: Package },
    { name: "Customers", icon: UsersRound },
    { name: "Settings", icon: Settings },
  ];

  return (
    <aside className="fixed top-16 left-0 bottom-0 w-64 bg-white border-r border-gray-200 p-4 space-y-2 z-40 pt-6">
      {menuItems.map((item) => (
        <a
          key={item.name}
          href="#"
          className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${item.active ? "bg-blue-50 text-blue-600" : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"}`}
        >
          <item.icon className="w-5 h-5" />
          {item.name}
        </a>
      ))}
    </aside>
  );
};
