import styled from "styled-components";
import Form from "@/Components/Form/Form";
import useCreateTodo from "@/lib/hooks/useCreateTodo";
import { useState, useEffect, useContext } from "react";
import { TodoContext } from "@/lib/states/ContextProvider";

const TodoForm = () => {
  const { setTodo } = useContext(TodoContext);
  const { isSuccess, handleCreateTodoContents } = useCreateTodo();

  const [content, setContent] = useState("");

  const handleCreate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleCreateTodoContents(content);
  };

  useEffect(() => {
    if (isSuccess) {
      setTodo((pre) => ({ ...pre, isSuccess }));
    }
  }, [isSuccess]);

  return (
    <Wrapper>
      <FormContainer onSubmit={handleCreate}>
        <Input
          value={content}
          type="text"
          onChange={(e) => {
            setContent(e.currentTarget.value);
          }}
        />
        <Button size="medium">할일 만들기</Button>
      </FormContainer>
    </Wrapper>
  );
};

export default TodoForm;

const Wrapper = styled.div``;

const FormContainer = styled(Form)`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  max-width: 900px;
  margin: 0 auto;
  padding: 10px 10px 0 10px;
`;

const Input = styled(Form.Input)`
  flex: 1;
  margin-right: 10px;
`;

const Button = styled(Form.Button)``;
