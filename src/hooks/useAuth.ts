import { useContext } from "react";
import { AuthContext } from "../context/auth-context/AuthContext";

export const useAuth = () => {
  const { authState, login, logout } = useContext(AuthContext);
  return { authState, login, logout };
};