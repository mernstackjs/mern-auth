import { createContext, useContext, useState, useEffect } from "react";
import { useMe } from "../hooks/useAuth";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const { user, isLoading, error } = useMe();
  const [authUser, setAuthUser] = useState(user);

  useEffect(() => {
    setAuthUser(user);
  }, [user]);

  const logout = () => {
    localStorage.removeItem("token");
    setAuthUser(null);
  };

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}
