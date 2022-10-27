import React from "react";
import { Navigate, Outlet } from "react-router-dom";

interface IProtectedRoute {
  isLogin: boolean;
  to: string;
}

const ProtectedRoute = ({ isLogin, to }: IProtectedRoute) => {
  if (isLogin) {
    return <Outlet />;
  }

  return <Navigate to={to} />;
};

export default ProtectedRoute;
