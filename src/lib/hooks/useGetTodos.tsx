import { getData } from "@/lib/api/api";

import { useEffect, useState } from "react";
import { ITodoItemProps } from "../interfaces";
import useLocalStorage from "./useLocalStorage";

const useGetTodo = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
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
    setIsSuccess(false);

    const { token } = getLocalStorage(
      process.env.REACT_APP_LOCAL_STORAGE_KEY as string
    );

    if (token) {
      const response = await getData({ url: "/todos", token });

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
