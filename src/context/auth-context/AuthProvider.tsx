import { useState } from "react";
import { AuthContext } from "./AuthContext";

export interface AuthState {
  jwt: string | null;
  username: string | null;
  role: string | null;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [authState, setAuthState] = useState<AuthState>({
    jwt: null,
    username: null,
    role: null,
  });

  const login = (email: string, password: string, role: string) => {
    if (email && password) {
      setAuthState({
        jwt: "jwt",
        username: email,
        role: role,
      });
      sessionStorage.setItem("jwt", "jwt");
    }
  };

  const logout = () => {
    setAuthState({
      jwt: null,
      username: null,
      role: null,
    });
    sessionStorage.removeItem("jwt");
  };

  return (
    <AuthContext.Provider value={{ authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
