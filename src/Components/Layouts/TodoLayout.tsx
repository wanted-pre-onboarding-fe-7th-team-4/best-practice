import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import styled from "styled-components";
import useLocalStorage from "@/lib/hooks/useLocalStorage";
const TodoLayout = () => {
  const naviage = useNavigate();
  const { removeLocalStorage } = useLocalStorage();

  const handleLogout = () => {
    removeLocalStorage("token");
    naviage("/");
  };

  return (
    <TodoLayoutWrapper>
      <header>
        <Logo to="/todo">My Todo</Logo>
        <Button size="medium" onClick={handleLogout}>
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
