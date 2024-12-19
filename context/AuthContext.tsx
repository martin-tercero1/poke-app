import { useState, createContext } from "react";

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState(null);

  const login = (userData) => {
    setAuth(userData);
  };

  const logout = () => {
    setAuth(null);
  };

  return (
    <AuthContext.Provider value={{ auth, setAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
