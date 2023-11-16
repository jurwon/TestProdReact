import React, { useState } from "react";
import styled from "styled-components";
import { MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";
import cn from "classnames";

//IoMdCheckboxOutline
//IoMdCheckbox

//가상 페이징 처리하는 클래스 style-components 추가하기.
const ListvirtualizedCss = styled.div`
  /* 각 목록요소가 출력이 될때, 구분선 넣기 */
  & + & {
    border-top: 1px solid #dee2e6;
  }
  &:nth-child(even) {
    background: #f8f9fa;
  }
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 1rem;
  border-bottom: 1px solid;
  /* &:nth-child(even) {
    background: #557c55;
  } */
`;

const ItemText = styled.div`
  flex: 1;
`;

const DeleteBtn = styled.button`
  cursor: pointer;
  font-size: 14px;
  border: none;
  border-radius: 5px;
  padding: 5px;
  width: 70px;

  background-color: #a6cf98;
  color: #557c55;
  height: 50px;

  &:hover {
    background-color: #557c55;
    color: #ffdfdf;
    font-weight: bold;
  }
`;

const CheckBox = styled.div`
  cursor: pointer;
  flex: 1;
  display: flex;
  align-items: center;
  svg {
    font-size: 1.5rem;
  }

  &.checked {
    svg {
      color: #fa7070;
    }
    .text {
      color: #adb5bd;
      text-decoration: line-through;
    }
  }
`;

//todo = {id: 1, text: "더미 데이터 요소 1번입니다.",checked: true}
//onRemove : TodoMain -> TodoList -> TodoListItem 계속 넘김 (비효율)
const TodoItem = ({ todo, onRemove, onToggle, style }) => {
  //const text = todo.text
  //const checked = todo.checked
  //const id = todo.id
  const { id, text, checked } = todo;

  return (
    <ListvirtualizedCss className="TodoListItem-virtualized" style={style}>
      <Item>
        <CheckBox
          /* cn 이용하면, checkbox라는 속성이  checked 의 속성에 의해서 
          true 이면 , className에 등록이 되고, 
          false 이면 , className에 등록이 안됨,  */
          className={cn("checkBox", { checked })}
          onClick={() => onToggle(id)}
        >
          {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
          <ItemText className="text">{text}</ItemText>
        </CheckBox>
        <div className="date_col">{new Date().toLocaleDateString()}</div>
        <div className="btn_col">
          <DeleteBtn onClick={() => onRemove(id)}>삭제</DeleteBtn>
        </div>
      </Item>
    </ListvirtualizedCss>
  );
};

//맨 마지막에서 React.memo 적용하여, 1차 성능 개선
export default React.memo(TodoItem);
