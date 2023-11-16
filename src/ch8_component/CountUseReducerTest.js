import React, { useReducer } from "react";
import { Button } from "antd";

//설정 1. 리듀서 함수 만들기
//state : 상태값
//action : 무엇을 실행할지 표시
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 };
    case "DECREMENT":
      return { value: state.value - 1 };
    default:
      return state;
  }
};

const CountUseReducerTest = () => {
  //설정2. useReducer(리듀서함수, 초깃값) 사용하기
  //반환값 : 상태값, dispatch함수
  const [state, dispatch] = useReducer(reducer, { value: 0 });

  return (
    <div>
      <h1>UseReducer</h1>
      <br />
      <br />
      {/* 결과 뷰 출력하기 */}
      <p>
        현재 값 : {state.value}
        <b></b>
      </p>
      {/* 적용하기, dispatch함수 호출해서 해당 액션 문자열 사용하기 */}
      <Button onClick={() => dispatch({ type: "INCREMENT" })}>+</Button>
      <Button onClick={() => dispatch({ type: "DECREMENT" })}>-</Button>
    </div>
  );
};

export default CountUseReducerTest;
