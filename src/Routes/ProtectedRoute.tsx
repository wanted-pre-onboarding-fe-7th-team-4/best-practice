import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuthContext } from "@/lib/states/AuthProvider";

const ProtectedRoute = () => {
  const { getAuthToken } = useAuthContext();
  const { pathname } = useLocation();
  const authToken = getAuthToken();
  const isAuthPage = pathname === "/" || pathname === "/logout";
  if (isAuthPage) {
    if (authToken) {
      return <Navigate to="/todo" />;
    } else {
      return <Outlet />;
    }
  } else {
    if (authToken) {
      return <Outlet />;
    } else {
      return <Navigate to="/" />;
    }
  }
};

export default ProtectedRoute;
