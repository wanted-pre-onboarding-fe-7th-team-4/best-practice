import React from "react";

interface ITodoItemProps {
  todo: string;
  isCompleted: boolean;
}

const TodoItem = ({ todo, isCompleted }: ITodoItemProps) => {
  return (
    <li>
      <button>{isCompleted}</button>
      <h3>{todo}</h3>
      <button>수정</button>
      <button>삭제</button>
    </li>
  );
};

export default TodoItem;
