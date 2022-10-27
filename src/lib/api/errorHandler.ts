import axios from "axios";
import { toast, ToastOptions } from "react-toastify";

const errorHandler = (error: unknown) => {
  const toastOptions: ToastOptions = {
    position: "top-center",
    autoClose: 2000
  };

  if (axios.isAxiosError(error)) {
    const { response } = error;
    if (response) {
      const { status } = response;
      let message = response.data?.message;
      if (!message) {
        message = "Error";
      }
      if (status === 400) {
        toast.error(`Error400: ${message} `, toastOptions);
      } else if (status === 401) {
        toast.error(`Error401: ${message} `, toastOptions);
      } else if (status === 403) {
        toast.error(`Error403: ${message} `, toastOptions);
      } else if (status === 404) {
        toast.error(`Error404: ${message} `, toastOptions);
      } else if (status === 500) {
        toast.error(`Error500: ${message} `, toastOptions);
      } else {
        toast.error(`Error: ${message} `, toastOptions);
      }
    }
    return error;
  } else {
    toast.error("알 수 없는 에러입니다.", toastOptions);
    return error;
  }
};

export default errorHandler;
