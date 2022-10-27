import Form from "@/Components/Form/Form";
import useControlButtonDisabled from "@/lib/hooks/useControlButtonDisabled";
import useRequestAuthentication from "@/lib/hooks/useRequestAuthentication";
import useValidate from "@/lib/hooks/useValidate";
import { AuthContext } from "@/lib/states/ContextProvider";
import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";

function Signup() {
  const { setAuth } = useContext(AuthContext);

  const { handleSignup, isSuccess, token } = useRequestAuthentication();
  const {
    email,
    setEmail,
    password,
    setPassword,
    isEmail,
    isPassword,
    handleValidate
  } = useValidate();
  const navigate = useNavigate();

  const buttonDisabled = useControlButtonDisabled({
    data: [isEmail, isPassword]
  });

  const onClickSignUp = async () => {
    if (email && password) {
      await handleSignup({ email, password });
    }
  };

  useEffect(() => {
    if (isSuccess) {
      setAuth((pre) => ({ ...pre, token, isSuccess }));
      navigate("/");
    }
  }, [isSuccess, token]);

  return (
    <Container>
      <FormWrapper>
        <h1>계정을 만들어주세요</h1>
        <SignUpMessage>
          <span>이미 계정이 있으신가요?</span>{" "}
          <Link to="/login">로그인 하러 가기</Link>
        </SignUpMessage>
        <Form onSubmit={onClickSignUp}>
          <Form.Input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.currentTarget.value);
              handleValidate(e.currentTarget.value, "email");
            }}
          />
          <Form.Input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.currentTarget.value);
              handleValidate(e.currentTarget.value, "password");
            }}
          />
          <Form.Button
            type="submit"
            fullWidth
            size="large"
            disabled={buttonDisabled}
          >
            가입하기
          </Form.Button>
        </Form>
      </FormWrapper>
      <ImageWrapper>
        <img src="images/rocket.webp" alt="rocket" />
      </ImageWrapper>
    </Container>
  );
}

export default Signup;

const FormWrapper = styled.div`
  h1 {
    font-size: 3rem;
    margin: 0 0 2rem 0;
    white-space: nowrap;
    transition: all 0.5s;
    @media screen and (max-width: 960px) {
      white-space: initial;
      font-size: 2.8rem;
    }

    @media screen and (max-width: 539px) {
      padding-left: 50px;
      font-size: 2.3rem;
    }
  }
  & input {
    margin: 1.2rem 0;
  }
`;

const SignUpMessage = styled.div`
  font-size: 18px;
  margin: 1rem 0;
  a {
    font-size: inherit;
    color: var(--color-primary);
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
