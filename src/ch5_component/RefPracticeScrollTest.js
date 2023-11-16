import React from "react";
import { useRef } from "react";
import styled from "styled-components";
import { Button } from "antd";

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
