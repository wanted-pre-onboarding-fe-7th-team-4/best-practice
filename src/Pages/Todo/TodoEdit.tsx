import React, { useState } from "react";
import styled from "styled-components";
import Form from "@/Components/Form/Form";

interface IEdit {
  id: string;
  todo: string;
}

const TodoEdit = ({ id, todo }: IEdit) => {
  const [todoText, setTodoText] = useState(todo);
  const onSubmit = () => {
    return null;
  };
  return (
    <EditWrapper data-id={id} onSubmit={onSubmit}>
      <EditInput
        value={todoText}
        onChange={(e) => setTodoText(e.currentTarget.value)}
      />
      <div>
        <EditOkBtn size="medium" type="submit">
          제출
        </EditOkBtn>
        <EditCancelBtn size="medium">취소</EditCancelBtn>
      </div>
    </EditWrapper>
  );
};

const EditWrapper = styled(Form)`
  flex: 1;
  font-size: 17px;
  white-space: pre-wrap;
  line-break: anywhere;
  word-break: break-all;
  background-color: transparent;
  min-width: 20px;
  transition: all 0.3s;
`;

const EditInput = styled(Form.Input)`
  width: 100%;
  border: none;
  padding: 5px 0;
`;

const EditOkBtn = styled(Form.Button)`
  cursor: pointer;
  text-align: center;
  vertical-align: middle;
  transition: all 0.3s;
  font-size: 15px;
  background-color: green;
  padding: 5px 10px;
  border-radius: 20px;
  border: 1px solid green;
  color: white;
`;

const EditCancelBtn = styled(Form.Button)`
  font-size: 15px;
  color: white;
  padding: 5px 10px;
  border-radius: 20px;
`;

export default TodoEdit;
