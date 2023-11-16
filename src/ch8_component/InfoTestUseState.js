import React, { useState } from "react";

const InfoTestUseState = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  //이벤트 핸들러
  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };

  return (
    <div>
      <h1>UseState</h1>
      <div>
        <input value={name} onChange={onChangeName} placeholder="name"></input>
        <br />
        <input
          value={nickname}
          onChange={onChangeNickname}
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

export default InfoTestUseState;
