import { API } from "./api";

interface AuthFormValue {
  email: string;
  password: string;
}

export const AuthApi = (() => {
  return {
    signIn: async ({ email, password }: AuthFormValue) => {
      try {
        const response = await API.postData<AuthFormValue>({
          url: "/auth/signin",
          data: {
            email,
            password
          }
        });
        return response;
      } catch (error: unknown) {
        console.error(error);
      }
    },
    signUp: async ({ email, password }: AuthFormValue) => {
      try {
        const response = await API.postData<AuthFormValue>({
          url: "/auth/signup",
          data: {
            email,
            password
          }
        });
        return response;
      } catch (error: unknown) {
        console.error(error);
      }
    }
  };
})();
