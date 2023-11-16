import React, { useRef, useCallback, useReducer } from "react";
import styled from "styled-components";
import TodoHeader from "./TodoHeader";
import TodoInsert from "./TodoInsert";
import TodoList from "./TodoList";

const MainContainer = styled.div`
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 20px;
  border: 1px solid gray;
`;

const TodoMain = () => {
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

  const nextId = useRef(30001);

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
      // 3) dispatch 함수를 호출.
      dispatch({ type: "TOGGLE", id });
    },
    // [todos]
    []
  );

  return (
    <MainContainer>
      <TodoHeader />
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </MainContainer>
  );
};

export default TodoMain;
