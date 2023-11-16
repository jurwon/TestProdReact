import React, { useState, useEffect } from "react";
import { Button } from "antd";

const InfoTestUseEffect = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  // useEffect Test 하기.
  //정의 useEffect(콜백함수,의존성 배열)
  // 의존성 배열 모양 1) 아무것도 없을 때, 매번 콜백함수 실행되고,
  // 2) [] , 빈 배열, 한번만 실행되고
  // 3) [list] , list의 상태가 변경 될 때 마다, 콜백함수 실행이 됨.

  // useEffect(() => {
  //   console.log("useEffect 호출이됨. ");
  //   console.log({
  //     name,
  //     nickname,
  //   });
  // }, [name, nickname]);

  //후처리 함수 붙이기
  // useEffect(콜백함수,의존성 배열)
  // 콜백함수 내부에 ->return() =>{수행할 로직}
  useEffect(() => {
    console.log("useEffect 호출이됨. ");
    console.log({
      name,
      nickname,
    });
    //후처리 함수 추가하기
    //변경 이전 data
    return () => {
      console.log("후처리 함수 호출");
      console.log("name : " + name + ", nickname : " + nickname);
    };
  }, [name, nickname]);

  //버튼 추가해서 visible속성 확인
  const [visible, setVisible] = useState("true");

  //이벤트 핸들러
  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };

  return (
    <div>
      <h1>UseEffect</h1>
      <Button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {}
        {visible ? "hide" : "show"}
      </Button>

      <div style={visible ? { visible: true } : { display: "none" }}>
        <input value={name} onChange={onChangeName} placeholder="name"></input>
        <br />
        <input
          value={nickname}
          onChange={onChangeNickname}
          placeholder="nickname"
        ></input>

        <div>
          <h3>
            이름 : <b>{name}</b>
          </h3>
          <h3>
            닉네임 : <b>{nickname}</b>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default InfoTestUseEffect;
