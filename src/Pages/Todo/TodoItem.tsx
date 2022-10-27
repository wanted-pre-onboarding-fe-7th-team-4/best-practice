import { useContext, useEffect, useState } from "react";

import { Button } from "@/Components";
import useDeleteTodo from "@/lib/hooks/useDeleteTodo";
import { TodoContext } from "@/lib/states/ContextProvider";

import styled, { css } from "styled-components";
import TodoEdit from "./TodoEdit";

interface ITodoItemProps {
  id: string;
  todo: string;
  isCompleted: boolean;
}

const TodoItem = ({ id, todo, isCompleted }: ITodoItemProps) => {
  const [edit, setEdit] = useState(false);
  const { handleDelete, isSuccess: isDeleteSuccess } = useDeleteTodo();
  const [completed, setCompleted] = useState(isCompleted);
  const { setTodo } = useContext(TodoContext);

  const onDelete = () => {
    handleDelete(id);
  };

  useEffect(() => {
    if (isDeleteSuccess) {
      setTodo((pre) => ({ ...pre, isSuccess: isDeleteSuccess }));
    }
  }, [isDeleteSuccess]);

  return edit ? (
    <TodoEdit id={id} todo={todo} setEdit={setEdit} />
  ) : (
    <Container completed={completed}>
      <CheckBoxContainer
        onClick={() => {
          setCompleted((pre) => !pre);
        }}
        completed={completed}
      ></CheckBoxContainer>
      <h3>{todo}</h3>
      <ButtonContainer>
        <UpdateButton onClick={() => setEdit(true)} size="small">
          수정
        </UpdateButton>
        <DeleteButton onClick={onDelete} size="small">
          삭제
        </DeleteButton>
      </ButtonContainer>
    </Container>
  );
};

export default TodoItem;

const Container = styled.div<{ completed: boolean }>`
  display: flex;
  justify-content: space-between;
  gap: 5px;
  border-radius: 5px;
  padding: 12px;
  transition: all 0.3s;
  margin: 5px;
  align-items: center;
  border: 1px solid green;

  ${({ completed }) => {
    if (completed) {
      return css`å
        border: 0;
        background-color: gray;
      `;
    }
  }}
`;

const CheckBoxContainer = styled.div<{ completed: boolean }>`
  box-sizing: border-box;
  cursor: pointer;
  position: relative;
  width: 21px;
  height: 21px;
  border: 2px solid black;
  border-radius: 30px;

  &:hover {
    transform: scale(1.05);
    border-color: green;
  }

  ${({ completed }) => {
    if (completed) {
      return css`
        font-size: 12px;
        color: transparent;
        text-align: center;
        transition: all 0.5s;
        background-color: white;
      `;
    }
  }}
`;

const ButtonContainer = styled.div``;

const UpdateButton = styled(Button)`
  color: ${({ theme }) => theme.color.gray_dark};
`;

const DeleteButton = styled(Button)`
  color: ${({ theme }) => theme.color.red};
`;
