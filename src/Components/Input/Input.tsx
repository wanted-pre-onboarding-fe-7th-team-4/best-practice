import styled from "styled-components";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = ({ ...props }: InputProps) => {
  return <InputWrapper {...props} />;
};

export default Input;

export const InputWrapper = styled.input`
  width: 100%;
  padding: 0 0 7px 0;
  outline: none;
  border: 0;
  font-size: 18px;
`;
