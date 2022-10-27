import styled from "styled-components";

const Wrapper = styled.div``;

const TodoForm = () => {
  return (
    <Wrapper>
      <form>
        <input type="text" />
        <button>할일 만들기</button>
      </form>
    </Wrapper>
  );
};

export default TodoForm;
