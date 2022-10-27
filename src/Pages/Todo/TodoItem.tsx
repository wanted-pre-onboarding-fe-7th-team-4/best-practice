import { Button } from "@/Components";
import React, { useState } from "react";
import styled from "styled-components";

interface ITodoItemProps {
  id: number;
  todo: string;
  isCompleted: boolean;
}

const TodoItem = ({ id, todo, isCompleted }: ITodoItemProps) => {
  // const [edit, setEdit] = useState(false);
  const [completed, setCompleted] = useState(isCompleted);
  return (
    <Container completed={completed}>
      <CheckBoxContainer>
        <input
          id={`completedCheck${id}`}
          type="checkbox"
          onChange={() => {
            setCompleted((value) => !value);
          }}
          checked={completed}
        />
        <label htmlFor={`completedCheck${id}`}></label>
      </CheckBoxContainer>
      <h3>{todo}</h3>
      <UpdateButton size="small">수정</UpdateButton>
      <DeleteButton size="small">삭제</DeleteButton>
    </Container>
  );
};

export default TodoItem;

const Container = styled.div<{ completed: boolean }>`
  display: flex;
  gap: 5px;
  border-radius: 5px;
  padding: 12px;
  transition: all 0.3s;
  margin: 5px;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.color.primary};

  border: ${(props) => props.completed && 0};
  background-color: ${(props) =>
    props.completed && props.theme.color.gray_alpha_30};
`;

const CheckBoxContainer = styled.div`
  position: relative;
  width: 21px;
  height: 21px;

  & input[type="checkbox"] {
    display: none;
  }

  & label {
    cursor: pointer;

    &:hover::after {
      transform: scale(1.05);
      border-color: green;
    }
    &::after {
      box-sizing: border-box;
      content: "";
      font-size: 12px;
      color: transparent;
      position: absolute;
      width: 21px;
      height: 21px;
      border: 2px solid var(--color-gray);
      text-align: center;
      border-radius: 30px;
      transition: all 0.5s;
      background-color: white;
    }
  }
`;

const UpdateButton = styled(Button)`
  color: ${({ theme }) => theme.color.gray_dark};
`;
const DeleteButton = styled(Button)`
  color: ${({ theme }) => theme.color.red};
`;
