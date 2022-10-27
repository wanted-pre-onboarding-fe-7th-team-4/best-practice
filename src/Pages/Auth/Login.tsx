import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import Form from "@/Components/Form/Form";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const isLoggedIn = getLoginState();
  // const [email, setEmail, onChangeEmail] = useInput();
  // const [password, setPassword, onChangePassword] = useInput();
  // const [valid, setValid] = useState(false);
  // const navigate = useNavigate();

  const onSubmit = () => {
    return null;
  };
  // const onSubmit = useCallback(
  //   (e: React.FormEvent<HTMLFormElement>) => {
  //     e.preventDefault();
  //     if (!email.trim()) alert("이메일을 입력해주세요");
  //     else if (!password.trim()) alert("비밀번호를 입력해주세요");
  //     else {
  //       requestLogin(email, password)
  //         .then((value) => {
  //           if (value) navigate("/todo", { replace: true });
  //         })
  //         .catch((error) => alert(error.message));
  //     }

  //     setEmail("");
  //     setPassword("");
  //   },
  //   [email, password, setEmail, setPassword, navigate]
  // );

  // useEffect(() => {
  //   if (/@/.test(email) && password.trim().length >= 8) setValid(true);
  //   else setValid(false);
  // }, [email, password]);

  // if (isLoggedIn) return <Navigate to="/todo" replace />;

  return (
    <Container>
      <div>
        <Title>다시 만나서 반가워요!</Title>
        <SignUpMessage>
          <span>처음 오셨나요?</span>
          <Link to="/signup">회원가입 하러 가기</Link>
        </SignUpMessage>
        <Form onSubmit={onSubmit}>
          <InputWrapper>
            <Form.Label>email</Form.Label>
            <Form.Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
              required
            />
          </InputWrapper>
          <InputWrapper>
            <Form.Label>password</Form.Label>
            <Form.Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
              required
            />
          </InputWrapper>
          <Form.Button type="submit" fullWidth size="large" disabled={true}>
            로그인
          </Form.Button>
        </Form>
      </div>
      <ImageWrapper>
        <img src="images/heart.webp" alt="red heart" />
      </ImageWrapper>
    </Container>
  );
}

export default Login;

const Title = styled.h1`
  font-size: 5em;
  font-weight: 600;
  margin: 0 0 2rem 0;
  white-space: nowrap;
  transition: all 0.5s;
  @media screen and (max-width: 960px) {
    white-space: initial;
    font-size: 4rem;
  }
  @media screen and (max-width: 850px) {
    padding-left: 80px;
    font-size: 4rem;
  }
  @media screen and (max-width: 539px) {
    padding-left: 50px;
    font-size: 3.3rem;
  }
`;

const InputWrapper = styled.div`
  background: ${({ theme }) => theme.color.white_alpha_30};
  transition: all 0.3s;
  border: 1px solid ${({ theme }) => theme.color.gray};
  border-radius: 10px;
  padding: 7px 16px 5px 16px;
  margin: 1.2rem 0;

  &.focus,
  &:hover {
    border: 1px solid ${({ theme }) => theme.color.primary};
    label {
      color: ${({ theme }) => theme.color.primary};
    }
  }
`;

const SignUpMessage = styled.div`
  font-size: 18px;
  margin: 1rem 0;
  a {
    font-size: inherit;
    color: ${({ theme }) => theme.color.primary};
    padding-left: 5px;
    display: inline-block;

    &:hover {
      font-weight: 600;
    }
  }
`;

const floatingFrame = keyframes`
    0% {
      transform: translateY(0%);
    }
    50% {
      transform: translateY(-5%);
    }
    100% {
      transform: translateY(0%);
    }
`;

const ImageWrapper = styled.div`
  text-align: center;
  width: 356px;
  align-self: center;
  transition: all 0.5s;

  & img {
    width: 100%;
    animation: ${floatingFrame} 1.3s infinite;
  }

  @media screen and (max-width: 850px) {
    width: 100%;
    & img {
      width: 70px;
      position: absolute;
      left: 0;
      top: 0;
    }
  }

  @media screen and (max-width: 539px) {
    width: 100%;
    & img {
      width: 50px;
      position: absolute;
      left: 0;
    }
  }
`;

const Container = styled.div`
  display: flex;
  height: 100%;
  padding-bottom: 2rem;
  justify-content: space-evenly;
  align-content: center;
  align-items: center;

  @media screen and (max-width: 960px) {
    margin-top: 0;
    position: relative;
  }

  @media screen and (max-width: 850px) {
    display: block;
    position: relative;
  }

  @media screen and (max-width: 539px) {
    display: block;
    position: relative;
  }
`;
