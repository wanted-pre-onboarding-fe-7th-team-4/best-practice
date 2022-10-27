import { useState } from "react";
import { AuthApi } from "@/lib/api/AuthApi";

export interface AuthenticationFormValue {
  email: string;
  password: string;
}

export interface ErrorProps {
  statusCode: number;
  message: string;
}

const useRequestAuthentication = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState<boolean | null>(null);
  const [error, setError] = useState<ErrorProps | null>(null);
  const [token, setToken] = useState("");

  const handleSignup = async ({ email, password }: AuthenticationFormValue) => {
    setIsSuccess(false);
    setIsError(null);

    const response = await AuthApi.signUp({ email, password });

    const { access_token } = response;

    if (!access_token) {
      const {
        response: {
          data: { statusCode, message }
        }
      } = response;

      setIsError(true);
      setError({
        statusCode,
        message
      });
      return { statusCode, message };
    }

    setIsSuccess(true);
    setToken(access_token);
  };

  const handleSignin = async ({ email, password }: AuthenticationFormValue) => {
    setIsSuccess(false);

    const response = await AuthApi.signIn({ email, password });

    const { access_token } = response;

    if (!access_token) {
      const {
        response: {
          data: { statusCode, message }
        }
      } = response;

      setIsError(true);

      if (statusCode === 401) {
        setError({
          statusCode,
          message: "이메일 또는 비밀번호를 확인해주세요."
        });

        return {
          statusCode,
          message: "이메일 또는 비밀번호를 확인해주세요."
        };
      }

      setError({
        statusCode,
        message
      });

      setIsSignUp(true);

      return { statusCode, message };
    }

    setIsSuccess(true);
    setToken(access_token);
  };

  return {
    handleSignin,
    handleSignup,
    token,
    error,
    isError,
    isSuccess,
    isSignUp,
    setIsSignUp,
    setIsError
  };
};

export default useRequestAuthentication;
