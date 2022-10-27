import { useCallback, useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { getLoginState, requestSignup } from "./../../api/auth";
import useInput from "../../hooks/useInput";
import AuthLayout from "../../layouts/AuthLayout";
import Input from "../../components/Input";
import Button from "../../components/Button";
import styles from "./../Login/styles.module.scss";

function Signup() {
  const isLoggedIn = getLoginState();
  const [email, setEmail, onChangeEmail] = useInput();
  const [password, setPassword, onChangePassword] = useInput();
  const navigate = useNavigate();
  const [valid, setValid] = useState(false);

  useEffect(() => {
    if (/@/.test(email) && password.trim().length >= 8) setValid(true);
    else setValid(false);
  }, [email, password]);

  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!email.trim()) alert("이메일을 입력해주세요");
      else if (!password.trim()) alert("비밀번호를 입력해주세요");
      else {
        requestSignup(email, password)
          .then((value) => {
            if (value) navigate("/todo", { replace: true });
          })
          .catch((error) => alert(error.message));
      }

      setEmail("");
      setPassword("");
    },
    [email, password, setEmail, setPassword, navigate]
  );

  if (isLoggedIn) return <Navigate to="/todo" replace />;

  return (
    <AuthLayout>
      <div className={styles.container}>
        <div className={styles.form_wrapper}>
          <h1 className={styles.hello}>계정을 만들어주세요</h1>
          <div className={styles.go_signup}>
            <span>이미 계정이 있으신가요?</span>{" "}
            <Link to="/login">로그인 하러 가기</Link>
          </div>
          <form onSubmit={onSubmit}>
            <Input
              className={styles.input}
              type="email"
              value={email}
              onChange={onChangeEmail}
              label="email"
            />
            <Input
              className={styles.input}
              type="password"
              value={password}
              onChange={onChangePassword}
              label="password"
            />
            <Button
              className={styles.button}
              type="submit"
              fullWidth
              size="large"
              disabled={!valid}
            >
              가입하기
            </Button>
          </form>
        </div>
        <div className={styles.image_wrapper}>
          <img src="images/rocket.webp" alt="rocket" />
        </div>
      </div>
    </AuthLayout>
  );
}
export default Signup;


@keyframes floating {
    0% {
      transform: translateY(0%);
    }
    50% {
      transform: translateY(-5%);
    }
    100% {
      transform: translateY(0%);
    }
  }
  
  .hello {
    font-size: 3rem;
    margin: 0 0 2rem 0;
    white-space: nowrap;
    transition: all 0.5s;
  }
  
  .go_signup {
    font-size: 18px;
    margin: 1rem 0;
  
    & a {
      font-size: inherit;
      color: var(--color-primary);
      padding-left: 5px;
      display: inline-block;
  
      &:hover {
        font-weight: 600;
      }
    }
  }
  
  .container {
    display: flex;
    height: 100%;
    padding-bottom: 2rem;
    justify-content: space-evenly;
    align-content: center;
    align-items: center;
  
    & .input {
      margin: 1.2rem 0;
    }
  }
  
  .image_wrapper {
    text-align: center;
    width: 356px;
    align-self: center;
    transition: all 0.5s;
  
    & img {
      width: 100%;
      animation: floating 1.3s infinite;
    }
  }
  
  @media screen and (max-width: 960px) {
    .container {
      margin-top: 0;
      position: relative;
    }
  
    .hello {
      white-space: initial;
      font-size: 2.8rem;
    }
  }
  
  @media screen and (max-width: 850px) {
    .container {
      display: block;
      position: relative;
    }
  
    .hello {
      padding-left: 80px;
      font-size: 2.5rem;
    }
  
    .image_wrapper {
      width: 100%;
      & img {
        width: 70px;
        position: absolute;
        left: 0;
        top: 0;
      }
    }
  }
  
  @media screen and (max-width: 539px) {
    .container {
      display: block;
      position: relative;
    }
  
    .hello {
      padding-left: 50px;
      font-size: 2.3rem;
    }
  
    .image_wrapper {
      width: 100%;
      & img {
        width: 50px;
        position: absolute;
        left: 0;
      }
    }
  }
  