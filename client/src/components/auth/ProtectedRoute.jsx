import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const role = localStorage.getItem("role");
  const clientId = localStorage.getItem("clientId");

  if (role !== "CLIENT" || !clientId) {
    return <Navigate to="/client/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
