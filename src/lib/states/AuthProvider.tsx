import React, { createContext, useContext, useState } from "react";
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
  setAuthToken: () => undefined,
  deleteAuthToken: () => undefined
});

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const { getLocalStorage, setLocalStorage, removeLocalStorage } =
    useLocalStorage();
  const [accessToken, setAccessToken] = useState<string | null>(null);

  const getAuthToken = () => {
    const localStroageToken = getLocalStorage("access_token");

    return accessToken || localStroageToken;
  };

  const setAuthToken = (token: string) => {
    setAccessToken(token);
    setLocalStorage("access_token", token);
  };

  const deleteAuthToken = () => {
    setAccessToken(null);
    removeLocalStorage("access_token");
  };

  const value = {
    accessToken,
    getAuthToken,
    setAuthToken,
    deleteAuthToken
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => useContext(AuthContext);
