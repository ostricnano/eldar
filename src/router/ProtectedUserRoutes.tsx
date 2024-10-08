import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const ProtectedUserRoutes = () => {
  const { authState } = useAuth();
  if (!authState.jwt) {
    return <Navigate to="/" />;
  }
  if (authState.role !== "user" && authState.jwt) {
    return <Navigate to="/" replace />;
  }

  return (
  <Outlet />
);
};

export default ProtectedUserRoutes;