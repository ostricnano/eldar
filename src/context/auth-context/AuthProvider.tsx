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

interface User {
  email: string;
  password: string;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const navigate = useNavigate();
  const [authState, setAuthState] = useState<AuthState>({
    jwt: null,
    username: null,
    role: null,
  });

  const login = async (email: string, password: string) => {
    const users = await fetch('/users.json').then((response) => response.json());
    const foundUser = users.find((user: User) => user.email === email && user.password === password);
    if(foundUser) {
      setAuthState({
        jwt: "1234",
        username: email,
        role: foundUser.role,
      });
      sessionStorage.setItem("jwt", "1234");
      sessionStorage.setItem("username", email);
      sessionStorage.setItem("role", foundUser.role);
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
