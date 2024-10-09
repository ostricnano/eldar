import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const ProtectedRoutes = () => {
  const { authState } = useAuth();

  // Indicador de carga mientras el estado de autenticación se restaura
  if (authState.jwt === null) {
    return <div>Loading...</div>;
  }

  // Si no hay token, redirige al login
  if (!authState.jwt) {
    return <Navigate to="/" />;
  }

  // Si el rol no es admin, redirige (podrías redirigir a una página de acceso denegado)
  if (authState.role !== "admin") {
    return <Navigate to="/" replace />;
  }

  // Si todo está correcto, renderiza las rutas hijas
  return <Outlet />;
};

export default ProtectedRoutes;

