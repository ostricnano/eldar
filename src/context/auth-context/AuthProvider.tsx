import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

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

  useEffect(() => {
    const jwt = sessionStorage.getItem('jwt');
    const username = sessionStorage.getItem('username');
    const role = sessionStorage.getItem('role');
  
    if (jwt && username && role) {
      setAuthState({
        jwt,
        username,
        role,
      });
    }
  }, []);

  const login = async (email: string, password: string) => {
    const users = await fetch("/users.json").then((response) =>
      response.json()
    );
    const foundUser = users.find(
      (user: User) => user.email === email && user.password === password
    );
    if (foundUser && foundUser.role === "admin") {
      setAuthState({
        jwt: "1234",
        username: email,
        role: foundUser.role,
      });
      toast.success("Login successful");
      navigate("/users");
    } else if (foundUser && foundUser.role === "user") {
      setAuthState({
        jwt: "1234",
        username: email,
        role: foundUser.role,
      });
      toast.success("Login successful");
      navigate("/user/users");
    } else {
      toast.error("Invalid credentials");
    }
    sessionStorage.setItem("jwt", "1234");
    sessionStorage.setItem("username", email);
    sessionStorage.setItem("role", foundUser.role);
  };

  const logout = () => {
    setAuthState({
      jwt: null,
      username: null,
      role: null,
    });
    sessionStorage.removeItem("jwt");
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("role");
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
