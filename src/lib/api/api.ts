import axios, { AxiosError, AxiosRequestConfig } from "axios";
import errorHandler from "@/lib/api/errorHandler";
import useLocalStorage from "@/lib/hooks/useLocalStorage";

interface IAPIValue {
  url: string;
  config?: AxiosRequestConfig;
}

interface IAPIPostValue<TData> extends IAPIValue {
  data: TData;
}

interface IAPIPutValue<TData> extends IAPIValue {
  data: TData;
}

type IAPIDeleteValue = IAPIValue;

export const API = (() => {
  const instance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL as string
  });

  const { getLocalStorage } = useLocalStorage();

  instance.interceptors.request.use((config) => {
    const accessToken = getLocalStorage("access_token"); // localStorage에 TOKEN 저장

    const token = accessToken?.token;

    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`; // Header에 토큰을 넣어서 보내준다.
    }
    return config;
  });
  const onFulfilled = (response: any) => {
    return response;
  };

  const onRejected = (error: AxiosError) => {
    errorHandler(error);
    return Promise.reject(error);
  };

  instance.interceptors.response.use(onFulfilled, onRejected);

  return {
    getData: async ({ url, config }: IAPIValue) => {
      try {
        const response = await instance.get(url, {
          ...config
        });

        return response.data;
      } catch (error) {
        const responseError = error as AxiosError;
        return responseError;
      }
    },
    postData: async <TData>({ url, data, config }: IAPIPostValue<TData>) => {
      try {
        const response = await instance.post(url, data, {
          headers: {
            "Content-Type": "application/json"
          },
          ...config
        });

        return response.data;
      } catch (error) {
        const responseError = error as AxiosError;

        return responseError;
      }
    },
    putData: async <TData>({ url, data, config }: IAPIPutValue<TData>) => {
      try {
        const response = await instance.post(url, data, {
          headers: {
            "Content-Type": "application/json"
          },
          ...config
        });

        return response.data;
      } catch (error) {
        const responseError = error as AxiosError;

        return responseError;
      }
    },
    deleteData: async ({ url, config }: IAPIDeleteValue) => {
      try {
        const response = await instance.delete(url, {
          ...config
        });

        return { status: response.status };
      } catch (error) {
        const responseError = error as AxiosError;

        return responseError;
      }
    }
  };
})();
