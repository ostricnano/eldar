import { createContext } from "react";
import { AuthState } from "./AuthProvider";

interface AuthContextProps {
  authState: AuthState;
  login: (email: string, password:string) => void;
  logout: () => void;
}

export const AuthContext = createContext({} as AuthContextProps)