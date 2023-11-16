import { useReducer } from "react";

//리듀서함수(새로운 상태 만듦) 만들기
//const [state, dispatch] = useReducer(reducer, initialState);
const reducer = (state, action) => {
  //state의 값, 속성은 name, nickname
  return {
    ...state,
    [action.name]: action.value,
  };
};

export default function InfoInputFunc(initialForm) {
  //useReducer의 반환값, 1:상태값, 2:dispatch이름의 함수
  // 2: dispatch 이름의 함수 : 액션의 문자열을 호출하는 함수
  // useReducer(콜백함수, 초깃값)
  const [state, dispatch] = useReducer(reducer, initialForm);
  const onChange = (e) => {
    dispatch(e.target);
  };
  return [state, onChange];
}
