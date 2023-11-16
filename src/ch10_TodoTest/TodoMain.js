// 부모 : App, 자식 : TodoMain
// 자식 : TodoMain (베이스 컴포넌트)
// 전체 가운데 요소로 정렬 시켜주는 템플릿
// 1)제목 2) 입력란 3) 리스트 4) 리스트의 아이템 등.

import React, { useState, useRef, useCallback, useReducer } from "react";
import styled from "styled-components";
import TodoHeader from "./TodoHeader";
import TodoInsert from "./TodoInsert";
import TodoList from "./TodoList";

const Main_css = styled.div`
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 20px;
  border: 1px solid gray;
`;

const TodoMain = () => {
  // //샘플 더미 데이터를 임시 배열에 만들어서, 전달. props 테스트
  // const [todos, setTodos] = useState([
  //   {
  //     id: 1,
  //     text: "1번입니다.",
  //     checked: false,
  //   },
  //   {
  //     id: 2,
  //     text: "2번입니다.",
  //     checked: true,
  //   },
  //   {
  //     id: 3,
  //     text: "3번입니다.",
  //     checked: true,
  //   },
  // ]);

  //성능 test (더미 데이터 3000개)
  const createBulkTodos = () => {
    const array = [];
    for (let i = 1; i <= 30000; i++) {
      array.push({
        id: i,
        text: `더미 데이터 : ${i}`,
        checked: false,
      });
    }
    return array;
  };

  //추가로 입력이 되는 todo 부분의 아이디를 id : 4부터 할당 할 예정.
  // const nextId = useRef(4);

  // 3000개 더미 데이터라서, 다음 번호
  const nextId = useRef(30001);

  //onInsert 함수는, onChange함수와 다르게 매번 새로운 함수 생성
  //함수 안에 배열이 변경돼서

  //방법2) 성능상 큰 차이 없고, 규모가 커지고, 상태를 관리해주는 라이브러리 Redux를 사용하게 되면
  //useReducer를 이용하게 됩니다.

  //순서1) useReducer임포트
  // import {useReducer} from "react"
  //준비물 . 1)리듀서 함수, 2) useReducer생성, 3)dispatch함수 호출

  //페이징, 한번에 데이터 전부 다 불러오는게 아니라 눈에 보이는 정보만 불러오기
  //준비물 )
  // 1) 모듈 설치하기 : yarn add react-virtualized
  // 2) 각 아이템 요소의 높이를 구해야함.(두번째 요소부터) => 83.9px * 10 = 830.9px
  // 3) TodoList로 이동하기

  //1) 리듀서 함수
  const todoReducer = (todos, action) => {
    switch (action.type) {
      case "INSERT":
        return todos.concat(action.todo);
      case "REMOVE":
        return todos.filter((todo) => todo.id !== action.id);
      case "TOGGLE":
        return todos.map((todo) =>
          todo.id === action.id ? { ...todo, checked: !todo.checked } : todo
        );
      default:
        return todos;
    }
  };

  // 2) useReducer 생성 -> 기존에 더미 데이터를 만드는 부분이 있어서, 위에 부분 주석하기.
  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);

  const onInsert = useCallback(
    (text) => {
      const todo = {
        //const nextId = 4부터 할당
        id: nextId.current,
        text,
        checked: false,
      };

      //성능 개선 2번째
      // setTodos(todos.concat(todo));
      //차이점, useCallback 의존성 배열이 값 변경될 때마다 새로 함수 생성하는 부분을
      // 기존의 값으로 변경 -> 함수 형태로 변경
      //매번 새롭게 함수를 생성할 필요 없음
      // setTodos((todos) => todos.concat(todo));

      // 3) dispatch 함수를 호출.
      dispatch({ type: "INSERT", todo });

      nextId.current += 1;
    },
    //성능 개선 2번째
    // [todos]
    []
  );

  const onRemove = useCallback(
    (id) => {
      //성능 개선 2번째
      //매번 새롭게 함수를 생성할 필요 없음
      // setTodos((todos) => todos.filter((todo) => todo.id !== id));

      // 3) dispatch 함수를 호출.
      dispatch({ type: "REMOVE", id });
    },
    // [todos]
    []
  );

  const onToggle = useCallback(
    (id) => {
      //성능 개선 2번째
      //매번 새롭게 함수를 생성할 필요 없음
      // setTodos(
      //   // todos.map((todo) =>
      //   //   todo.id === id ? { ...todo, checked: !todo.checked } : todo
      //   (todos) =>
      //     todos.map((todo) =>
      //       todo.id === id ? { ...todo, checked: !todo.checked } : todo
      //     )
      // );

      // 3) dispatch 함수를 호출.
      dispatch({ type: "TOGGLE", id });
    },
    // [todos]
    []
  );

  return (
    <Main_css>
      <TodoHeader />
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </Main_css>
  );
};

export default TodoMain;
