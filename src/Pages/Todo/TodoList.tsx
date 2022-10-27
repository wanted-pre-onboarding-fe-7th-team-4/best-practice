import { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
interface Todo {
  id: string;
  todo: string;
  isCompleted: boolean;
}

const TodoList = () => {
  const [todos, setTodo] = useState<Todo[] | null>(null);

  useEffect(() => {
    setTodo([]);
  }, []);

  return (
    <ul>
      {todos?.map(({ id, todo, isCompleted }) => (
        <TodoItem key={id} todo={todo} isCompleted={isCompleted} />
      ))}
    </ul>
  );
};

export default TodoList;
