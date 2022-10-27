import useGetTodo from "@/lib/hooks/useGetTodos";
import { TodoContext } from "@/lib/states/ContextProvider";
import { useEffect, useContext } from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const {
    todo: { isSuccess }
  } = useContext(TodoContext);

  const { getItem, todoList, isLoading } = useGetTodo();

  useEffect(() => {
    if (isSuccess) {
      getItem();
    }
  }, [isSuccess]);

  return !isLoading ? (
    <List>
      {todoList?.map(({ id, todo, isCompleted }) => (
        <TodoItem
          data-id={id}
          key={id}
          id={id}
          todo={todo}
          isCompleted={isCompleted}
        />
      ))}
    </List>
  ) : (
    <div>로딩중입니다.</div>
  );
};

export default TodoList;

const List = styled.ul`
  padding: 5px 5px 10px 5px;
  position: relative;
  max-width: 900px;
  margin: 0 auto;
`;
