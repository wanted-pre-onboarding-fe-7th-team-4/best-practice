import React, { useState } from "react";
import { TodoApi } from "../api";

import useLocalStorage from "./useLocalStorage";

export interface UpdateTodoData {
  id: number;
  todo: string;
  isCompleted: boolean;
}

const useUpdateTodo = () => {
  const [isSuccess, setIsSuccess] = useState<boolean | null>(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState<{
    statusCode: number;
    message: string;
  } | null>(null);
  const { getLocalStorage } = useLocalStorage();

  const handleUpdateTodo = async (
    e:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLButtonElement>
      | React.MouseEvent<HTMLDivElement>,
    { id, todo, isCompleted }: UpdateTodoData
  ) => {
    e.preventDefault();
    setIsSuccess(null);

    const { token } = getLocalStorage(
      process.env.REACT_APP_LOCAL_STORAGE_KEY as string
    );

    if (todo && token) {
      const response = await TodoApi.updateTodo(id, todo, isCompleted);

      if (response) {
        setIsSuccess(true);
        return;
      }

      const {
        response: {
          data: { statusCode, message }
        }
      } = response;

      setIsSuccess(false);
      setError({ statusCode, message });
      setIsError(true);
    }
  };

  return { isSuccess, handleUpdateTodo, isError, error };
};

export default useUpdateTodo;
