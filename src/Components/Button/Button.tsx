import React, { ReactNode } from "react";
import styled, { css } from "styled-components";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  size: "small" | "medium" | "large";
  fullWidth?: boolean;
}

const Button = ({
  children,
  fullWidth,
  size = "medium",
  ...props
}: ButtonProps) => {
  return (
    <ButtonWrapper size={size} fullWidth={fullWidth} {...props}>
      {children}
    </ButtonWrapper>
  );
};

export default Button;

const DISABLED = css`
  background-color: ${({ theme }) => theme.color.gray};
  border: 2px solid ${({ theme }) => theme.color.gray};
  cursor: initial;
  font-size: 1rem;
  padding: 8px;
  &:hover {
    color: ${({ theme }) => theme.color.primary};
    background: white;
  }
`;

const SIZE = {
  small: css`
    font-size: 14px;
    font-weight: 400;
    padding: 7px;
  `,
  medium: css`
    font-size: 1rem;
    padding: 8px;
  `,
  large: css`
    font-size: 22px;
    padding: 14px;
  `
};
const FULLWIDTH = css`
  width: 100%;
`;

const ButtonWrapper = styled.button<ButtonProps>`
  margin: 0.5rem 0;
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.color.primary};
  background: ${({ theme }) => theme.color.primary};
  color: white;
  font-weight: 600;
  cursor: pointer;

  transition: all 0.3s;
  ${(props) => props.disabled && DISABLED}
  ${(props) => props.fullWidth && FULLWIDTH}
  ${(props) => props.size && SIZE[props.size]}
`;
