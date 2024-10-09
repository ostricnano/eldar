import { useState } from "react";
import { AuthContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";

export interface AuthState {
  jwt: string | null;
  username: string | null;
  role: string | null;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const navigate = useNavigate();
  const [authState, setAuthState] = useState<AuthState>({
    jwt: null,
    username: null,
    role: null,
  });
  const login = (email: string, password: string, role: string) => {
    const jwToken = "jwt-fake-token";
    if (email && password) {
      setAuthState({
        jwt: jwToken,
        username: email,
        role: role,
      });
      sessionStorage.setItem("jwt", jwToken);
      sessionStorage.setItem("username", email);
      sessionStorage.setItem("role", role);
    }
  };

  const logout = () => {
    setAuthState({
      jwt: null,
      username: null,
      role: null,
    });
    sessionStorage.removeItem("jwt");
    navigate("/");

  };

    

  return (
    <AuthContext.Provider value={{ authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
