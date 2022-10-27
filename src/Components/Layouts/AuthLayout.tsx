import React from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";

const AuthLayout = () => {
  return (
    <AuthLayoutWrapper>
      <header>
        <div>
          <Logo to="/login">My Todo</Logo>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </AuthLayoutWrapper>
  );
};

export default AuthLayout;

const AuthLayoutWrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem 2rem 2rem;
  min-height: 100vh;

  header {
    padding: 2rem 0;
  }

  main {
    min-height: calc(100vh - 107px - 2rem);
    height: 1px;
  }
`;

const Logo = styled(Link)`
  font-size: 3rem;
  font-weight: 700;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.primary};
`;
