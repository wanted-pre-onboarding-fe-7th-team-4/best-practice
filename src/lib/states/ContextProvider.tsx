import React, { useState } from "react";

interface ContextProps {
  children: React.ReactNode;
}

// Auth
interface IAuthProps {
  token?: string;
  email?: string;
  password?: string;
  error?: { statusCode: number; message: string };
  isEmail?: boolean;
  isPassword?: boolean;
  isSuccess?: boolean;
  isSignUp?: boolean;
  isError?: boolean;
  isLogin?: boolean;
}

interface AuthContext {
  auth: IAuthProps;
  setAuth: React.Dispatch<React.SetStateAction<IAuthProps>>;
}

export const AuthContext = React.createContext<AuthContext>(null!);

const authDefault = {
  token: "",
  email: "",
  password: "",
  error: { statusCode: 0, message: "" },
  isEmail: false,
  isPassword: false,
  isSuccess: false,
  isSignUp: false,
  isError: false,
  isLogin: false
};

const AuthContextProvider = ({ children }: ContextProps) => {
  const [auth, setAuth] = useState<IAuthProps>(authDefault);

  const value = {
    auth,
    setAuth
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Todo
interface TodoData {
  id?: number;
  todo?: string;
  isCompleted?: boolean;
  userId?: number;
}

interface Todo {
  data?: TodoData[];
  isSuccess?: boolean;
}

interface TodoContext {
  todo: Todo;
  setTodo: React.Dispatch<React.SetStateAction<Todo>>;
}

export const TodoContext = React.createContext<TodoContext>(null!);

const todoDefault = {
  data: [],
  isSuccess: false
};

const TodoContextProvider = ({ children }: ContextProps) => {
  const [todo, setTodo] = useState<Todo>(todoDefault);

  const value = {
    todo,
    setTodo
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

const ContextProvider = ({ children }: ContextProps) => {
  return (
    <TodoContextProvider>
      <AuthContextProvider>{children}</AuthContextProvider>
    </TodoContextProvider>
  );
};

export default ContextProvider;
