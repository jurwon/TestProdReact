import React from "react";
//파일 분리한 기능 불러오기(reducer)
import useInfoInputFunc from "./InfoInputFunc";

const InfoTestCustomHooks = () => {
  const [state, onChange] = useInfoInputFunc({ name: "", nickname: "" });
  const { name, nickname } = state;

  return (
    <div>
      <h1>UseState</h1>
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

export default InfoTestCustomHooks;
