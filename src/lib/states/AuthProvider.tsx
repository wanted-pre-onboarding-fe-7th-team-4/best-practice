import { createContext, useContext, useState } from "react";
import useLocalStorage from "@/lib/hooks/useLocalStorage";

interface AuthProviderProps {
  children: React.ReactNode;
}

interface AuthContextProps {
  getAuthToken: () => string | null;
  setAuthToken: (token: string) => void;
  deleteAuthToken: () => void;
}

const AuthContext = createContext<AuthContextProps>({
  getAuthToken: () => null,
  setAuthToken: () => {},
  deleteAuthToken: () => {}
});

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const { getLocalStorage, setLocalStorage, removeLocalStorage } =
    useLocalStorage();
  const [token, setToken] = useState<string | null>(null);

  const getAuthToken = () => {
    const localStroageToken = getLocalStorage("access_token");

    return localStroageToken || token;
  };

  const setAuthToken = (token: string) => {
    setToken(token);
    setLocalStorage("access_token", token);
  };

  const deleteAuthToken = () => {
    setToken(null);
    removeLocalStorage("access_token");
  };

  const value = {
    token,
    getAuthToken,
    setAuthToken,
    deleteAuthToken
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => useContext(AuthContext);
