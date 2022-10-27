import React, { ReactNode } from "react";
import styled from "styled-components";

interface ILabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
}

const Label = ({ children, ...props }: ILabelProps) => {
  return <LabelWrapper {...props}>{children}</LabelWrapper>;
};

export default Label;

const LabelWrapper = styled.label`
  display: block;
  color: var(--color-gray);
  font-size: 14px;
  padding: 0;
`;
