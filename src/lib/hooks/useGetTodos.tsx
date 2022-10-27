import { useEffect, useState } from "react";
import { TodoApi } from "../api";
import { ITodoItemProps } from "../interfaces";
import useLocalStorage from "./useLocalStorage";

const useGetTodo = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);
  const [todoList, setTodoList] = useState<ITodoItemProps[]>([
    {
      id: 1,
      todo: "",
      isCompleted: false,
      userId: 1
    }
  ]);

  const { getLocalStorage } = useLocalStorage();

  const getItem = async () => {
    setIsLoading(true);
    setIsSuccess(null);

    const { token } = getLocalStorage(
      process.env.REACT_APP_LOCAL_STORAGE_KEY as string
    );

    if (token) {
      const response = await TodoApi.getTodos();

      if (!response.length) {
        setIsLoading(false);
        setIsSuccess(false);
        setTodoList([]);
        return;
      }

      setTodoList([...response]);
      setIsLoading(false);
      setIsSuccess(true);
    }
  };

  useEffect(() => {
    getItem();
  }, []);

  return { todoList, getItem, isSuccess, isLoading };
};

export default useGetTodo;
