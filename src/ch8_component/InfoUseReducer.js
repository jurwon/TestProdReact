import React, { useReducer } from "react";

const reducer = (state, action) => {
  return {
    ...state,
    [action.name]: action.value,
  };
};

const InfoUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, {
    name: "",
    nickname: "",
  });

  //비구조화 할당. 해당 객체의 멤버를 구조 분해
  //name = state.name
  //nickname = state.nickname
  const { name, nickname } = state;

  //이벤트 핸들러
  const onChange = (e) => {
    dispatch(e.target);
  };

  return (
    <div>
      <h1>InfoUseReducer</h1>
      <div>
        <input
          name="name"
          value={name}
          onChange={onChange}
          placeholder="name"
        ></input>
        <br />
        <input
          name="nickname"
          value={nickname}
          onChange={onChange}
          placeholder="nickname"
        ></input>
      </div>
      <div>
        <h3>
          이름 : <b>{name}</b>
        </h3>
        <h3>
          닉네임 : <b>{nickname}</b>
        </h3>
      </div>
    </div>
  );
};

export default InfoUseReducer;
