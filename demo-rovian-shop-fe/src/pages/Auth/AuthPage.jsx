import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import authService from "../../services/authService";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleLogin = async () => {
    try {
      const data = await authService.login(email, password);
      console.log("Thành công:", data);
      if (data) {
        localStorage.setItem("access_token", data.access_token);
        navigate("/admin");
      }
    } catch (err) {
      console.error("Lỗi:", err);
    }
  };
  return (
    <div className="w-full min-h-screen flex justify-center items-center ">
      <div className="w-full max-w-md bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-8">
          {/* Tab Switcher */}
          <div className="flex justify-center mb-4">
            <div className="flex bg-gray-50 p-1 rounded-xl">
              <h1 className="font-bold text-2xl text-red-400">ADMIN</h1>
            </div>
          </div>
          {/* Input Fields */}
          <div className="space-y-5">
            <div className="text-start">
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Email address
              </label>
              <input
                type="email"
                placeholder="Enter your email address"
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all placeholder:text-gray-400"
              />
            </div>

            <div className="text-start">
              <label className="text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="relative">
                <input
                  // Thay đổi type ở đây: nếu showPassword là true thì hiện 'text', ngược lại hiện 'password'
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all placeholder:text-gray-400"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
                </button>
              </div>
            </div>
          </div>

          {/* Login Button */}
          <button
            className="w-full mt-8 bg-[#1a1c1e] hover:bg-black text-white py-3.5 rounded-xl font-semibold transition-all shadow-lg active:scale-[0.98]"
            onClick={handleLogin}
          >
            Log In
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
