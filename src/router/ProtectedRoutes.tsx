import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const ProtectedRoutes = () => {
  const { authState } = useAuth();
  if (!authState.jwt) {
    return <Navigate to="/" />;
  }
  if (authState.role !== "admin" && authState.jwt) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoutes;
