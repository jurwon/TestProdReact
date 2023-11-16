import React, { useCallback, useState } from "react";
import { HiPencil } from "react-icons/hi";
import styled from "styled-components";

const TodoEditor = styled.div`
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 20px;
  border: 1px solid gray;
`;

const InsertTodo = styled.input`
  flex: 1;
  box-sizing: border-box;
  border: 1px solid #557c55;
  border-radius: 5px;
  padding: 15px;

  &:focus {
    outline: none;
    border: 1px solid #f875aa;
  }
`;

const InsertBtn = styled.button`
  cursor: pointer;
  width: 70px;
  border: none;
  background-color: #a6cf98;
  color: #557c55;
  border-radius: 5px;
  height: 50px;

  &:hover {
    background-color: #557c55;
    color: #ffdfdf;
  }
`;

const InsertForm = styled.form`
  width: 100%;
  display: flex;
  gap: 10px;
`;

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState("");

  //useCallback : [] mount될때만 재생성
  //이거 해줘야 input에서 작성된 글자 표시 가능
  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  //onSubmit함수 : 넘어온 onInsert함수 사용
  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue("");
      e.preventDefault();
    },
    [onInsert, value]
  );

  return (
    <div>
      <h4>
        작성하기
        <HiPencil />
      </h4>
      {/* onSubmit사용하면 enter치면 그냥 입력됨 */}
      <InsertForm onSubmit={onSubmit}>
        <InsertTodo
          value={value}
          onChange={onChange}
          placeholder="새로운 Todo.."
        />
        <InsertBtn type="submit">추가</InsertBtn>
      </InsertForm>
    </div>
  );
};

export default TodoInsert;
