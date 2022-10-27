import React, { ReactNode } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import Label from "../Label/Label";

interface IFormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
}

const Form = ({ children, ...props }: IFormProps) => {
  return <form {...props}>{children}</form>;
};

export default Form;

Form.Button = Button;
Form.Input = Input;
Form.Label = Label;
