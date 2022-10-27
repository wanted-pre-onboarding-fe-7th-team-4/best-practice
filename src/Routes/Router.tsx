import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "@/Routes/ProtectedRoute";

import { Todo } from "@/Pages";
import Login from "@/Pages/Auth/Login";
import Signup from "@/Pages/Auth/Signup";
import AuthLayout from "@/Components/Layouts/AuthLayout";
import TodoLayout from "@/Components/Layouts/TodoLayout";
import { useContext } from "react";
import { AuthContext } from "@/lib/states/ContextProvider";

const Router = () => {
  const {
    auth: { isLogin }
  } = useContext(AuthContext);

  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route
          element={
            <ProtectedRoute isLogin={isLogin ? isLogin : false} to="/todo" />
          }
        >
          <Route path="" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>
      </Route>
      <Route path="/todo" element={<TodoLayout />}>
        <Route element={<ProtectedRoute isLogin={!isLogin} to="/" />}>
          <Route path="" element={<Todo />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default Router;
