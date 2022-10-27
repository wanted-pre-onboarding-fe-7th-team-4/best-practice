import { API } from "./api";

export interface Todo {
  id: string;
  todo: string;
  isCompleted: boolean;
  userId: number;
}

export const TodoApi = (() => {
  return {
    createTodo: async (todo: string) => {
      try {
        const response = await API.postData({
          url: "/todos",
          data: {
            todo,
            isCompleted: false
          }
        });
        return response;
      } catch (error: unknown) {
        console.error(error);
      }
    },
    getTodos: async () => {
      try {
        const response = await API.getData({
          url: "/todos"
        });
        return response;
      } catch (error: unknown) {
        console.error(error);
      }
    },
    updateTodo: async (id: number, todo: string, isCompleted?: boolean) => {
      try {
        const response = await API.putData({
          url: `/todos/${id}`,
          data: {
            todo,
            isCompleted
          }
        });
        return response;
      } catch (error: unknown) {
        console.error(error);
      }
    },
    deleteTodo: async (id: number) => {
      try {
        const response = await API.deleteData({
          url: `/todos/${id}`
        });
        return response;
      } catch (error: unknown) {
        console.error(error);
      }
    }
  };
})();

export default TodoApi;
