import React, { useState } from "react";
import { postData } from "../api";

import useLocalStorage from "./useLocalStorage";
const useCreateTodo = () => {
  const [isSuccess, setIsSuccess] = useState<boolean | null>(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState<{
    statusCode: number;
    message: string;
  } | null>(null);
  const { getLocalStorage } = useLocalStorage();

  const handleCreateTodoContents = async (
    e: React.FormEvent<HTMLFormElement>,
    todo: string
  ) => {
    e.preventDefault();
    setIsSuccess(null);

    const { token } = getLocalStorage(
      process.env.REACT_APP_LOCAL_STORAGE_KEY as string
    );

    if (todo && token) {
      const response = await postData({
        url: "/todos",
        data: { todo },
        token
      });

      if (response.id) {
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

  return { isSuccess, handleCreateTodoContents, isError, error };
};

export default useCreateTodo;
