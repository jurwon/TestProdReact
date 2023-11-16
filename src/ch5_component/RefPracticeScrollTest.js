import React from "react";
import { useRef } from "react";
import styled from "styled-components";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
//ref속성으로 확인 많이 하는 종목 : 스크롤, input focjs
//div 태그로 css 특정 영역 만들어서
//1) 그라데이션 박스 크기 이용해서 스크롤 붙이기
//2) 스크롤에 ref속성 달아서 맨 아래로 가기
//3)

const RefPracticeScrollTest = () => {
  //box영역을 선택하기 위한 ref 설정1
  const box = useRef(null);

  const StyleBox = styled.div`
    border: 1px solid black;
    height: 300px;
    width: 100%;
    overflow: auto;
    position: relative;
  `;

  const InnerStyle = styled.div`
    width: 100%;
    height: 700px;
    background: linear-gradient(#aedefc, #fa7070);
  `;

  return (
    <div>
      <StyleBox ref={box}>
        <InnerStyle></InnerStyle>
      </StyleBox>
      <br />
      <Button title="맨 밑으로" onClick={() => (box.current.scrollTop = 350)}>
        ⏬
      </Button>
      <Button title="맨 위로" onClick={() => (box.current.scrollTop = 0)}>
        ⏫
      </Button>
    </div>
  );
};

export default RefPracticeScrollTest;
