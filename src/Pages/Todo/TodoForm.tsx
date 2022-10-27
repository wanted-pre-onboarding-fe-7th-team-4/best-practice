import styled from "styled-components";
import Form from "@/Components/Form/Form";

const Wrapper = styled.div``;

const TodoForm = () => {
  return (
    <Wrapper>
      <FormContainer>
        <Input type="text" />
        <Button size="medium">할일 만들기</Button>
      </FormContainer>
    </Wrapper>
  );
};

export default TodoForm;

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
