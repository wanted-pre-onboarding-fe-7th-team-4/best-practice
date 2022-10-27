import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

const Router = () => {
  return (
    <Routes>
      <Route element={<ProtectedRoute />}></Route>
      <Route element={<ProtectedRoute />}></Route>
    </Routes>
  );
};

export default Router;
