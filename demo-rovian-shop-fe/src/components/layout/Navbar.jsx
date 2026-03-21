import { Link, useLocation } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

const Navbar = () => {
  const location = useLocation();

  const navLinks = [
    { name: "Lookbook", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full flex justify-between items-center px-8 py-6 z-50 bg-transparent hover:bg-black/80 transition-all duration-300">
      <Link to="/" className="text-3xl tracking-tighter font-semibold">
        ROVIAN
      </Link>

      <nav className="hidden md:flex items-center space-x-8 text-sm uppercase tracking-[0.2em]">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`transition-opacity hover:opacity-100 ${
              location.pathname === link.path
                ? "border-b border-white pb-1"
                : "opacity-60"
            }`}
          >
            {link.name}
          </Link>
        ))}

        <div className="flex items-center space-x-2 cursor-pointer ml-4">
          <ShoppingCart size={18} />
          <span className="text-xs">0</span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
