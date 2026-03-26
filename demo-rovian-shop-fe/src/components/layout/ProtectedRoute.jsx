import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  // Kiểm tra token trong localStorage
  const token = localStorage.getItem("access_token");

  if (!token) {
    return <Navigate to="/auth" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
