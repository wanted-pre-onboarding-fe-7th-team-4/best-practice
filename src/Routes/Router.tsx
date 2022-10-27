import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "@/Routes/ProtectedRoute";

import { Todo } from "@/Pages";
// import { useLayoutEffect, useState } from "react";
import Login from "@/Pages/Auth/Login";
import Signup from "@/Pages/Auth/Signup";
import AuthLayout from "@/Components/Layouts/AuthLayout";
import TodoLayout from "@/Components/Layouts/TodoLayout";

const Router = () => {
  // const [isLogin, setIsLogin] = useState(false);

  // useLayoutEffect(() => {
  //   setIsLogin();
  // }, []);

  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route element={<ProtectedRoute isLogin={true} to="/" />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>
      </Route>
      <Route path="/todo" element={<TodoLayout />}>
        <Route element={<ProtectedRoute isLogin={true} to="/" />}>
          <Route path="" element={<Todo />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default Router;
