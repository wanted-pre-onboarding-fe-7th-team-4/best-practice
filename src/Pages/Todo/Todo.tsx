import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoLayout from "@/Components/Layouts/TodoLayout";

const Todo = () => {
  return (
    <TodoLayout>
      <TodoForm />
      <TodoList />
    </TodoLayout>
  );
};

export default Todo;
