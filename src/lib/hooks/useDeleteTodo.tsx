import { useState } from "react";
import { TodoApi } from "../api";

import useLocalStorage from "./useLocalStorage";

const useDeleteTodo = () => {
  const [isSuccess, setIsSuccess] = useState<boolean | null>(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState<{
    statusCode?: number;
    message?: string;
  } | null>(null);
  const { getLocalStorage } = useLocalStorage();

  const handleDelete = async (id: number) => {
    setIsSuccess(null);

    const { token } = getLocalStorage(
      process.env.REACT_APP_LOCAL_STORAGE_KEY as string
    );

    if (token) {
      const response = await TodoApi.deleteTodo(id);

      if (response?.status === 204) {
        setIsSuccess(true);
        setIsError(false);
        return;
      }

      setIsError(true);
      setError({
        statusCode: response?.status,
        message: "삭제에 실패하였습니다."
      });
    }
  };

  return { handleDelete, isSuccess, error, isError };
};

export default useDeleteTodo;
