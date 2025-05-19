import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    // Check if user is authenticated from localStorage
    const storedAuthStatus = localStorage.getItem("isAuthenticated");
    return storedAuthStatus ? JSON.parse(storedAuthStatus) : false;
  });

  useEffect(() => {
    // Store authentication status in localStorage
    localStorage.setItem("isAuthenticated", JSON.stringify(isAuthenticated));
  }, [isAuthenticated]);

  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
