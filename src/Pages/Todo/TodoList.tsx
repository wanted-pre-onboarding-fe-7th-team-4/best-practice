import { useEffect, useState } from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";
interface Todo {
  id: string;
  todo: string;
  isCompleted: boolean;
}

const TodoList = () => {
  const [todos, setTodo] = useState<Todo[] | null>(null);

  useEffect(() => {
    setTodo([
      {
        id: "1",
        todo: "할일 1",
        isCompleted: false
      },
      {
        id: "2",
        todo: "할일 1",
        isCompleted: false
      }
    ]);
  }, []);

  return (
    <List>
      {todos?.map(({ id, todo, isCompleted }) => (
        <TodoItem key={id} id={id} todo={todo} isCompleted={isCompleted} />
      ))}
    </List>
  );
};

export default TodoList;

const List = styled.ul`
  padding: 5px 5px 10px 5px;
  position: relative;
  max-width: 900px;
  margin: 0 auto;
`;
