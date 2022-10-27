import request from "@/lib/api/common";

interface IProps {
  email: string;
  password: string;
}

request.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem("token"); // localStorage에 TOKEN 저장

  if (accessToken && config.headers) {
    config.headers.Authorization = `Bearer ${accessToken}`; // Header에 토큰을 넣어서 보내준다.
  }
  return config;
});

/* 
  로그인
  Response: { "access_token": String }
*/
export const login = ({ email, password }: IProps) => {
  return request.post({
    url: "/auth/signin",
    data: {
      email,
      password
    }
  });
};

/* 
    회원가입
    Response: { "access_token": String }
  */
export const signup = ({ email, password }: IProps) => {
  return request.post({
    url: "/auth/signup",
    data: {
      email,
      password
    }
  });
};
