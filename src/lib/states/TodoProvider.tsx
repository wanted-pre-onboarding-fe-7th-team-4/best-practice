import React, { useState } from "react";

interface ContextProps {
  children: React.ReactNode;
}

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
  isSuccess: false,
  data: undefined
};

const ContextProvider = ({ children }: ContextProps) => {
  const [todo, setTodo] = useState<Todo>(todoDefault);

  const value = {
    todo,
    setTodo
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

export default ContextProvider;
