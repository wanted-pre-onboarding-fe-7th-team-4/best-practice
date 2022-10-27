import React from "react";
import { Link, Outlet } from "react-router-dom";
import Button from "../Button/Button";
import styled from "styled-components";
const TodoLayout = () => {
  //   const naviage = useNavigate();

  return (
    <TodoLayoutWrapper>
      <header>
        <Logo to="/todo">My Todo</Logo>
        <Button fullWidth={true} size="medium">
          로그아웃
        </Button>
      </header>
      <main>
        <Outlet />
      </main>
    </TodoLayoutWrapper>
  );
};

export default TodoLayout;

const TodoLayoutWrapper = styled.div`
  header {
    background-color: ${({ theme }) => theme.color.primary};
    padding: 12px 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    user-select: none;
    max-width: 1260px;
    margin: 0 auto;
  }
  main {
    min-height: calc(100vh - 107px - 2rem);
    height: 1px;
  }
`;

const Logo = styled(Link)`
  font-size: 2rem;
  font-weight: 700;
  text-transform: uppercase;
  color: white;
`;
